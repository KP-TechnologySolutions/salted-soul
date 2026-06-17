import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Shipping Information',
  description: 'Shipping rates, processing times, and delivery details for Salted Soul orders.',
}

export default function ShippingPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-sand py-16">
        <div className="container-narrow text-center">
          <h1 className="heading-primary mb-4">Shipping information</h1>
          <p className="text-xl text-charcoal-600">Getting your faith-forward gear to your door.</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-narrow space-y-8 text-charcoal-700 leading-relaxed">
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-ocean-50 border border-ocean-100 rounded-2xl p-6">
              <h2 className="font-semibold text-charcoal-900 mb-2">Free shipping over $75</h2>
              <p className="text-charcoal-600">
                U.S. orders over $75 ship free. Orders under $75 are charged a flat rate calculated at checkout.
              </p>
            </div>
            <div className="bg-ocean-50 border border-ocean-100 rounded-2xl p-6">
              <h2 className="font-semibold text-charcoal-900 mb-2">Fast processing</h2>
              <p className="text-charcoal-600">
                Orders are packed and shipped within 1–2 business days, with tracking sent to your email.
              </p>
            </div>
          </div>

          <div>
            <h2 className="heading-secondary mb-3">Delivery times</h2>
            <p>
              Most U.S. orders arrive within 3–7 business days after they ship, depending on your location.
              Delivery times are estimates and may vary during holidays or high-volume drops.
            </p>
          </div>

          <div>
            <h2 className="heading-secondary mb-3">Where we ship</h2>
            <p>
              We currently ship throughout the United States. Have an international request or a bulk order for your
              church or ministry? <a href="/contact" className="text-ocean-600 hover:text-ocean-700 font-medium">Reach out</a> and
              we&rsquo;ll do our best to help.
            </p>
          </div>

          <div>
            <h2 className="heading-secondary mb-3">Order issues</h2>
            <p>
              If your tracking stalls or a package arrives damaged, email{' '}
              <a href="mailto:mark@saltedsoulsc.com" className="text-ocean-600 hover:text-ocean-700 font-medium">
                mark@saltedsoulsc.com
              </a>{' '}
              and we&rsquo;ll make it right.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
