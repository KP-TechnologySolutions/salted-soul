// FAQ content, shared by the FAQ page UI and its FAQPage JSON-LD.
// `schema: false` keeps an answer out of the structured data (what AI engines
// and Google lift verbatim) until the owners confirm it.

export type Faq = { q: string; a: string; cat: string; schema: boolean }

export const FAQS: Faq[] = [
  { cat: 'Sizing', q: 'What sizes do you offer?', a: 'Our hats are Richardson 112 trucker hats with an adjustable snapback, so one size fits most. Tees are coming soon.', schema: true },
  { cat: 'Shipping', q: 'How long does shipping take?', a: 'Orders are processed in 1 to 2 business days and typically arrive within 3 to 7 business days in the U.S. You get tracking as soon as it ships.', schema: true },
  { cat: 'Shipping', q: 'Do you offer free shipping?', a: 'Yes. Shipping is free on U.S. orders over $70. Orders under $70 are charged a flat rate calculated at checkout.', schema: true },
  { cat: 'Orders', q: 'What payment methods do you accept?', a: 'Checkout is handled securely by Shopify, so all major credit and debit cards (and the wallets your device supports) work at checkout.', schema: true },
  { cat: 'Orders', q: 'What is your return policy?', a: 'Returns are accepted within 30 days of purchase on unworn, unwashed items in original condition. Return shipping is paid by the customer unless the item is defective or incorrect. The Returns page has the details.', schema: true },
  { cat: 'Mission', q: 'How does the ministry give-back work?', a: '10% of profits support local ministries. Every purchase helps fund the Great Commission. It is baked into who we are.', schema: true },
  { cat: 'Sizing', q: 'How should I care for my apparel?', a: 'Machine wash cold inside out, tumble dry low, and avoid ironing directly over printed designs. This keeps colors and prints looking their best.', schema: false },
  { cat: 'Mission', q: 'Can you outfit my church or ministry team?', a: 'Absolutely. We offer special pricing and custom design services for churches, youth groups, and ministry teams. Reach out and we will help.', schema: false },
]
