// GROQ Queries for Sanity CMS
// Centralized queries for fetching content

// ============================================
// SERVICES QUERIES
// ============================================

export const allServicesQuery = `*[_type == "service"] | order(order asc) {
  _id,
  _createdAt,
  _updatedAt,
  title,
  slug,
  shortDescription,
  description,
  icon,
  order,
  highlights,
  image,
  seoTitle,
  seoDescription,
  featured
}`;

export const featuredServicesQuery = `*[_type == "service" && featured == true] | order(order asc) {
  _id,
  _createdAt,
  title,
  slug,
  shortDescription,
  icon,
  order,
  highlights
}`;

export const serviceBySlugQuery = `*[_type == "service" && slug.current == $slug][0] {
  _id,
  _createdAt,
  _updatedAt,
  title,
  slug,
  shortDescription,
  description,
  body,
  icon,
  order,
  highlights,
  image,
  seoTitle,
  seoDescription
}`;

// ============================================
// PRODUCTS QUERIES
// ============================================

export const allProductsQuery = `*[_type == "product"] | order(_createdAt desc) {
  _id,
  _createdAt,
  _updatedAt,
  title,
  name,
  slug,
  description,
  image,
  features,
  category,
  icon,
  priceRange,
  featured
}`;

export const featuredProductsQuery = `*[_type == "product" && featured == true] | order(_createdAt desc) {
  _id,
  _createdAt,
  title,
  name,
  slug,
  description,
  image,
  features,
  category,
  icon,
  priceRange
}`;

export const productBySlugQuery = `*[_type == "product" && slug.current == $slug][0] {
  _id,
  _createdAt,
  _updatedAt,
  title,
  name,
  slug,
  description,
  image,
  features,
  category,
  icon,
  priceRange
}`;

// ============================================
// TESTIMONIALS QUERIES
// ============================================

export const allTestimonialsQuery = `*[_type == "testimonial"] | order(_createdAt desc) {
  _id,
  _createdAt,
  _updatedAt,
  customerName,
  customerRole,
  company,
  testimonial,
  review,
  rating,
  date,
  location,
  avatar,
  featured
}`;

export const featuredTestimonialsQuery = `*[_type == "testimonial" && featured == true] | order(_createdAt desc) {
  _id,
  _createdAt,
  customerName,
  customerRole,
  company,
  testimonial,
  review,
  rating,
  date,
  location,
  avatar
}`;

// ============================================
// BRANDS QUERIES
// ============================================

export const allBrandsQuery = `*[_type == "brand"] | order(name asc) {
  _id,
  _createdAt,
  _updatedAt,
  name,
  logo,
  url,
  featured
}`;

export const featuredBrandsQuery = `*[_type == "brand" && featured == true] | order(name asc) {
  _id,
  _createdAt,
  name,
  logo,
  url
}`;

// ============================================
// BLOG POSTS QUERIES
// ============================================

export const allBlogPostsQuery = `*[_type == "post"] | order(publishedAt desc) {
  _id,
  _createdAt,
  _updatedAt,
  title,
  slug,
  excerpt,
  mainImage,
  publishedAt,
  author,
  categories
}`;

export const blogPostBySlugQuery = `*[_type == "post" && slug.current == $slug][0] {
  _id,
  _createdAt,
  _updatedAt,
  title,
  slug,
  excerpt,
  body,
  mainImage,
  publishedAt,
  author,
  categories
}`;

// ============================================
// SITE SETTINGS QUERY
// ============================================

export const siteSettingsQuery = `*[_type == "settings"][0] {
  _id,
  _createdAt,
  _updatedAt,
  title,
  description,
  address,
  phone,
  email,
  openHours,
  logo
}`;

// ============================================
// SITEMAP QUERIES
// ============================================

export const allServiceSlugsQuery = `*[_type == "service"] {
  "slug": slug.current,
  _updatedAt
}`;

export const allBlogPostSlugsQuery = `*[_type == "post"] {
  "slug": slug.current,
  _updatedAt
}`;
