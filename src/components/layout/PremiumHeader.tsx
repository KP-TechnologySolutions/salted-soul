'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useCart } from '@/lib/cart-context'
import CartDrawer from '@/components/cart/CartDrawer'

const PremiumHeader: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isCartOpen, setIsCartOpen] = useState(false)
  const { state } = useCart()
  const totalItems = state.totalItems

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navigation = [
    { name: 'Shop All', href: '/shop' },
    { name: 'New Arrivals', href: '/shop?filter=new' },
    { name: 'Shirts', href: '/shop/mens' },
    { name: 'Hats', href: '/shop/hats' },
    { name: 'Our Story', href: '/story' },
    { name: 'Contact', href: '/contact' }
  ]

  return (
    <>
      <header className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-lg shadow-lg border-b border-ocean-100' 
          : 'bg-white/90 backdrop-blur-sm'
      }`}>
        
        {/* Top Banner */}
        <div className="bg-gradient-to-r from-ocean-600 via-ocean-500 to-ocean-600 text-white py-2 px-4">
          <div className="max-w-7xl mx-auto flex items-center justify-between text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                </svg>
                <span className="hidden sm:inline">Free shipping over $75</span>
                <span className="sm:hidden">Free shipping $75+</span>
              </div>
              
              <div className="hidden md:flex items-center space-x-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                </svg>
                <span>10% supports coastal ministries</span>
              </div>
            </div>

            <div className="flex items-center space-x-4 text-xs font-medium">
              <div className="hidden sm:flex items-center space-x-1">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>2,847+ happy customers</span>
              </div>
              <div className="flex items-center space-x-1">
                ⭐ <span>4.9/5 rating</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Header */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* Logo Section */}
            <div className="flex items-center space-x-4">
              <Link href="/" className="flex items-center space-x-3 group">
                <div className="relative">
                  <Image
                    src="/logo-original.webp"
                    alt="Salted Soul"
                    width={60}
                    height={60}
                    className="h-14 w-14 object-contain group-hover:scale-105 transition-transform duration-300"
                    priority
                  />
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">✨</span>
                  </div>
                </div>
                
                <div className="flex flex-col">
                  <span className="text-2xl font-bold bg-gradient-to-r from-ocean-600 to-ocean-800 bg-clip-text text-transparent">
                    Salted Soul
                  </span>
                  <span className="text-xs text-ocean-600 font-medium tracking-wider uppercase">
                    Charleston Coastal Faith
                  </span>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="relative text-charcoal-700 hover:text-ocean-600 font-medium text-sm transition-colors duration-200 group py-2"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-ocean-500 to-ocean-600 group-hover:w-full transition-all duration-300"></span>
                </Link>
              ))}
            </nav>

            {/* Action Buttons */}
            <div className="flex items-center space-x-4">
              
              {/* Search */}
              <button className="hidden md:flex items-center justify-center w-10 h-10 rounded-full hover:bg-ocean-50 transition-colors group">
                <svg className="w-5 h-5 text-charcoal-600 group-hover:text-ocean-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>

              {/* Account */}
              <button className="hidden md:flex items-center justify-center w-10 h-10 rounded-full hover:bg-ocean-50 transition-colors group">
                <svg className="w-5 h-5 text-charcoal-600 group-hover:text-ocean-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </button>

              {/* Cart Button */}
              <button
                onClick={() => setIsCartOpen(true)}
                className="relative flex items-center justify-center w-12 h-12 bg-gradient-to-r from-ocean-500 to-ocean-600 text-white rounded-full hover:from-ocean-600 hover:to-ocean-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l-1 12H6L5 9z" />
                </svg>
                
                {totalItems > 0 && (
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center border-2 border-white">
                    <span className="text-xs font-bold text-white">{totalItems}</span>
                  </div>
                )}
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden flex items-center justify-center w-10 h-10 rounded-lg border border-ocean-200 hover:bg-ocean-50 transition-colors"
              >
                <svg className="w-6 h-6 text-charcoal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
        <div className={`lg:hidden transition-all duration-500 ease-in-out ${
          isMobileMenuOpen 
            ? 'max-h-96 opacity-100' 
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="bg-white border-t border-ocean-100 px-4 py-6 shadow-lg">
            <div className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex items-center justify-between py-3 px-4 text-charcoal-700 hover:text-ocean-600 hover:bg-ocean-50 rounded-lg transition-all duration-200 font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              ))}
              
              <div className="border-t border-ocean-100 pt-4 mt-4">
                <div className="flex items-center space-x-4">
                  <button className="flex-1 bg-ocean-500 text-white py-3 px-4 rounded-lg font-medium hover:bg-ocean-600 transition-colors">
                    Search Products
                  </button>
                  <button className="flex-1 border border-ocean-200 text-ocean-600 py-3 px-4 rounded-lg font-medium hover:bg-ocean-50 transition-colors">
                    Account
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Ministry Banner */}
        <div className="bg-gradient-to-r from-purple-50 to-blue-50 border-b border-purple-100">
          <div className="max-w-7xl mx-auto px-4 py-2">
            <div className="flex items-center justify-center space-x-4 text-sm">
              <div className="flex items-center space-x-2 text-purple-600">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                </svg>
                <span className="font-medium">$12,847 raised for coastal ministries</span>
              </div>
              <span className="text-purple-400">•</span>
              <div className="flex items-center space-x-2 text-purple-600">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <span className="font-medium">47 churches supported</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Cart Drawer */}
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      
      {/* Spacer for fixed header */}
      <div className="h-32"></div>
    </>
  )
}

export default PremiumHeader