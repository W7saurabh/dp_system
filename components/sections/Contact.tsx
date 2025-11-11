'use client';

// Contact Section for D P System
// Contact form with validation and contact information
// Migrated to Next.js 14 with TypeScript

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaWhatsapp, FaPaperPlane } from 'react-icons/fa';
import Input from '../ui/Input';
import Textarea from '../ui/Textarea';
import Button from '../ui/Button';
import { validateContactForm } from '@/lib/validation';
import { ContactFormData, ContactFormErrors } from '@/types';

const Contact = () => {
  // Form state
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  // Honeypot field for bot detection (hidden from users)
  // Bots typically fill all fields, so this helps identify automated submissions
  const [honeypot, setHoneypot] = useState('');

  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error for this field
    if (errors[name as keyof ContactFormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  // Handle form submit
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    const validation = validateContactForm(formData);
    
    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    setIsSubmitting(true);
    setSubmitError('');

    try {
      // Submit to API route
      // Include honeypot field for bot detection on server side
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          website: honeypot // Honeypot field - should always be empty for real users
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitSuccess(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          message: ''
        });
        
        // Reset success message after 5 seconds
        setTimeout(() => setSubmitSuccess(false), 5000);
      } else {
        setSubmitError(data.error || 'Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitError('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Contact information - Updated with Real Details
  const contactInfo = [
    {
      icon: FaPhone,
      title: 'Phone',
      details: '+91 93765 09990',
      link: 'tel:+919376509990',
      secondaryDetails: '+91 93288 09990',
      secondaryLink: 'tel:+919328809990'
    },
    {
      icon: FaWhatsapp,
      title: 'WhatsApp',
      details: '+91 93765 09990',
      link: 'https://wa.me/919376509990'
    },
    {
      icon: FaEnvelope,
      title: 'Email',
      details: 'dpromptsystems@gmail.com',
      link: 'mailto:dpromptsystems@gmail.com'
    },
    {
      icon: FaMapMarkerAlt,
      title: 'Address',
      details: '4 Jolly Complex, Opp Mehta Hotel, Panchnath Main Road, Rajkot, 360001',
      link: 'https://www.google.com/maps?q=22.297694,70.800056',
      isMapLink: true
    }
  ];

  // Service options
  const serviceOptions = [
    'Custom PC Building',
    'Laptop Purchase',
    'Gaming System',
    'Server Setup',
    'Hardware Repair',
    'Maintenance Service',
    'IT Consultation',
    'Other'
  ];

  return (
    <section id="contact" className="section bg-gray-50">
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
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="text-lg text-accent-700 max-w-2xl mx-auto">
            Have a question or need IT hardware? We're here to help!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Contact Information */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Contact Cards */}
            <div className="space-y-4 mb-8">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                
                // For phone card with two numbers, use div wrapper
                // For other cards, use anchor wrapper
                const isPhoneCard = info.title === 'Phone' && info.secondaryDetails;
                
                if (isPhoneCard) {
                  return (
                    <div
                      key={index}
                      className="flex items-start p-4 bg-white rounded-xl border border-gray-200 hover:border-primary hover:shadow-lg transition-all duration-300 group"
                    >
                      <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center group-hover:bg-primary transition-colors flex-shrink-0">
                        <IconComponent className="text-primary group-hover:text-white transition-colors text-xl" />
                      </div>
                      <div className="ml-4 flex-1">
                        <p className="text-sm text-accent-600 font-medium mb-1">{info.title}</p>
                        <a 
                          href={info.link}
                          className="block text-secondary-900 font-semibold hover:text-primary transition-colors"
                        >
                          {info.details}
                        </a>
                        {info.secondaryDetails && info.secondaryLink && (
                          <a 
                            href={info.secondaryLink}
                            className="block text-secondary-900 font-semibold mt-1 hover:text-primary transition-colors"
                          >
                            {info.secondaryDetails}
                          </a>
                        )}
                      </div>
                    </div>
                  );
                }
                
                // For other cards (WhatsApp, Email, Address), use anchor wrapper
                return (
                  <a
                    key={index}
                    href={info.link}
                    className="flex items-start p-4 bg-white rounded-xl border border-gray-200 hover:border-primary hover:shadow-lg transition-all duration-300 group"
                    target={info.link.startsWith('http') ? '_blank' : undefined}
                    rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                  >
                    <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center group-hover:bg-primary transition-colors flex-shrink-0">
                      <IconComponent className="text-primary group-hover:text-white transition-colors text-xl" />
                    </div>
                    <div className="ml-4 flex-1">
                      <p className="text-sm text-accent-600 font-medium mb-1">{info.title}</p>
                      <p className="text-secondary-900 font-semibold break-words">{info.details}</p>
                      {info.isMapLink && (
                        <p className="text-xs text-primary mt-1">Click to view on map →</p>
                      )}
                    </div>
                  </a>
                );
              })}
            </div>

            {/* Business Hours */}
            <div className="bg-white p-6 rounded-xl border border-gray-200 mb-6">
              <div className="flex items-center mb-4">
                <FaClock className="text-primary text-2xl mr-3" />
                <h3 className="text-lg font-bold text-secondary-900">Business Hours</h3>
              </div>
              <div className="space-y-2 text-accent-700">
                <div className="flex justify-between">
                  <span>Monday - Saturday</span>
                  <span className="font-semibold">10:00 AM - 8:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span className="font-semibold text-primary">Closed</span>
                </div>
              </div>
            </div>

            {/* Google Maps - Interactive Location */}
            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="p-4 bg-gradient-to-r from-primary-50 to-white border-b border-gray-200">
                <h3 className="text-lg font-bold text-secondary-900 flex items-center">
                  <FaMapMarkerAlt className="text-primary mr-2" />
                  Our Location
                </h3>
                <p className="text-sm text-accent-600 mt-1">
                  4 Jolly Complex, Panchnath Main Road, Rajkot
                </p>
              </div>
              <div className="relative w-full h-64 md:h-80">
                <iframe
                  src="https://www.google.com/maps?q=22.297694,70.800056&hl=en&z=17&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="D P Systems Location - 4 Jolly Complex, Panchnath Main Road, Rajkot, Gujarat"
                  className="w-full h-full"
                />
              </div>
              <div className="p-4 bg-gray-50 border-t border-gray-200">
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=22.297694,70.800056"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center text-primary font-semibold hover:text-primary-600 transition-colors"
                >
                  <FaMapMarkerAlt className="mr-2" />
                  Get Directions
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white p-8 rounded-2xl shadow-card">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Success Message */}
                {submitSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-green-50 border border-green-200 text-green-800 px-6 py-4 rounded-lg flex items-start"
                  >
                    <svg className="w-6 h-6 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <p className="font-semibold">Thank you for contacting us!</p>
                      <p className="text-sm mt-1">We'll get back to you within 24 hours.</p>
                    </div>
                  </motion.div>
                )}

                {/* Error Message */}
                {submitError && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-red-50 border border-red-200 text-red-800 px-6 py-4 rounded-lg"
                  >
                    <p className="font-semibold">{submitError}</p>
                  </motion.div>
                )}

                {/* Honeypot Field - Hidden from real users, visible to bots */}
                {/* This field helps prevent spam by catching bots that auto-fill all form fields */}
                <div style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px' }} aria-hidden="true">
                  <label htmlFor="website">Website (leave blank)</label>
                  <input
                    type="text"
                    id="website"
                    name="website"
                    tabIndex={-1}
                    autoComplete="off"
                    value={honeypot}
                    onChange={(e) => setHoneypot(e.target.value)}
                  />
                </div>

                {/* Name & Email Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input
                    label="Full Name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    error={errors.name}
                    placeholder="John Doe"
                    required
                  />
                  <Input
                    label="Email Address"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    error={errors.email}
                    placeholder="john@example.com"
                    required
                  />
                </div>

                {/* Phone & Service Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input
                    label="Phone Number"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    error={errors.phone}
                    placeholder="+91 98765 43210"
                    required
                  />
                  <div className="w-full">
                    <label className="block text-sm font-medium text-secondary-900 mb-2">
                      Service Interested In
                      <span className="text-primary ml-1">*</span>
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border ${
                        errors.service ? 'border-red-500' : 'border-gray-300'
                      } rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all`}
                      required
                    >
                      <option value="">Select a service</option>
                      {serviceOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                    {errors.service && (
                      <p className="mt-1 text-sm text-red-500">{errors.service}</p>
                    )}
                  </div>
                </div>

                {/* Message */}
                <Textarea
                  label="Message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  error={errors.message}
                  placeholder="Tell us about your requirements..."
                  rows={5}
                  required
                />

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <FaPaperPlane className="mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

