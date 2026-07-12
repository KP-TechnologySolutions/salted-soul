'use client'

import React, { useMemo, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'

type Faq = { q: string; a: string; cat: string }

const CATEGORIES = ['All', 'Orders', 'Shipping', 'Sizing', 'Mission'] as const

const FAQS: Faq[] = [
  { cat: 'Sizing', q: 'What sizes do you offer?', a: 'Most tees run XS to 3XL and hoodies S to 3XL. Our designs run true to size with a comfortable, relaxed fit. The interactive Size Guide will find your fit in a few seconds.' },
  { cat: 'Shipping', q: 'How long does shipping take?', a: 'Orders are processed in 1 to 2 business days and typically arrive within 3 to 7 business days in the U.S. You get tracking as soon as it ships.' },
  { cat: 'Shipping', q: 'Do you offer free shipping?', a: 'Yes. Shipping is free on U.S. orders over $70. Orders under $70 are charged a flat rate calculated at checkout.' },
  { cat: 'Orders', q: 'What payment methods do you accept?', a: 'Checkout is handled securely by Shopify, so all major credit and debit cards (and the wallets your device supports) work at checkout.' },
  { cat: 'Orders', q: 'What is your return policy?', a: 'We offer free size exchanges and returns within 30 days on unworn items with tags attached. The Returns page walks through every step.' },
  { cat: 'Mission', q: 'How does the ministry give-back work?', a: '10% of profits support local ministries. Every purchase helps fund the Great Commission. It is baked into who we are.' },
  { cat: 'Sizing', q: 'How should I care for my apparel?', a: 'Machine wash cold inside out, tumble dry low, and avoid ironing directly over printed designs. This keeps colors and prints looking their best.' },
  { cat: 'Mission', q: 'Can you outfit my church or ministry team?', a: 'Absolutely. We offer special pricing and custom design services for churches, youth groups, and ministry teams. Reach out and we will help.' },
]

export default function FaqList() {
  const reduce = useReducedMotion()
  const [query, setQuery] = useState('')
  const [cat, setCat] = useState<string>('All')
  const [open, setOpen] = useState<string | null>(FAQS[0].q)

  const results = useMemo(() => {
    const q = query.trim().toLowerCase()
    return FAQS.filter((f) => {
      const matchesCat = cat === 'All' || f.cat === cat
      const matchesQuery = !q || f.q.toLowerCase().includes(q) || f.a.toLowerCase().includes(q)
      return matchesCat && matchesQuery
    })
  }, [query, cat])

  return (
    <div>
      {/* Search */}
      <div className="relative mb-5">
        <svg
          className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-charcoal-400"
          fill="none" stroke="currentColor" viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="m21 21-4.3-4.3M11 19a8 8 0 1 1 0-16 8 8 0 0 1 0 16Z" />
        </svg>
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search questions"
          aria-label="Search frequently asked questions"
          className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-line bg-white text-charcoal-900 placeholder:text-charcoal-400 focus:outline-none focus:ring-2 focus:ring-ocean-500"
        />
      </div>

      {/* Category chips */}
      <div className="flex flex-wrap gap-2 mb-8">
        {CATEGORIES.map((c) => (
          <button
            key={c}
            onClick={() => setCat(c)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
              cat === c ? 'bg-ocean-500 text-white' : 'bg-charcoal-100 text-charcoal-700 hover:bg-charcoal-200'
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      {/* Results */}
      <div className="divide-y divide-line border-y border-line">
        {results.map((item) => {
          const isOpen = open === item.q
          return (
            <div key={item.q}>
              <button
                onClick={() => setOpen(isOpen ? null : item.q)}
                className="w-full flex items-center justify-between gap-4 py-5 text-left group"
                aria-expanded={isOpen}
              >
                <span className="text-lg font-semibold text-charcoal-900 group-hover:text-ocean-700 transition-colors">
                  {item.q}
                </span>
                <span
                  className={`flex-shrink-0 grid place-items-center w-8 h-8 rounded-full border border-line text-ocean-600 transition-transform duration-300 ${
                    isOpen ? 'rotate-45 bg-ocean-50' : ''
                  }`}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeWidth={1.75} d="M12 5v14M5 12h14" />
                  </svg>
                </span>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={reduce ? false : { height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={reduce ? undefined : { height: 0, opacity: 0 }}
                    transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="pb-5 pr-12 text-charcoal-600 leading-relaxed max-w-[68ch]">{item.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )
        })}

        {results.length === 0 && (
          <p className="py-10 text-center text-charcoal-500">
            No questions match &ldquo;{query}&rdquo;. Try a different search, or{' '}
            <a href="/contact" className="text-ocean-600 hover:text-ocean-700 font-medium">ask us directly</a>.
          </p>
        )}
      </div>
    </div>
  )
}
