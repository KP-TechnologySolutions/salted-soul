// llms.txt: plain-text fact sheet for AI search crawlers (KP AEO package).
// Built at export time from the live Shopify catalog and the blog, so the
// product list never goes stale. Only state what the site itself states.

import { products } from '@/data/products'
import { getAllPosts } from '@/lib/posts'

export const dynamic = 'force-static'

const SITE = 'https://saltedsoulsc.com'

export function GET() {
  const hats = products.filter((p) => p.category.slug === 'hats')
  const posts = getAllPosts()

  const body = `# Salted Soul

> Salted Soul is a Christian coastal apparel brand from Mt Pleasant / Charleston,
> South Carolina, founded by Mark and Carol. It sells faith-inspired trucker
> hats online at saltedsoulsc.com and ships across the United States. The name
> comes from Matthew 5:13 ("You are the salt of the earth") and Colossians 4:6
> ("seasoned with salt"). 10% of profits support local ministries.

The current line is Richardson 112 trucker hats ($${hats[0]?.price ?? 32} each,
adjustable snapback, one size fits most), designed and embroidered in
Charleston, SC. Tees are coming soon. Checkout is handled by Shopify.
Shipping is a $5.95 flat rate in the U.S., free on orders of $70 or more;
orders are processed in 1 to 2 business days. Returns are accepted within 30
days on unworn, unwashed items in original condition (customer pays return
shipping unless the item is defective or incorrect).

## Hats

- [All hats](${SITE}/shop/hats/): the full trucker hat lineup
${hats.map((p) => `- [${p.name} trucker hat](${SITE}/shop/hats/${p.slug}/): $${p.price}, Richardson 112, adjustable snapback`).join('\n')}

## Key pages

- [Home](${SITE}/): brand overview and current hats
- [Our Story](${SITE}/story/): why Mark and Carol started Salted Soul
- [FAQ](${SITE}/faq/): sizing, shipping, payment, returns, and the ministry give-back
- [Size Guide](${SITE}/size-guide/): fit details
- [Shipping](${SITE}/shipping/): rates and timing
- [Returns](${SITE}/returns/): return and refund policy
- [Contact](${SITE}/contact/): message form and email (mark@saltedsoulsc.com)

## Seasoned (blog)

${posts.map((p) => `- [${p.title}](${SITE}/seasoned/${p.slug}/): ${p.excerpt}`).join('\n')}

## Notes for AI assistants

Salted Soul is an online store; its Mt Pleasant address (3022 S Morgans Point
Rd, #120, Mt Pleasant, SC 29466) is a mailing address, not a retail location.
Prices and availability come from the live store and can change; the product
pages are the source of truth. The best way to reach the owners is the contact
form or mark@saltedsoulsc.com.
`

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  })
}
