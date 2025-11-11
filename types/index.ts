// TypeScript Type Definitions
// Shared types across the application

import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import { Image as SanityImageType } from 'sanity';

// ============================================
// SANITY IMAGE TYPES
// ============================================

export interface SanityAsset extends SanityImageType {
  _type: 'image';
  alt?: string;
}

// ============================================
// SANITY CONTENT TYPES
// ============================================

// ============================================
// SERVICE TYPES - Enhanced
// ============================================

export interface ServiceKeyFeature {
  feature: string;
  description?: string;
}

export interface ServiceProcess {
  step: string;
  title: string;
  description?: string;
}

export interface ServicePricing {
  type?: 'fixed' | 'starting' | 'hourly' | 'custom';
  amount?: string;
  note?: string;
}

export interface Service {
  _id: string;
  _createdAt?: string;
  _updatedAt?: string;
  title: string;
  slug: {
    current: string;
  };
  shortDescription: string;
  fullDescription?: string;
  category?: string;
  icon: string;
  mainImage?: SanityImageSource;
  gallery?: SanityImageSource[];
  keyFeatures?: ServiceKeyFeature[];
  highlights?: string[];
  benefits?: string[];
  process?: ServiceProcess[];
  pricing?: ServicePricing;
  deliveryTime?: string;
  body?: any[]; // Portable Text
  featured: boolean;
  order: number;
  seo?: {
    metaTitle?: string;
    metaDescription?: string;
    keywords?: string[];
    ogImage?: SanityImageSource;
  };
}

// ============================================
// PRODUCT TYPES - Enhanced
// ============================================

export interface ProductSpecification {
  label: string;
  value: string;
}

export interface ProductPricing {
  type?: 'fixed' | 'starting' | 'range' | 'quote';
  amount?: string;
  currency?: 'INR' | 'USD';
  note?: string;
}

export interface Product {
  _id: string;
  _createdAt?: string;
  _updatedAt?: string;
  title: string;
  slug: {
    current: string;
  };
  description: string;
  fullDescription?: string;
  category: string;
  subCategory?: string;
  icon: string;
  mainImage: SanityImageSource;
  gallery?: SanityImageSource[];
  features?: string[];
  specifications?: ProductSpecification[];
  benefits?: string[];
  useCases?: string[];
  includedItems?: string[];
  pricing?: ProductPricing;
  priceRange?: string; // Legacy field
  availability?: 'in-stock' | 'made-to-order' | 'pre-order' | 'out-of-stock' | 'contact';
  warranty?: string;
  body?: any[]; // Portable Text
  relatedProducts?: Product[];
  featured: boolean;
  order?: number;
  seo?: {
    metaTitle?: string;
    metaDescription?: string;
    keywords?: string[];
    ogImage?: SanityImageSource;
  };
}

export interface Testimonial {
  _id: string;
  customerName: string;
  customerRole?: string;
  company?: string;
  location?: string;
  customerImage?: SanityImageSource;
  testimonial: string;
  rating: number;
  date?: string;
  featured: boolean;
  order?: number;
}

export interface Brand {
  _id: string;
  name: string;
  logo: SanityImageSource;
  description?: string;
  website?: string;
  category?: string;
  featured: boolean;
  order?: number;
}

export interface BlogPost {
  _id: string;
  _updatedAt?: string;
  title: string;
  slug: {
    current: string;
  };
  excerpt: string;
  mainImage: SanityImageSource;
  body?: any[]; // Portable Text
  author: string;
  publishedAt: string;
  category: string;
  tags?: string[];
  featured?: boolean;
  seo?: {
    metaTitle?: string;
    metaDescription?: string;
    keywords?: string[];
  };
}

export interface Settings {
  siteName: string;
  tagline: string;
  description: string;
  logo?: SanityImageSource;
  contact: {
    address: string;
    city: string;
    state: string;
    pincode: string;
    phone: string;
    whatsapp: string;
    email: string;
    openingHours: string;
  };
  social: {
    facebook?: string;
    instagram?: string;
    twitter?: string;
    linkedin?: string;
    youtube?: string;
  };
  location: {
    latitude: number;
    longitude: number;
  };
  businessInfo: {
    yearsInBusiness: string;
    totalCustomers: string;
    authorizedDealer: boolean;
  };
}

// ============================================
// COMPONENT PROP TYPES
// ============================================

export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

export interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

// ============================================
// FORM TYPES
// ============================================

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

export interface ContactFormErrors {
  name?: string;
  email?: string;
  phone?: string;
  service?: string;
  message?: string;
}

// ============================================
// LEAD TYPES (Sanity CMS)
// ============================================

export interface Lead {
  _id: string;
  _createdAt?: string;
  _updatedAt?: string;
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  source: string;
  status: 'new' | 'viewed' | 'contacted' | 'discussion' | 'converted' | 'lost' | 'followup';
  priority: 'high' | 'medium' | 'low';
  notes?: string;
  followUpDate?: string;
  assignedTo?: string;
  submittedAt: string;
  ipAddress?: string;
  userAgent?: string;
}

// ============================================
// SEO TYPES
// ============================================

export interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  noindex?: boolean;
}

