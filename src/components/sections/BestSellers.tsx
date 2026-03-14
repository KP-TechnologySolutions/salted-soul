'use client'

import React from 'react'
import Link from 'next/link'
import { products } from '@/data/products'
import EnhancedProductCard from '@/components/ui/EnhancedProductCard'
import Button from '@/components/ui/Button'

const BestSellers: React.FC = () => {
  const bestSellingProducts = products.filter(product => product.bestseller)

  return (
    <section className="section-padding bg-white">
      <div className="container-wide">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="heading-primary mb-4">
            BEST SELLERS
          </h2>
          <p className="text-xl text-charcoal-600 max-w-2xl mx-auto">
            Our most loved Christian apparel pieces. These designs have sparked countless 
            conversations and shared the love of Jesus across the globe.
          </p>
        </div>

        {/* Products Grid - Responsive */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-12">
          {bestSellingProducts.map((product) => (
            <EnhancedProductCard
              key={product.id}
              product={product}
              className="animate-fade-in"
            />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link href="/shop/best-sellers">
            <Button variant="secondary" size="large">
              View All Best Sellers
            </Button>
          </Link>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-ocean-600 mb-2">10K+</div>
            <div className="text-charcoal-600">Kingdom Conversations Started</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-ocean-600 mb-2">500+</div>
            <div className="text-charcoal-600">Churches Represented</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-ocean-600 mb-2">50K+</div>
            <div className="text-charcoal-600">Lives Touched Through Faith</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BestSellers