import Image from 'next/image'
import Link from 'next/link'
import Button from '@/components/ui/Button'

// Mock products for the faith collection
const faithProducts = [
  {
    id: 1,
    name: 'Faith Over Fear Tee',
    price: 32.00,
    image: '/product-faith-tee.jpg',
    slug: 'faith-over-fear-tee',
    description: 'Classic coastal tee with faith message',
    inStock: true,
    isNewArrival: true,
  },
  {
    id: 2,
    name: 'Blessed Coast Snapback',
    price: 28.00,
    image: '/hat-charleston-snap.png',
    slug: 'blessed-coast-snapback',
    description: 'Premium snapback with coastal Christian design',
    inStock: true,
  },
  {
    id: 3,
    name: 'Salt & Light Hoodie',
    price: 48.00,
    image: '/product-salt-light-hoodie.jpg',
    slug: 'salt-light-hoodie',
    description: 'Comfortable hoodie for coastal faith living',
    inStock: true,
  },
  {
    id: 4,
    name: 'Grace Waves Tank',
    price: 26.00,
    image: '/product-grace-waves-tank.jpg',
    slug: 'grace-waves-tank',
    description: 'Flowy tank top with ocean-inspired faith message',
    inStock: true,
  },
]

export default function FaithCollectionPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-96 bg-gradient-to-r from-blue-600 to-teal-600">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container-wide h-full flex items-center">
          <div className="text-white max-w-2xl">
            <h1 className="text-5xl font-bold mb-4">Faith Collection</h1>
            <p className="text-xl mb-6 opacity-90">
              Christian apparel with coastal soul. Designed to start conversations 
              and share your faith wherever the waves take you.
            </p>
            <div className="flex items-center gap-4">
              <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
                12 Items
              </span>
              <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
                10% Goes to Ministry
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="container-wide py-16">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Faith Collection</h2>
            <p className="text-gray-600">Clothing that shares your story</p>
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
          {faithProducts.map((product) => (
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
                <div className="product-category">Faith Collection</div>
                <h3 className="product-name">{product.name}</h3>
                <div className="product-pricing">
                  <div className="product-price">${product.price.toFixed(2)}</div>
                  <div className="product-ministry">
                    ${(product.price * 0.1).toFixed(2)} supports ministries
                  </div>
                </div>
                <Link href={`/shop/faith-collection/${product.slug}`} className="btn btn-primary" style={{width: '100%'}}>
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
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Where Faith Meets the Surf
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                The Faith Collection was born from a simple belief: that our faith should be 
                as natural and flowing as the ocean waves. Each piece is designed to spark 
                conversations about hope, love, and the One who calms the storms.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                With every purchase from the Faith Collection, 10% goes directly to supporting 
                coastal ministries and spreading hope to communities around the world.
              </p>
              <Link href="/story">
                <Button variant="outline">Learn More About Our Mission</Button>
              </Link>
            </div>
            
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image
                src="/faith-collection-lifestyle.jpg"
                alt="Faith Collection Lifestyle"
                width={600}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Related Collections */}
      <div className="container-wide py-16">
        <h3 className="text-2xl font-bold text-gray-900 mb-8">Explore Other Collections</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Link href="/collections/surf-essentials" className="group">
            <div className="aspect-[3/2] bg-gray-100 rounded-lg overflow-hidden mb-4">
              <Image
                src="/collection-surf.png"
                alt="Surf Essentials Collection"
                width={400}
                height={267}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h4 className="text-xl font-bold text-gray-900">Surf Essentials</h4>
            <p className="text-gray-600">Everything you need for life by the ocean</p>
          </Link>
          
          <Link href="/collections/charleston-collection" className="group">
            <div className="aspect-[3/2] bg-gray-100 rounded-lg overflow-hidden mb-4">
              <Image
                src="/collection-charleston.png"
                alt="Charleston Collection"
                width={400}
                height={267}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h4 className="text-xl font-bold text-gray-900">Charleston Collection</h4>
            <p className="text-gray-600">Inspired by the Holy City</p>
          </Link>
        </div>
      </div>
    </div>
  )
}