# Shopify Setup — Salted Soul

We're using **Shopify (headless)** as the store behind the Salted Soul website.
Shoppers browse on our custom site; when they check out, they're handed off to
Shopify's secure, hosted checkout. Shopify handles payments, taxes, shipping
rates, and order management — we never touch card data.

This doc is the checklist to get the store live. **Steps 1–4 are on the owners'
side and block everything else.** Once step 4 produces a token, send it (and the
store domain) to KP and we flip the site on.

---

## 1. Create the Shopify store

1. Go to <https://www.shopify.com> and start a store (the **Basic** plan is fine
   to launch; can upgrade later).
2. Set the store name to **Salted Soul**. Shopify will assign a permanent
   `*.myshopify.com` domain (e.g. `salted-soul.myshopify.com`) — **note this
   down**, KP needs it.
3. Under **Settings → Payments**, activate **Shopify Payments** (or your chosen
   payment provider) so checkout can accept cards.
4. Under **Settings → Shipping**, set up at least one shipping rate (even a flat
   rate or free-over-$75) so checkout can quote shipping.

## 2. Add the products (hats & shirts)

For each product (**Products → Add product**):

- **Title**, **Description**, **Images** (front/back).
- **Pricing** — price and optional "compare-at" price for sale items.
- **Variants** — add options like **Size** (S/M/L/XL) and **Color**. Each
  size/color combination is a variant with its own price/inventory/SKU.
- **Inventory** — quantity per variant (turn on tracking if you want
  sold-out states).
- **Status: Active**, and assign to a **Collection** (e.g. "Hats", "Shirts",
  "Faith Collection") so the site can group them.

> The website currently shows placeholder products. Once the real catalog is in
> Shopify, KP swaps the site over to pull live products, prices, and inventory
> directly from Shopify — Shopify becomes the single source of truth.

## 3. Enable the Headless sales channel

1. In Shopify admin, go to **Settings → Apps and sales channels → Shopify App
   Store** and install the **Headless** sales channel (free, by Shopify).
2. Open the **Headless** channel and create a **storefront**.
3. This gives you a **Storefront API** section with access tokens.

## 4. Get the Storefront API access token

In the Headless channel's storefront, copy the **Public access token** under
**Storefront API**.

- ✅ This is the **public** token — it only allows reading products and creating
  checkouts. It is safe to live in the website code.
- ❌ Do **not** send the **Admin API** token or any **private** token — those are
  secret and must never go in a website.

**Send KP two things:**
1. The store domain (e.g. `salted-soul.myshopify.com`)
2. The **public** Storefront API access token

---

## 5. KP wires it up (our side)

Once we have the domain + token, we set them in the site's environment
(`.env.local`, see `.env.example`):

```
NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN=salted-soul.myshopify.com
NEXT_PUBLIC_SHOPIFY_STOREFRONT_TOKEN=<public storefront token>
```

Then we:
- Point the product catalog at live Shopify data.
- Flip the cart's **Checkout** button to create a real Shopify cart and redirect
  to Shopify-hosted checkout (the integration code is already in place under
  `src/lib/shopify/`).
- Test a full purchase end-to-end before launch.

---

## Notes

- **No payment code lives in this repo.** All payments happen on Shopify's
  hosted checkout — that's what keeps us out of PCI scope.
- Custom domain (e.g. `shop.saltedsoul...`) can be pointed at either the Shopify
  checkout or kept on the marketing site — we'll decide that at launch.
