'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Reveal from '@/components/ui/Reveal'
import { products } from '@/data/products'
import {
  Wave,
  Cross,
  HandHeart,
  Tee,
  Truck,
} from '@/components/ui/icons'

export default function HomePage() {
  // Pull real products from the live catalog (hats today) rather than hardcoded
  // placeholders, so the homepage only ever shows items customers can actually buy.
  const bestSellers = products.slice(0, 5).map((p) => ({
    name: p.name,
    price: p.price,
    image: p.images?.[0]?.url ?? '/salted_soul_logo.webp',
    category: p.category.name,
    href: `/shop/${p.category.slug}/${p.slug}`,
    ministry: Math.round(p.price * 0.1 * 100) / 100,
  }))

  return (
    <main>
      {/* Hero Section */}
      <section className="hero-section" style={{ backgroundImage: 'radial-gradient(circle at 50% 42%, rgba(11,42,44,0.30), rgba(11,42,44,0.62)), url("/saltedsoulhero.webp")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
        <div className="container-wide">
          <Reveal className="hero-content">
            <div className="hero-logo-main">
              <Image
                src="/salted_soul_logo.webp"
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
              Faith-inspired designs that spark real conversations.
            </p>

            <div className="hero-buttons">
              <Link href="/shop/hats" className="btn btn-primary">
                Shop the Hats →
              </Link>
              <Link href="/story" className="btn btn-outline">
                Our Story
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="trust-badges">
        <div className="container-wide">
          <div className="badges-container">
            <div className="badge"><Truck width={18} height={18} /><span>Free shipping over $70</span></div>
            <div className="badge"><HandHeart width={18} height={18} /><span>10% supports local ministries</span></div>
            <div className="badge"><Wave width={16} height={16} /><span>Inspired &amp; Designed in Charleston, SC</span></div>
          </div>
        </div>
      </section>

      {/* Best Sellers */}
      <section className="section" style={{ backgroundColor: 'var(--surface)' }}>
        <div className="container-wide">
          <Reveal className="section-header">
            <h2 className="section-title">Our handcrafted hats</h2>
          </Reveal>

          <div className="products-grid">
            {bestSellers.map((product, index) => (
              <Reveal key={product.name} index={index} className="product-card">
                <Link href={product.href} className="product-card-image" aria-label={product.name}>
                  <Image src={product.image} alt={product.name} width={300} height={300} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <div className="product-card-overlay">
                    <span className="btn btn-primary btn-sm">Quick Shop</span>
                  </div>
                </Link>
                <div className="product-card-content">
                  <div className="product-category">{product.category}</div>
                  <h3 className="product-name">{product.name}</h3>
                  <div className="product-pricing">
                    <div className="product-price">${product.price.toFixed(2)}</div>
                  </div>
                  <Link href={product.href} className="btn btn-primary" style={{ width: '100%' }}>
                    View
                  </Link>
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
                starter about the God who makes all things beautiful.
              </p>
              <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem', flexWrap: 'wrap' }}>
                <Link href="/shop/hats" className="btn btn-primary">Shop the Hats</Link>
                <Link href="/story" className="btn btn-outline" style={{ color: 'var(--ocean)', borderColor: 'var(--ocean)' }}>Our Story</Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Handcrafted — behind the scenes */}
      <section className="section" style={{ backgroundColor: 'var(--surface)' }}>
        <div className="container-wide">
          <Reveal className="product-showcase">
            <div className="craft-video">
              <video
                src="/videos/hat-making.mp4"
                poster="/videos/hat-making-poster.jpg"
                autoPlay
                muted
                loop
                playsInline
                controls
                aria-label="Salted Soul hats being made by hand in Charleston"
              />
              <span className="craft-badge">Behind the scenes</span>
            </div>
            <div className="product-info">
              <h2>Designed and Embroidered in Charleston, SC</h2>
              <p>
                Every hat is made by hand, one at a time — no mass production, no shortcuts.
                What you wear started on a workbench in the Lowcountry, shaped with the same
                care and intention we put into every design.
              </p>
              <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem', flexWrap: 'wrap' }}>
                <Link href="/shop/hats" className="btn btn-primary">Shop the Hats</Link>
                <Link href="/story" className="btn btn-outline" style={{ color: 'var(--ocean)', borderColor: 'var(--ocean)' }}>Our Story</Link>
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
              See how Salted Soul apparel looks in real Charleston, SC life — clothing designed to spark
              meaningful conversations and represent your faith with authentic coastal style.
            </p>
          </Reveal>

          <div className="lifestyle-gallery">
            {[
              { src: '/lifestyle/rainbow-row-salted-soul.webp', alt: 'A woman in a Salted Soul hat smiling on Charleston, SC Rainbow Row at golden hour', title: 'Rainbow Row Faith', subtitle: 'Historic Charleston, SC meets modern ministry' },
              { src: '/lifestyle/charleston-lifestyle-2.png', alt: 'Charleston, SC harbor sunset ministry', title: 'Harbor Reflections', subtitle: 'Peaceful moments with purposeful faith' },
              { src: '/lifestyle/chatgpt-charleston-1.png', alt: 'Charleston, SC Christian lifestyle', title: 'Southern Faith', subtitle: 'Authentic Charleston, SC Christian culture' },
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

      {/* Mission Statement */}
      <section className="section mission-section">
        <div className="container-wide">
          <Reveal className="section-header">
            <h2 className="section-title" style={{ color: 'white' }}>Where faith meets the coast</h2>
            <p className="section-subtitle" style={{ color: 'rgba(255,255,255,0.82)' }}>
              Founded by Mark and Carol in Charleston, South Carolina, Salted Soul began with a simple belief:
              that our faith should be as natural and flowing as the ocean tides.
            </p>
          </Reveal>

          <div className="mission-grid">
            {[
              { icon: <Cross width={26} height={26} />, title: 'Faith-First', description: 'Every design starts with prayer and biblical truth.' },
              { icon: <Tee width={26} height={26} />, title: 'Premium Quality', description: 'Only the finest materials, made for lasting comfort.' },
              { icon: <HandHeart width={26} height={26} />, title: 'Kingdom Impact', description: '10% of profits support local ministries.' },
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
