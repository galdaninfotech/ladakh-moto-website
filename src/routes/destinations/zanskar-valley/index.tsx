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
                        Zanskar Valley, located in the Indian Himalayas, is one of the most remote and awe-inspiring destinations in Ladakh. Known for its dramatic landscapes, pristine environment, and unique culture, Zanskar Valley is a must-visit for travelers seeking adventure, serenity, and a deeper connection to nature. Nestled between the Zanskar and Ladakh mountain ranges, Zanskar Valley offers breathtaking views, rugged terrains, and an opportunity to explore the unspoiled beauty of one of India's most untouched regions. Whether you're a nature lover, trekker, or culture enthusiast, Zanskar Valley offers something for everyone.
                    </p>

                    <p>
                        One of the most remarkable features of Zanskar Valley is its breathtaking natural beauty. The valley is characterized by towering mountains, narrow gorges, deep canyons, and clear rivers. The Zanskar River, which flows through the valley, is particularly famous for its dramatic landscapes. During the winter months, the river freezes, creating a stunning spectacle of ice that draws adventurers from across the world. The scenic beauty of Zanskar Valley, combined with its serene atmosphere, makes it an ideal destination for photographers and nature enthusiasts seeking to capture the essence of Ladakh's rugged beauty.
                    </p>

                    <p>
                        For adventure seekers, Zanskar Valley offers an array of exciting activities. Trekking is one of the most popular ways to explore this remote region, with several trekking routes that take you through the valley's pristine landscapes. One of the most famous treks in Zanskar Valley is the Chadar Trek, which takes travelers across the frozen Zanskar River. This challenging yet exhilarating trek is a once-in-a-lifetime experience for those who are up for the adventure. With its rugged terrain, high-altitude passes, and remote location, Zanskar Valley provides a perfect setting for those looking for thrilling outdoor experiences.
                    </p>

                    <p>
                        Zanskar Valley is also home to a rich cultural heritage that reflects the unique traditions and lifestyle of the Zanskaris, the indigenous people of the region. The valley is dotted with ancient monasteries, such as the Karsha Monastery and Zangla Monastery, that offer insight into the spiritual and historical significance of the area. These monasteries are not only places of worship but also serve as cultural hubs, preserving the region's Buddhist heritage. A visit to these monasteries provides a chance to learn about the traditions, art, and architecture of the Zanskar Valley, making it an enriching experience for those interested in culture and history.
                    </p>

                    <p>
                        The remote location of Zanskar Valley means that the region has remained relatively untouched by modern development, which has helped preserve its traditional lifestyle. The people of Zanskar, predominantly Buddhist, continue to live in harmony with nature, practicing agriculture, livestock farming, and traditional handicrafts. Visitors to Zanskar Valley can interact with the local people, experience their hospitality, and get a glimpse of their daily lives. The simplicity and warmth of the Zanskaris offer a unique cultural experience that is both humbling and enlightening.
                    </p>

                    <p>
                        One of the most striking aspects of Zanskar Valley is its tranquility and sense of isolation. Unlike other more tourist-heavy regions, Zanskar Valley remains largely undiscovered by mass tourism, allowing visitors to experience its pristine beauty in peace. The absence of urban noise and the remote location make Zanskar Valley an ideal place for relaxation, meditation, and introspection. Whether you are camping under the stars by the river, hiking through the rugged mountains, or simply sitting in silence, Zanskar Valley provides an unparalleled opportunity to disconnect from the outside world and reconnect with nature.
                    </p>

                    <p>
                        In conclusion, Zanskar Valley is a destination that promises an unforgettable experience for every traveler. Whether you're trekking through its rugged landscapes, visiting ancient monasteries, or immersing yourself in the local culture, Zanskar Valley offers a unique blend of adventure, spirituality, and natural beauty. Its remote location, unspoiled environment, and rich cultural heritage make it one of the most captivating regions in Ladakh. For those seeking an off-the-beaten-path adventure, Zanskar Valley should undoubtedly be on your travel itinerary. With its stunning views, tranquil atmosphere, and the warmth of its people, Zanskar Valley is truly a hidden paradise waiting to be explored.
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
  title: "Zanskar Valley",
  meta: [
    {
      name: "description",
      content: "Zanskar Valley",
    },
  ],
};
