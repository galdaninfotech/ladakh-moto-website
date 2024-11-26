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
                        <h1 class="main-heading">How To Reach?</h1>
                    </div>
                    <p>
                        To reach Leh, the most convenient option is to take a direct flight from Delhi, which offers a quick and scenic route to the heart of Ladakh. For tours starting from Manali, you can reach Manali by bus or taxi from Delhi or other nearby cities. Manali serves as the starting point for many of our tours, offering a picturesque drive through the mountains to Leh. Alternatively, for tours beginning in Srinagar, you can travel to Srinagar by bus or other means of transport. Whether you’re arriving by air to Leh, or by road to Manali or Srinagar, rest assured that we’ll assist you with the details to make your journey smooth and seamless.
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
  title: "How To Reach?",
  meta: [
    {
      name: "description",
      content: "How To Reach?",
    },
  ],
};
