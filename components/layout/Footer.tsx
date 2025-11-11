'use client';

// Footer Component for D P System
// Multi-column footer with links, contact info, and social media
// Migrated to Next.js 14 with TypeScript

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  FaFacebookF, 
  FaInstagram, 
  FaTwitter, 
  FaLinkedinIn, 
  FaYoutube,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt
} from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Smooth scroll function or page navigation
  const handleNavigation = (linkId: string, linkPath?: string) => {
    // If there's a path and it's a page route (blog or faq), navigate to it
    if (linkPath && (linkPath.startsWith('/blog') || linkPath.startsWith('/faq'))) {
      window.location.href = linkPath;
      return;
    }
    
    // Check if we're on a different page and need to go home first
    const currentPath = window.location.pathname;
    if (currentPath !== '/') {
      // Navigate to home page with hash to section
      if (linkId !== 'home') {
        window.location.href = `/#${linkId}`;
      } else {
        window.location.href = '/';
      }
      return;
    }
    
    // We're on home page, scroll to section
    if (linkId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    
    const element = document.getElementById(linkId);
    if (element) {
      const headerOffset = 120;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Footer links data - Updated with Blog and FAQ sections
  const footerLinks = {
    quickLinks: [
      { label: 'Home', id: 'home' },
      { label: 'Products', id: 'products' },
      { label: 'Services', id: 'services' },
      { label: 'Blog', id: 'blog', path: '/blog' },
      { label: 'FAQ', id: 'faq', path: '/faq' },
      { label: 'Testimonials', id: 'testimonials' },
      { label: 'Contact', id: 'contact' }
    ],
    productCategories: [
      'Custom Built PCs',
      'Gaming Systems',
      'Business Laptops',
      'Servers & NAS',
      'Peripherals',
      'Printers'
    ]
  };

  // Social media links
  const socialLinks = [
    { icon: FaFacebookF, url: 'https://facebook.com/dpsystem', label: 'Facebook' },
    { icon: FaInstagram, url: 'https://instagram.com/dpsystem', label: 'Instagram' },
    { icon: FaTwitter, url: 'https://twitter.com/dpsystem', label: 'Twitter' },
    { icon: FaLinkedinIn, url: 'https://linkedin.com/company/dpsystem', label: 'LinkedIn' },
    { icon: FaYoutube, url: 'https://youtube.com/@dpsystem', label: 'YouTube' }
  ];

  return (
    <footer className="bg-secondary text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Column 1: About */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-4">D P Systems</h3>
            <p className="text-accent-400 mb-6 leading-relaxed">
              Your trusted IT hardware partner in Rajkot. Quality products, professional service, and after-sales support for over 20 years.
            </p>
            {/* Social Media Links */}
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-10 h-10 bg-gray-800 hover:bg-primary rounded-lg flex items-center justify-center transition-colors duration-300"
                  >
                    <IconComponent />
                  </a>
                );
              })}
            </div>
          </motion.div>

          {/* Column 2: Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {footerLinks.quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleNavigation(link.id, link.path)}
                    className="text-gray-400 hover:text-primary transition-colors duration-300 text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3: Product Categories */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-lg font-bold mb-4">Product Categories</h4>
            <ul className="space-y-2">
              {footerLinks.productCategories.map((category, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleNavigation('products')}
                    className="text-gray-400 hover:text-primary transition-colors duration-300 text-left"
                  >
                    {category}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 4: Contact Info - Updated with Real Details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="text-lg font-bold mb-4">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <FaMapMarkerAlt className="text-primary mt-1 flex-shrink-0" />
                <span className="text-gray-400 leading-relaxed">
                  4 Jolly Complex, Opp Mehta Hotel,<br />
                  Panchnath Main Road,<br />
                  Rajkot, Gujarat 360001, India
                </span>
              </li>
              <li className="flex flex-col space-y-2">
                <div className="flex items-center space-x-3">
                  <FaPhone className="text-primary flex-shrink-0" />
                  <a 
                    href="tel:+919376509990" 
                    className="text-gray-400 hover:text-primary transition-colors"
                  >
                    +91 93765 09990
                  </a>
                </div>
                <div className="flex items-center space-x-3 ml-6">
                  <a 
                    href="tel:+919328809990" 
                    className="text-gray-400 hover:text-primary transition-colors"
                  >
                    +91 93288 09990
                  </a>
                </div>
              </li>
              <li className="flex items-center space-x-3">
                <FaEnvelope className="text-primary flex-shrink-0" />
                <a 
                  href="mailto:dpromptsystems@gmail.com" 
                  className="text-gray-400 hover:text-primary transition-colors break-all"
                >
                  dpromptsystems@gmail.com
                </a>
              </li>
            </ul>
            <div className="mt-4 text-sm text-gray-400">
              <p className="font-semibold text-white mb-1">Business Hours:</p>
              <p>Mon-Sat: 10:00 AM - 8:00 PM</p>
              <p>Sunday: Closed</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} D P Systems. All rights reserved.
            </p>

            {/* Legal Links */}
            <div className="flex space-x-6 text-sm">
              <Link 
                href="/privacy" 
                className="text-gray-400 hover:text-primary transition-colors"
              >
                Privacy Policy
              </Link>
              <Link 
                href="/terms" 
                className="text-gray-400 hover:text-primary transition-colors"
              >
                Terms & Conditions
              </Link>
            </div>

            {/* Developer Credit */}
            <p className="text-gray-400 text-sm text-center md:text-right">
              Designed & Developed with ❤️ by Savage7Tech
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

