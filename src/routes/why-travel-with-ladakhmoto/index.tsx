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
                        <h1 class="main-heading">Why Travel With LadakhMoto?</h1>
                    </div>
                    <p>
                        At Ladakhmoto, we take pride in being a locally owned and operated company based in the heart of Leh, Ladakh. With full accountability and deep-rooted knowledge of the region, we deliver authentic and seamless travel experiences. Our main office in Leh ensures personalized service, immediate support, and attention to detail throughout your journey. From carefully curated itineraries to professional road captains and mechanics, we offer unparalleled expertise and reliability. By choosing Ladakhmoto, you not only embark on an unforgettable adventure but also support a local business committed to responsible and sustainable tourism in Ladakh.
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
  title: "Why Travel With LadakhMoto?",
  meta: [
    {
      name: "description",
      content: "Why Travel With LadakhMoto?",
    },
    {
        name: "robots",
        content: "index, follow"
    },
  ],
};
