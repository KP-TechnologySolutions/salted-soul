'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { Product } from '@/types/product'
import { useCart } from '@/lib/cart-context'
import Button from '@/components/ui/Button'
import Badge from '@/components/ui/Badge'
import PriceDisplay from '@/components/ui/PriceDisplay'
import Rating from '@/components/ui/Rating'
import { generateId } from '@/lib/utils'

interface ProductDetailProps {
  product: Product
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product }) => {
  const { addItem } = useCart()
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0])
  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState(0)

  const handleAddToCart = () => {
    addItem({
      id: generateId(),
      productId: product.id,
      variantId: selectedVariant.id,
      quantity,
      product: {
        id: product.id,
        name: product.name,
        slug: product.slug,
        image: product.images[0].url,
        category: product.category.name
      },
      variant: {
        id: selectedVariant.id,
        name: selectedVariant.name,
        price: selectedVariant.price,
        compareAtPrice: selectedVariant.compareAtPrice,
        options: selectedVariant.options
      }
    })
  }

  // Group variants by option type
  const variantOptions = product.variants.reduce((acc, variant) => {
    variant.options.forEach(option => {
      if (!acc[option.name]) {
        acc[option.name] = new Set()
      }
      acc[option.name].add(option.value)
    })
    return acc
  }, {} as Record<string, Set<string>>)

  const getVariantByOptions = (options: Record<string, string>) => {
    return product.variants.find(variant => 
      variant.options.every(option => options[option.name] === option.value)
    )
  }

  const getSelectedOptions = () => {
    return selectedVariant.options.reduce((acc, option) => {
      acc[option.name] = option.value
      return acc
    }, {} as Record<string, string>)
  }

  return (
    <div className="container-wide section-padding">
      <div className="grid lg:grid-cols-2 gap-16">
        {/* Product Images */}
        <div className="space-y-4">
          {/* Main Image */}
          <div className="aspect-square bg-gray-50 rounded-2xl overflow-hidden">
            <Image
              src={product.images[selectedImage].url}
              alt={product.images[selectedImage].altText}
              width={600}
              height={600}
              className="w-full h-full object-cover object-center"
              priority
            />
          </div>

          {/* Thumbnail Images */}
          {product.images.length > 1 && (
            <div className="grid grid-cols-4 gap-4">
              {product.images.map((image, index) => (
                <button
                  key={image.id}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square bg-gray-50 rounded-lg overflow-hidden border-2 transition-colors ${
                    selectedImage === index ? 'border-ocean-500' : 'border-transparent hover:border-gray-300'
                  }`}
                >
                  <Image
                    src={image.url}
                    alt={image.altText}
                    width={150}
                    height={150}
                    className="w-full h-full object-cover object-center"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Product Info */}
        <div className="space-y-8">
          {/* Header */}
          <div>
            {/* Badges */}
            <div className="flex flex-wrap gap-2 mb-4">
              {product.newArrival && <Badge variant="new">New Arrival</Badge>}
              {product.bestseller && <Badge variant="bestseller">Bestseller</Badge>}
              {product.onSale && <Badge variant="sale">Sale</Badge>}
              {product.featured && <Badge variant="featured">Featured</Badge>}
            </div>

            {/* Category */}
            <p className="text-ocean-600 font-medium mb-2">{product.category.name}</p>
            
            {/* Name */}
            <h1 className="text-3xl lg:text-4xl font-bold text-charcoal-900 mb-4">
              {product.name}
            </h1>

            {/* Rating & Reviews */}
            <div className="flex items-center gap-4 mb-6">
              <Rating value={4.8} showValue size="medium" />
              <span className="text-gray-600">(127 reviews)</span>
            </div>

            {/* Price */}
            <PriceDisplay
              price={selectedVariant.price}
              compareAtPrice={selectedVariant.compareAtPrice}
              size="large"
              className="mb-6"
            />

            {/* Description */}
            <p className="text-lg text-charcoal-600 leading-relaxed mb-8">
              {product.description}
            </p>
          </div>

          {/* Variant Selection */}
          <div className="space-y-6">
            {Object.entries(variantOptions).map(([optionName, optionValues]) => (
              <div key={optionName}>
                <h3 className="text-lg font-semibold text-charcoal-900 mb-3">
                  {optionName}: <span className="font-normal">{getSelectedOptions()[optionName]}</span>
                </h3>
                <div className="flex flex-wrap gap-3">
                  {Array.from(optionValues).map((value) => {
                    const currentOptions = getSelectedOptions()
                    const newOptions = { ...currentOptions, [optionName]: value }
                    const variant = getVariantByOptions(newOptions)
                    const isSelected = currentOptions[optionName] === value
                    const isAvailable = variant?.available || false

                    return (
                      <button
                        key={value}
                        onClick={() => variant && setSelectedVariant(variant)}
                        disabled={!isAvailable}
                        className={`px-6 py-3 border-2 rounded-lg font-medium transition-all ${
                          isSelected
                            ? 'border-ocean-500 bg-ocean-50 text-ocean-700'
                            : isAvailable
                              ? 'border-gray-300 hover:border-ocean-300 text-charcoal-700'
                              : 'border-gray-200 text-gray-400 cursor-not-allowed line-through'
                        }`}
                      >
                        {value}
                      </button>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Quantity & Add to Cart */}
          <div className="space-y-4">
            <div>
              <label htmlFor="quantity" className="block text-lg font-semibold text-charcoal-900 mb-3">
                Quantity
              </label>
              <div className="flex items-center space-x-4">
                <div className="flex items-center border border-gray-300 rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-3 hover:bg-gray-50 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                    </svg>
                  </button>
                  <input
                    type="number"
                    id="quantity"
                    min="1"
                    max={selectedVariant.inventory}
                    value={quantity}
                    onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
                    className="w-16 text-center border-0 focus:outline-none"
                  />
                  <button
                    onClick={() => setQuantity(Math.min(selectedVariant.inventory, quantity + 1))}
                    className="p-3 hover:bg-gray-50 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  </button>
                </div>
                <span className="text-gray-600">
                  {selectedVariant.available ? 'In stock' : 'Out of stock'}
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Button
                variant="primary"
                size="large"
                className="w-full"
                onClick={handleAddToCart}
                disabled={!selectedVariant.available || selectedVariant.inventory < quantity}
              >
                Add to Cart - ${(selectedVariant.price * quantity).toFixed(2)}
              </Button>
              
              <Button
                variant="secondary"
                size="large"
                className="w-full"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                Add to Wishlist
              </Button>
            </div>
          </div>

          {/* Product Features */}
          <div className="border-t pt-8">
            <h3 className="text-lg font-semibold text-charcoal-900 mb-4">Product Features</h3>
            <ul className="space-y-2 text-charcoal-600">
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Premium ring-spun cotton
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Water-based inks for softness
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Designed for ministry conversations
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Machine wash cold, hang dry
              </li>
            </ul>
          </div>

          {/* Tags */}
          {product.tags.length > 0 && (
            <div className="border-t pt-8">
              <h3 className="text-lg font-semibold text-charcoal-900 mb-4">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {product.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProductDetail