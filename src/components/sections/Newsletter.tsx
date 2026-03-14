'use client'

import React, { useState } from 'react'
import Button from '@/components/ui/Button'

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Basic email validation
    if (!email || !email.includes('@')) {
      return
    }

    setIsLoading(true)

    try {
      // In a real app, this would call your newsletter API
      // For now, simulate the API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      setIsLoading(false)
      setIsSubscribed(true)
      
      // Store email locally for demo purposes
      if (typeof window !== 'undefined') {
        localStorage.setItem('newsletter_email', email)
      }
    } catch (error) {
      setIsLoading(false)
      // Handle error - in a real app you'd show an error message
    }
  }

  if (isSubscribed) {
    return (
      <section className="section-padding bg-gradient-ocean">
        <div className="container-narrow text-center">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-12 text-white">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4">Welcome to the Family!</h3>
            <p className="text-lg mb-6">
              You're now part of the Salted Soul community. Watch your inbox for exclusive designs, 
              faith stories, and special offers that help you share Jesus with style.
            </p>
            <p className="text-sm opacity-80">
              Check your email for a special welcome discount! 🌊
            </p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="section-padding bg-gradient-ocean">
      <div className="container-narrow">
        <div className="text-center text-white">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            JOIN THE TRIBE
          </h2>
          
          <p className="text-xl lg:text-2xl font-light mb-8 max-w-2xl mx-auto">
            Get exclusive access to new designs, faith stories from our community, 
            and special offers that help you share Jesus with authentic style.
          </p>

          {/* Benefits */}
          <div className="grid md:grid-cols-3 gap-6 mb-12 text-left">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <svg className="w-6 h-6 text-coral-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732L14.146 12.8l-1.179 4.456a1 1 0 01-1.934 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732L9.854 7.2l1.179-4.456A1 1 0 0112 2z" clipRule="evenodd" />
                </svg>
                <h3 className="font-semibold">Exclusive Designs</h3>
              </div>
              <p className="text-sm opacity-90">
                First access to limited drops and subscriber-only collections
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <svg className="w-6 h-6 text-coral-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
                </svg>
                <h3 className="font-semibold">Faith Stories</h3>
              </div>
              <p className="text-sm opacity-90">
                Real testimonies from our community of how faith meets fashion
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <svg className="w-6 h-6 text-coral-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                </svg>
                <h3 className="font-semibold">Special Offers</h3>
              </div>
              <p className="text-sm opacity-90">
                Exclusive discounts and early bird pricing for new releases
              </p>
            </div>
          </div>

          {/* Email Form */}
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-6 py-4 rounded-lg text-charcoal-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-coral-300"
              />
              <Button
                type="submit"
                variant="secondary"
                size="large"
                loading={isLoading}
                className="bg-coral-500 hover:bg-coral-600 text-white border-coral-500 hover:border-coral-600"
              >
                Join Now
              </Button>
            </div>
            
            <p className="text-sm opacity-75 mt-4">
              Join 10,000+ believers sharing faith with style. Unsubscribe anytime.
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Newsletter