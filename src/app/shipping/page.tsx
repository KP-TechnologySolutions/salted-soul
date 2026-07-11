import { Metadata } from 'next'
import Reveal from '@/components/ui/Reveal'
import ShippingCalc from '@/components/content/ShippingCalc'

export const metadata: Metadata = {
  title: 'Shipping Information',
  description: 'Shipping rates, processing times, and delivery details for Salted Soul orders.',
}

const steps = [
  { title: 'Order placed', detail: 'You get an instant confirmation by email.' },
  { title: 'Packed with care', detail: 'Hand-packed in 1 to 2 business days.' },
  { title: 'On its way', detail: 'Tracking lands in your inbox the moment it ships.' },
  { title: 'Delivered', detail: 'Most U.S. orders arrive in 3 to 7 business days.' },
]

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
        <div className="container-narrow space-y-16">
          <Reveal>
            <ShippingCalc />
          </Reveal>

          {/* Order journey */}
          <div>
            <Reveal>
              <h2 className="heading-secondary mb-10 text-center">From cart to doorstep</h2>
            </Reveal>
            <div className="relative">
              <div className="hidden sm:block absolute top-6 left-[12.5%] right-[12.5%] h-px bg-line" />
              <ol className="grid gap-10 sm:grid-cols-4">
                {steps.map((s, i) => (
                  <Reveal
                    as="li"
                    index={i}
                    key={s.title}
                    className="relative flex items-start gap-4 sm:flex-col sm:items-center sm:text-center sm:gap-4"
                  >
                    <div className="relative z-10 grid place-items-center w-12 h-12 rounded-full bg-ocean-500 text-white font-display font-semibold shadow-[var(--shadow-sm)]">
                      {i + 1}
                    </div>
                    <div>
                      <h3 className="font-semibold text-charcoal-900 mb-1">{s.title}</h3>
                      <p className="text-sm text-charcoal-600 leading-relaxed">{s.detail}</p>
                    </div>
                  </Reveal>
                ))}
              </ol>
            </div>
          </div>

          {/* Details */}
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
            <Reveal>
              <h2 className="text-xl font-semibold text-charcoal-900 mb-2">Free over $70</h2>
              <p className="text-charcoal-600 leading-relaxed">
                U.S. orders over $70 ship free. Orders under that are charged a flat rate calculated at checkout, so
                there are no surprises.
              </p>
            </Reveal>
            <Reveal index={1}>
              <h2 className="text-xl font-semibold text-charcoal-900 mb-2">Where we ship</h2>
              <p className="text-charcoal-600 leading-relaxed">
                We currently ship throughout the United States. Have an international or bulk ministry request?{' '}
                <a href="/contact" className="text-ocean-600 hover:text-ocean-700 font-medium">Reach out</a> and we
                will do our best to help.
              </p>
            </Reveal>
            <Reveal index={2}>
              <h2 className="text-xl font-semibold text-charcoal-900 mb-2">Tracking every step</h2>
              <p className="text-charcoal-600 leading-relaxed">
                A tracking link is emailed the moment your order ships, so you always know where it is.
              </p>
            </Reveal>
            <Reveal index={3}>
              <h2 className="text-xl font-semibold text-charcoal-900 mb-2">An issue with your order?</h2>
              <p className="text-charcoal-600 leading-relaxed">
                If tracking stalls or a package arrives damaged, email{' '}
                <a href="mailto:mark@saltedsoulsc.com" className="text-ocean-600 hover:text-ocean-700 font-medium">
                  mark@saltedsoulsc.com
                </a>{' '}
                and we will make it right.
              </p>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  )
}
