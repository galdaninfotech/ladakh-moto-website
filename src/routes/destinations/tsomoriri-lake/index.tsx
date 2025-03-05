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
                    <span class="d-flex justify-content-center"><strong><i>A Hidden Gem in Ladakh for Every Traveler</i></strong></span>

                    {/* Mobile Screen */}
                    <div class="row d-block d-lg-none">
                        <div class="col-12 col-lg-6 mt-3 mb-3 d-flex align-items-center justify-content-center">
                            <DestinationImage src="/img/destinations/tsomoriri-lake/tsomoriri-lake.webp" alt="Tsomoriri Lake" />
                        </div>
                    </div>

                    {/* Desktop Screen */}
                    <div class="row d-none d-lg-block">
                        <div class="col-12 col-lg-12 mt-3 mb-3 d-flex align-items-center justify-content-center">
                            <DestinationImage size="desktop" src="/img/destinations/tsomoriri-lake/tsomoriri-lake.webp" alt="Tsomoriri Lake" />
                        </div>
                    </div>


                    <p>
                        It is one of the surreal places to explore in Ladakh, located in Changthang plateau at about 4000metres above sea level and is about 19 km long and up to 8km wide with barren hills decked with snow on the top all around, beautiful migratory birds and other rare fauna make the sight simply astonishing.
                    </p>

                    <p>
                        As a designated wetland reserve, Tso Moriri supports diverse wildlife, including migratory birds like the rare black-necked crane and Tibetan gazelles. This remote, tranquil destination offers visitors a glimpse into the unspoiled beauty of Ladakh and is cherished for its serene ambiance, making it a must-visit for nature lovers and adventurers alike.
                    </p>

                    <p>
                        Tsomoriri Lake is not just a scenic destination; it also offers plenty of opportunities for adventure. The journey to Tsomoriri Lake takes travelers through some of Ladakh's most rugged and awe-inspiring landscapes, including high-altitude mountain passes and vast deserts. The road trip to Tsomoriri Lake is an adventure in itself, offering travelers the chance to experience the vastness and beauty of the region. For those interested in trekking, there are several routes around Tsomoriri Lake that offer breathtaking views of the surrounding mountains and valley
                    </p>

                    <h2>Things to Do at Tso Moriri Lake</h2>
                    <ul>
                        <li>
                            <strong>Enjoy the Stunning Views</strong> - Witness the breathtaking beauty of the deep blue lake set against towering snow-capped mountains. The peaceful surroundings make it a perfect spot for relaxation and photography.
                        </li>
                        <li>
                            <strong>Bird Watching</strong> - Tso Moriri is a designated wetland reserve, home to rare migratory birds like the black-necked crane, bar-headed geese, and Brahminy ducks. It's a paradise for bird watchers and wildlife enthusiasts.
                        </li>
                        <li>
                            <strong>Visit Korzok Monastery</strong> - Located near the lake, Korzok Monastery is a 300-year-old Buddhist monastery offering spiritual insights and panoramic views of the valley.
                        </li>
                        <li>
                            <strong>Camping by the Lake</strong> - Experience the tranquility of Tso Moriri by camping under a starlit sky. The remoteness of the lake makes it an ideal spot for a peaceful retreat.
                        </li>
                        <li>
                            <strong>Explore the Changthang Plateau</strong> - Drive through the vast Changthang region, home to nomadic Changpa tribes, yaks, and Tibetan wild asses (Kiang), for a unique cultural experience.
                        </li>
                        <li>
                            <strong>Photography & Stargazing</strong> - Capture the mesmerizing landscapes and reflections of the Himalayas on the crystal-clear waters of Tso Moriri. At night, the absence of light pollution offers an incredible stargazing experience.
                        </li>
                    </ul>

                    <p>
                        A visit to Tso Moriri Lake is a journey into Ladakh's untouched beauty, offering adventure, culture, and tranquility in equal measure!
                    </p>

                    <h2>Best Time to Visit:</h2>
                    <p>
                        The ideal period to explore Tso Moriri is from May to September, when the weather is pleasant, and the lake's vibrant colors are most vivid. During these months, the access roads are clear, ensuring a comfortable journey.
                    </p>

                    <h2>How to Reach:</h2>
                    <p>
                        <strong>By Road</strong>: Tso Moriri is approximately 220 kilometers southeast of Leh. The journey takes you through picturesque landscapes, including the Changthang Plateau, offering travelers a chance to witness Ladakh's diverse terrains.
                    </p>

                    <h2>Permits:</h2>
                    <p>
                        Visitors are required to obtain an Inner Line Permit to access Tso Moriri, as it is located near the sensitive Line of Actual Control between India and China. These permits can be acquired in Leh and are mandatory for both domestic and international tourists.
                    </p>

                    <p>
                        Embarking on a journey to Tso Moriri Lake promises an unforgettable experience, blending natural beauty with a sense of adventure. Whether you're a nature enthusiast, a photography lover, or simply seeking tranquility, Tso Moriri offers a slice of paradise in the heart of the Himalayas.
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
  title: "Tsomoriri Lake - Ladakh's Pristine High-Altitude Lake | Complete Travel Guide!",
  meta: [
    {
      name: "description",
      content: "Discover the tranquility of Tso Moriri Lake with Ladakh Moto. Experience stunning views, peaceful surroundings, and the rich biodiversity of this Ladakh gem. Plan your Tso Moriri Lake adventure today!",
    },
  ],
};
