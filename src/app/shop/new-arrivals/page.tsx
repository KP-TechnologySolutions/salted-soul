import { Metadata } from 'next'
import ProductGrid from '@/components/product/ProductGrid'
import { products } from '@/data/products'

export const metadata: Metadata = {
  title: 'New Arrivals | Salted Soul',
  description: 'The latest faith-forward coastal apparel from Salted Soul — fresh designs to spark new conversations.',
}

export default function NewArrivalsPage() {
  const items = products.filter((p) => p.newArrival)

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-sand py-16">
        <div className="container-wide text-center">
          <h1 className="heading-primary mb-6">New arrivals</h1>
          <p className="text-xl text-charcoal-600 max-w-2xl mx-auto">
            Fresh off the press — our newest coastal Christian designs, ready to start conversations.
          </p>
        </div>
      </section>

      <section className="section-padding">
        {items.length > 0 ? (
          <ProductGrid products={items} />
        ) : (
          <p className="container-wide text-center text-charcoal-600">
            New drops are on the way — check back soon.
          </p>
        )}
      </section>
    </div>
  )
}
