// Form Validation Utilities
// Email, phone, and general form validation

import { ContactFormData, ContactFormErrors } from '@/types';

/**
 * Validate email format
 */
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Validate Indian phone number
 * Accepts: 10 digits, optional +91 or 0 prefix
 */
export const isValidPhone = (phone: string): boolean => {
  const phoneRegex = /^(\+91|91|0)?[6-9]\d{9}$/;
  return phoneRegex.test(phone.replace(/[\s-]/g, ''));
};

/**
 * Validate contact form data
 */
export const validateContactForm = (data: ContactFormData): {
  isValid: boolean;
  errors: ContactFormErrors;
} => {
  const errors: ContactFormErrors = {};

  // Name validation
  if (!data.name || data.name.trim().length === 0) {
    errors.name = 'Name is required';
  } else if (data.name.trim().length < 2) {
    errors.name = 'Name must be at least 2 characters';
  } else if (data.name.trim().length > 50) {
    errors.name = 'Name must be less than 50 characters';
  }

  // Email validation
  if (!data.email || data.email.trim().length === 0) {
    errors.email = 'Email is required';
  } else if (!isValidEmail(data.email)) {
    errors.email = 'Please enter a valid email address';
  }

  // Phone validation
  if (!data.phone || data.phone.trim().length === 0) {
    errors.phone = 'Phone number is required';
  } else if (!isValidPhone(data.phone)) {
    errors.phone = 'Please enter a valid 10-digit phone number';
  }

  // Service validation
  if (!data.service || data.service.trim().length === 0) {
    errors.service = 'Please select a service';
  }

  // Message validation
  if (!data.message || data.message.trim().length === 0) {
    errors.message = 'Message is required';
  } else if (data.message.trim().length < 10) {
    errors.message = 'Message must be at least 10 characters';
  } else if (data.message.trim().length > 1000) {
    errors.message = 'Message must be less than 1000 characters';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};

