'use client'

import React from 'react'
import Image from 'next/image'
import Button from '@/components/ui/Button'

const BrandStory: React.FC = () => {
  return (
    <section className="section-padding bg-white overflow-hidden">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <h2 className="heading-secondary mb-6">
              Where <span className="text-gradient">Faith Meets</span> The Surf
            </h2>
            
            <div className="space-y-6 text-lg text-charcoal-600 leading-relaxed">
              <p>
                Founded by Mark in Charleston, South Carolina, Salted Soul began 
                with a simple question: "What if our clothes could start conversations about Jesus?"
              </p>
              
              <p>
                We're not about blending in. We're about <strong>bold faith</strong> that 
                shows up authentically in every part of life—from the coffee shop to the 
                surf break, from youth group to the boardroom.
              </p>
              
              <p>
                Every design is crafted with intention. Every thread carries purpose. 
                Because when you wear your faith, you carry the light of Christ wherever you go.
              </p>

              {/* Founder Quote */}
              <div className="bg-ocean-50 rounded-2xl p-6 border-l-4 border-ocean-500 mt-8">
                <blockquote className="text-xl italic text-charcoal-800 mb-4">
                  "I wanted to create apparel that doesn't just look good, but opens doors 
                  for real conversations about what matters most – our relationship with Jesus."
                </blockquote>
                <cite className="text-ocean-600 font-semibold">— Mark, Founder & Owner</cite>
              </div>
            </div>

            {/* Mission Statement */}
            <div className="mt-10 p-6 bg-ocean-50 rounded-2xl border-l-4 border-ocean-500">
              <h3 className="font-bold text-charcoal-900 mb-3">Our Mission</h3>
              <p className="text-charcoal-700 italic">
                "To create Christian apparel that sparks meaningful conversations, 
                builds authentic community, and boldly shares the love of Jesus 
                with surf soul and Kingdom impact."
              </p>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button variant="primary" size="large">
                Read Our Full Story
              </Button>
              <Button variant="ghost" size="large">
                Message Mark
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2">
            <div className="relative">
              {/* Mark's Photo */}
              <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/mark-owner.jpg"
                  alt="Mark, Founder and Owner of Salted Soul"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>

              {/* Floating Stats */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-6 max-w-xs">
                <div className="text-2xl font-bold text-ocean-600 mb-2">Mark</div>
                <div className="text-charcoal-600">Founder & Owner</div>
                <div className="text-sm text-gray-500 mt-1">Charleston, SC</div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-ocean-400 to-ocean-600 rounded-full opacity-20 animate-float" />
              <div className="absolute top-1/3 -left-4 w-16 h-16 bg-gradient-to-br from-coral-400 to-coral-600 rounded-full opacity-30 animate-float" style={{ animationDelay: '2s' }} />
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mt-24 grid md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-gradient-to-br from-ocean-400 to-ocean-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-charcoal-900 mb-3">Faith-First</h3>
            <p className="text-charcoal-600">
              Every design starts with prayer and biblical truth. We're not just printing on shirts—we're sharing the Gospel.
            </p>
          </div>

          <div className="text-center p-6">
            <div className="w-16 h-16 bg-gradient-to-br from-coral-400 to-coral-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-charcoal-900 mb-3">Premium Quality</h3>
            <p className="text-charcoal-600">
              Using only the finest materials because the message we carry deserves clothing that lasts and feels amazing.
            </p>
          </div>

          <div className="text-center p-6">
            <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-charcoal-900 mb-3">Kingdom Impact</h3>
            <p className="text-charcoal-600">
              10% of profits support coastal ministries and church plants. Your purchase directly funds the Great Commission.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BrandStory