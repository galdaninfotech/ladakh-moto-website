import { Handler } from '@netlify/functions';
import nodemailer from 'nodemailer';
import fetch from 'node-fetch';

// Check if required environment variables are set
const SMTP_HOST = process.env.SMTP_HOST;
const SMTP_PORT = process.env.SMTP_PORT;
const SMTP_USER = process.env.SMTP_USER;
const SMTP_PASS = process.env.SMTP_PASS;
const VITE_RECAPTCHA_SECRET_KEY = process.env.VITE_RECAPTCHA_SECRET_KEY;

if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS || !VITE_RECAPTCHA_SECRET_KEY) {
  console.error('Missing required environment variables');
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
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS'
  };

  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 200, headers, body: '' };
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

    const { tourName, tourDate, travelMode, noOfPerson, email, phone, recaptchaToken, honeypot } = JSON.parse(event.body);

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
      const port = parseInt(SMTP_PORT || '587', 10);
      const transporter = nodemailer.createTransport({
        host: SMTP_HOST,
        port: port,
        secure: port === 465,
        auth: {
          user: SMTP_USER,
          pass: SMTP_PASS,
        },
      });

      const emailResponse = await transporter.sendMail({
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

      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({
          success: true,
          message: '👍 Booking request sent successfully! We will send you confirmation shortly.',
          data: emailResponse
        })
      };

    } catch (error) {
      console.error('SMTP error:', error);
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({
          success: false,
          message: 'Failed to send email'
        })
      };
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