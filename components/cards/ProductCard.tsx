'use client';

// Enhanced Product Card Component for D P System
// Modern UI/UX with beautiful animations and hover effects
// Displays static product data with high-quality images

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Product } from '@/types';
import * as Icons from 'react-icons/fa';
import { FaArrowRight, FaCheckCircle, FaShieldAlt } from 'react-icons/fa';

// ============================================
// PROPS INTERFACE
// ============================================

interface ProductCardProps {
  product: Product;
  index?: number;
  imageUrl?: string; // NEW: Optional external image URL for static data
}

// ============================================
// PRODUCT CARD COMPONENT
// ============================================

const ProductCard: React.FC<ProductCardProps> = ({ product, index = 0, imageUrl }) => {
  // Get icon component dynamically
  const IconComponent = (Icons as any)[product.icon] || Icons.FaBox;

  return (
    // Navigation disabled until product detail pages are ready
    <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{
          type: 'spring',
          damping: 18,    // Slightly reduced for faster settle
          stiffness: 140, // Increased for snappier animation
          delay: index * 0.06, // Reduced from 0.1 for faster stagger
        }}
        whileHover={{ 
          y: -8,
          transition: {
            type: 'spring',
            stiffness: 300,
            damping: 20
          }
        }}
        className="group relative overflow-hidden rounded-2xl border-2 border-gray-200 bg-white hover:border-primary hover:shadow-2xl transition-all duration-500 cursor-pointer h-full flex flex-col"
      >
        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-primary/5 via-primary/5 to-transparent rounded-full blur-3xl group-hover:from-primary/15 group-hover:via-primary/10 transition-all duration-500 -z-10" />

        {/* Image Section with Advanced Animations */}
        <div className="relative h-56 md:h-64 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
          {/* High-Quality Product Image with Multiple Animation Layers */}
          {imageUrl ? (
            <div className="relative w-full h-full">
              {/* Main Image with Smooth Zoom Animation */}
              <motion.div
                whileHover={{ scale: 1.08 }}
                transition={{ 
                  type: "spring", 
                  stiffness: 300, // Increased for faster response
                  damping: 18,    // Reduced for snappier feel
                  duration: 0.36  // 40% faster: 0.6 -> 0.36
                }}
                className="relative w-full h-full"
              >
                <Image
                  src={imageUrl}
                  alt={product.title}
                  fill
                  className="object-cover transition-all duration-500 group-hover:brightness-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={index < 3} // Prioritize first 3 images for LCP optimization
                />
                
                {/* Multi-Layer Gradient Overlay for Depth */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/5 to-transparent"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.24 }} // 40% faster: 0.4 -> 0.24
                />
                
                {/* Animated Shine Effect on Hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  initial={{ x: '-100%', opacity: 0 }}
                  whileHover={{ x: '100%', opacity: 1 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }} // Faster: 0.8 -> 0.5
                />
              </motion.div>
              
              {/* Corner Border Animation */}
              <motion.div
                className="absolute top-0 left-0 w-12 h-12 border-t-4 border-l-4 border-primary opacity-0 group-hover:opacity-100"
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 0 }}
                whileHover={{ scale: 1, opacity: 100 }}
                transition={{ duration: 0.2 }} // Faster: 0.3 -> 0.2
              />
              <motion.div
                className="absolute bottom-0 right-0 w-12 h-12 border-b-4 border-r-4 border-primary opacity-0 group-hover:opacity-100"
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 0 }}
                whileHover={{ scale: 1, opacity: 100 }}
                transition={{ duration: 0.2 }} // Faster: 0.3 -> 0.2
              />
            </div>
          ) : (
            // Fallback Icon if no image URL provided
            <div className="flex items-center justify-center h-full">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <IconComponent className="text-6xl md:text-7xl text-gray-300" />
              </motion.div>
            </div>
          )}

          {/* Floating Icon Badge Overlay with Enhanced Animation */}
          <motion.div 
            className="absolute bottom-4 left-4 z-10"
            initial={{ scale: 0, opacity: 0, y: 20 }}
            whileInView={{ scale: 1, opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ 
              delay: index * 0.1 + 0.2, 
              type: "spring", 
              stiffness: 200,
              damping: 15
            }}
          >
            <motion.div 
              className="w-12 h-12 md:w-14 md:h-14 bg-white/95 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg group-hover:bg-primary transition-all duration-300"
              whileHover={{ 
                scale: 1.15, 
                rotate: [0, -10, 10, -10, 0],
                transition: { duration: 0.5 }
              }}
            >
              <IconComponent className="text-2xl md:text-3xl text-primary group-hover:text-white transition-colors duration-300" />
            </motion.div>
          </motion.div>
        </div>

        {/* Content Section */}
        <div className="p-6 flex flex-col flex-grow">
          {/* Category Badge */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 + 0.3 }}
            className="mb-3"
          >
            <span className="inline-block text-xs font-bold text-primary-700 bg-primary-50 px-3 py-1.5 rounded-full uppercase tracking-wide group-hover:bg-primary-100 transition-colors">
              {product.category}
            </span>
          </motion.div>

          {/* Product Title */}
          <motion.h3 
            className="text-xl md:text-2xl font-bold text-secondary-900 mb-3 group-hover:text-primary transition-colors duration-300 leading-tight"
            whileHover={{ x: 3 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            {product.title}
          </motion.h3>

          {/* Product Description */}
          <p className="text-sm md:text-base text-accent-600 mb-4 line-clamp-2 flex-grow leading-relaxed">
            {product.description}
          </p>

          {/* Features List (Top 3 Features) */}
          {product.features && product.features.length > 0 && (
            <motion.ul 
              className="space-y-2 mb-5"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + 0.4 }}
            >
              {product.features.slice(0, 3).map((feature, idx) => (
                <motion.li 
                  key={idx} 
                  className="flex items-start text-xs md:text-sm text-accent-700"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.4 + idx * 0.05 }}
                >
                  <FaCheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </motion.li>
              ))}
            </motion.ul>
          )}

          {/* Warranty Badge (Keep this, it's valuable info) */}
          {product.warranty && (
            <motion.div 
              className="flex items-center text-xs text-green-600 bg-green-50 px-3 py-2 rounded-lg mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + 0.5 }}
            >
              <FaShieldAlt className="mr-2" />
              <span className="font-semibold">{product.warranty}</span>
            </motion.div>
          )}

          {/* View Details Button - REMOVED as per user request (detail pages coming soon) */}
          {/* Price or availability info can be added here when detail pages are ready */}
        </div>

        {/* Hover Border Glow Effect */}
        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/10 via-transparent to-primary/10" />
        </div>
      </motion.div>
  );
};

export default ProductCard;
