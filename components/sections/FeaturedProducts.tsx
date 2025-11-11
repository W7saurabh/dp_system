'use client';

// Featured Products Section for D P System
// Displays ALL 9 product categories with static data
// Fast loading with beautiful animations - No Sanity fetch needed on landing page

import React from 'react';
import { motion } from 'framer-motion';
import { staticProducts } from '@/data/staticProducts';
import ProductCard from '@/components/cards/ProductCard';

const FeaturedProducts = () => {
  // Use static products data (fast loading!)
  const products = staticProducts;

  // Animation variants for container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  return (
    <section id="products" className="section bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-secondary-900 mb-4">
            Featured <span className="text-primary">Products</span>
          </h2>
          <p className="text-lg text-accent-700 max-w-2xl mx-auto">
            Explore our wide range of IT hardware solutions tailored for businesses and individuals
          </p>
        </motion.div>

        {/* Products Grid - ALL 9 Products (Static Data - Fast!) */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {products.map((product, index) => (
            <ProductCard 
              key={product.id} 
              product={{
                _id: product.id.toString(),
                title: product.title,
                slug: { current: product.slug },
                description: product.description,
                icon: product.icon,
                category: product.category,
                features: product.features,
                priceRange: product.priceRange,
                availability: product.availability as any, // Type assertion for static data compatibility
                warranty: product.warranty,
                mainImage: null as any, // Will be loaded from Sanity on detail page
                featured: true
              }} 
              imageUrl={product.imageUrl} // High-quality product image from static data
              index={index}
            />
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <a
            href="#contact"
            className="bg-primary text-white px-8 py-4 rounded-lg font-bold hover:bg-primary-600 transition-all duration-300 shadow-lg hover:shadow-primary inline-flex items-center text-lg"
          >
            Get a Quote
            <svg className="w-6 h-6 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProducts;

