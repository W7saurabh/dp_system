// Dynamic Sitemap Generation for D P System
// Includes static pages and dynamic content from Sanity

import { MetadataRoute } from 'next';
import { client } from '@/lib/sanity.client';
import { allServiceSlugsQuery, allBlogPostSlugsQuery } from '@/lib/sanity.queries';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://dpsystem.com';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Fetch dynamic content slugs from Sanity
  let serviceSlugs: Array<{ slug: string; _updatedAt: string }> = [];
  let blogSlugs: Array<{ slug: string; _updatedAt: string }> = [];

  try {
    serviceSlugs = await client.fetch(allServiceSlugsQuery);
    blogSlugs = await client.fetch(allBlogPostSlugsQuery);
  } catch (error) {
    console.error('Error fetching slugs for sitemap:', error);
  }

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/#products`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/#services`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/#testimonials`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/#contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ];

  // Dynamic service pages
  const servicePages: MetadataRoute.Sitemap = serviceSlugs.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: new Date(service._updatedAt),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  // Dynamic blog pages
  const blogPages: MetadataRoute.Sitemap = blogSlugs.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post._updatedAt),
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }));

  // Blog index page (if there are blog posts)
  const blogIndex: MetadataRoute.Sitemap = blogSlugs.length > 0
    ? [
        {
          url: `${baseUrl}/blog`,
          lastModified: new Date(),
          changeFrequency: 'daily',
          priority: 0.7,
        },
      ]
    : [];

  return [...staticPages, ...servicePages, ...blogPages, ...blogIndex];
}

