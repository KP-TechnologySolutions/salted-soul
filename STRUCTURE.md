# SALTED SOUL - PREMIUM SURF ECOMMERCE STRUCTURE

## 📁 COMPLETE FOLDER STRUCTURE

```
src/
├── app/                          # Next.js 15 App Router
│   ├── globals.css               # Global styles + Tailwind
│   ├── layout.tsx                # Root layout
│   ├── page.tsx                  # Homepage
│   ├── shop/                     # Product pages
│   │   ├── page.tsx              # All products
│   │   ├── [category]/           # Category pages
│   │   └── [category]/[product]/ # Individual product
│   ├── collections/              # Collection pages
│   ├── story/                    # About/brand story
│   ├── contact/                  # Contact page
│   └── api/                      # API routes
├── components/                   # Reusable components
│   ├── layout/                   # Layout components
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── MegaMenu.tsx
│   │   └── Navigation.tsx
│   ├── product/                  # Product-specific components
│   │   ├── ProductCard.tsx
│   │   ├── ProductCarousel.tsx
│   │   ├── ProductGrid.tsx
│   │   ├── QuickView.tsx
│   │   └── ProductGallery.tsx
│   ├── sections/                 # Homepage sections
│   │   ├── Hero.tsx
│   │   ├── FeaturedCollections.tsx
│   │   ├── BestSellers.tsx
│   │   ├── BrandStory.tsx
│   │   ├── NewArrivals.tsx
│   │   ├── LifestyleGallery.tsx
│   │   ├── SocialProof.tsx
│   │   └── Newsletter.tsx
│   ├── ui/                       # Base UI components
│   │   ├── Button.tsx
│   │   ├── Badge.tsx
│   │   ├── Card.tsx
│   │   ├── Modal.tsx
│   │   ├── Rating.tsx
│   │   └── PriceDisplay.tsx
│   └── animations/               # Motion components
│       ├── FadeIn.tsx
│       ├── SlideUp.tsx
│       └── ParallaxImage.tsx
├── lib/                          # Utilities
│   ├── utils.ts                  # Helper functions
│   ├── constants.ts              # Site constants
│   └── animations.ts             # Animation configs
├── types/                        # TypeScript types
│   ├── product.ts
│   ├── collection.ts
│   └── user.ts
└── data/                         # Static data
    ├── products.ts
    ├── collections.ts
    └── navigation.ts
```

## 📱 HOMEPAGE WIREFRAME STRUCTURE

### Desktop Layout:
```
┌─────────────────────────────────────┐
│ HEADER (Sticky)                     │ 80px
│ Logo | Menu | Search | Cart | Account│
├─────────────────────────────────────┤
│                                     │
│ HERO SECTION (Full Viewport)        │ 100vh
│ Video Background + CTA              │
│                                     │
├─────────────────────────────────────┤
│ FEATURED COLLECTIONS (3-Grid)       │ 600px
│ [Collection 1][Collection 2][3]     │
├─────────────────────────────────────┤
│ BEST SELLERS (Horizontal Scroll)    │ 500px
│ ← [Product][Product][Product] →     │
├─────────────────────────────────────┤
│ BRAND STORY (Split Layout)          │ 400px
│ [Image 50%] [Text Content 50%]      │
├─────────────────────────────────────┤
│ NEW ARRIVALS (4x2 Grid)             │ 600px
│ [Product Grid with "New" Badges]    │
├─────────────────────────────────────┤
│ LIFESTYLE GALLERY (Masonry)         │ 500px
│ [Instagram-style UGC Grid]          │
├─────────────────────────────────────┤
│ SOCIAL PROOF (Reviews Carousel)     │ 400px
│ ← [Review][Review][Review] →        │
├─────────────────────────────────────┤
│ NEWSLETTER (Full-width)             │ 300px
│ Email Signup + Incentive            │
├─────────────────────────────────────┤
│ FOOTER (Multi-column)               │ 400px
│ Links | Social | Contact            │
└─────────────────────────────────────┘
```

## 🎨 DESIGN SYSTEM

### Colors:
- Primary: Ocean Blue (#0EA5E9)
- Secondary: Sand Beige (#F5E6D3) 
- Accent: Coral (#FF6B47)
- Neutral: Charcoal (#374151)
- Light: Off-white (#FAFAFA)

### Typography:
- Headers: Inter (600-700 weight)
- Body: Inter (400-500 weight)
- Display: Custom surf font for hero

### Spacing Scale:
- xs: 0.5rem (8px)
- sm: 0.75rem (12px)
- md: 1rem (16px)
- lg: 1.5rem (24px)
- xl: 2rem (32px)
- 2xl: 3rem (48px)
- 3xl: 4rem (64px)