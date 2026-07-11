import { Metadata } from 'next'
import ProductGrid from '@/components/product/ProductGrid'
import ComingSoon from '@/components/ui/ComingSoon'
import { products } from '@/data/products'

export const metadata: Metadata = {
  title: 'Sale | Salted Soul',
  description: 'Faith-forward coastal apparel on sale — grab your favorites while they last.',
}

export default function SalePage() {
  const items = products.filter((p) => p.onSale)

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-sand py-16">
        <div className="container-wide text-center">
          <h1 className="heading-primary mb-6">Sale</h1>
          <p className="text-xl text-charcoal-600 max-w-2xl mx-auto">
            Limited-time pricing on select pieces — same quality and Kingdom impact, for less.
          </p>
        </div>
      </section>

      <section className="section-padding">
        {items.length > 0 ? (
          <ProductGrid products={items} />
        ) : (
          <ComingSoon
            title="No sales right now"
            message="Everything is at everyday pricing today. New designs and seasonal offers are on the way — check out our handcrafted hats in the meantime."
          />
        )}
      </section>
    </div>
  )
}
