'use client'

import React, { useEffect, useState } from 'react'

export type LegalSection = { id: string; heading: string; content: React.ReactNode }

export default function LegalDoc({ sections }: { sections: LegalSection[] }) {
  const [active, setActive] = useState(sections[0]?.id)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
        if (visible[0]) setActive(visible[0].target.id)
      },
      { rootMargin: '-20% 0px -70% 0px', threshold: 0 }
    )
    sections.forEach((s) => {
      const el = document.getElementById(s.id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [sections])

  return (
    <div className="grid lg:grid-cols-[220px_1fr] gap-x-12 gap-y-8">
      {/* Sticky table of contents */}
      <nav className="hidden lg:block" aria-label="On this page">
        <div className="sticky top-28">
        <p className="text-xs uppercase tracking-wide text-charcoal-400 mb-3">On this page</p>
        <ul className="space-y-1">
          {sections.map((s) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                className={`block rounded-lg px-3 py-1.5 text-sm transition-colors ${
                  active === s.id
                    ? 'bg-ocean-50 text-ocean-700 font-medium'
                    : 'text-charcoal-500 hover:text-charcoal-800 hover:bg-surface'
                }`}
              >
                {s.heading}
              </a>
            </li>
          ))}
        </ul>
        </div>
      </nav>

      {/* Content */}
      <div className="space-y-10">
        {sections.map((s) => (
          <section key={s.id} id={s.id} className="scroll-mt-28">
            <h2 className="heading-secondary mb-3">{s.heading}</h2>
            <div className="text-charcoal-700 leading-relaxed max-w-[68ch] space-y-3">{s.content}</div>
          </section>
        ))}
      </div>
    </div>
  )
}
