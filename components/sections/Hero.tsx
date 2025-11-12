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

  // Hero images - Mix of high-quality tech images from Unsplash and local product images
  // Ordered to showcase: Setup → Graphics Card (GTX) → Processor (Intel) → Gaming PC → Professional Solutions
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
      url: '/images/products/gtx.jpg',
      alt: 'NVIDIA GeForce GTX Graphics Card - High Performance Gaming'
    },
    {
      url: '/images/products/intel.jpg',
      alt: 'Intel Core Processor - Power Your PC Build'
    },
    
    {
      url: 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?q=80&w=2000',
      alt: 'Professional IT Hardware Solutions'
    }
  ];

  // Auto-slide effect - Fast carousel transitions for dynamic showcase
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 2500); // Change slide every 2.5 seconds - Fast and engaging

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

  // Animation variants - Optimized for faster feel (reduced by 40%)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.09, // Reduced from 0.15
        delayChildren: 0.12    // Reduced from 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.36 // Reduced from 0.6 for faster feel
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
      className="relative min-h-screen flex items-center pt-32 sm:pt-36 md:pt-40 lg:pt-44 xl:pt-48 pb-16 bg-white overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-secondary-200/30 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
          
          {/* Left Content */}
          <motion.div 
            className="space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-8 text-center lg:text-left order-2 lg:order-1"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Badge - 20+ Years - Enhanced for mobile readability */}
            <motion.div variants={itemVariants} className="flex justify-center lg:justify-start">
              <span className="inline-flex items-center bg-primary-50 text-primary-700 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold border border-primary-200 shadow-sm flex-wrap gap-1 justify-center">
                <FaAward className="text-primary flex-shrink-0" />
                <span className="whitespace-nowrap">🎉 Trusted IT Partner Since 2005 -</span>
                <span className="text-primary font-extrabold whitespace-nowrap">20+ Years</span>
              </span>
            </motion.div>

            {/* Main Heading - Optimized for all screen sizes */}
            <motion.h1 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight"
              variants={itemVariants}
            >
              <span className="text-secondary-900">Your Trusted IT Hardware Partner in </span>
              <span className="text-primary block mt-1 sm:mt-2">Rajkot</span>
            </motion.h1>
            
            {/* Slogan - "Your Partner In Digital Transformation" - Mobile optimized */}
            <motion.div 
              className="relative px-2 sm:px-0"
              variants={itemVariants}
            >
              <motion.p 
                className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-primary leading-snug"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ 
                  duration: 0.48,  // Reduced from 0.8 (40% faster)
                  delay: 0.3,      // Reduced from 0.5
                  type: "spring",
                  stiffness: 120   // Slightly increased for snappier feel
                }}
              >
                "Your Partner In Digital Transformation"
              </motion.p>
              <div className="absolute -bottom-1 sm:-bottom-2 left-0 right-0 h-0.5 sm:h-1 bg-gradient-to-r from-primary via-primary-600 to-primary-900 rounded-full mx-auto lg:mx-0 w-3/4"></div>
            </motion.div>
            
            {/* Subheading - Services - Optimized line breaks for mobile */}
            <motion.p 
              className="text-sm sm:text-base md:text-lg lg:text-xl text-accent-700 font-medium max-w-2xl mx-auto lg:mx-0 px-2 sm:px-0 leading-relaxed"
              variants={itemVariants}
            >
              Custom PCs • Gaming Systems • Business Laptops • Servers • Peripherals • Professional IT Services
            </motion.p>

            {/* Trust Badges Grid - Enhanced for mobile with better touch targets */}
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 max-w-2xl mx-auto lg:mx-0 px-2 sm:px-0"
              variants={itemVariants}
            >
              {trustBadges.map((badge, index) => (
                <motion.div 
                  key={index}
                  className={`flex items-center space-x-2 sm:space-x-3 ${
                    badge.highlight 
                      ? 'bg-primary-50 border-2 border-primary p-2.5 sm:p-3 rounded-lg shadow-sm' 
                      : 'text-accent-700 p-2'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <badge.icon className={`${
                    badge.highlight ? 'text-primary' : 'text-green-600'
                  } text-lg sm:text-xl flex-shrink-0`} />
                  <span className={`text-xs sm:text-sm md:text-base font-semibold ${
                    badge.highlight ? 'text-primary-900' : 'text-accent-900'
                  }`}>
                    {badge.text}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons - Enhanced for mobile with proper touch targets (min 44px height) */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start pt-2 sm:pt-4 px-2 sm:px-0"
              variants={itemVariants}
            >
              <button 
                onClick={() => scrollToSection('products')}
                className="group bg-primary text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-lg font-bold hover:bg-primary-700 active:bg-primary-800 transition-all duration-300 shadow-lg hover:shadow-primary active:shadow-md flex items-center justify-center text-sm sm:text-base md:text-lg min-h-[44px] touch-manipulation"
              >
                Explore Products
                <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-white text-primary border-2 border-primary px-6 sm:px-8 py-3.5 sm:py-4 rounded-lg font-bold hover:bg-primary hover:text-white active:bg-primary-700 transition-all duration-300 shadow-md hover:shadow-lg active:shadow flex items-center justify-center text-sm sm:text-base md:text-lg min-h-[44px] touch-manipulation"
              >
                Contact Us
              </button>
            </motion.div>

            {/* Phone CTA for mobile - REMOVED as per user request */}
          </motion.div>

          {/* Right Image Section with Slider Animation - Responsive heights optimized */}
          <motion.div 
            className="relative order-1 lg:order-2 px-2 sm:px-0"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.48, delay: 0.18 }} // Faster: 0.8->0.48, 0.3->0.18
          >
            {/* Main image container with slide animation - Enhanced responsive heights */}
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl h-56 xs:h-64 sm:h-72 md:h-96 lg:h-[450px] xl:h-[550px] 2xl:h-[600px]">
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
                  transition={{ duration: 0.3, ease: 'easeInOut' }} // Optimized for fast, smooth transitions
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

              {/* Slide Indicators - Enhanced for mobile touch */}
              <div className="absolute bottom-3 sm:bottom-4 md:bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
                {heroImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`rounded-full transition-all duration-300 touch-manipulation ${
                      currentSlide === index 
                        ? 'bg-primary w-6 sm:w-8 h-2.5 sm:h-3' 
                        : 'bg-white/50 hover:bg-white/80 active:bg-white w-2.5 sm:w-3 h-2.5 sm:h-3'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Floating badge - "Online Now" - Show on tablet and up */}
            <motion.div 
              className="absolute -top-2 sm:-top-3 md:-top-4 -right-2 sm:-right-3 md:-right-4 bg-white p-2.5 sm:p-3 md:p-4 rounded-lg sm:rounded-xl shadow-xl border-2 border-primary-100 hidden md:block"
              animate={{ 
                y: [0, -10, 0],
                rotate: [0, 3, 0]
              }}
              transition={{ 
                duration: 2, // Faster: 3->2
                repeat: Infinity,
                ease: 'easeInOut'
              }}
            >
              <div className="flex items-center space-x-2">
                <div className="w-2 sm:w-2.5 md:w-3 h-2 sm:h-2.5 md:h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-xs sm:text-sm font-bold text-secondary-900 whitespace-nowrap">Online Now</span>
              </div>
            </motion.div>

            {/* Floating stats card - Show on tablet and up */}
            <motion.div 
              className="absolute -bottom-4 sm:-bottom-5 md:-bottom-6 -left-2 sm:-left-3 md:-left-4 bg-white p-3 sm:p-4 md:p-5 rounded-lg sm:rounded-xl shadow-xl border-2 border-primary-100 hidden md:block"
              animate={{ 
                y: [0, 10, 0],
                rotate: [0, -3, 0]
              }}
              transition={{ 
                duration: 2, // Faster: 3->2
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 0.9 // Reduced from 1.5
              }}
            >
              <div className="text-center">
                <p className="text-2xl sm:text-3xl font-extrabold text-primary">3000+</p>
                <p className="text-xs sm:text-sm font-semibold text-accent-700 whitespace-nowrap">Happy Clients</p>
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
          opacity: { delay: 0.6 }, // Reduced from 1
          y: { duration: 1.2, repeat: Infinity, ease: 'easeInOut' } // Faster: 1.5->1.2
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

