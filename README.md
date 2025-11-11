# D P System - Next.js 14 + Sanity CMS

> Modern, SEO-optimized website for D P System IT Hardware Store in Rajkot, Gujarat

[![Next.js](https://img.shields.io/badge/Next.js-14-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8)](https://tailwindcss.com/)
[![Sanity](https://img.shields.io/badge/Sanity-v3-f03e2f)](https://www.sanity.io/)

---

## 🚀 Quick Start

### Prerequisites

- Node.js 18.17 or later
- npm or yarn
- Sanity account (free at [sanity.io](https://www.sanity.io))

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Set up Sanity Project:**
   ```bash
   # Initialize Sanity (one-time setup)
   npx sanity init
   
   # Follow the prompts:
   # - Login to Sanity
   # - Create new project or select existing
   # - Choose dataset name: "production"
   # - Confirm project path
   ```

3. **Configure environment variables:**
   ```bash
   # Copy the example file
   cp .env.local.example .env.local
   
   # Edit .env.local and add your Sanity project details
   # Get these from: https://www.sanity.io/manage
   ```

4. **Run development servers:**
   ```bash
   # Terminal 1: Next.js development server
   npm run dev
   
   # Terminal 2: Sanity Studio (CMS)
   npx sanity dev
   ```

5. **Access the applications:**
   - **Website:** http://localhost:3000
   - **Sanity Studio (CMS):** http://localhost:3333

---

## 📁 Project Structure

```
dpsystem-nextjs/
├── app/                    # Next.js 14 App Router
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Homepage
│   ├── globals.css         # Global styles
│   ├── sitemap.ts          # Dynamic sitemap
│   └── robots.ts           # Robots.txt
│
├── components/             # React components
│   ├── layout/             # Layout components
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   ├── sections/           # Page sections
│   │   ├── Hero.tsx
│   │   ├── FeaturedProducts.tsx
│   │   ├── Services.tsx
│   │   └── ...
│   ├── ui/                 # Reusable UI components
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   └── ...
│   └── common/             # Common components
│       ├── WhatsAppButton.tsx
│       └── ScrollToTop.tsx
│
├── lib/                    # Utility functions
│   ├── sanity.client.ts    # Sanity client
│   ├── sanity.queries.ts   # GROQ queries
│   └── sanity.image.ts     # Image URL builder
│
├── sanity/                 # Sanity CMS configuration
│   └── schemas/            # Content schemas
│       ├── service.ts
│       ├── product.ts
│       ├── post.ts
│       ├── testimonial.ts
│       ├── brand.ts
│       └── settings.ts
│
├── types/                  # TypeScript types
│   └── index.ts
│
├── public/                 # Static assets
│   ├── dpsystem-logo.png
│   └── images/
│
├── sanity.config.ts        # Sanity Studio config
├── tailwind.config.ts      # Tailwind configuration
└── next.config.ts          # Next.js configuration
```

---

## 🎨 Tech Stack

### Frontend
- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Icons** - Icon library

### CMS
- **Sanity v3** - Headless CMS
- **GROQ** - Query language for Sanity
- **Portable Text** - Rich text format

### Deployment
- **Vercel** - Hosting and CI/CD
- **Sanity CDN** - Image optimization

---

## 🎨 Design System

### Color Palette

```css
/* Primary Red - Power & Innovation */
--primary: #DC2626

/* Secondary Black - Sophistication */
--secondary: #000000

/* Accent Grey - Balance */
--accent: #6B7280

/* Semantic Colors */
--success: #10B981
--warning: #F59E0B
--error: #EF4444
```

### Typography
- **Primary Font:** Inter (sans-serif)
- **Secondary Font:** Poppins (sans-serif)

---

## 📝 Available Scripts

### Development
```bash
# Start Next.js development server
npm run dev

# Start Sanity Studio
npx sanity dev

# Build for production
npm run build

# Start production server
npm start
```

### Sanity Commands
```bash
# Deploy Sanity Studio
npx sanity deploy

# Export data
npx sanity dataset export production

# Import data
npx sanity dataset import data.ndjson production

# List projects
npx sanity projects list
```

---

## 🚀 Deployment

### Deploy to Vercel

1. **Push code to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/yourusername/dpsystem-nextjs.git
   git push -u origin main
   ```

2. **Deploy to Vercel:**
   - Visit [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Add environment variables:
     - `NEXT_PUBLIC_SANITY_PROJECT_ID`
     - `NEXT_PUBLIC_SANITY_DATASET`
     - `NEXT_PUBLIC_SANITY_API_VERSION`
     - `SANITY_API_TOKEN`
     - `REVALIDATE_SECRET`
   - Click "Deploy"

3. **Configure custom domain:**
   - Go to project settings → Domains
   - Add your custom domain
   - Update DNS records as instructed

4. **Set up Sanity Webhooks:**
   - Go to Sanity dashboard → API → Webhooks
   - Add webhook URL: `https://yourdomain.com/api/revalidate`
   - Add secret: Same as `REVALIDATE_SECRET`
   - Enable for Create, Update, Delete events

---

## 📊 Performance Targets

| Metric | Target | Current (Vite) | Improvement |
|--------|--------|----------------|-------------|
| Lighthouse Performance | 95+ | ~85 | +12% |
| Lighthouse SEO | 100 | ~90 | +11% |
| Page Load Time | < 1.5s | ~2.5s | 40% faster |
| First Contentful Paint | < 1.0s | ~1.5s | 33% faster |

---

## 🎯 SEO Features

- ✅ Server-Side Generation (SSG)
- ✅ Incremental Static Regeneration (ISR)
- ✅ Dynamic sitemap generation
- ✅ Robots.txt configuration
- ✅ Open Graph meta tags
- ✅ Twitter Card meta tags
- ✅ JSON-LD structured data (LocalBusiness schema)
- ✅ Automatic image optimization
- ✅ Semantic HTML structure

---

## 📱 Responsive Breakpoints

```css
/* Mobile First Approach */
sm:  640px   /* Small tablets */
md:  768px   /* Tablets */
lg:  1024px  /* Small desktops */
xl:  1280px  /* Large desktops */
2xl: 1536px  /* Extra large screens */
```

---

## 🔧 Environment Variables

Create a `.env.local` file with the following variables:

```bash
# Sanity Configuration
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2025-01-01
SANITY_API_TOKEN=your_read_token

# Revalidation Secret
REVALIDATE_SECRET=your_random_secret

# Site URL
NEXT_PUBLIC_SITE_URL=https://yourdomain.com

# Optional: Email Service (Resend)
RESEND_API_KEY=re_your_api_key
FROM_EMAIL=contact@yourdomain.com
TO_EMAIL=contact@yourdomain.com

# Optional: Google Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

---

## 📚 Content Management

### Adding Content via Sanity Studio

1. **Access Sanity Studio:**
   - Development: http://localhost:3333
   - Production: https://your-project.sanity.studio

2. **Add Services:**
   - Click "Services" in sidebar
   - Click "+" to add new service
   - Fill in all required fields
   - Set display order
   - Click "Publish"

3. **Add Products:**
   - Click "Products" in sidebar
   - Add product details
   - Upload product image
   - Set as featured if needed
   - Click "Publish"

4. **Add Blog Posts:**
   - Click "Blog Posts" in sidebar
   - Write post content
   - Add featured image
   - Set publish date
   - Add SEO metadata
   - Click "Publish"

---

## 🐛 Troubleshooting

### Issue: Sanity content not showing

**Solution:**
```bash
# Check environment variables
echo $NEXT_PUBLIC_SANITY_PROJECT_ID

# Verify Sanity connection
npx sanity projects list

# Clear Next.js cache
rm -rf .next
npm run dev
```

### Issue: Images not loading

**Solution:**
```bash
# Check Sanity image configuration
# Verify CORS settings in Sanity dashboard
# Add your domain to allowed origins
```

### Issue: Build errors

**Solution:**
```bash
# Clear all caches
rm -rf .next node_modules
npm install
npm run build
```

---

## 📖 Documentation

- **Next.js:** https://nextjs.org/docs
- **Sanity:** https://www.sanity.io/docs
- **Tailwind CSS:** https://tailwindcss.com/docs
- **Framer Motion:** https://www.framer.com/motion/
- **TypeScript:** https://www.typescriptlang.org/docs

---

## 🤝 Contributing

This is a private project for D P System. For any questions or updates:

**Developer:** Saurabh Rajput  
**Email:** [your-email@example.com]  
**Project Date:** November 2025

---

## 📄 License

Private project - All rights reserved by D P System, Rajkot, Gujarat

---

## 🎉 Features

- ✅ **SEO Optimized** - Server-side rendering for better search rankings
- ✅ **Lightning Fast** - Automatic code splitting and optimization
- ✅ **Mobile First** - Fully responsive on all devices
- ✅ **CMS Powered** - Easy content management with Sanity
- ✅ **Type Safe** - Full TypeScript support
- ✅ **Modern UI** - Beautiful animations with Framer Motion
- ✅ **WhatsApp Integration** - Direct customer communication
- ✅ **Blog Ready** - Built-in blog functionality
- ✅ **Analytics Ready** - Easy integration with Google Analytics
- ✅ **FREE Hosting** - Deploy for free on Vercel

---

## 📞 Support

For technical support or questions:
- Check `MIGRATION_PROGRESS.md` for detailed progress
- Review `PRD_NEXTJS_SANITY.md` for project requirements
- Refer to individual component files for implementation details

---

**Built with ❤️ for D P System, Rajkot**
