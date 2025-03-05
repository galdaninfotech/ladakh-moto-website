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
                        <h1 class="main-heading">Nubra Valley</h1>
                    </div>
                    <span class="d-flex justify-content-center"><strong><i>A Hidden Gem for Every Traveler</i></strong></span>

                    {/* Mobile Screen */}
                    <div class="row d-block d-lg-none">
                        <div class="col-12 col-lg-6 mt-3 mb-3 d-flex align-items-center justify-content-center">
                            <DestinationImage src="/img/destinations/nubra-valley/nubra-valley.webp" alt="Nubra Valley" />
                        </div>
                    </div>

                    {/* Desktop Screen */}
                    <div class="row d-none d-lg-block">
                        <div class="col-12 col-lg-12 mt-3 mb-3 d-flex align-items-center justify-content-center">
                            <DestinationImage size="desktop" src="/img/destinations/nubra-valley/nubra-valley.webp" alt="Nubra Valley" />
                        </div>
                    </div>

                    
                    <p>
                        Nubra Valley, often called the "Valley of Flowers," is a breathtaking region in Ladakh where lush green villages contrast beautifully with vast cold deserts and rugged mountains. Located at the confluence of the Shyok and Nubra Rivers, this high-altitude valley is home to stunning attractions like the Hunder Sand Dunes, Diskit Monastery, and Panamik Hot Springs. Visitors can experience the thrill of a Bactrian camel ride, explore ancient monasteries, and immerse themselves in the valley's rich culture. With its unique blend of landscapes and adventures, Nubra Valley is a must-visit destination for every traveler.
                    </p>

                    <h2>Top Attractions:</h2>

                    <ul>
                        <li>
                            <strong>Hunder Sand Dunes</strong>: Experience the surreal landscape of high-altitude desert dunes and enjoy a ride on the unique double-humped Bactrian camels.
                        </li>
                        <li>
                            <strong>Diskit Monastery</strong>: Visit the oldest and largest monastery in Nubra, home to a towering 32-meter statue of Maitreya Buddha and offering panoramic valley views.
                        </li>
                        <li>
                            <strong>Turtuk Village</strong>: Explore this quaint village near the India-Pakistan border, opened to tourists only in 2010, and immerse yourself in its rich Balti culture. 
                        </li>
                        <li>
                            <strong>Khardung La Pass</strong>: one of the world's highest motorable roads at 5,359 meters (18,380 feet), is a gateway to the stunning Nubra Valley. This legendary pass offers breathtaking panoramic views of the snow-capped Himalayas and an exhilarating experience for adventure seekers. Popular among bikers and travelers, Khardung La is not just a high-altitude challenge but also a testament to Ladakh's rugged beauty. A stop here for photos, a warm cup of tea, and a deep breath of crisp mountain air is an unforgettable part of any Ladakh journey.
                        </li>
                        <li>
                            <strong>Panamik Hot Springs</strong>: Located at an altitude of 10,442 feet, these natural sulfur-rich springs are believed to have healing benefits for skin ailments and joint pains. Travelers can soak in the warm waters while enjoying stunning views of the snow-clad mountains and rugged Ladakhi landscape. A visit to Panamik Hot Springs offers a perfect blend of relaxation and adventure, making it a must-stop destination in Nubra Valley.
                        </li>

                        <li>
                            <strong>Sumoor Village</strong>: A picturesque village in Nubra Valley, is known for its serene landscapes, lush greenery, and spiritual significance. Home to the Samstanling Monastery, the village offers a peaceful retreat with stunning views of the surrounding mountains and the Shyok River. Visitors can explore the monastery's ancient murals, prayer halls, and vibrant Buddhist culture while enjoying the tranquillity of this hidden gem. Sumoor is the perfect stop for those looking to experience Ladakh's rich heritage and natural beauty away from the crowds.
                        </li>

                        <li>
                            <strong>Siachen Glacier</strong>: The world's highest battlefield, is now open to tourists, offering a rare glimpse into the extreme conditions endured by the Indian Army. Situated at an altitude of over 18,000 feet, this remote and breathtaking region in Ladakh was once restricted to military personnel only. Visitors can now explore the Siachen Base Camp, witness the stunning frozen landscapes, and gain insight into the life of soldiers stationed in one of the harshest environments on Earth. A trip to Siachen is a unique and unforgettable experience for adventure enthusiasts and patriots alike.
                        </li>

                        <li>
                            <strong>Bactrian Camel Safari</strong>: The Bactrian camel safari in Nubra Valley is a popular tourist activity in the northernmost part of India's Ladakh region. Bactrian camels are unique creatures with two humps on their back, and they are well adapted to the harsh desert environment of the Nubra Valley. They are commonly referred to as 'ships of the desert' and are often used as pack animals in this region.
                        </li>
                    </ul>



                    <h2>Activities:</h2>
                    <ul>
                        <li>
                            <strong>Adventure</strong>: Embark on treks through scenic trails, camp under the starry Ladakhi sky, or experience the thrill of motorbiking through rugged terrains.
                        </li>
                        <li>
                            <strong>River Rafting</strong>: Challenge the rapids of the Shayok River for an adrenaline-pumping adventure amidst deep gorges and towering mountains. 
                        </li>
                        <li>
                            <strong>Cultural Immersion</strong>: Engage with the warm-hearted locals, savor traditional Ladakhi cuisine, and participate in vibrant festivals that showcase the region's heritage.
                        </li>
                    </ul>

                    <h2>Best Time to Visit:</h2>
                    <p>
                        The ideal period to explore Nubra Valley is from May to September, when the weather is pleasant and conducive for sightseeing and outdoor activities.
                    </p>

                    <h2>How to Reach:</h2>
                    <p>
                        By Road: Nubra Valley is approximately 130 kilometers from Leh, the capital of Ladakh. The journey takes you through the scenic Khardong - La Pass, one of the world's highest motorable roads, offering panoramic views of the rugged Himalayan terrain.
                    </p>

                    <h2>Permits:</h2>
                    <p>
                        Visitors are required to obtain an Inner Line Permit to access Nubra Valley, as it is located near the sensitive Line of Control between India and Pakistan. These permits can be acquired in Leh and are mandatory for both domestic and international tourists.
                    </p>

                    <p>
                        Discover the enchanting allure of Nubra Valley - a destination where every moment is a journey into nature's splendor and cultural richness.
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
  title: "Nubra Valley - Sand Dunes, Monasteries & Adventure | Complete Travel Guide!",
  meta: [
    {
      name: "description",
      content: "Discover the beauty of Nubra Valley with Ladakh Moto. Visit Hunder sand dunes, ride through Khardung La Pass, explore ancient monasteries, and experience Ladakh's unique culture. Plan your Nubra Valley adventure today!",
    },
  ],
};
