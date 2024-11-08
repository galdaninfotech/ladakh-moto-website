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
                        <h1 class="main-heading">Tsomoriri Lake</h1>
                    </div>

                    {/* Mobile Screen */}
                    <div class="row d-block d-lg-none">
                        <div class="col-12 col-lg-6 mt-3 mb-3 d-flex align-items-center justify-content-center">
                            <DestinationImage src="/img/destinations/leh-city.jpg" alt="Tsomoriri Lake" />
                        </div>
                    </div>

                    {/* Desktop Screen */}
                    <div class="row d-none d-lg-block">
                        <div class="col-12 col-lg-12 mt-3 mb-3 d-flex align-items-center justify-content-center">
                            <DestinationImage size="desktop" src="/img/destinations/leh-city.jpg" alt="Tsomoriri Lake" />
                        </div>
                    </div>


                    <p>
                        Tsomoriri Lake, also known as Tso Moriri, is a pristine high-altitude lake nestled in the secluded Changthang region of Ladakh at an elevation of 15,075 feet. Surrounded by snow-capped mountains and sweeping grasslands, this freshwater lake is celebrated for its vivid blue waters that reflect the stunning Himalayan landscape.
                    </p>

                    <p>
                        Tsomoriri is a designated wetland reserve, supporting diverse wildlife, including migratory birds, the rare black-necked crane, and even Tibetan gazelles. This remote, tranquil destination offers visitors a glimpse into the unspoiled beauty of Ladakh and is cherished for its serene ambiance, making it a must-visit for nature lovers and adventurers alike.
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
  title: "Tsomoriri Lake",
  meta: [
    {
      name: "description",
      content: "Tsomoriri Lake",
    },
  ],
};
