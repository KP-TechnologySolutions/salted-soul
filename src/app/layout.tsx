import type { Metadata } from 'next'
import { Fraunces, Outfit } from 'next/font/google'
import './globals.css'
import SimpleHeader from '@/components/layout/SimpleHeader'
import Footer from '@/components/layout/Footer'
import { CartProvider } from '@/lib/cart-context'

// Display serif — warm, editorial, coastal character for headlines.
const fraunces = Fraunces({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-display',
  axes: ['opsz', 'SOFT'],
})

// Body/UI sans — clean and modern.
const outfit = Outfit({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
})

export const metadata: Metadata = {
  title: {
    template: '%s | Salted Soul',
    default: 'Salted Soul - Christian Apparel with Soul & Salt',
  },
  description: 'Christian apparel with authentic surf soul. Bold faith meets coastal style in designs that spark real conversations about Jesus. Faith-rooted, premium quality, Kingdom impact.',
  keywords: [
    'christian apparel',
    'faith clothing', 
    'christian t-shirts',
    'surf christian',
    'coastal christian',
    'ministry apparel',
    'gospel shirts',
    'jesus apparel',
    'christian lifestyle',
    'faith fashion'
  ],
  authors: [{ name: 'Salted Soul' }],
  creator: 'Salted Soul',
  publisher: 'Salted Soul',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  // Staging domain so link-preview (og:image) URLs resolve on the live site.
  // Change to https://saltedsoulsc.com once that domain is pointed here.
  metadataBase: new URL('https://saltedsoulsc.dreamhosters.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://saltedsoulsc.dreamhosters.com',
    siteName: 'Salted Soul',
    title: 'Salted Soul - Christian Apparel with Soul & Salt',
    description: 'Christian apparel with authentic surf soul. Bold faith meets coastal style in designs that spark real conversations about Jesus.',
    images: [
      {
        url: '/og-image.jpg', // Add this image to public folder
        width: 1200,
        height: 630,
        alt: 'Salted Soul - Christian Apparel',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@saltedsoul',
    creator: '@saltedsoul',
    title: 'Salted Soul - Christian Apparel with Soul & Salt',
    description: 'Christian apparel with authentic surf soul. Bold faith meets coastal style.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`scroll-smooth ${fraunces.variable} ${outfit.variable}`}>
      <body className="antialiased">
        {/* Skip to main content link for accessibility */}
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-ocean-600 text-white px-4 py-2 rounded-lg z-50"
        >
          Skip to main content
        </a>
        
        <CartProvider>
          <SimpleHeader />
          
          <main id="main-content" className="min-h-screen">
            {children}
          </main>

          <Footer />
        </CartProvider>

        {/* Schema.org structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Salted Soul',
              description: 'Christian apparel with authentic surf soul',
              url: 'https://saltedsoulsc.com',
              logo: 'https://saltedsoulsc.com/salted_soul_logo.webp',
              contactPoint: {
                '@type': 'ContactPoint',
                contactType: 'Customer Service',
                email: 'mark@saltedsoulsc.com',
              },
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Charleston',
                addressRegion: 'SC',
                addressCountry: 'US',
              },
            }),
          }}
        />
      </body>
    </html>
  )
}