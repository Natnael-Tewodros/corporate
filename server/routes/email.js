import express from 'express';
import { sendContactEmail } from '../services/emailService.js';

const router = express.Router();

// Email sending endpoint
router.post('/send-email', async (req, res) => {
  try {
    const { firstName, lastName, email, subject, message } = req.body;

    // Validation
    if (!firstName || !lastName || !email || !message) {
      return res.status(400).json({
        success: false,
        error: 'Missing required fields: firstName, lastName, email, and message are required.'
      });
    }

    // Email validation
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        error: 'Invalid email address.'
      });
    }

    // Send email
    const data = await sendContactEmail({
      firstName,
      lastName,
      email,
      subject,
      message
    });

    res.json({
      success: true,
      message: 'Your message has been sent successfully! We\'ll get back to you soon.',
      data
    });
  } catch (error) {
    console.error('Server error:', error);
    
    // Check if it's the email service configuration error
    if (error.message.includes('Email service is not configured')) {
      return res.status(500).json({
        success: false,
        error: error.message
      });
    }

    res.status(500).json({
      success: false,
      error: error.message || 'Internal server error. Please try again later.'
    });
  }
});

export default router;

