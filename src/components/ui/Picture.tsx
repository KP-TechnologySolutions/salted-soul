// Responsive <picture> backed by scripts/derive-images.mjs.
//
// next/image is a passthrough on this static export (images.unoptimized), so
// this does its job: AVIF/WebP with a JPEG/PNG fallback, a real srcset, and
// intrinsic width/height so the layout is reserved before bytes arrive.
// No hooks: safe inside client components.
import React from 'react'
import manifest from '@/data/image-manifest.json'

type Entry = {
  width: number
  height: number
  fallbackType: 'jpg' | 'png'
  fallback: string
  srcset: Record<string, string>
}

const images = manifest as Record<string, Entry>
export type PictureKey = keyof typeof manifest

type Props = {
  name: PictureKey
  alt: string
  /** Slot width hint for the browser's srcset pick. Must match the CSS. */
  sizes: string
  className?: string
  style?: React.CSSProperties
  /** Above the fold: eager + fetchpriority=high. Everything else lazy. */
  priority?: boolean
  /** Eager without the high-priority hint (e.g. header logo). */
  eager?: boolean
  /** Art direction: a different crop for narrow screens (same alt). */
  mobile?: { name: PictureKey; media: string; sizes: string }
}

export default function Picture({ name, alt, sizes, className, style, priority, eager, mobile }: Props) {
  const e = images[name]
  const m = mobile ? images[mobile.name] : undefined
  return (
    <picture>
      {m && mobile && (
        <>
          <source media={mobile.media} type="image/avif" srcSet={m.srcset.avif} sizes={mobile.sizes} width={m.width} height={m.height} />
          <source media={mobile.media} type="image/webp" srcSet={m.srcset.webp} sizes={mobile.sizes} width={m.width} height={m.height} />
          <source media={mobile.media} srcSet={m.srcset[m.fallbackType]} sizes={mobile.sizes} width={m.width} height={m.height} />
        </>
      )}
      <source type="image/avif" srcSet={e.srcset.avif} sizes={sizes} />
      <source type="image/webp" srcSet={e.srcset.webp} sizes={sizes} />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={e.fallback}
        srcSet={e.srcset[e.fallbackType]}
        sizes={sizes}
        alt={alt}
        width={e.width}
        height={e.height}
        className={className}
        style={style}
        loading={priority || eager ? 'eager' : 'lazy'}
        decoding="async"
        // React 18 only passes the lowercase attribute through to the DOM.
        {...(priority ? { fetchpriority: 'high' } : {})}
      />
    </picture>
  )
}
