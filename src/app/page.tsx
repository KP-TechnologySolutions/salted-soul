import type { Metadata } from 'next'
import HomePage from '@/components/home/HomePage'

// Server wrapper so the homepage can carry its own metadata (the page body is
// a client component). Self-canonical: https://saltedsoulsc.com/
const title = 'Salted Soul - Christian Hats with Soul & Salt'
const description =
  'Christian trucker hats with authentic, faith-rooted designs from Charleston, SC. Coastal style that sparks real conversations about Jesus. 10% of profits support local ministries.'

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Salted Soul',
    url: '/',
    title,
    description,
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Salted Soul' }],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['/og-image.jpg'],
  },
}

export default function Page() {
  return <HomePage />
}
