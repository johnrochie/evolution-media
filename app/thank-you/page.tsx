'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function ThankYouPage() {
  const [countdown, setCountdown] = useState(10)

  useEffect(() => {
    // Countdown timer for redirect
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer)
          window.location.href = '/'
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white flex items-center justify-center px-4">
      <div className="text-center max-w-2xl">
        {/* Animated background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-green-500/10 rounded-full blur-3xl"></div>
          <div className="absolute top-60 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative">
          {/* Success Icon */}
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-32 h-32 bg-gradient-to-br from-green-500 to-emerald-400 rounded-full">
              <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>

          {/* Message */}
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Thank You!
          </h1>
          <p className="text-xl text-gray-300 mb-6">
            We've received your inquiry and will contact you within <span className="text-cyan-300 font-semibold">24 hours</span>.
          </p>

          {/* Next Steps */}
          <div className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm rounded-2xl border border-white/10 p-8 mb-10">
            <h3 className="text-2xl font-bold mb-6 text-cyan-300">What Happens Next?</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="p-3 bg-blue-500/20 rounded-xl mr-4">
                  <span className="text-blue-400 font-bold">1</span>
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-white mb-1">Initial Review</h4>
                  <p className="text-gray-300">We'll review your project requirements and prepare a custom proposal.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="p-3 bg-green-500/20 rounded-xl mr-4">
                  <span className="text-green-400 font-bold">2</span>
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-white mb-1">24-Hour Response</h4>
                  <p className="text-gray-300">You'll hear from us within 24 hours with next steps and pricing.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="p-3 bg-purple-500/20 rounded-xl mr-4">
                  <span className="text-purple-400 font-bold">3</span>
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-white mb-1">Project Kickoff</h4>
                  <p className="text-gray-300">Once approved, we'll start building your website immediately.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="mb-10">
            <p className="text-gray-400 mb-4">Need to reach us sooner?</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:hello@evomedia.site"
                className="inline-flex items-center justify-center px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                hello@evomedia.site
              </a>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold text-lg rounded-2xl hover:shadow-2xl hover:shadow-cyan-500/40 transition-all duration-300 hover:scale-105"
            >
              Return Home ({countdown}s)
            </Link>
            <Link
              href="/#portfolio"
              className="px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 text-white font-semibold text-lg rounded-2xl hover:bg-white/10 transition-all duration-300"
            >
              View Our Work
            </Link>
          </div>

          {/* Auto-redirect notice */}
          <div className="mt-8 text-sm text-gray-400">
            <p>You will be automatically redirected to the homepage in {countdown} seconds.</p>
          </div>
        </div>
      </div>
    </div>
  )
}