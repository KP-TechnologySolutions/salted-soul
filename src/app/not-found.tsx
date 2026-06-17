import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-[70vh] bg-gradient-sand flex items-center justify-center px-4">
      <div className="container-narrow text-center py-20">
        <p className="text-ocean-600 font-semibold tracking-wide uppercase text-sm mb-3">404</p>
        <h1 className="heading-primary mb-4">This page drifted out to sea</h1>
        <p className="text-lg text-charcoal-600 max-w-xl mx-auto mb-8">
          We couldn&rsquo;t find the page you were looking for. It may have moved, or the link may be out of date.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link href="/" className="btn btn-primary">Back to home</Link>
          <Link href="/shop" className="btn btn-outline" style={{ color: 'var(--ocean)', borderColor: 'var(--ocean)' }}>
            Shop apparel
          </Link>
        </div>
      </div>
    </div>
  )
}
