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
                    <span class="d-flex justify-content-center"><strong><i>A Symbol of Peace and Serenity in Ladakh</i></strong></span>

                    {/* Mobile Screen */}
                    <div class="row d-block d-lg-none">
                        <div class="col-12 col-lg-6 mt-3 mb-3 d-flex align-items-center justify-content-center">
                            <DestinationImage src="/img/destinations/shanti-stupa/shanti-stupa.webp" alt="Shanti Stupa" />
                        </div>
                    </div>

                    {/* Desktop Screen */}
                    <div class="row d-none d-lg-block">
                        <div class="col-12 col-lg-12 mt-3 mb-3 d-flex align-items-center justify-content-center">
                            <DestinationImage size="desktop" src="/img/destinations/shanti-stupa/shanti-stupa.webp" alt="Shanti Stupa" />
                        </div>
                    </div>


                    <p>
                        Perched atop the serene hills of Chanspa in Leh, Ladakh, the Shanti Stupa stands as a luminous beacon of peace and unity. This white-domed Buddhist monument not only showcases architectural splendor but also offers visitors a tranquil retreat with panoramic vistas of the surrounding Himalayan landscape.
                    </p>

                    <h2>Historical Significance</h2>

                    <p>
                        The inception of Shanti Stupa dates back to 1991, a collaborative endeavor between Japanese Buddhist monk Gyomyo Nakamura and local Ladakhi craftsmen. This initiative was part of the Peace Pagoda mission, aiming to commemorate 2,500 years of Buddhism and promote global harmony. The stupa enshrines relics of Lord Buddha, sanctified by the 14th Dalai Lama, enhancing its spiritual importance. 
                    </p>

                    <h2>Architectural Marvel</h2>

                    <p>
                        The stupa's architecture is a harmonious blend of Japanese and Ladakhi styles. Its two-tiered structure is adorned with intricate carvings: the first level showcases a central golden Buddha statue in the Dharmachakra posture, symbolizing the teaching phase of Buddha's life, while the second level illustrates pivotal events such as Buddha's birth, enlightenment, and death (Mahaparinirvana). Encircling the stupa are numerous smaller meditative Buddha reliefs, enhancing the site's serene ambiance. 
                    </p>

                    <h2>Breathtaking Panoramas</h2>

                    <p>
                        At an elevation of 3,609 meters (11,841 feet), Shanti Stupa offers unparalleled panoramic views of Leh and its environs. Visitors can gaze upon the sprawling Indus Valley, the majestic Stok Kangri peak, and the quaint town of Leh nestled amidst rugged mountains. The site is particularly enchanting during sunrise and sunset, when the interplay of light and shadow paints the landscape in mesmerizing hues. 
                    </p>

                    <h2>Spiritual Oasis</h2>

                    <p>
                        Beyond its visual allure, Shanti Stupa serves as a sanctuary for meditation and introspection. The tranquil environment, punctuated by the gentle flutter of prayer flags and the distant murmur of chants, provides an ideal setting for spiritual seekers and peace enthusiasts. The stupa's construction aimed to promote world peace and prosperity, symbolizing the enduring ties between Japan and India. 
                    </p>

                    <h2>Accessibility</h2>

                    <p>
                        Reaching Shanti Stupa is both an adventure and a pilgrimage. Visitors can embark on a short drive from Leh city or undertake a more invigorating ascent via a flight of 555 steps, a journey that offers moments for reflection and anticipation. The stupa is accessible year-round, but the period between May and September is ideal, offering pleasant weather and clear skies. 
                    </p>

                    <h2>Visitor Information</h2>
                    <ul>
                        <li>Timings: Open daily from 8:00 AM to 8:00 PM.</li>
                        <li>Entry Fee: No admission charge.</li>
                        <li>Best Time to Visit: Early mornings or late afternoons to witness the captivating sunrise or sunset.</li>
                    </ul>

                    <h2>- Tips:</h2>
                    <ul>
                        <li>- Carry water and wear comfortable footwear if you plan to climb the steps.</li>
                        <li>- Be prepared for cooler temperatures, especially during evenings.</li>
                        <li>- Respect the sanctity of the site by maintaining silence and observing local customs.</li>
                    </ul>

                    <p>
                        In essence, a visit to Shanti Stupa is more than a sightseeing excursion; it's an immersion into the serene spirituality and rich cultural tapestry of Ladakh. Whether you're seeking inner peace, architectural beauty, or breathtaking landscapes, Shanti Stupa promises an experience that lingers long after you've descended its sacred steps. 
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
  title: "Shanti Stupa - Iconic Buddhist Monument in Leh | Complete Travel Guide!",
  meta: [
    {
      name: "description",
      content: "Explore Shanti Stupa with Ladakh Moto. Experience panoramic views of Leh, peaceful surroundings, and the spiritual charm of this iconic Ladakh landmark. Plan your Shanti Stupa visit today!",
    },
  ],
};
