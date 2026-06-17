import { Metadata } from 'next'
import Reveal from '@/components/ui/Reveal'

export const metadata: Metadata = {
  title: 'Accessibility',
  description: 'Salted Soul’s commitment to an accessible, inclusive shopping experience for everyone.',
}

const commitments = [
  'Semantic markup, descriptive alt text, and a clear heading structure.',
  'Readable color contrast and visible keyboard focus states.',
  'A skip-to-content link and full keyboard navigation.',
  'Respect for reduced-motion preferences across animations.',
]

export default function AccessibilityPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-sand py-16">
        <div className="container-narrow text-center">
          <h1 className="heading-primary mb-4">Accessibility</h1>
          <p className="text-xl text-charcoal-600">An experience everyone can use and enjoy.</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-narrow space-y-12 text-charcoal-700 leading-relaxed">
          <Reveal>
            <p className="text-lg max-w-[68ch]">
              Salted Soul is committed to making saltedsoulsc.com usable for as many people as possible, regardless
              of ability or technology. We aim to follow the Web Content Accessibility Guidelines (WCAG) 2.1 at the
              AA level.
            </p>
          </Reveal>

          <div>
            <Reveal>
              <h2 className="heading-secondary mb-6">What we do</h2>
            </Reveal>
            <ul className="space-y-4">
              {commitments.map((c, i) => (
                <Reveal as="li" index={i} key={c} className="flex items-start gap-3">
                  <span className="mt-0.5 grid place-items-center w-6 h-6 flex-shrink-0 rounded-full bg-ocean-100 text-ocean-700">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="m5 13 4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-charcoal-600">{c}</span>
                </Reveal>
              ))}
            </ul>
          </div>

          <Reveal>
            <div>
              <h2 className="heading-secondary mb-3">An ongoing effort</h2>
              <p className="max-w-[68ch]">
                Accessibility is never finished, and some areas of the site may not yet be fully optimized. We treat
                feedback as a priority. Run into a barrier or have a suggestion? Email{' '}
                <a href="mailto:mark@saltedsoulsc.com" className="text-ocean-600 hover:text-ocean-700 font-medium">
                  mark@saltedsoulsc.com
                </a>{' '}
                and we will work to make it right.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
