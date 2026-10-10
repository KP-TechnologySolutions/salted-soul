import { Metadata } from 'next'
import { pageMetadata } from '@/lib/seo'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { getPostSlugs, getPostBySlug, formatDate, type Post } from '@/lib/posts'
import { JsonLd, breadcrumbJsonLd, SITE } from '@/lib/jsonld'

// Posts carry no named author in their frontmatter or text (they are written
// as "we", the brand), so author and publisher are the Salted Soul organization.
function blogPostingJsonLd(post: Post) {
  const url = `${SITE}/seasoned/${post.slug}/`
  const org = {
    '@type': 'Organization',
    name: 'Salted Soul',
    url: SITE,
    logo: { '@type': 'ImageObject', url: `${SITE}/salted_soul_logo.webp` },
  }
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    author: org,
    publisher: org,
    image: [`${SITE}${post.coverImage}`],
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    url,
    keywords: post.keywords.join(', '),
    isPartOf: { '@type': 'Blog', name: 'Seasoned', url: `${SITE}/seasoned/` },
  }
}

interface Params {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params
  if (!getPostSlugs().includes(slug)) return {}
  const post = getPostBySlug(slug)
  return pageMetadata({
    path: `/seasoned/${slug}/`,
    title: post.title,
    description: post.excerpt,
    keywords: post.keywords,
    type: 'article',
    images: post.coverImage ? [{ url: post.coverImage, alt: post.coverAlt }] : undefined,
  })
}

export default async function PostPage({ params }: Params) {
  const { slug } = await params
  if (!getPostSlugs().includes(slug)) notFound()
  const post = getPostBySlug(slug)

  return (
    <div className="min-h-screen bg-white">
      <JsonLd data={blogPostingJsonLd(post)} />
      <JsonLd
        data={breadcrumbJsonLd([
          ['Seasoned', '/seasoned/'],
          [post.title, `/seasoned/${post.slug}/`],
        ])}
      />
      <article>
        {/* Title */}
        <header className="bg-gradient-sand pt-16 pb-20">
          <div className="container-narrow text-center">
            <Link href="/seasoned" className="text-sm font-medium text-ocean-600 hover:text-ocean-700">
              &larr; Seasoned
            </Link>
            <div className="text-sm text-charcoal-500 mt-4 mb-3">
              {formatDate(post.date)} &middot; {post.readingTime}
            </div>
            <h1 className="heading-primary mb-0">{post.title}</h1>
          </div>
        </header>

        {/* Cover */}
        <div className="container-narrow -mt-10">
          <div className="relative aspect-[16/9] rounded-2xl overflow-hidden shadow-[var(--shadow-lg)]">
            <Image
              src={post.coverImage}
              alt={post.coverAlt}
              fill
              className="object-cover object-center"
              sizes="(max-width: 900px) 100vw, 800px"
              priority
            />
          </div>
        </div>

        {/* Body */}
        <div className="section-padding">
          <div className="container-narrow">
            <div
              className="post-body max-w-[68ch] mx-auto text-charcoal-700"
              dangerouslySetInnerHTML={{ __html: post.contentHtml }}
            />
          </div>
        </div>
      </article>

      {/* CTA */}
      <section className="section-padding-sm bg-surface">
        <div className="container-narrow text-center">
          <h2 className="heading-secondary mb-3">Wear the message. Start the conversation.</h2>
          <p className="text-charcoal-600 mb-6 max-w-xl mx-auto">
            Faith-forward hats, inspired in Charleston, SC — designed to spark real conversations.
          </p>
          <Link href="/shop/hats" className="btn btn-primary">Shop the hats</Link>
        </div>
      </section>
    </div>
  )
}
