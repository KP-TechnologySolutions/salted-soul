'use client'

import React, { createContext, useContext, useReducer, useState, ReactNode } from 'react'
import { Cart, CartItem } from '@/types/cart'

interface CartState extends Cart {}

type CartAction = 
  | { type: 'ADD_ITEM'; payload: CartItem }
  | { type: 'REMOVE_ITEM'; payload: string }
  | { type: 'UPDATE_QUANTITY'; payload: { id: string; quantity: number } }
  | { type: 'CLEAR_CART' }
  | { type: 'APPLY_DISCOUNT'; payload: { code: string; amount: number } }

const initialState: CartState = {
  items: [],
  totalItems: 0,
  totalPrice: 0,
  subtotal: 0,
  shipping: 0,
  tax: 0,
  total: 0
}

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existingItemIndex = state.items.findIndex(
        item => item.productId === action.payload.productId && 
                 item.variantId === action.payload.variantId
      )

      let newItems: CartItem[]
      
      if (existingItemIndex >= 0) {
        newItems = state.items.map((item, index) =>
          index === existingItemIndex
            ? { ...item, quantity: item.quantity + action.payload.quantity }
            : item
        )
      } else {
        newItems = [...state.items, action.payload]
      }

      return calculateTotals({ ...state, items: newItems })
    }

    case 'REMOVE_ITEM': {
      const newItems = state.items.filter(item => item.id !== action.payload)
      return calculateTotals({ ...state, items: newItems })
    }

    case 'UPDATE_QUANTITY': {
      const newItems = state.items.map(item =>
        item.id === action.payload.id
          ? { ...item, quantity: action.payload.quantity }
          : item
      ).filter(item => item.quantity > 0)
      
      return calculateTotals({ ...state, items: newItems })
    }

    case 'CLEAR_CART': {
      return { ...initialState }
    }

    case 'APPLY_DISCOUNT': {
      const newState = {
        ...state,
        discountCode: action.payload.code,
        discountAmount: action.payload.amount
      }
      return calculateTotals(newState)
    }

    default:
      return state
  }
}

function calculateTotals(state: CartState): CartState {
  const subtotal = state.items.reduce(
    (sum, item) => sum + (item.variant.price * item.quantity),
    0
  )
  
  const totalItems = state.items.reduce(
    (sum, item) => sum + item.quantity,
    0
  )

  const shipping = subtotal > 70 ? 0 : 5.95 // Free over $70; $5.95 flat per Shopify shipping policy
  const tax = subtotal * 0.08 // 8% tax
  const discount = state.discountAmount || 0
  const total = subtotal + shipping + tax - discount

  return {
    ...state,
    totalItems,
    totalPrice: subtotal,
    subtotal,
    shipping,
    tax,
    total
  }
}

const CartContext = createContext<{
  state: CartState
  addItem: (item: CartItem) => void
  removeItem: (id: string) => void
  updateQuantity: (id: string, quantity: number) => void
  clearCart: () => void
  applyDiscount: (code: string, amount: number) => void
  isOpen: boolean
  openCart: () => void
  closeCart: () => void
} | null>(null)

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, initialState)
  const [isOpen, setIsOpen] = useState(false)

  const openCart = () => setIsOpen(true)
  const closeCart = () => setIsOpen(false)

  const addItem = (item: CartItem) => {
    dispatch({ type: 'ADD_ITEM', payload: item })
  }

  const removeItem = (id: string) => {
    dispatch({ type: 'REMOVE_ITEM', payload: id })
  }

  const updateQuantity = (id: string, quantity: number) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } })
  }

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' })
  }

  const applyDiscount = (code: string, amount: number) => {
    dispatch({ type: 'APPLY_DISCOUNT', payload: { code, amount } })
  }

  return (
    <CartContext.Provider value={{
      state,
      addItem,
      removeItem,
      updateQuantity,
      clearCart,
      applyDiscount,
      isOpen,
      openCart,
      closeCart
    }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}