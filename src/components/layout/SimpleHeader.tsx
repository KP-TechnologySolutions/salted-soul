'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ShoppingBag } from 'lucide-react'
import { useCart } from '@/lib/cart-context'
import CartDrawer from '@/components/cart/CartDrawer'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/shop', label: 'Shop All' },
  { href: '/shop/hats', label: 'Hats' },
  { href: '/seasoned', label: 'Seasoned' },
  { href: '/story', label: 'Our Story' },
  { href: '/contact', label: 'Contact' },
]

export default function SimpleHeader() {
  const [open, setOpen] = useState(false)
  const { state, isOpen: cartOpen, openCart, closeCart } = useCart()

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

        <div className="header-actions">
          {/* Cart */}
          <button
            type="button"
            className="cart-btn"
            aria-label={`Open cart${state.totalItems ? `, ${state.totalItems} item${state.totalItems === 1 ? '' : 's'}` : ''}`}
            onClick={openCart}
          >
            <ShoppingBag size={22} strokeWidth={1.75} />
            {state.totalItems > 0 && <span className="cart-count">{state.totalItems}</span>}
          </button>

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
      </div>

      {/* Mobile menu panel */}
      <div className={`mobile-nav ${open ? 'mobile-nav-open' : ''}`}>
        {navLinks.map((l) => (
          <Link key={l.href} href={l.href} className="mobile-nav-link" onClick={() => setOpen(false)}>
            {l.label}
          </Link>
        ))}
      </div>

      {/* Cart drawer (Shopify-hosted checkout handoff) */}
      <CartDrawer isOpen={cartOpen} onClose={closeCart} />
    </header>
  )
}
