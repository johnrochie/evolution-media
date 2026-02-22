import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

// Initialize Resend with your API key
// Get free API key from: https://resend.com
const resend = new Resend(process.env.RESEND_API_KEY || 're_123456789') // Replace with actual key

// Debug logging
console.log('🔧 Contact API Route Loaded')
console.log('Resend API Key exists:', !!process.env.RESEND_API_KEY)
console.log('Resend API Key length:', process.env.RESEND_API_KEY?.length || 0)

export async function POST(request: NextRequest) {
  try {
    console.log('📨 Contact form submission received')
    
    const body = await request.json()
    const { name, email, business, budget, message } = body
    
    console.log('Form data:', { name, email, business, budget, message: message?.substring(0, 50) })

    // Basic validation
    if (!name || !email || !business || !budget) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Email content
    const emailContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #2563EB, #06B6D4); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
            .content { background: #f9f9f9; padding: 20px; border-radius: 0 0 8px 8px; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; color: #2563EB; }
            .value { margin-top: 5px; padding: 8px; background: white; border-radius: 4px; border-left: 4px solid #06B6D4; }
            .footer { margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; color: #666; font-size: 14px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>🎯 New Client Inquiry - Evolution Media</h1>
              <p>Potential client submitted contact form</p>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">👤 Name</div>
                <div class="value">${name}</div>
              </div>
              <div class="field">
                <div class="label">📧 Email</div>
                <div class="value">${email}</div>
              </div>
              <div class="field">
                <div class="label">🏢 Business</div>
                <div class="value">${business}</div>
              </div>
              <div class="field">
                <div class="label">💰 Budget</div>
                <div class="value">${budget}</div>
              </div>
              <div class="field">
                <div class="label">💬 Message</div>
                <div class="value">${message || 'No additional message provided'}</div>
              </div>
              <div class="footer">
                <p><strong>📅 Submitted:</strong> ${new Date().toLocaleString()}</p>
                <p><strong>🔗 Source:</strong> Evolution Media Website (evomedia.site)</p>
                <p><em>This email was automatically generated from the contact form submission.</em></p>
              </div>
            </div>
          </div>
        </body>
      </html>
    `

    // Try custom domain first, fall back to Resend domain if not verified
    const sendEmail = async (useCustomDomain: boolean) => {
      const fromAddress = useCustomDomain 
        ? 'Evolution Media <hello@evomedia.site>'
        : 'Evolution Media <onboarding@resend.dev>'
      
      console.log(`Attempting to send email from: ${fromAddress}`)
      
      return await resend.emails.send({
        from: fromAddress,
        to: ['hello@evomedia.site'],
        replyTo: email,
        subject: `🎯 New Inquiry: ${name} - ${business}`,
        html: emailContent,
        text: `
          New Client Inquiry - Evolution Media
          
          Name: ${name}
          Email: ${email}
          Business: ${business}
          Budget: ${budget}
          Message: ${message || 'No additional message provided'}
          
          Submitted: ${new Date().toLocaleString()}
          Source: Evolution Media Website (evomedia.site)
        `,
      })
    }

    // Try custom domain first
    let result = await sendEmail(true)
    
    // If custom domain fails (not verified), try Resend domain
    if (result.error && result.error.message?.includes('domain') || result.error.message?.includes('verified')) {
      console.log('Custom domain failed, trying Resend domain...')
      result = await sendEmail(false)
    }

    const { data, error } = result

    if (error) {
      console.error('❌ Resend error:', error)
      console.error('Error details:', JSON.stringify(error, null, 2))
      return NextResponse.json(
        { 
          error: 'Failed to send email', 
          details: error.message,
          suggestion: 'Check if domain is verified in Resend dashboard'
        },
        { status: 500 }
      )
    }

    console.log('✅ Email sent successfully!')
    console.log('Email ID:', data?.id)
    console.log('From address used:', data?.from)

    return NextResponse.json(
      { success: true, message: 'Form submitted successfully' },
      { status: 200 }
    )

  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}