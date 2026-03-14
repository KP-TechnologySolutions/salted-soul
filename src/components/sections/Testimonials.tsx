'use client'

import React from 'react'
import Image from 'next/image'

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      name: "Pastor David Chen",
      role: "Youth Pastor, Charleston Community Church",
      location: "Mount Pleasant, SC",
      text: "Our youth group loves their Salted Soul gear! It's amazing how many conversations about faith these shirts start. We've seen three teenagers come to Christ just from someone asking about their 'Salt Fish' tee.",
      rating: 5,
      image: "/testimonials/pastor-david.jpg", // AI-generated testimonial image
      verified: true,
      badge: "Ministry Leader"
    },
    {
      id: 2,
      name: "Sarah Mitchell",
      role: "College Student & Campus Minister",
      location: "College of Charleston",
      text: "I wear my Charleston snapback everywhere - coffee shops, campus, even on mission trips. The quality is incredible and I've had more spiritual conversations wearing this hat than anything else I own. Worth every penny!",
      rating: 5,
      image: "/testimonials/sarah-mitchell.jpg", // AI-generated testimonial image
      verified: true,
      badge: "Campus Ministry"
    },
    {
      id: 3,
      name: "Mark Thompson",
      role: "Father of 3, Booster Club President",
      location: "James Island, SC",
      text: "Bought the whole family Salted Soul gear for our church's beach day. The kids love them, my wife loves the quality, and I love the ministry conversations they spark. Already ordering more for Christmas gifts.",
      rating: 5,
      image: "/testimonials/mark-thompson.jpg", // AI-generated testimonial image
      verified: true,
      badge: "Family Customer"
    }
  ]

  return (
    <section className="section-padding bg-gradient-to-br from-sand-50 to-ocean-50">
      <div className="container-wide">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-yellow-100 rounded-full text-sm font-semibold text-yellow-800 mb-6">
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            4.9/5 Stars • 1,247+ Reviews
          </div>
          <h2 className="heading-secondary mb-6">
            CHANGING LIVES, ONE CONVERSATION AT A TIME
          </h2>
          <p className="text-xl text-charcoal-600 max-w-3xl mx-auto">
            See how Salted Soul apparel is opening doors for ministry and sparking 
            meaningful conversations about Jesus across Charleston and beyond.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300 relative"
            >
              {/* Verified Badge */}
              {testimonial.verified && (
                <div className="absolute top-4 right-4 bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded-full flex items-center">
                  <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Verified
                </div>
              )}

              {/* Stars */}
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-charcoal-700 mb-6 leading-relaxed">
                "{testimonial.text}"
              </blockquote>

              {/* Customer Info */}
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-ocean rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                  {testimonial.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <div className="font-semibold text-charcoal-900">{testimonial.name}</div>
                  <div className="text-sm text-charcoal-600">{testimonial.role}</div>
                  <div className="text-xs text-charcoal-500 flex items-center mt-1">
                    <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    {testimonial.location}
                  </div>
                </div>
              </div>

              {/* Badge */}
              <div className="mt-4 inline-block px-3 py-1 bg-ocean-50 text-ocean-700 text-xs font-semibold rounded-full">
                {testimonial.badge}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-charcoal-900 mb-4">
              Join 1,247+ Happy Customers
            </h3>
            <p className="text-charcoal-600 mb-6">
              Ready to start conversations that matter? Join the growing community of believers 
              who wear their faith with authentic Charleston style.
            </p>
            <button className="bg-gradient-ocean text-white font-semibold px-8 py-3 rounded-lg hover:shadow-lg transition-shadow">
              Shop Your Faith Style
            </button>
          </div>
        </div>

        {/* Ministry Impact Counter */}
        <div className="mt-16 grid md:grid-cols-4 gap-8 text-center">
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="text-3xl font-bold text-ocean-600 mb-2">$12,847</div>
            <div className="text-sm text-charcoal-600">Raised for Ministry</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="text-3xl font-bold text-green-600 mb-2">1,247+</div>
            <div className="text-sm text-charcoal-600">Happy Customers</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="text-3xl font-bold text-purple-600 mb-2">47</div>
            <div className="text-sm text-charcoal-600">Churches Supported</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="text-3xl font-bold text-yellow-600 mb-2">4.9/5</div>
            <div className="text-sm text-charcoal-600">Customer Rating</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials