// Product Detail Page for D P System
// Dynamic route for individual product pages with SSG and SEO optimization

import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { client } from '@/lib/sanity.client';
import { urlFor } from '@/lib/sanity.image';
import { Product } from '@/types';
import * as Icons from 'react-icons/fa';
import { 
  FaCheckCircle, 
  FaArrowLeft, 
  FaPhone, 
  FaEnvelope,
  FaShieldAlt,
  FaBox,
  FaTags
} from 'react-icons/fa';

// ============================================
// GROQ QUERIES
// ============================================

const PRODUCT_QUERY = `*[_type == "product" && slug.current == $slug][0] {
  _id,
  _createdAt,
  _updatedAt,
  title,
  slug,
  description,
  fullDescription,
  category,
  subCategory,
  icon,
  mainImage,
  gallery,
  features,
  specifications,
  benefits,
  useCases,
  includedItems,
  pricing,
  priceRange,
  availability,
  warranty,
  body,
  relatedProducts[]->{
    _id,
    title,
    slug,
    description,
    mainImage,
    icon,
    priceRange
  },
  featured,
  order,
  seo
}`;

const ALL_PRODUCT_SLUGS_QUERY = `*[_type == "product"] {
  "slug": slug.current
}`;

// ============================================
// STATIC PARAMS GENERATION (SSG)
// ============================================

// Allow dynamic params for on-demand generation
export const dynamicParams = true;

export async function generateStaticParams() {
  try {
    const products = await client.fetch<{ slug: string }[]>(ALL_PRODUCT_SLUGS_QUERY);
    
    // Only return params if we have products in Sanity
    if (products && products.length > 0) {
      return products.map((product) => ({
        slug: product.slug,
      }));
    }
    
    // If no products in Sanity yet, return empty array to skip static generation
    // Pages will be generated on-demand instead
    return [];
  } catch (error) {
    console.error('Error fetching products for static params:', error);
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
    const product = await client.fetch<Product>(PRODUCT_QUERY, { slug: params.slug });

    if (!product) {
      return {
        title: 'Product Not Found',
      };
    }

    const seoTitle = product.seo?.metaTitle || `${product.title} | D P System`;
    const seoDescription = product.seo?.metaDescription || product.description;
    const seoKeywords = product.seo?.keywords?.join(', ') || '';
    
    // Generate OG image URL with proper type handling
    const ogImage = product.seo?.ogImage 
      ? urlFor(product.seo.ogImage as any).width(1200).height(630).url()
      : product.mainImage
      ? urlFor(product.mainImage as any).width(1200).height(630).url()
      : '/dpsystem-logo.png';

    return {
      title: seoTitle,
      description: seoDescription,
      keywords: seoKeywords,
      openGraph: {
        title: seoTitle,
        description: seoDescription,
        type: 'website', // Changed from 'product' to 'website' for Next.js compatibility
        url: `https://dpsystem.in/products/${params.slug}`,
        images: [
          {
            url: ogImage,
            width: 1200,
            height: 630,
            alt: product.title,
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
    console.error('Error generating metadata for product:', error);
    return {
      title: 'Product | D P System',
      description: 'IT Hardware and Products in Rajkot',
    };
  }
}

// ============================================
// PRODUCT DETAIL PAGE COMPONENT
// ============================================

export default async function ProductDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const product = await client.fetch<Product>(PRODUCT_QUERY, { slug: params.slug });

  // Return 404 if product not found
  if (!product) {
    notFound();
  }

  // Get icon component dynamically
  const IconComponent = (Icons as any)[product.icon] || Icons.FaBox;

  // Availability badge styling
  const getAvailabilityBadge = (status?: string) => {
    switch (status) {
      case 'in-stock':
        return <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold">In Stock</span>;
      case 'made-to-order':
        return <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">Made to Order</span>;
      case 'pre-order':
        return <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm font-semibold">Pre-Order</span>;
      case 'out-of-stock':
        return <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-semibold">Out of Stock</span>;
      case 'contact':
        return <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-semibold">Contact Us</span>;
      default:
        return null;
    }
  };

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <div className="flex items-center text-sm text-accent-600 mb-6">
            <Link href="/" className="hover:text-primary">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/#products" className="hover:text-primary">Products</Link>
            <span className="mx-2">/</span>
            <span className="text-secondary-900 font-semibold">{product.title}</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left - Images */}
            <div className="space-y-4">
              {/* Main Image */}
              <div className="relative h-96 lg:h-[600px] rounded-2xl overflow-hidden bg-gray-100">
                <Image
                  src={urlFor(product.mainImage as any).width(800).height(800).url()}
                  alt={product.title}
                  fill
                  className="object-contain p-8"
                  priority
                />
              </div>

              {/* Gallery Thumbnails */}
              {product.gallery && product.gallery.length > 0 && (
                <div className="grid grid-cols-4 gap-4">
                  {product.gallery.slice(0, 4).map((image, index) => (
                    <div key={index} className="relative h-24 rounded-lg overflow-hidden bg-gray-100 cursor-pointer hover:ring-2 hover:ring-primary transition">
                      <Image
                        src={urlFor(image as any).width(200).height(200).url()}
                        alt={`${product.title} - Image ${index + 1}`}
                        fill
                        className="object-contain p-2"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Right - Product Info */}
            <div className="space-y-6">
              {/* Category & Icon */}
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-primary-50 rounded-xl flex items-center justify-center">
                  <IconComponent className="text-3xl text-primary" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-primary-600 uppercase tracking-wide">
                    {product.category}
                  </div>
                  {product.subCategory && (
                    <div className="text-xs text-accent-600">{product.subCategory}</div>
                  )}
                </div>
              </div>

              {/* Title */}
              <h1 className="text-4xl md:text-5xl font-extrabold text-secondary-900">
                {product.title}
              </h1>

              {/* Availability */}
              {product.availability && (
                <div className="flex items-center gap-3">
                  {getAvailabilityBadge(product.availability)}
                  {product.warranty && (
                    <div className="flex items-center text-sm text-accent-600">
                      <FaShieldAlt className="mr-2 text-green-500" />
                      {product.warranty}
                    </div>
                  )}
                </div>
              )}

              {/* Price */}
              {(product.pricing?.amount || product.priceRange) && (
                <div className="bg-primary-50 rounded-xl p-6">
                  <div className="text-3xl md:text-4xl font-extrabold text-primary-600 mb-2">
                    {product.pricing?.amount || product.priceRange}
                  </div>
                  {product.pricing?.type && (
                    <div className="text-sm text-accent-600 capitalize">
                      {product.pricing.type === 'quote' ? 'Contact for Quote' : product.pricing.type}
                    </div>
                  )}
                  {product.pricing?.note && (
                    <p className="text-sm text-accent-600 mt-2">{product.pricing.note}</p>
                  )}
                </div>
              )}

              {/* Description */}
              <div>
                <p className="text-lg text-accent-700 leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Key Features */}
              {product.features && product.features.length > 0 && (
                <div>
                  <h3 className="text-xl font-bold text-secondary-900 mb-3">
                    Key Features
                  </h3>
                  <ul className="space-y-2">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                        <span className="text-accent-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 pt-4">
                <Link
                  href="/#contact"
                  className="inline-flex items-center bg-primary text-white px-8 py-4 rounded-lg font-bold hover:bg-primary-600 transition-all shadow-lg flex-1 sm:flex-none justify-center"
                >
                  <FaEnvelope className="mr-2" />
                  Request Quote
                </Link>
                <Link
                  href="tel:+919876543210"
                  className="inline-flex items-center bg-secondary-900 text-white px-8 py-4 rounded-lg font-bold hover:bg-secondary-800 transition-all flex-1 sm:flex-none justify-center"
                >
                  <FaPhone className="mr-2" />
                  Call Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Information */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Full Description */}
              {product.fullDescription && (
                <div className="bg-white rounded-2xl p-8 shadow-sm">
                  <h2 className="text-3xl font-bold text-secondary-900 mb-4">
                    Product Description
                  </h2>
                  <p className="text-lg text-accent-600 leading-relaxed whitespace-pre-line">
                    {product.fullDescription}
                  </p>
                </div>
              )}

              {/* Specifications */}
              {product.specifications && product.specifications.length > 0 && (
                <div className="bg-white rounded-2xl p-8 shadow-sm">
                  <h2 className="text-3xl font-bold text-secondary-900 mb-6">
                    Technical Specifications
                  </h2>
                  <div className="space-y-4">
                    {product.specifications.map((spec, index) => (
                      <div 
                        key={index} 
                        className="flex flex-col sm:flex-row sm:items-center border-b border-gray-200 last:border-0 pb-4 last:pb-0"
                      >
                        <div className="sm:w-1/3 font-semibold text-secondary-900 mb-1 sm:mb-0">
                          {spec.label}
                        </div>
                        <div className="sm:w-2/3 text-accent-600">
                          {spec.value}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Benefits */}
              {product.benefits && product.benefits.length > 0 && (
                <div className="bg-white rounded-2xl p-8 shadow-sm">
                  <h2 className="text-3xl font-bold text-secondary-900 mb-6">
                    Benefits
                  </h2>
                  <ul className="space-y-3">
                    {product.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <FaCheckCircle className="text-primary-600 mt-1 mr-3 flex-shrink-0" />
                        <span className="text-accent-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Use Cases */}
              {product.useCases && product.useCases.length > 0 && (
                <div className="bg-white rounded-2xl p-8 shadow-sm">
                  <h2 className="text-3xl font-bold text-secondary-900 mb-6">
                    Perfect For
                  </h2>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {product.useCases.map((useCase, index) => (
                      <div key={index} className="flex items-center bg-primary-50 rounded-lg p-4">
                        <FaCheckCircle className="text-primary-600 mr-3" />
                        <span className="text-secondary-900 font-medium">{useCase}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* What's Included */}
                {product.includedItems && product.includedItems.length > 0 && (
                  <div className="bg-white rounded-2xl p-6 shadow-sm">
                    <h3 className="text-xl font-bold text-secondary-900 mb-4 flex items-center">
                      <FaBox className="mr-2 text-primary" />
                      What's Included
                    </h3>
                    <ul className="space-y-2">
                      {product.includedItems.map((item, index) => (
                        <li key={index} className="flex items-start text-sm">
                          <FaCheckCircle className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                          <span className="text-accent-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Contact Card */}
                <div className="bg-gradient-to-br from-secondary-900 to-secondary-800 text-white rounded-2xl p-6">
                  <h3 className="text-xl font-bold mb-4">
                    Need More Info?
                  </h3>
                  <p className="text-white/80 mb-6 text-sm">
                    Our experts are here to help you choose the right product.
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

                {/* Quick Action */}
                <Link
                  href="/#contact"
                  className="block w-full bg-primary text-white text-center px-6 py-4 rounded-xl font-bold hover:bg-primary-600 transition-all shadow-lg"
                >
                  Get Quote Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {product.relatedProducts && product.relatedProducts.length > 0 && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-8 text-center">
              Related Products
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {product.relatedProducts.map((relatedProduct) => {
                const RelatedIcon = (Icons as any)[relatedProduct.icon] || Icons.FaBox;
                return (
                  <Link
                    key={relatedProduct._id}
                    href={`/products/${relatedProduct.slug.current}`}
                    className="group bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all"
                  >
                    <div className="mb-4">
                      <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all">
                        <RelatedIcon className="text-2xl text-primary group-hover:text-white transition-colors" />
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-secondary-900 mb-2 group-hover:text-primary transition-colors">
                      {relatedProduct.title}
                    </h3>
                    <p className="text-sm text-accent-600 mb-3 line-clamp-2">
                      {relatedProduct.description}
                    </p>
                    {relatedProduct.priceRange && (
                      <div className="text-primary-600 font-semibold">
                        {relatedProduct.priceRange}
                      </div>
                    )}
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary-50 to-primary-100 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
            Interested in {product.title}?
          </h2>
          <p className="text-lg text-accent-700 mb-8 max-w-2xl mx-auto">
            Contact us today for pricing, availability, and expert recommendations.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/#contact"
              className="inline-flex items-center bg-primary text-white px-8 py-4 rounded-lg font-bold hover:bg-primary-600 transition-all shadow-lg"
            >
              <FaEnvelope className="mr-2" />
              Request Quote
            </Link>
            <Link
              href="/#products"
              className="inline-flex items-center bg-white text-primary-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-all shadow-lg"
            >
              <FaTags className="mr-2" />
              View All Products
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
            '@type': 'Product',
            name: product.title,
            description: product.description,
            image: product.mainImage ? urlFor(product.mainImage as any).url() : undefined,
            category: product.category,
            brand: {
              '@type': 'Brand',
              name: 'D P System',
            },
            ...(product.pricing?.amount && {
              offers: {
                '@type': 'Offer',
                price: product.pricing.amount,
                priceCurrency: product.pricing.currency || 'INR',
                availability: product.availability === 'in-stock' 
                  ? 'https://schema.org/InStock'
                  : 'https://schema.org/PreOrder',
              },
            }),
          }),
        }}
      />
    </main>
  );
}

