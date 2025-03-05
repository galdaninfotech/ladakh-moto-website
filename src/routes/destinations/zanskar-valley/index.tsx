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
                        <h1 class="main-heading">Zanskar Valley</h1>
                    </div>
                    <span class="d-flex justify-content-center"><strong><i>A Hidden Paradise for Every Traveler</i></strong></span>
                    

                    {/* Mobile Screen */}
                    <div class="row d-block d-lg-none">
                        <div class="col-12 col-lg-6 mt-3 mb-3 d-flex align-items-center justify-content-center">
                            <DestinationImage src="/img/destinations/zanskar-valley/zanskar-valley.webp" alt="Zanskar Valley" />
                        </div>
                    </div>

                    {/* Desktop Screen */}
                    <div class="row d-none d-lg-block">
                        <div class="col-12 col-lg-12 mt-3 mb-3 d-flex align-items-center justify-content-center">
                            <DestinationImage size="desktop" src="/img/destinations/zanskar-valley/zanskar-valley.webp" alt="Zanskar Valley" />
                        </div>
                    </div>

                    <p>
                        Zanskar Valley, located in the Indian Himalayas, is one of the most remote and awe-inspiring destinations in Ladakh. Known for its dramatic landscapes, pristine environment, and unique culture, Zanskar Valley is a must-visit for travelers seeking adventure, serenity, and a deeper connection to nature.
                    </p>

                    <p>
                        Nestled in the remote reaches of Ladakh, Zanskar Valley is a haven for adventurers and nature enthusiasts. Spanning over 7,000 square kilometers, this secluded gem is characterized by rugged landscapes, towering peaks, and deep river gorges. The valley is crisscrossed by the Zanskar River, formed by the confluence of the Doda and Lungnak (Tsarap/Lingti) rivers, eventually merging with the Indus River. 
                    </p>

                    <h2>Top Attractions:</h2>
                    <ul>
                        <li>
                            <strong>Phugtal Monastery</strong>: Carved into a cliffside, this ancient monastery offers a glimpse into the region's rich spiritual heritage.
                        </li>
                        <li>
                            <strong>Zangla Palace</strong>: Once the royal residence, it provides panoramic views of the valley and a peek into its regal past.
                        </li>
                        <li>
                            <strong>Karsha Monastery</strong>: The largest in Zanskar, known for its stunning architecture and vibrant festivals.
                        </li>
                        <li>
                            <strong>Sheela Waterfall</strong>: A serene spot perfect for relaxation and picnics amidst nature.
                        </li>
                    </ul>


                    <h2>Activities:</h2>
                    <ul>
                        <li>
                            <strong>Trekking</strong>: Embark on trails like the Phugtal Monastery Trek, offering unparalleled views and challenging terrains.
                        </li>
                        <li>
                            <strong>Motorbiking</strong>: Riding in Zanskar is an exhilarating adventure, offering riders a chance to conquer rugged terrains, high mountain passes, and remote valleys. The newly accessible Shinku La Pass route and challenging trails through Pensi La make it a dream destination for thrill-seekers. With breathtaking landscapes and ever-changing terrains, Zanskar promises an unforgettable ride through one of Ladakh’s most untouched regions.
                        </li>
                        <li>
                            <strong>River Rafting</strong>: Experience the thrill of navigating the rapids of the Zanskar River.
                        </li>
                        <li>
                            <strong>Cultural Tours</strong>: Engage with local communities to understand their traditions and way of life.
                        </li>
                    </ul>


                    <p>
                        Zanskar is emerging as an exciting new gateway to Manali with the development of the Shinku La Pass (5,091 meters) road, offering a more direct and adventurous route into this remote Himalayan region. This newly opened road connects Padum in Zanskar to Darcha in Himachal Pradesh, significantly reducing travel time and making the valley more accessible for travelers. Along this route, adventurers can witness the majestic Gonbo Rangjon, a sacred peak revered by locals and a stunning landmark for trekkers and explorers. This new passage not only enhances connectivity but also opens up breathtaking landscapes and hidden gems for nature lovers and thrill-seekers.
                    </p>

                    <h2>Best Time to Visit:</h2>
                    <p>
                        The ideal period to explore Zanskar Valley is from June to September, when the weather is favorable, and the roads are accessible. During these months, the valley blooms with alpine flora, and the conditions are perfect for trekking and sightseeing.
                    </p>

                    <h2>How to Reach:</h2>
                    <p>
                        <strong>By Road</strong>: The primary route is from Kargil to Padum, approximately 250 kilometers, taking about two days to traverse. Recent developments have introduced new roads via Shinku La Pass from Manali, offering alternative access points.
                    </p>

                    <h2>Accommodation:</h2>
                    <p>
                        Options range from guesthouses in Padum to homestays in smaller villages, providing a comfortable stay and a chance to experience local hospitality.
                    </p>

                    <h2>Permits:</h2>
                    <p>
                        While Zanskar Valley doesn't require special permits for Indian tourists, it's advisable to check for any travel advisories or requirements before planning your visit.
                    </p>

                    <p>
                        Head on a journey to Zanskar Valley and immerse yourself in its untouched beauty, rich culture, and thrilling adventures. Whether you're seeking solitude amidst nature or an adrenaline-pumping experience, Zanskar promises memories that will last a lifetime.
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
  title: "Zanskar Valley - Trekking, Monasteries & Scenic Beauty | Complete Travel Guide!",
  meta: [
    {
      name: "description",
      content: "Discover the untouched beauty of Zanskar Valley with Ladakh Moto. Experience thrilling treks, ancient monasteries, and breathtaking Himalayan landscapes. Plan your Zanskar Valley adventure today!",
    },
  ],
};
