import { Metadata } from 'next'
import Reveal from '@/components/ui/Reveal'
import ReturnFlow from '@/components/content/ReturnFlow'
import ShopifyPolicy from '@/components/content/ShopifyPolicy'
import { shopifyPolicies } from '@/data/policies.generated'

export const metadata: Metadata = {
  title: 'Returns & Refunds',
  description: 'Salted Soul return and refund policy — how to request a return and get refunded.',
}

export default function ReturnsPage() {
  const policy = shopifyPolicies.refundPolicy

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-sand py-16">
        <div className="container-narrow text-center">
          <h1 className="heading-primary mb-4">Returns &amp; refunds</h1>
          <p className="text-xl text-charcoal-600">Love it or send it back, no stress.</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-narrow">
          {policy ? (
            /* Live refund policy authored in Shopify (single source of truth) */
            <ShopifyPolicy policy={policy} />
          ) : (
            <div className="space-y-14">
              <Reveal>
                <div className="rounded-2xl bg-ocean-50 border border-ocean-100 p-6 sm:p-8 text-center">
                  <p className="font-display text-3xl text-ocean-700 mb-1">30 days</p>
                  <p className="text-charcoal-600">
                    to return any unworn item with tags attached, in original condition.
                  </p>
                </div>
              </Reveal>
              <Reveal>
                <div>
                  <h2 className="heading-secondary mb-2">How it works</h2>
                  <p className="text-charcoal-600 mb-8">Pick what you need below and follow the steps.</p>
                  <ReturnFlow />
                </div>
              </Reveal>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
