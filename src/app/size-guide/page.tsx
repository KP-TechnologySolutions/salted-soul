import { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Size Guide | Salted Soul',
  description: 'Find your perfect fit with our comprehensive size guide for Christian apparel. Detailed measurements for all our shirts and accessories.',
}

export default function SizeGuidePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-sand py-20">
        <div className="container-wide text-center">
          <h1 className="heading-primary mb-6">
            SIZE GUIDE
          </h1>
          <p className="text-xl text-charcoal-600 max-w-2xl mx-auto">
            Find your perfect fit for sharing your faith in comfort and style. 
            Our apparel runs true to size with a comfortable, relaxed fit.
          </p>
        </div>
      </section>

      {/* Size Charts */}
      <section className="section-padding">
        <div className="container-wide">
          {/* T-Shirts */}
          <div className="mb-16">
            <h2 className="heading-secondary mb-8">T-Shirts & Tank Tops</h2>
            
            {/* Men's T-Shirts */}
            <div className="mb-12">
              <h3 className="text-xl font-semibold text-charcoal-900 mb-6">Men's Sizing</h3>
              <div className="overflow-x-auto bg-white border rounded-lg shadow-sm">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-4 text-left font-semibold text-charcoal-900">Size</th>
                      <th className="px-6 py-4 text-left font-semibold text-charcoal-900">Chest Width</th>
                      <th className="px-6 py-4 text-left font-semibold text-charcoal-900">Body Length</th>
                      <th className="px-6 py-4 text-left font-semibold text-charcoal-900">Shoulder Width</th>
                      <th className="px-6 py-4 text-left font-semibold text-charcoal-900">Sleeve Length</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { size: 'XS', chest: '16.5"', length: '27"', shoulder: '15.5"', sleeve: '8"' },
                      { size: 'S', chest: '18"', length: '28"', shoulder: '16"', sleeve: '8.25"' },
                      { size: 'M', chest: '20"', length: '29"', shoulder: '17"', sleeve: '8.5"' },
                      { size: 'L', chest: '22"', length: '30"', shoulder: '18"', sleeve: '8.75"' },
                      { size: 'XL', chest: '24"', length: '31"', shoulder: '19"', sleeve: '9"' },
                      { size: '2XL', chest: '26"', length: '32"', shoulder: '20"', sleeve: '9.25"' },
                      { size: '3XL', chest: '28"', length: '33"', shoulder: '21"', sleeve: '9.5"' },
                    ].map((row, index) => (
                      <tr key={row.size} className={index % 2 === 0 ? 'bg-gray-25' : 'bg-white'}>
                        <td className="px-6 py-4 font-medium text-charcoal-900">{row.size}</td>
                        <td className="px-6 py-4 text-charcoal-600">{row.chest}</td>
                        <td className="px-6 py-4 text-charcoal-600">{row.length}</td>
                        <td className="px-6 py-4 text-charcoal-600">{row.shoulder}</td>
                        <td className="px-6 py-4 text-charcoal-600">{row.sleeve}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Women's T-Shirts */}
            <div className="mb-12">
              <h3 className="text-xl font-semibold text-charcoal-900 mb-6">Women's Sizing</h3>
              <div className="overflow-x-auto bg-white border rounded-lg shadow-sm">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-4 text-left font-semibold text-charcoal-900">Size</th>
                      <th className="px-6 py-4 text-left font-semibold text-charcoal-900">Chest Width</th>
                      <th className="px-6 py-4 text-left font-semibold text-charcoal-900">Body Length</th>
                      <th className="px-6 py-4 text-left font-semibold text-charcoal-900">Shoulder Width</th>
                      <th className="px-6 py-4 text-left font-semibold text-charcoal-900">Sleeve Length</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { size: 'XS', chest: '15.5"', length: '25.5"', shoulder: '14"', sleeve: '7"' },
                      { size: 'S', chest: '16.5"', length: '26"', shoulder: '14.5"', sleeve: '7.25"' },
                      { size: 'M', chest: '17.5"', length: '26.5"', shoulder: '15"', sleeve: '7.5"' },
                      { size: 'L', chest: '19"', length: '27"', shoulder: '15.5"', sleeve: '7.75"' },
                      { size: 'XL', chest: '20.5"', length: '27.5"', shoulder: '16"', sleeve: '8"' },
                      { size: '2XL', chest: '22"', length: '28"', shoulder: '16.5"', sleeve: '8.25"' },
                    ].map((row, index) => (
                      <tr key={row.size} className={index % 2 === 0 ? 'bg-gray-25' : 'bg-white'}>
                        <td className="px-6 py-4 font-medium text-charcoal-900">{row.size}</td>
                        <td className="px-6 py-4 text-charcoal-600">{row.chest}</td>
                        <td className="px-6 py-4 text-charcoal-600">{row.length}</td>
                        <td className="px-6 py-4 text-charcoal-600">{row.shoulder}</td>
                        <td className="px-6 py-4 text-charcoal-600">{row.sleeve}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Hoodies & Sweatshirts */}
          <div className="mb-16">
            <h2 className="heading-secondary mb-8">Hoodies & Sweatshirts</h2>
            <div className="overflow-x-auto bg-white border rounded-lg shadow-sm">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold text-charcoal-900">Size</th>
                    <th className="px-6 py-4 text-left font-semibold text-charcoal-900">Chest Width</th>
                    <th className="px-6 py-4 text-left font-semibold text-charcoal-900">Body Length</th>
                    <th className="px-6 py-4 text-left font-semibold text-charcoal-900">Sleeve Length</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { size: 'S', chest: '20"', length: '27"', sleeve: '24"' },
                    { size: 'M', chest: '22"', length: '28"', sleeve: '25"' },
                    { size: 'L', chest: '24"', length: '29"', sleeve: '26"' },
                    { size: 'XL', chest: '26"', length: '30"', sleeve: '27"' },
                    { size: '2XL', chest: '28"', length: '31"', sleeve: '28"' },
                    { size: '3XL', chest: '30"', length: '32"', sleeve: '29"' },
                  ].map((row, index) => (
                    <tr key={row.size} className={index % 2 === 0 ? 'bg-gray-25' : 'bg-white'}>
                      <td className="px-6 py-4 font-medium text-charcoal-900">{row.size}</td>
                      <td className="px-6 py-4 text-charcoal-600">{row.chest}</td>
                      <td className="px-6 py-4 text-charcoal-600">{row.length}</td>
                      <td className="px-6 py-4 text-charcoal-600">{row.sleeve}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* How to Measure */}
          <div className="grid lg:grid-cols-2 gap-16 mb-16">
            <div>
              <h2 className="heading-secondary mb-8">How to Measure</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-ocean-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-semibold text-sm">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-charcoal-900 mb-2">Chest Width</h3>
                    <p className="text-charcoal-600">
                      Measure across the chest from armpit to armpit, laying the garment flat.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-ocean-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-semibold text-sm">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-charcoal-900 mb-2">Body Length</h3>
                    <p className="text-charcoal-600">
                      Measure from the highest point of the shoulder to the bottom hem.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-ocean-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-semibold text-sm">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-charcoal-900 mb-2">Shoulder Width</h3>
                    <p className="text-charcoal-600">
                      Measure across the shoulders from seam to seam.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-ocean-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-semibold text-sm">4</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-charcoal-900 mb-2">Sleeve Length</h3>
                    <p className="text-charcoal-600">
                      Measure from the shoulder seam to the end of the sleeve cuff.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="heading-secondary mb-8">Fit Guidelines</h2>
              <div className="space-y-6">
                <div className="bg-ocean-50 rounded-xl p-6 border border-ocean-100">
                  <h3 className="font-semibold text-ocean-800 mb-3">🎯 True to Size</h3>
                  <p className="text-ocean-700">
                    Our apparel runs true to size. If you're between sizes, we recommend sizing up 
                    for a more relaxed fit.
                  </p>
                </div>

                <div className="bg-green-50 rounded-xl p-6 border border-green-100">
                  <h3 className="font-semibold text-green-800 mb-3">✝️ Ministry Fit</h3>
                  <p className="text-green-700">
                    Our shirts are designed for active ministry - comfortable enough for service 
                    projects, stylish enough for coffee shop conversations.
                  </p>
                </div>

                <div className="bg-yellow-50 rounded-xl p-6 border border-yellow-100">
                  <h3 className="font-semibold text-yellow-800 mb-3">🏄‍♂️ Coastal Comfort</h3>
                  <p className="text-yellow-700">
                    Relaxed fit inspired by beach culture - not too tight, not too loose. 
                    Perfect for Charleston humidity and coastal adventures.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Size Exchange Policy */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <h2 className="heading-secondary mb-6">Size Exchange Promise</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-charcoal-900 mb-3">Free Size Exchanges</h3>
                <p className="text-charcoal-600 mb-4">
                  Ordered the wrong size? No problem! We offer free size exchanges within 30 days 
                  for unworn items with tags attached.
                </p>
                <ul className="text-sm text-charcoal-600 space-y-1">
                  <li>• Free return shipping label included</li>
                  <li>• Fast processing - usually 2-3 business days</li>
                  <li>• Available for all sizes in stock</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-charcoal-900 mb-3">Still Not Sure?</h3>
                <p className="text-charcoal-600 mb-4">
                  Contact our team for personalized sizing advice. We're here to help you 
                  find the perfect fit for sharing your faith.
                </p>
                <a 
                  href="/contact" 
                  className="inline-flex items-center text-ocean-600 hover:text-ocean-700 font-medium"
                >
                  Get Sizing Help
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}