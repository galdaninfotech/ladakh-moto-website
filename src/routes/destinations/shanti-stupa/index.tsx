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
                        <h1 class="main-heading">Shanti Stupa</h1>
                    </div>

                    {/* Mobile Screen */}
                    <div class="row d-block d-lg-none">
                        <div class="col-12 col-lg-6 mt-3 mb-3 d-flex align-items-center justify-content-center">
                            <DestinationImage src="/img/destinations/leh-city.jpg" alt="Shanti Stupa" />
                        </div>
                    </div>

                    {/* Desktop Screen */}
                    <div class="row d-none d-lg-block">
                        <div class="col-12 col-lg-12 mt-3 mb-3 d-flex align-items-center justify-content-center">
                            <DestinationImage size="desktop" src="/img/destinations/leh-city.jpg" alt="Shanti Stupa" />
                        </div>
                    </div>


                    <p>
                        Shanti Stupa, perched on a hilltop overlooking Leh, is one of Ladakh's most iconic symbols of peace and spirituality. Built in 1991 by Japanese and Ladakhi Buddhists to promote world peace, this white-domed stupa offers panoramic views of Leh town, the surrounding mountains, and the Indus Valley. 
                    </p>

                    <p>
                        The stupa enshrines relics of the Buddha and features intricate carvings depicting his life, adding to its spiritual significance. Accessible via a steep staircase or by road, Shanti Stupa is particularly enchanting at sunrise and sunset, when the soft light enhances its beauty. It’s a peaceful retreat where visitors can enjoy breathtaking views and a quiet moment of reflection.
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
  title: "Shanti Stupa",
  meta: [
    {
      name: "description",
      content: "Shanti Stupa",
    },
  ],
};
