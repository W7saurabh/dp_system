'use client';

// Brands Section with Infinite Carousel Animation
// D P System - Premium Brand Partners Display
// Features:
// - Infinite scroll carousel with smooth animations
// - Beautiful glassmorphism card design
// - Responsive for all screen sizes (mobile, tablet, desktop)
// - Hover effects with scale and glow
// - Grayscale to color transition on hover
// - Multiple animation rows for visual interest

import React, { useEffect, useRef, useMemo, useState } from 'react';
import Image from 'next/image';
import { motion, useAnimationControls } from 'framer-motion';
import { brands } from '@/data/staticBrands';

const Brands = () => {
  // Data preparation: split rows by category priority
  const row1Categories = useMemo(() => ([
    'Laptops & Desktops',
    'Laptops & Computers',
    'Laptops & Motherboards',
    'Processors',
    'Processors & Graphics',
    'Graphics Cards',
    'Motherboards & Gaming',
    'Motherboards & Graphics',
    'Motherboards',
    'Printers & Scanners'
  ]), []);

  const row2Categories = useMemo(() => ([
    'Monitors & Displays',
    'Monitors & Storage',
    'Memory & Storage',
    'Storage Solutions',
    'Gaming Peripherals',
    'Peripherals',
    'Peripherals & Accessories'
  ]), []);

  const row3Categories = useMemo(() => ([
    'CCTV & Surveillance',
    'Networking & WiFi',
    'Networking'
  ]), []);

  const sortByOrder = (a: any, b: any) => (a.order ?? 999) - (b.order ?? 999);

  const row1 = useMemo(() => brands.filter(b => row1Categories.includes(b.category)).sort(sortByOrder), [row1Categories]);
  const row2 = useMemo(() => brands.filter(b => row2Categories.includes(b.category)).sort(sortByOrder), [row2Categories]);
  const row3 = useMemo(() => brands.filter(b => row3Categories.includes(b.category)).sort(sortByOrder), [row3Categories]);

  const duplicate = (arr: typeof brands) => [...arr, ...arr];

  return (
    <section id="brands" className="section relative bg-gradient-to-br from-gray-50 via-white to-gray-100 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-500 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header with Animation */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-secondary-900 mb-4">
              Trusted <span className="text-primary bg-gradient-to-r from-primary to-primary-600 bg-clip-text text-transparent">Brand Partners</span>
            </h2>
          </motion.div>
          
          <motion.p
            className="text-lg md:text-xl text-accent-700 max-w-3xl mx-auto font-medium"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            We are authorized dealers for leading IT hardware, CCTV, networking, and technology brands
          </motion.p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative">
          {/* First Carousel Row - Left to Right (PC, Laptops, Motherboards, Printers) */}
          <motion.div 
            className="mb-8 overflow-x-hidden overflow-y-visible"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <BrandCarouselRow brands={duplicate(row1)} direction="left" speed={50} />
          </motion.div>

          {/* Second Carousel Row - Right to Left (Monitors, Storage, Peripherals) */}
          <motion.div 
            className="mb-8 overflow-x-hidden overflow-y-visible"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <BrandCarouselRow 
              brands={duplicate(row2).slice().reverse()} 
              direction="right" 
              speed={45} 
            />
          </motion.div>

          {/* Third Carousel Row - Left to Right (CCTV & Networking) */}
          <motion.div 
            className="overflow-x-hidden overflow-y-visible"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <BrandCarouselRow brands={duplicate(row3)} direction="left" speed={40} />
          </motion.div>
        </div>

        {/* Bottom CTA Text */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <p className="text-accent-600 font-semibold text-lg mb-4">
            And many more leading technology brands...
          </p>
          <div className="flex justify-center items-center gap-2">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary"></div>
            <span className="text-primary text-2xl">★</span>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// ============================================
// Brand Carousel Row Component
// ============================================
// Creates an infinite scrolling row of brand logos
// Props:
// - brands: Array of brand objects to display
// - direction: 'left' or 'right' for scroll direction
// - speed: Animation duration in seconds

interface BrandCarouselRowProps {
  brands: typeof brands;
  direction: 'left' | 'right';
  speed: number;
}

const BrandCarouselRow: React.FC<BrandCarouselRowProps> = ({ 
  brands, 
  direction, 
  speed 
}) => {
  return (
    <div className="relative">
      {/* Gradient Fade Edges */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

      {/* Infinite Scroll Container */}
      <motion.div
        className="flex gap-6 md:gap-8"
        animate={{
          x: direction === 'left' ? ['0%', '-50%'] : ['-50%', '0%']
        }}
        transition={{
          duration: speed,
          repeat: Infinity,
          ease: 'linear'
        }}
      >
        {brands.map((brand, index) => (
          <BrandCard key={`${brand.id}-${index}`} brand={brand} />
        ))}
      </motion.div>
    </div>
  );
};

// ============================================
// Individual Brand Card Component
// ============================================
// Minimal, clean card with smooth hover effects

interface BrandCardProps {
  brand: typeof brands[0];
}

const BrandCard: React.FC<BrandCardProps> = ({ brand }) => {
  // Multi-source logo fallback: iterate through brand.logos if provided
  const [logoIndex, setLogoIndex] = useState(0);
  const logoCandidates = useMemo(() => {
    const list: string[] = [];
    // @ts-ignore - optional logos array supported by data model
    if (Array.isArray((brand as any).logos)) list.push(...(brand as any).logos);
    if (brand.logo) list.push(brand.logo);
    return list.length > 0 ? list : [brand.logo];
  }, [brand]);
  const currentLogo = logoCandidates[Math.min(logoIndex, logoCandidates.length - 1)];

  return (
    <motion.div
      className="group relative flex-shrink-0"
      whileHover={{ scale: 1.05, y: -6 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
    >
      {/* Main Card Container - Clean Minimal Design */}
      <div className="relative bg-white border-2 border-gray-200 rounded-xl p-4 md:p-6 w-44 md:w-52 h-28 md:h-32 flex items-center justify-center shadow-md hover:shadow-xl hover:border-primary transition-all duration-300 overflow-visible">
        {/* Subtle Gradient Glow on Hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Brand Logo Container */}
        <div className="relative w-full h-full flex items-center justify-center p-2 z-10">
          <Image
            src={currentLogo}
            alt={`${brand.name} - Official Partner`}
            width={200}
            height={100}
            className="object-contain max-w-full max-h-full grayscale-[0.3] group-hover:grayscale-0 transition-all duration-500 filter drop-shadow-sm"
            loading="lazy"
            unoptimized
            onError={(e) => {
              // Try next logo candidate, else show fallback text
              if (logoIndex < logoCandidates.length - 1) {
                setLogoIndex(logoIndex + 1);
                return;
              }
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
              const parent = target.parentElement;
              if (parent && !parent.querySelector('.fallback-text')) {
                const textNode = document.createElement('div');
                textNode.className = 'fallback-text text-xl md:text-2xl font-bold text-gray-700 text-center px-2';
                textNode.textContent = brand.name;
                parent.appendChild(textNode);
              }
            }}
          />
        </div>

        {/* Minimal Brand Name Badge (Only on Hover) - Clean and Small */}
        <div className="absolute -bottom-3 left-2 right-2 bg-white/95 backdrop-blur-sm border border-primary/20 text-primary text-center py-1.5 px-3 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-1 group-hover:translate-y-0 shadow-sm">
          <p className="text-xs md:text-sm font-semibold truncate">{brand.name}</p>
        </div>

        {/* Simple Corner Indicator Dot */}
        <div className="absolute top-2 right-2 w-2 h-2 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      {/* Subtle Shadow Enhancement */}
      <div className="absolute inset-0 bg-primary/10 rounded-xl blur-lg opacity-0 group-hover:opacity-40 transition-opacity duration-300 -z-10"></div>
    </motion.div>
  );
};

export default Brands;
