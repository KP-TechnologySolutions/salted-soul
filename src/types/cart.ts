export interface CartItem {
  id: string
  productId: string
  variantId: string
  quantity: number
  product: {
    id: string
    name: string
    slug: string
    image: string
    category: string
  }
  variant: {
    id: string
    name: string
    price: number
    compareAtPrice?: number
    options: Array<{
      name: string
      value: string
    }>
  }
}

export interface Cart {
  items: CartItem[]
  totalItems: number
  totalPrice: number
  discountCode?: string
  discountAmount?: number
  subtotal: number
  shipping: number
  tax: number
  total: number
}

export interface ShippingAddress {
  firstName: string
  lastName: string
  company?: string
  address1: string
  address2?: string
  city: string
  state: string
  zipCode: string
  country: string
  phone?: string
}

export interface BillingAddress extends ShippingAddress {
  email: string
}

export interface Order {
  id: string
  orderNumber: string
  items: CartItem[]
  shippingAddress: ShippingAddress
  billingAddress: BillingAddress
  paymentMethod: 'card' | 'paypal' | 'apple_pay'
  subtotal: number
  shipping: number
  tax: number
  total: number
  status: 'pending' | 'confirmed' | 'shipped' | 'delivered' | 'cancelled'
  createdAt: string
  updatedAt: string
}