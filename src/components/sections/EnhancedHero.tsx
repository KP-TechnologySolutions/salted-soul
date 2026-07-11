'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Button from '@/components/ui/Button'

const EnhancedHero: React.FC = () => {
  const [currentText, setCurrentText] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  const heroMessages = [
    "CHRISTIAN APPAREL WITH COASTAL SOUL",
    "WHERE FAITH MEETS THE SURF",
    "START CONVERSATIONS THAT MATTER",
    "BOLD FAITH • AUTHENTIC STYLE"
  ]

  useEffect(() => {
    setIsVisible(true)
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % heroMessages.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/hero-bg.webp" 
          alt="Salted Soul coastal vintage design"
          fill
          className="object-cover object-center scale-105"
          priority
        />
        {/* Enhanced Overlay */}
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/50" />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Animated Cross */}
        <div className="absolute top-1/4 right-1/4 text-white/10 animate-pulse">
          <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 2a1 1 0 011 1v6h6a1 1 0 110 2h-6v6a1 1 0 11-2 0v-6H3a1 1 0 110-2h6V3a1 1 0 011-1z" clipRule="evenodd" />
          </svg>
        </div>
        
        {/* Animated Waves */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-ocean-500/20 to-transparent animate-pulse" />
        
        {/* Floating Badge */}
        <div className="absolute top-1/3 left-1/4 animate-float">
          <div className="bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-semibold text-ocean-600 shadow-lg">
            ⛪ Faith-Forward Design
          </div>
        </div>
        
        <div className="absolute bottom-1/3 right-1/3 animate-float" style={{ animationDelay: '2s' }}>
          <div className="bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-semibold text-purple-600 shadow-lg">
            🚀 Premium Quality
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className={`relative z-10 text-center text-white max-w-5xl mx-auto px-4 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        
        {/* Animated Main Heading */}
        <div className="mb-6 h-20 flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
            <span className="block transition-all duration-500 ease-in-out">
              {heroMessages[currentText]}
            </span>
          </h1>
        </div>

        {/* Subtitle with Typewriter Effect */}
        <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed">
          Premium Christian apparel designed to spark meaningful conversations about Jesus. 
          <span className="block mt-2 text-yellow-300 font-semibold">
            Charleston-inspired • Faith-forward • Ministry-focused
          </span>
        </p>

        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link href="/shop">
            <Button 
              variant="primary" 
              size="large" 
              className="bg-white text-ocean-600 hover:bg-gray-100 font-bold px-8 py-4 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              Shop Collection →
            </Button>
          </Link>
          
          <Link href="/story">
            <Button 
              variant="secondary" 
              size="large" 
              className="border-2 border-white text-white hover:bg-white/20 font-bold px-8 py-4 text-lg backdrop-blur-sm transition-all duration-300 hover:scale-105"
            >
              Our Story
            </Button>
          </Link>
        </div>

        {/* Trust Elements */}
        <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-white/80">
          <div className="flex items-center space-x-2">
            <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="font-medium">Free shipping over $70</span>
          </div>
          
          <div className="flex items-center space-x-2">
            <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="font-medium">1,247+ happy customers</span>
          </div>
          
          <div className="flex items-center space-x-2">
            <svg className="w-5 h-5 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
            </svg>
            <span className="font-medium">10% supports ministry</span>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>

      {/* Live Activity Indicator */}
      <div className="absolute top-24 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-xl">
        <div className="flex items-center space-x-2 text-sm">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <span className="font-medium text-charcoal-700">
            3 people viewing
          </span>
        </div>
      </div>
    </section>
  )
}

export default EnhancedHero