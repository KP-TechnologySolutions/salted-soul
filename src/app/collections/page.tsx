import Image from 'next/image'
import Link from 'next/link'
import Button from '@/components/ui/Button'

const collections = [
  {
    name: 'Faith Collection',
    slug: 'faith-collection',
    description: 'Christian apparel with coastal soul - designed to start conversations and share faith',
    image: '/collection-faith.png',
    itemCount: 12,
    featured: true,
  },
  {
    name: 'Surf Essentials',
    slug: 'surf-essentials', 
    description: 'Everything you need for life by the ocean - from beach days to boardwalks',
    image: '/collection-surf.png',
    itemCount: 8,
  },
  {
    name: 'Charleston Collection',
    slug: 'charleston-collection',
    description: 'Inspired by the Holy City - where Southern charm meets coastal living',
    image: '/collection-charleston.png', 
    itemCount: 6,
  },
]

export default function CollectionsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-50 to-teal-50 py-16">
        <div className="container-wide text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Collections
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Curated collections that blend faith, coastal lifestyle, and timeless style. 
            Each piece is designed to start conversations and share your story.
          </p>
        </div>
      </div>

      {/* Collections Grid */}
      <div className="container-wide py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {collections.map((collection) => (
            <div key={collection.slug} className="group relative">
              <div className="aspect-[4/5] bg-gray-100 rounded-lg overflow-hidden mb-6">
                <Image
                  src={collection.image}
                  alt={collection.name}
                  width={400}
                  height={500}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {collection.featured && (
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-600 text-white text-sm font-medium px-3 py-1 rounded-full">
                      Featured
                    </span>
                  </div>
                )}
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-gray-900">{collection.name}</h3>
                  <span className="text-sm text-gray-500">{collection.itemCount} items</span>
                </div>
                
                <p className="text-gray-600 text-sm leading-relaxed">
                  {collection.description}
                </p>
                
                <Link href={`/collections/${collection.slug}`}>
                  <Button className="w-full mt-4">
                    Shop {collection.name}
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mission Statement */}
      <div className="bg-gray-50 py-16">
        <div className="container-wide text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Where Faith Meets the Surf
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Every collection is designed with intention - to help you share your faith, 
            embrace coastal living, and start meaningful conversations. When you wear Salted Soul, 
            you're not just making a fashion statement, you're sharing a message of hope.
          </p>
          <Link href="/story">
            <Button variant="outline">
              Read Our Story
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}