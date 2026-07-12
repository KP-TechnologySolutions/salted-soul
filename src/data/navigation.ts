export interface NavItem {
  name: string
  href: string
  description?: string
  featured?: boolean
  image?: string
}

export interface NavSection {
  name: string
  items: NavItem[]
}

export interface MegaMenuData {
  sections: NavSection[]
  featured?: NavItem[]
}

export const mainNavigation: { name: string; href: string; megaMenu?: MegaMenuData }[] = [
  {
    name: 'Shop',
    href: '/shop',
    megaMenu: {
      sections: [
        {
          name: 'Categories',
          items: [
            { name: 'All Products', href: '/shop', description: 'Browse our complete collection' },
            { name: 'New Arrivals', href: '/shop/new-arrivals', description: 'Latest releases' },
            { name: 'Best Sellers', href: '/shop/best-sellers', description: 'Customer favorites' },
            { name: 'Sale', href: '/shop/sale', description: 'Limited time offers' },
          ],
        },
        {
          name: 'Men\'s',
          items: [
            { name: 'T-Shirts', href: '/shop/mens/t-shirts' },
            { name: 'Hoodies', href: '/shop/mens/hoodies' },
            { name: 'Board Shorts', href: '/shop/mens/board-shorts' },
            { name: 'Accessories', href: '/shop/mens/accessories' },
          ],
        },
        {
          name: 'Hats',
          items: [
            { name: 'Trucker Hats', href: '/shop/hats/trucker' },
            { name: 'Snapbacks', href: '/shop/hats/snapbacks' },
            { name: 'Baseball Caps', href: '/shop/hats/baseball-caps' },
            { name: 'All Hats', href: '/shop/hats' },
          ],
        },
        {
          name: 'Women\'s',
          items: [
            { name: 'T-Shirts', href: '/shop/womens/t-shirts' },
            { name: 'Tank Tops', href: '/shop/womens/tank-tops' },
            { name: 'Bikinis', href: '/shop/womens/bikinis' },
            { name: 'Cover-ups', href: '/shop/womens/cover-ups' },
          ],
        },
        {
          name: 'Collections',
          items: [
            { name: 'Faith Collection', href: '/collections/faith-collection', featured: true },
            { name: 'Surf Essentials', href: '/collections/surf-essentials' },
            { name: 'Charleston Collection', href: '/collections/charleston-collection' },
          ],
        },
      ],
      featured: [
        {
          name: 'Faith Collection',
          href: '/collections/faith-collection',
          description: 'Christian apparel with coastal soul',
          image: '/collections/faith-collection.jpg',
        },
        {
          name: 'New Arrivals',
          href: '/shop/new-arrivals',
          description: 'Fresh designs just dropped',
          image: '/collections/new-arrivals.jpg',
        },
      ],
    },
  },
  {
    name: 'Collections',
    href: '/collections',
    megaMenu: {
      sections: [
        {
          name: 'Featured Collections',
          items: [
            { 
              name: 'Faith Collection', 
              href: '/collections/faith-collection', 
              description: 'Christian apparel with coastal soul',
              featured: true,
            },
            { 
              name: 'Surf Essentials', 
              href: '/collections/surf-essentials', 
              description: 'Everything you need for life by the ocean',
            },
            { 
              name: 'Coastal Classics', 
              href: '/collections/coastal-classics', 
              description: 'Timeless designs inspired by the sea',
            },
          ],
        },
        {
          name: 'Seasonal',
          items: [
            { name: 'Summer Vibes', href: '/collections/summer' },
            { name: 'Beach Days', href: '/collections/beach' },
            { name: 'Ministry Wear', href: '/collections/ministry' },
          ],
        },
      ],
    },
  },
  {
    name: 'Our Story',
    href: '/story',
  },
  {
    name: 'Contact',
    href: '/contact',
  },
]

export const footerNavigation = {
  shop: [
    { name: 'All Products', href: '/shop' },
    { name: 'Hats', href: '/shop/hats' },
    { name: 'New Arrivals', href: '/shop/new-arrivals' },
    { name: 'Best Sellers', href: '/shop/best-sellers' },
  ],
  collections: [
    { name: 'Faith Collection', href: '/collections/faith-collection' },
    { name: 'Surf Essentials', href: '/collections/surf-essentials' },
    { name: 'Charleston Collection', href: '/collections/charleston-collection' },
  ],
  company: [
    { name: 'Our Story', href: '/story' },
    { name: 'Sustainability', href: '/sustainability' },
    { name: 'Size Guide', href: '/size-guide' },
    { name: 'Contact', href: '/contact' },
  ],
  support: [
    { name: 'Seasoned', href: '/seasoned' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Shipping Info', href: '/shipping' },
    { name: 'Returns', href: '/returns' },
    { name: 'Size Guide', href: '/size-guide' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Accessibility', href: '/accessibility' },
  ],
}

// Intentionally empty until real Salted Soul accounts are confirmed.
// Add real handles here and they render automatically in the footer.
export const socialLinks: { name: string; href: string; icon: string }[] = []