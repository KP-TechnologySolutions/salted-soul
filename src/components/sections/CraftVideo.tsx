'use client'

import React, { useEffect, useRef } from 'react'

/**
 * Behind-the-scenes clip. `autoPlay` would make the browser download the whole
 * file on page load (it overrides preload="none"), so nothing is fetched until
 * the clip scrolls into view; then it plays muted on a loop like before.
 * Reduced-motion users get the poster and the controls instead.
 */
export default function CraftVideo() {
  const ref = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const v = ref.current
    if (!v || typeof IntersectionObserver === 'undefined') return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          v.play().catch(() => {})
        } else if (!v.paused) {
          v.pause()
        }
      },
      { rootMargin: '200px 0px' },
    )
    io.observe(v)
    return () => io.disconnect()
  }, [])

  return (
    <video
      ref={ref}
      src="/videos/hat-making.mp4"
      poster="/videos/hat-making-poster.jpg"
      preload="none"
      muted
      loop
      playsInline
      controls
      width={540}
      height={960}
      aria-label="Salted Soul hats being made by hand in Charleston"
    />
  )
}
