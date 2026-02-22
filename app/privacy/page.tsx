export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-gray-400">Last updated: {new Date().toLocaleDateString('en-IE', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
        </div>

        <div className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm rounded-3xl border border-white/10 p-8 md:p-12">
          <div className="prose prose-invert max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-cyan-300">1. Information We Collect</h2>
              <p className="text-gray-300 mb-4">
                When you use Evolution Media, we may collect:
              </p>
              <ul className="list-disc pl-6 text-gray-300 space-y-2">
                <li><strong>Contact Information:</strong> Name, email address, phone number when you submit our contact form</li>
                <li><strong>Business Information:</strong> Company name, website URL, business type</li>
                <li><strong>Project Details:</strong> Information about your website project requirements</li>
                <li><strong>Usage Data:</strong> Pages visited, time spent, referring website (via anonymous analytics)</li>
                <li><strong>Technical Data:</strong> Browser type, device type, IP address (anonymized)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-cyan-300">2. How We Use Your Information</h2>
              <p className="text-gray-300 mb-4">
                We use your information to:
              </p>
              <ul className="list-disc pl-6 text-gray-300 space-y-2">
                <li>Provide and maintain our website development services</li>
                <li>Process your inquiries and communicate with you</li>
                <li>Improve our website and services</li>
                <li>Send you important updates about your project</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-cyan-300">3. Data Protection</h2>
              <p className="text-gray-300 mb-4">
                We implement appropriate security measures to protect your personal information. However, no method of transmission over the Internet is 100% secure.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-cyan-300">4. Your Rights</h2>
              <p className="text-gray-300 mb-4">
                Under GDPR and other data protection laws, you have rights including:
              </p>
              <ul className="list-disc pl-6 text-gray-300 space-y-2">
                <li><strong>Access:</strong> Request copies of your personal data</li>
                <li><strong>Rectification:</strong> Request correction of inaccurate data</li>
                <li><strong>Erasure:</strong> Request deletion of your personal data</li>
                <li><strong>Restriction:</strong> Request restriction of processing</li>
                <li><strong>Objection:</strong> Object to our processing of your data</li>
                <li><strong>Portability:</strong> Request transfer of your data to another organization</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-cyan-300">5. Cookies</h2>
              <p className="text-gray-300 mb-4">
                We use essential cookies for website functionality and analytics cookies to improve our services. You can control cookies through your browser settings.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-cyan-300">6. Third-Party Services</h2>
              <p className="text-gray-300 mb-4">
                We may use third-party services such as:
              </p>
              <ul className="list-disc pl-6 text-gray-300 space-y-2">
                <li><strong>Analytics:</strong> Google Analytics (anonymous data)</li>
                <li><strong>Email:</strong> Email service providers for communication</li>
                <li><strong>Hosting:</strong> Vercel for website hosting</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-cyan-300">7. Contact Us</h2>
              <p className="text-gray-300">
                If you have questions about this Privacy Policy, contact us at:
              </p>
              <div className="mt-4 p-4 bg-gray-800/50 rounded-xl">
                <p className="text-gray-300">
                  <strong>Email:</strong> privacy@evomedia.site
                </p>
                <p className="text-gray-300 mt-2">
                  <strong>Address:</strong> Evolution Media, Ireland
                </p>
              </div>
            </section>

            <div className="mt-12 pt-8 border-t border-white/10 text-sm text-gray-400">
              <p>This Privacy Policy may be updated periodically. We will notify you of any changes by posting the new Privacy Policy on this page.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}