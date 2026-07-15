'use client'

import React from 'react'
import Link from 'next/link'

const ContactInfo: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* Contact Methods */}
      <div className="space-y-6">
        <div className="flex items-start space-x-4">
          <div className="w-12 h-12 bg-ocean-100 rounded-lg flex items-center justify-center flex-shrink-0">
            <svg className="w-6 h-6 text-ocean-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 7.89a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <div>
            <h3 className="font-semibold text-charcoal-900 mb-1">Email Us</h3>
            <p className="text-charcoal-600 mb-2">
              We typically respond within 24 hours
            </p>
            <Link
              href="mailto:mark@saltedsoulsc.com"
              className="text-ocean-600 hover:text-ocean-700 font-medium"
            >
              mark@saltedsoulsc.com
            </Link>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <div className="w-12 h-12 bg-ocean-100 rounded-lg flex items-center justify-center flex-shrink-0">
            <svg className="w-6 h-6 text-ocean-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <div>
            <h3 className="font-semibold text-charcoal-900 mb-1">Mailing Address</h3>
            <address className="not-italic text-charcoal-600">
              3022 S Morgans Point Rd, #120<br />
              Mt Pleasant, SC 29466
            </address>
            <p className="text-sm text-charcoal-500 mt-2">
              For mail and correspondence — not a retail location.
              Email is the fastest way to reach us.
            </p>
          </div>
        </div>
      </div>

      {/* Mark's Personal Touch */}
      <div className="bg-ocean-50 rounded-xl p-6 border border-ocean-100">
        <h3 className="font-semibold text-charcoal-900 mb-3">A Personal Note from Mark and Carol</h3>
        <p className="text-charcoal-600 leading-relaxed mb-4">
          "Every message matters to us personally. Whether you're sharing how our apparel
          opened a door for ministry or you have feedback on how we can better serve the body
          of Christ, we want to hear from you."
        </p>
        <p className="text-ocean-600 font-medium">
          — Mark and Carol, Founders &amp; Owners
        </p>
      </div>

      {/* Ministry Partnership */}
      <div className="bg-sand-50 rounded-xl p-6 border border-sand-200">
        <h3 className="font-semibold text-charcoal-900 mb-3">Ministry Partners</h3>
        <p className="text-charcoal-600 leading-relaxed mb-4">
          Looking to outfit your church, youth group, or ministry team? 
          We offer special pricing and custom design services for Kingdom work.
        </p>
        <Link
          href="mailto:mark@saltedsoulsc.com"
          className="text-sand-800 hover:text-sand-900 font-medium"
        >
          mark@saltedsoulsc.com
        </Link>
      </div>
    </div>
  )
}

export default ContactInfo