# Track Specification: Migrate Email Service to Nodemailer

## Objective
Replace the current email delivery service (Resend) with Nodemailer to handle all transactional emails (contact inquiries and booking confirmations) via a standard SMTP configuration.

## Context
The project currently uses `resend` for sending emails. The user has requested to switch to `nodemailer` to leverage standard SMTP providers. This change affects the API routes and functions responsible for triggering emails.

## Requirements

### Functional Requirements
1.  **Email Delivery:** The system must successfully send emails using an SMTP server.
2.  **Endpoints:**
    -   `booking-email` logic must be updated.
    -   `contact-email` logic must be updated.
3.  **Content:** Email subjects, bodies (HTML/Text), and recipients must remain consistent with the current implementation.
4.  **Configuration:** SMTP credentials (Host, Port, User, Pass, Secure) must be managed via environment variables.

### Non-Functional Requirements
1.  **Security:** SMTP credentials must not be hardcoded.
2.  **Reliability:** Error handling should be robust (e.g., logging SMTP connection failures).
3.  **Dependencies:** `resend` should be completely removed from `package.json`.

## Proposed Solution
1.  Install `nodemailer` and its types.
2.  Define environment variables for SMTP (`SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`).
3.  Create a shared `emailService` utility to abstract the Nodemailer transporter creation and sending logic.
4.  Refactor existing API handlers to use this new utility instead of the Resend SDK.
5.  Uninstall `resend`.

## Verification Plan
1.  **Unit/Integration Tests:** Verify the `emailService` can connect to a mock SMTP server (or use Ethereal for testing).
2.  **Manual Verification:** Trigger a contact form submission and a booking request to ensure emails arrive in the inbox.
