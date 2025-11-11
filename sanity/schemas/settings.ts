// Site Settings Schema for D P System
// Global site configuration and contact information

import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'settings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'siteName',
      title: 'Site Name',
      type: 'string',
      validation: Rule => Rule.required(),
      initialValue: 'D P System'
    }),
    defineField({
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
      description: 'Short tagline/slogan for the business',
      initialValue: 'Your Partner In Digital Transformation'
    }),
    defineField({
      name: 'description',
      title: 'Site Description',
      type: 'text',
      rows: 4,
      description: 'Default meta description for SEO'
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: { hotspot: true },
      description: 'Company logo (PNG recommended)'
    }),
    defineField({
      name: 'contact',
      title: 'Contact Information',
      type: 'object',
      fields: [
        {
          name: 'address',
          type: 'text',
          title: 'Address',
          rows: 2
        },
        {
          name: 'city',
          type: 'string',
          title: 'City',
          initialValue: 'Rajkot'
        },
        {
          name: 'state',
          type: 'string',
          title: 'State',
          initialValue: 'Gujarat'
        },
        {
          name: 'pincode',
          type: 'string',
          title: 'PIN Code'
        },
        {
          name: 'phone',
          type: 'string',
          title: 'Phone Number',
          description: 'Format: +91-XXXXXXXXXX'
        },
        {
          name: 'whatsapp',
          type: 'string',
          title: 'WhatsApp Number',
          description: 'Include country code: 919876543210'
        },
        {
          name: 'email',
          type: 'string',
          title: 'Email Address'
        },
        {
          name: 'openingHours',
          type: 'string',
          title: 'Opening Hours',
          initialValue: 'Mon-Sat: 10:00 AM - 8:00 PM, Sun: Closed'
        }
      ]
    }),
    defineField({
      name: 'social',
      title: 'Social Media',
      type: 'object',
      fields: [
        {
          name: 'facebook',
          type: 'url',
          title: 'Facebook'
        },
        {
          name: 'instagram',
          type: 'url',
          title: 'Instagram'
        },
        {
          name: 'twitter',
          type: 'url',
          title: 'Twitter'
        },
        {
          name: 'linkedin',
          type: 'url',
          title: 'LinkedIn'
        },
        {
          name: 'youtube',
          type: 'url',
          title: 'YouTube'
        }
      ],
      options: {
        collapsible: true
      }
    }),
    defineField({
      name: 'location',
      title: 'Location Coordinates',
      type: 'object',
      description: 'For Google Maps integration',
      fields: [
        {
          name: 'latitude',
          type: 'number',
          title: 'Latitude',
          validation: Rule => Rule.min(-90).max(90)
        },
        {
          name: 'longitude',
          type: 'number',
          title: 'Longitude',
          validation: Rule => Rule.min(-180).max(180)
        }
      ],
      options: {
        collapsible: true
      }
    }),
    defineField({
      name: 'businessInfo',
      title: 'Business Information',
      type: 'object',
      fields: [
        {
          name: 'yearsInBusiness',
          type: 'string',
          title: 'Years in Business',
          initialValue: '20+'
        },
        {
          name: 'totalCustomers',
          type: 'string',
          title: 'Total Customers',
          initialValue: '1000+'
        },
        {
          name: 'authorizedDealer',
          type: 'boolean',
          title: 'Authorized Dealer',
          initialValue: true
        }
      ],
      options: {
        collapsible: true
      }
    })
  ],
  preview: {
    prepare() {
      return {
        title: 'Site Settings',
        subtitle: 'Global site configuration'
      };
    }
  }
});

