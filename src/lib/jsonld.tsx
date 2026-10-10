// Structured data helpers (schema.org JSON-LD), rendered server-side into the
// static HTML.
import React from 'react'

export const SITE = 'https://saltedsoulsc.com'

export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      // `<` escaped so a title containing "</script>" can't break out.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }}
    />
  )
}

/** items: [name, site path with trailing slash], Home is added first. */
export function breadcrumbJsonLd(items: [string, string][]) {
  const all: [string, string][] = [['Home', '/'], ...items]
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: all.map(([name, path], i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name,
      item: `${SITE}${path}`,
    })),
  }
}
