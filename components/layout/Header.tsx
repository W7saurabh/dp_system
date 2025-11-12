'use client';

// Header Component for D P System
// Responsive navigation with mobile menu and sticky header on scroll
// Migrated to Next.js 14 with TypeScript

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaBars, FaTimes, FaPhone } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  // State management
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Detect scroll for sticky header with background change
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMobileMenuOpen]);

  // Smooth scroll to section or navigate to page
  const handleNavigation = (itemId: string, path: string) => {
    // Close mobile menu first
    setIsMobileMenuOpen(false);
    
    // Check if it's an external page route (blog or faq)
    if (path.startsWith('/blog') || path.startsWith('/faq')) {
      // Navigate to the page
      window.location.href = path;
      return;
    }
    
    // Check if we're on a different page and need to go home first
    const currentPath = window.location.pathname;
    if (currentPath !== '/' && !path.startsWith('http')) {
      // If trying to navigate to a section but we're not on home page
      // Navigate to home page with hash
      if (itemId !== 'home') {
        window.location.href = `/#${itemId}`;
      } else {
        window.location.href = '/';
      }
      return;
    }
    
    // We're on home page, scroll to section
    if (itemId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setActiveSection('home');
      return;
    }
    
    const element = document.getElementById(itemId);
    if (element) {
      const headerOffset = 120; // Height of fixed header (adjusted for responsive logo)
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      setActiveSection(itemId);
    }
  };

  // Navigation items - Updated with Blog and FAQ sections
  const navItems = [
    { id: 'home', label: 'Home', path: '/' },
    { id: 'products', label: 'Products', path: '/#products' },
    { id: 'services', label: 'Services', path: '/#services' },
    { id: 'blog', label: 'Blog', path: '/blog' },
    { id: 'faq', label: 'FAQ', path: '/faq' },
    { id: 'testimonials', label: 'Testimonials', path: '/#testimonials' },
    { id: 'contact', label: 'Contact', path: '/#contact' }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled 
          ? 'bg-white shadow-lg py-1 md:py-2' 
          : 'bg-white/95 backdrop-blur-md py-2 md:py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          
          {/* Logo - Using Brand Image - Enhanced Size and Responsiveness */}
          <motion.div 
            className="flex items-center cursor-pointer flex-shrink-0"
            onClick={() => handleNavigation('home', '/')}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }} // Faster: 0.5 -> 0.3
          >
            <Image 
              src="/dpsystem-logo.png" 
              alt="D P Systems - IT Hardware & Solutions Rajkot" 
              width={240}
              height={90}
              className={`w-auto object-contain transition-all duration-300 hover:scale-105 ${
                isScrolled 
                  ? 'h-12 sm:h-14 md:h-16 lg:h-18' 
                  : 'h-14 sm:h-16 md:h-20 lg:h-24'
              }`}
              style={{ maxWidth: '100%', minWidth: '120px' }}
              priority
            />
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigation(item.id, item.path)}
                className={`text-base font-medium transition-colors duration-300 hover:text-primary relative whitespace-nowrap ${
                  activeSection === item.id ? 'text-primary' : 'text-gray-700'
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                    layoutId="activeSection"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.2 }} // Faster: 0.3 -> 0.2
                  />
                )}
              </button>
            ))}
          </nav>

          {/* CTA Button - Desktop */}
          <div className="hidden lg:flex items-center flex-shrink-0">
            <a 
              href="tel:+919376509990" 
              className="flex items-center bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-600 transition-all duration-300 shadow-md hover:shadow-lg whitespace-nowrap"
            >
              <FaPhone className="mr-2" />
              Call Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-2xl text-gray-700 hover:text-primary transition-colors z-50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <>
              {/* Overlay */}
              <motion.div
                className="fixed inset-0 bg-black/50 lg:hidden z-40"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                onClick={() => setIsMobileMenuOpen(false)}
              />
              
              {/* Mobile Menu Panel - Enhanced with proper content display */}
              <motion.div
                className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl lg:hidden z-50 overflow-y-auto"
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'tween', duration: 0.2 }}
              >
                {/* Close button */}
                <div className="flex justify-end p-4">
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-2xl text-gray-700 hover:text-primary transition-colors"
                    aria-label="Close menu"
                  >
                    <FaTimes />
                  </button>
                </div>

                {/* Mobile Navigation */}
                <nav className="px-6 py-4">
                  <motion.div
                    className="space-y-2"
                    initial="hidden"
                    animate="visible"
                    variants={{
                      visible: {
                        transition: {
                          staggerChildren: 0.06 // Faster: 0.1 -> 0.06
                        }
                      }
                    }}
                  >
                    {navItems.map((item) => (
                      <motion.button
                        key={item.id}
                        onClick={() => handleNavigation(item.id, item.path)}
                        className={`block w-full text-left px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                          activeSection === item.id 
                            ? 'bg-primary-50 text-primary' 
                            : 'text-gray-700 hover:bg-gray-50'
                        }`}
                        variants={{
                          hidden: { opacity: 0, x: 20 },
                          visible: { opacity: 1, x: 0 }
                        }}
                      >
                        {item.label}
                      </motion.button>
                    ))}
                  </motion.div>

                  {/* Mobile CTA */}
                  <motion.div
                    className="mt-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.24 }} // Faster: 0.4 -> 0.24
                  >
                    <a 
                      href="tel:+919376509990" 
                      className="flex items-center justify-center bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-600 transition-colors w-full"
                    >
                      <FaPhone className="mr-2" />
                      Call Now
                    </a>
                  </motion.div>
                </nav>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;

