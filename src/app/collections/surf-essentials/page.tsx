import Image from 'next/image'
import Link from 'next/link'
import Button from '@/components/ui/Button'

// Mock products for surf essentials
const surfProducts = [
  {
    id: 1,
    name: 'Ocean Vibes Board Shorts',
    price: 42.00,
    image: '/product-board-shorts.jpg',
    slug: 'ocean-vibes-board-shorts',
    description: 'Performance board shorts for surf and lifestyle',
    inStock: true,
  },
  {
    id: 2,
    name: 'Wave Rider Tee',
    price: 28.00,
    image: '/product-wave-rider.jpg', 
    slug: 'wave-rider-tee',
    description: 'Classic surf tee for endless summer vibes',
    inStock: true,
  },
  {
    id: 3,
    name: 'Coastal Cruiser Hat',
    price: 32.00,
    image: '/hat-gear-snapback.png',
    slug: 'coastal-cruiser-hat',
    description: 'Premium trucker hat for beach adventures',
    inStock: true,
  },
  {
    id: 4,
    name: 'Salt Life Tank',
    price: 24.00,
    image: '/product-salt-life-tank.jpg',
    slug: 'salt-life-tank',
    description: 'Lightweight tank for beach days',
    inStock: true,
  },
]

export default function SurfEssentialsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-96 bg-gradient-to-r from-teal-500 to-blue-500">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container-wide h-full flex items-center">
          <div className="text-white max-w-2xl">
            <h1 className="text-5xl font-bold mb-4">Surf Essentials</h1>
            <p className="text-xl mb-6 opacity-90">
              Everything you need for life by the ocean. From dawn patrol to beach bonfires, 
              gear up for endless summer adventures.
            </p>
            <div className="flex items-center gap-4">
              <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
                8 Items
              </span>
              <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
                Performance Ready
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="container-wide py-16">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Surf Essentials</h2>
            <p className="text-gray-600">Gear for ocean adventures</p>
          </div>
          
          <div className="flex items-center gap-4">
            <select className="border border-gray-300 rounded-lg px-4 py-2 text-sm">
              <option>Sort by: Featured</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Newest First</option>
            </select>
          </div>
        </div>

        <div className="products-grid">
          {surfProducts.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-card-image">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={300}
                  height={300}
                  style={{width: '100%', height: '100%', objectFit: 'cover'}}
                />
                <div className="product-card-overlay">
                  <button className="btn btn-primary btn-sm">Quick Shop</button>
                </div>
              </div>
              <div className="product-card-content">
                <div className="product-category">Surf Essentials</div>
                <h3 className="product-name">{product.name}</h3>
                <div className="product-pricing">
                  <div className="product-price">${product.price.toFixed(2)}</div>
                  <div className="product-ministry">
                    ${(product.price * 0.1).toFixed(2)} supports ministries
                  </div>
                </div>
                <Link href={`/shop/surf-essentials/${product.slug}`} className="btn btn-primary" style={{width: '100%'}}>
                  Shop Now - ${product.price.toFixed(2)}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Collection Story */}
      <div className="bg-gray-50 py-16">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image
                src="/surf-lifestyle.jpg"
                alt="Surf Lifestyle"
                width={600}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
            
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Built for the Ocean
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our Surf Essentials collection is designed for those who live and breathe 
                ocean life. Whether you're paddling out at sunrise or lounging on the sand, 
                these pieces move with you and the rhythm of the waves.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Made with premium materials that can handle salt water, sun, and sand, 
                while keeping you comfortable and stylish from beach to street.
              </p>
              <Link href="/shop">
                <Button>Shop All Products</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}