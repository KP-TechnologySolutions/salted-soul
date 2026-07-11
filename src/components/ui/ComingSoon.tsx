import Link from 'next/link'
import { Anchor, Wave } from '@/components/ui/icons'

interface ComingSoonProps {
  title?: string
  message?: string
  ctaHref?: string
  ctaLabel?: string
}

/**
 * Branded "Coming Soon" panel for storefront surfaces that aren't stocked yet
 * (apparel collections, sale, empty categories) while the catalog is hats-only.
 */
export default function ComingSoon({
  title = 'Coming soon',
  message = 'We’re just getting started. New designs are on the way — in the meantime, check out our handcrafted hats.',
  ctaHref = '/shop/hats',
  ctaLabel = 'Shop the hats',
}: ComingSoonProps) {
  return (
    <div className="container-wide">
      <div className="mx-auto max-w-2xl rounded-2xl border border-ocean-100 bg-gradient-sand px-8 py-16 text-center shadow-[var(--shadow-md)]">
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-ocean-500 text-white">
          <Anchor width={28} height={28} />
        </div>
        <h2 className="mb-4 text-3xl font-bold text-charcoal-900">{title}</h2>
        <p className="mx-auto mb-8 max-w-md leading-relaxed text-charcoal-600">{message}</p>
        {ctaHref && (
          <Link
            href={ctaHref}
            className="inline-flex items-center gap-2 rounded-lg bg-ocean-500 px-6 py-3 font-semibold text-white shadow-lg transition-all duration-200 hover:scale-105 hover:bg-ocean-600"
          >
            <Wave width={18} height={18} />
            {ctaLabel}
          </Link>
        )}
      </div>
    </div>
  )
}
