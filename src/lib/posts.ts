import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { marked } from 'marked'

// "Seasoned" — the Salted Soul content section. Posts are Markdown files in
// content/seasoned/*.md with frontmatter (title, excerpt, date, coverImage…).
// Anyone can add a post by dropping in a new .md file; the site picks it up on
// the next build. Read at build time (static export), so fs access is fine.

const POSTS_DIR = path.join(process.cwd(), 'content/seasoned')

export interface PostMeta {
  slug: string
  title: string
  excerpt: string
  date: string
  readingTime: string
  coverImage: string
  coverAlt: string
  keywords: string[]
}

export interface Post extends PostMeta {
  contentHtml: string
}

function readPostFile(slug: string) {
  const raw = fs.readFileSync(path.join(POSTS_DIR, `${slug}.md`), 'utf8')
  return matter(raw)
}

export function getPostSlugs(): string[] {
  if (!fs.existsSync(POSTS_DIR)) return []
  return fs
    .readdirSync(POSTS_DIR)
    .filter((f) => f.endsWith('.md'))
    .map((f) => f.replace(/\.md$/, ''))
}

function metaFrom(slug: string, data: Record<string, unknown>, content: string): PostMeta {
  const words = content.trim().split(/\s+/).filter(Boolean).length
  return {
    slug,
    title: (data.title as string) ?? slug,
    excerpt: (data.excerpt as string) ?? '',
    date: (data.date as string) ?? '',
    readingTime: `${Math.max(1, Math.round(words / 200))} min read`,
    coverImage: (data.coverImage as string) ?? '/saltedsoulhero.webp',
    coverAlt: (data.coverAlt as string) ?? (data.title as string) ?? '',
    keywords: (data.keywords as string[]) ?? [],
  }
}

export function getAllPosts(): PostMeta[] {
  return getPostSlugs()
    .map((slug) => {
      const { data, content } = readPostFile(slug)
      return metaFrom(slug, data, content)
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1))
}

export function getPostBySlug(slug: string): Post {
  const { data, content } = readPostFile(slug)
  const meta = metaFrom(slug, data, content)
  const contentHtml = marked.parse(content, { async: false }) as string
  return { ...meta, contentHtml }
}

export function formatDate(iso: string): string {
  if (!iso) return ''
  const d = new Date(iso + 'T00:00:00')
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
}
