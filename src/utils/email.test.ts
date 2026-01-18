import { describe, it, expect, vi, beforeEach } from 'vitest';
import { sendEmail } from './email';
import nodemailer from 'nodemailer';

vi.mock('nodemailer');

describe('email utility', () => {
  const mockSendMail = vi.fn().mockResolvedValue({ messageId: 'test-id' });
  const mockCreateTransport = vi.fn().mockReturnValue({
    sendMail: mockSendMail,
  });

  beforeEach(() => {
    vi.clearAllMocks();
    (nodemailer.createTransport as any) = mockCreateTransport;
  });

  it('should send an email using nodemailer with correct parameters', async () => {
    process.env.SMTP_HOST = 'smtp.example.com';
    process.env.SMTP_PORT = '587';
    process.env.SMTP_USER = 'user@example.com';
    process.env.SMTP_PASS = 'password';

    const emailOptions = {
      from: 'from@example.com',
      to: 'to@example.com',
      subject: 'Test Subject',
      html: '<p>Test Body</p>',
    };

    await sendEmail(emailOptions);

    expect(mockCreateTransport).toHaveBeenCalledWith({
      host: 'smtp.example.com',
      port: 587,
      secure: false, // 587 is usually STARTTLS
      auth: {
        user: 'user@example.com',
        pass: 'password',
      },
    });

    expect(mockSendMail).toHaveBeenCalledWith(emailOptions);
  });

  it('should throw an error if SMTP configuration is missing', async () => {
    delete process.env.SMTP_HOST;
    
    await expect(sendEmail({ to: 'test@example.com', subject: 'test' }))
      .rejects.toThrow('SMTP configuration is missing');
  });
});
