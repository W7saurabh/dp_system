'use client';

// WhatsApp Floating Button Component
// Fixed button in bottom-right corner for WhatsApp chat

import React from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
  // WhatsApp number - D P Systems (include country code without +)
  const whatsappNumber = '919376509990'; // D P Systems - Primary number
  const message = 'Hello! I am interested in your IT hardware and services from D P Systems, Rajkot.';
  
  // Construct WhatsApp URL
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 group no-print"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ 
        duration: 0.5, 
        delay: 1,
        type: 'spring',
        stiffness: 260,
        damping: 20
      }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Chat on WhatsApp"
    >
      {/* Button Circle */}
      <div className="relative">
        {/* Ripple effect */}
        <motion.div
          className="absolute inset-0 bg-green-500 rounded-full"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.7, 0, 0.7]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
        
        {/* Main button */}
        <div className="relative w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300">
          <FaWhatsapp className="text-white text-3xl" />
        </div>

        {/* Tooltip */}
        <div className="absolute right-16 top-1/2 transform -translate-y-1/2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <div className="bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-medium shadow-lg">
            Chat with us on WhatsApp
            <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 rotate-45 w-2 h-2 bg-gray-900"></div>
          </div>
        </div>
      </div>
    </motion.a>
  );
};

export default WhatsAppButton;

