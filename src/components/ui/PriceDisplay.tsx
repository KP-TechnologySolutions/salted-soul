'use client'

import React from 'react'
import { cn } from '@/lib/utils'
import { formatPrice, getDiscountPercentage } from '@/lib/utils'

export interface PriceDisplayProps {
  price: number
  compareAtPrice?: number
  currency?: string
  size?: 'small' | 'medium' | 'large'
  showCurrency?: boolean
  showDiscount?: boolean
  className?: string
}

const PriceDisplay: React.FC<PriceDisplayProps> = ({
  price,
  compareAtPrice,
  currency = 'USD',
  size = 'medium',
  showCurrency = true,
  showDiscount = true,
  className
}) => {
  const isOnSale = compareAtPrice && compareAtPrice > price
  const discountPercentage = isOnSale ? getDiscountPercentage(compareAtPrice, price) : 0

  const sizeClasses = {
    small: {
      price: 'text-lg font-bold',
      compare: 'text-sm',
      discount: 'text-xs'
    },
    medium: {
      price: 'text-xl font-bold',
      compare: 'text-base',
      discount: 'text-sm'
    },
    large: {
      price: 'text-2xl font-bold',
      compare: 'text-lg',
      discount: 'text-base'
    }
  }

  return (
    <div className={cn('flex items-center gap-2', className)}>
      <span className={cn(
        'text-charcoal-900',
        sizeClasses[size].price,
        isOnSale && 'text-coral-500'
      )}>
        {showCurrency ? formatPrice(price, currency) : price}
      </span>
      
      {isOnSale && compareAtPrice && (
        <>
          <span className={cn(
            'text-gray-500 line-through',
            sizeClasses[size].compare
          )}>
            {showCurrency ? formatPrice(compareAtPrice, currency) : compareAtPrice}
          </span>
          
          {showDiscount && (
            <span className={cn(
              'bg-coral-100 text-coral-700 px-2 py-1 rounded-full font-medium',
              sizeClasses[size].discount
            )}>
              -{discountPercentage}%
            </span>
          )}
        </>
      )}
    </div>
  )
}

export default PriceDisplay