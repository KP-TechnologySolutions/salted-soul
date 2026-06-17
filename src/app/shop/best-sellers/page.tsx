import { Metadata } from 'next'
import ProductGrid from '@/components/product/ProductGrid'
import { products } from '@/data/products'

export const metadata: Metadata = {
  title: 'Best Sellers | Salted Soul',
  description: 'Our most-loved coastal Christian apparel — the pieces the Salted Soul family keeps coming back to.',
}

export default function BestSellersPage() {
  const items = products.filter((p) => p.bestseller)

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-sand py-16">
        <div className="container-wide text-center">
          <h1 className="heading-primary mb-6">Best sellers</h1>
          <p className="text-xl text-charcoal-600 max-w-2xl mx-auto">
            The designs our community loves most — proven conversation starters with coastal soul.
          </p>
        </div>
      </section>

      <section className="section-padding">
        {items.length > 0 ? (
          <ProductGrid products={items} />
        ) : (
          <p className="container-wide text-center text-charcoal-600">
            Our best sellers are being restocked — check back soon.
          </p>
        )}
      </section>
    </div>
  )
}
