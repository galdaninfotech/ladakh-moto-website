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
        const { 
            tourName, 
            tourDate, 
            travelMode, 
            noOfPerson, 
            email, 
            phone, 
            honeypot, 
            recaptchaToken 
        } = body as {
            tourName: string;
            tourDate: string;
            travelMode: string;
            noOfPerson: number;
            email: string;
            phone: number;
            honeypot: string;
            recaptchaToken: string;
        };

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

        if (!tourName || !tourDate || !travelMode || !email || !phone || !recaptchaToken) {
            json(400, {
                success: false,
                message: 'All required fields must be filled!'
            });
            return;
        }

        const emailResponse = await resend.emails.send({
            from: 'Booking Form <booking@ladakhmoto.com>',
            to: 'galdaninfotech@gmail.com',
            reply_to: email,
            subject: `New Booking Request - ${tourName}`,
            html: `
                <h2>New Tour Booking Request</h2>
                <p><strong>Tour Name:</strong> ${tourName}</p>
                <p><strong>Tour Date:</strong> ${tourDate}</p>
                <p><strong>Travel Mode:</strong> ${travelMode}</p>
                <p><strong>Number of Persons:</strong> ${noOfPerson}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone Number:</strong> ${phone}</p>
            `,
        });

        json(200, {
            success: true,
            message: '👍 Booking request sent successfully! We will send you confirmation shortly.',
            data: emailResponse
        });
    } catch (error) {
        console.error('Error sending booking request:', error);
        json(500, {
            success: false,
            message: '😕 Something went wrong. Please try again or contact us directly.',
            error: String(error)
        });
    }
};