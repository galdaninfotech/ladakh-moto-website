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
                        <h1 class="main-heading">About Us</h1>
                    </div>
                    <span><strong><i>Authentic Adventures Guided By Locals</i></strong></span>
                    <p>
                        Welcome to Ladakh Moto, your trusted travel companion in the breathtaking landscapes of Leh Ladakh. As a proud, locally-owned travel agency based in the heart of this stunning region, we specialize in curating unforgettable journeys for travelers from all over India. 
                    </p>

                    <p>
                        With our intimate knowledge of the local terrain, the vibrant local culture, and our deep-rooted expertise based on our experience and past performance since 2014, we pride ourselves on providing authentic and personalized travel experiences to adventurers and travellers across India and beyond. At Ladakh Moto, we don’t just plan trips, we craft adventures that capture the true spirit of this extraordinary land. Come explore the Himalayas with Ladakh Moto where adventure meets authenticity.
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
  title: "About Us",
  meta: [
    {
      name: "description",
      content: "About Us",
    },
  ],
};
