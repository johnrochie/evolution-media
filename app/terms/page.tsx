export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms of Service</h1>
          <p className="text-gray-400">Last updated: {new Date().toLocaleDateString('en-IE', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
        </div>

        <div className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm rounded-3xl border border-white/10 p-8 md:p-12">
          <div className="prose prose-invert max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-cyan-300">1. Agreement to Terms</h2>
              <p className="text-gray-300">
                By accessing or using Evolution Media's services, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, you may not access our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-cyan-300">2. Services</h2>
              <p className="text-gray-300 mb-4">
                Evolution Media provides AI-powered website development services including:
              </p>
              <ul className="list-disc pl-6 text-gray-300 space-y-2">
                <li>Website design and development</li>
                <li>24-hour website delivery (when possible)</li>
                <li>Website maintenance and updates (optional)</li>
                <li>SEO optimization (optional)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-cyan-300">3. Pricing and Payment</h2>
              <ul className="list-disc pl-6 text-gray-300 space-y-2">
                <li><strong>Basic Website:</strong> €499 one-time fee</li>
                <li><strong>Content Package:</strong> €200/month (optional)</li>
                <li><strong>Full Service:</strong> €300/month (optional)</li>
                <li>Payment is required before work begins</li>
                <li>All prices are in Euros (€)</li>
                <li>We use secure payment processors (Stripe)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-cyan-300">4. Delivery Timeline</h2>
              <p className="text-gray-300 mb-4">
                We aim to deliver websites within 24 hours, but actual delivery time may vary based on:
              </p>
              <ul className="list-disc pl-6 text-gray-300 space-y-2">
                <li>Project complexity</li>
                <li>Client responsiveness</li>
                <li>Content provided by client</li>
                <li>Revisions requested</li>
              </ul>
              <p className="text-gray-300 mt-4">
                The "24-hour delivery" is a target, not a guaranteed service level agreement.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-cyan-300">5. Revisions and Changes</h2>
              <ul className="list-disc pl-6 text-gray-300 space-y-2">
                <li>Basic package includes 1 round of revisions</li>
                <li>Additional revisions may incur extra charges</li>
                <li>Major changes to scope may require re-quoting</li>
                <li>Client must provide all necessary content and assets</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-cyan-300">6. Intellectual Property</h2>
              <p className="text-gray-300 mb-4">
                Upon full payment:
              </p>
              <ul className="list-disc pl-6 text-gray-300 space-y-2">
                <li>Client receives full ownership of the delivered website</li>
                <li>Evolution Media retains the right to showcase the work in our portfolio</li>
                <li>Client is responsible for securing their own domain and hosting</li>
                <li>Third-party assets (images, fonts) may have their own licenses</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-cyan-300">7. Limitation of Liability</h2>
              <p className="text-gray-300">
                Evolution Media's total liability for any claim shall not exceed the amount paid by the client for the services. We are not liable for indirect, incidental, or consequential damages.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-cyan-300">8. Termination</h2>
              <p className="text-gray-300 mb-4">
                We may terminate or suspend access to our services immediately, without prior notice, for any reason, including breach of Terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-cyan-300">9. Governing Law</h2>
              <p className="text-gray-300">
                These Terms shall be governed by the laws of Ireland, without regard to its conflict of law provisions.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-cyan-300">10. Changes to Terms</h2>
              <p className="text-gray-300">
                We reserve the right to modify these terms at any time. We will provide notice of any changes by posting the new Terms of Service on this page.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-cyan-300">11. Contact Information</h2>
              <div className="mt-4 p-4 bg-gray-800/50 rounded-xl">
                <p className="text-gray-300">
                  <strong>Email:</strong> legal@evomedia.site
                </p>
                <p className="text-gray-300 mt-2">
                  <strong>Address:</strong> Evolution Media, Ireland
                </p>
              </div>
            </section>

            <div className="mt-12 pt-8 border-t border-white/10 text-sm text-gray-400">
              <p>By using our services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}