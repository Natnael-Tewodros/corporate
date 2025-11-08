import { Resend } from 'resend';
import { RESEND_API_KEY } from '../config/env.js';

// Initialize Resend
const resend = RESEND_API_KEY ? new Resend(RESEND_API_KEY) : null;

export const sendContactEmail = async ({ firstName, lastName, email, subject, message }) => {
  // Check if Resend API key is configured
  if (!RESEND_API_KEY || !resend) {
    throw new Error('Email service is not configured. Please contact the administrator.');
  }

  const fullName = `${firstName} ${lastName}`;
  const emailSubject = subject || 'No subject provided';

  // Send email using Resend
  // Note: 'from' must be a verified domain in Resend. In test mode, only 'onboarding@resend.dev' works.
  // The actual sender's email is shown in the email body and set as 'replyTo' so you can reply to them.
  const { data, error } = await resend.emails.send({
    from: 'onboarding@resend.dev', // Must be verified domain (test mode restriction)
    to: 'natnaeltewodros03@gmail.com', // Your verified email address (Resend test mode restriction)
    replyTo: email, // This allows you to reply directly to the person who submitted the form
    subject: `Contact Form from ${fullName} (${email}): ${emailSubject}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%); color: white; padding: 25px; border-radius: 8px; margin-bottom: 20px;">
          <h2 style="color: white; margin: 0 0 10px 0; font-size: 24px;">📧 New Contact Form Submission</h2>
          <p style="color: rgba(255,255,255,0.9); margin: 0; font-size: 14px;">From: <strong>${fullName}</strong> &lt;${email}&gt;</p>
        </div>
        
        <div style="margin-top: 20px; background-color: #f9fafb; padding: 20px; border-radius: 8px; border-left: 4px solid #4f46e5;">
          <h3 style="color: #4f46e5; margin-top: 0; margin-bottom: 15px;">Contact Information</h3>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #374151; width: 120px;">First Name:</td>
              <td style="padding: 8px 0; color: #111827;">${firstName}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #374151;">Last Name:</td>
              <td style="padding: 8px 0; color: #111827;">${lastName}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #374151;">Full Name:</td>
              <td style="padding: 8px 0; color: #111827;">${fullName}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #374151;">Email:</td>
              <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #4f46e5; text-decoration: none;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #374151;">Subject:</td>
              <td style="padding: 8px 0; color: #111827;">${emailSubject}</td>
            </tr>
          </table>
        </div>
        
        <div style="margin-top: 20px; padding: 20px; background-color: #ffffff; border: 1px solid #e5e7eb; border-radius: 8px;">
          <h3 style="color: #111827; margin-top: 0; margin-bottom: 15px;">Message:</h3>
          <div style="white-space: pre-wrap; line-height: 1.6; color: #374151; font-size: 15px;">${message.replace(/\n/g, '<br>')}</div>
        </div>
        
        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 12px;">
          <p style="margin: 5px 0;">This email was sent from the contact form on your website.</p>
          <p style="margin: 5px 0;"><strong>Reply directly to this email</strong> to respond to ${fullName} at ${email}.</p>
        </div>
      </div>
    `,
    text: `
📧 NEW CONTACT FORM SUBMISSION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
From: ${fullName} <${email}>
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

CONTACT INFORMATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

First Name: ${firstName}
Last Name: ${lastName}
Full Name: ${fullName}
Email: ${email}
Subject: ${emailSubject}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
MESSAGE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

${message}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

This email was sent from the contact form on your website.
Reply directly to this email to respond to ${fullName} at ${email}.
    `,
  });

  if (error) {
    console.error('Resend error:', error);
    throw new Error(error.message || 'Failed to send email. Please try again later.');
  }

  console.log('Email sent successfully:', data);
  return data;
};

