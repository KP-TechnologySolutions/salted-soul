import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sustainability & Impact',
  description: 'How Salted Soul cares for people and creation — from materials and printing to our ministry give-back.',
}

export default function SustainabilityPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-sand py-16">
        <div className="container-narrow text-center">
          <h1 className="heading-primary mb-4">Sustainability &amp; impact</h1>
          <p className="text-xl text-charcoal-600">
            Caring for the people who make our gear, the coast we love, and the Kingdom we serve.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-narrow space-y-8 text-charcoal-700 leading-relaxed">
          <div>
            <h2 className="heading-secondary mb-3">Quality that lasts</h2>
            <p>
              The most sustainable shirt is the one you keep wearing. We choose premium, durable blanks and
              long-lasting prints so your favorites stay in rotation for years — not landfills.
            </p>
          </div>

          <div>
            <h2 className="heading-secondary mb-3">Thoughtful printing</h2>
            <p>
              We print on demand where we can to reduce overproduction and waste, and we&rsquo;re continually
              working with our suppliers toward more responsible inks and materials.
            </p>
          </div>

          <div>
            <h2 className="heading-secondary mb-3">Kingdom give-back</h2>
            <p>
              Impact isn&rsquo;t only environmental. 10% of our profits support coastal ministries and church
              plants — so every purchase invests in people, not just product.
            </p>
          </div>

          <div className="bg-ocean-50 border border-ocean-100 rounded-2xl p-6">
            <p className="text-charcoal-700">
              We&rsquo;re a small, growing brand and we won&rsquo;t pretend to be perfect. We&rsquo;re committed to
              improving with every drop — and to being honest about where we&rsquo;re headed.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
