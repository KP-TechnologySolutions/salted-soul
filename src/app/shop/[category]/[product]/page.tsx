import { notFound } from 'next/navigation'
import { products } from '@/data/products'
import ProductDetail from '@/components/product/ProductDetail'
import { Metadata } from 'next'
import type { Product } from '@/types/product'

interface ProductPageProps {
  params: Promise<{
    category: string
    product: string
  }>
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { category, product: productSlug } = await params
  const product = products.find(p => p.slug === productSlug && p.category.slug === category)
  
  if (!product) {
    return {
      title: 'Product Not Found'
    }
  }

  const isHat = product.category.slug === 'hats'
  const path = `/shop/${product.category.slug}/${product.slug}/`
  // Search-facing title/description. The on-page product name stays the
  // owner's Shopify title (colorway); this adds what people actually search
  // for. The layout's title template appends "| Salted Soul".
  const title = isHat ? `${product.name} Christian Trucker Hat` : product.name
  const description = isHat
    ? `${product.name} Richardson 112 trucker hat from Salted Soul, Christian coastal apparel from Mt Pleasant, SC. Adjustable snapback, one size fits most. $${product.price}.`
    : product.shortDescription || product.description

  return {
    title,
    description,
    keywords: product.tags,
    alternates: { canonical: path },
    openGraph: {
      type: 'website',
      url: path,
      title: `${title} | Salted Soul`,
      description,
      images: [
        {
          url: product.images[0].url,
          width: product.images[0].width,
          height: product.images[0].height,
          alt: product.images[0].altText,
        },
      ],
    },
  }
}

export async function generateStaticParams() {
  return products.map((product) => ({
    category: product.category.slug,
    product: product.slug,
  }))
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { category, product: productSlug } = await params
  const product = products.find(p => p.slug === productSlug && p.category.slug === category)

  if (!product) {
    notFound()
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd(product)) }}
      />
      <ProductDetail product={product} />
    </>
  )
}

const SITE = 'https://saltedsoulsc.com'

// Product structured data for Google (rich results + free Shopping listings).
// Shipping/returns mirror the owner's Shopify policies: $5.95 flat, free at
// $70+, 1-2 business days processing, 3-5 days transit; 30-day returns,
// customer pays return shipping.
function productJsonLd(product: Product) {
  const url = `${SITE}/shop/${product.category.slug}/${product.slug}/`
  const variant = product.variants[0]
  const inStock = product.variants.some((v) => v.available)
  const usShipping = (rate: number, minOrder?: number) => ({
    '@type': 'OfferShippingDetails',
    shippingRate: { '@type': 'MonetaryAmount', value: rate, currency: 'USD' },
    shippingDestination: { '@type': 'DefinedRegion', addressCountry: 'US' },
    ...(minOrder !== undefined && {
      eligibleTransactionVolume: {
        '@type': 'PriceSpecification',
        minPrice: minOrder,
        priceCurrency: 'USD',
      },
    }),
    deliveryTime: {
      '@type': 'ShippingDeliveryTime',
      handlingTime: { '@type': 'QuantitativeValue', minValue: 1, maxValue: 2, unitCode: 'DAY' },
      transitTime: { '@type': 'QuantitativeValue', minValue: 3, maxValue: 5, unitCode: 'DAY' },
    },
  })

  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    image: product.images.map((img) => img.url),
    sku: variant?.sku || variant?.id.split('/').pop(),
    brand: { '@type': 'Brand', name: 'Salted Soul' },
    category: product.category.name,
    url,
    offers: {
      '@type': 'Offer',
      url,
      price: (variant?.price ?? product.price).toFixed(2),
      priceCurrency: product.currency || 'USD',
      availability: inStock ? 'https://schema.org/InStock' : 'https://schema.org/OutOfStock',
      itemCondition: 'https://schema.org/NewCondition',
      seller: { '@type': 'Organization', name: 'Salted Soul' },
      shippingDetails: [usShipping(5.95), usShipping(0, 70)],
      hasMerchantReturnPolicy: {
        '@type': 'MerchantReturnPolicy',
        applicableCountry: 'US',
        returnPolicyCategory: 'https://schema.org/MerchantReturnFiniteReturnWindow',
        merchantReturnDays: 30,
        returnMethod: 'https://schema.org/ReturnByMail',
        returnFees: 'https://schema.org/ReturnShippingFees',
        merchantReturnLink: `${SITE}/returns/`,
      },
    },
  }
}