'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { collections } from '@/data/products'
import Button from '@/components/ui/Button'

const FeaturedCollections: React.FC = () => {
  const featuredCollections = collections.filter(collection => collection.featured)

  return (
    <section className="section-padding bg-gradient-sand">
      <div className="container-wide">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="heading-primary mb-4">
            FEATURED COLLECTIONS
          </h2>
          <p className="text-xl text-charcoal-600 max-w-2xl mx-auto">
            Curated collections that blend authentic faith with coastal soul. 
            Each piece designed to boldly represent your relationship with Jesus.
          </p>
        </div>

        {/* Collections Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {featuredCollections.map((collection, index) => (
            <div
              key={collection.id}
              className={`group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 ${
                index === 0 ? 'lg:col-span-2 lg:row-span-2' : ''
              }`}
            >
              {/* Collection Image */}
              <div className={`relative ${index === 0 ? 'h-96 lg:h-full' : 'h-80'} overflow-hidden`}>
                {/* Real Product Images */}
                <Image
                  src={collection.image.url}
                  alt={collection.image.altText}
                  fill
                  className="object-cover object-center group-hover:scale-110 transition-transform duration-700"
                  sizes={index === 0 ? "(max-width: 1024px) 100vw, 66vw" : "(max-width: 1024px) 100vw, 33vw"}
                />

                {/* Stronger overlay for text readability over product images */}
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-all duration-300" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-8 text-white">
                  <h3 className={`font-bold mb-3 group-hover:text-ocean-300 transition-colors ${
                    index === 0 ? 'text-3xl lg:text-4xl' : 'text-2xl'
                  }`}>
                    {collection.name}
                  </h3>
                  
                  <p className={`mb-6 leading-relaxed ${
                    index === 0 ? 'text-lg max-w-2xl' : 'text-base'
                  }`}>
                    {collection.description}
                  </p>

                  <Link href={`/collections/${collection.slug}`}>
                    <Button 
                      variant="ghost" 
                      className="bg-white/10 backdrop-blur-sm border-2 border-white text-white hover:bg-white hover:text-charcoal-900 w-fit"
                    >
                      Shop Collection
                    </Button>
                  </Link>
                </div>

                {/* Collection Badge */}
                <div className="absolute top-6 right-6">
                  <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
                    Featured
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-charcoal-900 mb-4">
              Not Sure Where to Start?
            </h3>
            <p className="text-lg text-charcoal-600 mb-6">
              Take our 30-second quiz and we'll recommend the perfect Christian apparel 
              pieces that match your style and ministry needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" size="large">
                Take Style Quiz
              </Button>
              <Link href="/collections">
                <Button variant="secondary" size="large">
                  Browse All Collections
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturedCollections