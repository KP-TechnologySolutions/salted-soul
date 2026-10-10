'use client'

import React, { useEffect, useRef, useState } from 'react'

interface RevealProps {
  children: React.ReactNode
  /** Stagger index — multiplies the entrance delay for cascading groups. */
  index?: number
  className?: string
  /** Render as a different element if needed (defaults to div). */
  as?: 'div' | 'section' | 'li'
}

type Phase = 'static' | 'pending' | 'in'

/**
 * Scroll-triggered entrance: a soft fade + upward translate (transform/opacity
 * only, CSS in globals.css under .reveal).
 *
 * Content renders VISIBLE in the static HTML. Only elements that are below the
 * fold once the page mounts get hidden and then animated in on scroll. The old
 * version server-rendered everything at opacity 0, so above-the-fold content
 * (the homepage hero) stayed invisible until hydration plus the animation,
 * which held back Largest Contentful Paint.
 */
const Reveal: React.FC<RevealProps> = ({ children, index = 0, className, as = 'div' }) => {
  const ref = useRef<HTMLElement | null>(null)
  const [phase, setPhase] = useState<Phase>('static')

  useEffect(() => {
    const el = ref.current
    if (!el || typeof IntersectionObserver === 'undefined') return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    // QA/snapshot captures via ?nomotion render everything static.
    if (window.location.search.includes('nomotion')) return

    let reveal: IntersectionObserver | null = null
    const first = new IntersectionObserver(([entry]) => {
      first.disconnect()
      if (entry.isIntersecting) return // already on screen: leave it alone
      setPhase('pending')
      reveal = new IntersectionObserver(
        ([e]) => {
          if (!e.isIntersecting) return
          setPhase('in')
          reveal?.disconnect()
        },
        { rootMargin: '0px 0px -10% 0px' },
      )
      reveal.observe(el)
    })
    first.observe(el)
    return () => {
      first.disconnect()
      reveal?.disconnect()
    }
  }, [])

  const Tag = as as React.ElementType
  const cls = [className, phase === 'pending' && 'reveal-pending', phase === 'in' && 'reveal-in']
    .filter(Boolean)
    .join(' ')
  const style =
    phase === 'in' ? ({ '--reveal-delay': `${Math.min(index * 0.08, 0.4)}s` } as React.CSSProperties) : undefined

  return (
    <Tag ref={ref} className={cls || undefined} style={style}>
      {children}
    </Tag>
  )
}

export default Reveal
