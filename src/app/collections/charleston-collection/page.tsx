import Image from 'next/image'
import Link from 'next/link'
import Button from '@/components/ui/Button'

// Mock products for Charleston collection
const charlestonProducts = [
  {
    id: 1,
    name: 'Charleston Snapback',
    price: 28.00,
    image: '/CharlestonSnapback.png',
    slug: 'charleston-snapback',
    description: 'Classic snapback representing the Holy City',
    inStock: true,
    featured: true,
  },
  {
    id: 2,
    name: 'Holy City Tee',
    price: 32.00,
    image: '/product-holy-city-tee.jpg',
    slug: 'holy-city-tee',
    description: 'Soft tee celebrating Charleston heritage',
    inStock: true,
  },
  {
    id: 3,
    name: 'Rainbow Row Tank',
    price: 26.00,
    image: '/product-rainbow-row-tank.jpg',
    slug: 'rainbow-row-tank',
    description: 'Inspired by Charleston\'s iconic architecture',
    inStock: true,
  },
]

export default function CharlestonCollectionPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-96 bg-gradient-to-r from-emerald-600 to-teal-600">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container-wide h-full flex items-center">
          <div className="text-white max-w-2xl">
            <h1 className="text-5xl font-bold mb-4">Charleston Collection</h1>
            <p className="text-xl mb-6 opacity-90">
              Inspired by the Holy City where Southern charm meets coastal living. 
              Celebrate the beauty and history of Charleston, South Carolina.
            </p>
            <div className="flex items-center gap-4">
              <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
                6 Items
              </span>
              <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
                Southern Inspired
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="container-wide py-16">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Charleston Collection</h2>
            <p className="text-gray-600">Holy City heritage meets coastal style</p>
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
          {charlestonProducts.map((product) => (
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
                <div className="product-category">Charleston Collection</div>
                <h3 className="product-name">{product.name}</h3>
                <div className="product-pricing">
                  <div className="product-price">${product.price.toFixed(2)}</div>
                  <div className="product-ministry">
                    ${(product.price * 0.1).toFixed(2)} supports ministries
                  </div>
                </div>
                <Link href={`/shop/charleston/${product.slug}`} className="btn btn-primary" style={{width: '100%'}}>
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
                The Holy City
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Charleston, South Carolina - a city where cobblestone streets meet coastal 
                waters, where history whispers from every corner, and where Southern 
                hospitality flows as naturally as the tides.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Our Charleston Collection celebrates this unique blend of heritage and 
                coastal living. Each piece is designed to capture the essence of the 
                Holy City - from the colorful houses of Rainbow Row to the peaceful 
                marshlands that surround this special place.
              </p>
              <Link href="/story">
                <Button variant="outline">Discover Our Charleston Connection</Button>
              </Link>
            </div>
            
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image
                src="/charleston-lifestyle.jpg"
                alt="Charleston Lifestyle"
                width={600}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}