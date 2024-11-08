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
                        <h1 class="main-heading">Thiksey Monstery</h1>
                    </div>

                    {/* Mobile Screen */}
                    <div class="row d-block d-lg-none">
                        <div class="col-12 col-lg-6 mt-3 mb-3 d-flex align-items-center justify-content-center">
                            <DestinationImage src="/img/destinations/leh-city.jpg" alt="Thiksey Monstery" />
                        </div>
                    </div>

                    {/* Desktop Screen */}
                    <div class="row d-none d-lg-block">
                        <div class="col-12 col-lg-12 mt-3 mb-3 d-flex align-items-center justify-content-center">
                            <DestinationImage size="desktop" src="/img/destinations/leh-city.jpg" alt="Thiksey Monstery" />
                        </div>
                    </div>


                    <p>
                        Thiksey Monastery, located about 19 kilometers from Leh, is one of Ladakh's largest and most architecturally impressive monasteries. Built on a hilltop, this 12-story complex resembles the Potala Palace in Lhasa, offering spectacular views of the Indus Valley below.
                    </p>

                    <p>
                        Thiksey is home to numerous shrines, statues, and a remarkable 15-meter-high Maitreya Buddha statue, which is the monastery's centerpiece. Dating back to the 15th century, it houses around 120 monks and is a vibrant center of Buddhist learning and meditation. Visitors are captivated by its peaceful ambiance, intricate murals, and the daily prayer ceremonies, making Thiksey Monastery a must-visit for those seeking Ladakh's spiritual and cultural essence.
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
  title: "Thiksey Monstery",
  meta: [
    {
      name: "description",
      content: "Thiksey Monstery",
    },
  ],
};
