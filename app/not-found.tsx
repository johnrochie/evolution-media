import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white flex items-center justify-center px-4">
      <div className="text-center max-w-2xl">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute top-60 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative">
          {/* Error Code */}
          <div className="mb-8">
            <div className="inline-flex items-center justify-center">
              <span className="text-9xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                404
              </span>
            </div>
            <div className="h-1 w-32 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto rounded-full mt-4"></div>
          </div>

          {/* Message */}
          <h1 className="text-3xl md:text-4xl font-bold mb-6">
            Page Not Found
          </h1>
          <p className="text-xl text-gray-300 mb-10 max-w-md mx-auto">
            The page you're looking for doesn't exist or has been moved.
          </p>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              href="/"
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold text-lg rounded-2xl hover:shadow-2xl hover:shadow-cyan-500/40 transition-all duration-300 hover:scale-105"
            >
              Go Home
            </Link>
            <Link
              href="/#contact"
              className="px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 text-white font-semibold text-lg rounded-2xl hover:bg-white/10 transition-all duration-300"
            >
              Contact Us
            </Link>
          </div>

          {/* Helpful Links */}
          <div className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm rounded-2xl border border-white/10 p-6 max-w-md mx-auto">
            <h3 className="text-lg font-semibold mb-4">You might be looking for:</h3>
            <div className="grid grid-cols-1 gap-3">
              {[
                { href: '/', label: 'Home' },
                { href: '/#get-started', label: 'Pricing' },
                { href: '/#portfolio', label: 'Portfolio' },
                { href: '/privacy', label: 'Privacy Policy' },
                { href: '/terms', label: 'Terms of Service' },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex items-center justify-between p-3 bg-white/5 hover:bg-white/10 rounded-xl transition-colors group"
                >
                  <span className="text-gray-300 group-hover:text-white">{link.label}</span>
                  <svg className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="mt-12 pt-8 border-t border-white/10">
            <p className="text-gray-400 mb-2">Need help?</p>
            <a
              href="mailto:hello@evomedia.site"
              className="text-cyan-400 hover:text-cyan-300 transition-colors text-lg font-medium"
            >
              hello@evomedia.site
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}