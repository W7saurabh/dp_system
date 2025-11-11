'use client';

// Services Section for D P System  
// Displays ALL 11 professional IT services with static data
// Fast loading with beautiful animations - No Sanity fetch needed on landing page

import React from 'react';
import { motion } from 'framer-motion';
import { staticServices } from '@/data/staticServices';
import ServiceCard from '@/components/cards/ServiceCard';

const Services = () => {
  // Use static services data (fast loading!)
  const services = staticServices;

  // Animation variants for container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2
      }
    }
  };

  return (
    <section id="services" className="section bg-white">
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
            Professional <span className="text-primary">Services</span>
          </h2>
          <p className="text-lg text-accent-700 max-w-2xl mx-auto">
            Comprehensive IT services and support to keep your business running smoothly
          </p>
        </motion.div>

        {/* Services Grid - ALL 11 Services (Static Data - Fast!) */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service, index) => (
            <ServiceCard 
              key={service.id} 
              service={{
                _id: service.id.toString(),
                title: service.title,
                slug: { current: service.slug },
                shortDescription: service.shortDescription,
                icon: service.icon,
                category: service.category,
                order: service.order,
                highlights: service.highlights,
                
                deliveryTime: service.deliveryTime,
                featured: true
              }} 
              index={index}
            />
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-12 text-center bg-gradient-to-r from-primary-50 to-primary-100 rounded-2xl p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="text-2xl font-bold text-secondary-900 mb-3">
            Need Professional IT Support?
          </h3>
          <p className="text-accent-700 mb-6 max-w-2xl mx-auto">
            Our expert team is ready to help you with all your IT hardware and service needs
          </p>
          <a
            href="#contact"
            className="bg-primary text-white px-8 py-4 rounded-lg font-bold hover:bg-primary-600 transition-all duration-300 shadow-lg hover:shadow-primary inline-flex items-center text-lg"
          >
            Contact Us Today
            <svg className="w-6 h-6 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;

