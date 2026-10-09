#!/usr/bin/env node
// Submit every URL in the live sitemap to IndexNow (Bing and other engines
// that share the endpoint). Run after a deploy that adds or changes pages.
// Safe to re-run; engines dedupe. 200 = submitted, 202 = accepted.
//
// Usage: npm run indexnow:submit

const HOST = 'saltedsoulsc.com'
const KEY = '56c92440759b497f8a869e5390f7afba' // served at /<KEY>.txt (public/)

const xml = await (await fetch(`https://${HOST}/sitemap.xml`)).text()
const urlList = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1])
if (!urlList.length) {
  console.error('No URLs found in sitemap')
  process.exit(1)
}
console.log(`Submitting ${urlList.length} URLs to IndexNow...`)

const res = await fetch('https://api.indexnow.org/IndexNow', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify({ host: HOST, key: KEY, keyLocation: `https://${HOST}/${KEY}.txt`, urlList }),
})
console.log(`IndexNow response: HTTP ${res.status}`, await res.text())
process.exit(res.status === 200 || res.status === 202 ? 0 : 1)
