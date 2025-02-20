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
                        <h1 class="main-heading">Disclaimer</h1>
                    </div>

                    <h2>General Information</h2>
                    <p>The information provided on LadakhMoto.com is for general informational purposes only. While we strive to ensure accuracy, we do not guarantee the completeness, reliability, or suitability of the information, services, or products offered on this website.</p>

                    <h2>Assumption of Risk</h2>
                    <p>By participating in our motorbiking tours, you acknowledge and accept the inherent risks involved, including but not limited to accidents, injuries, and environmental hazards. LadakhMoto.com and its affiliates shall not be held liable for any incidents that occur during the tours.</p>

                    <h2>External Links</h2>
                    <p>Our website may contain links to third-party websites. We do not endorse or assume responsibility for the content, policies, or practices of any linked websites.</p>

                    <h2>Limitation of Liability</h2>
                    <p>LadakhMoto.com, its employees, and partners shall not be held responsible for any direct, indirect, incidental, or consequential damages arising from the use of our website, services, or participation in our tours.</p>

                    <h2>Changes to This Disclaimer</h2>
                    <p>We reserve the right to modify this Disclaimer at any time. Changes will be posted on this page.</p>
                    
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
  title: "Disclaimer",
  meta: [
    {
      name: "description",
      content: "Disclaimer",
    },
  ],
};
