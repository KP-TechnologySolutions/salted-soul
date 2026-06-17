'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { mainNavigation } from '@/data/navigation'
import Button from '@/components/ui/Button'
import { useCart } from '@/lib/cart-context'
import CartDrawer from '@/components/cart/CartDrawer'

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [isCartOpen, setIsCartOpen] = useState(false)
  const { state } = useCart()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* Announcement Bar */}
      <div className="bg-ocean-600 text-white py-2 text-center text-sm">
        <p>
          Free shipping on orders over $75 | 
          <span className="font-semibold ml-1">Shop Faith Collection</span>
        </p>
      </div>

      {/* Main Header */}
      <header
        className={cn(
          'sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 transition-all duration-300',
          isScrolled && 'shadow-lg'
        )}
      >
        <div className="container-wide">
          <div className="flex h-24 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3">
              <Image
                src="/logo-original.webp"
                alt="Salted Soul"
                width={64}
                height={64}
                className="h-16 w-16 object-contain"
              />
              <span className="text-2xl font-bold text-charcoal-900">
                Salted Soul
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {mainNavigation.map((item) => (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => item.megaMenu && setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className="nav-link text-lg font-medium px-3 py-2"
                  >
                    {item.name}
                  </Link>

                  {/* Mega Menu */}
                  {item.megaMenu && activeDropdown === item.name && (
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-screen max-w-4xl pt-4">
                      <div className="bg-white rounded-lg shadow-xl border p-8">
                        <div className="grid grid-cols-4 gap-8">
                          {item.megaMenu.sections.map((section, index) => (
                            <div key={section.name} className={index === 0 ? 'col-span-2' : ''}>
                              <h3 className="font-semibold text-charcoal-900 mb-4">
                                {section.name}
                              </h3>
                              <ul className="space-y-3">
                                {section.items.map((subItem) => (
                                  <li key={subItem.name}>
                                    <Link
                                      href={subItem.href}
                                      className="block text-charcoal-600 hover:text-ocean-600 transition-colors"
                                    >
                                      <div className="font-medium">{subItem.name}</div>
                                      {subItem.description && (
                                        <div className="text-sm text-gray-500 mt-1">
                                          {subItem.description}
                                        </div>
                                      )}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}

                          {/* Featured Items */}
                          {item.megaMenu.featured && (
                            <div className="col-span-1">
                              <h3 className="font-semibold text-charcoal-900 mb-4">Featured</h3>
                              <div className="space-y-4">
                                {item.megaMenu.featured.map((featured) => (
                                  <Link
                                    key={featured.name}
                                    href={featured.href}
                                    className="block group"
                                  >
                                    {featured.image && (
                                      <div className="aspect-video bg-gray-100 rounded-lg mb-2 overflow-hidden">
                                        <Image
                                          src={featured.image}
                                          alt={featured.name}
                                          width={300}
                                          height={200}
                                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                        />
                                      </div>
                                    )}
                                    <h4 className="font-medium text-charcoal-900 group-hover:text-ocean-600 transition-colors">
                                      {featured.name}
                                    </h4>
                                    <p className="text-sm text-gray-600">{featured.description}</p>
                                  </Link>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-4">
              {/* Search */}
              <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <svg className="w-5 h-5 text-charcoal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>

              {/* Account */}
              <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors hidden sm:block">
                <svg className="w-5 h-5 text-charcoal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </button>

              {/* Cart */}
              <button 
                className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors"
                onClick={() => setIsCartOpen(true)}
              >
                <svg className="w-5 h-5 text-charcoal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5-5M7 13l-2.5 5M17 13v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6" />
                </svg>
                {/* Cart Count Badge */}
                {state.totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-coral-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {state.totalItems}
                  </span>
                )}
              </button>

              {/* Mobile Menu Button */}
              <button
                className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                <svg className="w-5 h-5 text-charcoal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {isMobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t bg-white">
            <div className="container-wide py-4">
              <nav className="space-y-4">
                {mainNavigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block nav-link text-lg font-medium py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
              <div className="mt-6 pt-4 border-t">
                <Button variant="primary" className="w-full">
                  Shop Now
                </Button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Cart Drawer */}
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  )
}

export default Header