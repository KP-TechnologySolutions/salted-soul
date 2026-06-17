import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Accessibility',
  description: 'Salted Soul’s commitment to an accessible, inclusive shopping experience for everyone.',
}

export default function AccessibilityPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-sand py-16">
        <div className="container-narrow text-center">
          <h1 className="heading-primary mb-4">Accessibility</h1>
          <p className="text-xl text-charcoal-600">An experience everyone can use and enjoy.</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-narrow space-y-8 text-charcoal-700 leading-relaxed">
          <p>
            Salted Soul is committed to making saltedsoulsc.com accessible to as many people as possible,
            regardless of ability or technology. We aim to follow widely recognized accessibility best practices,
            including the Web Content Accessibility Guidelines (WCAG) 2.1 at the AA level.
          </p>

          <div>
            <h2 className="heading-secondary mb-3">What we do</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Use semantic markup, descriptive alt text, and clear heading structure.</li>
              <li>Maintain readable color contrast and visible keyboard focus states.</li>
              <li>Provide a &ldquo;skip to content&rdquo; link and support keyboard navigation.</li>
              <li>Respect reduced-motion preferences for animations.</li>
            </ul>
          </div>

          <div>
            <h2 className="heading-secondary mb-3">Ongoing work</h2>
            <p>
              Accessibility is an ongoing effort, and some areas of the site may not yet be fully optimized. We
              welcome your feedback and treat it as a priority.
            </p>
          </div>

          <div>
            <h2 className="heading-secondary mb-3">Contact us</h2>
            <p>
              Run into a barrier or have a suggestion? Email{' '}
              <a href="mailto:mark@saltedsoulsc.com" className="text-ocean-600 hover:text-ocean-700 font-medium">
                mark@saltedsoulsc.com
              </a>{' '}
              and we&rsquo;ll work to make it right.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
