'use client'

import React, { useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'

type Mode = 'exchange' | 'return'

const STEPS: Record<Mode, { title: string; detail: string }[]> = {
  exchange: [
    { title: 'Tell us the new size', detail: 'Email your order number and the size you would like instead.' },
    { title: 'We send a prepaid label', detail: 'Free return shipping for size exchanges, every time.' },
    { title: 'Send it back', detail: 'Drop it in the mail, unworn and with tags attached.' },
    { title: 'Your new size ships free', detail: 'We send the replacement as soon as your return is on its way.' },
  ],
  return: [
    { title: 'Start your return', detail: 'Email your order number and what you would like to return.' },
    { title: 'We send a prepaid label', detail: 'Pop it on the box and you are set.' },
    { title: 'Send it back', detail: 'Items must be unworn, unwashed, and have original tags.' },
    { title: 'Get your refund', detail: 'Refunded to your original payment within 2 to 3 business days of arrival.' },
  ],
}

export default function ReturnFlow() {
  const reduce = useReducedMotion()
  const [mode, setMode] = useState<Mode>('exchange')

  return (
    <div>
      {/* Segmented toggle */}
      <div className="inline-flex rounded-xl border border-line p-1 bg-white mb-10">
        {(['exchange', 'return'] as Mode[]).map((m) => (
          <button
            key={m}
            onClick={() => setMode(m)}
            className={`px-5 py-2 rounded-lg text-sm font-medium transition-colors ${
              mode === m ? 'bg-ocean-500 text-white' : 'text-charcoal-600 hover:text-charcoal-900'
            }`}
          >
            {m === 'exchange' ? 'Size exchange' : 'Return for refund'}
          </button>
        ))}
      </div>

      {/* Stepper */}
      <AnimatePresence mode="wait">
        <motion.ol
          key={mode}
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduce ? undefined : { opacity: 0, y: -12 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative space-y-8"
        >
          <div className="absolute left-[19px] top-2 bottom-2 w-px bg-line" aria-hidden="true" />
          {STEPS[mode].map((s, i) => (
            <li key={s.title} className="relative flex gap-5">
              <div className="relative z-10 grid place-items-center w-10 h-10 flex-shrink-0 rounded-full bg-ocean-500 text-white font-display font-semibold">
                {i + 1}
              </div>
              <div className="pt-1">
                <h3 className="font-semibold text-charcoal-900 mb-1">{s.title}</h3>
                <p className="text-charcoal-600 leading-relaxed max-w-[60ch]">{s.detail}</p>
              </div>
            </li>
          ))}
        </motion.ol>
      </AnimatePresence>
    </div>
  )
}
