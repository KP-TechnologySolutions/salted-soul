'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { products } from '@/data/products'
import Button from '@/components/ui/Button'
import Badge from '@/components/ui/Badge'
import PriceDisplay from '@/components/ui/PriceDisplay'

const FeaturedProduct: React.FC = () => {
  // Get the Charleston Snapback as featured product
  const featuredProduct = products.find(p => p.slug === 'charleston-snapback')
  
  if (!featuredProduct) return null

  return (
    <section className="section-padding bg-gradient-sand">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Product Image */}
          <div className="relative">
            <div className="aspect-square bg-white rounded-2xl overflow-hidden shadow-2xl p-8">
              <Image
                src={featuredProduct.images[0].url}
                alt={featuredProduct.images[0].altText}
                width={600}
                height={600}
                className="w-full h-full object-cover object-center"
                priority
              />
              
              {/* Floating Badge */}
              <div className="absolute top-4 right-4">
                <Badge variant="featured" size="large">
                  New Arrival
                </Badge>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br from-ocean-400 to-ocean-600 rounded-full opacity-10 animate-float" />
            <div className="absolute -top-4 -left-4 w-20 h-20 bg-gradient-to-br from-coral-400 to-coral-600 rounded-full opacity-20 animate-float" style={{ animationDelay: '2s' }} />
          </div>

          {/* Product Info */}
          <div>
            <div className="mb-6">
              <Badge variant="new" className="mb-4">
                Just Dropped
              </Badge>
              <h2 className="text-4xl lg:text-5xl font-bold text-charcoal-900 mb-4">
                {featuredProduct.name}
              </h2>
              <p className="text-xl text-charcoal-600 leading-relaxed mb-6">
                {featuredProduct.description}
              </p>
              
              <PriceDisplay
                price={featuredProduct.price}
                size="large"
                className="mb-8"
              />
            </div>

            <div className="space-y-4 mb-8">
              <h3 className="font-semibold text-charcoal-900">Why You'll Love It:</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-charcoal-600">Premium embroidered Charleston design</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-charcoal-600">Represents Holy City faith and pride</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-charcoal-600">Perfect for ministry and everyday wear</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-charcoal-600">Comfortable structured fit</span>
                </li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href={`/shop/${featuredProduct.category.slug}/${featuredProduct.slug}`}>
                <Button variant="primary" size="large" className="w-full sm:w-auto">
                  Shop Now - ${featuredProduct.price}
                </Button>
              </Link>
              
              <Link href="/shop/hats">
                <Button variant="secondary" size="large" className="w-full sm:w-auto">
                  View All Hats
                </Button>
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center gap-4 mt-8 text-sm text-charcoal-600">
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Free shipping over $75
              </div>
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                30-day returns
              </div>
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Kingdom impact
              </div>
            </div>
          </div>
        </div>

        {/* Customer Quote */}
        <div className="mt-16 text-center bg-white rounded-2xl p-8 shadow-lg">
          <blockquote className="text-xl italic text-charcoal-800 mb-4">
            "I wear my Charleston Christian cap everywhere - the coffee shop, church, 
            even on vacation. It's amazing how many conversations about faith it's started!"
          </blockquote>
          <cite className="text-ocean-600 font-semibold">— Sarah M., James Island</cite>
          <div className="flex justify-center mt-4">
            {[1, 2, 3, 4, 5].map((star) => (
              <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturedProduct