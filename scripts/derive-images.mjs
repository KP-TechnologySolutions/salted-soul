#!/usr/bin/env node
/**
 * derive-images.mjs: responsive image ladder for the static export.
 *
 * `output: 'export'` forces images.unoptimized, so next/image ships the
 * original file to every device (a 2048px logo for a 60px header slot, a
 * 1.7MB PNG on the homepage). This script pre-builds properly sized AVIF /
 * WebP / JPEG-or-PNG rungs into public/img/ and writes a manifest that
 * <Picture> reads for srcset + intrinsic width/height (keeps CLS at 0).
 *
 * Run by hand when a source image changes, then commit public/img/ and the
 * manifest:   node scripts/derive-images.mjs
 *
 * Sources that are only used through this ladder live in assets-src/ so the
 * multi-MB originals never get published. Filenames carry a content hash, so
 * .htaccess can cache /img/ for a year.
 *
 * Never upscales: widths above the source width are dropped.
 */
import { createHash } from 'node:crypto'
import fs from 'node:fs/promises'
import path from 'node:path'
import sharp from 'sharp'

const ROOT = process.cwd()
const OUT_DIR = path.join(ROOT, 'public/img')
const MANIFEST = path.join(ROOT, 'src/data/image-manifest.json')

// key -> source + the widths its slots actually need (see sizes in the JSX).
const IMAGES = [
  // Homepage hero background. Desktop: full-bleed landscape.
  { key: 'hero', src: 'public/saltedsoulhero.webp', widths: [960, 1280, 1536] },
  // Phones: the hero is portrait (100svh), so object-fit: cover only ever
  // shows the middle of the landscape photo. Ship just that 3:4 centre crop.
  { key: 'hero-mobile', src: 'public/saltedsoulhero.webp', crop: { width: 768, height: 1024 }, widths: [512, 768] },
  // Circle logo: header slot is 60px, homepage hero 130px (phone) / 300px.
  { key: 'logo', src: 'public/salted_soul_logo.webp', widths: [120, 180, 260, 400, 600] },
  // Footer logo slot is 80px wide.
  { key: 'logo-footer', src: 'public/logo-original.webp', widths: [160, 240] },
  // Homepage Charleston Snapback feature (half column desktop, full width phone).
  { key: 'charleston-snapback', src: 'assets-src/CharlestonSnapback.png', widths: [400, 600, 800, 1024] },
  // /shop/hats/ lineup banner (LCP there). Original stays in public/ (blog cover).
  { key: 'hats-lineup', src: 'public/salted-soul-hats-charleston.webp', widths: [600, 900, 1200, 1600] },
  // Homepage lifestyle gallery cards (~370x400 desktop, ~360x400 phone, cover).
  { key: 'rainbow-row', src: 'assets-src/lifestyle/rainbow-row-salted-soul.webp', widths: [400, 600, 800, 1200] },
  { key: 'harbor', src: 'assets-src/lifestyle/charleston-lifestyle-2.png', widths: [400, 600, 736] },
  { key: 'southern-faith', src: 'assets-src/lifestyle/chatgpt-charleston-1.png', widths: [400, 600, 800] },
]

const enc = {
  avif: (p) => p.avif({ quality: 55, effort: 6 }),
  webp: (p) => p.webp({ quality: 74, effort: 5 }),
  jpg: (p) => p.jpeg({ quality: 78, mozjpeg: true }),
  png: (p) => p.png({ compressionLevel: 9, palette: true, quality: 90 }),
}

async function main() {
  await fs.rm(OUT_DIR, { recursive: true, force: true })
  await fs.mkdir(OUT_DIR, { recursive: true })
  const manifest = {}

  for (const img of IMAGES) {
    const file = path.join(ROOT, img.src)
    const buf = await fs.readFile(file)
    const hash = createHash('sha1').update(buf).update(JSON.stringify(img)).digest('hex').slice(0, 8)

    let base = sharp(buf).rotate()
    let meta = await sharp(buf).metadata()
    let srcW = meta.width
    let srcH = meta.height
    if (img.crop) {
      const left = Math.round((srcW - img.crop.width) / 2)
      const top = Math.round((srcH - img.crop.height) / 2)
      const cropped = await base.extract({ left, top, width: img.crop.width, height: img.crop.height }).toBuffer()
      base = sharp(cropped)
      srcW = img.crop.width
      srcH = img.crop.height
    }
    const { isOpaque } = await base.clone().stats()
    const fallback = isOpaque ? 'jpg' : 'png'
    const formats = ['avif', 'webp', fallback]

    const widths = img.widths.filter((w) => w <= srcW)
    if (!widths.length) widths.push(srcW)

    const files = {}
    for (const w of widths) {
      const resized = base.clone().resize({ width: w, withoutEnlargement: true })
      for (const f of formats) {
        const name = `${img.key}-${hash}-${w}.${f}`
        const info = await enc[f](resized.clone()).toFile(path.join(OUT_DIR, name))
        ;(files[f] ??= []).push({ w, url: `/img/${name}`, bytes: info.size })
      }
    }
    const largest = widths[widths.length - 1]
    manifest[img.key] = {
      width: srcW,
      height: srcH,
      fallbackType: fallback,
      fallback: `/img/${img.key}-${hash}-${largest}.${fallback}`,
      srcset: Object.fromEntries(
        Object.entries(files).map(([f, list]) => [f, list.map((x) => `${x.url} ${x.w}w`).join(', ')]),
      ),
    }
    const summary = Object.entries(files)
      .map(([f, list]) => `${f} ${list.map((x) => Math.round(x.bytes / 1024) + 'K').join('/')}`)
      .join('  ')
    console.log(`${img.key.padEnd(20)} ${srcW}x${srcH}  ${summary}`)
  }

  await fs.writeFile(MANIFEST, JSON.stringify(manifest, null, 2) + '\n')
  console.log(`wrote ${path.relative(ROOT, MANIFEST)}`)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
