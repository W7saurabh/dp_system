// Enhanced Service Schema for D P System
// Comprehensive structure for IT services with detailed content and SEO

import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'service',
  title: 'Services',
  type: 'document',
  fields: [
    // ============================================
    // BASIC INFORMATION
    // ============================================
    defineField({
      name: 'title',
      title: 'Service Title',
      type: 'string',
      validation: Rule => Rule.required().min(5).max(100),
      description: 'Name of the service (e.g., Custom PC Build)'
    }),
    defineField({
      name: 'slug',
      title: 'URL Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      },
      validation: Rule => Rule.required(),
      description: 'Auto-generated from title, used in URL'
    }),
    defineField({
      name: 'shortDescription',
      title: 'Short Description',
      type: 'text',
      rows: 3,
      validation: Rule => Rule.required().max(200),
      description: 'Brief description for cards and previews (max 200 characters)'
    }),
    defineField({
      name: 'fullDescription',
      title: 'Full Description',
      type: 'text',
      rows: 6,
      validation: Rule => Rule.required().min(100),
      description: 'Detailed description for the service detail page'
    }),
    defineField({
      name: 'category',
      title: 'Service Category',
      type: 'string',
      options: {
        list: [
          { title: 'Hardware Services', value: 'hardware' },
          { title: 'Software Services', value: 'software' },
          { title: 'Support Services', value: 'support' },
          { title: 'Networking Services', value: 'networking' },
          { title: 'Security Services', value: 'security' },
          { title: 'Consultation Services', value: 'consultation' }
        ]
      },
      validation: Rule => Rule.required(),
      description: 'Category for filtering and organization'
    }),

    // ============================================
    // VISUAL ELEMENTS
    // ============================================
    defineField({
      name: 'icon',
      title: 'Icon Name',
      type: 'string',
      options: {
        list: [
          { title: 'Desktop/PC', value: 'FaDesktop' },
          { title: 'Laptop', value: 'FaLaptop' },
          { title: 'Server', value: 'FaServer' },
          { title: 'Network', value: 'FaNetworkWired' },
          { title: 'Printer', value: 'FaPrint' },
          { title: 'Headset/Support', value: 'FaHeadset' },
          { title: 'File/Contract', value: 'FaFileContract' },
          { title: 'Video/CCTV', value: 'FaVideo' },
          { title: 'Shield/Security', value: 'FaShieldAlt' },
          { title: 'Database', value: 'FaDatabase' },
          { title: 'User/Consultant', value: 'FaUserTie' },
          { title: 'Tools', value: 'FaTools' },
          { title: 'Cog/Settings', value: 'FaCog' },
          { title: 'Wrench', value: 'FaWrench' }
        ]
      },
      validation: Rule => Rule.required(),
      description: 'Icon displayed on service card'
    }),
    defineField({
      name: 'mainImage',
      title: 'Main Service Image',
      type: 'image',
      options: { 
        hotspot: true,
        metadata: ['lqip'] // Low quality image placeholder
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
          validation: Rule => Rule.required(),
          description: 'Describe the image for SEO and accessibility'
        }
      ],
      description: 'Main image for the service detail page'
    }),
    defineField({
      name: 'gallery',
      title: 'Image Gallery',
      type: 'array',
      of: [{
        type: 'image',
        options: { hotspot: true },
        fields: [
          {
            name: 'alt',
            type: 'string',
            title: 'Alternative text',
            validation: Rule => Rule.required()
          },
          {
            name: 'caption',
            type: 'string',
            title: 'Caption'
          }
        ]
      }],
      description: 'Additional images showcasing the service'
    }),

    // ============================================
    // DETAILED CONTENT
    // ============================================
    defineField({
      name: 'keyFeatures',
      title: 'Key Features',
      type: 'array',
      of: [{ 
        type: 'object',
        fields: [
          {
            name: 'feature',
            type: 'string',
            title: 'Feature',
            validation: Rule => Rule.required()
          },
          {
            name: 'description',
            type: 'text',
            title: 'Description',
            rows: 2
          }
        ]
      }],
      description: 'Main features of this service'
    }),
    defineField({
      name: 'highlights',
      title: 'Service Highlights',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Quick bullet points for cards (3-5 items recommended)'
    }),
    defineField({
      name: 'benefits',
      title: 'Benefits',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Benefits customers get from this service'
    }),
    defineField({
      name: 'process',
      title: 'Service Process',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          {
            name: 'step',
            type: 'string',
            title: 'Step Number',
            validation: Rule => Rule.required()
          },
          {
            name: 'title',
            type: 'string',
            title: 'Step Title',
            validation: Rule => Rule.required()
          },
          {
            name: 'description',
            type: 'text',
            title: 'Description',
            rows: 3
          }
        ],
        preview: {
          select: {
            title: 'step',
            subtitle: 'title'
          }
        }
      }],
      description: 'Step-by-step process of how the service works'
    }),

    // ============================================
    // PRICING & TIMING
    // ============================================
    defineField({
      name: 'pricing',
      title: 'Pricing Information',
      type: 'object',
      fields: [
        {
          name: 'type',
          type: 'string',
          title: 'Pricing Type',
          options: {
            list: [
              { title: 'Fixed Price', value: 'fixed' },
              { title: 'Starting From', value: 'starting' },
              { title: 'Hourly Rate', value: 'hourly' },
              { title: 'Custom Quote', value: 'custom' }
            ]
          }
        },
        {
          name: 'amount',
          type: 'string',
          title: 'Price Amount',
          description: 'e.g., ₹5,000 or ₹500/hour'
        },
        {
          name: 'note',
          type: 'text',
          title: 'Pricing Note',
          rows: 2,
          description: 'Additional pricing information'
        }
      ],
      options: {
        collapsible: true,
        collapsed: false
      }
    }),
    defineField({
      name: 'deliveryTime',
      title: 'Estimated Delivery Time',
      type: 'string',
      description: 'e.g., "Same Day", "2-3 Days", "1 Week"'
    }),

    // ============================================
    // BODY CONTENT (Rich Text)
    // ============================================
    defineField({
      name: 'body',
      title: 'Detailed Content (Rich Text)',
      type: 'array',
      of: [
        { 
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'H2', value: 'h2' },
            { title: 'H3', value: 'h3' },
            { title: 'H4', value: 'h4' },
            { title: 'Quote', value: 'blockquote' }
          ],
          lists: [
            { title: 'Bullet', value: 'bullet' },
            { title: 'Numbered', value: 'number' }
          ],
          marks: {
            decorators: [
              { title: 'Strong', value: 'strong' },
              { title: 'Emphasis', value: 'em' },
              { title: 'Code', value: 'code' }
            ]
          }
        },
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alternative text',
              validation: Rule => Rule.required()
            },
            {
              name: 'caption',
              type: 'string',
              title: 'Caption'
            }
          ]
        }
      ],
      description: 'Additional rich text content for the detail page'
    }),

    // ============================================
    // DISPLAY SETTINGS
    // ============================================
    defineField({
      name: 'featured',
      title: 'Show on Homepage',
      type: 'boolean',
      initialValue: true,
      description: 'Display this service on the homepage'
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      validation: Rule => Rule.required().min(0),
      description: 'Order of appearance (lower numbers appear first)'
    }),

    // ============================================
    // SEO & METADATA
    // ============================================
    defineField({
      name: 'seo',
      title: 'SEO Settings',
      type: 'object',
      fields: [
        {
          name: 'metaTitle',
          type: 'string',
          title: 'Meta Title',
          validation: Rule => Rule.max(60),
          description: 'Page title for search engines (50-60 characters)'
        },
        {
          name: 'metaDescription',
          type: 'text',
          title: 'Meta Description',
          rows: 3,
          validation: Rule => Rule.max(160),
          description: 'Description for search results (150-160 characters)'
        },
        {
          name: 'keywords',
          type: 'array',
          of: [{ type: 'string' }],
          title: 'SEO Keywords',
          description: 'Keywords for SEO (5-10 recommended)'
        },
        {
          name: 'ogImage',
          type: 'image',
          title: 'Social Share Image',
          description: 'Image for social media sharing (1200x630px recommended)',
          options: { hotspot: true }
        }
      ],
      options: {
        collapsible: true,
        collapsed: true
      }
    })
  ],

  // ============================================
  // PREVIEW CONFIGURATION
  // ============================================
  preview: {
    select: {
      title: 'title',
      subtitle: 'shortDescription',
      order: 'order',
      media: 'mainImage'
    },
    prepare({ title, subtitle, order, media }) {
      return {
        title: `${order}. ${title}`,
        subtitle: subtitle,
        media: media
      };
    }
  },

  // ============================================
  // ORDERINGS
  // ============================================
  orderings: [
    {
      title: 'Display Order',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }]
    },
    {
      title: 'Title A-Z',
      name: 'titleAsc',
      by: [{ field: 'title', direction: 'asc' }]
    },
    {
      title: 'Recently Updated',
      name: 'updatedDesc',
      by: [{ field: '_updatedAt', direction: 'desc' }]
    }
  ]
});

