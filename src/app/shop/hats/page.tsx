import { Metadata } from 'next'
import ProductGrid from '@/components/product/ProductGrid'
import { products } from '@/data/products'

export const metadata: Metadata = {
  title: 'Christian Hats & Caps | Salted Soul',
  description: 'Shop our collection of Christian hats and caps. Trucker hats, snapbacks, and baseball caps designed to share your faith with coastal style.',
  keywords: ['christian hats', 'faith caps', 'christian trucker hats', 'christian snapbacks', 'ministry hats'],
}

export default function HatsPage() {
  // Filter products to only show hats
  const hatProducts = products.filter(product => product.category.slug === 'hats')

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-sand py-16">
        <div className="container-wide text-center">
          <h1 className="heading-primary mb-6">
            Christian hats &amp; caps
          </h1>
          <p className="text-xl text-charcoal-600 max-w-2xl mx-auto">
            Top off your faith with our collection of Christian hats and caps. 
            From trucker hats to snapbacks, each design sparks conversations about Jesus.
          </p>
        </div>
      </section>

      {/* Products */}
      <section className="section-padding">
        <ProductGrid products={hatProducts} />
      </section>

      {/* Hat Care Guide */}
      <section className="section-padding-sm bg-gray-50">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="heading-secondary mb-4">Hat Care Guide</h2>
            <p className="text-lg text-charcoal-600">
              Keep your faith hat looking fresh with these simple care tips.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-ocean-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5H9a2 2 0 00-2 2v12a4 4 0 004 4h6a2 2 0 002-2V7a2 2 0 00-2-2z" />
                </svg>
              </div>
              <h3 className="font-semibold text-charcoal-900 mb-2">Gentle Cleaning</h3>
              <p className="text-charcoal-600 text-sm">
                Spot clean with mild soap and cool water. Avoid harsh detergents that can fade colors.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-ocean-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-charcoal-900 mb-2">Air Dry</h3>
              <p className="text-charcoal-600 text-sm">
                Always air dry your hat. Heat from dryers can shrink and damage the fabric and shape.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-ocean-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="font-semibold text-charcoal-900 mb-2">Store Properly</h3>
              <p className="text-charcoal-600 text-sm">
                Store on a hat rack or stuff lightly with tissue to maintain shape. Avoid crushing under heavy items.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Scripture Section */}
      <section className="section-padding bg-gradient-ocean text-white">
        <div className="container-narrow text-center">
          <blockquote className="text-xl lg:text-2xl font-light italic mb-6 leading-relaxed">
            "Therefore, as God's chosen people, holy and dearly loved, clothe yourselves 
            with compassion, kindness, humility, gentleness and patience."
          </blockquote>
          <cite className="text-lg font-semibold text-yellow-300">— Colossians 3:12</cite>
          <p className="text-lg opacity-90 mt-4">
            Let your hat be a crown of faith, worn with humility and love.
          </p>
        </div>
      </section>
    </div>
  )
}