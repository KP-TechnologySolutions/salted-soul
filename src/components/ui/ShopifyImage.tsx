// Product photos come from Shopify's CDN at full camera resolution (up to
// 3024x4032, 2.5MB). The CDN resizes on request via ?width=, and with
// &height=&crop=center returns the same centre crop that object-fit: cover
// shows in our square slots. This builds a srcset from that so a 150px
// thumbnail no longer downloads the original.
import React from 'react'

const isShopify = (url: string) => url.startsWith('https://cdn.shopify.com/')

export function shopifyUrl(url: string, width: number, square = false): string {
  if (!isShopify(url)) return url
  const sep = url.includes('?') ? '&' : '?'
  return `${url}${sep}width=${width}${square ? `&height=${width}&crop=center` : ''}`
}

type Props = {
  src: string
  alt: string
  /** Slot width hint for the browser's srcset pick. Must match the CSS. */
  sizes: string
  /** Candidate widths in px. */
  widths?: number[]
  /** Square slot with object-fit: cover: ask the CDN for the centre crop. */
  square?: boolean
  /** Intrinsic aspect for layout reservation (ignored when square). */
  width?: number
  height?: number
  className?: string
  style?: React.CSSProperties
  /** Above the fold / LCP: eager + fetchpriority=high. */
  priority?: boolean
}

export default function ShopifyImage({
  src,
  alt,
  sizes,
  widths = [200, 400, 600, 800, 1000],
  square = false,
  width,
  height,
  className,
  style,
  priority = false,
}: Props) {
  const largest = widths[widths.length - 1]
  const w = square ? largest : width
  const h = square ? largest : height
  const srcSet = isShopify(src) ? widths.map((x) => `${shopifyUrl(src, x, square)} ${x}w`).join(', ') : undefined
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={shopifyUrl(src, square ? 600 : 800, square)}
      srcSet={srcSet}
      sizes={srcSet ? sizes : undefined}
      alt={alt}
      width={w}
      height={h}
      className={className}
      style={style}
      loading={priority ? 'eager' : 'lazy'}
      decoding="async"
      // React 18 only passes the lowercase attribute through to the DOM.
      {...(priority ? { fetchpriority: 'high' } : {})}
    />
  )
}
