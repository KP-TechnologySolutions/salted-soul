'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const LifestyleGallery: React.FC = () => {
  const lifestyleImages = [
    {
      id: 1,
      src: '/lifestyle/chatgpt-charleston-1.png',
      alt: 'Charleston Rainbow Row Christian Lifestyle - AI Generated',
      title: 'Rainbow Row Faith',
      description: 'Historic Charleston meets modern ministry'
    },
    {
      id: 2,
      src: '/lifestyle/chatgpt-charleston-2.png', 
      alt: 'Coffee Shop Christian Community',
      title: 'Coffee & Community',
      description: 'Faith conversations over Charleston coffee'
    },
    {
      id: 3,
      src: '/lifestyle/chatgpt-charleston-3.png',
      alt: 'Charleston Harbor Sunset Ministry - AI Photography',
      title: 'Harbor Reflections',
      description: 'Peaceful moments with purposeful faith'
    },
    {
      id: 4,
      src: '/lifestyle/chatgpt-charleston-4.png', 
      alt: 'Coastal Christian Adventure - AI Generated',
      title: 'Adventure & Faith',
      description: 'Beach bound with Kingdom purpose'
    },
    {
      id: 5,
      src: '/lifestyle/charleston-lifestyle-1.png',
      alt: 'Charleston Christian Lifestyle - Premium Style',
      title: 'Southern Faith',
      description: 'Authentic Charleston Christian culture'
    },
    {
      id: 6,
      src: '/lifestyle/charleston-lifestyle-2.png', 
      alt: 'Coastal Ministry Apparel - Faith Forward',
      title: 'Coastal Ministry',
      description: 'Salt and light in everyday life'
    }
  ]

  return (
    <section className="section-padding bg-white">
      <div className="container-wide">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="heading-secondary mb-6">
            LIVE YOUR FAITH IN STYLE
          </h2>
          <p className="text-xl text-charcoal-600 max-w-3xl mx-auto mb-4">
            See how Salted Soul apparel looks in real Charleston life. Our Christian clothing is designed 
            to spark meaningful conversations and represent your faith with authentic coastal style.
          </p>
          <div className="inline-flex items-center px-4 py-2 bg-ocean-50 rounded-full text-sm text-ocean-700 border border-ocean-200">
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Photography Enhanced with AI Technology
          </div>
        </div>

        {/* Lifestyle Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {lifestyleImages.map((image) => (
            <div key={image.id} className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="aspect-square relative">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-xl font-bold mb-2">{image.title}</h3>
                  <p className="text-white/90 text-sm">{image.description}</p>
                </div>


              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-ocean rounded-2xl p-8 text-white max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Represent Your Faith with Style?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Join the community of believers who wear their faith boldly and start meaningful 
              conversations about Jesus with authentic Charleston coastal style.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/shop">
                <button className="bg-white text-ocean-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-50 transition-colors">
                  Shop Collection
                </button>
              </Link>
              
              <Link href="/story">
                <button className="border-2 border-white text-white font-semibold px-8 py-3 rounded-lg hover:bg-white/10 transition-colors">
                  Our Story
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Ministry Impact Statement */}
        <div className="mt-16 text-center">
          <div className="bg-sand-50 rounded-xl p-8 max-w-4xl mx-auto">
            <blockquote className="text-xl italic text-charcoal-800 mb-4">
              "Let your light shine before others, that they may see your good deeds 
              and glorify your Father in heaven."
            </blockquote>
            <cite className="text-ocean-600 font-semibold">— Matthew 5:16</cite>
            <p className="text-charcoal-600 mt-4">
              Every piece of Salted Soul apparel is designed to be a conversation starter, 
              a ministry tool, and a way to boldly represent your faith in everyday life.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LifestyleGallery