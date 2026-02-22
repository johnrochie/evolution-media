'use client'

import { Zap, Clock, Shield, Globe, Sparkles, TrendingUp } from 'lucide-react'

const features = [
  {
    icon: <Zap className="h-8 w-8" />,
    title: '24-Hour Delivery',
    description: 'Get your professional website live in just 24 hours. No delays, no meetings.',
    color: 'text-primary',
    bgColor: 'bg-primary/10'
  },
  {
    icon: <Sparkles className="h-8 w-8" />,
    title: 'AI-Powered Design',
    description: 'Our AI creates stunning, modern designs tailored to your industry.',
    color: 'text-secondary',
    bgColor: 'bg-secondary/10'
  },
  {
    icon: <Shield className="h-8 w-8" />,
    title: 'Quality Guaranteed',
    description: 'Every website goes through our quality check before delivery.',
    color: 'text-accent',
    bgColor: 'bg-accent/10'
  },
  {
    icon: <Globe className="h-8 w-8" />,
    title: 'Mobile Optimized',
    description: 'Perfectly responsive on all devices - phones, tablets, and desktops.',
    color: 'text-primary',
    bgColor: 'bg-primary/10'
  },
  {
    icon: <Clock className="h-8 w-8" />,
    title: 'No Maintenance',
    description: 'We handle hosting, updates, and security - you focus on your business.',
    color: 'text-secondary',
    bgColor: 'bg-secondary/10'
  },
  {
    icon: <TrendingUp className="h-8 w-8" />,
    title: 'SEO Ready',
    description: 'Built with best practices to rank higher on Google from day one.',
    color: 'text-accent',
    bgColor: 'bg-accent/10'
  },
]

export default function Features() {
  return (
    <section id="features" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-dark dark:text-white mb-4">
            Why Choose Evolution Media
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            We combine AI efficiency with human quality control for the perfect balance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className={`${feature.bgColor} w-16 h-16 rounded-xl flex items-center justify-center mb-6`}>
                <div className={feature.color}>
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-2xl font-bold text-dark dark:text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Process */}
        <div className="mt-20 pt-12 border-t border-gray-200 dark:border-gray-800">
          <h3 className="text-3xl font-bold text-center text-dark dark:text-white mb-12">
            How It Works
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '1', title: 'Fill Brief', desc: 'Tell us about your business' },
              { step: '2', title: 'AI Creates', desc: 'Our AI designs your website' },
              { step: '3', title: 'Quality Check', desc: 'We review and approve' },
              { step: '4', title: 'Go Live', desc: 'Your website is deployed' },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h4 className="text-xl font-bold text-dark dark:text-white mb-2">
                  {item.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}