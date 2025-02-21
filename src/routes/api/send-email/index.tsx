import { RequestHandler } from '@builder.io/qwik-city';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

async function validateRecaptcha(token: string): Promise<boolean> {
    try {
      const secretKey = process.env.VITE_RECAPTCHA_SECRET_KEY;
      const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          secret: secretKey!,
          response: token
        }).toString()
      });
  
      const data = await response.json() as { success: boolean; score: number };
      console.log('reCAPTCHA verification response:', data);
      
      return data.success && data.score >= 0.5;
    } catch (error) {
      console.error('reCAPTCHA verification error:', error);
      return false;
    }
  }

export const onPost: RequestHandler = async ({ parseBody, json }) => {
  try {
    const body = await parseBody();
    const { name, email, message, startTime, honeypot, recaptchaToken } = body as {
      name: string;
      email: string;
      message: string;
      startTime: number;
      honeypot: string;
      recaptchaToken: string;
    };

    // Check if request is too fast (bot-like)
    const minProcessingTime = 2000; // 2 seconds
    const submissionTime = Date.now() - startTime;
    
    if (submissionTime < minProcessingTime) {
      json(400, {
        success: false,
        message: 'Submission too fast'
      });
      return;
    }

    // Check for honeypot
    if (honeypot) {
      json(400, {
        success: false,
        message: 'Invalid submission'
      });
      return;
    }

    // Validate reCAPTCHA token
    if (!await validateRecaptcha(recaptchaToken)) {
      json(400, {
        success: false,
        message: 'Invalid captcha!'
      });
      return;
    }

    if (!name || !email || !message) {
      json(400, {
        success: false,
        message: 'All fields are required'
      });
      return;
    }

    const emailResponse = await resend.emails.send({
      from: 'contact-form@ladakhmoto.com',
      to: 'galdaninfotech@gmail.com',
      subject: `Message from ${name} <${email}>`,
      text: message,
    });

    json(200, {
      success: true,
      message: '👍 Message sent successfully! We will get back to you shortly.',
      data: emailResponse
    });
  } catch (error) {
    console.error('Error sending email:', error);
    json(500, {
      success: false,
      message: '😕 Hmm... that did not work. Please try again in a moment or contact us directly.',
      error: String(error)
    });
  }
};