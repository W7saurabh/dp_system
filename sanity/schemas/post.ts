// Blog Post Schema for D P System
// Content marketing and SEO blog posts

import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'post',
  title: 'Blog Posts',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      },
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      rows: 4,
      validation: Rule => Rule.required().max(200),
      description: 'Short summary for post preview and SEO'
    }),
    defineField({
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: { hotspot: true },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
          validation: Rule => Rule.required()
        }
      ],
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'body',
      title: 'Body Content',
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
          marks: {
            decorators: [
              { title: 'Strong', value: 'strong' },
              { title: 'Emphasis', value: 'em' },
              { title: 'Code', value: 'code' }
            ],
            annotations: [
              {
                title: 'URL',
                name: 'link',
                type: 'object',
                fields: [
                  {
                    title: 'URL',
                    name: 'href',
                    type: 'url'
                  }
                ]
              }
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
              title: 'Alternative text'
            },
            {
              name: 'caption',
              type: 'string',
              title: 'Caption'
            }
          ]
        },
        {
          type: 'code',
          options: {
            language: 'javascript',
            languageAlternatives: [
              { title: 'JavaScript', value: 'javascript' },
              { title: 'TypeScript', value: 'typescript' },
              { title: 'HTML', value: 'html' },
              { title: 'CSS', value: 'css' },
              { title: 'Python', value: 'python' }
            ]
          }
        }
      ],
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'string',
      initialValue: 'D P System Team'
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
      validation: Rule => Rule.required(),
      description: 'Date and time of publication'
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Tech News', value: 'news' },
          { title: 'Tutorials & Guides', value: 'tutorial' },
          { title: 'Product Reviews', value: 'review' },
          { title: 'Company Updates', value: 'company' },
          { title: 'Tips & Tricks', value: 'tips' },
          { title: 'Industry Trends', value: 'trends' }
        ]
      },
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags'
      }
    }),
    defineField({
      name: 'featured',
      title: 'Featured Post',
      type: 'boolean',
      initialValue: false,
      description: 'Show in featured section'
    }),
    defineField({
      name: 'seo',
      title: 'SEO Settings',
      type: 'object',
      fields: [
        {
          name: 'metaTitle',
          type: 'string',
          title: 'Meta Title',
          validation: Rule => Rule.max(60)
        },
        {
          name: 'metaDescription',
          type: 'text',
          title: 'Meta Description',
          rows: 3,
          validation: Rule => Rule.max(160)
        },
        {
          name: 'keywords',
          type: 'array',
          of: [{ type: 'string' }],
          title: 'Focus Keywords'
        }
      ],
      options: {
        collapsible: true,
        collapsed: true
      }
    })
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author',
      media: 'mainImage',
      category: 'category'
    },
    prepare({ title, author, media, category }) {
      return {
        title: title,
        subtitle: `${category} by ${author}`,
        media: media
      };
    }
  },
  orderings: [
    {
      title: 'Published Date, New',
      name: 'publishedDesc',
      by: [{ field: 'publishedAt', direction: 'desc' }]
    },
    {
      title: 'Published Date, Old',
      name: 'publishedAsc',
      by: [{ field: 'publishedAt', direction: 'asc' }]
    }
  ]
});

