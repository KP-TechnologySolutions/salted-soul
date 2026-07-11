import { Metadata } from 'next'
import Reveal from '@/components/ui/Reveal'
import ShippingCalc from '@/components/content/ShippingCalc'
import ShopifyPolicy from '@/components/content/ShopifyPolicy'
import { shopifyPolicies } from '@/data/policies.generated'

export const metadata: Metadata = {
  title: 'Shipping Information',
  description: 'Shipping rates, processing times, and delivery details for Salted Soul orders.',
}

export default function ShippingPage() {
  const policy = shopifyPolicies.shippingPolicy

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-sand py-16">
        <div className="container-narrow text-center">
          <h1 className="heading-primary mb-4">Shipping information</h1>
          <p className="text-xl text-charcoal-600">Getting your faith-forward gear to your door.</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-narrow space-y-14">
          {/* Interactive free-shipping ($70) progress — consistent with the policy below */}
          <Reveal>
            <ShippingCalc />
          </Reveal>

          {policy ? (
            /* Live shipping policy authored in Shopify (single source of truth) */
            <ShopifyPolicy policy={policy} />
          ) : (
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
              <Reveal>
                <h2 className="text-xl font-semibold text-charcoal-900 mb-2">Free over $70</h2>
                <p className="text-charcoal-600 leading-relaxed">
                  U.S. orders over $70 ship free. Orders under that are charged a flat rate at checkout.
                </p>
              </Reveal>
              <Reveal index={1}>
                <h2 className="text-xl font-semibold text-charcoal-900 mb-2">Tracking every step</h2>
                <p className="text-charcoal-600 leading-relaxed">
                  A tracking link is emailed the moment your order ships, so you always know where it is.
                </p>
              </Reveal>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
