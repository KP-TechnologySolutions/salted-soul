// Minimal Shopify Storefront API types used by the headless integration.
// Expand as we consume more of the Storefront schema (products, collections).

export interface ShopifyMoney {
  amount: string
  currencyCode: string
}

export interface ShopifyCartLineInput {
  merchandiseId: string // Shopify variant GID, e.g. gid://shopify/ProductVariant/123
  quantity: number
}

export interface ShopifyCart {
  id: string
  checkoutUrl: string
  totalQuantity: number
  cost: {
    subtotalAmount: ShopifyMoney
    totalAmount: ShopifyMoney
  }
}

export interface ShopifyUserError {
  field: string[] | null
  message: string
}
