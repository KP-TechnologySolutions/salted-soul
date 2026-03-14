'use client'

import React from 'react'
import Image from 'next/image'
import Button from '@/components/ui/Button'

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-charcoal-900">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/hero-bg.png"
          alt="Salted Soul coastal vintage design"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        {/* Strong overlay for text readability */}
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Heading */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight mb-6">
          <span className="block">CHRISTIAN APPAREL</span>
          <span className="block text-gradient bg-gradient-to-r from-ocean-400 to-ocean-300 bg-clip-text text-transparent">
            WITH SOUL
          </span>
        </h1>

        {/* Subheading */}
        <p className="text-xl sm:text-2xl lg:text-3xl font-light mb-8 max-w-3xl mx-auto leading-relaxed">
          Bold faith meets authentic surf culture. Designs that spark real conversations about Jesus.
        </p>

        {/* Scripture */}
        <div className="glass rounded-2xl p-6 sm:p-8 max-w-3xl mx-auto mb-12">
          <blockquote className="text-lg sm:text-xl font-medium italic mb-4">
            "You are the salt of the earth and the light of the world. Let your light shine before others, 
            that they may see your good deeds and glorify your Father in heaven."
          </blockquote>
          <cite className="text-ocean-300 font-semibold">— Matthew 5:13-16</cite>
        </div>

        {/* Call to Action */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            variant="primary" 
            size="large"
            className="text-xl px-12 py-6 shadow-2xl hover:shadow-ocean-500/25"
          >
            Shop Faith Collection
          </Button>
          
          <Button 
            variant="ghost" 
            size="large"
            className="text-xl px-12 py-6 text-white border-2 border-white hover:bg-white hover:text-charcoal-900"
          >
            Our Story
          </Button>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-8 text-sm">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span>Free Shipping Over $75</span>
          </div>
          
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span>30-Day Returns</span>
          </div>
          
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span>Kingdom Impact Guaranteed</span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  )
}

export default Hero