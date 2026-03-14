'use client'

import React from 'react'
import { cn } from '@/lib/utils'

interface PremiumButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'gradient' | 'faith'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  icon?: React.ReactNode
  iconPosition?: 'left' | 'right'
  loading?: boolean
  fullWidth?: boolean
}

const PremiumButton: React.FC<PremiumButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'left',
  loading = false,
  fullWidth = false,
  className,
  disabled,
  ...props
}) => {
  const baseStyles = cn(
    // Base styles
    'inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-300 relative overflow-hidden',
    'focus:outline-none focus:ring-4 focus:ring-opacity-50',
    'transform hover:scale-105 active:scale-95',
    'disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none',
    
    // Size variants
    {
      'px-3 py-2 text-sm min-h-[36px]': size === 'sm',
      'px-4 py-3 text-base min-h-[44px]': size === 'md',
      'px-6 py-4 text-lg min-h-[52px]': size === 'lg',
      'px-8 py-5 text-xl min-h-[60px]': size === 'xl',
    },

    // Width
    {
      'w-full': fullWidth,
    },

    // Variant styles
    {
      // Primary - Ocean gradient with premium feel
      'bg-gradient-to-r from-ocean-500 to-ocean-600 text-white shadow-lg hover:from-ocean-600 hover:to-ocean-700 hover:shadow-xl focus:ring-ocean-300':
        variant === 'primary',

      // Secondary - Subtle with ocean accent
      'bg-ocean-50 text-ocean-700 border-2 border-ocean-200 hover:bg-ocean-100 hover:border-ocean-300 hover:shadow-md focus:ring-ocean-200':
        variant === 'secondary',

      // Outline - Clean professional look
      'border-2 border-charcoal-300 text-charcoal-700 bg-white hover:bg-charcoal-50 hover:border-charcoal-400 hover:shadow-md focus:ring-charcoal-200':
        variant === 'outline',

      // Ghost - Minimal but effective
      'text-ocean-600 hover:bg-ocean-50 hover:text-ocean-700 focus:ring-ocean-200':
        variant === 'ghost',

      // Gradient - Premium rainbow effect
      'bg-gradient-to-r from-blue-500 via-purple-600 to-ocean-600 text-white shadow-lg hover:from-blue-600 hover:via-purple-700 hover:to-ocean-700 hover:shadow-xl focus:ring-purple-300':
        variant === 'gradient',

      // Faith - Special styling for Christian messaging
      'bg-gradient-to-r from-purple-500 to-ocean-500 text-white shadow-lg hover:from-purple-600 hover:to-ocean-600 hover:shadow-xl focus:ring-purple-300 relative':
        variant === 'faith',
    },

    className
  )

  return (
    <button
      className={baseStyles}
      disabled={disabled || loading}
      {...props}
    >
      {/* Loading spinner */}
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-current bg-opacity-20">
          <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}

      {/* Content wrapper */}
      <div className={cn(
        'flex items-center space-x-2',
        { 'opacity-0': loading }
      )}>
        {icon && iconPosition === 'left' && (
          <span className="flex-shrink-0">{icon}</span>
        )}
        
        <span className="flex-1">{children}</span>
        
        {icon && iconPosition === 'right' && (
          <span className="flex-shrink-0">{icon}</span>
        )}
      </div>

      {/* Faith variant cross overlay */}
      {variant === 'faith' && (
        <div className="absolute top-2 right-2 text-white/30 pointer-events-none">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 2a1 1 0 011 1v6h6a1 1 0 110 2h-6v6a1 1 0 11-2 0v-6H3a1 1 0 110-2h6V3a1 1 0 011-1z" clipRule="evenodd" />
          </svg>
        </div>
      )}

      {/* Premium shine effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none"></div>
    </button>
  )
}

export default PremiumButton