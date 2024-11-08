import { component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from './index.css?inline';

import type { DocumentHead } from "@builder.io/qwik-city";
import Sidebar from "~/components/sidebar/sidebar";
import Fab from "~/components/fab/fab";
import DestinationImage from "~/components/destination-image";

export default component$(() => {
    useStylesScoped$(styles);

    return (
        <div class="container">
            <div class="row">
                <div class="col-lg-9">
                    <div class="intro">
                        <h1 class="main-heading">Pangong Lake</h1>
                    </div>

                    {/* Mobile Screen */}
                    <div class="row d-block d-lg-none">
                        <div class="col-12 col-lg-6 mt-3 mb-3 d-flex align-items-center justify-content-center">
                            <DestinationImage src="/img/destinations/leh-city.jpg" alt="Pangong Lake" />
                        </div>
                    </div>

                    {/* Desktop Screen */}
                    <div class="row d-none d-lg-block">
                        <div class="col-12 col-lg-12 mt-3 mb-3 d-flex align-items-center justify-content-center">
                            <DestinationImage size="desktop" src="/img/destinations/leh-city.jpg" alt="Pangong Lake" />
                        </div>
                    </div>


                    <p>
                        Pangong Lake, or Pangong Tso, is one of Ladakh’s most iconic and mesmerizing natural wonders, situated at an altitude of 14,270 feet. Stretching over 134 kilometers, this high-altitude lake extends from India to Tibet, with its waters displaying breathtaking shades of blue that shift with the sunlight, from deep azure to light turquoise.
                    </p>

                    <p>
                        Surrounded by rugged mountains and stark landscapes, Pangong Lake’s surreal beauty is a tranquil contrast to Ladakh’s rugged terrain, making it a must-visit destination. Known for its crystal-clear, saline waters and its serenity, the lake freezes entirely in winter, despite being saltwater. Its unmatched beauty and remote setting make it a favored spot for photographers, nature lovers, and adventurers alike.
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
  title: "Pangong Lake",
  meta: [
    {
      name: "description",
      content: "Pangong Lake",
    },
  ],
};
