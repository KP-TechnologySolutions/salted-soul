import { Metadata } from 'next'
import Reveal from '@/components/ui/Reveal'
import ReturnFlow from '@/components/content/ReturnFlow'

export const metadata: Metadata = {
  title: 'Returns & Exchanges',
  description: 'Our 30-day return and free size-exchange policy for Salted Soul apparel.',
}

export default function ReturnsPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-sand py-16">
        <div className="container-narrow text-center">
          <h1 className="heading-primary mb-4">Returns &amp; exchanges</h1>
          <p className="text-xl text-charcoal-600">Love it or send it back, no stress.</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-narrow space-y-14">
          <Reveal>
            <div className="rounded-2xl bg-ocean-50 border border-ocean-100 p-6 sm:p-8 text-center">
              <p className="font-display text-3xl text-ocean-700 mb-1">30 days</p>
              <p className="text-charcoal-600">
                to return or exchange any unworn item with tags attached. Size exchanges ship free.
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

          <Reveal>
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
              <div>
                <h2 className="text-xl font-semibold text-charcoal-900 mb-2">The fine print</h2>
                <p className="text-charcoal-600 leading-relaxed">
                  Items must be unworn, unwashed, and have original tags attached. Refunds go back to your original
                  payment method. Sale items may be eligible for exchange or store credit, just ask.
                </p>
              </div>
              <div>
                <h2 className="text-xl font-semibold text-charcoal-900 mb-2">Ready to start?</h2>
                <p className="text-charcoal-600 leading-relaxed mb-4">
                  Email us and we will send your prepaid label right away.
                </p>
                <a href="mailto:mark@saltedsoulsc.com" className="btn btn-primary">Start a return</a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
