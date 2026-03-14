'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function HomePage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="hero-section" style={{backgroundImage: 'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url("/headersalted.png")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
        <div className="container-wide">
          <div className="hero-content">
            <div className="hero-logo-main">
              <Image
                src="/salted_soul_logo.png"
                alt="Salted Soul"
                width={400}
                height={400}
                style={{width: 'auto', height: '300px', marginBottom: '2rem'}}
              />
            </div>
            <h1>
              PREMIUM COASTAL APPAREL WITH
              <span className="highlight">AUTHENTIC FAITH</span>
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
              <div className="trust-card">
                <div className="trust-number" style={{color: '#4fd1c7'}}>$12,847</div>
                <div className="trust-label">Raised for Ministry</div>
              </div>
              <div className="trust-card">
                <div className="trust-number" style={{color: '#63b3ed'}}>1,247+</div>
                <div className="trust-label">Happy Customers</div>
              </div>
              <div className="trust-card">
                <div className="trust-number" style={{color: '#f6e05e'}}>47</div>
                <div className="trust-label">Churches Supported</div>
              </div>
              <div className="trust-card">
                <div className="trust-number" style={{color: '#68d391'}}>4.9/5</div>
                <div className="trust-label">Customer Rating</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="trust-badges">
        <div className="container-wide">
          <div className="badges-container">
            <div className="badge">
              <span>🚚</span>
              <span>Free shipping over $75</span>
            </div>
            <div className="badge">
              <span>🏦</span>
              <span>10% supports coastal ministries</span>
            </div>
            <div className="badge">
              <span>⭐</span>
              <span>2,847+ happy customers</span>
            </div>
          </div>
        </div>
      </section>

      {/* Best Sellers */}
      <section className="section" style={{backgroundColor: '#f7fafc'}}>
        <div className="container-wide">
          <div className="section-header">
            <h2 className="section-title">BEST SELLERS</h2>
            <p className="section-subtitle">Our most loved coastal Christian apparel</p>
          </div>

          <div className="products-grid">
            {[
              { name: "Beach Bound Christian Tee", price: 32, image: "/product-6.png", category: "Men's Shirts", ministry: 3.20 },
              { name: "Sage Sunset Faith Tee", price: 32, image: "/product-sage-sunset.png", category: "Men's Shirts", ministry: 3.20 },
              { name: "Gear Faith Snapback", price: 35, image: "/gear.png", category: "Hats", ministry: 3.50 },
              { name: "Salt & Light Hoodie", price: 48, image: "/product-7.png", category: "Hoodies", ministry: 4.80 }
            ].map((product, index) => (
              <div key={index} className="product-card">
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
                  <div className="product-category">{product.category}</div>
                  <h3 className="product-name">{product.name}</h3>
                  <div className="product-pricing">
                    <div className="product-price">${product.price}.00</div>
                    <div className="product-ministry">
                      ${product.ministry.toFixed(2)} supports ministries
                    </div>
                  </div>
                  <button className="btn btn-primary" style={{width: '100%'}}>
                    Add to Cart - ${product.price}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="section">
        <div className="container-wide">
          <div className="section-header">
            <h2 className="section-title">WHAT CUSTOMERS SAY</h2>
            <p className="section-subtitle">Real reviews from the Salted Soul family</p>
          </div>

          <div className="reviews-grid">
            <div className="review-card">
              <div className="review-stars">⭐⭐⭐⭐⭐</div>
              <p className="review-text">
                "This Charleston snapback is everything! Started 3 conversations about faith at the beach last weekend. Quality is amazing."
              </p>
              <div className="review-author">
                <div className="review-photo">👨</div>
                <div>
                  <div className="review-name">Marcus T.</div>
                  <div className="review-location">Folly Beach, SC</div>
                </div>
              </div>
            </div>

            <div className="review-card">
              <div className="review-stars">⭐⭐⭐⭐⭐</div>
              <p className="review-text">
                "Love that my purchase supports ministry! The shirt fits perfectly and the message is bold but not preachy."
              </p>
              <div className="review-author">
                <div className="review-photo">👩</div>
                <div>
                  <div className="review-name">Sarah M.</div>
                  <div className="review-location">Charleston, SC</div>
                </div>
              </div>
            </div>

            <div className="review-card">
              <div className="review-stars">⭐⭐⭐⭐⭐</div>
              <p className="review-text">
                "Finally found Christian apparel that doesn't look cheesy. Coastal vibe is perfect for our lifestyle."
              </p>
              <div className="review-author">
                <div className="review-photo">👫</div>
                <div>
                  <div className="review-name">Jake & Emma</div>
                  <div className="review-location">Myrtle Beach, SC</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Product */}
      <section className="section">
        <div className="container-wide">
          <div className="product-showcase">
            <div className="product-image">
              <Image
                src="/CharlestonSnapback.png"
                alt="Charleston Snapback - Holy City Design"
                width={600}
                height={600}
                style={{width: '100%', height: 'auto'}}
              />
            </div>
            <div className="product-info">
              <h2>Charleston Snapback</h2>
              <p>
                Where Charleston charm meets Kingdom calling. This isn't just a hat—it's a conversation 
                starter about the God who makes all things beautiful, including the Holy City we call home.
              </p>
              <div className="price-info">
                <div className="price">$32.00</div>
                <div className="ministry-support">$3.20 supports coastal ministries</div>
              </div>
              <div style={{display: 'flex', gap: '1rem', marginTop: '1.5rem'}}>
                <Link href="/shop/charleston-snapback" className="btn btn-primary">
                  Shop Now - $32
                </Link>
                <Link href="/shop/hats" className="btn btn-outline" style={{color: '#319795', borderColor: '#319795'}}>
                  View All Hats
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lifestyle Gallery */}
      <section className="section mission-section">
        <div className="container-wide">
          <div className="section-header">
            <h2 className="section-title" style={{color: 'white'}}>LIVE YOUR FAITH IN STYLE</h2>
            <p className="section-subtitle" style={{color: 'rgba(255,255,255,0.8)'}}>
              See how Salted Soul apparel looks in real Charleston life. Our Christian clothing is designed 
              to spark meaningful conversations and represent your faith with authentic coastal style.
            </p>
          </div>

          <div className="lifestyle-gallery">
            <div className="lifestyle-image">
              <Image
                src="/lifestyle/charleston-lifestyle-1.png"
                alt="Charleston Rainbow Row Christian Lifestyle"
                width={400}
                height={600}
                style={{width: '100%', height: '100%', objectFit: 'cover'}}
              />
              <div className="lifestyle-overlay">
                <h3 className="lifestyle-title">Rainbow Row Faith</h3>
                <p className="lifestyle-subtitle">Historic Charleston meets modern ministry</p>
              </div>
            </div>

            <div className="lifestyle-image">
              <Image
                src="/lifestyle/charleston-lifestyle-2.png"
                alt="Charleston Harbor Sunset Ministry"
                width={400}
                height={600}
                style={{width: '100%', height: '100%', objectFit: 'cover'}}
              />
              <div className="lifestyle-overlay">
                <h3 className="lifestyle-title">Harbor Reflections</h3>
                <p className="lifestyle-subtitle">Peaceful moments with purposeful faith</p>
              </div>
            </div>

            <div className="lifestyle-image">
              <Image
                src="/lifestyle/chatgpt-charleston-1.png"
                alt="Charleston Christian Lifestyle"
                width={400}
                height={600}
                style={{width: '100%', height: '100%', objectFit: 'cover'}}
              />
              <div className="lifestyle-overlay">
                <h3 className="lifestyle-title">Southern Faith</h3>
                <p className="lifestyle-subtitle">Authentic Charleston Christian culture</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="section">
        <div className="container-wide">
          <div className="section-header">
            <h2 className="section-title">FEATURED COLLECTIONS</h2>
            <p className="section-subtitle">Curated collections that blend authentic faith with coastal soul</p>
          </div>

          <div className="collections-grid">
            <div className="collection-card">
              <div className="collection-image" style={{background: 'linear-gradient(135deg, #3182ce 0%, #553c9a 100%)'}}>
                <div className="collection-icon">⛪</div>
              </div>
              <div className="collection-content">
                <h3 className="collection-title">Faith Collection</h3>
                <p className="collection-description">
                  Bold Christian messages with coastal style. T-shirts, hoodies, and hats that start conversations about Jesus.
                </p>
                <Link href="/collections/faith-collection" className="btn btn-primary">
                  Shop Collection
                </Link>
              </div>
            </div>

            <div className="collection-card">
              <div className="collection-image" style={{background: 'linear-gradient(135deg, #38b2ac 0%, #3182ce 100%)'}}>
                <div className="collection-icon">🏄</div>
              </div>
              <div className="collection-content">
                <h3 className="collection-title">Surf Essentials</h3>
                <p className="collection-description">
                  Beach-ready apparel with subtle faith elements. Perfect for surf sessions and coastal living.
                </p>
                <Link href="/collections/surf-essentials" className="btn btn-primary">
                  Shop Collection
                </Link>
              </div>
            </div>

            <div className="collection-card">
              <div className="collection-image" style={{background: 'linear-gradient(135deg, #ed8936 0%, #f56565 100%)'}}>
                <div className="collection-icon">🏛️</div>
              </div>
              <div className="collection-content">
                <h3 className="collection-title">Charleston Collection</h3>
                <p className="collection-description">
                  Hometown pride meets coastal faith in designs inspired by the Holy City
                </p>
                <Link href="/collections/charleston-collection" className="btn btn-primary">
                  Shop Collection
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Mission Statement */}
      <section className="section mission-section">
        <div className="container-wide">
          <div className="section-header">
            <h2 className="section-title" style={{color: 'white'}}>Where Faith Meets The Surf</h2>
            <p className="section-subtitle" style={{color: 'rgba(255,255,255,0.8)'}}>
              Founded by Mark in Charleston, South Carolina, Salted Soul began with a simple belief: 
              that our faith should be as natural and flowing as the ocean waves.
            </p>
          </div>
          
          <div className="mission-grid">
            <div className="mission-card">
              <div className="mission-icon">⛪</div>
              <h3 className="mission-title">Faith-First</h3>
              <p className="mission-description">Every design starts with prayer and biblical truth</p>
            </div>
            <div className="mission-card">
              <div className="mission-icon">👕</div>
              <h3 className="mission-title">Premium Quality</h3>
              <p className="mission-description">Using only the finest materials for lasting comfort</p>
            </div>
            <div className="mission-card">
              <div className="mission-icon">🙏</div>
              <h3 className="mission-title">Kingdom Impact</h3>
              <p className="mission-description">10% of profits support coastal ministries</p>
            </div>
          </div>

          <div style={{textAlign: 'center', marginTop: '3rem'}}>
            <Link href="/story" className="btn btn-outline">
              Read Our Full Story
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}