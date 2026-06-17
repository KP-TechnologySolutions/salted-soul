import { Metadata } from 'next'

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
          <p className="text-xl text-charcoal-600">Love it or send it back — no stress.</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-narrow space-y-8 text-charcoal-700 leading-relaxed">
          <div className="bg-ocean-50 border border-ocean-100 rounded-2xl p-6">
            <h2 className="font-semibold text-charcoal-900 mb-2">30-day promise</h2>
            <p className="text-charcoal-600">
              Return or exchange any unworn item with tags attached within 30 days of delivery. Size exchanges
              ship free.
            </p>
          </div>

          <div>
            <h2 className="heading-secondary mb-3">How it works</h2>
            <ol className="list-decimal pl-5 space-y-2">
              <li>Email us with your order number and what you&rsquo;d like to return or exchange.</li>
              <li>We&rsquo;ll send a prepaid return label (free for size exchanges).</li>
              <li>Drop it in the mail with the item unworn and tags attached.</li>
              <li>We process refunds and exchanges within 2–3 business days of receiving your item.</li>
            </ol>
          </div>

          <div>
            <h2 className="heading-secondary mb-3">Conditions</h2>
            <p>
              Items must be unworn, unwashed, and have original tags attached. Refunds are issued to your original
              payment method. Sale items may be eligible for exchange or store credit — just ask.
            </p>
          </div>

          <div>
            <h2 className="heading-secondary mb-3">Start a return</h2>
            <p>
              Email{' '}
              <a href="mailto:mark@saltedsoulsc.com" className="text-ocean-600 hover:text-ocean-700 font-medium">
                mark@saltedsoulsc.com
              </a>{' '}
              or use our{' '}
              <a href="/contact" className="text-ocean-600 hover:text-ocean-700 font-medium">contact form</a>{' '}
              and we&rsquo;ll take it from there.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
