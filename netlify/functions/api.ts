import { Handler } from '@netlify/functions';
import fetch from 'node-fetch';
import { sendEmail } from '../../src/utils/email';

// Check if required environment variables are set
const VITE_RECAPTCHA_SECRET_KEY = process.env.VITE_RECAPTCHA_SECRET_KEY;

if (!VITE_RECAPTCHA_SECRET_KEY) {
  console.error('Missing required environment variable: VITE_RECAPTCHA_SECRET_KEY');
}

async function verifyRecaptcha(token: string): Promise<boolean> {
  try {
    const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        secret: VITE_RECAPTCHA_SECRET_KEY!,
        response: token
      }).toString()
    });

    if (!response.ok) {
      console.error('reCAPTCHA API error:', response.status, await response.text());
      return false;
    }

    const data = await response.json() as { success: boolean; score: number };
    console.log('reCAPTCHA verification response:', data);
    
    return data.success && data.score >= 0.5;
  } catch (error) {
    console.error('reCAPTCHA verification error:', error);
    return false;
  }
}

export const handler: Handler = async (event) => {
  // Add CORS headers
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS'
  };

  // Handle preflight requests
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: ''
    };
  }

  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ success: false, message: 'Method not allowed' })
    };
  }

  try {
    if (!event.body) {
      throw new Error('No request body');
    }

    const body = JSON.parse(event.body);
    const { honeypot, recaptchaToken } = body;

    // Check honeypot
    if (honeypot) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({
          success: false,
          message: 'Invalid submission'
        })
      };
    }

    // Determine request type
    const isBooking = body.tourName !== undefined;
    
    // Validate required fields
    if (isBooking) {
        const { tourName, tourDate, travelMode, email, phone } = body;
        if (!tourName || !tourDate || !travelMode || !email || !phone || !recaptchaToken) {
            return {
                statusCode: 400,
                headers,
                body: JSON.stringify({
                    success: false,
                    message: 'All required fields must be filled!'
                })
            };
        }
    } else {
        const { name, email, message } = body;
        if (!name || !email || !message || !recaptchaToken) {
            return {
                statusCode: 400,
                headers,
                body: JSON.stringify({
                    success: false,
                    message: 'All fields are required'
                })
            };
        }
    }

    // Verify reCAPTCHA
    const isHuman = await verifyRecaptcha(recaptchaToken);
    if (!isHuman) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({
          success: false,
          message: 'reCAPTCHA verification failed'
        })
      };
    }

    try {
      let emailResponse;
      let successMessage;

      if (isBooking) {
        const { tourName, tourDate, travelMode, noOfPerson, email, phone } = body;
        emailResponse = await sendEmail({
            from: 'Booking Form <booking@ladakhmoto.com>',
            to: 'info@ladakhmoto.com',
            replyTo: email,
            subject: `New Booking Request - ${email}`,
            html: `
              <h2>New Booking Request</h2>
              <p><strong>Tour Name:</strong> ${tourName}</p>
              <p><strong>Tour Date:</strong> ${tourDate}</p>
              <p><strong>Travel Mode:</strong> ${travelMode}</p>
              <p><strong>Number of Persons:</strong> ${noOfPerson}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Phone Number:</strong> ${phone}</p>
            `,
        });
        successMessage = '👍 Booking request sent successfully! We will send you confirmation shortly.';
      } else {
        const { name, email, message } = body;
        emailResponse = await sendEmail({
            from: 'Contact Form <contact-form@ladakhmoto.com>',
            to: 'info@ladakhmoto.com',
            replyTo: `${name} <${email}>`,
            subject: `Message from ${name} <${email}>`,
            text: message,
        });
        successMessage = '👍 Message sent successfully! We will get back to you shortly.';
      }

      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({
          success: true,
          message: successMessage,
          data: emailResponse
        })
      };
    } catch (emailError) {
      console.error('SMTP error:', emailError);
      throw new Error('😕 Hmm... that did not work. Please try again in a moment or contact us directly.');
    }

  } catch (error) {
    console.error('Server error:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({
        success: false,
        message: error instanceof Error ? error.message : 'Internal server error'
      })
    };
  }
};