import { Metadata } from 'next'
import LegalDoc, { LegalSection } from '@/components/content/LegalDoc'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How Salted Soul collects, uses, and protects your information.',
}

const sections: LegalSection[] = [
  {
    id: 'collect',
    heading: 'Information we collect',
    content: (
      <p>
        When you make a purchase, our checkout provider collects the details needed to fulfill your order: your
        name, shipping address, email, and payment information. Payment card details are processed securely by our
        payment provider and are never stored on our servers. We also collect basic, non-identifying analytics about
        how visitors use the site.
      </p>
    ),
  },
  {
    id: 'use',
    heading: 'How we use it',
    content: (
      <p>
        We use your information to process and ship orders, respond to your questions, send order updates, and (only
        if you opt in) share occasional news about new drops and ministry impact. We do not sell your personal
        information.
      </p>
    ),
  },
  {
    id: 'third-parties',
    heading: 'Third-party services',
    content: (
      <p>
        We rely on trusted providers to run the store, including our e-commerce and payment platform and our
        shipping carriers. These providers only receive the information required to perform their service and are
        bound by their own privacy commitments.
      </p>
    ),
  },
  {
    id: 'choices',
    heading: 'Your choices',
    content: (
      <p>
        You can unsubscribe from marketing emails at any time using the link in any message. To request access to,
        correction of, or deletion of your personal information, email us and we will take care of it.
      </p>
    ),
  },
  {
    id: 'contact',
    heading: 'Contact',
    content: (
      <p>
        Questions about this policy? Email{' '}
        <a href="mailto:mark@saltedsoulsc.com" className="text-ocean-600 hover:text-ocean-700 font-medium">
          mark@saltedsoulsc.com
        </a>
        .
      </p>
    ),
  },
]

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-sand py-16">
        <div className="container-wide text-center">
          <h1 className="heading-primary mb-4">Privacy Policy</h1>
          <p className="text-charcoal-600">Last updated June 17, 2026</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide">
          <p className="text-charcoal-700 leading-relaxed max-w-[68ch] mb-12">
            Salted Soul respects your privacy. This policy explains what information we collect when you visit
            saltedsoulsc.com or place an order, and how we use it.
          </p>
          <LegalDoc sections={sections} />
          <p className="text-sm text-charcoal-500 border-t border-line pt-6 mt-12 max-w-[68ch]">
            This policy is a general template and should be reviewed by legal counsel before launch to ensure it
            reflects your actual data practices and meets applicable requirements.
          </p>
        </div>
      </section>
    </div>
  )
}
