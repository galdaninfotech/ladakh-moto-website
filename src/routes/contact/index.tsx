import { component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from './index.css?inline';

import type { DocumentHead } from "@builder.io/qwik-city";

import { Contact } from "~/components/contact/contact";
import Sidebar from "~/components/sidebar/sidebar";
import Fab from "~/components/fab/fab";

export default component$(() => {
    useStylesScoped$(styles);

    return (
        <div class="container">
            <div class="row">
                <div class="col-lg-9">
                    <div class="intro">
                        <h1 id="tour-name" data-tour-name="Contact Us">Contact Us</h1>
                    </div>
                    <p class="mb-30">
                        Do not hesitage leave us a message. We are a team of local experts and we are happy to respond to your queries.
                    </p>
                    <Contact />
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
  title: "Contact Us",
  meta: [
    {
      name: "description",
      content: "Contact Us",
    },
  ],
};
