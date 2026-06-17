'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Reveal from '@/components/ui/Reveal'
import {
  StarSolid,
  Wave,
  Cross,
  Columns,
  HandHeart,
  Tee,
  Truck,
} from '@/components/ui/icons'

const Stars = ({ count = 5 }: { count?: number }) => (
  <div className="review-stars" aria-label={`${count} out of 5 stars`}>
    {Array.from({ length: count }).map((_, i) => (
      <StarSolid key={i} width={18} height={18} />
    ))}
  </div>
)

export default function HomePage() {
  const bestSellers = [
    { name: 'Beach Bound Christian Tee', price: 32, image: '/product-6.png', category: "Men's Shirts", ministry: 3.2 },
    { name: 'Sage Sunset Faith Tee', price: 32, image: '/product-sage-sunset.png', category: "Men's Shirts", ministry: 3.2 },
    { name: 'Gear Faith Snapback', price: 35, image: '/gear.png', category: 'Hats', ministry: 3.5 },
    { name: 'Salt & Light Hoodie', price: 48, image: '/product-7.png', category: 'Hoodies', ministry: 4.8 },
  ]

  const reviews = [
    {
      initials: 'MT',
      stars: 5,
      text: '"This Charleston snapback is everything! Started 3 conversations about faith at the beach last weekend. Quality is amazing."',
      name: 'Marcus T.',
      location: 'Folly Beach, SC',
    },
    {
      initials: 'SM',
      stars: 5,
      text: '"Love that my purchase supports ministry! The shirt fits perfectly and the message is bold but not preachy."',
      name: 'Sarah M.',
      location: 'Charleston, SC',
    },
    {
      initials: 'JE',
      stars: 5,
      text: '"Finally found Christian apparel that doesn\'t look cheesy. The coastal vibe is perfect for our lifestyle."',
      name: 'Jake & Emma',
      location: 'Myrtle Beach, SC',
    },
  ]

  const collections = [
    { title: 'Faith Collection', image: '/collection-faith.png', icon: <Cross width={22} height={22} />, href: '/collections/faith-collection', description: 'Bold Christian messages with coastal style. Tees, hoodies, and hats that start conversations about Jesus.' },
    { title: 'Surf Essentials', image: '/collection-surf.png', icon: <Wave width={22} height={22} />, href: '/collections/surf-essentials', description: 'Beach-ready apparel with subtle faith elements. Made for surf sessions and coastal living.' },
    { title: 'Charleston Collection', image: '/collection-charleston.png', icon: <Columns width={22} height={22} />, href: '/collections/charleston-collection', description: 'Hometown pride meets coastal faith in designs inspired by the Holy City.' },
  ]

  return (
    <main>
      {/* Hero Section */}
      <section className="hero-section" style={{ backgroundImage: 'linear-gradient(rgba(11,42,44,0.45), rgba(11,42,44,0.55)), url("/headersalted.png")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
        <div className="container-wide">
          <Reveal className="hero-content">
            <div className="hero-logo-main">
              <Image
                src="/salted_soul_logo.png"
                alt="Salted Soul"
                width={400}
                height={400}
                priority
                style={{ width: 'auto', height: '300px', marginBottom: '2rem' }}
              />
            </div>
            <h1>
              Premium coastal apparel with
              <span className="highlight">authentic faith</span>
            </h1>
            <p>
              Faith-inspired designs that spark real conversations. Every purchase supports coastal ministries.
            </p>

            <div className="hero-buttons">
              <Link href="/collections" className="btn btn-primary">
                Shop Collection →
              </Link>
              <Link href="/story" className="btn btn-outline">
                Our Story
              </Link>
            </div>

            <div className="trust-indicators">
              {[
                { number: '$12,847', label: 'Raised for Ministry' },
                { number: '2,847+', label: 'Happy Customers' },
                { number: '47', label: 'Churches Supported' },
                { number: '4.9/5', label: 'Customer Rating' },
              ].map((stat) => (
                <div key={stat.label} className="trust-card">
                  <div className="trust-number">{stat.number}</div>
                  <div className="trust-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="trust-badges">
        <div className="container-wide">
          <div className="badges-container">
            <div className="badge"><Truck width={18} height={18} /><span>Free shipping over $75</span></div>
            <div className="badge"><HandHeart width={18} height={18} /><span>10% supports coastal ministries</span></div>
            <div className="badge"><StarSolid width={16} height={16} /><span>2,847+ happy customers</span></div>
          </div>
        </div>
      </section>

      {/* Best Sellers */}
      <section className="section" style={{ backgroundColor: 'var(--surface)' }}>
        <div className="container-wide">
          <Reveal className="section-header">
            <h2 className="section-title">Best sellers</h2>
            <p className="section-subtitle">Our most loved coastal Christian apparel</p>
          </Reveal>

          <div className="products-grid">
            {bestSellers.map((product, index) => (
              <Reveal key={product.name} index={index} className="product-card">
                <div className="product-card-image">
                  <Image src={product.image} alt={product.name} width={300} height={300} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <div className="product-card-overlay">
                    <button className="btn btn-primary btn-sm">Quick Shop</button>
                  </div>
                </div>
                <div className="product-card-content">
                  <div className="product-category">{product.category}</div>
                  <h3 className="product-name">{product.name}</h3>
                  <div className="product-pricing">
                    <div className="product-price">${product.price}.00</div>
                    <div className="product-ministry">${product.ministry.toFixed(2)} supports ministries</div>
                  </div>
                  <button className="btn btn-primary" style={{ width: '100%' }}>
                    Add to Cart — ${product.price}
                  </button>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="section">
        <div className="container-wide">
          <Reveal className="section-header">
            <h2 className="section-title">What customers say</h2>
            <p className="section-subtitle">Real reviews from the Salted Soul family</p>
          </Reveal>

          <div className="reviews-grid">
            {reviews.map((review, index) => (
              <Reveal key={review.name} index={index} className="review-card">
                <Stars count={review.stars} />
                <p className="review-text">{review.text}</p>
                <div className="review-author">
                  <div className="review-photo" aria-hidden="true">{review.initials}</div>
                  <div>
                    <div className="review-name">{review.name}</div>
                    <div className="review-location">{review.location}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Product */}
      <section className="section">
        <div className="container-wide">
          <Reveal className="product-showcase">
            <div className="product-image">
              <Image src="/CharlestonSnapback.png" alt="Charleston Snapback — Holy City design" width={600} height={600} style={{ width: '100%', height: 'auto' }} />
            </div>
            <div className="product-info">
              <h2>Charleston Snapback</h2>
              <p>
                Where Charleston charm meets Kingdom calling. This isn&apos;t just a hat — it&apos;s a conversation
                starter about the God who makes all things beautiful, including the Holy City we call home.
              </p>
              <div className="price-info">
                <div className="price">$32.00</div>
                <div className="ministry-support">$3.20 supports coastal ministries</div>
              </div>
              <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem', flexWrap: 'wrap' }}>
                <Link href="/shop/charleston-snapback" className="btn btn-primary">Shop Now — $32</Link>
                <Link href="/shop/hats" className="btn btn-outline" style={{ color: 'var(--ocean)', borderColor: 'var(--ocean)' }}>View All Hats</Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Lifestyle Gallery */}
      <section className="section mission-section">
        <div className="container-wide">
          <Reveal className="section-header">
            <h2 className="section-title" style={{ color: 'white' }}>Live your faith in style</h2>
            <p className="section-subtitle" style={{ color: 'rgba(255,255,255,0.82)' }}>
              See how Salted Soul apparel looks in real Charleston life — clothing designed to spark
              meaningful conversations and represent your faith with authentic coastal style.
            </p>
          </Reveal>

          <div className="lifestyle-gallery">
            {[
              { src: '/lifestyle/charleston-lifestyle-1.png', alt: 'Charleston Rainbow Row Christian lifestyle', title: 'Rainbow Row Faith', subtitle: 'Historic Charleston meets modern ministry' },
              { src: '/lifestyle/charleston-lifestyle-2.png', alt: 'Charleston harbor sunset ministry', title: 'Harbor Reflections', subtitle: 'Peaceful moments with purposeful faith' },
              { src: '/lifestyle/chatgpt-charleston-1.png', alt: 'Charleston Christian lifestyle', title: 'Southern Faith', subtitle: 'Authentic Charleston Christian culture' },
            ].map((item, index) => (
              <Reveal key={item.title} index={index} className="lifestyle-image">
                <Image src={item.src} alt={item.alt} width={400} height={600} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div className="lifestyle-overlay">
                  <h3 className="lifestyle-title">{item.title}</h3>
                  <p className="lifestyle-subtitle">{item.subtitle}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="section">
        <div className="container-wide">
          <Reveal className="section-header">
            <h2 className="section-title">Featured collections</h2>
            <p className="section-subtitle">Curated collections that blend authentic faith with coastal soul</p>
          </Reveal>

          <div className="collections-grid">
            {collections.map((collection, index) => (
              <Reveal key={collection.title} index={index} className="collection-card">
                <div className="collection-image">
                  <Image src={collection.image} alt={collection.title} width={500} height={400} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <span className="collection-badge">{collection.icon}</span>
                </div>
                <div className="collection-content">
                  <h3 className="collection-title">{collection.title}</h3>
                  <p className="collection-description">{collection.description}</p>
                  <Link href={collection.href} className="btn btn-primary">Shop Collection</Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="section mission-section">
        <div className="container-wide">
          <Reveal className="section-header">
            <h2 className="section-title" style={{ color: 'white' }}>Where faith meets the surf</h2>
            <p className="section-subtitle" style={{ color: 'rgba(255,255,255,0.82)' }}>
              Founded by Mark in Charleston, South Carolina, Salted Soul began with a simple belief:
              that our faith should be as natural and flowing as the ocean waves.
            </p>
          </Reveal>

          <div className="mission-grid">
            {[
              { icon: <Cross width={26} height={26} />, title: 'Faith-First', description: 'Every design starts with prayer and biblical truth.' },
              { icon: <Tee width={26} height={26} />, title: 'Premium Quality', description: 'Only the finest materials, made for lasting comfort.' },
              { icon: <HandHeart width={26} height={26} />, title: 'Kingdom Impact', description: '10% of profits support coastal ministries.' },
            ].map((card, index) => (
              <Reveal key={card.title} index={index} className="mission-card">
                <div className="mission-icon">{card.icon}</div>
                <h3 className="mission-title">{card.title}</h3>
                <p className="mission-description">{card.description}</p>
              </Reveal>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link href="/story" className="btn btn-outline">Read Our Full Story</Link>
          </div>
        </div>
      </section>
    </main>
  )
}
