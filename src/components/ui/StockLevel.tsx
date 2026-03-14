'use client'

import React from 'react'
import { cn } from '@/lib/utils'

interface StockLevelProps {
  quantity: number
  showUrgency?: boolean
  className?: string
}

const StockLevel: React.FC<StockLevelProps> = ({ 
  quantity, 
  showUrgency = true, 
  className 
}) => {
  const getStockStatus = () => {
    if (quantity <= 0) return { status: 'out', color: 'red', text: 'Out of stock' }
    if (quantity <= 3) return { status: 'low', color: 'red', text: `Only ${quantity} left in stock!` }
    if (quantity <= 10) return { status: 'medium', color: 'yellow', text: `${quantity} left in stock` }
    return { status: 'good', color: 'green', text: `${quantity} in stock` }
  }

  const stock = getStockStatus()
  
  if (!showUrgency && stock.status === 'good') return null

  return (
    <div className={cn("flex items-center space-x-2 text-sm", className)}>
      {/* Stock Indicator */}
      <div className={cn(
        "w-2 h-2 rounded-full",
        stock.color === 'red' && "bg-red-500",
        stock.color === 'yellow' && "bg-yellow-500", 
        stock.color === 'green' && "bg-green-500"
      )} />
      
      {/* Stock Text */}
      <span className={cn(
        "font-medium",
        stock.color === 'red' && "text-red-600",
        stock.color === 'yellow' && "text-yellow-600",
        stock.color === 'green' && "text-green-600"
      )}>
        {stock.text}
      </span>

      {/* Urgency Animation */}
      {stock.status === 'low' && (
        <svg 
          className="w-4 h-4 text-red-500 animate-pulse" 
          fill="currentColor" 
          viewBox="0 0 20 20"
        >
          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
        </svg>
      )}
    </div>
  )
}

export default StockLevel