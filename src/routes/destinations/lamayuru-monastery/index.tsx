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
                        <h1 class="main-heading">Lamayuru Monastery</h1>
                    </div>

                    {/* Mobile Screen */}
                    <div class="row d-block d-lg-none">
                        <div class="col-12 col-lg-6 mt-3 mb-3 d-flex align-items-center justify-content-center">
                            <DestinationImage src="/img/destinations/leh-city.jpg" alt="Lamayuru Monastery" />
                        </div>
                    </div>

                    {/* Desktop Screen */}
                    <div class="row d-none d-lg-block">
                        <div class="col-12 col-lg-12 mt-3 mb-3 d-flex align-items-center justify-content-center">
                            <DestinationImage size="desktop" src="/img/destinations/leh-city.jpg" alt="Lamayuru Monastery" />
                        </div>
                    </div>


                    <p>
                        Lamayuru Monastery, one of the oldest and most picturesque monasteries in Ladakh, is perched dramatically on a rugged cliffside overlooking the "Moonland" landscape of the Lamayuru Valley. Founded in the 11th century, this ancient monastery is rich in history and home to vibrant murals, intricate thangkas, and centuries-old statues. Known for its annual Mask Dance Festival, Lamayuru draws visitors seeking to witness the vibrant cultural traditions of Ladakhi Buddhism. The monastery’s stunning location and serene atmosphere make it a unique and enchanting destination, offering breathtaking views of the surreal, moon-like terrain that surrounds it.
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
  title: "Lamayuru Monastery",
  meta: [
    {
      name: "description",
      content: "Lamayuru Monastery",
    },
  ],
};
