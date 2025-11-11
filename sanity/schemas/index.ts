// Schema Types Index
// Export all Sanity schemas

import service from './service';
import product from './product';
import testimonial from './testimonial';
import brand from './brand';
import post from './post';
import settings from './settings';
import lead from './lead';

export const schemaTypes = [
  // Content Types
  service,
  product,
  post,
  
  // Social Proof
  testimonial,
  brand,
  
  // Lead Management
  lead,
  
  // Settings
  settings
];

