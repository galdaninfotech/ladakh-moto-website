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
                        <h1 class="main-heading">Zangskar Valley</h1>
                    </div>

                    {/* Mobile Screen */}
                    <div class="row d-block d-lg-none">
                        <div class="col-12 col-lg-6 mt-3 mb-3 d-flex align-items-center justify-content-center">
                            <DestinationImage src="/img/destinations/leh-city.jpg" alt="Zangskar Valley" />
                        </div>
                    </div>

                    {/* Desktop Screen */}
                    <div class="row d-none d-lg-block">
                        <div class="col-12 col-lg-12 mt-3 mb-3 d-flex align-items-center justify-content-center">
                            <DestinationImage size="desktop" src="/img/destinations/leh-city.jpg" alt="Zangskar Valley" />
                        </div>
                    </div>


                    <p>
                        Zanskar Valley, nestled in the remote reaches of Ladakh, is a hidden gem renowned for its dramatic landscapes, Buddhist monasteries, and traditional villages. Located at altitudes often exceeding 13,000 feet, the valley is surrounded by snow-clad peaks and bisected by the Zanskar River, which freezes in winter to form the famous Chadar Trek. This rugged terrain offers a stunning contrast between jagged mountains and green patches of cultivated land.
                    </p>

                    <p>
                        Rich in cultural heritage, Zanskar is home to ancient monasteries like Karsha and Phuktal, where Buddhist traditions continue to thrive in seclusion. Its pristine beauty, combined with a sense of timeless serenity, makes Zanskar Valley a paradise for trekkers, adventure seekers, and those in search of Ladakh’s unspoiled wilderness.
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
  title: "Zangskar Valley",
  meta: [
    {
      name: "description",
      content: "Zangskar Valley",
    },
  ],
};
