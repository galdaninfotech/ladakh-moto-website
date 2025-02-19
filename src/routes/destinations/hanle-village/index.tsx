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
                        Situated in the farthest corners of Ladakh, Hanle Village is considered to be one of the mesmerizing and tranquil places in India. Hanle Village is home to magnificent sceneries, boasts of crystal clear skies, and is multicultural in nature which makes it pristine for people looking for meditation. The Village is one of the highest villages in India which is above 13,500 feet sea level making it a one of its kind experience for explorers who are tired of the mundane city life. If someone is planning a trip to Ladakh, Hanle Village is something that needs to be covered in the trip.
                    </p>

                    <p>
                        Hanle is a must visit for its unparalleled natural beauty. This place is surrounded by snow mountains, blue sky, and barren lands, making it a breathtaking view. The geography of Hanle is extremely remote, undeveloped, and rugged which is great for experiencing Ladakh's raw beauty. The worlds best place for photography, contemplation, adventure while letting wonders of nature express itself.
                    </p>

                    <p>
                        Hanle Village is also home to one of the most unique and fascinating observatories in the world. The Hanle Observatory, located in the village, is run by the Indian Institute of Astrophysics and offers stunning views of the night sky. Due to its high altitude and clear atmosphere, the observatory is one of the best places in India for stargazing. The skies around Hanle Village are so clear and unpolluted by artificial lights that visitors can enjoy mesmerizing views of the Milky Way, constellations, and even distant galaxies. This makes Hanle Village an ideal destination for astronomy enthusiasts.
                    </p>

                    <p>
                        For the intrepid adventurer, Hanle Village has diverse trekking and exploration opportunities. This village is near the Indo-Tibetan border and makes an excellent point for starting treks into the surrounding mountains and valleys. The equally challenging and rewarding treks around Hanle Village provide adventurers with opportunities to explore remote terrains, find hidden lakes, and experience the calmness of the high desert. The pristine off-the-beaten-path experience of trekking in and around Hanle Village is perfect for those seeking some solitude in Ladakh.
                    </p>

                    <p>
                        The cultural side of Hanle Village is equally unique and enriching. Hanle Village has a small community of Tibetan Buddhists who live an agrarian lifestyle. The residents of Hanle Village are hospitable and friendly and give visitors a glimpse of how life is so simple yet so fulfilling in this far-flung corner of Ladakh. The ancient monasteries in and around Hanle Village such as the Hanle Monastery are so enigmatic that one is inevitably drawn into the spirituality and the rich culture of the region. Most of these monasteries are calm and quiet and provide a wonderful opportunity for the traveler to spend some time in reflection or meditation.
                    </p>

                    <p>
                        The remoteness of Hanle Village means that it has largely escaped commercialization, and as a result, it retains its authentic charm. The village's lack of modern infrastructure and the absence of large crowds ensure that visitors can experience Ladakh in its purest form. For those who appreciate the simplicity of life, Hanle Village offers a rare opportunity to disconnect from the digital world and immerse oneself in nature and culture. The tranquility and authenticity of Hanle Village make it a perfect retreat for anyone looking for peace and solitude.
                    </p>

                    <p>
                        In conclusion, Hanle Village is an exceptional destination that offers a perfect blend of natural beauty, adventure, culture, and serenity. Whether you're exploring the surrounding mountains, stargazing at the observatory, or interacting with the locals, Hanle Village provides an enriching experience for every traveler. Its high-altitude location, breathtaking landscapes, and unique cultural offerings make it one of the most special places in Ladakh. If you are looking for a peaceful retreat, a place for adventure, or a spot to connect with nature and culture, Hanle Village should undoubtedly be on your travel list. A visit to Hanle Village promises a once-in-a-lifetime experience that will leave you with lasting memories of the beauty and tranquility of Ladakh.
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
