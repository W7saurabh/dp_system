// Server-Side Sanity Client Configuration
// This client has WRITE permissions and should ONLY be used on the server
// NEVER import this file in client components or expose the write token to the browser

import { createClient } from 'next-sanity';

/**
 * Server-side Sanity client with write permissions
 * 
 * This client is used for:
 * - Creating new documents (e.g., leads from contact forms)
 * - Updating existing documents
 * - Deleting documents
 * 
 * IMPORTANT SECURITY NOTES:
 * - This client uses a WRITE token which must be kept secret
 * - Only use this client in API routes or server components
 * - Never expose the write token to the browser
 * - The write token should be stored in environment variables
 * 
 * Setup Instructions:
 * 1. Go to https://www.sanity.io/manage
 * 2. Select your project
 * 3. Go to API → Tokens
 * 4. Create a new token with "Editor" or "Write" permissions
 * 5. Add the token to your .env.local file as SANITY_WRITE_TOKEN
 * 6. Add the same token to your Vercel environment variables
 */

export const sanityServerClient = createClient({
  // Project ID from your Sanity project settings
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '8fax2jc9',
  
  // Dataset name (usually 'production')
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  
  // API version - Use a fixed date to ensure consistent behavior
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-01-01',
  
  // NEVER use CDN for write operations
  // CDN is only for read operations and would cause stale data issues
  useCdn: false,
  
  // Write token - This is the SECRET token that allows creating/updating documents
  // This token MUST be kept secure and never exposed to the client
  token: process.env.SANITY_WRITE_TOKEN,
  
  // Optional: Set to true to see detailed logs during development
  // Set to false in production
  // perspective: 'published',
});

/**
 * Type-safe helper function to create a lead document in Sanity
 * 
 * @param leadData - The lead data to store
 * @returns The created document with Sanity metadata (_id, _createdAt, etc.)
 * 
 * Example usage:
 * ```typescript
 * const lead = await createLead({
 *   name: 'John Doe',
 *   email: 'john@example.com',
 *   phone: '+919876543210',
 *   service: 'Custom PC Building',
 *   message: 'I need a gaming PC',
 *   source: 'website',
 *   submittedAt: new Date().toISOString()
 * });
 * ```
 */
export async function createLead(leadData: {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  source?: string;
  submittedAt: string;
  ipAddress?: string;
  userAgent?: string;
}) {
  try {
    // Validate that we have a write token
    if (!process.env.SANITY_WRITE_TOKEN) {
      throw new Error(
        'SANITY_WRITE_TOKEN is not defined. Please add it to your environment variables.'
      );
    }

    // Create the lead document in Sanity
    const leadDoc = {
      _type: 'lead',
      name: leadData.name.trim(),
      email: leadData.email.trim().toLowerCase(),
      phone: leadData.phone.trim(),
      service: leadData.service.trim(),
      message: leadData.message.trim(),
      source: leadData.source || 'website',
      status: 'new', // Default status for new leads
      priority: 'medium', // Default priority
      submittedAt: leadData.submittedAt,
      ipAddress: leadData.ipAddress || null,
      userAgent: leadData.userAgent || null,
    };

    // Create the document in Sanity
    const createdLead = await sanityServerClient.create(leadDoc);

    console.log('✅ Lead created successfully in Sanity:', createdLead._id);

    return {
      success: true,
      leadId: createdLead._id,
      data: createdLead
    };

  } catch (error: any) {
    console.error('❌ Error creating lead in Sanity:', error);
    
    // Provide helpful error messages
    if (error.message?.includes('Insufficient permissions')) {
      throw new Error(
        'Sanity write token has insufficient permissions. Please check your token permissions.'
      );
    }
    
    if (error.message?.includes('SANITY_WRITE_TOKEN')) {
      throw new Error(
        'Sanity write token is missing. Please add SANITY_WRITE_TOKEN to your environment variables.'
      );
    }
    
    throw error;
  }
}

/**
 * Helper function to update a lead's status
 * Useful for marking leads as viewed, contacted, converted, etc.
 * 
 * @param leadId - The Sanity document ID of the lead
 * @param status - The new status
 * @param notes - Optional notes to add
 * 
 * Example usage:
 * ```typescript
 * await updateLeadStatus('lead-id-123', 'contacted', 'Called customer, they will visit tomorrow');
 * ```
 */
export async function updateLeadStatus(
  leadId: string,
  status: string,
  notes?: string
) {
  try {
    const updates: any = { status };
    
    if (notes) {
      updates.notes = notes;
    }

    const updatedLead = await sanityServerClient
      .patch(leadId)
      .set(updates)
      .commit();

    console.log('✅ Lead status updated:', leadId, '→', status);

    return {
      success: true,
      data: updatedLead
    };

  } catch (error) {
    console.error('❌ Error updating lead status:', error);
    throw error;
  }
}

