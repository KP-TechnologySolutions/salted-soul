import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Our Story | Salted Soul',
  description: 'How a few simple "nuggets" God placed on our hearts became Salted Soul — a coastal Christian apparel brand built by Mark & Carol to point people to the Gospel.',
}

export default function StoryPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden bg-charcoal-900">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/hero-bg.webp"
            alt="Salted Soul coastal vintage design"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="relative z-10 text-center text-white max-w-3xl mx-auto px-4">
          <h1 className="text-4xl lg:text-6xl font-bold mb-4">OUR STORY</h1>
          <p className="text-xl">From a few simple &ldquo;nuggets&rdquo; to a calling.</p>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="heading-secondary mb-6">Our Story</h2>
              <div className="space-y-6 text-lg text-charcoal-600 leading-relaxed">
                <p>
                  It began with simple thoughts and ideas, small &ldquo;nuggets&rdquo; that we believe God was
                  placing on our hearts over time. Those thoughts grew into a clear sense of direction. It
                  made us wonder how something so simple could open the door to something deeper.
                </p>
                <p>
                  What if there was a brand or label that could create opportunities to talk about faith and
                  point people to the Gospel? We felt led to build something more than just another apparel
                  brand, something that could be used for God&rsquo;s kingdom work in everyday conversations.
                </p>
                <p className="text-charcoal-900 font-medium">
                  Those thoughts and ideas, those &ldquo;nuggets,&rdquo; became Salted Soul.
                </p>
              </div>

              <div className="mt-8 bg-ocean-50 rounded-xl p-6">
                <blockquote className="text-lg italic text-charcoal-800 mb-3">
                  &ldquo;Salt is good; but if the salt becomes unsalty, with what will you make it salty again?
                  Have salt in yourselves, and be at peace with one another.&rdquo;
                </blockquote>
                <cite className="text-ocean-600 font-semibold">— Mark 9:50</cite>
              </div>
            </div>

            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/our-story-sunset.webp"
                alt="Mark and Carol relaxing on the beach as the sun rises over the South Carolina coast"
                fill
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Meet Mark & Carol */}
      <section className="section-padding bg-surface">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/mark-carol-2.webp"
                  alt="Mark and Carol watching the sunset together on a South Carolina beach"
                  fill
                  className="object-cover object-center"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="heading-secondary mb-6">Meet Mark &amp; Carol</h2>
              <div className="space-y-6 text-lg text-charcoal-600 leading-relaxed">
                <p>
                  We are a husband-and-wife team living along the coast of South Carolina. We love the beach,
                  time with family, and the simple beauty of life near the water.
                </p>
                <p>
                  Our faith in Jesus is the foundation of our lives and marriage. Salted Soul was born from
                  what we believe God placed on our hearts, a desire to blend our love for coastal living with
                  our calling to reflect Him in all we do.
                </p>
                <p>
                  Together, we hope Salted Soul encourages others to live boldly in their faith, carry the
                  peace of Christ, and let their lives point others toward Him in everyday moments.
                </p>
              </div>

              <div className="mt-8 bg-ocean-50 rounded-xl p-6">
                <blockquote className="text-lg italic text-charcoal-800 mb-3">
                  &ldquo;Let your speech always be with grace, as though seasoned with salt, so that you will
                  know how you should respond to each person.&rdquo;
                </blockquote>
                <cite className="text-ocean-600 font-semibold">— Colossians 4:6</cite>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Closing photo (PLACEHOLDER — replace with the photo provided for the last paragraph) */}
      <section className="relative h-[26rem] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/banner-salted-soul.webp"
            alt="Charleston harbor and the Ravenel Bridge at sunset"
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-charcoal-900/55" />
        </div>
        <div className="relative z-10 text-center text-white max-w-2xl mx-auto px-4">
          <p className="font-display text-2xl lg:text-3xl italic leading-relaxed">
            Have salt in yourselves, and be at peace with one another.
          </p>
          <p className="mt-4 text-white/85">This is our calling. This is Salted Soul.</p>
        </div>
      </section>

      {/* What we stand for */}
      <section className="section-padding">
        <div className="container-narrow text-center">
          <h2 className="heading-secondary mb-10">What we stand for</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-ocean-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-charcoal-900 mb-3">Faith-First</h3>
              <p className="text-charcoal-600">
                Every design starts with prayer and biblical truth, made to open doors for real conversations.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-ocean-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-charcoal-900 mb-3">Premium Quality</h3>
              <p className="text-charcoal-600">
                Only the finest materials, because the Gospel message deserves clothing that lasts.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: 'var(--gold)' }}>
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-charcoal-900 mb-3">Kingdom Impact</h3>
              <p className="text-charcoal-600">
                10% of profits support coastal ministries and church plants. Every purchase builds the Kingdom.
              </p>
            </div>
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
            <Link href="/shop" className="btn btn-primary">Shop the collection</Link>
            <Link href="/contact" className="btn btn-outline" style={{ color: 'var(--ocean)', borderColor: 'var(--ocean)' }}>
              Get in touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
