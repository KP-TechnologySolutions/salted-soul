'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const navLinks = [
  { href: '/shop', label: 'Shop All' },
  { href: '/shop/hats', label: 'Hats' },
  { href: '/collections', label: 'Collections' },
  { href: '/story', label: 'Our Story' },
  { href: '/contact', label: 'Contact' },
]

export default function SimpleHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header>
      <div className="header-content">
        {/* Logo */}
        <Link href="/" className="logo" onClick={() => setOpen(false)}>
          <div className="logo-image">
            <Image
              src="/salted_soul_logo.webp"
              alt="Salted Soul"
              width={60}
              height={60}
              style={{ width: 'auto', height: '60px' }}
            />
          </div>
          <div className="logo-text">
            <h1>Salted Soul</h1>
            <p>Charleston Coastal Faith</p>
          </div>
        </Link>

        {/* Desktop navigation */}
        <nav className="main-nav">
          {navLinks.map((l) => (
            <Link key={l.href} href={l.href} className="nav-link">
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Mobile menu toggle */}
        <button
          className="mobile-menu-btn"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className={open ? 'bar bar-1-open' : 'bar'} />
          <span className={open ? 'bar bar-2-open' : 'bar'} />
          <span className={open ? 'bar bar-3-open' : 'bar'} />
        </button>
      </div>

      {/* Mobile menu panel */}
      <div className={`mobile-nav ${open ? 'mobile-nav-open' : ''}`}>
        {navLinks.map((l) => (
          <Link key={l.href} href={l.href} className="mobile-nav-link" onClick={() => setOpen(false)}>
            {l.label}
          </Link>
        ))}
      </div>
    </header>
  )
}
