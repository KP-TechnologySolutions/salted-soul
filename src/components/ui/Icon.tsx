import React from 'react'

interface IconProps {
  name: string
  size?: number
  className?: string
}

const Icon: React.FC<IconProps> = ({ name, size = 24, className = '' }) => {
  const iconMap: { [key: string]: string } = {
    'search': '🔍',
    'cart': '🛒',
    'menu': '☰',
    'close': '✕',
    'heart': '♥',
    'star': '⭐',
    'plus': '+',
    'minus': '-',
    'check': '✓'
  }

  return (
    <span 
      className={`inline-flex items-center justify-center ${className}`}
      style={{ fontSize: `${size}px` }}
    >
      {iconMap[name] || name}
    </span>
  )
}

export default Icon