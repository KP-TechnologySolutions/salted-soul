import type { MetadataRoute } from 'next'
import { getPostSlugs } from '@/lib/posts'
import { products } from '@/data/products'

// Required for `output: export` (static site).
export const dynamic = 'force-static'

const BASE = 'https://saltedsoulsc.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/shop',
    '/shop/hats',
    ...products.map((p) => `/shop/${p.category.slug}/${p.slug}`),
    '/shop/new-arrivals',
    '/shop/best-sellers',
    '/seasoned',
    ...getPostSlugs().map((slug) => `/seasoned/${slug}`),
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
    // trailingSlash: true — list the final URLs, not ones that redirect.
    url: `${BASE}${path}/`,
    lastModified: new Date(),
    changeFrequency: path === '' ? 'weekly' : 'monthly',
    priority: path === '' ? 1 : 0.7,
  }))
}
