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
                        Lamayuru Monastery, one of the oldest and most revered Buddhist monasteries in Ladakh, is a must-visit destination for anyone traveling to the region. Perched on a hilltop amidst the dramatic landscapes of Ladakh, Lamayuru Monastery offers a unique blend of history, culture, and natural beauty. Located around 120 kilometers from Leh, the monastery is an architectural marvel that attracts pilgrims, spiritual seekers, and travelers from all over the world. With its ancient origins, stunning surroundings, and rich Buddhist heritage, Lamayuru Monastery provides an unforgettable experience for every visitor.
                    </p>

                    <p>
                        The history of Lamayuru Monastery dates back to the 10th century, making it one of the most historically significant monasteries in Ladakh. It is believed that the monastery was originally founded by a prominent Buddhist scholar, and it has since evolved into a center for Buddhist learning and practice. Lamayuru Monastery is a major site for followers of the Gelug and Kagyu sects of Tibetan Buddhism. Its spiritual significance draws numerous pilgrims each year who come to seek blessings and experience the serene atmosphere of the monastery.
                    </p>

                    <p>
                        The architecture of Lamayuru Monastery is another highlight of the site. The monastery is built in a traditional Tibetan style, with intricately designed prayer halls, temples, and stupas that house various Buddhist relics and sacred objects. One of the most striking features of the monastery is its large prayer hall, adorned with beautiful frescoes and statues of Buddha. Visitors can explore the monastery's interior and marvel at the vivid artwork and religious symbols that depict scenes from the life of the Buddha and various Buddhist teachings. The monastery is also home to a small community of monks who continue to maintain its spiritual practices.
                    </p>

                    <p>
                        One of the most captivating aspects of Lamayuru Monastery is its stunning location. Situated on a rocky hill overlooking the surrounding landscape, the monastery provides breathtaking panoramic views of the moon-like terrain of Lamayuru Valley. The unique topography, with its towering cliffs, deep ravines, and barren mountains, gives the monastery an ethereal and almost otherworldly appearance. The landscape around Lamayuru Monastery is perfect for photography, with the contrast of the monastery's traditional architecture against the rugged, lunar-like terrain creating a dramatic and unforgettable scene.
                    </p>

                    <p>
                        For nature lovers and adventure seekers, Lamayuru Monastery offers an excellent opportunity to explore the surrounding valley. The area around Lamayuru is known for its rugged beauty, and there are several trekking routes that take visitors through the valley and its neighboring villages. The trek to Lamayuru Monastery is a scenic journey, offering travelers the chance to experience the raw beauty of Ladakh's landscape up close. Whether you are an experienced trekker or someone looking for a more relaxed exploration, the Lamayuru area has something to offer everyone.
                    </p>

                    <p>
                        In addition to its spiritual and natural beauty, Lamayuru Monastery also offers visitors a chance to engage with the local culture. The monastery is an active center of religious life, and visitors can witness monks in prayer, chanting, and performing rituals that have been practiced for centuries. The monastery also hosts religious festivals throughout the year, during which traditional dances, music, and ceremonies are held. These festivals offer an opportunity to experience the vibrant cultural heritage of Ladakh and deepen your understanding of the region's Buddhist traditions.
                    </p>

                    <p>
                        In conclusion, Lamayuru Monastery is a spiritual, historical, and natural gem that should not be missed by any traveler visiting Ladakh. Its rich history, breathtaking architecture, serene atmosphere, and stunning location make it one of the most captivating destinations in the region. Whether you're seeking spiritual solace, exploring Ladakh's unique landscapes, or immersing yourself in the local culture, Lamayuru Monastery offers a rewarding and enriching experience. If you're planning a trip to Ladakh, make sure to include Lamayuru Monastery on your itinerary — it promises to be a highlight of your journey and an unforgettable place to visit.
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
