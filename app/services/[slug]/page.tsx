// Service Detail Page for D P System
// Dynamic route for individual service pages with SSG and SEO optimization

import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { client } from '@/lib/sanity.client';
import { urlFor } from '@/lib/sanity.image';
import { Service } from '@/types';
import * as Icons from 'react-icons/fa';
import { 
  FaCheckCircle, 
  FaArrowLeft, 
  FaPhone, 
  FaEnvelope,
  FaClock,
  FaRupeeSign
} from 'react-icons/fa';

// ============================================
// GROQ QUERIES
// ============================================

const SERVICE_QUERY = `*[_type == "service" && slug.current == $slug][0] {
  _id,
  _createdAt,
  _updatedAt,
  title,
  slug,
  shortDescription,
  fullDescription,
  category,
  icon,
  mainImage,
  gallery,
  keyFeatures,
  highlights,
  benefits,
  process,
  pricing,
  deliveryTime,
  body,
  featured,
  order,
  seo
}`;

const ALL_SERVICE_SLUGS_QUERY = `*[_type == "service"] {
  "slug": slug.current
}`;

// ============================================
// STATIC PARAMS GENERATION (SSG)
// ============================================

// Allow dynamic params for on-demand generation
export const dynamicParams = true;

export async function generateStaticParams() {
  try {
    const services = await client.fetch<{ slug: string }[]>(ALL_SERVICE_SLUGS_QUERY);
    
    // Only return params if we have services in Sanity
    if (services && services.length > 0) {
      return services.map((service) => ({
        slug: service.slug,
      }));
    }
    
    // If no services in Sanity yet, return empty array to skip static generation
    // Pages will be generated on-demand instead
    return [];
  } catch (error) {
    console.error('Error fetching services for static params:', error);
    // Return empty array on error to allow build to continue
    return [];
  }
}

// ============================================
// METADATA GENERATION (SEO)
// ============================================

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  try {
    const service = await client.fetch<Service>(SERVICE_QUERY, { slug: params.slug });

    if (!service) {
      return {
        title: 'Service Not Found',
      };
    }

  const seoTitle = service.seo?.metaTitle || `${service.title} | D P System`;
  const seoDescription = service.seo?.metaDescription || service.shortDescription;
  const seoKeywords = service.seo?.keywords?.join(', ') || '';
  
  // Generate OG image URL with proper type handling
  const ogImage = service.seo?.ogImage 
    ? urlFor(service.seo.ogImage as any).width(1200).height(630).url()
    : service.mainImage
    ? urlFor(service.mainImage as any).width(1200).height(630).url()
    : '/dpsystem-logo.png';

  return {
    title: seoTitle,
    description: seoDescription,
    keywords: seoKeywords,
    openGraph: {
      title: seoTitle,
      description: seoDescription,
      type: 'article',
      url: `https://dpsystem.in/services/${params.slug}`,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: service.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: seoTitle,
      description: seoDescription,
      images: [ogImage],
    },
  };
  } catch (error) {
    console.error('Error generating metadata for service:', error);
    return {
      title: 'Service | D P System',
      description: 'IT Hardware and Services in Rajkot',
    };
  }
}

// ============================================
// SERVICE DETAIL PAGE COMPONENT
// ============================================

export default async function ServiceDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  try {
    const service = await client.fetch<Service>(SERVICE_QUERY, { slug: params.slug });

    // Return 404 if service not found
    if (!service) {
      notFound();
    }
    
    return renderServicePage(service, params);
  } catch (error) {
    console.error('Error fetching service:', error);
    notFound();
  }
}

// Separate function to render the service page
function renderServicePage(service: Service, params: { slug: string }) {

  // Get icon component dynamically
  const IconComponent = (Icons as any)[service.icon] || Icons.FaTools;

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          {/* Back Button */}
          <Link 
            href="/#services"
            className="inline-flex items-center text-white/90 hover:text-white mb-6 transition-colors"
          >
            <FaArrowLeft className="mr-2" />
            Back to Services
          </Link>

          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Left Content */}
            <div>
              {/* Category Badge */}
              {service.category && (
                <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold mb-4">
                  {service.category.replace('-', ' ').toUpperCase()}
                </span>
              )}

              {/* Icon */}
              <div className="mb-6">
                <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                  <IconComponent className="text-4xl" />
                </div>
              </div>

              {/* Title */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 leading-tight">
                {service.title}
              </h1>

              {/* Short Description */}
              <p className="text-xl text-white/90 mb-6">
                {service.shortDescription}
              </p>

              {/* Quick Info */}
              <div className="flex flex-wrap gap-4 mb-8">
                {service.deliveryTime && (
                  <div className="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                    <FaClock className="mr-2" />
                    <span className="text-sm font-semibold">{service.deliveryTime}</span>
                  </div>
                )}
                {service.pricing?.amount && (
                  <div className="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                    <FaRupeeSign className="mr-2" />
                    <span className="text-sm font-semibold">{service.pricing.amount}</span>
                  </div>
                )}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <Link 
                  href="/#contact"
                  className="inline-flex items-center bg-white text-primary-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-all shadow-lg"
                >
                  <FaEnvelope className="mr-2" />
                  Request Service
                </Link>
                <Link 
                  href="tel:+919876543210"
                  className="inline-flex items-center bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-bold hover:bg-white/20 transition-all"
                >
                  <FaPhone className="mr-2" />
                  Call Now
                </Link>
              </div>
            </div>

            {/* Right Content - Image */}
            {service.mainImage && (
              <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={urlFor(service.mainImage as any).width(800).height(600).url()}
                  alt={service.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Column */}
            <div className="lg:col-span-2 space-y-12">
              {/* Full Description */}
              {service.fullDescription && (
                <div className="bg-white rounded-2xl p-8 shadow-sm">
                  <h2 className="text-3xl font-bold text-secondary-900 mb-4">
                    About This Service
                  </h2>
                  <p className="text-lg text-accent-600 leading-relaxed whitespace-pre-line">
                    {service.fullDescription}
                  </p>
                </div>
              )}

              {/* Key Features */}
              {service.keyFeatures && service.keyFeatures.length > 0 && (
                <div className="bg-white rounded-2xl p-8 shadow-sm">
                  <h2 className="text-3xl font-bold text-secondary-900 mb-6">
                    Key Features
                  </h2>
                  <div className="grid sm:grid-cols-2 gap-6">
                    {service.keyFeatures.map((item, index) => (
                      <div key={index} className="flex items-start">
                        <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                        <div>
                          <h3 className="font-bold text-secondary-900 mb-1">
                            {item.feature}
                          </h3>
                          {item.description && (
                            <p className="text-sm text-accent-600">
                              {item.description}
                            </p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Process/How it Works */}
              {service.process && service.process.length > 0 && (
                <div className="bg-white rounded-2xl p-8 shadow-sm">
                  <h2 className="text-3xl font-bold text-secondary-900 mb-6">
                    How It Works
                  </h2>
                  <div className="space-y-6">
                    {service.process.map((step, index) => (
                      <div key={index} className="flex items-start">
                        <div className="flex-shrink-0 w-10 h-10 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center font-bold mr-4">
                          {step.step}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-secondary-900 mb-2">
                            {step.title}
                          </h3>
                          {step.description && (
                            <p className="text-accent-600">
                              {step.description}
                            </p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Benefits */}
              {service.benefits && service.benefits.length > 0 && (
                <div className="bg-white rounded-2xl p-8 shadow-sm">
                  <h2 className="text-3xl font-bold text-secondary-900 mb-6">
                    Benefits
                  </h2>
                  <ul className="space-y-3">
                    {service.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <FaCheckCircle className="text-primary-600 mt-1 mr-3 flex-shrink-0" />
                        <span className="text-accent-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Image Gallery */}
              {service.gallery && service.gallery.length > 0 && (
                <div className="bg-white rounded-2xl p-8 shadow-sm">
                  <h2 className="text-3xl font-bold text-secondary-900 mb-6">
                    Gallery
                  </h2>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {service.gallery.map((image, index) => (
                      <div key={index} className="relative h-64 rounded-lg overflow-hidden">
                        <Image
                          src={urlFor(image as any).width(600).height(400).url()}
                          alt={`${service.title} - Image ${index + 1}`}
                          fill
                          className="object-cover hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* Pricing Card */}
                {service.pricing && (
                  <div className="bg-white rounded-2xl p-6 shadow-sm border-2 border-primary-100">
                    <h3 className="text-xl font-bold text-secondary-900 mb-4">
                      Pricing
                    </h3>
                    <div className="mb-4">
                      <div className="text-3xl font-extrabold text-primary-600 mb-2">
                        {service.pricing.amount || 'Contact Us'}
                      </div>
                      {service.pricing.type && (
                        <div className="text-sm text-accent-600 capitalize">
                          {service.pricing.type === 'custom' ? 'Custom Quote' : service.pricing.type}
                        </div>
                      )}
                    </div>
                    {service.pricing.note && (
                      <p className="text-sm text-accent-600 mb-4">
                        {service.pricing.note}
                      </p>
                    )}
                    <Link
                      href="/#contact"
                      className="block w-full bg-primary text-white text-center px-6 py-3 rounded-lg font-bold hover:bg-primary-600 transition-colors"
                    >
                      Get Started
                    </Link>
                  </div>
                )}

                {/* Highlights */}
                {service.highlights && service.highlights.length > 0 && (
                  <div className="bg-primary-50 rounded-2xl p-6">
                    <h3 className="text-xl font-bold text-secondary-900 mb-4">
                      Service Highlights
                    </h3>
                    <ul className="space-y-3">
                      {service.highlights.map((highlight, index) => (
                        <li key={index} className="flex items-start text-sm">
                          <FaCheckCircle className="text-primary-600 mt-1 mr-2 flex-shrink-0" />
                          <span className="text-accent-700">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Contact Card */}
                <div className="bg-gradient-to-br from-secondary-900 to-secondary-800 text-white rounded-2xl p-6">
                  <h3 className="text-xl font-bold mb-4">
                    Need Help?
                  </h3>
                  <p className="text-white/80 mb-6 text-sm">
                    Our expert team is ready to assist you with this service.
                  </p>
                  <div className="space-y-3">
                    <Link
                      href="tel:+919876543210"
                      className="flex items-center text-white hover:text-primary-300 transition-colors"
                    >
                      <FaPhone className="mr-3" />
                      <span className="text-sm font-semibold">+91 98765 43210</span>
                    </Link>
                    <Link
                      href="mailto:info@dpsystem.in"
                      className="flex items-center text-white hover:text-primary-300 transition-colors"
                    >
                      <FaEnvelope className="mr-3" />
                      <span className="text-sm font-semibold">info@dpsystem.in</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary-50 to-primary-100 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-accent-700 mb-8 max-w-2xl mx-auto">
            Contact us today to learn more about {service.title} and how we can help your business.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/#contact"
              className="inline-flex items-center bg-primary text-white px-8 py-4 rounded-lg font-bold hover:bg-primary-600 transition-all shadow-lg"
            >
              <FaEnvelope className="mr-2" />
              Contact Us
            </Link>
            <Link
              href="/#services"
              className="inline-flex items-center bg-white text-primary-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-all shadow-lg"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* JSON-LD Schema for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: service.title,
            description: service.shortDescription,
            provider: {
              '@type': 'Organization',
              name: 'D P System',
              url: 'https://dpsystem.in',
            },
            areaServed: 'India',
            ...(service.pricing?.amount && {
              offers: {
                '@type': 'Offer',
                price: service.pricing.amount,
                priceCurrency: 'INR',
              },
            }),
          }),
        }}
      />
    </main>
  );
}

