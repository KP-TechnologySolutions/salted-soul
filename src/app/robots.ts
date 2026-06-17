import type { MetadataRoute } from 'next'

// Required for `output: export` (static site).
export const dynamic = 'force-static'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://saltedsoulsc.com/sitemap.xml',
  }
}
