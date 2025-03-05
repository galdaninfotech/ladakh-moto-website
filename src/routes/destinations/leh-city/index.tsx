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
                        <h1 class="main-heading">Leh City</h1>
                    </div>
                    <span class="d-flex justify-content-center"><strong><i>A Must-Visit Destination for Every Traveler</i></strong></span>

                    {/* Mobile Screen */}
                    <div class="row d-block d-lg-none">
                        <div class="col-12 col-lg-6 mt-3 mb-3 d-flex align-items-center justify-content-center">
                            <DestinationImage src="/img/destinations/leh-city/leh-city.webp" alt="Leh City" />
                        </div>
                    </div>

                    {/* Desktop Screen */}
                    <div class="row d-none d-lg-block">
                        <div class="col-12 col-lg-12 mt-3 mb-3 d-flex align-items-center justify-content-center">
                            <DestinationImage size="desktop" src="/img/destinations/leh-city/leh-city.webp" alt="Leh City" />
                        </div>
                    </div>

                    
                    
                    <p>
                        Leh, town, Ladakh union territory, northern India. The town is located in the valley of the upper Indus River at an elevation of 11,550 feet (3,520 meters), surrounded by the towering peaks of the Ladakh Range (a southeastern extension of the Karakoram Range).
                    </p>

                    <p>
                        Nestled in the heart of the Himalayas, Leh is a captivating blend of natural splendor and rich cultural heritage. As the largest city and joint capital of Ladakh, it serves as a gateway to the region's most mesmerizing landscapes and historical landmarks.
                    </p>

                    <h2>Top Attractions in Leh:</h2>



                    <ul>
                        <li>
                            <strong>Leh Palace</strong>: This 17th-century edifice, constructed by King Sengge Namgyal, offers panoramic views of the city and the Stok Kangri Mountain in the Zanskar range. Its architecture reflects a harmonious blend of Indian and Tibetan styles.
                        </li> 
                        <li>
                            <strong>Shanti Stupa</strong>: Perched atop Changspa hill, this white-domed stupa provides breathtaking vistas of Leh and the surrounding snow-capped peaks. Built-in 1991 by Japanese Buddhist Bhikshu, it's especially enchanting at sunrise and sunset. 
                            </li>
                        <li>
                            <strong>Sankar Monastery</strong>: Sankar Monastery, a serene Buddhist retreat in Leh, is a must-visit for those seeking peace and spirituality. Located just a few kilometres from the city centre, this monastery is an offshoot of Spituk Monastery and serves as the residence of the head lama of Ladakh. Adorned with intricate murals, golden statues, and a mesmerizing image of Avalokiteshvara with 1,000 arms, Sankar Monastery offers a tranquil escape with stunning views of Leh. It is best visited in the evening when the monks perform their daily prayers, creating a truly divine atmosphere.
                        </li>
                        <li>
                            <strong>Leh Market</strong>: Leh Market is the vibrant heart of the city, bustling with local life and colourful shops. From handcrafted Pashmina shawls and Tibetan jewellery to traditional Ladakhi artifacts and souvenirs, the market is a paradise for shoppers. The aroma of freshly brewed butter tea and local delicacies fills the air, while street vendors showcase exquisite handicrafts. Whether you're looking for unique keepsakes or simply soaking in the lively atmosphere, Leh Market offers an authentic taste of Ladakh’s rich culture and heritage.
                        </li>
                        <li>
                            <strong>Namgyal Tsemo Gompa</strong>: This monastery, established in 1430, is known for its three-story high gold statue of Maitreya Buddha and ancient manuscripts. The monastery offers a breathtaking view of the town.
                        </li>
                        <li>
                            <strong>Thiksey Monastery</strong>: Located approximately 18 kilometers from Leh, this twelve-story complex resembles Tibet's Potala Palace and houses numerous stupas, statues, and art pieces. 
                        </li>
                        <li>
                            <strong>Hemis Monastery</strong>: One of the oldest and wealthiest monasteries in Ladakh, Hemis is renowned for its annual festival celebrating Guru Padmasambhava
                        </li>

                    </ul>
                    
                    <h2>Adventure and Activities:</h2>

                    <ul>
                        <li>
                            <strong>Trekking</strong>: Embark on the Markha Valley trek for an immersive experience through picturesque landscapes, quaint villages, and high-altitude passes. 
                        </li>
                        <li>
                            <strong>Motorbiking</strong>: Riding through Ladakh’s rugged terrain on a motorbike is the ultimate adventure, offering breathtaking views of towering mountains, high-altitude passes, and pristine valleys. The thrill of conquering routes like Khardung La and Chang La makes it a dream destination for every biking enthusiast.
                        </li>
                        <li>
                            <strong>Mountaineering</strong>: Leh is a paradise for mountaineering enthusiasts, offering thrilling climbs amidst the majestic Himalayas. Peaks like Stok Kangri (6,153m), Kang Yatse (6,400m), and Nun Kun (7,135m) challenge both beginners and experienced climbers. The breathtaking landscapes, high-altitude glaciers, and rugged terrain make every ascent an unforgettable adventure. With proper acclimatization and expert guidance, mountaineering in Leh promises a once-in-a-lifetime experience for those seeking adrenaline and awe-inspiring views.
                        </li>
                        <li>
                            <strong>River Rafting</strong>: Challenge the rapids of the Zanskar River for an adrenaline-pumping adventure amidst deep gorges and towering mountains. 
                        </li>
                        <li>
                            <strong>Star Gazing</strong>: Leh's clear skies make it a haven for stargazers and astrophotographers. The minimal light pollution offers unparalleled views of the night sky. 
                        </li>    
                    </ul>


                    <h2>Cultural Insights:</h2>
                    <p>
                        Leh's vibrant markets are a treasure trove of traditional crafts, jewellery, and textiles. Engage with the warm-hearted locals, savour authentic Ladakhi cuisine, and immerse yourself in the region's unique festivals and traditions.
                    </p>

                    <h2>Best Time to Visit:</h2>
                    <p>
                        The ideal period to explore Leh is from May to September when the weather is pleasant, and all routes and passes are accessible. 
                    </p>

                    <h2>How to reach Leh:</h2>
                    <p>
                        Leh can be reached by air, road, and, for the truly adventurous, by bike. The Kushok Bakula Rimpoche Airport in Leh is well-connected with major Indian cities like Delhi, Mumbai, and Srinagar. By road, travelers can take the Manali-Leh Highway (open from June to September) or the Srinagar-Leh Highway (open from May to October), both offering stunning landscapes along the way. For thrill-seekers, a bike trip to Leh through winding mountain roads and high-altitude passes is an unforgettable experience.
                    </p>

                    <p>
                        Embark on a journey to Leh and uncover the magic of this Himalayan gem, where every corner tells a story and every experience leaves an indelible mark on your soul.
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
  title: "Leh City - Culture, Adventure & Scenic Beauty | Complete Travel Guide!",
  meta: [
    {
      name: "description",
      content: "Discover the charm of Leh City, the cultural heart of Ladakh. Explore ancient monasteries, vibrant markets, and thrilling Himalayan adventures. Plan your unforgettable journey with Ladakh Moto today!",
    },
  ],
};
