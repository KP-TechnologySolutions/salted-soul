import type { Metadata } from 'next'

// Per-page SEO metadata.
//
// Next merges metadata shallowly: a page that sets no `openGraph` inherits the
// layout's whole block, including og:url = the homepage. Facebook then builds
// the share card for the homepage instead of the page being shared. Every page
// builds its metadata here so canonical, og:url and the share title always
// point at the page itself.
//
// `title` is the bare page title; the layout's template adds "| Salted Soul"
// to <title>, so never include the brand suffix here.

const SITE_NAME = 'Salted Soul'

const DEFAULT_IMAGE = {
  url: '/og-image.jpg',
  width: 1200,
  height: 630,
  alt: 'Salted Soul',
}

type OgImage = { url: string; width?: number; height?: number; alt?: string }

export function pageMetadata({
  path,
  title,
  description,
  keywords,
  type = 'website',
  images,
}: {
  /** Site path with trailing slash, e.g. '/shop/hats/' */
  path: string
  title: string
  description: string
  keywords?: string[]
  type?: 'website' | 'article'
  images?: OgImage[]
}): Metadata {
  const shareTitle = `${title} | ${SITE_NAME}`
  const ogImages = images && images.length > 0 ? images : [DEFAULT_IMAGE]
  return {
    title,
    description,
    ...(keywords && { keywords }),
    alternates: { canonical: path },
    openGraph: {
      type,
      locale: 'en_US',
      siteName: SITE_NAME,
      url: path,
      title: shareTitle,
      description,
      images: ogImages,
    },
    twitter: {
      card: 'summary_large_image',
      title: shareTitle,
      description,
      images: ogImages.map((i) => i.url),
    },
  }
}
