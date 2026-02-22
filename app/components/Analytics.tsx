'use client'

import { useEffect } from 'react'
import Script from 'next/script'

declare global {
  interface Window {
    gtag: (...args: any[]) => void
    dataLayer: any[]
  }
}

export default function Analytics() {
  useEffect(() => {
    // Track page views
    const handleRouteChange = () => {
      if (window.gtag) {
        window.gtag('config', 'G-XXXXXXXXXX', {
          page_path: window.location.pathname,
        })
      }
    }

    // Track form submissions
    const trackFormSubmission = (formData: any) => {
      if (window.gtag) {
        window.gtag('event', 'generate_lead', {
          event_category: 'Contact',
          event_label: 'Form Submission',
          value: 1
        })
      }
    }

    // Track button clicks
    const trackButtonClick = (buttonText: string) => {
      if (window.gtag) {
        window.gtag('event', 'click', {
          event_category: 'Button',
          event_label: buttonText,
          value: 1
        })
      }
    }

    // Add event listeners
    const buttons = document.querySelectorAll('button, a[href^="#"]')
    buttons.forEach(button => {
      button.addEventListener('click', () => {
        trackButtonClick(button.textContent || 'Unknown Button')
      })
    })

    // Listen for form submissions (custom event)
    window.addEventListener('formSubmitted', (e: any) => {
      trackFormSubmission(e.detail)
    })

    // Initial page view
    handleRouteChange()

    return () => {
      buttons.forEach(button => {
        button.removeEventListener('click', () => {
          trackButtonClick(button.textContent || 'Unknown Button')
        })
      })
      window.removeEventListener('formSubmitted', (e: any) => {
        trackFormSubmission(e.detail)
      })
    }
  }, [])

  return (
    <>
      {/* Google Analytics */}
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />

      {/* Simple Analytics (fallback) */}
      <Script
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            // Simple page view counter
            if (typeof localStorage !== 'undefined') {
              const pageViews = parseInt(localStorage.getItem('pageViews') || '0') + 1
              localStorage.setItem('pageViews', pageViews.toString())
              
              // Log to console for now (in production, send to your API)
              console.log('Page view:', pageViews, 'Path:', window.location.pathname)
            }

            // Track time on page
            let startTime = Date.now()
            window.addEventListener('beforeunload', () => {
              const timeSpent = Math.round((Date.now() - startTime) / 1000)
              console.log('Time spent on page:', timeSpent, 'seconds')
            })
          `,
        }}
      />
    </>
  )
}