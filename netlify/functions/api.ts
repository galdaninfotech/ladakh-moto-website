import { Handler } from '@netlify/functions';
import { Resend } from 'resend';
import fetch from 'node-fetch';

const resend = new Resend(process.env.RESEND_API_KEY);

async function verifyRecaptcha(token: string) {
  const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`,
  });

  const data = await response.json() as { success: boolean; score: number };
  return data.success && data.score >= 0.5; // Adjust threshold as needed
}

export const handler: Handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: 'Method not allowed' })
    };
  }

  try {
    const { name, email, message, recaptchaToken, honeypot } = JSON.parse(event.body || '{}');

    // Check honeypot
    if (honeypot) {
      return {
        statusCode: 400,
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
        body: JSON.stringify({
          success: false,
          message: 'reCAPTCHA verification failed'
        })
      };
    }

    const emailResponse = await resend.emails.send({
      from: 'info@ladakhmoto.com',
      to: 'galdaninfotech@gmail.com',
      subject: `Message from ${name} <${email}>`,
      text: message,
    });

    return {
      statusCode: 200,
      body: JSON.stringify({
        success: true,
        message: 'Email sent successfully',
        data: emailResponse
      })
    };
  } catch (error) {
    console.error('Error sending email:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        success: false,
        message: 'Error sending email',
        error: String(error)
      })
    };
  }
};