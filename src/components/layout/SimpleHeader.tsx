import Link from 'next/link'
import Image from 'next/image'

export default function SimpleHeader() {
  return (
    <header>
      <div className="header-content">
        {/* Logo */}
        <Link href="/" className="logo">
          <div className="logo-image">
            <Image
              src="/salted_soul_logo.webp"
              alt="Salted Soul"
              width={60}
              height={60}
              style={{width: 'auto', height: '60px'}}
            />
          </div>
          <div className="logo-text">
            <h1>Salted Soul</h1>
            <p>Charleston Coastal Faith</p>
          </div>
        </Link>

        {/* Navigation */}
        <nav className="main-nav">
          <Link href="/shop" className="nav-link">
            Shop All
          </Link>
          <Link href="/collections" className="nav-link">
            Collections
          </Link>
          <Link href="/story" className="nav-link">
            Our Story
          </Link>
          <Link href="/contact" className="nav-link">
            Contact
          </Link>
        </nav>

        {/* Actions */}
        <div className="header-actions">
          <Link href="/search" className="header-action">
            🔍
          </Link>
          <Link href="/cart" className="header-action">
            🛒
          </Link>
          <button className="mobile-menu-btn">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  )
}