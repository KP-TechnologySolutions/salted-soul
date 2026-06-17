import { Metadata } from 'next'
import Reveal from '@/components/ui/Reveal'
import MinistryImpact from '@/components/content/MinistryImpact'

export const metadata: Metadata = {
  title: 'Sustainability & Impact',
  description: 'How Salted Soul cares for people and creation, from materials and printing to our ministry give-back.',
}

const principles = [
  {
    title: 'Quality that lasts',
    body: 'The most sustainable shirt is the one you keep wearing. We choose premium, durable blanks and long-lasting prints so your favorites stay in rotation for years, not landfills.',
  },
  {
    title: 'Thoughtful printing',
    body: 'We print on demand where we can to cut overproduction and waste, and we keep working with our suppliers toward more responsible inks and materials.',
  },
  {
    title: 'People over product',
    body: 'Impact is not only environmental. Every order helps fund coastal ministries and the people doing the work on the ground.',
  },
]

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
        <div className="container-narrow space-y-16">
          <Reveal>
            <MinistryImpact />
          </Reveal>

          <div className="space-y-12">
            {principles.map((p, i) => (
              <Reveal key={p.title} index={i}>
                <div className="grid sm:grid-cols-[auto_1fr] gap-x-6 gap-y-2 items-start">
                  <span className="font-display text-2xl text-ocean-300 tabular-nums">0{i + 1}</span>
                  <div>
                    <h2 className="text-2xl font-semibold text-charcoal-900 mb-2">{p.title}</h2>
                    <p className="text-charcoal-600 leading-relaxed max-w-[68ch]">{p.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="rounded-2xl border border-line bg-surface p-8">
              <p className="text-charcoal-700 leading-relaxed max-w-[68ch]">
                We are a small, growing brand, and we will not pretend to be perfect. We are committed to improving
                with every drop, and to being honest about where we are headed.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
