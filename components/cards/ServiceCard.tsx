'use client';

// Enhanced Service Card Component for D P System
// Modern UI/UX with beautiful animations and hover effects

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Service } from '@/types';
import * as Icons from 'react-icons/fa';
import { FaArrowRight, FaCheckCircle } from 'react-icons/fa';

// ============================================
// PROPS INTERFACE
// ============================================

interface ServiceCardProps {
  service: Service;
  index?: number;
}

// ============================================
// SERVICE CARD COMPONENT
// ============================================

const ServiceCard: React.FC<ServiceCardProps> = ({ service, index = 0 }) => {
  // Get icon component dynamically
  const IconComponent = (Icons as any)[service.icon] || Icons.FaTools;

  return (
    <Link href={`/services/${service.slug.current}`}>
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{
          type: 'spring',
          damping: 20,
          stiffness: 100,
          delay: index * 0.1,
        }}
        whileHover={{ 
          y: -12,
          scale: 1.02,
          transition: {
            type: 'spring',
            stiffness: 300,
            damping: 20
          }
        }}
        className="group relative overflow-hidden rounded-2xl border-2 border-gray-200 bg-white p-6 md:p-8 hover:border-primary hover:shadow-2xl transition-all duration-500 cursor-pointer h-full flex flex-col"
      >
        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-primary/5 to-primary/10 rounded-full blur-3xl group-hover:from-primary/10 group-hover:to-primary/20 transition-all duration-500 -z-10" />
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-secondary/5 to-secondary/10 rounded-full blur-3xl group-hover:from-secondary/10 group-hover:to-secondary/20 transition-all duration-500 -z-10" />

        {/* Order Badge */}
        <motion.div 
          className="absolute top-4 right-4"
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.6 }}
        >
          <span className="w-10 h-10 bg-gradient-to-br from-gray-100 to-gray-200 text-gray-600 rounded-full flex items-center justify-center text-sm font-bold group-hover:from-primary group-hover:to-primary-600 group-hover:text-white transition-all duration-300 shadow-sm">
            {service.order}
          </span>
        </motion.div>

        {/* Icon Container */}
        <motion.div 
          className="mb-6"
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <div className="relative">
            {/* Icon Background Glow */}
            <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-xl group-hover:bg-primary/40 transition-all duration-300" />
            
            {/* Icon */}
            <div className="relative w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl flex items-center justify-center group-hover:from-primary group-hover:to-primary-600 transition-all duration-300 shadow-lg">
              <IconComponent className="text-3xl md:text-4xl text-primary group-hover:text-white transition-colors duration-300" />
            </div>
          </div>
        </motion.div>

        {/* Category Badge */}
        {service.category && (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 + 0.2 }}
            className="mb-3"
          >
            <span className="inline-block text-xs font-bold text-primary-700 bg-primary-50 px-3 py-1.5 rounded-full uppercase tracking-wide group-hover:bg-primary-100 transition-colors">
              {service.category}
            </span>
          </motion.div>
        )}

        {/* Title */}
        <motion.h3 
          className="text-xl md:text-2xl font-bold text-secondary-900 mb-3 group-hover:text-primary transition-colors duration-300 leading-tight"
          whileHover={{ x: 5 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          {service.title}
        </motion.h3>

        {/* Description */}
        <p className="text-sm md:text-base text-accent-600 mb-5 line-clamp-3 flex-grow leading-relaxed">
          {service.shortDescription}
        </p>

        {/* Highlights List */}
        {service.highlights && service.highlights.length > 0 && (
          <motion.ul 
            className="space-y-2 mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 + 0.3 }}
          >
            {service.highlights.slice(0, 3).map((highlight, idx) => (
              <motion.li 
                key={idx} 
                className="flex items-start text-xs md:text-sm text-accent-700"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.3 + idx * 0.05 }}
              >
                <FaCheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                <span>{highlight}</span>
              </motion.li>
            ))}
          </motion.ul>
        )}

        {/* Pricing section removed as per user requirement - cleaner UI focus on service details */}

        {/* View Details Link with Animation */}
        <motion.div 
          className="flex items-center justify-between text-primary font-bold text-sm md:text-base group-hover:text-primary-600 transition-colors mt-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 + 0.5 }}
        >
          <span>View Details</span>
          <motion.div
            initial={{ x: 0 }}
            whileHover={{ x: 5 }}
            transition={{ type: 'spring', stiffness: 400 }}
          >
            <FaArrowRight className="w-5 h-5" />
          </motion.div>
        </motion.div>

        {/* Hover Border Glow Effect */}
        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <div className="absolute inset-0 rounded-2xl border-2 border-primary animate-pulse" />
        </div>
      </motion.div>
    </Link>
  );
};

export default ServiceCard;

