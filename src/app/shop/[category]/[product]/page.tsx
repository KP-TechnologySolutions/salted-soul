import { notFound } from 'next/navigation'
import { products } from '@/data/products'
import ProductDetail from '@/components/product/ProductDetail'
import { Metadata } from 'next'

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

  return {
    title: `${product.name} | Salted Soul`,
    description: product.description,
    keywords: product.tags,
    openGraph: {
      title: product.name,
      description: product.shortDescription || product.description,
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

  return <ProductDetail product={product} />
}