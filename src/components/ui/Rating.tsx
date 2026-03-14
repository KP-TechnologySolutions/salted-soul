'use client'

import React from 'react'
import { cn } from '@/lib/utils'

export interface RatingProps {
  value: number
  max?: number
  size?: 'small' | 'medium' | 'large'
  showValue?: boolean
  className?: string
}

const Rating: React.FC<RatingProps> = ({ 
  value, 
  max = 5, 
  size = 'medium', 
  showValue = false,
  className 
}) => {
  const sizeClasses = {
    small: 'w-4 h-4',
    medium: 'w-5 h-5',
    large: 'w-6 h-6',
  }

  const textSizeClasses = {
    small: 'text-sm',
    medium: 'text-base', 
    large: 'text-lg',
  }

  const stars = Array.from({ length: max }, (_, index) => {
    const starValue = index + 1
    const isFilled = value >= starValue
    const isPartial = value > index && value < starValue

    return (
      <svg
        key={index}
        className={cn(
          sizeClasses[size],
          isFilled ? 'text-yellow-400' : 'text-gray-300',
          'fill-current'
        )}
        viewBox="0 0 24 24"
      >
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        {isPartial && (
          <defs>
            <linearGradient id={`partial-${index}`}>
              <stop offset={`${((value - index) * 100)}%`} stopColor="currentColor" />
              <stop offset={`${((value - index) * 100)}%`} stopColor="#d1d5db" />
            </linearGradient>
          </defs>
        )}
      </svg>
    )
  })

  return (
    <div className={cn('flex items-center gap-1', className)}>
      <div className="flex items-center">
        {stars}
      </div>
      {showValue && (
        <span className={cn('text-gray-600 ml-1', textSizeClasses[size])}>
          ({value.toFixed(1)})
        </span>
      )}
    </div>
  )
}

export default Rating