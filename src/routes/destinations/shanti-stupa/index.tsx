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
                        Shanti Stupa, located in the heart of Leh, Ladakh, is one of the most iconic and peaceful landmarks in the region. Built to promote world peace, Shanti Stupa is not just a religious monument but also a symbol of harmony and spirituality. Perched on a hilltop, this majestic stupa offers stunning panoramic views of the surrounding Leh city, the Indus Valley, and the snow-capped mountains. A visit to Shanti Stupa is a must for anyone traveling to Ladakh, as it provides both spiritual enrichment and a breathtaking experience of the natural beauty of the region.
                    </p>

                    <p>
                        The Shanti Stupa was constructed by the Japanese Buddhist monk, Gyomyo Nakamura, in collaboration with the locals of Ladakh in the 1990s. It was built with the vision of promoting peace, as a symbol of the bond between Japan and Ladakh. The structure is adorned with intricate designs, and the golden statue of the Buddha inside the stupa adds to its serenity. Shanti Stupa is not only a place of pilgrimage but also a place where visitors can reflect on the importance of peace and compassion in today's world.
                    </p>

                    <p>
                        One of the main attractions of Shanti Stupa is its location, which offers a spectacular view of Leh and its surrounding landscapes. Situated at an altitude of 3,600 meters, Shanti Stupa provides an unobstructed view of the majestic Himalayan mountains, the green valleys of Leh, and the sprawling Indus River below. The sight of the sun setting over the valley from Shanti Stupa is truly mesmerizing, with the entire landscape bathed in golden hues. Whether you're an early riser or a sunset lover, Shanti Stupa offers one of the most serene and beautiful views in Ladakh.
                    </p>

                    <p>
                        The architectural design of Shanti Stupa is another feature that makes it stand out. The stupa's white walls and golden dome make it one of the most recognizable structures in Ladakh. The stupa's design follows the traditional Buddhist architectural style, with beautifully detailed carvings depicting various aspects of Buddha's life. As you walk around the stupa, the peaceful ambiance and the gentle breeze further enhance the tranquility of the space. The stupa also has several prayer wheels, allowing visitors to engage in the Buddhist practice of spinning the wheels as a form of meditation and prayer.
                    </p>

                    <p>
                        For those interested in the spiritual and cultural aspects of Ladakh, visiting Shanti Stupa offers a chance to connect with the region's Buddhist heritage. The stupa plays an important role in the Buddhist community in Ladakh and serves as a gathering place for pilgrims and monks. The peaceful surroundings of Shanti Stupa provide the perfect setting for meditation, reflection, and inner peace. Whether you're interested in learning about Buddhist philosophy or simply want to take in the serenity of the place, Shanti Stupa offers a profound spiritual experience for all visitors.
                    </p>

                    <p>
                        Shanti Stupa is also a great place for photography. Its stunning architecture, combined with the beautiful natural surroundings, provides endless opportunities for capturing the beauty of Ladakh. The view from the stupa, especially during the early morning or evening light, is absolutely stunning. Whether you're a professional photographer or an amateur, Shanti Stupa offers some of the best photographic moments in Ladakh. Its unique combination of cultural heritage and natural beauty makes it an ideal destination for those looking to capture the essence of the region.
                    </p>

                    <p>
                        In conclusion, Shanti Stupa is a must-visit destination for any traveler in Ladakh. Its peaceful ambiance, breathtaking views, spiritual significance, and beautiful architecture make it one of the most iconic landmarks in the region. Whether you're seeking spiritual solace, enjoying the panoramic views, or simply immersing yourself in the tranquility of the surroundings, Shanti Stupa offers a rewarding experience for every visitor. If you're planning a trip to Ladakh, make sure to include Shanti Stupa on your itinerary — it promises to be an unforgettable experience that leaves you with a sense of peace and serenity.
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
