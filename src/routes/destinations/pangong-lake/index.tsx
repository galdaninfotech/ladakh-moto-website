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
                    <span class="d-flex justify-content-center"><strong><i>A Stunning Destination for Every Traveler</i></strong></span>

                    {/* Mobile Screen */}
                    <div class="row d-block d-lg-none">
                        <div class="col-12 col-lg-6 mt-3 mb-3 d-flex align-items-center justify-content-center">
                            <DestinationImage src="/img/destinations/pangong-lake/pangong-lake.webp" alt="Pangong Lake" />
                        </div>
                    </div>

                    {/* Desktop Screen */}
                    <div class="row d-none d-lg-block">
                        <div class="col-12 col-lg-12 mt-3 mb-3 d-flex align-items-center justify-content-center">
                            <DestinationImage size="desktop" src="/img/destinations/pangong-lake/pangong-lake.webp" alt="Pangong Lake" />
                        </div>
                    </div>


                    
                    <p>
                        Pangong Lake, also known as Pangong Tso, is a breathtaking endorheic lake nestled in the Himalayas at an elevation of 4,225 meters. Spanning approximately 134 kilometers, this pristine lake extends from India's Ladakh region into Tibet, with about 40 percent of its length in India and the remaining 60 percent in Tibet. Despite its saline waters, Pangong Lake freezes completely during winter, offering a unique spectacle of nature.  Pangong Lake is a must-visit spot for nature lovers, adventure seekers, and anyone looking to experience the serene and untouched landscapes of Ladakh. Its unique color-changing waters, surrounded by barren mountains, offer a surreal and unforgettable experience for every tourist visiting Pangong Lake.
                    </p>

                    <h2>Top Attractions:</h2>

                    <ul>
                        <li>
                            <strong>Color-Changing Waters</strong>: Witness the lake's mesmerizing hues shift from azure to deep blue and even green, depending on the time of day and weather conditions.
                        </li>
                        <li>
                            <strong>Wildlife Spotting</strong>: The lake is a haven for birdwatchers, especially during the summer months when migratory birds, including the rare black-necked crane, make it their temporary home.
                        </li>
                        <li>
                            <strong>Camping</strong>: Experience the serenity of the lake by camping along its shores, under a canopy of stars, and immerse yourself in the tranquil ambiance of the surrounding landscapes.
                        </li>
                        <li>
                            <strong>The Journey</strong>: A visit to Pangong Lake is also an adventure in itself. While the lake is the primary attraction, the journey to Pangong Lake is equally fascinating. The road to Pangong Lake takes travelers through some of the most stunning landscapes of Ladakh, including high mountain passes like Chang La. The drive offers panoramic views of the surrounding hills, valleys, and villages, making it a memorable experience. For those seeking a bit of adventure, the road journey to Pangong Lake is sure to excite and inspire.
                        </li>
                        <li>
                            <strong>Chang La Pass</strong>: Standing at 5,360 meters (17,590 feet), one of the highest motorable passes in the world and a gateway to the stunning Pangong Lake. Surrounded by snow-covered peaks, this high-altitude pass offers breathtaking views and a thrilling ride for adventure seekers. Due to its extreme elevation, the air is thin and chilly, making short stops ideal for acclimatization. The pass is also home to the Changla Baba Temple, believed to protect travelers on their journey. A visit to Chang La is an unforgettable experience for those exploring the rugged beauty of Ladakh.
                        </li>
                    </ul>


                    <h2>Best Time to Visit:</h2>

                    <p>
                        The ideal time to explore Pangong Lake is from May to September, when the weather is pleasant, and the lake's vivid colors are at their peak. During these months, the access roads are clear, making the journey to the lake more comfortable and enjoyable.
                    </p>

                    <h2>How to Reach:</h2>
                    <p>
                        <strong>By Road</strong>: Pangong Lake is approximately 160 kilometers from Leh, the capital of Ladakh. The journey takes you through the scenic Chang La Pass, one of the world's highest motorable roads, offering panoramic views of the rugged Himalayan terrain.
                    </p>

                    <h2>Permits:</h2>

                    <p>
                        Visitors are required to obtain an Inner Line Permit to access Pangong Lake, as it is located near the sensitive Line of Actual Control between India and China. These permits can be acquired in Leh and are mandatory for both domestic and international tourists.
                    </p>

                    <p>
                        Embarking on a journey to Pangong Lake promises an unforgettable experience, blending natural beauty with a sense of adventure. Whether you're a nature enthusiast, a photography lover, or simply seeking tranquility, Pangong Lake offers a slice of paradise in the heart of the Himalayas.
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
  title: "Pangong Lake - Ladakh's Iconic High-Altitude Lake & Scenic Beauty | Complete Travel Guide!",
  meta: [
    {
      name: "description",
      content: "Explore the breathtaking Pangong Lake with Ladakh Moto. Witness the changing colors of the lake, enjoy scenic drives, and experience Ladakh's stunning landscapes. Book your Pangong Lake adventure today!",
    },
  ],
};
