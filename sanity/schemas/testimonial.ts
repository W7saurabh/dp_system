// Testimonial Schema for D P System
// Customer reviews and feedback

import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'testimonial',
  title: 'Testimonials',
  type: 'document',
  fields: [
    defineField({
      name: 'customerName',
      title: 'Customer Name',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'customerRole',
      title: 'Customer Role/Title',
      type: 'string',
      description: 'e.g., Business Owner, College Student, IT Manager'
    }),
    defineField({
      name: 'company',
      title: 'Company/Organization',
      type: 'string',
      description: 'Optional: Company name or school'
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
      description: 'e.g., Rajkot',
      initialValue: 'Rajkot'
    }),
    defineField({
      name: 'customerImage',
      title: 'Customer Photo',
      type: 'image',
      options: { hotspot: true },
      description: 'Optional: Customer photo for testimonial'
    }),
    defineField({
      name: 'testimonial',
      title: 'Testimonial Text',
      type: 'text',
      rows: 4,
      validation: Rule => Rule.required().max(300),
      description: 'Keep it concise and impactful'
    }),
    defineField({
      name: 'rating',
      title: 'Rating',
      type: 'number',
      validation: Rule => Rule.required().min(1).max(5),
      initialValue: 5,
      description: 'Star rating out of 5'
    }),
    defineField({
      name: 'date',
      title: 'Review Date',
      type: 'string',
      description: 'e.g., October 2024'
    }),
    defineField({
      name: 'featured',
      title: 'Show on Homepage',
      type: 'boolean',
      initialValue: true,
      description: 'Display this testimonial on homepage'
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
      title: 'customerName',
      subtitle: 'testimonial',
      media: 'customerImage',
      rating: 'rating'
    },
    prepare({ title, subtitle, media, rating }) {
      return {
        title: `${title} (${rating}⭐)`,
        subtitle: subtitle?.substring(0, 80) + '...',
        media: media
      };
    }
  }
});

