// GA4 ecommerce events (gtag is loaded in layout.tsx).
//
// Covers the on-site funnel: view_item → add_to_cart → begin_checkout.
// `purchase` happens on Shopify-hosted checkout, so it has to come from
// Shopify itself (Google & YouTube app or a customer-events pixel in the
// Shopify admin) — it can't be sent from this static site.

type GtagItem = {
  item_id: string
  item_name: string
  item_category?: string
  item_variant?: string
  price: number
  quantity?: number
}

declare global {
  interface Window {
    dataLayer?: unknown[]
  }
}

// Same queue the gtag snippet uses, so events fired before gtag.js finishes
// loading (e.g. view_item on first paint) are still delivered.
function gtag(..._args: unknown[]) {
  if (typeof window === 'undefined') return
  window.dataLayer = window.dataLayer || []
  // gtag.js only accepts the `arguments` object, not a plain array.
  // eslint-disable-next-line prefer-rest-params
  window.dataLayer.push(arguments)
}

function send(event: string, params: Record<string, unknown>) {
  gtag('event', event, params)
}

/** Shopify GIDs → the numeric id, which is what Shopify/Merchant Center use. */
export function numericId(gid: string): string {
  return gid.split('/').pop() || gid
}

export function trackViewItem(item: GtagItem) {
  send('view_item', { currency: 'USD', value: item.price, items: [item] })
}

export function trackAddToCart(item: GtagItem) {
  const quantity = item.quantity ?? 1
  send('add_to_cart', { currency: 'USD', value: item.price * quantity, items: [{ ...item, quantity }] })
}

/**
 * Fire begin_checkout, then run `next` once GA has the hit (or after a short
 * timeout) — the next step navigates away to Shopify, which would otherwise
 * drop the event.
 */
export function trackBeginCheckout(items: GtagItem[], value: number, next: () => void) {
  if (typeof window === 'undefined') return next()
  let done = false
  const go = () => {
    if (done) return
    done = true
    next()
  }
  gtag('event', 'begin_checkout', { currency: 'USD', value, items, event_callback: go })
  setTimeout(go, 800)
}

export function trackSignUp(method: string) {
  send('sign_up', { method })
}
