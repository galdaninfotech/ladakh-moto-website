import { Handler } from '@netlify/functions';
import { Resend } from 'resend';

const resend = new Resend('re_QK8RviMo_Fc7ALxvoV3WK4KjSksxDfqES');

export const handler: Handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: 'Method not allowed' })
    };
  }

  try {
    const { name, email, message } = JSON.parse(event.body || '{}');

    if (!name || !email || !message) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          success: false,
          message: 'All fields are required'
        })
      };
    }

    const emailResponse = await resend.emails.send({
      from: 'info@ladakhmoto.com',
      to: 'galdaninfotech@gmail.com',
      subject: `Message from ${name}`,
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