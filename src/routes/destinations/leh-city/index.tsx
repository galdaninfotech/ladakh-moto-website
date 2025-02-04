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
                        <h1 class="main-heading">Leh City</h1>
                    </div>

                    {/* Mobile Screen */}
                    <div class="row d-block d-lg-none">
                        <div class="col-12 col-lg-6 mt-3 mb-3 d-flex align-items-center justify-content-center">
                            <DestinationImage src="/img/destinations/leh-city.jpg" alt="Leh City" />
                        </div>
                    </div>

                    {/* Desktop Screen */}
                    <div class="row d-none d-lg-block">
                        <div class="col-12 col-lg-12 mt-3 mb-3 d-flex align-items-center justify-content-center">
                            <DestinationImage size="desktop" src="/img/destinations/leh-city.jpg" alt="Leh City" />
                        </div>
                    </div>


                    <p>
                        Leh, the largest town in Ladakh, is a captivating blend of natural beauty, rich history, and vibrant culture nestled at an altitude of around 11,562 feet in the Indian Himalayas. Known for its stunning landscapes of rugged mountains, serene monasteries, and winding rivers, Leh is a gateway to some of the region’s most iconic sites, including the Nubra Valley and Pangong Lake.
                    </p>

                    <p>
                        The city is also marked by its blend of ancient Tibetan-Buddhist heritage and a laid-back, modern charm, with sights like Leh Palace, Shanti Stupa, and the bustling Leh Market. The town’s cool, crisp air, combined with its traditional festivals, local crafts, and cuisine, make it an unforgettable destination that captures the essence of Ladakh’s high-altitude beauty and unique cultural tapestry.
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
  title: "Leh City",
  meta: [
    {
      name: "description",
      content: "Leh City",
    },
  ],
};
