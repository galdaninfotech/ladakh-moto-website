# Tech Stack: Ladakh Moto

## Frontend
- **Qwik:** The primary framework, chosen for its "Resumability" and performance on mobile devices (crucial for travelers in low-bandwidth areas).
- **QwikCity:** Handles routing, layouts, and data fetching via directory-based routing.
- **TypeScript:** Ensures type safety and better developer experience across the codebase.

## Styling & UI
- **Tailwind CSS:** Used for rapid UI development and maintaining a consistent design system.
- **PostCSS:** Handles CSS transformations and purging for production builds.

## Backend & Logic
- **Netlify Functions:** Serverless functions used for handling API requests, booking logic, and secure form submissions.
- **Resend:** Integrated for reliable transactional email delivery (booking confirmations, inquiries).

## Infrastructure & Tooling
- **Netlify:** The primary hosting and deployment platform.
- **Vite:** The build tool and development server.
- **Sharp:** Used for high-performance image optimization (critical for the high-quality photography in galleries).
- **Partytown:** Used to offload third-party scripts to web workers, ensuring the main thread stays responsive.
