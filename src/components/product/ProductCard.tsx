'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { cn, generateId } from '@/lib/utils'
import { Product } from '@/types/product'
import { useCart } from '@/lib/cart-context'
import Badge from '@/components/ui/Badge'
import PriceDisplay from '@/components/ui/PriceDisplay'
import Button from '@/components/ui/Button'

export interface ProductCardProps {
  product: Product
  className?: string
  showQuickAdd?: boolean
  showWishlist?: boolean
}

const ProductCard: React.FC<ProductCardProps> = ({
  product,
  className,
  showQuickAdd = true,
  showWishlist = true
}) => {
  const primaryImage = product.images[0]
  const secondaryImage = product.images[1] // For hover effect
  const { addItem, openCart } = useCart()

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.preventDefault()
    const variant = product.variants[0]
    if (!variant) return
    addItem({
      id: generateId(),
      productId: product.id,
      variantId: variant.id,
      quantity: 1,
      product: {
        id: product.id,
        name: product.name,
        slug: product.slug,
        image: primaryImage.url,
        category: product.category.name,
      },
      variant: {
        id: variant.id,
        name: variant.name,
        price: variant.price,
        compareAtPrice: variant.compareAtPrice,
        options: variant.options,
      },
    })
    openCart()
  }

  return (
    <div className={cn(
      'group cursor-pointer transition-all duration-300 hover:scale-105',
      className
    )}>
      <Link href={`/shop/${product.category.slug}/${product.slug}`}>
        {/* Product Image */}
        <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-50 mb-4">
          {/* Primary Image */}
          <Image
            src={primaryImage.url}
            alt={primaryImage.altText}
            fill
            className="object-cover object-center transition-opacity duration-300 group-hover:opacity-0"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          
          {/* Secondary Image for Hover Effect */}
          {secondaryImage && (
            <Image
              src={secondaryImage.url}
              alt={secondaryImage.altText}
              fill
              className="object-cover object-center transition-opacity duration-300 opacity-0 group-hover:opacity-100"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          )}

          {/* Badges */}
          <div className="absolute top-3 left-3 z-10 flex flex-col gap-2">
            {product.newArrival && <Badge variant="new" size="small">New</Badge>}
            {product.onSale && <Badge variant="sale" size="small">Sale</Badge>}
            {product.bestseller && <Badge variant="bestseller" size="small">Bestseller</Badge>}
            {product.featured && <Badge variant="featured" size="small">Featured</Badge>}
          </div>

          {/* Wishlist Button */}
          {showWishlist && (
            <button
              className="absolute top-3 right-3 z-10 p-2 bg-white/80 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white hover:scale-110"
              onClick={(e) => {
                e.preventDefault()
                // Add to wishlist logic here
              }}
            >
              <svg className="w-5 h-5 text-charcoal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </button>
          )}

          {/* Quick Add Button - Shows on Hover */}
          {showQuickAdd && (
            <div className="absolute inset-x-3 bottom-3 z-10 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
              <Button 
                variant="primary" 
                size="medium" 
                className="w-full"
                onClick={handleQuickAdd}
              >
                Quick Add
              </Button>
            </div>
          )}

          {/* Low Stock Warning */}
          {product.inventory.quantity <= 5 && product.inventory.quantity > 0 && (
            <div className="absolute bottom-3 left-3 z-10">
              <Badge variant="default" size="small" className="bg-orange-100 text-orange-700">
                Only {product.inventory.quantity} left
              </Badge>
            </div>
          )}
        </div>
      </Link>

      {/* Product Info */}
      <div className="space-y-2">
        {/* Category */}
        <p className="text-sm text-ocean-600 font-medium">{product.category.name}</p>
        
        {/* Product Name */}
        <Link href={`/shop/${product.category.slug}/${product.slug}`}>
          <h3 className="font-semibold text-charcoal-900 hover:text-ocean-600 transition-colors">
            {product.name}
          </h3>
        </Link>

        {/* Short Description */}
        {product.shortDescription && (
          <p className="text-sm text-gray-600 line-clamp-2">
            {product.shortDescription}
          </p>
        )}

        {/* Price */}
        <PriceDisplay
          price={product.price}
          compareAtPrice={product.compareAtPrice}
          currency={product.currency}
          size="medium"
        />

        {/* Tags */}
        {product.tags.length > 0 && (
          <div className="flex flex-wrap gap-1">
            {product.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
              >
                {tag}
              </span>
            ))}
            {product.tags.length > 3 && (
              <span className="text-xs text-gray-500">
                +{product.tags.length - 3} more
              </span>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default ProductCard