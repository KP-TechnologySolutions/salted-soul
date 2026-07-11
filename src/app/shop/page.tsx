import { Metadata } from 'next'
import ProductGrid from '@/components/product/ProductGrid'
import { products } from '@/data/products'

export const metadata: Metadata = {
  title: 'Shop Christian Apparel | Salted Soul',
  description: 'Shop our complete collection of Christian apparel with coastal soul. T-shirts, hoodies, and accessories designed to share your faith with authentic style.',
  keywords: ['christian apparel', 'faith clothing', 'christian t-shirts', 'coastal christian', 'ministry apparel'],
}

export default function ShopPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-sand py-16">
        <div className="container-wide text-center">
          <h1 className="heading-primary mb-6">
            Shop Christian apparel
          </h1>
          <p className="text-xl text-charcoal-600 max-w-2xl mx-auto">
            Discover our complete collection of faith-forward apparel designed to spark 
            meaningful conversations about Jesus with authentic coastal soul.
          </p>
        </div>
      </section>

      {/* Products */}
      <section className="section-padding">
        <ProductGrid products={products} />
      </section>

      {/* Value Propositions */}
      <section className="section-padding-sm bg-gray-50">
        <div className="container-wide">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-ocean-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="font-semibold text-charcoal-900 mb-2">Free Shipping Over $70</h3>
              <p className="text-charcoal-600 text-sm">
                Enjoy free shipping on all orders over $70. Fast, reliable delivery to your door.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-ocean-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="font-semibold text-charcoal-900 mb-2">30-Day Returns</h3>
              <p className="text-charcoal-600 text-sm">
                Not completely satisfied? Return any item within 30 days for a full refund.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: 'var(--gold)' }}>
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-charcoal-900 mb-2">Kingdom Impact</h3>
              <p className="text-charcoal-600 text-sm">
                10% of profits support local ministries and church plants. Your purchase builds the Kingdom.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}