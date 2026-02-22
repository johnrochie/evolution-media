'use client'

import { useState } from 'react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    business: '',
    budget: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // Track form submission for analytics
      if (typeof window !== 'undefined') {
        // Google Analytics event
        if (window.gtag) {
          window.gtag('event', 'generate_lead', {
            currency: 'EUR',
            value: formData.budget?.match(/\d+/)?.[0] || 499,
            event_category: 'Contact',
            event_label: 'Form Submission',
          })
        }
        
        // Custom event for our analytics
        window.dispatchEvent(new CustomEvent('formSubmitted', { detail: formData }))
        
        // Console log for debugging
        console.log('📧 Form submitted for analytics:', formData)
      }

      // Call the API endpoint
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || 'Failed to submit form')
      }

      // Redirect to thank you page after successful submission
      window.location.href = '/thank-you'
      
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
      // Show error message to user
      alert('Failed to submit form. Please try again or email us directly at hello@evomedia.site')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Name & Email */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
            placeholder="John Smith"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
            placeholder="john@example.com"
          />
        </div>
      </div>

      {/* Business Type */}
      <div>
        <label htmlFor="business" className="block text-sm font-medium text-gray-300 mb-2">
          Business Type *
        </label>
        <select
          id="business"
          name="business"
          value={formData.business}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 bg-gray-900 border border-white/10 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all appearance-none"
        >
          <option value="" className="text-gray-400 bg-gray-900">Select your business type</option>
          <option value="service" className="text-white bg-gray-900">Service Business</option>
          <option value="ecommerce" className="text-white bg-gray-900">E-commerce Store</option>
          <option value="agency" className="text-white bg-gray-900">Marketing Agency</option>
          <option value="consulting" className="text-white bg-gray-900">Consulting</option>
          <option value="restaurant" className="text-white bg-gray-900">Restaurant/Food</option>
          <option value="health" className="text-white bg-gray-900">Health & Wellness</option>
          <option value="education" className="text-white bg-gray-900">Education/Training</option>
          <option value="other" className="text-white bg-gray-900">Other</option>
        </select>
      </div>

      {/* Budget */}
      <div>
        <label htmlFor="budget" className="block text-sm font-medium text-gray-300 mb-2">
          Budget Range *
        </label>
        <select
          id="budget"
          name="budget"
          value={formData.budget}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 bg-gray-900 border border-white/10 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all appearance-none"
        >
          <option value="" className="text-gray-400 bg-gray-900">Select your budget</option>
          <option value="€499 - Basic Website" className="text-white bg-gray-900">€499 - Basic Website</option>
          <option value="€799 - Standard Website" className="text-white bg-gray-900">€799 - Standard Website</option>
          <option value="€1,299 - Premium Website" className="text-white bg-gray-900">€1,299 - Premium Website</option>
          <option value="€2,000+ - Custom Project" className="text-white bg-gray-900">€2,000+ - Custom Project</option>
          <option value="Not sure yet" className="text-white bg-gray-900">Not sure yet</option>
        </select>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
          Project Details (Optional)
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all resize-none"
          placeholder="Tell us about your project, timeline, or any specific requirements..."
        />
      </div>

      {/* Submit Button */}
      <div>
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full py-4 px-6 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold text-lg rounded-xl hover:shadow-2xl hover:shadow-cyan-500/40 transition-all duration-300 ${
            isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105'
          }`}
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center">
              <svg className="animate-spin h-5 w-5 mr-3 text-white" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              Sending...
            </span>
          ) : (
            'Send Message'
          )}
        </button>

        {submitStatus === 'error' && (
          <div className="mt-4 p-4 bg-red-500/20 border border-red-500/30 rounded-xl text-red-300 text-sm">
            <p className="font-medium">Something went wrong.</p>
            <p className="mt-1">
              Please try again or email us directly at{' '}
              <a href="mailto:hello@evomedia.site" className="text-cyan-300 hover:text-cyan-200 underline">
                hello@evomedia.site
              </a>
            </p>
          </div>
        )}

        <p className="mt-4 text-sm text-gray-400 text-center">
          By submitting this form, you agree to our{' '}
          <a href="/privacy" className="text-cyan-400 hover:text-cyan-300 underline">
            Privacy Policy
          </a>
          . We'll get back to you within 24 hours.
        </p>
      </div>
    </form>
  )
}