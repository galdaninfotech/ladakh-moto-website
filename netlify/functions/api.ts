import { Handler } from '@netlify/functions';
import { Resend } from 'resend';
import fetch from 'node-fetch';

// Check if required environment variables are set
const RESEND_API_KEY = process.env.RESEND_API_KEY;
const VITE_RECAPTCHA_SECRET_KEY = process.env.VITE_RECAPTCHA_SECRET_KEY;

if (!RESEND_API_KEY || !VITE_RECAPTCHA_SECRET_KEY) {
  console.error('Missing required environment variables');
}

const resend = new Resend(RESEND_API_KEY);

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

    const { name, email, message, recaptchaToken, honeypot } = JSON.parse(event.body);

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

    // Verify required fields
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
      const emailResponse = await resend.emails.send({
        from: 'info@ladakhmoto.com',
        to: 'galdaninfotech@gmail.com',
        subject: `Message from ${name} <${email}>`,
        text: message,
      });

      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({
          success: true,
          message: '👍 Message sent successfully! We will get back to you shortly.',
          data: emailResponse
        })
      };
    } catch (emailError) {
      console.error('Resend API error:', emailError);
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