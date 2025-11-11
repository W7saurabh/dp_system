// Robots.txt Configuration for D P System
// Controls search engine crawling

import { MetadataRoute } from 'next';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://dpsystem.com';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',              // API routes
          '/sanity/',           // Sanity Studio
          '/_next/',            // Next.js internals
          '/admin/',            // Admin routes (if any)
        ],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/api/', '/sanity/'],
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: ['/api/', '/sanity/'],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}

