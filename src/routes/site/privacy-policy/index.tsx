import { component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from './index.css?inline';

import type { DocumentHead } from "@builder.io/qwik-city";
import Sidebar from "~/components/sidebar/sidebar";
import Fab from "~/components/fab/fab";

export default component$(() => {
    useStylesScoped$(styles);

    return (
        <div class="container">
            <div class="row">
                <div class="col-lg-9">
                    <div class="intro">
                        <h1 class="main-heading">Privacy Policy</h1>
                    </div>


                    <h2 class="mt-5">Introduction</h2>
                    <p>
                        Welcome to LadakhMoto.com. Your privacy is important to us, and this Privacy Policy explains how we collect, use, disclose, and protect your personal information when you use our website and services. By accessing or using LadakhMoto.com, you agree to the terms outlined in this policy.
                    </p>

                    <h2 class="mt-5">Information We Collect</h2>
                    <p>We collect the following types of information:</p>
                    <ul>
                        <li>Personal Information: When you book a tour, sign up for our newsletter, or contact us, we may collect your name, email address, phone number, and payment details.</li>
                        <li>Non-Personal Information: We collect data such as browser type, IP address, and pages visited to improve our website experience.</li>
                        <li>Cookies and Tracking Technologies: We use cookies to enhance user experience and analyze website traffic.</li>
                    </ul>

                    <h2 class="mt-5">How We Use Your Information</h2>
                    <p>We use your information to:</p>
                    <ul>
                        <li>Process tour bookings and payments</li>
                        <li>Respond to inquiries and provide customer support</li>
                        <li>Send promotional and informational emails (you can opt out anytime)</li>
                        <li>Improve website performance and user experience</li>
                        <li>Comply with legal and regulatory requirements</li>
                    </ul>

                    <h2 class="mt-5">Sharing Your Information</h2>
                    <p>We do not sell or rent your personal information. However, we may share your data with:</p>
                    <ul>
                        <li>Service Providers: Third-party partners who assist with payment processing, email services, and website analytics.</li>
                        <li>Legal Authorities: If required by law or in response to legal processes.</li>
                        <li>Business Transfers: In case of a merger, sale, or asset transfer.</li>
                    </ul>

                    <h2 class="mt-5">Data Security</h2>
                    <p>We implement security measures to protect your data. However, no online platform is completely secure, so we cannot guarantee absolute security.</p>

                    <h2 class="mt-5">Your Rights</h2>
                    <p>You have the right to:</p>
                    <ul>
                        <li>Access, update, or delete your personal information</li>
                        <li>Opt out of marketing communications</li>
                        <li>Restrict or object to data processing in certain circumstances</li>
                    </ul>

                    <h2 class="mt-5">Third-Party Links</h2>
                    <ul>
                        <li>Our website may contain links to external sites. We are not responsible for their privacy policies and would like to encourage you to review them separately.</li>

                    </ul>

                    <h2 class="mt-5">Changes to This Policy</h2>
                    <p>We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date.</p>
                    
                    <Fab tourPrice={""} />
                </div>


                <div class="col-lg-3">
                    <Sidebar />
                </div>
            </div>
        </div>
    );
});

export const head: DocumentHead = {
  title: "Privacy Policy",
  meta: [
    {
      name: "description",
      content: "Privacy Policy",
    },
  ],
};
