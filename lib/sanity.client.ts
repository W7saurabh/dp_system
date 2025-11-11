// Sanity Client Configuration
// Used to fetch data from Sanity CMS

import { createClient } from 'next-sanity';

export const client = createClient({
  projectId: '8fax2jc9',
  dataset: 'production',
  apiVersion: '2025-01-01',
  useCdn: process.env.NODE_ENV === 'production', // Use CDN only in production for better performance
  token: process.env.SANITY_API_TOKEN, // Optional: for authenticated requests
});
