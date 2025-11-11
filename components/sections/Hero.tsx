'use client';

// Hero Section for D P System - Modern Tech-Savvy Design
// Features: Slogan, 20+ Years Brand Highlight, Hero Image with Animations
// Color Scheme: Red, Black, White, Grey
// Fully responsive with modern animations
// Migrated to Next.js 14 with TypeScript

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaArrowRight, FaCheck, FaShieldAlt, FaUsers, FaAward, FaHeadset } from 'react-icons/fa';

const Hero = () => {
  // State for hero image slider
  const [currentSlide, setCurrentSlide] = useState(0);

  // Hero images - Using high-quality tech images from Unsplash
  const heroImages = [
    {
      url: 'https://images.unsplash.com/photo-1587202372634-32705e3bf49c?q=80&w=2000',
      alt: 'Modern Computer Hardware Setup'
    },
    {
      url: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?q=80&w=2000',
      alt: 'Gaming PC with RGB Lighting'
    },
    {
      url: 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?q=80&w=2000',
      alt: 'Professional IT Hardware Solutions'
    }
  ];

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [heroImages.length]);

  // Scroll to section function
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6
        // Using default easing for smooth animation
      }
    }
  };

  // Trust badges
  const trustBadges = [
    { icon: FaAward, text: '20+ Years of Excellence', highlight: true },
    { icon: FaUsers, text: '3000+ Happy Customers' },
    { icon: FaShieldAlt, text: 'Authorized Dealer' },
    { icon: FaHeadset, text: 'Premium After-Sales Support' }
  ];

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center pt-24 md:pt-28 pb-16 bg-white overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-secondary-200/30 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Left Content */}
          <motion.div 
            className="space-y-6 md:space-y-8 text-center lg:text-left order-2 lg:order-1"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Badge - 20+ Years */}
            <motion.div variants={itemVariants}>
              <span className="inline-flex items-center bg-primary-50 text-primary-700 px-5 py-2.5 rounded-full text-sm font-bold border border-primary-200 shadow-sm">
                <FaAward className="mr-2 text-primary" />
                🎉 Trusted IT Partner Since 2005 - <span className="ml-1 text-primary font-extrabold">20+ Years</span>
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1 
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight"
              variants={itemVariants}
            >
              <span className="text-secondary-900">Your Trusted IT Hardware Partner in </span>
              <span className="text-primary block mt-2">Rajkot</span>
            </motion.h1>
            
            {/* Slogan - "Your Partner In Digital Transformation" */}
            <motion.div 
              className="relative"
              variants={itemVariants}
            >
              <motion.p 
                className="text-xl sm:text-2xl md:text-3xl font-bold text-primary"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ 
                  duration: 0.8, 
                  delay: 0.5,
                  type: "spring",
                  stiffness: 100 
                }}
              >
                "Your Partner In Digital Transformation"
              </motion.p>
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary via-primary-600 to-primary-900 rounded-full mx-auto lg:mx-0 w-3/4"></div>
            </motion.div>
            
            {/* Subheading - Services */}
            <motion.p 
              className="text-base sm:text-lg md:text-xl text-accent-700 font-medium max-w-2xl mx-auto lg:mx-0"
              variants={itemVariants}
            >
              Custom PCs • Gaming Systems • Business Laptops • Servers • Peripherals • Professional IT Services
            </motion.p>

            {/* Trust Badges Grid */}
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto lg:mx-0"
              variants={itemVariants}
            >
              {trustBadges.map((badge, index) => (
                <motion.div 
                  key={index}
                  className={`flex items-center space-x-3 ${
                    badge.highlight 
                      ? 'bg-primary-50 border-2 border-primary p-3 rounded-lg' 
                      : 'text-accent-700'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <badge.icon className={`${
                    badge.highlight ? 'text-primary' : 'text-green-600'
                  } text-xl flex-shrink-0`} />
                  <span className={`text-sm sm:text-base font-semibold ${
                    badge.highlight ? 'text-primary-900' : 'text-accent-900'
                  }`}>
                    {badge.text}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4"
              variants={itemVariants}
            >
              <button 
                onClick={() => scrollToSection('products')}
                className="group bg-primary text-white px-8 py-4 rounded-lg font-bold hover:bg-primary-700 transition-all duration-300 shadow-lg hover:shadow-primary flex items-center justify-center text-base sm:text-lg"
              >
                Explore Products
                <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-white text-primary border-2 border-primary px-8 py-4 rounded-lg font-bold hover:bg-primary hover:text-white transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center text-base sm:text-lg"
              >
                Contact Us
              </button>
            </motion.div>

            {/* Phone CTA for mobile */}
            <motion.div 
              className="lg:hidden pt-4"
              variants={itemVariants}
            >
              <a 
                href="tel:+919876543210" 
                className="inline-flex items-center text-primary font-bold hover:text-primary-700 transition-colors text-lg"
              >
                📞 Call Now: +91 98765 43210
              </a>
            </motion.div>
          </motion.div>

          {/* Right Image Section with Slider Animation */}
          <motion.div 
            className="relative order-1 lg:order-2"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Main image container with slide animation */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl h-64 sm:h-80 md:h-96 lg:h-[500px] xl:h-[600px]">
              {/* Image Slider */}
              {heroImages.map((image, index) => (
                <motion.div
                  key={index}
                  className="absolute inset-0"
                  initial={{ opacity: 0, x: 300 }}
                  animate={{ 
                    opacity: currentSlide === index ? 1 : 0,
                    x: currentSlide === index ? 0 : -300,
                    display: currentSlide === index ? 'block' : 'none'
                  }}
                  transition={{ duration: 0.7, ease: 'easeInOut' }}
                >
                  <Image 
                    src={image.url}
                    alt={image.alt}
                    fill
                    className="object-cover"
                    priority={index === 0}
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                </motion.div>
              ))}

              {/* Slide Indicators */}
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
                {heroImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      currentSlide === index 
                        ? 'bg-primary w-8' 
                        : 'bg-white/50 hover:bg-white/80'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Floating badge - "Online Now" */}
            <motion.div 
              className="absolute -top-4 -right-4 bg-white p-4 rounded-xl shadow-xl border-2 border-primary-100 hidden lg:block"
              animate={{ 
                y: [0, -10, 0],
                rotate: [0, 3, 0]
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity,
                ease: 'easeInOut'
              }}
            >
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-bold text-secondary-900">Online Now</span>
              </div>
            </motion.div>

            {/* Floating stats card */}
            <motion.div 
              className="absolute -bottom-6 -left-4 bg-white p-5 rounded-xl shadow-xl border-2 border-primary-100 hidden lg:block"
              animate={{ 
                y: [0, 10, 0],
                rotate: [0, -3, 0]
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 1.5
              }}
            >
              <div className="text-center">
                <p className="text-3xl font-extrabold text-primary">1000+</p>
                <p className="text-sm font-semibold text-accent-700">Happy Clients</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:flex"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ 
          opacity: { delay: 1 },
          y: { duration: 1.5, repeat: Infinity, ease: 'easeInOut' }
        }}
      >
        <div className="flex flex-col items-center text-accent-500">
          <span className="text-sm font-medium mb-2">Scroll Down</span>
          <svg 
            className="w-6 h-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;

