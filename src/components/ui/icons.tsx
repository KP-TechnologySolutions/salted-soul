import React from 'react'

// Custom coastal/faith icon set — consistent 1.5 stroke, inherits currentColor.
// Replaces emoji and default icon-library glyphs across the marketing pages.

type IconProps = React.SVGProps<SVGSVGElement>

const base = (props: IconProps) => ({
  width: 24,
  height: 24,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.5,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  'aria-hidden': true, // decorative; always paired with visible text or a labeled container
  ...props,
})

/** Solid star for rating rows. */
export const StarSolid = (props: IconProps) => (
  <svg {...base({ ...props, fill: 'currentColor', stroke: 'none', strokeWidth: 0 })}>
    <path d="M12 2.5l2.9 5.88 6.49.94-4.7 4.58 1.11 6.46L12 17.77l-5.8 3.05 1.1-6.46-4.69-4.58 6.49-.94L12 2.5z" />
  </svg>
)

/** Wave — surf / coastal. */
export const Wave = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="M2 12c2.5 0 2.5-2 5-2s2.5 2 5 2 2.5-2 5-2 2.5 2 5 2" />
    <path d="M2 17c2.5 0 2.5-2 5-2s2.5 2 5 2 2.5-2 5-2 2.5 2 5 2" />
  </svg>
)

/** Cross — faith. */
export const Cross = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="M14 3h-4v5H5v4h5v9h4v-9h5V8h-5V3z" />
  </svg>
)

/** Columns / historic building — Charleston. */
export const Columns = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="M3 9l9-5 9 5" />
    <path d="M5 9v8M10 9v8M14 9v8M19 9v8" />
    <path d="M3 21h18M4 17h16" />
  </svg>
)

/** Hand offering a heart — giving / ministry impact. */
export const HandHeart = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="M11 13.5l-1.6-1.5a1.6 1.6 0 0 1 2.2-2.3l.4.4.4-.4a1.6 1.6 0 0 1 2.2 2.3L11 13.5z" />
    <path d="M2 15.5l3-1 5.5 1.8a2 2 0 0 0 1.3 0L19 14a1.5 1.5 0 0 1 1.7 2.3c-.7 1-4.7 4.2-8.7 4.2-2.5 0-4.5-1.5-7-2" />
    <path d="M2 14.5v7" />
  </svg>
)

/** T-shirt — apparel / quality. */
export const Tee = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="M8 3l4 2 4-2 5 3-2.5 3.5L20 8v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8l1.5-1.5L3 6l5-3z" />
  </svg>
)

/** Shipping truck. */
export const Truck = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="M3 6h11v9H3zM14 9h4l3 3v3h-7z" />
    <circle cx="7" cy="18" r="1.6" />
    <circle cx="17" cy="18" r="1.6" />
  </svg>
)

/** Anchor — heritage / trust. */
export const Anchor = (props: IconProps) => (
  <svg {...base(props)}>
    <circle cx="12" cy="5" r="2" />
    <path d="M12 7v13" />
    <path d="M5 13a7 7 0 0 0 14 0" />
    <path d="M5 13H3M21 13h-2" />
  </svg>
)
