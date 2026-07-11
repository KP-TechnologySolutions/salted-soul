import type { ShopPolicy } from '@/data/policies.generated'

/**
 * Renders a store policy (Privacy, Terms, etc.) authored in Shopify admin.
 * The HTML body is pulled from Shopify at build time (single source of truth),
 * so editing the policy in Shopify + redeploying updates this page automatically.
 * Returns null when the policy isn't set, so callers can fall back to local copy.
 */
export default function ShopifyPolicy({ policy }: { policy: ShopPolicy | null }) {
  if (!policy?.body) return null
  return (
    <div
      className="policy-body text-charcoal-700 leading-relaxed max-w-[68ch]"
      dangerouslySetInnerHTML={{ __html: policy.body }}
    />
  )
}
