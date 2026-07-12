'use client'

import React, { useState } from 'react'

export default function MinistryImpact() {
  const [order, setOrder] = useState(60)
  const give = (order * 0.1).toFixed(2)

  return (
    <div className="rounded-2xl border border-ocean-100 bg-ocean-50 p-6 sm:p-8">
      <h2 className="font-semibold text-charcoal-900 mb-1">See your impact</h2>
      <p className="text-sm text-charcoal-600 mb-6">
        10% of profits go to local ministries. Slide to your order total.
      </p>

      <div className="flex flex-wrap items-end justify-between gap-4 mb-4">
        <div>
          <span className="block text-xs uppercase tracking-wide text-charcoal-500 mb-1">Your order</span>
          <span className="font-display text-3xl text-charcoal-900 tabular-nums">${order}</span>
        </div>
        <div className="text-right">
          <span className="block text-xs uppercase tracking-wide text-charcoal-500 mb-1">Toward ministry</span>
          <span className="font-display text-3xl text-ocean-600 tabular-nums">${give}</span>
        </div>
      </div>

      <input
        type="range"
        min={0}
        max={200}
        step={5}
        value={order}
        onChange={(e) => setOrder(Number(e.target.value))}
        aria-label="Order total"
        className="w-full accent-ocean-500 cursor-pointer"
      />
    </div>
  )
}
