'use client';

// Why Choose Us Section for D P System
// Highlights key differentiators and competitive advantages
// Migrated to Next.js 14 with TypeScript

import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaAward, 
  FaShieldAlt, 
  FaTag, 
  FaUserTie, 
  FaHeadset, 
  FaCog, 
  FaMapMarkerAlt 
} from 'react-icons/fa';

const WhyChooseUs = () => {
  // Features data
  const features = [
    {
      id: 1,
      icon: FaAward,
      title: '20+ Years Excellence',
      description: 'Serving Rajkot with quality IT hardware and services since 2005'
    },
    {
      id: 2,
      icon: FaShieldAlt,
      title: 'Authorized Dealer',
      description: 'Official dealer for top brands like Intel, AMD, NVIDIA, Dell, HP, and more'
    },
    {
      id: 3,
      icon: FaTag,
      title: 'Competitive Pricing',
      description: 'Best value for money with transparent pricing and no hidden costs'
    },
    {
      id: 4,
      icon: FaUserTie,
      title: 'Expert Technical Team',
      description: 'Skilled professionals with deep knowledge of IT hardware and software'
    },
    {
      id: 5,
      icon: FaHeadset,
      title: 'After-Sales Support',
      description: 'Comprehensive support including troubleshooting, repairs, and warranty management'
    },
    {
      id: 6,
      icon: FaCog,
      title: 'Custom Solutions',
      description: 'Tailored IT solutions designed specifically for your needs and budget'
    },
    {
      id: 7,
      icon: FaMapMarkerAlt,
      title: 'Local Service',
      description: 'Convenient local service in Rajkot with quick response times'
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="why-choose-us" className="section bg-gradient-to-b from-white to-gray-50">
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
            Why Choose <span className="text-primary">D P System</span>?
          </h2>
          <p className="text-lg text-accent-700 max-w-2xl mx-auto">
            Your trusted IT partner in Rajkot with unmatched expertise and customer service
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((feature) => {
            const IconComponent = feature.icon;
            
            return (
              <motion.div
                key={feature.id}
                variants={itemVariants}
                className="group bg-white p-6 rounded-xl border border-gray-200 hover:border-primary hover:shadow-xl transition-all duration-300"
                whileHover={{ y: -8, scale: 1.02 }}
              >
                {/* Icon */}
                <div className="mb-4">
                  <div className="w-14 h-14 bg-primary-50 rounded-lg flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <IconComponent className="text-2xl text-primary group-hover:text-white transition-colors" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-secondary-900 mb-2 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-accent-600">
                  {feature.description}
                </p>

                {/* Decorative element */}
                <div className="mt-4 w-12 h-1 bg-gray-200 group-hover:bg-primary transition-colors duration-300"></div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom Stats */}
        <motion.div
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {[
            { number: '20+', label: 'Years in Business' },
            { number: '1000+', label: 'Happy Customers' },
            { number: '50+', label: 'Products Range' },
            { number: '24/7', label: 'Support Available' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center p-4"
              whileHover={{ scale: 1.05 }}
            >
              <p className="text-4xl font-extrabold text-primary mb-2">{stat.number}</p>
              <p className="text-sm text-accent-600 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

