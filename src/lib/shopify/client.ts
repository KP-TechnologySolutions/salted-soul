// Shopify Storefront API client.
//
// This site is a static export with no server, so all calls run in the browser.
// The Storefront API *public* access token is built for exactly this — it only
// grants read + checkout-creation scope, never Admin access. It is safe to ship
// in client code via a NEXT_PUBLIC_ var. (Do NOT use the Admin API token here.)
//
// Configure via .env (see .env.example):
//   NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN     e.g. salted-soul.myshopify.com
//   NEXT_PUBLIC_SHOPIFY_STOREFRONT_TOKEN public Storefront API access token
//   NEXT_PUBLIC_SHOPIFY_API_VERSION      optional, defaults below

import type { ShopifyCart, ShopifyCartLineInput, ShopifyUserError } from './types'

const DOMAIN = process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN
const TOKEN = process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_TOKEN
const API_VERSION = process.env.NEXT_PUBLIC_SHOPIFY_API_VERSION || '2025-10'

/** True once the Shopify store domain + Storefront token are configured. */
export function isShopifyConfigured(): boolean {
  return Boolean(DOMAIN && TOKEN)
}

async function shopifyFetch<T>(query: string, variables: Record<string, unknown> = {}): Promise<T> {
  if (!DOMAIN || !TOKEN) {
    throw new Error(
      'Shopify is not configured. Set NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN and ' +
        'NEXT_PUBLIC_SHOPIFY_STOREFRONT_TOKEN (see docs/SHOPIFY-SETUP.md).'
    )
  }

  const res = await fetch(`https://${DOMAIN}/api/${API_VERSION}/graphql.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Shopify-Storefront-Access-Token': TOKEN,
    },
    body: JSON.stringify({ query, variables }),
  })

  if (!res.ok) {
    throw new Error(`Shopify request failed: ${res.status} ${res.statusText}`)
  }

  const json = (await res.json()) as { data?: T; errors?: { message: string }[] }
  if (json.errors?.length) {
    throw new Error(`Shopify GraphQL error: ${json.errors.map((e) => e.message).join('; ')}`)
  }
  if (!json.data) {
    throw new Error('Shopify returned no data')
  }
  return json.data
}

const CART_FRAGMENT = /* GraphQL */ `
  fragment CartFields on Cart {
    id
    checkoutUrl
    totalQuantity
    cost {
      subtotalAmount { amount currencyCode }
      totalAmount { amount currencyCode }
    }
  }
`

const CREATE_CART_MUTATION = /* GraphQL */ `
  ${CART_FRAGMENT}
  mutation CreateCart($lines: [CartLineInput!]!) {
    cartCreate(input: { lines: $lines }) {
      cart { ...CartFields }
      userErrors { field message }
    }
  }
`

/**
 * Create a Shopify cart from line items and return it (including the
 * Shopify-hosted `checkoutUrl` to redirect the buyer to).
 *
 * `merchandiseId` on each line must be a Shopify variant GID
 * (gid://shopify/ProductVariant/...). Once the catalog is sourced live from
 * Shopify, our CartItem.variantId will carry that GID directly.
 */
export async function createCart(lines: ShopifyCartLineInput[]): Promise<ShopifyCart> {
  const data = await shopifyFetch<{
    cartCreate: { cart: ShopifyCart | null; userErrors: ShopifyUserError[] }
  }>(CREATE_CART_MUTATION, { lines })

  const { cart, userErrors } = data.cartCreate
  if (userErrors?.length) {
    throw new Error(`Shopify cart error: ${userErrors.map((e) => e.message).join('; ')}`)
  }
  if (!cart) {
    throw new Error('Shopify did not return a cart')
  }
  return cart
}

const SUBSCRIBE_MUTATION = /* GraphQL */ `
  mutation Subscribe($input: CustomerCreateInput!) {
    customerCreate(input: $input) {
      customer { id }
      customerUserErrors { code field message }
    }
  }
`

/**
 * Add an email to the store's customer list as an email-marketing subscriber,
 * so the owner can mail them from Shopify (Customers → Subscribed, or the
 * Shopify Email app).
 *
 * The Storefront API only creates subscribers via customerCreate, which needs a
 * password — we send a random one the person never sees (they can reset it if
 * they ever want an account). An email that's already a customer comes back
 * TAKEN, which we treat as "already on the list".
 */
export async function subscribeEmail(email: string): Promise<'subscribed' | 'already'> {
  const bytes = new Uint8Array(24)
  crypto.getRandomValues(bytes)
  const password = Array.from(bytes, (b) => b.toString(16).padStart(2, '0')).join('')

  const data = await shopifyFetch<{
    customerCreate: {
      customer: { id: string } | null
      customerUserErrors: { code: string | null; field: string[] | null; message: string }[]
    }
  }>(SUBSCRIBE_MUTATION, { input: { email, password, acceptsMarketing: true } })

  const errors = data.customerCreate.customerUserErrors ?? []
  if (errors.some((e) => e.code === 'TAKEN' || e.code === 'CUSTOMER_DISABLED')) return 'already'
  if (errors.length) {
    const invalid = errors.find((e) => e.field?.includes('email'))
    throw new Error(invalid ? 'Please enter a valid email address.' : errors[0].message)
  }
  return 'subscribed'
}
