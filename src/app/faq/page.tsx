import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'FAQ',
  description: 'Answers to common questions about Salted Soul apparel, shipping, returns, sizing, and our ministry give-back.',
}

const faqs = [
  {
    q: 'What sizes do you offer?',
    a: 'Most tees run XS–3XL and hoodies S–3XL. Our designs run true to size with a comfortable, relaxed fit — see the interactive Size Guide to find your fit.',
  },
  {
    q: 'How long does shipping take?',
    a: 'Orders are processed in 1–2 business days and typically arrive within 3–7 business days in the U.S. You’ll get tracking as soon as it ships.',
  },
  {
    q: 'Do you offer free shipping?',
    a: 'Yes — shipping is free on U.S. orders over $75. Orders under $75 are charged a flat rate calculated at checkout.',
  },
  {
    q: 'What’s your return policy?',
    a: 'We offer free size exchanges and returns within 30 days on unworn items with tags attached. See our Returns page for the details.',
  },
  {
    q: 'How does the ministry give-back work?',
    a: '10% of profits support coastal ministries and church plants. Every purchase helps fund the Great Commission — it’s baked into who we are.',
  },
  {
    q: 'How should I care for my apparel?',
    a: 'Machine wash cold inside out, tumble dry low, and avoid ironing directly over printed designs. This keeps colors and prints looking their best.',
  },
  {
    q: 'Can you outfit my church or ministry team?',
    a: 'Absolutely. We offer special pricing and custom design services for churches, youth groups, and ministry teams. Reach out and we’ll help.',
  },
]

export default function FaqPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-sand py-16">
        <div className="container-narrow text-center">
          <h1 className="heading-primary mb-4">Frequently asked questions</h1>
          <p className="text-xl text-charcoal-600">
            Everything you need to know about ordering, sizing, and our mission.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-narrow divide-y divide-line">
          {faqs.map((item) => (
            <div key={item.q} className="py-6 first:pt-0">
              <h2 className="text-lg font-semibold text-charcoal-900 mb-2">{item.q}</h2>
              <p className="text-charcoal-600 leading-relaxed">{item.a}</p>
            </div>
          ))}

          <div className="pt-8">
            <p className="text-charcoal-600">
              Still have a question?{' '}
              <a href="/contact" className="text-ocean-600 hover:text-ocean-700 font-medium">
                Get in touch
              </a>{' '}
              — we&rsquo;re happy to help.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
