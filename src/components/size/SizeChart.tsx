'use client'

import React, { useMemo, useState } from 'react'

// All measurements stored in inches (garment laid flat). cm derived on display.
type Row = { size: string; chest: number; length: number; shoulder?: number; sleeve: number }

type Category = {
  key: string
  label: string
  hasShoulder: boolean
  rows: Row[]
}

const CATEGORIES: Category[] = [
  {
    key: 'mens',
    label: "Men's Tee",
    hasShoulder: true,
    rows: [
      { size: 'XS', chest: 16.5, length: 27, shoulder: 15.5, sleeve: 8 },
      { size: 'S', chest: 18, length: 28, shoulder: 16, sleeve: 8.25 },
      { size: 'M', chest: 20, length: 29, shoulder: 17, sleeve: 8.5 },
      { size: 'L', chest: 22, length: 30, shoulder: 18, sleeve: 8.75 },
      { size: 'XL', chest: 24, length: 31, shoulder: 19, sleeve: 9 },
      { size: '2XL', chest: 26, length: 32, shoulder: 20, sleeve: 9.25 },
      { size: '3XL', chest: 28, length: 33, shoulder: 21, sleeve: 9.5 },
    ],
  },
  {
    key: 'womens',
    label: "Women's Tee",
    hasShoulder: true,
    rows: [
      { size: 'XS', chest: 15.5, length: 25.5, shoulder: 14, sleeve: 7 },
      { size: 'S', chest: 16.5, length: 26, shoulder: 14.5, sleeve: 7.25 },
      { size: 'M', chest: 17.5, length: 26.5, shoulder: 15, sleeve: 7.5 },
      { size: 'L', chest: 19, length: 27, shoulder: 15.5, sleeve: 7.75 },
      { size: 'XL', chest: 20.5, length: 27.5, shoulder: 16, sleeve: 8 },
      { size: '2XL', chest: 22, length: 28, shoulder: 16.5, sleeve: 8.25 },
    ],
  },
  {
    key: 'hoodie',
    label: 'Hoodie',
    hasShoulder: false,
    rows: [
      { size: 'S', chest: 20, length: 27, sleeve: 24 },
      { size: 'M', chest: 22, length: 28, sleeve: 25 },
      { size: 'L', chest: 24, length: 29, sleeve: 26 },
      { size: 'XL', chest: 26, length: 30, sleeve: 27 },
      { size: '2XL', chest: 28, length: 31, sleeve: 28 },
      { size: '3XL', chest: 30, length: 32, sleeve: 29 },
    ],
  },
]

type Unit = 'in' | 'cm'
type Fit = 'snug' | 'regular' | 'relaxed'

// Half-chest ease added to (body chest / 2) to reach the target garment flat width.
const FIT_EASE: Record<Fit, number> = { snug: 1, regular: 2, relaxed: 3 }
const FIT_LABEL: Record<Fit, string> = { snug: 'Snug', regular: 'Regular', relaxed: 'Relaxed' }

function fmt(valueIn: number, unit: Unit): string {
  if (unit === 'cm') return `${Math.round(valueIn * 2.54 * 2) / 2} cm`
  return `${valueIn}"`
}

export default function SizeChart() {
  const [unit, setUnit] = useState<Unit>('in')
  const [catKey, setCatKey] = useState('mens')
  const [fit, setFit] = useState<Fit>('regular')
  const [chestInput, setChestInput] = useState('')

  const category = CATEGORIES.find((c) => c.key === catKey)!

  // Recommend the smallest size whose garment flat chest covers the body + ease.
  const recommended = useMemo(() => {
    const raw = parseFloat(chestInput)
    if (!raw || raw <= 0) return null
    const bodyIn = unit === 'cm' ? raw / 2.54 : raw
    const targetFlat = bodyIn / 2 + FIT_EASE[fit]
    const match = category.rows.find((r) => r.chest >= targetFlat)
    return { size: (match ?? category.rows[category.rows.length - 1]).size, overflow: !match }
  }, [chestInput, unit, fit, category])

  return (
    <div>
      {/* Controls bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map((c) => (
            <button
              key={c.key}
              onClick={() => setCatKey(c.key)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                c.key === catKey
                  ? 'bg-ocean-500 text-white'
                  : 'bg-charcoal-100 text-charcoal-700 hover:bg-charcoal-200'
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* Unit toggle */}
        <div className="inline-flex rounded-lg border border-line p-1 bg-white">
          {(['in', 'cm'] as Unit[]).map((u) => (
            <button
              key={u}
              onClick={() => setUnit(u)}
              className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                unit === u ? 'bg-ocean-500 text-white' : 'text-charcoal-600 hover:text-charcoal-900'
              }`}
            >
              {u === 'in' ? 'Inches' : 'Centimeters'}
            </button>
          ))}
        </div>
      </div>

      {/* Size recommender */}
      <div className="bg-ocean-50 border border-ocean-100 rounded-2xl p-6 mb-8">
        <h3 className="font-semibold text-charcoal-900 mb-1">Find your size</h3>
        <p className="text-sm text-charcoal-600 mb-4">
          Enter your chest measurement (around the fullest part) and pick how you like it to fit.
        </p>
        <div className="flex flex-wrap items-end gap-4">
          <div>
            <label htmlFor="chest" className="block text-sm font-medium text-charcoal-700 mb-1">
              Chest ({unit})
            </label>
            <input
              id="chest"
              type="number"
              inputMode="decimal"
              min={0}
              value={chestInput}
              onChange={(e) => setChestInput(e.target.value)}
              placeholder={unit === 'in' ? 'e.g. 40' : 'e.g. 102'}
              className="w-32 px-3 py-2 rounded-lg border border-line focus:outline-none focus:ring-2 focus:ring-ocean-500"
            />
          </div>

          <div>
            <span className="block text-sm font-medium text-charcoal-700 mb-1">Fit preference</span>
            <div className="inline-flex rounded-lg border border-line p-1 bg-white">
              {(['snug', 'regular', 'relaxed'] as Fit[]).map((f) => (
                <button
                  key={f}
                  onClick={() => setFit(f)}
                  className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                    fit === f ? 'bg-ocean-500 text-white' : 'text-charcoal-600 hover:text-charcoal-900'
                  }`}
                >
                  {FIT_LABEL[f]}
                </button>
              ))}
            </div>
          </div>
        </div>

        {recommended && (
          <div className="mt-4 flex items-center gap-3 text-charcoal-800">
            <span className="inline-flex items-center justify-center min-w-[3rem] h-12 px-3 rounded-xl bg-ocean-500 text-white font-bold text-lg">
              {recommended.size}
            </span>
            <p className="text-sm">
              {recommended.overflow ? (
                <>That&rsquo;s at the top of our range — we suggest <strong>{recommended.size}</strong> or reach out for help.</>
              ) : (
                <>
                  For a <strong>{FIT_LABEL[fit].toLowerCase()}</strong> fit in {category.label}, we recommend size{' '}
                  <strong>{recommended.size}</strong>.
                </>
              )}
            </p>
          </div>
        )}
      </div>

      {/* Chart */}
      <div className="overflow-x-auto bg-white border border-line rounded-2xl shadow-sm">
        <table className="w-full">
          <thead className="bg-surface">
            <tr>
              <th className="px-6 py-4 text-left font-semibold text-charcoal-900">Size</th>
              <th className="px-6 py-4 text-left font-semibold text-charcoal-900">Chest Width</th>
              <th className="px-6 py-4 text-left font-semibold text-charcoal-900">Body Length</th>
              {category.hasShoulder && (
                <th className="px-6 py-4 text-left font-semibold text-charcoal-900">Shoulder</th>
              )}
              <th className="px-6 py-4 text-left font-semibold text-charcoal-900">Sleeve</th>
            </tr>
          </thead>
          <tbody>
            {category.rows.map((row) => {
              const isRec = recommended?.size === row.size
              return (
                <tr
                  key={row.size}
                  className={`border-t border-line transition-colors ${
                    isRec ? 'bg-ocean-100/70' : 'hover:bg-surface'
                  }`}
                >
                  <td className="px-6 py-4 font-medium text-charcoal-900">
                    {row.size}
                    {isRec && (
                      <span className="ml-2 align-middle text-xs font-semibold text-ocean-700 bg-ocean-100 px-2 py-0.5 rounded-full">
                        Your size
                      </span>
                    )}
                  </td>
                  <td className="px-6 py-4 text-charcoal-600">{fmt(row.chest, unit)}</td>
                  <td className="px-6 py-4 text-charcoal-600">{fmt(row.length, unit)}</td>
                  {category.hasShoulder && (
                    <td className="px-6 py-4 text-charcoal-600">{row.shoulder ? fmt(row.shoulder, unit) : '—'}</td>
                  )}
                  <td className="px-6 py-4 text-charcoal-600">{fmt(row.sleeve, unit)}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
      <p className="text-xs text-charcoal-500 mt-3">
        Measurements are of the garment laid flat (chest = armpit to armpit). Allow roughly ±0.5&quot; for
        natural variation between printed garments.
      </p>
    </div>
  )
}
