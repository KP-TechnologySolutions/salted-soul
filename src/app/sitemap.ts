import type { MetadataRoute } from 'next'

// Required for `output: export` (static site).
export const dynamic = 'force-static'

const BASE = 'https://saltedsoulsc.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/shop',
    '/shop/hats',
    '/shop/new-arrivals',
    '/shop/best-sellers',
    '/story',
    '/contact',
    '/size-guide',
    '/faq',
    '/shipping',
    '/returns',
    '/sustainability',
    '/accessibility',
    '/privacy',
    '/terms',
  ]

  return routes.map((path) => ({
    url: `${BASE}${path}`,
    lastModified: new Date('2026-06-17'),
    changeFrequency: path === '' ? 'weekly' : 'monthly',
    priority: path === '' ? 1 : 0.7,
  }))
}
