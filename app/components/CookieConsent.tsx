'use client'

import { useState, useEffect } from 'react'

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false)
  const [isAccepted, setIsAccepted] = useState(false)

  useEffect(() => {
    // Check if user has already made a choice
    const cookieChoice = localStorage.getItem('cookieConsent')
    
    if (cookieChoice === 'accepted') {
      setIsAccepted(true)
    } else if (cookieChoice === 'rejected') {
      setIsAccepted(true) // Don't show if rejected
    } else {
      // Show banner if no choice made
      const timer = setTimeout(() => {
        setIsVisible(true)
      }, 1000)
      
      return () => clearTimeout(timer)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted')
    setIsAccepted(true)
    setIsVisible(false)
    
    // Enable analytics (in production, this would initialize GA)
    console.log('Analytics cookies enabled')
  }

  const handleReject = () => {
    localStorage.setItem('cookieConsent', 'rejected')
    setIsAccepted(true)
    setIsVisible(false)
    
    // Disable analytics (in production, this would disable GA)
    console.log('Analytics cookies disabled')
  }

  const handleCustomize = () => {
    // In a full implementation, this would open a modal with options
    console.log('Open cookie customization modal')
  }

  if (!isVisible || isAccepted) {
    return null
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 animate-fade-in">
      <div className="container mx-auto px-4 pb-4">
        <div className="bg-gradient-to-br from-gray-900 to-black backdrop-blur-sm rounded-2xl border border-white/10 shadow-2xl p-6 max-w-2xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex-1">
              <div className="flex items-start mb-2">
                <div className="p-2 bg-cyan-500/20 rounded-lg mr-3">
                  <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">Cookie Preferences</h3>
                  <p className="text-sm text-gray-300">
                    We use cookies to enhance your experience, analyze traffic, and serve personalized content. By clicking "Accept All", you consent to our use of cookies.
                  </p>
                </div>
              </div>
              
              <div className="mt-3">
                <a 
                  href="/privacy" 
                  className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors inline-flex items-center"
                >
                  Learn more in our Privacy Policy
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={handleReject}
                className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors"
              >
                Reject All
              </button>
              
              <button
                onClick={handleCustomize}
                className="px-4 py-2 text-sm font-medium bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors"
              >
                Customize
              </button>
              
              <button
                onClick={handleAccept}
                className="px-4 py-2 text-sm font-medium bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white rounded-lg transition-colors font-semibold"
              >
                Accept All
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}