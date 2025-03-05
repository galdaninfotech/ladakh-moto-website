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
                        <h1 class="main-heading">Lamayuru Monastery</h1>
                    </div>
                    <span class="d-flex justify-content-center"><strong><i>A Spiritual and Scenic Wonder in Ladakh</i></strong></span>

                    {/* Mobile Screen */}
                    <div class="row d-block d-lg-none">
                        <div class="col-12 col-lg-6 mt-3 mb-3 d-flex align-items-center justify-content-center">
                            <DestinationImage src="/img/destinations/lamayuru-monastery/lamayuru-monastery.webp" alt="Lamayuru Monastery" />
                        </div>
                    </div>

                    {/* Desktop Screen */}
                    <div class="row d-none d-lg-block">
                        <div class="col-12 col-lg-12 mt-3 mb-3 d-flex align-items-center justify-content-center">
                            <DestinationImage size="desktop" src="/img/destinations/lamayuru-monastery/lamayuru-monastery.webp" alt="Lamayuru Monastery" />
                        </div>
                    </div>

                    

                    <p>
                        Lamayuru Monastery, one of Ladakh's oldest and most spectacular monasteries, is a place of spirituality, history, and breathtaking landscapes. Situated at an altitude of 3,510 meters, it is often referred to as the "Moonland of Ladakh" due to the surrounding surreal, moon-like terrain. Founded in the 11th century by Mahasiddha Naropa, Lamayuru is home to rich Buddhist heritage, stunning murals, and sacred caves that add to its mystical allure.
                    </p>

                    <h2>Things to See Inside Lamayuru Monastery</h2>
                    <ul>
                        <li>
                            <strong>The Assembly Hall (Dukhang)</strong> - A grand prayer hall adorned with ancient thangkas (Buddhist paintings), statues of deities, and vibrant murals depicting Buddhist legends. This is where monks gather for daily prayers and ceremonies.
                        </li>
                        <li>
                            <strong>The Cave of Naropa</strong> - A sacred meditation cave where the Indian saint Naropa is believed to have meditated. It is one of the holiest spots within the monastery.
                        </li>
                        <li>
                            <strong>Statues of Buddha and Bodhisattvas</strong> - The monastery houses an array of magnificent statues, including those of Lord Buddha, Avalokiteshvara (the deity of compassion), and other revered figures in Tibetan Buddhism.
                        </li>
                        <li>
                            <strong>Prayer Wheels and Chortens </strong>- Scattered around the monastery are large prayer wheels and stupas, symbolizing peace and enlightenment. Spinning the prayer wheels while reciting mantras is a ritual believed to bring good fortune.
                        </li>
                        <li>
                            <strong>Lamayuru Library</strong> - A collection of ancient Buddhist scriptures, including manuscripts written in gold and silver ink. This treasure trove of knowledge gives insight into the rich traditions of Tibetan Buddhism.
                        </li>

                    </ul>

                    <h2>Things to See Around Lamayuru Monastery</h2>
                    <ul>
                        <li>
                            <strong>The Moonland Terrain</strong> - Just outside the monastery, the unusual, crater-like formations of Lamayuru's landscape resemble the surface of the moon. This natural wonder, caused by the erosion of clay and sand, makes for a surreal and photogenic experience.
                        </li>
                        <li>
                            <strong>Wanla Monastery</strong> - A short drive from Lamayuru, Wanla Gompa is a hidden gem known for its exquisite 15th-century frescoes and unique three-story Avalokiteshvara statue.
                        </li>
                        <li>
                            <strong>Singay Lakang Temple</strong> - Located within the monastery complex, this small but intricately designed temple is an important spiritual site, featuring beautiful carvings and paintings.
                        </li>
                        <li>
                            <strong>Hemis Shukpachan Village</strong> - A peaceful Ladakhi village known for its ancient juniper trees, traditional homes, and serene walking trails offering stunning views of the Himalayas.
                        </li>
                        <li>
                            <strong>Fotu La Pass (4,108m) </strong>- Just beyond Lamayuru, this high-altitude pass is the highest point on the Srinagar-Leh Highway and offers panoramic views of the surrounding mountains and valleys.
                        </li>
                    </ul>


                    <h2>Festivals at Lamayuru Monastery</h2>
                    <p>
                        The monastery is most vibrant during the annual Yuru Kabgyat Festival, a grand celebration featuring masked Cham dances, sacred rituals, and traditional music performed by the monks. Held in June or July, this festival attracts both pilgrims and travelers eager to witness Ladakh's rich cultural heritage.
                    </p>

                    <h2>Best Time to Visit</h2>

                    <p>
                        The ideal time to visit Lamayuru Monastery is from May to September, when the roads are open, and the weather is pleasant. Winter visits are also possible but can be challenging due to snowfall and extreme cold.
                    </p>

                    <h2>How to Reach Lamayuru Monastery</h2>

                    <ul>
                        <li>
                            <strong>By Road</strong>: Lamayuru is about 125 km from Leh, situated on the Srinagar-Leh Highway (NH1). The scenic drive takes around 4 hours, passing through breathtaking mountain passes and valleys.
                        </li>
                        <li>
                            <strong>By Bike or Self-Drive</strong>: A popular stop for bikers and road trip enthusiasts, Lamayuru offers an unforgettable journey through Ladakh's dramatic landscapes.
                        </li>
                        <li>
                            <strong>By Public Transport</strong>: Shared taxis and buses operate between Leh and Lamayuru, though schedules may vary.
                        </li>
                    </ul>

                    <h2>Where to Stay</h2>

                    <p>
                        There are basic guesthouses and homestays near Lamayuru Monastery, offering a comfortable stay with warm Ladakhi hospitality. For those seeking a more immersive experience, staying at the monastery's guest quarters is a unique opportunity to experience the monastic lifestyle.
                    </p>

                    <h2>Experience the Tranquility of Lamayuru</h2>

                    <p>
                        Whether you're drawn to its spiritual significance, breathtaking scenery, or ancient Buddhist heritage, Lamayuru Monastery promises a one-of-a-kind journey into Ladakh's mystical past. The peaceful aura, the rugged beauty of the Moonland, and the deep-rooted Buddhist traditions make this destination a must-visit for travelers seeking adventure, culture, and serenity in the heart of the Himalayas.
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
  title: "Lamayuru Monastery - Buddhist Heritage & Moonland Views | Complete Travel Guide!",
  meta: [
    {
      name: "description",
      content: 'Explore Lamayuru Monastery with Ladakh Moto. Discover ancient Buddhist heritage, stunning "Moonland" landscapes, and vibrant local festivals. Plan your Lamayuru Monastery visit today!',
    },
  ],
};
