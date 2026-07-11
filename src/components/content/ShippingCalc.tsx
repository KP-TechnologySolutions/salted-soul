'use client'

import React, { useState } from 'react'

const THRESHOLD = 70

export default function ShippingCalc() {
  const [subtotal, setSubtotal] = useState(45)
  const pct = Math.min(subtotal / THRESHOLD, 1)
  const remaining = Math.max(THRESHOLD - subtotal, 0)
  const qualifies = remaining === 0

  return (
    <div className="rounded-2xl border border-ocean-100 bg-ocean-50 p-6 sm:p-8">
      <div className="flex items-baseline justify-between mb-1">
        <h2 className="font-semibold text-charcoal-900">Free shipping calculator</h2>
        <span className="font-display text-2xl text-ocean-700 tabular-nums">${subtotal}</span>
      </div>
      <p className="text-sm text-charcoal-600 mb-5">
        Drag to your order total and see how close you are to free U.S. shipping.
      </p>

      {/* Progress track */}
      <div className="h-3 w-full rounded-full bg-white overflow-hidden mb-3" aria-hidden="true">
        <div
          className="h-full rounded-full bg-ocean-500 origin-left"
          style={{ transform: `scaleX(${pct})`, transition: 'transform 200ms cubic-bezier(0.22,1,0.36,1)', width: '100%' }}
        />
      </div>

      <input
        type="range"
        min={0}
        max={150}
        step={1}
        value={subtotal}
        onChange={(e) => setSubtotal(Number(e.target.value))}
        aria-label="Order subtotal"
        className="w-full accent-ocean-500 cursor-pointer"
      />

      <p className={`mt-4 text-sm font-medium ${qualifies ? 'text-ocean-700' : 'text-charcoal-700'}`}>
        {qualifies ? (
          <>Nice. Your order ships free.</>
        ) : (
          <>Add <span className="font-semibold tabular-nums">${remaining}</span> more to unlock free shipping.</>
        )}
      </p>
    </div>
  )
}
