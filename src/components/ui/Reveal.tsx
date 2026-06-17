'use client'

import React from 'react'
import { motion, useReducedMotion } from 'framer-motion'

interface RevealProps {
  children: React.ReactNode
  /** Stagger index — multiplies the entrance delay for cascading groups. */
  index?: number
  className?: string
  /** Render as a different element if needed (defaults to div). */
  as?: 'div' | 'section' | 'li'
}

/**
 * Scroll-triggered entrance: a soft fade + upward translate, GPU-friendly
 * (transform/opacity only). Honors prefers-reduced-motion by rendering static.
 */
const Reveal: React.FC<RevealProps> = ({ children, index = 0, className, as = 'div' }) => {
  const reduce = useReducedMotion()
  const MotionTag = motion[as]

  // Render static when the user prefers reduced motion, or for QA/snapshot
  // captures via ?nomotion (avoids content staying hidden in non-scrolling renders).
  const noMotion =
    reduce ||
    (typeof window !== 'undefined' && window.location.search.includes('nomotion'))

  if (noMotion) {
    const Tag = as
    return <Tag className={className}>{children}</Tag>
  }

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -10% 0px' }}
      transition={{
        duration: 0.6,
        delay: Math.min(index * 0.08, 0.4),
        ease: [0.22, 1, 0.36, 1], // gentle ease-out, spring-like settle
      }}
    >
      {children}
    </MotionTag>
  )
}

export default Reveal
