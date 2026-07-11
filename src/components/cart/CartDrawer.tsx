'use client'

import React, { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import Image from 'next/image'
import Link from 'next/link'
import { useCart } from '@/lib/cart-context'
import { createCart, isShopifyConfigured } from '@/lib/shopify/client'
import Button from '@/components/ui/Button'
import PriceDisplay from '@/components/ui/PriceDisplay'

interface CartDrawerProps {
  isOpen: boolean
  onClose: () => void
}

const CartDrawer: React.FC<CartDrawerProps> = ({ isOpen, onClose }) => {
  const { state, updateQuantity, removeItem } = useCart()
  const [checkingOut, setCheckingOut] = useState(false)
  const [checkoutError, setCheckoutError] = useState<string | null>(null)
  // Portal to <body> so the fixed drawer/backdrop escape any transformed
  // ancestor (the header), otherwise h-full/inset-0 resolve against the header.
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  const handleCheckout = async () => {
    setCheckoutError(null)

    // Until the Shopify store + Storefront token are configured (see
    // docs/SHOPIFY-SETUP.md) there is no real checkout to hand off to.
    if (!isShopifyConfigured()) {
      setCheckoutError('Checkout is not connected yet — Shopify store setup pending.')
      return
    }

    setCheckingOut(true)
    try {
      const cart = await createCart(
        state.items.map((item) => ({
          merchandiseId: item.variantId, // Shopify variant GID once catalog is live
          quantity: item.quantity,
        }))
      )
      // Hand the buyer off to Shopify-hosted checkout.
      window.location.href = cart.checkoutUrl
    } catch (err) {
      setCheckoutError(err instanceof Error ? err.message : 'Could not start checkout.')
      setCheckingOut(false)
    }
  }

  if (!isOpen || !mounted) return null

  return createPortal(
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 z-50 transition-opacity"
        onClick={onClose}
      />
      
      {/* Cart Drawer */}
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-white z-50 shadow-2xl transform transition-transform flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-xl font-bold text-charcoal-900">
            Shopping Cart ({state.totalItems})
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {state.items.length === 0 ? (
          /* Empty Cart */
          <div className="flex-1 flex flex-col items-center justify-center p-6">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-6">
              <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5-5M7 13l-2.5 5M17 13v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-charcoal-900 mb-2">Your cart is empty</h3>
            <p className="text-gray-600 text-center mb-6">
              Start adding some Christian apparel to share your faith in style!
            </p>
            <Button 
              variant="primary" 
              onClick={onClose}
              className="w-full"
            >
              Continue Shopping
            </Button>
          </div>
        ) : (
          <>
            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-6">
              <div className="space-y-6">
                {state.items.map((item) => (
                  <div key={item.id} className="flex gap-4">
                    {/* Product Image */}
                    <div className="w-20 h-20 bg-gray-50 rounded-lg overflow-hidden flex-shrink-0">
                      <Image
                        src={item.product.image}
                        alt={item.product.name}
                        width={80}
                        height={80}
                        className="w-full h-full object-cover object-center"
                      />
                    </div>

                    {/* Product Info */}
                    <div className="flex-1 min-w-0">
                      <Link
                        href={`/shop/${item.product.category.toLowerCase()}/${item.product.slug}`}
                        className="font-medium text-charcoal-900 hover:text-ocean-600 transition-colors block truncate"
                        onClick={onClose}
                      >
                        {item.product.name}
                      </Link>
                      
                      <p className="text-sm text-gray-600 mt-1">
                        {item.variant.options.map(opt => opt.value).join(' / ')}
                      </p>

                      <div className="flex items-center justify-between mt-3">
                        <PriceDisplay
                          price={item.variant.price}
                          compareAtPrice={item.variant.compareAtPrice}
                          size="small"
                        />

                        {/* Quantity Controls */}
                        <div className="flex items-center space-x-2">
                          <div className="flex items-center border border-gray-300 rounded">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="p-1 hover:bg-gray-50 transition-colors"
                              disabled={item.quantity <= 1}
                            >
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                              </svg>
                            </button>
                            <span className="px-3 py-1 text-sm font-medium">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="p-1 hover:bg-gray-50 transition-colors"
                            >
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                              </svg>
                            </button>
                          </div>

                          <button
                            onClick={() => removeItem(item.id)}
                            className="p-1 text-red-500 hover:bg-red-50 rounded transition-colors"
                          >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Cart Footer */}
            <div className="border-t bg-gray-50 p-6 space-y-4">
              {/* Totals */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Subtotal</span>
                  <span>${state.subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Shipping</span>
                  <span>
                    {state.shipping === 0 ? 'Free' : `$${state.shipping.toFixed(2)}`}
                  </span>
                </div>
                {state.shipping === 0 && state.subtotal > 0 && (
                  <p className="text-xs text-green-600">
                    🎉 You qualify for free shipping!
                  </p>
                )}
                {state.shipping > 0 && (
                  <p className="text-xs text-gray-600">
                    Spend ${(70 - state.subtotal).toFixed(2)} more for free shipping
                  </p>
                )}
                <div className="flex justify-between text-sm">
                  <span>Tax</span>
                  <span>${state.tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-lg font-bold border-t pt-2">
                  <span>Total</span>
                  <span>${state.total.toFixed(2)}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                {checkoutError && (
                  <p className="text-sm text-red-600 text-center">{checkoutError}</p>
                )}
                <Button
                  variant="primary"
                  size="large"
                  className="w-full"
                  onClick={handleCheckout}
                  disabled={checkingOut}
                >
                  {checkingOut ? 'Starting checkout…' : 'Checkout'}
                </Button>
                <Button 
                  variant="secondary" 
                  size="medium"
                  className="w-full"
                  onClick={onClose}
                >
                  Continue Shopping
                </Button>
              </div>

              {/* Trust Badges */}
              <div className="flex items-center justify-center space-x-4 text-xs text-gray-500 pt-4">
                <div className="flex items-center space-x-1">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                  </svg>
                  <span>Secure checkout</span>
                </div>
                <div className="flex items-center space-x-1">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                  </svg>
                  <span>Kingdom impact</span>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>,
    document.body
  )
}

export default CartDrawer