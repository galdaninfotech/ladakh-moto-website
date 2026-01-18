# Track Plan: Migrate Email Service to Nodemailer

## Phase 1: Setup and Configuration [checkpoint: f0d8a0b]
- [x] Task: Install `nodemailer` and `@types/nodemailer`. 4502db9
- [x] Task: Create a `utils/email.ts` (or similar) module to initialize the Nodemailer transporter using environment variables (`SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`). e4a69db
- [x] Task: Conductor - User Manual Verification 'Setup and Configuration' (Protocol in workflow.md)

## Phase 2: Migration
- [x] Task: Refactor the Contact Email API route/function to use the new Nodemailer utility. 4bc68d5
- [~] Task: Refactor the Booking Email API route/function to use the new Nodemailer utility.
- [ ] Task: Conductor - User Manual Verification 'Migration' (Protocol in workflow.md)

## Phase 3: Cleanup and Finalization
- [ ] Task: Remove `resend` from `package.json` and uninstall the dependency.
- [ ] Task: Remove any unused Resend-specific environment variables or utility files.
- [ ] Task: Conductor - User Manual Verification 'Cleanup and Finalization' (Protocol in workflow.md)
