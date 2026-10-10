'use client'

import React, { useEffect, useState } from 'react'
import ShopifyImage from '@/components/ui/ShopifyImage'
import { Product } from '@/types/product'
import { useCart } from '@/lib/cart-context'
import Button from '@/components/ui/Button'
import Badge from '@/components/ui/Badge'
import PriceDisplay from '@/components/ui/PriceDisplay'
import { generateId } from '@/lib/utils'
import { numericId, trackViewItem } from '@/lib/analytics'

interface ProductDetailProps {
  product: Product
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product }) => {
  const { addItem } = useCart()
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0])
  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState(0)

  useEffect(() => {
    trackViewItem({
      item_id: numericId(product.id),
      item_name: product.name,
      item_category: product.category.name,
      price: product.price,
    })
  }, [product.id, product.name, product.category.name, product.price])

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
            <ShopifyImage
              key={product.images[selectedImage].url}
              src={product.images[selectedImage].url}
              alt={product.images[selectedImage].altText}
              square
              widths={[400, 600, 800, 1000, 1200]}
              sizes="(max-width: 1023px) calc(100vw - 30px), 560px"
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
                  <ShopifyImage
                    src={image.url}
                    alt={image.altText}
                    square
                    widths={[150, 300]}
                    sizes="(max-width: 1023px) 25vw, 130px"
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
            {/* Badges: only real, data-backed ones (a Shopify compare-at price) */}
            {product.onSale && (
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="sale">Sale</Badge>
              </div>
            )}

            {/* Category */}
            <p className="text-ocean-600 font-medium mb-2">{product.category.name}</p>
            
            {/* Name */}
            <h1 className="text-3xl lg:text-4xl font-bold text-charcoal-900 mb-4">
              {product.name}
            </h1>

            {/* Price */}
            <PriceDisplay
              price={selectedVariant.price}
              compareAtPrice={selectedVariant.compareAtPrice}
              size="large"
              className="mb-6"
            />
          </div>

          {/* Variant Selection — skip Shopify's single "Default Title" pseudo-option */}
          <div className="space-y-6">
            {Object.entries(variantOptions)
              .filter(([optionName, optionValues]) => !(optionName === 'Title' && optionValues.size === 1 && optionValues.has('Default Title')))
              .map(([optionName, optionValues]) => (
              <div key={optionName}>
                <h2 className="text-lg font-semibold text-charcoal-900 mb-3">
                  {optionName}: <span className="font-normal">{getSelectedOptions()[optionName]}</span>
                </h2>
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
                    type="button"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    aria-label="Decrease quantity"
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
                    type="button"
                    onClick={() => setQuantity(Math.min(selectedVariant.inventory, quantity + 1))}
                    aria-label="Increase quantity"
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

            <div className="max-w-md">
              <Button
                variant="primary"
                size="large"
                className="w-full"
                onClick={handleAddToCart}
                disabled={!selectedVariant.available || selectedVariant.inventory < quantity}
              >
                Add to Cart - ${(selectedVariant.price * quantity).toFixed(2)}
              </Button>
            </div>
          </div>

          {/* Product Features */}
          <div className="border-t pt-8">
            <h2 className="text-lg font-semibold text-charcoal-900 mb-4">Product Features</h2>
            <ul className="space-y-2 text-charcoal-600">
              {[
                'Authentic Richardson 112 trucker hat',
                'Adjustable snapback - one size fits most',
                'Structured six-panel fit',
                'Mid Pro profile',
                'Precurved Bill',
              ].map((feature) => (
                <li key={feature} className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Tags */}
          {product.tags.length > 0 && (
            <div className="border-t pt-8">
              <h2 className="text-lg font-semibold text-charcoal-900 mb-4">Tags</h2>
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