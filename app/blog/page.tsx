// Blog Page for D P Systems
// Placeholder page for future blog functionality
// This will be integrated with Sanity CMS for dynamic content

import type { Metadata } from 'next';
import Link from 'next/link';
import { FaArrowLeft, FaNewspaper, FaCalendar, FaUser } from 'react-icons/fa';

// SEO Metadata
export const metadata: Metadata = {
  title: 'Blog - D P Systems | Tech News, Tutorials & Industry Insights',
  description: 'Stay updated with the latest technology news, hardware reviews, PC building guides, and IT industry insights from D P Systems, Rajkot\'s trusted IT hardware partner.',
  keywords: ['IT blog', 'technology news', 'PC building guide', 'hardware reviews', 'tech tutorials', 'D P Systems blog'],
  openGraph: {
    title: 'Blog - D P Systems | Tech News & Tutorials',
    description: 'Stay updated with the latest technology news and insights from D P Systems',
    url: 'https://yourdomain.com/blog',
    type: 'website',
  },
};

export default function BlogPage() {
  // Placeholder blog posts - will be fetched from Sanity CMS
  const placeholderPosts = [
    {
      id: 1,
      title: 'How to Build a Custom Gaming PC in 2025',
      excerpt: 'Complete step-by-step guide to building your dream gaming PC with the latest components and best practices.',
      category: 'Tutorials',
      date: 'November 10, 2025',
      author: 'D P Systems Team',
      image: '/images/blog-placeholder-1.jpg'
    },
    {
      id: 2,
      title: 'Best Business Laptops for Small Businesses',
      excerpt: 'Comprehensive review of the top business laptops that offer reliability, performance, and value for money.',
      category: 'Reviews',
      date: 'November 8, 2025',
      author: 'D P Systems Team',
      image: '/images/blog-placeholder-2.jpg'
    },
    {
      id: 3,
      title: 'Server Setup Guide for Growing Companies',
      excerpt: 'Everything you need to know about setting up a reliable server infrastructure for your expanding business.',
      category: 'Guides',
      date: 'November 5, 2025',
      author: 'D P Systems Team',
      image: '/images/blog-placeholder-3.jpg'
    }
  ];

  return (
    <main className="min-h-screen bg-gray-50 pt-24 sm:pt-28 md:pt-32 lg:pt-36 pb-16">
      <div className="container mx-auto px-4">
        {/* Back Button */}
        <div className="mb-6">
          <Link
            href="/"
            className="inline-flex items-center text-accent-700 hover:text-primary font-medium transition-colors group"
          >
            <FaArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
        </div>

        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-secondary-900 mb-4">
            Tech <span className="text-primary">Blog</span>
          </h1>
          <p className="text-lg md:text-xl text-accent-700 max-w-3xl mx-auto">
            Stay updated with the latest technology news, hardware reviews, and expert insights
          </p>
        </div>

        {/* Coming Soon Notice */}
        <div className="bg-gradient-to-r from-primary-50 to-white border-l-4 border-primary rounded-lg p-6 md:p-8 mb-12 shadow-md">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <FaNewspaper className="text-primary text-4xl" />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-secondary-900 mb-2">
                Blog Coming Soon!
              </h2>
              <p className="text-accent-700 leading-relaxed mb-4">
                We're working on bringing you valuable content including tech tutorials, product reviews, 
                industry news, and expert advice. Stay tuned for regular updates on IT hardware, 
                PC building guides, and technology trends.
              </p>
              <p className="text-accent-700 font-semibold">
                In the meantime, feel free to contact us for any queries or visit our store for personalized assistance.
              </p>
            </div>
          </div>
        </div>

        {/* Placeholder Blog Posts Preview */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-secondary-900 mb-6">Upcoming Content</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {placeholderPosts.map((post) => (
              <div 
                key={post.id}
                className="bg-white rounded-xl shadow-card hover:shadow-card-hover transition-all duration-300 overflow-hidden group opacity-60"
              >
                {/* Placeholder Image */}
                <div className="h-48 bg-gradient-to-br from-primary-100 to-gray-100 flex items-center justify-center">
                  <FaNewspaper className="text-6xl text-primary-300" />
                </div>

                {/* Post Content */}
                <div className="p-6">
                  <div className="flex items-center space-x-4 text-sm text-accent-600 mb-3">
                    <span className="flex items-center">
                      <FaCalendar className="mr-1" />
                      {post.date}
                    </span>
                    <span className="flex items-center">
                      <FaUser className="mr-1" />
                      {post.author}
                    </span>
                  </div>
                  
                  <h4 className="text-xl font-bold text-secondary-900 mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h4>
                  
                  <p className="text-accent-700 leading-relaxed mb-4">
                    {post.excerpt}
                  </p>

                  <span className="inline-block px-3 py-1 bg-primary-50 text-primary text-sm font-semibold rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-white rounded-2xl shadow-card p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-secondary-900 mb-4">
            Have Questions About IT Hardware?
          </h3>
          <p className="text-accent-700 mb-6 max-w-2xl mx-auto">
            Our expert team is always ready to help you with product selection, 
            custom PC building, or any technical queries.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-600 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Contact Us
            </Link>
            <Link
              href="/"
              className="inline-flex items-center justify-center border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:border-primary hover:text-primary transition-all duration-300"
            >
              Visit Homepage
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

