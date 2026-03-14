export interface Product {
  id: string
  name: string
  slug: string
  description: string
  shortDescription?: string
  price: number
  compareAtPrice?: number
  currency: string
  images: ProductImage[]
  variants: ProductVariant[]
  category: Category
  collections: Collection[]
  tags: string[]
  status: 'active' | 'draft' | 'archived'
  featured: boolean
  bestseller: boolean
  newArrival: boolean
  onSale: boolean
  inventory: Inventory
  seo: SEO
  createdAt: string
  updatedAt: string
}

export interface ProductImage {
  id: string
  url: string
  altText: string
  width: number
  height: number
  position: number
}

export interface ProductVariant {
  id: string
  name: string
  price: number
  compareAtPrice?: number
  sku: string
  barcode?: string
  inventory: number
  options: VariantOption[]
  image?: ProductImage
  available: boolean
}

export interface VariantOption {
  name: string
  value: string
}

export interface Category {
  id: string
  name: string
  slug: string
  description?: string
  image?: ProductImage
  parentId?: string
  children?: Category[]
}

export interface Collection {
  id: string
  name: string
  slug: string
  description: string
  image: ProductImage
  products?: Product[]
  featured: boolean
  sortOrder: number
}

export interface Inventory {
  quantity: number
  trackQuantity: boolean
  allowBackorder: boolean
  policy: 'deny' | 'continue'
}

export interface SEO {
  title: string
  description: string
  keywords: string[]
}

export interface ProductFilter {
  categories?: string[]
  collections?: string[]
  priceRange?: [number, number]
  tags?: string[]
  inStock?: boolean
  onSale?: boolean
  featured?: boolean
  bestseller?: boolean
  newArrival?: boolean
}

export interface ProductSort {
  field: 'name' | 'price' | 'createdAt' | 'updatedAt' | 'bestseller' | 'featured'
  direction: 'asc' | 'desc'
}

export interface ProductSearchParams {
  query?: string
  filter?: ProductFilter
  sort?: ProductSort
  page?: number
  limit?: number
}

export interface ProductSearchResult {
  products: Product[]
  total: number
  page: number
  totalPages: number
  hasNext: boolean
  hasPrev: boolean
}