'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Product } from '@/types/product'
import Button from '@/components/ui/Button'
import Badge from '@/components/ui/Badge'
import PriceDisplay from '@/components/ui/PriceDisplay'
import StockLevel from '@/components/ui/StockLevel'
import { useCart } from '@/lib/cart-context'
import { cn } from '@/lib/utils'

interface EnhancedProductCardProps {
  product: Product
  priority?: boolean
  showQuickView?: boolean
  className?: string
}

const EnhancedProductCard: React.FC<EnhancedProductCardProps> = ({ 
  product, 
  priority = false,
  showQuickView = true,
  className = ""
}) => {
  const [isHovered, setIsHovered] = useState(false)
  const [isLiked, setIsLiked] = useState(false)
  const [viewCount, setViewCount] = useState(0)
  
  useEffect(() => {
    setViewCount(Math.floor(Math.random() * 20) + 5)
  }, [])
  const { addItem } = useCart()

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    
    if (product.variants.length > 0) {
      addItem({
        id: `${product.id}-${product.variants[0].id}`,
        productId: product.id,
        variantId: product.variants[0].id,
        quantity: 1,
        product: {
          id: product.id,
          name: product.name,
          slug: product.slug,
          image: product.images[0]?.url || '',
          category: product.category.name
        },
        variant: {
          id: product.variants[0].id,
          name: product.variants[0].name,
          price: product.variants[0].price,
          compareAtPrice: product.variants[0].compareAtPrice,
          options: product.variants[0].options
        }
      })
    }
  }

  const toggleWishlist = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsLiked(!isLiked)
  }

  return (
    <div 
      className={cn("group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden hover-lift", className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Product Image */}
      <Link href={`/shop/${product.category.slug}/${product.slug}`}>
        <div className="relative aspect-square overflow-hidden rounded-t-2xl">
          <Image
            src={product.images[0]?.url || '/placeholder-product.png'}
            alt={product.images[0]?.altText || product.name}
            fill
            className="object-cover object-center group-hover:scale-110 transition-transform duration-700"
            priority={priority}
          />
          
          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-2">
            {product.newArrival && <Badge variant="new">New</Badge>}
            {product.bestseller && <Badge variant="bestseller">Bestseller</Badge>}
            {product.onSale && <Badge variant="sale">Sale</Badge>}
            {product.featured && <Badge variant="featured">Featured</Badge>}
          </div>

          {/* Wishlist Button */}
          <button
            onClick={toggleWishlist}
            className={`absolute top-3 right-3 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
              isLiked 
                ? 'bg-red-500 text-white' 
                : 'bg-white/80 backdrop-blur-sm text-charcoal-600 hover:bg-white'
            }`}
          >
            <svg className="w-5 h-5" fill={isLiked ? 'currentColor' : 'none'} stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </button>

          {/* Quick Actions (shown on hover) */}
          <div className={`absolute bottom-3 left-3 right-3 flex gap-2 transition-all duration-300 ${
            isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <Button
              onClick={handleQuickAdd}
              variant="primary"
              size="small"
              className="flex-1 bg-white/90 backdrop-blur-sm text-charcoal-800 hover:bg-white font-semibold"
            >
              Quick Add
            </Button>
            {showQuickView && (
              <button className="px-4 py-2 bg-white/90 backdrop-blur-sm rounded-lg font-semibold text-charcoal-800 hover:bg-white transition-colors">
                Quick View
              </button>
            )}
          </div>

          {/* Live Activity Indicator */}
          {viewCount > 0 && (
            <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-medium text-charcoal-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {viewCount} people viewing
            </div>
          )}
        </div>
      </Link>

      {/* Product Info */}
      <div className="p-6">
        {/* Product Name & Category */}
        <Link href={`/shop/${product.category.slug}/${product.slug}`}>
          <div className="mb-3">
            <p className="text-sm text-charcoal-500 mb-1">{product.category.name}</p>
            <h3 className="text-lg font-bold text-charcoal-900 group-hover:text-ocean-600 transition-colors line-clamp-2">
              {product.name}
            </h3>
          </div>
        </Link>

        {/* Short Description */}
        <p className="text-sm text-charcoal-600 mb-4 line-clamp-2 leading-relaxed">
          {product.shortDescription}
        </p>

        {/* Stock Level */}
        <StockLevel 
          quantity={product.inventory.quantity} 
          className="mb-4"
          showUrgency={true}
        />

        {/* Rating */}
        <div className="flex items-center gap-2 mb-4">
          <div className="flex">
            {[1, 2, 3, 4, 5].map((star) => (
              <svg key={star} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="text-sm text-charcoal-500">(127)</span>
        </div>

        {/* Price & Add to Cart */}
        <div className="flex items-center justify-between">
          <PriceDisplay
            price={product.price}
            compareAtPrice={product.compareAtPrice}
            size="medium"
          />
          
          <Button
            onClick={handleQuickAdd}
            variant="primary"
            size="small"
            className="hover:scale-105 transition-transform"
          >
            Add to Cart
          </Button>
        </div>

        {/* Ministry Impact */}
        <div className="mt-4 flex items-center text-xs text-purple-600 bg-purple-50 rounded-lg px-3 py-2">
          <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
          </svg>
          <span className="font-medium">
            ${(product.price * 0.1).toFixed(2)} supports coastal ministries
          </span>
        </div>
      </div>


    </div>
  )
}

export default EnhancedProductCard