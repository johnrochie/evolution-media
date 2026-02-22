# Evolution Media - AI-Powered Websites in 24 Hours

Professional website service delivering AI-powered websites starting at €499.

## 🚀 Live Site
- **Production:** https://evomedia.site
- **Vercel:** https://evomedia.vercel.app

## 📦 Features
- Single offering: Professional Website starting at €499
- Contact form with email integration
- Portfolio with real project examples
- Mobile responsive design
- SEO optimized
- Legal pages (Privacy Policy, Terms of Service)

## 🛠️ Tech Stack
- **Framework:** Next.js 16
- **Styling:** Tailwind CSS v4
- **Email:** Resend (Serverless Functions)
- **Deployment:** Vercel
- **Domain:** evomedia.site

## 📧 Email Setup

### 1. Get Resend API Key
1. Sign up at [resend.com](https://resend.com)
2. Get your API key from dashboard
3. Verify your domain (evomedia.site)

### 2. Configure Environment Variables
Create `.env.local` file:
```bash
RESEND_API_KEY=re_your_api_key_here
NEXT_PUBLIC_SITE_URL=https://evomedia.site
NEXT_PUBLIC_CONTACT_EMAIL=hello@evomedia.site
```

### 3. Test Email Functionality
1. Fill out contact form on site
2. Email sent to: hello@evomedia.site
3. Check Resend dashboard for logs

## 🚀 Deployment

### Vercel Deployment
1. Connect GitHub repository
2. Add environment variables in Vercel dashboard
3. Deploy automatically on push

### Custom Domain
- A record: `@` → `76.76.21.21`
- CNAME: `www` → `cname.vercel-dns.com`

## 📊 Portfolio Projects
All projects are real, live websites built in 24 hours:

1. **Travel Bug** - https://travelbug-v1.vercel.app
2. **Rei Bridal** - https://reibridal-v1.vercel.app  
3. **Sensory Play Zone** - https://sensory-play-zone.vercel.app

## 🔧 Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 📝 License
Proprietary - Evolution Media © 2026