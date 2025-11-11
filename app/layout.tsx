// Root Layout for D P System Next.js App
// Defines the HTML structure and global providers

import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/common/WhatsAppButton';
import ScrollToTop from '@/components/common/ScrollToTop';
import JsonLdSchema from '@/components/common/JsonLdSchema';
import './globals.css';

// Load Google Fonts with Next.js font optimization
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
});

// Default metadata (can be overridden in individual pages)
export const metadata: Metadata = {
  title: 'D P System - IT Hardware Store in Rajkot | Custom PCs, Laptops, Servers',
  description: 'Leading IT hardware store in Rajkot offering custom PCs, gaming laptops, business servers, peripherals, and professional IT services. 20+ years of experience.',
  keywords: ['IT hardware Rajkot', 'custom PC Rajkot', 'gaming laptop Rajkot', 'computer store Rajkot', 'D P System'],
  authors: [{ name: 'D P System' }],
  creator: 'Saurabh Rajput',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://dpsystem.com',
    siteName: 'D P System',
    title: 'D P System - Your IT Hardware Partner in Rajkot',
    description: 'Custom PCs, Gaming Systems, Business Laptops & Professional IT Services',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'D P System Rajkot'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'D P System - IT Hardware Store in Rajkot',
    description: 'Custom PCs, Gaming Systems & Professional IT Services',
    images: ['/twitter-image.jpg']
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code', // Add after creating Search Console property
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        {/* Additional meta tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#DC2626" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        
        {/* JSON-LD Structured Data */}
        <JsonLdSchema />
      </head>
      <body className={inter.className} suppressHydrationWarning>
        {/* Fixed Header */}
        <Header />

        {/* Main Content */}
        <main className="min-h-screen">
          {children}
        </main>

        {/* Footer */}
        <Footer />

        {/* Floating Action Buttons */}
        <WhatsAppButton />
        <ScrollToTop />
      </body>
    </html>
  );
}
