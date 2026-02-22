'use client'

import { useEffect } from 'react'
import Script from 'next/script'
import { Analytics as VercelAnalytics } from '@vercel/analytics/react'

declare global {
  interface Window {
    gtag: (...args: any[]) => void
    dataLayer: any[]
  }
}

export default function Analytics() {
  // Your Google Analytics Measurement ID (starts with G-)
  const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || 'G-QHMLLJGKMS'

  useEffect(() => {
    // Initialize data layer
    window.dataLayer = window.dataLayer || []
    
    // Track page views
    const trackPageView = () => {
      if (window.gtag) {
        window.gtag('config', GA_MEASUREMENT_ID, {
          page_path: window.location.pathname,
          page_title: document.title,
        })
      }
    }

    // Track custom events
    const trackEvent = (category: string, action: string, label?: string, value?: number) => {
      if (window.gtag) {
        window.gtag('event', action, {
          event_category: category,
          event_label: label,
          value: value,
        })
      }
    }

    // Track form submissions
    const trackFormSubmission = (formData: any) => {
      trackEvent('Contact', 'form_submission', 'Contact Form', 1)
      
      // Additional details for conversion tracking
      if (window.gtag) {
        window.gtag('event', 'generate_lead', {
          currency: 'EUR',
          value: formData.budget?.match(/\d+/)?.[0] || 499,
        })
      }
    }

    // Track button clicks
    const setupButtonTracking = () => {
      const buttons = document.querySelectorAll('button[type="submit"], a[href^="#get-started"], a[href^="#contact"]')
      buttons.forEach(button => {
        button.addEventListener('click', () => {
          const buttonText = button.textContent?.trim() || 'Unknown Button'
          const buttonType = button.getAttribute('type') === 'submit' ? 'Submit' : 'CTA'
          trackEvent('Button', 'click', `${buttonType}: ${buttonText}`, 1)
        })
      })
    }

    // Track outbound links
    const setupOutboundLinkTracking = () => {
      const links = document.querySelectorAll('a[href^="http"]:not([href*="evomedia.site"])')
      links.forEach(link => {
        link.addEventListener('click', (e) => {
          const url = (e.currentTarget as HTMLAnchorElement).href
          trackEvent('Outbound', 'click', url, 1)
        })
      })
    }

    // Track portfolio clicks
    const setupPortfolioTracking = () => {
      const portfolioLinks = document.querySelectorAll('a[href*="vercel.app"]')
      portfolioLinks.forEach(link => {
        link.addEventListener('click', () => {
          const projectName = link.querySelector('h3')?.textContent || 'Unknown Project'
          trackEvent('Portfolio', 'click', projectName, 1)
        })
      })
    }

    // Track scroll depth
    const setupScrollTracking = () => {
      const scrollDepths = [25, 50, 75, 100]
      let trackedDepths: number[] = []

      window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY
        const docHeight = document.documentElement.scrollHeight - window.innerHeight
        const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0

        scrollDepths.forEach(depth => {
          if (scrollPercent >= depth && !trackedDepths.includes(depth)) {
            trackedDepths.push(depth)
            trackEvent('Engagement', 'scroll', `Scroll Depth: ${depth}%`, depth)
          }
        })
      })
    }

    // Track time on page
    const setupTimeTracking = () => {
      let startTime = Date.now()
      let maxTime = 0

      const updateTime = () => {
        const currentTime = Date.now()
        const timeSpent = Math.round((currentTime - startTime) / 1000)
        maxTime = Math.max(maxTime, timeSpent)

        // Track at intervals
        if (timeSpent === 30 || timeSpent === 60 || timeSpent === 120) {
          trackEvent('Engagement', 'time_spent', `${timeSpent} seconds`, timeSpent)
        }
      }

      const interval = setInterval(updateTime, 1000)

      window.addEventListener('beforeunload', () => {
        clearInterval(interval)
        trackEvent('Engagement', 'session_end', `Total time: ${maxTime}s`, maxTime)
      })

      return () => clearInterval(interval)
    }

    // Initialize all tracking
    trackPageView()
    setupButtonTracking()
    setupOutboundLinkTracking()
    setupPortfolioTracking()
    setupScrollTracking()
    const cleanupTimeTracking = setupTimeTracking()

    // Listen for custom events
    window.addEventListener('formSubmitted', (e: any) => {
      trackFormSubmission(e.detail)
    })

    // Cleanup
    return () => {
      cleanupTimeTracking()
      window.removeEventListener('formSubmitted', (e: any) => {
        trackFormSubmission(e.detail)
      })
    }
  }, [GA_MEASUREMENT_ID])

  return (
    <>
      {/* Google Analytics 4 */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
              debug_mode: ${process.env.NODE_ENV === 'development'}
            });
          `,
        }}
      />

      {/* Vercel Analytics */}
      <VercelAnalytics />

      {/* Simple Analytics Dashboard Script */}
      <Script
        id="simple-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            // Simple dashboard data collection
            (function() {
              // Track unique visitors
              const visitorId = 'visitor_' + Math.random().toString(36).substr(2, 9);
              const storedId = localStorage.getItem('evomedia_visitor_id');
              
              if (!storedId) {
                localStorage.setItem('evomedia_visitor_id', visitorId);
                console.log('New visitor:', visitorId);
              } else {
                console.log('Returning visitor:', storedId);
              }

              // Track page views in localStorage
              const pageViews = parseInt(localStorage.getItem('evomedia_page_views') || '0') + 1;
              localStorage.setItem('evomedia_page_views', pageViews.toString());
              
              // Track referrer
              const referrer = document.referrer || 'direct';
              localStorage.setItem('evomedia_referrer', referrer);

              // Log to console (in production, send to your API)
              console.log('📊 Evolution Media Analytics:');
              console.log('• Page Views:', pageViews);
              console.log('• Referrer:', referrer);
              console.log('• Path:', window.location.pathname);
              console.log('• GA ID:', '${GA_MEASUREMENT_ID}');
            })();
          `,
        }}
      />
    </>
  )
}