'use client'

import React from 'react'
import { cn } from '@/lib/utils'

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'new' | 'sale' | 'bestseller' | 'featured' | 'default'
  size?: 'small' | 'medium' | 'large'
}

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = 'default', size = 'medium', children, ...props }, ref) => {
    const baseClasses = 'inline-flex items-center justify-center font-semibold rounded-full'
    
    const variantClasses = {
      new: 'bg-coral-500 text-white',
      sale: 'bg-red-500 text-white',
      bestseller: 'bg-ocean-500 text-white',
      featured: 'bg-yellow-500 text-black',
      default: 'bg-gray-200 text-gray-800',
    }
    
    const sizeClasses = {
      small: 'px-2 py-1 text-xs',
      medium: 'px-3 py-1 text-sm',
      large: 'px-4 py-2 text-base',
    }

    return (
      <span
        className={cn(
          baseClasses,
          variantClasses[variant],
          sizeClasses[size],
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </span>
    )
  }
)

Badge.displayName = 'Badge'

export default Badge