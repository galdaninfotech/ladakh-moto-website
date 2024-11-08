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
                        <h1 class="main-heading">Nubra Valley</h1>
                    </div>

                    {/* Mobile Screen */}
                    <div class="row d-block d-lg-none">
                        <div class="col-12 col-lg-6 mt-3 mb-3 d-flex align-items-center justify-content-center">
                            <DestinationImage src="/img/destinations/leh-city.jpg" alt="Nubra Valley" />
                        </div>
                    </div>

                    {/* Desktop Screen */}
                    <div class="row d-none d-lg-block">
                        <div class="col-12 col-lg-12 mt-3 mb-3 d-flex align-items-center justify-content-center">
                            <DestinationImage size="desktop" src="/img/destinations/leh-city.jpg" alt="Nubra Valley" />
                        </div>
                    </div>


                    <p>
                        Nubra Valley, often called the "Valley of Flowers," is a breathtaking high-altitude desert in Ladakh, known for its dramatic landscapes, unique flora, and vibrant culture. Located around 10,000 feet above sea level, the valley is a tapestry of contrasting terrains: from lush riverbeds and verdant villages to arid, sandy expanses adorned with towering dunes.
                    </p>

                    <p>
                        Home to the famous double-humped Bactrian camels, Nubra’s Hunder Sand Dunes provide an almost surreal experience, blending desert scenery with snow-capped mountains in the backdrop. Rich in Buddhist heritage, the valley also houses ancient monasteries like Diskit Monastery, with its impressive 32-meter-tall Maitreya Buddha statue overlooking the serene surroundings. A visit to Nubra Valley is an enchanting journey through a unique fusion of desert beauty, lush oases, and spiritual tranquility.
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
  title: "Nubra Valley",
  meta: [
    {
      name: "description",
      content: "Nubra Valley",
    },
  ],
};
