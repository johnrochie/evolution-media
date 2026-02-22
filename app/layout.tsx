import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Analytics from './components/Analytics'
import AnalyticsDashboard from './components/AnalyticsDashboard'
import CookieConsent from './components/CookieConsent'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Evolution Media | AI-Powered Websites in 24 Hours',
  description: 'Get a professional website in 24 hours for just €499. AI-powered design, no meetings, no delays. Perfect for modern businesses.',
  keywords: ['website design', 'AI websites', '24 hour websites', 'affordable web design', 'business websites'],
  authors: [{ name: 'Evolution Media' }],
  creator: 'Evolution Media',
  publisher: 'Evolution Media',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: 'https://evomedia.site',
    title: 'Evolution Media | AI-Powered Websites in 24 Hours',
    description: 'Get a professional website in 24 hours for just €499. AI-powered design, no meetings, no delays.',
    siteName: 'Evolution Media',
    images: [
      {
        url: 'https://evomedia.site/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Evolution Media - AI-Powered Digital Agency',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Evolution Media | AI-Powered Websites in 24 Hours',
    description: 'Get a professional website in 24 hours for just €499. AI-powered design, no meetings, no delays.',
    images: ['https://evomedia.site/og-image.png'],
    creator: '@evomedia',
  },
  verification: {
    // Add Google Search Console verification here
    // google: 'verification_token',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="/output.css" />
        <link rel="icon" href="/icon?<generated>" type="image/png" sizes="32x32" />
        <link rel="apple-touch-icon" href="/apple-icon?<generated>" type="image/png" sizes="180x180" />
      </head>
      <body className={`${inter.className} bg-gray-900 text-white`}>
        {children}
        <Analytics />
        <AnalyticsDashboard />
        <CookieConsent />
      </body>
    </html>
  )
}