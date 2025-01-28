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
                        <h1 class="main-heading">Our Core Values</h1>
                    </div>
                    <p>
                        At Ladakhmoto, our core values are deeply rooted in our identity as a locally owned and operated company based in Leh, Ladakh. We prioritize authenticity, ensuring every tour reflects the rich culture and natural beauty of our homeland. With full accountability, we are committed to delivering exceptional service, maintaining safety, and building trust with every client. Sustainability is at the heart of what we do, as we strive to protect Ladakh's pristine environment and support the local community. At Ladakhmoto, we believe in creating unforgettable adventures while upholding the highest standards of integrity, professionalism, and respect for our land and its people.
                    </p>

                    
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
  title: "Our Core Values",
  meta: [
    {
      name: "description",
      content: "Our Core Values",
    },
    {
        name: "robots",
        content: "index, follow"
    },
  ],
};
