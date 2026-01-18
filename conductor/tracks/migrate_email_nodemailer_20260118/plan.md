# Track Plan: Migrate Email Service to Nodemailer

## Phase 1: Setup and Configuration
- [x] Task: Install `nodemailer` and `@types/nodemailer`. 4502db9
- [ ] Task: Create a `utils/email.ts` (or similar) module to initialize the Nodemailer transporter using environment variables (`SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`).
- [ ] Task: Conductor - User Manual Verification 'Setup and Configuration' (Protocol in workflow.md)

## Phase 2: Migration
- [ ] Task: Refactor the Contact Email API route/function to use the new Nodemailer utility.
- [ ] Task: Refactor the Booking Email API route/function to use the new Nodemailer utility.
- [ ] Task: Conductor - User Manual Verification 'Migration' (Protocol in workflow.md)

## Phase 3: Cleanup and Finalization
- [ ] Task: Remove `resend` from `package.json` and uninstall the dependency.
- [ ] Task: Remove any unused Resend-specific environment variables or utility files.
- [ ] Task: Conductor - User Manual Verification 'Cleanup and Finalization' (Protocol in workflow.md)
