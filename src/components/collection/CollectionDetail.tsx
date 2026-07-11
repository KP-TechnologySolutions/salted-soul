import Link from 'next/link'
import Image from 'next/image'
import Button from '@/components/ui/Button'
import ProductGrid from '@/components/product/ProductGrid'
import ComingSoon from '@/components/ui/ComingSoon'
import { products, collections } from '@/data/products'

export default function CollectionDetail({ slug, story }: { slug: string; story: string }) {
  const collection = collections.find((c) => c.slug === slug)
  if (!collection) return null

  const items = products.filter((p) => p.collections?.some((c) => c.slug === slug))
  const related = collections.filter((c) => c.slug !== slug)

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-ocean text-white">
        <div className="container-wide py-20">
          <div className="max-w-2xl">
            <h1 className="font-display text-4xl sm:text-5xl font-semibold tracking-tight text-white mb-4">
              {collection.name}
            </h1>
            <p className="text-lg text-white/85 mb-6 max-w-xl leading-relaxed">{collection.description}</p>
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-white/15 border border-white/25 px-4 py-1.5 text-sm font-medium backdrop-blur-sm">
                {items.length > 0 ? `${items.length} ${items.length === 1 ? 'item' : 'items'}` : 'Coming soon'}
              </span>
              <span className="rounded-full bg-white/15 border border-white/25 px-4 py-1.5 text-sm font-medium backdrop-blur-sm">
                10% supports ministry
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="section-padding">
        {items.length > 0 ? (
          <ProductGrid products={items} />
        ) : (
          <ComingSoon
            title="This collection is coming soon"
            message="We’re curating the pieces for this collection now. Our handcrafted hats are ready to ship today."
          />
        )}
      </section>

      {/* Collection story */}
      <section className="bg-surface py-16">
        <div className="container-wide grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="heading-secondary mb-5">The heart of this collection</h2>
            <p className="text-charcoal-600 leading-relaxed mb-8 max-w-[60ch]">{story}</p>
            <Link href="/story">
              <Button variant="outline">Read our story</Button>
            </Link>
          </div>
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-[var(--shadow-md)]">
            <Image src={collection.image.url} alt={collection.name} fill className="object-cover object-center" />
          </div>
        </div>
      </section>

      {/* Related collections */}
      <section className="container-wide py-16">
        <h2 className="heading-secondary mb-8">Explore other collections</h2>
        <div className="grid sm:grid-cols-2 gap-8">
          {related.map((c) => (
            <Link key={c.slug} href={`/collections/${c.slug}`} className="group">
              <div className="aspect-[3/2] rounded-2xl overflow-hidden mb-4 bg-surface">
                <Image
                  src={c.image.url}
                  alt={c.name}
                  width={500}
                  height={333}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="text-xl font-semibold text-charcoal-900 group-hover:text-ocean-700 transition-colors">
                {c.name}
              </h3>
              <p className="text-charcoal-600">{c.description}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
