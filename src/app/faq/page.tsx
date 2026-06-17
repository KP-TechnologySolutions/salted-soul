import { Metadata } from 'next'
import FaqList from '@/components/content/FaqList'

export const metadata: Metadata = {
  title: 'FAQ',
  description: 'Answers to common questions about Salted Soul apparel, shipping, returns, sizing, and our ministry give-back.',
}

export default function FaqPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-sand py-16">
        <div className="container-narrow text-center">
          <h1 className="heading-primary mb-4">Frequently asked questions</h1>
          <p className="text-xl text-charcoal-600">
            Search below, or browse by topic. Everything you need before you order.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-narrow">
          <FaqList />

          <div className="mt-12 rounded-2xl bg-ocean-50 border border-ocean-100 p-8 text-center">
            <h2 className="text-xl font-semibold text-charcoal-900 mb-2">Still have a question?</h2>
            <p className="text-charcoal-600 mb-5">We answer every message personally, usually within a day.</p>
            <a href="/contact" className="btn btn-primary">Get in touch</a>
          </div>
        </div>
      </section>
    </div>
  )
}
