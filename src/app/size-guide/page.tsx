import { Metadata } from 'next'
import SizeChart from '@/components/size/SizeChart'

export const metadata: Metadata = {
  title: 'Size Guide | Salted Soul',
  description: 'Find your perfect fit with our interactive size guide for Christian apparel. Detailed measurements for all our shirts and accessories.',
}

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
            Find your perfect fit for sharing your faith in comfort and style.
            Our apparel runs true to size with a comfortable, relaxed fit.
          </p>
        </div>
      </section>

      {/* Interactive Size Charts */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="mb-16">
            <SizeChart />
          </div>

          {/* How to Measure */}
          <div className="grid lg:grid-cols-2 gap-16 mb-16">
            <div>
              <h2 className="heading-secondary mb-8">How to Measure</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-ocean-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-semibold text-sm">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-charcoal-900 mb-2">Chest Width</h3>
                    <p className="text-charcoal-600">
                      Measure across the chest from armpit to armpit, laying the garment flat.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-ocean-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-semibold text-sm">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-charcoal-900 mb-2">Body Length</h3>
                    <p className="text-charcoal-600">
                      Measure from the highest point of the shoulder to the bottom hem.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-ocean-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-semibold text-sm">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-charcoal-900 mb-2">Shoulder Width</h3>
                    <p className="text-charcoal-600">
                      Measure across the shoulders from seam to seam.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-ocean-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-semibold text-sm">4</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-charcoal-900 mb-2">Sleeve Length</h3>
                    <p className="text-charcoal-600">
                      Measure from the shoulder seam to the end of the sleeve cuff.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="heading-secondary mb-8">Fit Guidelines</h2>
              <div className="space-y-6">
                <div className="bg-ocean-50 rounded-xl p-6 border border-ocean-100">
                  <h3 className="font-semibold text-ocean-800 mb-3">True to Size</h3>
                  <p className="text-ocean-700">
                    Our apparel runs true to size. If you're between sizes, we recommend sizing up
                    for a more relaxed fit.
                  </p>
                </div>

                <div className="bg-sand-50 rounded-xl p-6 border border-sand-200">
                  <h3 className="font-semibold text-charcoal-900 mb-3">Ministry Fit</h3>
                  <p className="text-charcoal-700">
                    Our shirts are designed for active ministry - comfortable enough for service
                    projects, stylish enough for coffee shop conversations.
                  </p>
                </div>

                <div className="bg-ocean-50 rounded-xl p-6 border border-ocean-100">
                  <h3 className="font-semibold text-ocean-800 mb-3">Coastal Comfort</h3>
                  <p className="text-ocean-700">
                    Relaxed fit inspired by beach culture - not too tight, not too loose.
                    Perfect for Charleston, SC humidity and coastal adventures.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Size Exchange Policy */}
          <div className="bg-surface rounded-2xl p-8">
            <h2 className="heading-secondary mb-6">Size Exchange Promise</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-charcoal-900 mb-3">Free Size Exchanges</h3>
                <p className="text-charcoal-600 mb-4">
                  Ordered the wrong size? No problem! We offer free size exchanges within 30 days
                  for unworn items with tags attached.
                </p>
                <ul className="text-sm text-charcoal-600 space-y-1">
                  <li>• Free return shipping label included</li>
                  <li>• Fast processing - usually 2-3 business days</li>
                  <li>• Available for all sizes in stock</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-charcoal-900 mb-3">Still Not Sure?</h3>
                <p className="text-charcoal-600 mb-4">
                  Contact our team for personalized sizing advice. We're here to help you
                  find the perfect fit for sharing your faith.
                </p>
                <a
                  href="/contact"
                  className="inline-flex items-center text-ocean-600 hover:text-ocean-700 font-medium"
                >
                  Get Sizing Help
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
