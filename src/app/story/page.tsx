import { Metadata } from 'next'
import Image from 'next/image'
import Button from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Our Story | Salted Soul',
  description: 'Learn about the heart behind Salted Soul - how Mark founded a Christian apparel brand to spark meaningful conversations about Jesus with authentic coastal style.',
}

export default function StoryPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden bg-charcoal-900">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/hero-bg.webp"
            alt="Salted Soul coastal vintage design"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        
        <div className="relative z-10 text-center text-white max-w-3xl mx-auto px-4">
          <h1 className="text-4xl lg:text-6xl font-bold mb-4">
            OUR STORY
          </h1>
          <p className="text-xl">
            Where faith meets the surf, and conversations change lives
          </p>
        </div>
      </section>

      {/* The Beginning */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="heading-secondary mb-6">
                The Beginning
              </h2>
              <div className="space-y-6 text-lg text-charcoal-600 leading-relaxed">
                <p>
                  It started with a simple observation during a late-night walk on Folly Beach. 
                  Mark noticed how people's clothing often sparked conversations - band t-shirts, 
                  sports teams, college logos. But what about faith?
                </p>
                <p>
                  "What if Christians could wear their faith as boldly as they wear their favorite 
                  team?" Mark wondered. "What if our clothes could open doors for the Gospel?"
                </p>
                <p>
                  That question, whispered by the Atlantic waves in 2024, became the foundation 
                  of Salted Soul - a Christian apparel brand designed not just to look good, 
                  but to do Kingdom work.
                </p>
              </div>
            </div>
            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/headersalted.png"
                alt="Folly Beach at sunset where the vision began"
                fill
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Meet Mark */}
      <section className="section-padding bg-gray-50">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/mark-owner.jpg"
                  alt="Mark, Founder and Owner of Salted Soul"
                  fill
                  className="object-cover object-center"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="heading-secondary mb-6">
                Meet Mark
              </h2>
              <div className="space-y-6 text-lg text-charcoal-600 leading-relaxed">
                <p>
                  Born and raised in the Lowcountry, Mark has always been drawn to the intersection 
                  of faith and culture. A lifelong believer with a heart for evangelism, he saw 
                  how natural conversations flowed around shared interests and common ground.
                </p>
                <p>
                  "I wanted to create apparel that doesn't just look good, but opens doors for 
                  real conversations about what matters most – our relationship with Jesus," 
                  Mark explains.
                </p>
                <p>
                  Every design that comes out of Salted Soul reflects Mark's commitment to 
                  authentic faith expression and his love for the coastal culture that shaped him.
                </p>
              </div>

              <div className="mt-8 bg-ocean-50 rounded-xl p-6 border-l-4 border-ocean-500">
                <blockquote className="text-xl italic text-charcoal-800 mb-4">
                  "We're not trying to be the loudest voice in the room. We're trying to be 
                  the most authentic one."
                </blockquote>
                <cite className="text-ocean-600 font-semibold">— Mark, Founder</cite>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="section-padding">
        <div className="container-narrow text-center">
          <h2 className="heading-secondary mb-8">
            Our Mission
          </h2>
          <div className="bg-gradient-ocean text-white rounded-2xl p-12 mb-16">
            <h3 className="text-2xl font-bold mb-6">
              To create Christian apparel that sparks meaningful conversations, 
              builds authentic community, and boldly shares the love of Jesus 
              with surf soul and Kingdom impact.
            </h3>
            <p className="text-lg opacity-90">
              Every thread has purpose. Every design tells a story. Every purchase builds the Kingdom.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-ocean-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-charcoal-900 mb-3">Faith-First Design</h3>
              <p className="text-charcoal-600">
                Every design starts with prayer and biblical truth, creating authentic 
                conversation starters about Jesus.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-ocean-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-charcoal-900 mb-3">Premium Quality</h3>
              <p className="text-charcoal-600">
                Using only the finest materials because the Gospel message deserves 
                clothing that lasts and feels amazing.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gold-deep rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: 'var(--gold)' }}>
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-charcoal-900 mb-3">Kingdom Impact</h3>
              <p className="text-charcoal-600">
                10% of profits support coastal ministries and church plants. 
                Your purchase directly funds the Great Commission.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Charleston Roots */}
      <section className="section-padding bg-sand-100">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="heading-secondary mb-6">
                Charleston Roots
              </h2>
              <div className="space-y-6 text-lg text-charcoal-600 leading-relaxed">
                <p>
                  From the Battery to Folly Beach, Charleston's coastal beauty shapes 
                  everything we do. This city - with its rich Christian heritage and 
                  stunning waterways - is woven into the fabric of our brand.
                </p>
                <p>
                  We're proud to call the Holy City home, and our designs reflect the 
                  unique blend of Southern hospitality, coastal culture, and deep faith 
                  that makes Charleston special.
                </p>
                <p>
                  Every sunrise over the harbor reminds us why we do this work - 
                  to share the hope and beauty of Jesus with a world that desperately needs both.
                </p>
              </div>
            </div>
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/lifestyle/charleston-lifestyle-1.png"
                alt="Charleston Rainbow Row representing our coastal roots"
                fill
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Join Our Story */}
      <section className="section-padding">
        <div className="container-narrow text-center">
          <h2 className="heading-secondary mb-6">
            Join Our Story
          </h2>
          <p className="text-lg text-charcoal-600 mb-8 leading-relaxed">
            Salted Soul isn't just about the clothes we make - it's about the conversations 
            they start, the relationships they build, and the lives they touch for Jesus. 
            When you wear Salted Soul, you become part of our mission.
          </p>

          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto mb-12">
            <h3 className="text-xl font-bold text-charcoal-900 mb-4">
              Your Faith Story Matters
            </h3>
            <p className="text-charcoal-600 mb-6">
              We'd love to hear how Salted Soul apparel has opened doors for ministry 
              in your life. Share your story with us!
            </p>
            <Button variant="primary" size="large">
              Share Your Story
            </Button>
          </div>

          <div className="text-center">
            <Button variant="primary" size="large" className="mr-4">
              Shop Our Collection
            </Button>
            <Button variant="secondary" size="large">
              Contact Mark
            </Button>
          </div>
        </div>
      </section>

      {/* Scripture Closing */}
      <section className="section-padding bg-gradient-ocean text-white">
        <div className="container-narrow text-center">
          <blockquote className="text-2xl lg:text-3xl font-light italic mb-6 leading-relaxed">
            "You are the salt of the earth and the light of the world. Let your light 
            shine before others, that they may see your good deeds and glorify your 
            Father in heaven."
          </blockquote>
          <cite className="text-xl font-semibold text-sand-300">— Matthew 5:13-16</cite>
          <p className="text-lg opacity-90 mt-6">
            This is our calling. This is our story. This is Salted Soul.
          </p>
        </div>
      </section>
    </div>
  )
}