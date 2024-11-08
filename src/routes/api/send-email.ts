import { RequestHandler } from '@builder.io/qwik-city';

import { Resend } from 'resend';
const resend = new Resend('re_A3gx4BcE_Gz6JPtno8y63q86ZLK5nkEgG');

export const onPost: RequestHandler = async ({ request, json }) => {
  const { name, email, message } = await request.json();

  console.log(name);

  if (!name || !email || !message) {
    throw json(400, { message: 'All fields are required' });
  }

  try {
    await resend.emails.send({
      from: 'you@example.com',
      to: 'galdaninfotech@gmail.com',
      // replyTo: 'you@example.com',
      subject: 'hello world',
      text: 'it works!',
    });

    throw json(200, { message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    throw json(500, { message: 'Error sending email' });
  }
};
