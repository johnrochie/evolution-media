import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

// Initialize Resend with your API key
// Get free API key from: https://resend.com
const resend = new Resend(process.env.RESEND_API_KEY || 're_123456789') // Replace with actual key

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, business, budget, message } = body

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

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'Evolution Media <hello@evomedia.site>',
      to: ['hello@evomedia.site'], // Your email address
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

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      )
    }

    console.log('Email sent successfully:', data)

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