// Lead Schema - Contact Form Submissions
// This schema stores all contact form submissions from the website
// Allows tracking and managing customer inquiries directly in Sanity Studio

import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'lead',
  title: 'Leads',
  type: 'document',
  
  // Icon for the document type in Sanity Studio
  icon: () => '📋',
  
  fields: [
    defineField({
      name: 'name',
      title: 'Full Name',
      type: 'string',
      description: 'Customer\'s full name',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'email',
      title: 'Email Address',
      type: 'string',
      description: 'Customer\'s email address',
      validation: Rule => Rule.required().email()
    }),
    defineField({
      name: 'phone',
      title: 'Phone Number',
      type: 'string',
      description: 'Customer\'s phone number',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'service',
      title: 'Service Interested In',
      type: 'string',
      description: 'Which service the customer is interested in',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'message',
      title: 'Message',
      type: 'text',
      description: 'Customer\'s message or inquiry',
      rows: 4,
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'source',
      title: 'Source',
      type: 'string',
      description: 'Where the lead came from (e.g., website, chatbot)',
      initialValue: 'website',
      options: {
        list: [
          { title: 'Website Contact Form', value: 'website' },
          { title: 'WhatsApp', value: 'whatsapp' },
          { title: 'Phone Call', value: 'phone' },
          { title: 'Email', value: 'email' },
          { title: 'Walk-in', value: 'walkin' },
          { title: 'Other', value: 'other' }
        ]
      }
    }),
    defineField({
      name: 'status',
      title: 'Lead Status',
      type: 'string',
      description: 'Current status of the lead',
      initialValue: 'new',
      options: {
        list: [
          { title: '🆕 New', value: 'new' },
          { title: '👀 Viewed', value: 'viewed' },
          { title: '📞 Contacted', value: 'contacted' },
          { title: '💬 In Discussion', value: 'discussion' },
          { title: '✅ Converted', value: 'converted' },
          { title: '❌ Lost', value: 'lost' },
          { title: '⏰ Follow Up', value: 'followup' }
        ],
        layout: 'dropdown'
      },
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'priority',
      title: 'Priority',
      type: 'string',
      description: 'Priority level of the lead',
      initialValue: 'medium',
      options: {
        list: [
          { title: '🔴 High', value: 'high' },
          { title: '🟡 Medium', value: 'medium' },
          { title: '🟢 Low', value: 'low' }
        ],
        layout: 'radio'
      }
    }),
    defineField({
      name: 'notes',
      title: 'Internal Notes',
      type: 'text',
      description: 'Private notes about this lead (not visible to customer)',
      rows: 3
    }),
    defineField({
      name: 'followUpDate',
      title: 'Follow Up Date',
      type: 'date',
      description: 'When to follow up with this lead',
    }),
    defineField({
      name: 'assignedTo',
      title: 'Assigned To',
      type: 'string',
      description: 'Team member assigned to handle this lead',
    }),
    defineField({
      name: 'submittedAt',
      title: 'Submitted At',
      type: 'datetime',
      description: 'When the form was submitted',
      validation: Rule => Rule.required(),
      readOnly: true // Make this field read-only in the Studio
    }),
    defineField({
      name: 'ipAddress',
      title: 'IP Address',
      type: 'string',
      description: 'IP address of the submitter (for security)',
      readOnly: true,
      hidden: true // Hide from default view but keep for security records
    }),
    defineField({
      name: 'userAgent',
      title: 'User Agent',
      type: 'string',
      description: 'Browser/device information',
      readOnly: true,
      hidden: true
    })
  ],
  
  // Preview configuration - How leads appear in the Studio list
  preview: {
    select: {
      title: 'name',
      subtitle: 'email',
      description: 'service',
      status: 'status'
    },
    prepare(selection: any) {
      const { title, subtitle, description, status } = selection;
      
      // Add status emoji to the preview
      const statusEmojis: Record<string, string> = {
        new: '🆕',
        viewed: '👀',
        contacted: '📞',
        discussion: '💬',
        converted: '✅',
        lost: '❌',
        followup: '⏰'
      };
      
      return {
        title: `${statusEmojis[status] || ''} ${title}`,
        subtitle: subtitle,
        description: description
      };
    }
  },
  
  // Initial ordering - Show newest leads first
  orderings: [
    {
      title: 'Newest First',
      name: 'newestFirst',
      by: [{ field: 'submittedAt', direction: 'desc' }]
    },
    {
      title: 'Oldest First',
      name: 'oldestFirst',
      by: [{ field: 'submittedAt', direction: 'asc' }]
    },
    {
      title: 'Status',
      name: 'status',
      by: [{ field: 'status', direction: 'asc' }]
    },
    {
      title: 'Priority',
      name: 'priority',
      by: [{ field: 'priority', direction: 'asc' }]
    }
  ]
});

