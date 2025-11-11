// API Route for Contact Form Submission
// Handles form validation, stores leads in Sanity CMS, and optionally sends email notifications
// This is a server-side only route with write permissions to Sanity

import { NextRequest, NextResponse } from 'next/server';
import { validateContactForm } from '@/lib/validation';
import { createLead } from '@/lib/sanity.server';
import { ContactFormData } from '@/types';

/**
 * POST Handler - Process contact form submissions
 * 
 * Security Features Implemented:
 * 1. Server-side validation
 * 2. Honeypot field check (bot detection)
 * 3. Input sanitization
 * 4. IP address logging (for security)
 * 5. Rate limiting ready (can be added via Vercel rate limit or custom implementation)
 * 
 * Flow:
 * 1. Validate form data (required fields, format validation)
 * 2. Check honeypot field (if filled, it's a bot)
 * 3. Sanitize inputs (trim, lowercase email)
 * 4. Store lead in Sanity CMS
 * 5. Optionally send email notification
 * 6. Return success response
 */
export async function POST(request: NextRequest) {
  try {
    // Parse request body
    const body: ContactFormData & { website?: string } = await request.json();

    // ============================================
    // SECURITY CHECK: Honeypot Field
    // ============================================
    // The 'website' field is hidden from real users but visible to bots
    // If it's filled, it's likely a bot submission - reject it silently
    if (body.website && body.website.trim() !== '') {
      console.warn('🤖 Bot detected via honeypot field. Rejecting submission.');
      
      // Return success to the bot so it doesn't know we detected it
      // This prevents the bot from adapting its strategy
      return NextResponse.json(
        { 
          success: true, 
          message: 'Thank you for contacting us! We\'ll get back to you soon.' 
        },
        { status: 200 }
      );
    }

    // ============================================
    // VALIDATION: Form Data
    // ============================================
    const validation = validateContactForm(body);
    
    if (!validation.isValid) {
      console.warn('❌ Form validation failed:', validation.errors);
      return NextResponse.json(
        { error: 'Please check your form and try again.', errors: validation.errors },
        { status: 400 }
      );
    }

    // ============================================
    // SECURITY: Capture Request Metadata
    // ============================================
    // Get IP address for security logging (helps identify spam patterns)
    const ipAddress = 
      request.headers.get('x-forwarded-for')?.split(',')[0] ||
      request.headers.get('x-real-ip') ||
      'unknown';
    
    // Get user agent (browser/device info)
    const userAgent = request.headers.get('user-agent') || 'unknown';

    // ============================================
    // SANITIZATION: Clean Input Data
    // ============================================
    // Trim whitespace and normalize data
    const sanitizedData = {
      name: body.name.trim(),
      email: body.email.trim().toLowerCase(),
      phone: body.phone.trim(),
      service: body.service.trim(),
      message: body.message.trim(),
    };

    // ============================================
    // STORE LEAD: Save to Sanity CMS
    // ============================================
    try {
      const leadResult = await createLead({
        ...sanitizedData,
        source: 'website',
        submittedAt: new Date().toISOString(),
        ipAddress,
        userAgent,
      });

      console.log('✅ Lead saved to Sanity:', leadResult.leadId);

      // ============================================
      // OPTIONAL: Send Email Notification
      // ============================================
      // Uncomment this section when you configure an email service
      /*
      try {
    const { Resend } = require('resend');
    const resend = new Resend(process.env.RESEND_API_KEY);
    
    await resend.emails.send({
      from: process.env.FROM_EMAIL || 'contact@dpsystem.com',
          to: process.env.TO_EMAIL || 'dpromptsystems@gmail.com',
          subject: `🆕 New Lead: ${sanitizedData.service} - ${sanitizedData.name}`,
      html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <h2 style="color: #dc2626; border-bottom: 2px solid #dc2626; padding-bottom: 10px;">
                New Contact Form Submission
              </h2>
              
              <div style="background: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <h3 style="margin-top: 0;">Customer Information:</h3>
                <p><strong>Name:</strong> ${sanitizedData.name}</p>
                <p><strong>Email:</strong> <a href="mailto:${sanitizedData.email}">${sanitizedData.email}</a></p>
                <p><strong>Phone:</strong> <a href="tel:${sanitizedData.phone}">${sanitizedData.phone}</a></p>
                <p><strong>Service Interested:</strong> ${sanitizedData.service}</p>
              </div>
              
              <div style="background: #ffffff; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;">
                <h3 style="margin-top: 0;">Message:</h3>
                <p style="white-space: pre-wrap;">${sanitizedData.message}</p>
              </div>
              
              <div style="margin-top: 20px; padding: 15px; background: #fef3c7; border-radius: 8px;">
                <p style="margin: 0;"><strong>⏰ Action Required:</strong> Please follow up with this lead within 24 hours.</p>
              </div>
              
              <div style="margin-top: 20px; font-size: 12px; color: #6b7280;">
                <p>Lead ID: ${leadResult.leadId}</p>
                <p>Submitted: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}</p>
                <p>View in Sanity: <a href="https://dpsystem.sanity.studio/desk/lead;${leadResult.leadId}">Open Lead</a></p>
              </div>
            </div>
      `
    });
        
        console.log('📧 Email notification sent successfully');
      } catch (emailError) {
        // Log email error but don't fail the request
        // The lead is already saved in Sanity, which is most important
        console.error('⚠️ Email notification failed (lead still saved):', emailError);
      }
      */

      // ============================================
      // SUCCESS RESPONSE
      // ============================================
    return NextResponse.json(
      { 
        success: true, 
          leadId: leadResult.leadId, // Return the lead ID for reference
          message: 'Thank you for contacting us! We\'ll get back to you within 24 hours.' 
      },
      { status: 200 }
    );

    } catch (sanityError: any) {
      // Handle Sanity-specific errors
      console.error('❌ Error saving lead to Sanity:', sanityError);
      
      // Check if it's a permission error
      if (sanityError.message?.includes('Insufficient permissions') || 
          sanityError.message?.includes('SANITY_WRITE_TOKEN')) {
        return NextResponse.json(
          { 
            error: 'Server configuration error. Please contact support.',
            details: 'Sanity write permissions not configured correctly.'
          },
          { status: 500 }
        );
      }
      
      // Generic Sanity error
      return NextResponse.json(
        { error: 'Failed to save your request. Please try again or contact us directly.' },
        { status: 500 }
      );
    }

  } catch (error: any) {
    // Handle unexpected errors
    console.error('❌ Unexpected error in contact form:', error);
    return NextResponse.json(
      { 
        error: 'An unexpected error occurred. Please try again later or contact us directly.',
        details: process.env.NODE_ENV === 'development' ? error.message : undefined
      },
      { status: 500 }
    );
  }
}

// ============================================
// GET Handler - Not Allowed
// ============================================
export async function GET() {
  return NextResponse.json(
    { error: 'Method not allowed. This endpoint only accepts POST requests.' },
    { status: 405 }
  );
}

