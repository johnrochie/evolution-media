'use client'

import { ArrowRight, Sparkles, Clock, Euro } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function Hero() {
  const [websitesGenerated, setWebsitesGenerated] = useState(0)
  const [revenueGenerated, setRevenueGenerated] = useState(0)

  useEffect(() => {
    // Animate counters
    const interval = setInterval(() => {
      setWebsitesGenerated(prev => {
        if (prev < 47) return prev + 1
        clearInterval(interval)
        return 47
      })
      setRevenueGenerated(prev => {
        if (prev < 23500) return prev + 500
        clearInterval(interval)
        return 23500
      })
    }, 50)

    return () => clearInterval(interval)
  }, [])

  return (
    <section id="home" className="relative overflow-hidden pt-20 pb-32">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      
      <div className="container relative mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-8">
            <Sparkles size={16} />
            <span className="font-semibold">AI-Powered Websites in 24 Hours</span>
          </div>

          {/* Main headline */}
          <h1 className="text-5xl md:text-7xl font-bold text-dark dark:text-white mb-6">
            Get a Professional Website
            <span className="block text-primary mt-2">for Just €499</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto">
            Evolution Media uses AI to create stunning, functional websites in 24 hours. 
            No meetings, no delays, just results.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <div className="text-3xl font-bold text-dark dark:text-white">{websitesGenerated}+</div>
                  <div className="text-gray-600 dark:text-gray-400">Websites Generated</div>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <div className="p-3 bg-accent/10 rounded-lg">
                  <Euro className="h-6 w-6 text-accent" />
                </div>
                <div className="text-left">
                  <div className="text-3xl font-bold text-dark dark:text-white">€{revenueGenerated.toLocaleString()}</div>
                  <div className="text-gray-600 dark:text-gray-400">Revenue Generated</div>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <div className="p-3 bg-secondary/10 rounded-lg">
                  <Sparkles className="h-6 w-6 text-secondary" />
                </div>
                <div className="text-left">
                  <div className="text-3xl font-bold text-dark dark:text-white">99%</div>
                  <div className="text-gray-600 dark:text-gray-400">Satisfaction Rate</div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#get-started"
              className="inline-flex items-center justify-center space-x-2 bg-primary text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-primary/90 transition-all transform hover:scale-105 shadow-xl"
            >
              <span>Get Your Website Now</span>
              <ArrowRight size={20} />
            </a>
            <a
              href="#portfolio"
              className="inline-flex items-center justify-center space-x-2 border-2 border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 px-8 py-4 rounded-xl font-bold text-lg hover:border-primary hover:text-primary transition-all"
            >
              <span>See Examples</span>
            </a>
          </div>

          {/* Trust indicators */}
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
            <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">Trusted by businesses across Ireland</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <div className="text-gray-700 dark:text-gray-300 font-semibold">Restaurants</div>
              <div className="text-gray-700 dark:text-gray-300 font-semibold">Yoga Studios</div>
              <div className="text-gray-700 dark:text-gray-300 font-semibold">Dental Clinics</div>
              <div className="text-gray-700 dark:text-gray-300 font-semibold">Consultants</div>
              <div className="text-gray-700 dark:text-gray-300 font-semibold">Retail Stores</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}