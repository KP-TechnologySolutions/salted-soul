import { Metadata } from 'next'
import Link from 'next/link'
import { pageMetadata } from '@/lib/seo'

export const metadata: Metadata = pageMetadata({
  path: '/size-guide/',
  title: 'Size Guide',
  description: 'Sizing for Salted Soul. Our Richardson 112 trucker hats are one size fits most, with an adjustable snapback.',
})

// Hats only. These facts come from the product description in Shopify
// (Richardson 112). No tee/hoodie charts until those products exist; when
// tees launch, add their real measurements from the supplier here.
const HAT_FIT = [
  { label: 'Size', value: 'One size fits most' },
  { label: 'Closure', value: 'Adjustable snapback' },
  { label: 'Style', value: 'Richardson 112 trucker hat' },
  { label: 'Fit', value: 'Structured six-panel, mid-pro profile' },
  { label: 'Bill', value: 'Precurved' },
]

export default function SizeGuidePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-sand py-20">
        <div className="container-wide text-center">
          <h1 className="heading-primary mb-6">
            Size guide
          </h1>
          <p className="text-xl text-charcoal-600 max-w-2xl mx-auto">
            Every Salted Soul hat is one size fits most, with an adjustable snapback.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="heading-secondary mb-8">Hat fit</h2>
              <dl className="bg-white border border-[var(--line)] rounded-2xl shadow-sm divide-y divide-[var(--line)]">
                {HAT_FIT.map((row) => (
                  <div key={row.label} className="flex flex-wrap justify-between gap-2 px-6 py-4">
                    <dt className="font-semibold text-charcoal-900">{row.label}</dt>
                    <dd className="text-charcoal-600">{row.value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div>
              <h2 className="heading-secondary mb-8">Getting the right fit</h2>
              <div className="space-y-6">
                <div className="bg-ocean-50 rounded-xl p-6 border border-ocean-100">
                  <h3 className="font-semibold text-ocean-800 mb-3">Adjust the snapback</h3>
                  <p className="text-ocean-700">
                    Loosen or tighten the snap strap at the back until the hat sits comfortably.
                  </p>
                </div>

                <div className="bg-sand-50 rounded-xl p-6 border border-sand-200">
                  <h3 className="font-semibold text-charcoal-900 mb-3">Still not sure?</h3>
                  <p className="text-charcoal-700 mb-4">
                    Send us a note and we&apos;ll help. Returns follow our{' '}
                    <Link href="/returns" className="text-ocean-600 hover:text-ocean-700 underline">
                      return policy
                    </Link>
                    .
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center text-ocean-600 hover:text-ocean-700 font-medium"
                  >
                    Get sizing help
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
