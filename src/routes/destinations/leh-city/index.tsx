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
                        Leh City, the capital of Ladakh, is a mesmerizing destination nestled in the northernmost part of India. Known for its stunning landscapes, serene monasteries, and rich culture, Leh City attracts thousands of tourists every year. The city is surrounded by the majestic Himalayan mountains, offering visitors unparalleled views of snow-capped peaks and vast desert landscapes. For those looking for adventure, spirituality, and a taste of local life, Leh City is the perfect getaway.
                    </p>

                    <p>
                        One of the top reasons to visit Leh City is its breathtaking natural beauty. The city is situated at an altitude of 11,500 feet above sea level, which gives it a unique charm with clear blue skies, rugged terrain, and striking views of the surrounding mountains. Trekking, mountain biking, and river rafting are just a few of the adventurous activities available in Leh City. For nature lovers, the pristine environment and tranquil lakes like Pangong Tso and Tso Moriri are not to be missed.
                    </p>

                    <p>
                        Leh City is also a cultural hub, where you can experience the vibrant Ladakhi culture. The city is home to ancient monasteries, palaces, and traditional villages, each offering a glimpse into the region's unique history and heritage. Leh Palace, which was once the royal residence, offers panoramic views of the city. The monasteries of Leh City, such as Hemis, Thiksey, and Spituk, are not only places of spiritual significance but also architectural marvels, making them a must-see for every visitor.
                    </p>

                    <p>
                        Leh City is also famous for its colorful markets. The Leh Market, with its bustling alleys, is the perfect place to experience the local way of life and pick up some souvenirs. From handcrafted jewelry to traditional Ladakhi clothes and carpets, the market offers an array of items that reflect the rich cultural diversity of the region. Whether you're looking for unique gifts or simply want to immerse yourself in the local vibe, Leh City's markets are a delightful experience.
                    </p>

                    <p>
                        For those interested in history, Leh City offers plenty of sites that tell the story of its past. The ancient Leh Palace, built in the 16th century, gives visitors a glimpse into the royal lifestyle of the region. The monasteries surrounding the city also have deep historical significance, with murals, scriptures, and relics that date back centuries. Exploring these sites provides insight into the spiritual and cultural evolution of Leh City.
                    </p>

                    <p>
                        The weather in Leh City is also one of its most appealing aspects. The region experiences a cold desert climate, with clear skies and crisp air year-round. Summers (from May to September) are ideal for tourists, with pleasant temperatures and plenty of sunshine. Winters, although harsh, offer a chance to see Leh City covered in a blanket of snow, making it an equally magical destination for those seeking winter adventures or peace and solitude.
                    </p>

                    <p>
                        Visiting Leh City is not just about the scenery and adventure; it's about the experience of connecting with the local community. The people of Leh City are warm and welcoming, with a unique blend of Tibetan and Indian cultures. Interacting with locals, learning about their traditions, and tasting the local Ladakhi cuisine are experiences that will stay with you long after your visit. Whether you are wandering through the ancient monasteries or savoring a cup of butter tea, Leh City will leave an indelible mark on your heart.
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
  title: "Leh City",
  meta: [
    {
      name: "description",
      content: "Leh City",
    },
  ],
};
