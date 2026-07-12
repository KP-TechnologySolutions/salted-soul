'use client'

import React, { useState, useMemo } from 'react'
import { Product } from '@/types/product'
import ProductCard from '@/components/product/ProductCard'
import Button from '@/components/ui/Button'

interface ProductGridProps {
  products: Product[]
}

const ProductGrid: React.FC<ProductGridProps> = ({ products }) => {
  const [sortBy, setSortBy] = useState<'newest' | 'price-low' | 'price-high' | 'popular'>('newest')
  const [filterBy, setFilterBy] = useState<'all' | 'new' | 'sale' | 'bestseller'>('all')
  const [searchQuery, setSearchQuery] = useState('')

  // Filter and sort products
  const filteredAndSortedProducts = useMemo(() => {
    let filtered = [...products]

    // Apply search filter
    if (searchQuery.trim()) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      )
    }

    // Apply category filter
    switch (filterBy) {
      case 'new':
        filtered = filtered.filter(p => p.newArrival)
        break
      case 'sale':
        filtered = filtered.filter(p => p.onSale)
        break
      case 'bestseller':
        filtered = filtered.filter(p => p.bestseller)
        break
      // 'all' shows everything
    }

    // Apply sorting
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price)
        break
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price)
        break
      case 'popular':
        // Sort by bestseller first, then featured, then by name
        filtered.sort((a, b) => {
          if (a.bestseller && !b.bestseller) return -1
          if (!a.bestseller && b.bestseller) return 1
          if (a.featured && !b.featured) return -1
          if (!a.featured && b.featured) return 1
          return a.name.localeCompare(b.name)
        })
        break
      case 'newest':
      default:
        filtered.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
    }

    return filtered
  }, [products, sortBy, filterBy, searchQuery])

  return (
    <div className="container-wide">
      {/* Search and Filters */}
      <div className="flex flex-col lg:flex-row gap-6 mb-12">
        {/* Search */}
        <div className="flex-1">
          <div className="relative">
            <input
              type="text"
              placeholder="Search for Christian apparel..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-ocean-500 focus:border-ocean-500"
            />
            <svg 
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-3">
          {[
            { key: 'all', label: 'All Products' },
            { key: 'new', label: 'New Arrivals' },
            { key: 'bestseller', label: 'Bestsellers' },
          ].map(filter => (
            <Button
              key={filter.key}
              variant={filterBy === filter.key ? 'primary' : 'ghost'}
              onClick={() => setFilterBy(filter.key as any)}
              className="whitespace-nowrap"
            >
              {filter.label}
            </Button>
          ))}
        </div>

        {/* Sort Dropdown */}
        <div className="lg:w-48">
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as any)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-ocean-500 focus:border-ocean-500"
          >
            <option value="newest">Newest First</option>
            <option value="popular">Most Popular</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
          </select>
        </div>
      </div>

      {/* Results Count */}
      <div className="flex items-center justify-between mb-8">
        <p className="text-charcoal-600">
          Showing {filteredAndSortedProducts.length} of {products.length} products
          {searchQuery && ` for "${searchQuery}"`}
        </p>

        {/* Clear Filters */}
        {(filterBy !== 'all' || searchQuery) && (
          <Button
            variant="ghost"
            onClick={() => {
              setFilterBy('all')
              setSearchQuery('')
            }}
            className="text-sm"
          >
            Clear All Filters
          </Button>
        )}
      </div>

      {/* Products Grid */}
      {filteredAndSortedProducts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredAndSortedProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              className="animate-fade-in"
            />
          ))}
        </div>
      ) : (
        /* No Results */
        <div className="text-center py-16">
          <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-charcoal-900 mb-2">
            No products found
          </h3>
          <p className="text-charcoal-600 mb-6">
            {searchQuery 
              ? `No products match "${searchQuery}". Try a different search term.`
              : 'No products match your current filters. Try adjusting your selection.'
            }
          </p>
          <Button
            variant="primary"
            onClick={() => {
              setFilterBy('all')
              setSearchQuery('')
            }}
          >
            View All Products
          </Button>
        </div>
      )}

    </div>
  )
}

export default ProductGrid