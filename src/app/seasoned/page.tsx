import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { getAllPosts, formatDate } from '@/lib/posts'

export const metadata: Metadata = {
  title: 'Seasoned — Faith, the Coast & Conversations Worth Having',
  description:
    'Stories, devotions, and everyday encouragement from Salted Soul — faith-forward reflections on grace, the Lowcountry coast, and conversations worth having.',
  keywords: ['christian blog', 'faith devotionals', 'coastal christian', 'charleston christian', 'salted soul stories'],
}

export default function SeasonedPage() {
  const posts = getAllPosts()

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-sand py-16">
        <div className="container-wide text-center">
          <h1 className="heading-primary mb-4">Seasoned</h1>
          <p className="text-xl text-charcoal-600 max-w-2xl mx-auto">
            Faith, the coast, and conversations worth having.
          </p>
        </div>
      </section>

      {/* Post grid */}
      <section className="section-padding">
        <div className="container-wide">
          {posts.length === 0 ? (
            <p className="text-center text-charcoal-600">New stories are coming soon.</p>
          ) : (
            <div className="grid gap-x-10 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <Link key={post.slug} href={`/seasoned/${post.slug}`} className="group block">
                  <div className="relative aspect-[16/10] rounded-2xl overflow-hidden shadow-[var(--shadow-md)] mb-5">
                    <Image
                      src={post.coverImage}
                      alt={post.coverAlt}
                      fill
                      className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <div className="text-sm text-charcoal-400 mb-2">
                    {formatDate(post.date)} &middot; {post.readingTime}
                  </div>
                  <h2 className="font-display text-2xl font-semibold text-charcoal-900 mb-2 leading-snug group-hover:text-ocean-600 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-charcoal-600 leading-relaxed">{post.excerpt}</p>
                  <span className="inline-block mt-4 font-semibold text-ocean-600">Read more &rarr;</span>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
