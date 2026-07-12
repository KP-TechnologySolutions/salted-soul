import { Metadata } from 'next'
import ContactForm from '@/components/contact/ContactForm'
import ContactInfo from '@/components/contact/ContactInfo'

export const metadata: Metadata = {
  title: 'Contact Us | Salted Soul',
  description: 'Get in touch with the Salted Soul team. We\'d love to hear from you and answer any questions about our Christian apparel.',
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-sand py-20">
        <div className="container-wide text-center">
          <h1 className="heading-primary mb-6">
            Get in touch
          </h1>
          <p className="text-xl text-charcoal-600 max-w-2xl mx-auto">
            Have questions about our Christian apparel? Want to share your faith story? 
            We'd love to hear from you and connect with fellow believers.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="heading-secondary mb-8">Send us a message</h2>
              <ContactForm />
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="heading-secondary mb-8">Let's connect</h2>
              <ContactInfo />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-narrow">
          <div className="text-center mb-16">
            <h2 className="heading-secondary mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-charcoal-600">
              Quick answers to common questions about our Christian apparel and mission.
            </p>
          </div>

          <div className="space-y-8">
            {[
              {
                question: "What makes Salted Soul different from other apparel brands?",
                answer: "We're faith-first in everything we do. Every design is created to spark meaningful conversations about Jesus, and 10% of our profits support local ministries. We're not just selling clothes—we're building The Kingdom."
              },
              {
                question: "What is your return policy?",
                answer: "We offer 30-day returns on all items in original condition. If you're not completely satisfied with your purchase, we'll make it right. See our returns page for full details."
              },
              {
                question: "Do you offer bulk discounts for churches or ministries?",
                answer: "Absolutely! We love supporting churches, youth groups, and ministry teams. Contact us directly for volume pricing and custom design options for your ministry."
              },
              {
                question: "How do I care for my Salted Soul apparel?",
                answer: "Machine wash cold with like colors, hang dry or tumble dry low. Our water-based inks are designed to last, but gentle care helps maintain the vibrant designs and soft feel."
              },
              {
                question: "Can I track my order?",
                answer: "Yes! Once your order ships, you'll receive a tracking number via email. Most orders ship within 2-3 business days and arrive within 5-7 business days."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="font-semibold text-charcoal-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-charcoal-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}