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
                    <span class="d-flex justify-content-center"><strong><i>A Tranquil Retreat in Ladakh for Every Traveler</i></strong></span>

                    {/* Mobile Screen */}
                    <div class="row d-block d-lg-none">
                        <div class="col-12 col-lg-6 mt-3 mb-3 d-flex align-items-center justify-content-center">
                            <DestinationImage src="/img/destinations/hanle-village/hanle-village.webp" alt="Hanle Village" />
                        </div>
                    </div>

                    {/* Desktop Screen */}
                    <div class="row d-none d-lg-block">
                        <div class="col-12 col-lg-12 mt-3 mb-3 d-flex align-items-center justify-content-center">
                            <DestinationImage size="desktop" src="/img/destinations/hanle-village/hanle-village.webp" alt="Hanle Village" />
                        </div>
                    </div>

                    <p>
                        Tucked away in Ladakh's remote Changthang region, Hanle Village is a paradise for those seeking serenity, adventure, and a cosmic spectacle like no other. Situated at an altitude of 4,500 meters (14,763 feet), Hanle is a mesmerizing blend of vast open landscapes, rugged mountain backdrops, and a peaceful atmosphere that feels like a world untouched by time.
                    </p>

                    <p>
                        Hanle is a destination that embodies solitude, spirituality, and celestial beauty. Far from bustling tourist circuits, this remote village is surrounded by vast barren landscapes, rolling hills, and an endless expanse of open skies. The village is also home to the resilient Changpa nomads, whose traditional way of life remains unchanged for generations. Whether you come to witness the Milky Way in its full glory, explore Ladakh's untouched wilderness, or simply embrace the silence of the mountains, Hanle offers a truly surreal and unforgettable experience.
                    </p>

                    <h2>Why Visit Hanle?</h2>
                    <ul>

                        <li>Stargazing Haven - Home to the Indian Astronomical Observatory, one of the world's highest observatories, Hanle offers an unparalleled view of the night sky. With minimal light pollution, it's the perfect spot for astrophotography and gazing at galaxies, constellations, and shooting stars.</li>
                        <li>Hanle Monastery - Perched on a hill, this 17th-century Buddhist gompa belongs to the Drukpa Kagyu sect and exudes a sense of spiritual calm. The monastery offers stunning panoramic views of the surrounding valley.</li>
                        <li>Breathtaking Landscapes - Hanle's high-altitude desert, rolling plains, and distant snow-capped peaks create a surreal, picture-perfect setting. It's an ideal destination for offbeat travelers and photographers.</li>
                        <li>Nomadic Encounters - The region is home to the Changpa nomads, who live in traditional yak wool tents and herd pashmina goats. A visit to Hanle offers a glimpse into their unique way of life.</li>

                    </ul>

                    <h2>Best Time to Visit</h2>

                    <p>
                        The ideal time to visit Hanle is from May to September, when the weather is pleasant, and the roads are accessible. The nights are cold even in summer, so pack warm clothing.
                    </p>

                    <h2>How to Reach Hanle</h2>

                    <p>
                        By Road: Hanle is approximately 250 km from Leh, accessible via Umling La (the world's highest motorable pass) or via Nyoma and Loma. The journey offers stunning views of the Changthang plateau.
                    </p>
                    
                    <p>
                        Permits: Since Hanle is close to the Indo-China border, Inner Line Permits (ILP) are required for both Indian and foreign travelers, which can be obtained in Leh.
                    </p>

                    <h2>Where to Stay</h2>

                    <p>
                        Accommodation options in Hanle include homestays and guesthouses, offering basic yet comfortable facilities along with warm Ladakhi hospitality.
                    </p>

                    <h2>Experience the Magic of Hanle</h2>

                    <p>
                        Whether you're an adventure seeker, a nature lover, or a stargazing enthusiast, Hanle Village promises an unforgettable journey into the mystical heart of Ladakh. Come, witness the magic of an endless sky, the silence of the mountains, and the warmth of Ladakh's remote beauty.
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
  title: "Hanle Village - Complete Travel Guide! | Astronomy, Monastery & Tranquility",
  meta: [
    {
      name: "description",
      content: "Discover Hanle Village with Ladakh Moto. Visit the famous Hanle Observatory, explore ancient monasteries, and experience the serene beauty of Ladak-'s remote landscapes.|Plan your Hanle adventure today!",
    },
  ],
};
