import { Metadata } from 'next'
import LegalDoc, { LegalSection } from '@/components/content/LegalDoc'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'The terms that govern your use of Salted Soul and purchases from our store.',
}

const sections: LegalSection[] = [
  {
    id: 'products',
    heading: 'Products & pricing',
    content: (
      <p>
        We do our best to display our apparel and pricing accurately, but colors may vary by screen and we may
        correct errors, update prices, or adjust availability at any time. All prices are in U.S. dollars.
      </p>
    ),
  },
  {
    id: 'orders',
    heading: 'Orders & payment',
    content: (
      <p>
        When you place an order, you authorize us (through our payment provider) to charge your payment method for
        the total shown at checkout, including taxes and shipping. We reserve the right to refuse or cancel any
        order.
      </p>
    ),
  },
  {
    id: 'shipping-returns',
    heading: 'Shipping & returns',
    content: (
      <p>
        We ship within the timeframes noted at checkout and offer free shipping on qualifying orders. If something
        is not right, contact us and we will make it right within our return window.
      </p>
    ),
  },
  {
    id: 'ip',
    heading: 'Intellectual property',
    content: (
      <p>
        The Salted Soul name, logo, designs, and site content are our property and may not be copied or used without
        permission.
      </p>
    ),
  },
  {
    id: 'liability',
    heading: 'Limitation of liability',
    content: (
      <p>
        The site and products are provided &ldquo;as is.&rdquo; To the fullest extent permitted by law, Salted Soul
        is not liable for indirect or incidental damages arising from your use of the site or products.
      </p>
    ),
  },
  {
    id: 'contact',
    heading: 'Contact',
    content: (
      <p>
        Questions about these terms? Email{' '}
        <a href="mailto:mark@saltedsoulsc.com" className="text-ocean-600 hover:text-ocean-700 font-medium">
          mark@saltedsoulsc.com
        </a>
        .
      </p>
    ),
  },
]

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-sand py-16">
        <div className="container-wide text-center">
          <h1 className="heading-primary mb-4">Terms of Service</h1>
          <p className="text-charcoal-600">Last updated June 17, 2026</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide">
          <p className="text-charcoal-700 leading-relaxed max-w-[68ch] mb-12">
            Welcome to Salted Soul. By using saltedsoulsc.com or placing an order, you agree to these terms. Please
            read them carefully.
          </p>
          <LegalDoc sections={sections} />
          <p className="text-sm text-charcoal-500 border-t border-line pt-6 mt-12 max-w-[68ch]">
            These terms are a general template and should be reviewed by legal counsel before launch.
          </p>
        </div>
      </section>
    </div>
  )
}
