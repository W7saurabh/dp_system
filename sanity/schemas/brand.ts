// Brand Schema for D P System
// Partner brands and manufacturers

import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'brand',
  title: 'Brands',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Brand Name',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'logo',
      title: 'Brand Logo',
      type: 'image',
      options: { hotspot: true },
      validation: Rule => Rule.required(),
      description: 'Upload brand logo (preferably PNG with transparent background)'
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 2,
      description: 'Brief description of the brand'
    }),
    defineField({
      name: 'website',
      title: 'Website URL',
      type: 'url',
      description: 'Official brand website'
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Processors', value: 'processor' },
          { title: 'Graphics Cards', value: 'graphics' },
          { title: 'Laptops & Computers', value: 'computers' },
          { title: 'Motherboards', value: 'motherboards' },
          { title: 'Peripherals', value: 'peripherals' },
          { title: 'Storage', value: 'storage' },
          { title: 'Printers', value: 'printers' },
          { title: 'Networking', value: 'networking' }
        ]
      }
    }),
    defineField({
      name: 'featured',
      title: 'Show on Homepage',
      type: 'boolean',
      initialValue: true,
      description: 'Display this brand on homepage'
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Order of appearance (lower numbers appear first)'
    })
  ],
  preview: {
    select: {
      title: 'name',
      media: 'logo',
      category: 'category'
    },
    prepare({ title, media, category }) {
      return {
        title: title,
        subtitle: category || 'Uncategorized',
        media: media
      };
    }
  }
});

