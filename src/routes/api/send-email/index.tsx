import { RequestHandler } from '@builder.io/qwik-city';
import { Resend } from 'resend';

const resend = new Resend('re_QK8RviMo_Fc7ALxvoV3WK4KjSksxDfqES');

export const onPost: RequestHandler = async ({ parseBody, json }) => {
  try {
    const body = await parseBody();
    const { name, email, message } = body as {
      name: string;
      email: string;
      message: string;
    };

    if (!name || !email || !message) {
      json(400, {
        success: false,
        message: 'All fields are required'
      });
      return;
    }

    const emailResponse = await resend.emails.send({
      from: 'info@ladakhmoto.com',
      to: 'galdaninfotech@gmail.com',
      subject: `Message from ${name}`,
      text: message,
    });

    json(200, {
      success: true,
      message: 'Email sent successfully',
      data: emailResponse
    });
  } catch (error) {
    console.error('Error sending email:', error);
    json(500, {
      success: false,
      message: 'Error sending email',
      error: String(error)
    });
  }
};