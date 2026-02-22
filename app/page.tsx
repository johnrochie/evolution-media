import ContactForm from './components/ContactForm'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-xl">
              <div className="w-8 h-8 flex items-center justify-center">
                <span className="text-white font-bold text-xl">E</span>
              </div>
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                Evolution<span className="text-white">Media</span>
              </h1>
              <p className="text-xs text-gray-400">AI-Powered Digital Agency</p>
            </div>
          </div>
          <a
            href="#get-started"
            className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-xl hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-300 hover:scale-105"
          >
            Get Your Website
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <div className="inline-flex items-center px-4 py-2 bg-blue-500/20 backdrop-blur-sm rounded-full border border-blue-500/30 mb-8">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse mr-2"></div>
            <span className="text-sm font-medium text-blue-300">AI-Powered • 24-Hour Delivery</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent">
              Professional Websites
            </span>
            <br />
            <span className="text-cyan-400">in 24 Hours</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            AI-powered digital solutions for modern businesses.
            <span className="text-cyan-300 font-semibold"> Starting at €499</span>, no meetings, no delays.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a
              href="#get-started"
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold text-lg rounded-2xl hover:shadow-2xl hover:shadow-cyan-500/40 transition-all duration-300 hover:scale-105"
            >
              Get Your Website Now
            </a>
            <a
              href="#portfolio"
              className="px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 text-white font-semibold text-lg rounded-2xl hover:bg-white/10 transition-all duration-300"
            >
              View Our Work
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
            {[
              { value: '50+', label: 'Websites Delivered' },
              { value: '99%', label: 'Satisfaction Rate' },
              { value: '24h', label: 'Average Delivery' },
              { value: '€499', label: 'Starting Price' },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-white/5 backdrop-blur-sm p-4 rounded-2xl border border-white/10"
              >
                <div className="text-3xl font-bold text-cyan-300">{stat.value}</div>
                <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing - Simplified */}
      <section className="py-20 px-4 bg-gradient-to-b from-transparent to-black/30" id="get-started">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                Simple, Transparent Pricing
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Professional websites starting at €499. No hidden fees, no monthly subscriptions.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="bg-gradient-to-b from-blue-900/50 to-cyan-900/30 backdrop-blur-sm p-8 rounded-3xl border border-cyan-500/50">
              <div className="text-center mb-6">
                <div className="px-4 py-1 bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-sm font-bold rounded-full inline-block mb-4">
                  OUR ONLY OFFERING
                </div>
                <h3 className="text-3xl font-bold mb-2">Professional Website</h3>
                <p className="text-gray-400 mb-6">Everything you need to launch online</p>
                
                <div className="mb-6">
                  <div className="text-5xl font-bold text-white">Starting at €499</div>
                  <div className="text-sm text-gray-400 mt-2">One-time payment • No monthly fees</div>
                </div>

                <ul className="space-y-3 mb-8 text-left">
                  {[
                    '24-hour delivery guarantee',
                    'Mobile responsive design',
                    'SEO optimized from day one',
                    'Basic analytics included',
                    '1 round of revisions',
                    'No monthly fees - one-time payment',
                  ].map((feature) => (
                    <li key={feature} className="flex items-center">
                      <svg className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className="block w-full py-4 text-center font-bold text-lg bg-gradient-to-r from-blue-600 to-cyan-500 hover:shadow-2xl hover:shadow-cyan-500/40 hover:scale-105 rounded-xl transition-all duration-300"
                >
                  Get Your Website Now
                </a>
              </div>
            </div>

            <div className="mt-8 text-center text-gray-400">
              <p>We focus on one thing: delivering professional websites in 24 hours.</p>
              <p>No confusing packages, no upsells, no monthly subscriptions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section className="py-20 px-4" id="portfolio">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                Recent Work
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              See what our AI can create in 24 hours
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                name: 'Travel Bug', 
                category: 'Travel Agency', 
                url: 'https://travelbug-v1.vercel.app'
              },
              { 
                name: 'Rei Bridal', 
                category: 'Bridal Boutique', 
                url: 'https://reibridal-v1.vercel.app'
              },
              { 
                name: 'Sensory Play Zone', 
                category: 'Kids Activity', 
                url: 'https://sensory-play-zone.vercel.app'
              },
            ].map((project) => (
              <a
                key={project.name}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-gray-900/50 backdrop-blur-sm rounded-3xl border border-white/10 hover:border-cyan-500/50 transition-all duration-500 overflow-hidden"
              >
                <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                  <div className="text-4xl opacity-30">{project.name.split(' ')[0].charAt(0)}</div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.name}</h3>
                  <p className="text-gray-400 mb-4">{project.category}</p>
                  <div className="text-cyan-400 group-hover:text-cyan-300 transition-colors">
                    View Live Site →
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 px-4 bg-gradient-to-b from-transparent to-black/30" id="contact">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                Get Your Free Quote
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Ready to transform your online presence? Fill out the form below.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <ContactForm />
            
            <div className="mt-12 text-center">
              <p className="text-gray-400">
                Or email us directly at{' '}
                <a href="mailto:hello@evomedia.site" className="text-cyan-400 hover:text-cyan-300">
                  hello@evomedia.site
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-white/10 bg-black/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="p-2 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-xl">
                <div className="w-6 h-6 flex items-center justify-center">
                  <span className="text-white font-bold">E</span>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold">EvolutionMedia</h3>
                <p className="text-sm text-gray-400">AI-Powered Digital Agency</p>
              </div>
            </div>
            
            <p className="text-gray-500 text-sm mb-4">
              © {new Date().getFullYear()} Evolution Media. All rights reserved.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <a href="/privacy" className="text-gray-400 hover:text-cyan-400 transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="text-gray-400 hover:text-cyan-400 transition-colors">
                Terms of Service
              </a>
              <a href="#contact" className="text-gray-400 hover:text-cyan-400 transition-colors">
                Contact
              </a>
              <a href="mailto:hello@evomedia.site" className="text-gray-400 hover:text-cyan-400 transition-colors">
                Email Us
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}