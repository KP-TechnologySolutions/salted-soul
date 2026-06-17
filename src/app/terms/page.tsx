import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'The terms that govern your use of Salted Soul and purchases from our store.',
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-sand py-16">
        <div className="container-narrow text-center">
          <h1 className="heading-primary mb-4">Terms of Service</h1>
          <p className="text-charcoal-600">Last updated: June 17, 2026</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-narrow space-y-8 text-charcoal-700 leading-relaxed">
          <p>
            Welcome to Salted Soul. By using saltedsoulsc.com or placing an order, you agree to these terms. Please
            read them carefully.
          </p>

          <div>
            <h2 className="heading-secondary mb-3">Products &amp; pricing</h2>
            <p>
              We do our best to display our apparel and pricing accurately, but colors may vary by screen and we may
              correct errors, update prices, or adjust availability at any time. All prices are in U.S. dollars.
            </p>
          </div>

          <div>
            <h2 className="heading-secondary mb-3">Orders &amp; payment</h2>
            <p>
              When you place an order, you authorize us (through our payment provider) to charge your payment method
              for the total shown at checkout, including taxes and shipping. We reserve the right to refuse or cancel
              any order.
            </p>
          </div>

          <div>
            <h2 className="heading-secondary mb-3">Shipping &amp; returns</h2>
            <p>
              We ship within the timeframes noted at checkout and offer free shipping on qualifying orders. If
              something isn&rsquo;t right, contact us and we&rsquo;ll make it right within our return window.
            </p>
          </div>

          <div>
            <h2 className="heading-secondary mb-3">Intellectual property</h2>
            <p>
              The Salted Soul name, logo, designs, and site content are our property and may not be copied or used
              without permission.
            </p>
          </div>

          <div>
            <h2 className="heading-secondary mb-3">Limitation of liability</h2>
            <p>
              The site and products are provided &ldquo;as is.&rdquo; To the fullest extent permitted by law, Salted
              Soul is not liable for indirect or incidental damages arising from your use of the site or products.
            </p>
          </div>

          <div>
            <h2 className="heading-secondary mb-3">Contact</h2>
            <p>
              Questions about these terms? Email{' '}
              <a href="mailto:mark@saltedsoulsc.com" className="text-ocean-600 hover:text-ocean-700 font-medium">
                mark@saltedsoulsc.com
              </a>
              .
            </p>
          </div>

          <p className="text-sm text-charcoal-500 border-t border-line pt-6">
            These terms are a general template and should be reviewed by legal counsel before launch.
          </p>
        </div>
      </section>
    </div>
  )
}
