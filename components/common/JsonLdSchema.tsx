// JSON-LD Structured Data Component
// LocalBusiness schema for better SEO

import React from 'react';

interface JsonLdSchemaProps {
  siteName?: string;
  description?: string;
  address?: string;
  city?: string;
  state?: string;
  postalCode?: string;
  phone?: string;
  email?: string;
  openingHours?: string;
  latitude?: number;
  longitude?: number;
  socialLinks?: {
    facebook?: string;
    instagram?: string;
    twitter?: string;
    linkedin?: string;
    youtube?: string;
  };
}

const JsonLdSchema: React.FC<JsonLdSchemaProps> = ({
  siteName = 'D P System',
  description = 'Leading IT hardware and computer store in Rajkot offering custom PCs, laptops, gaming systems, servers, and professional IT services.',
  address = '[Complete Address]',
  city = 'Rajkot',
  state = 'Gujarat',
  postalCode = '360001',
  phone = '+91-XXXXXXXXXX',
  email = 'contact@dpsystem.com',
  openingHours = 'Mo-Sa 10:00-20:00',
  latitude = 22.3039,
  longitude = 70.8022,
  socialLinks = {
    facebook: 'https://www.facebook.com/dpsystem',
    instagram: 'https://www.instagram.com/dpsystem',
    twitter: 'https://twitter.com/dpsystem',
    linkedin: 'https://www.linkedin.com/company/dpsystem',
    youtube: 'https://www.youtube.com/@dpsystem',
  },
}) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ComputerStore',
    name: siteName,
    image: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://dpsystem.com'}/dpsystem-logo.png`,
    description: description,
    address: {
      '@type': 'PostalAddress',
      streetAddress: address,
      addressLocality: city,
      addressRegion: state,
      postalCode: postalCode,
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: latitude,
      longitude: longitude,
    },
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://dpsystem.com',
    telephone: phone,
    email: email,
    priceRange: '$$',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '10:00',
        closes: '20:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Sunday',
        opens: '00:00',
        closes: '00:00', // Closed
      },
    ],
    sameAs: Object.values(socialLinks).filter(Boolean),
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '150',
      bestRating: '5',
      worstRating: '1',
    },
    founder: {
      '@type': 'Person',
      name: 'D P',
    },
    areaServed: {
      '@type': 'City',
      name: 'Rajkot',
    },
    knowsAbout: [
      'Custom PC Building',
      'Gaming Systems',
      'Business Laptops',
      'IT Hardware',
      'Computer Repair',
      'Server Solutions',
      'Networking Equipment',
      'Printers & Scanners',
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default JsonLdSchema;

