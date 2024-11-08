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
                        <h1 class="main-heading">Hanle Village</h1>
                    </div>

                    {/* Mobile Screen */}
                    <div class="row d-block d-lg-none">
                        <div class="col-12 col-lg-6 mt-3 mb-3 d-flex align-items-center justify-content-center">
                            <DestinationImage src="/img/destinations/leh-city.jpg" alt="Hanle Village" />
                        </div>
                    </div>

                    {/* Desktop Screen */}
                    <div class="row d-none d-lg-block">
                        <div class="col-12 col-lg-12 mt-3 mb-3 d-flex align-items-center justify-content-center">
                            <DestinationImage size="desktop" src="/img/destinations/leh-city.jpg" alt="Hanle Village" />
                        </div>
                    </div>


                    <p>
                        Hanle, a remote village in Ladakh’s Changthang region, is a serene gem known for its breathtaking landscapes and starry skies. Nestled at around 14,763 feet, Hanle offers visitors sweeping views of vast plains framed by rugged mountains. It is home to the historic Hanle Monastery, a 17th-century Buddhist gompa that sits on a hill and provides a spiritual atmosphere to the area.
                    </p>

                    <p>
                        Hanle is also famous for the Indian Astronomical Observatory, one of the world’s highest observatories, making it a premier spot for stargazing. Known for its pristine beauty and tranquility, Hanle is an enchanting destination for those looking to experience Ladakh’s peaceful remoteness and celestial wonders.
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
  title: "Hanle Village",
  meta: [
    {
      name: "description",
      content: "Hanle Village",
    },
  ],
};
