'use client'

import React, { useState, useRef, useEffect } from 'react'
import Button from '@/components/ui/Button'

// Submissions post to the KP portal's public lead-intake endpoint, which emails
// mark@saltedsoulsc.com and logs the message in the KP dashboard. Guarded by a
// per-org intake key (org-scoped) + honeypot + timing anti-spam.
const INTAKE_URL = 'https://portal.kptechnologysolutions.com/api/leads/intake'
const INTAKE_KEY = process.env.NEXT_PUBLIC_LEADS_INTAKE_KEY || ''

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    reason: 'general',
    website: '', // honeypot — real users leave this empty
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const formStart = useRef(0)

  useEffect(() => {
    formStart.current = Date.now()
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setIsSubmitting(true)

    try {
      const res = await fetch(INTAKE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          organization: 'salted-soul',
          intake_key: INTAKE_KEY,
          name: formData.name,
          email: formData.email,
          service: formData.reason,
          message: `Subject: ${formData.subject}\n\n${formData.message}`,
          website: formData.website,
          formStart: formStart.current,
        }),
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok || data?.ok === false) {
        throw new Error(data?.error || 'Something went wrong. Please try again.')
      }
      setIsSubmitted(true)
    } catch (err) {
      setError(
        err instanceof Error
          ? `${err.message} You can also email us directly at mark@saltedsoulsc.com.`
          : 'Could not send your message. Please email mark@saltedsoulsc.com.'
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
        <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-green-800 mb-2">Message Sent!</h3>
        <p className="text-green-700">
          Thanks for reaching out! We'll get back to you within 24 hours. 
          God bless you!
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Honeypot — hidden from real users, catches bots */}
      <input
        type="text"
        name="website"
        value={formData.website}
        onChange={handleChange}
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
      />

      {/* Name */}
      <div>
        <label htmlFor="name" className="block text-sm font-semibold text-charcoal-900 mb-2">
          Full Name *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="input"
          placeholder="Enter your full name"
        />
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-semibold text-charcoal-900 mb-2">
          Email Address *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="input"
          placeholder="Enter your email address"
        />
      </div>

      {/* Reason */}
      <div>
        <label htmlFor="reason" className="block text-sm font-semibold text-charcoal-900 mb-2">
          How can we help you?
        </label>
        <select
          id="reason"
          name="reason"
          value={formData.reason}
          onChange={handleChange}
          className="input"
        >
          <option value="general">General Question</option>
          <option value="order">Order Support</option>
          <option value="product">Product Question</option>
          <option value="ministry">Ministry Partnership</option>
          <option value="wholesale">Bulk/Wholesale Inquiry</option>
          <option value="testimony">Share Your Faith Story</option>
          <option value="media">Media/Press Inquiry</option>
        </select>
      </div>

      {/* Subject */}
      <div>
        <label htmlFor="subject" className="block text-sm font-semibold text-charcoal-900 mb-2">
          Subject *
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className="input"
          placeholder="What's this about?"
        />
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-charcoal-900 mb-2">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={6}
          className="input resize-none"
          placeholder="Tell us more about your question or how we can help..."
        />
      </div>

      {/* Error */}
      {error && (
        <p className="text-sm text-red-600 text-center">{error}</p>
      )}

      {/* Submit Button */}
      <Button
        type="submit"
        variant="primary"
        size="large"
        loading={isSubmitting}
        className="w-full"
      >
        {isSubmitting ? 'Sending Message...' : 'Send Message'}
      </Button>

      {/* Privacy Note */}
      <p className="text-sm text-gray-600 text-center">
        By submitting this form, you agree to our privacy policy. 
        We'll never share your information and will only use it to respond to your inquiry.
      </p>
    </form>
  )
}

export default ContactForm