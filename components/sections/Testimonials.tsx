'use client';

// Testimonials Section for D P System
// Customer reviews carousel with Swiper
// Using static testimonial data for fast loading
// Beautiful responsive design with animations

import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { staticTestimonials } from '@/data/staticTestimonials';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Testimonials = () => {
  // Use static testimonials data (fast loading!)
  const testimonials = staticTestimonials;

  // Render star rating
  const renderStars = (rating: number) => {
    return (
      <div className="flex justify-center space-x-1">
        {[...Array(5)].map((_, index) => (
          <FaStar 
            key={index} 
            className={`text-lg ${
              index < rating ? 'text-yellow-400' : 'text-gray-300'
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <section id="testimonials" className="section bg-gray-50">
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
            What Our <span className="text-primary">Customers Say</span>
          </h2>
          <p className="text-lg text-accent-700 max-w-2xl mx-auto">
            Real experiences from our satisfied customers across Indore
          </p>
        </motion.div>

      {/* Testimonials Carousel - Static Data */}
      {testimonials.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-6xl mx-auto"
          >
            <Swiper
              modules={[Autoplay, Pagination, Navigation]}
              spaceBetween={24}
              slidesPerView={1}
              pagination={{ 
                clickable: true,
                dynamicBullets: true
              }}
              navigation={{
                enabled: true
              }}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true
              }}
              breakpoints={{
                // Mobile portrait (default 1 slide) - Full focus on single testimonial
                320: {
                  slidesPerView: 1,
                  spaceBetween: 16
                },
                // Mobile landscape (1 slide for better readability)
                480: {
                  slidesPerView: 1,
                  spaceBetween: 20
                },
                // Small tablets (still 1 for optimal readability)
                640: {
                  slidesPerView: 1,
                  spaceBetween: 24
                },
                // Medium tablets (2 slides side by side - professional layout)
                768: {
                  slidesPerView: 2,
                  spaceBetween: 24
                },
                // Desktop (2 slides for better focus and readability)
                1024: {
                  slidesPerView: 2,
                  spaceBetween: 32
                },
                // Large desktop (3 slides to utilize screen space)
                1280: {
                  slidesPerView: 3,
                  spaceBetween: 32
                }
              }}
              className="pb-16"
            >
              {testimonials.map((testimonial, idx) => (
                <SwiperSlide key={testimonial.id}>
                  <motion.div
                    className="bg-white rounded-2xl p-5 sm:p-6 md:p-8 lg:p-10 shadow-md hover:shadow-2xl transition-all duration-500 h-full flex flex-col border-2 border-gray-100 hover:border-primary/30 relative overflow-hidden group"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1, duration: 0.5 }}
                    whileHover={{ 
                      y: -12, 
                      scale: 1.02,
                      transition: { type: 'spring', stiffness: 300, damping: 20 }
                    }}
                  >
                    {/* Background Gradient Decoration */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Quote Icon with Animation */}
                    <motion.div 
                      className="mb-3 md:mb-4"
                      initial={{ scale: 0, rotate: -45 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 + 0.2, type: 'spring', stiffness: 200 }}
                    >
                      <FaQuoteLeft className="text-xl sm:text-2xl md:text-3xl text-primary opacity-40 group-hover:opacity-60 transition-opacity duration-300" />
                    </motion.div>

                    {/* Rating Stars with Stagger Animation */}
                    <motion.div 
                      className="mb-3 md:mb-4"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 + 0.3 }}
                    >
                      {renderStars(testimonial.rating)}
                    </motion.div>

                    {/* Testimonial Text - Flexible height with better typography */}
                    <motion.p 
                      className="text-accent-700 mb-5 md:mb-6 text-xs sm:text-sm md:text-base leading-relaxed flex-grow relative z-10"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 + 0.4 }}
                    >
                      "{testimonial.testimonial}"
                    </motion.p>

                    {/* Customer Info - No Location (Removed as per requirement) */}
                    <motion.div 
                      className="flex items-center border-t border-gray-200 pt-4 md:pt-5 relative z-10"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 + 0.5 }}
                    >
                      <motion.div 
                        className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center text-primary-600 font-bold mr-3 flex-shrink-0 shadow-sm"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: 'spring', stiffness: 400 }}
                      >
                        <span className="text-sm sm:text-base md:text-lg">{testimonial.initials}</span>
                      </motion.div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-bold text-secondary-900 text-sm sm:text-base md:text-lg truncate">
                          {testimonial.name}
                        </h4>
                        <p className="text-xs sm:text-sm text-accent-600 truncate">
                          {testimonial.role}
                          {testimonial.company && ` - ${testimonial.company}`}
                        </p>
                        {/* Location removed as per user requirement */}
                      </div>
                    </motion.div>

                    {/* Decorative corner accent */}
                    <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-primary/5 to-transparent rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        )}

        {/* Trust Badge */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="inline-flex items-center bg-primary-50 text-primary-700 px-6 py-3 rounded-full border border-primary-200">
            <FaStar className="text-yellow-400 mr-2" />
            <span className="font-semibold">
              Rated 5.0/5 by 100+ happy customers
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;

