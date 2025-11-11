// Enhanced Product Schema for D P System
// Comprehensive structure for IT products with detailed specifications and SEO

import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'product',
  title: 'Products',
  type: 'document',
  fields: [
    // ============================================
    // BASIC INFORMATION
    // ============================================
    defineField({
      name: 'title',
      title: 'Product Title',
      type: 'string',
      validation: Rule => Rule.required().min(5).max(100),
      description: 'Name of the product (e.g., Custom Gaming PC)'
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
      name: 'description',
      title: 'Short Description',
      type: 'text',
      rows: 4,
      validation: Rule => Rule.required().max(200),
      description: 'Brief description for product cards (max 200 characters)'
    }),
    defineField({
      name: 'fullDescription',
      title: 'Full Description',
      type: 'text',
      rows: 6,
      validation: Rule => Rule.required().min(100),
      description: 'Detailed description for the product detail page'
    }),
    defineField({
      name: 'category',
      title: 'Product Category',
      type: 'string',
      options: {
        list: [
          { title: 'Custom PCs', value: 'custom-pc' },
          { title: 'Laptops', value: 'laptop' },
          { title: 'Monitors', value: 'monitor' },
          { title: 'Printers', value: 'printer' },
          { title: 'CCTV', value: 'cctv' },
          { title: 'Storage (HDD/SSD/NVMe)', value: 'storage' },
          { title: 'RAM', value: 'ram' },
          { title: 'Networking', value: 'networking' },
          { title: 'Peripherals', value: 'peripheral' },
          { title: 'Gaming Systems', value: 'gaming' },
          { title: 'Servers & NAS', value: 'server' }
        ]
      },
      validation: Rule => Rule.required(),
      description: 'Category for filtering and organization'
    }),
    defineField({
      name: 'subCategory',
      title: 'Sub-Category',
      type: 'string',
      description: 'Optional sub-category (e.g., "Gaming Laptops", "Office PCs")'
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
          { title: 'TV/Monitor', value: 'FaTv' },
          { title: 'Printer', value: 'FaPrint' },
          { title: 'Video/CCTV', value: 'FaVideo' },
          { title: 'Hard Drive', value: 'FaHdd' },
          { title: 'SSD', value: 'FaSave' },
          { title: 'Microchip/RAM', value: 'FaMicrochip' },
          { title: 'Ethernet/Cable', value: 'FaEthernet' },
          { title: 'Keyboard', value: 'FaKeyboard' },
          { title: 'Mouse', value: 'FaMouse' },
          { title: 'Gamepad', value: 'FaGamepad' },
          { title: 'Server', value: 'FaServer' },
          { title: 'Router', value: 'FaNetworkWired' },
          { title: 'Memory', value: 'FaMemory' }
        ]
      },
      validation: Rule => Rule.required(),
      description: 'Icon displayed on product card'
    }),
    defineField({
      name: 'mainImage',
      title: 'Main Product Image',
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
      validation: Rule => Rule.required(),
      description: 'Main product image (recommended: 1200x800px)'
    }),
    defineField({
      name: 'gallery',
      title: 'Product Gallery',
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
      description: 'Additional product images'
    }),

    // ============================================
    // PRODUCT DETAILS
    // ============================================
    defineField({
      name: 'features',
      title: 'Key Features',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Quick feature list for product cards (3-6 items recommended)'
    }),
    defineField({
      name: 'specifications',
      title: 'Technical Specifications',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          {
            name: 'label',
            type: 'string',
            title: 'Specification Name',
            validation: Rule => Rule.required(),
            description: 'e.g., Processor, RAM, Storage'
          },
          {
            name: 'value',
            type: 'string',
            title: 'Specification Value',
            validation: Rule => Rule.required(),
            description: 'e.g., Intel i7-12700K, 16GB DDR4'
          }
        ],
        preview: {
          select: {
            title: 'label',
            subtitle: 'value'
          }
        }
      }],
      description: 'Detailed technical specifications'
    }),
    defineField({
      name: 'benefits',
      title: 'Product Benefits',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Benefits customers get from this product'
    }),
    defineField({
      name: 'useCases',
      title: 'Use Cases',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Common use cases or applications'
    }),
    defineField({
      name: 'includedItems',
      title: 'What\'s Included',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Items included in the package'
    }),

    // ============================================
    // PRICING & AVAILABILITY
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
              { title: 'Price Range', value: 'range' },
              { title: 'Contact for Quote', value: 'quote' }
            ]
          }
        },
        {
          name: 'amount',
          type: 'string',
          title: 'Price',
          description: 'e.g., ₹45,000 or ₹25,000 - ₹35,000'
        },
        {
          name: 'currency',
          type: 'string',
          title: 'Currency',
          initialValue: 'INR',
          options: {
            list: ['INR', 'USD']
          }
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
      name: 'priceRange',
      title: 'Display Price Range (Legacy)',
      type: 'string',
      description: 'For backward compatibility: e.g., ₹25,000 - ₹35,000'
    }),
    defineField({
      name: 'availability',
      title: 'Availability Status',
      type: 'string',
      options: {
        list: [
          { title: 'In Stock', value: 'in-stock' },
          { title: 'Made to Order', value: 'made-to-order' },
          { title: 'Pre-Order', value: 'pre-order' },
          { title: 'Out of Stock', value: 'out-of-stock' },
          { title: 'Contact Us', value: 'contact' }
        ]
      },
      initialValue: 'in-stock'
    }),
    defineField({
      name: 'warranty',
      title: 'Warranty Information',
      type: 'string',
      description: 'e.g., "1 Year Warranty", "3 Years Extended Warranty Available"'
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
    // RELATED PRODUCTS
    // ============================================
    defineField({
      name: 'relatedProducts',
      title: 'Related Products',
      type: 'array',
      of: [{
        type: 'reference',
        to: [{ type: 'product' }]
      }],
      description: 'Related or complementary products'
    }),

    // ============================================
    // DISPLAY SETTINGS
    // ============================================
    defineField({
      name: 'featured',
      title: 'Featured Product',
      type: 'boolean',
      initialValue: false,
      description: 'Display on homepage featured section'
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      validation: Rule => Rule.min(0),
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
      subtitle: 'category',
      media: 'mainImage',
      order: 'order'
    },
    prepare({ title, subtitle, media, order }) {
      return {
        title: order ? `${order}. ${title}` : title,
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
      title: 'Category',
      name: 'categoryAsc',
      by: [{ field: 'category', direction: 'asc' }]
    },
    {
      title: 'Recently Updated',
      name: 'updatedDesc',
      by: [{ field: '_updatedAt', direction: 'desc' }]
    }
  ]
});

