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
                        <h1 class="main-heading">Tsomoriri Lake</h1>
                    </div>
                    <span class="d-flex justify-content-center"><strong><i>A Hidden Gem in Ladakh for Every Traveler</i></strong></span>

                    {/* Mobile Screen */}
                    <div class="row d-block d-lg-none">
                        <div class="col-12 col-lg-6 mt-3 mb-3 d-flex align-items-center justify-content-center">
                            <DestinationImage src="/img/destinations/tsomoriri-lake/tsomoriri-lake.webp" alt="Tsomoriri Lake" />
                        </div>
                    </div>

                    {/* Desktop Screen */}
                    <div class="row d-none d-lg-block">
                        <div class="col-12 col-lg-12 mt-3 mb-3 d-flex align-items-center justify-content-center">
                            <DestinationImage size="desktop" src="/img/destinations/tsomoriri-lake/tsomoriri-lake.webp" alt="Tsomoriri Lake" />
                        </div>
                    </div>


                    <p>
                        Tsomoriri Lake, located in the mesmerizing region of Ladakh, is one of the most serene and beautiful destinations for nature lovers and adventure enthusiasts. Known for its pristine beauty, this high-altitude lake is situated at 15,075 feet above sea level, making it a true hidden gem for travelers. Tsomoriri Lake is surrounded by snow-capped mountains, lush green meadows, and vast open spaces, creating a surreal atmosphere that captivates all who visit. Whether you're seeking adventure, solitude, or a deeper connection to nature, Tsomoriri Lake offers an unforgettable experience.
                    </p>

                    <p>
                        One of the most striking features of Tsomoriri Lake is its crystal-clear waters. The lake stretches over 28 kilometers in length and is renowned for its vibrant blue hue, which contrasts beautifully with the barren landscapes that surround it. The colors of Tsomoriri Lake shift depending on the time of day, creating a dynamic visual spectacle that attracts photographers and nature enthusiasts alike. The serene beauty of the lake, combined with its remote location, offers a peaceful retreat for those looking to escape the hustle and bustle of city life.
                    </p>

                    <p>
                        Tsomoriri Lake is not just a scenic destination; it also offers plenty of opportunities for adventure. The journey to Tsomoriri Lake takes travelers through some of Ladakh's most rugged and awe-inspiring landscapes, including high-altitude mountain passes and vast deserts. The road trip to Tsomoriri Lake is an adventure in itself, offering travelers the chance to experience the vastness and beauty of the region. For those interested in trekking, there are several routes around Tsomoriri Lake that offer breathtaking views of the surrounding mountains and valleys.
                    </p>

                    <p>
                        Another unique aspect of Tsomoriri Lake is its rich wildlife. Despite its harsh environment, the area around the lake is home to a variety of animal species, including the rare Tibetan Wild Ass (Kiang), Marmots, and numerous bird species. Tsomoriri Lake is also a significant stop for migratory birds, including the Bar-headed Goose, Ruddy Shelduck, and several species of waders, making it a prime spot for birdwatching. Nature enthusiasts and wildlife photographers will find Tsomoriri Lake to be an ideal destination for capturing stunning wildlife shots and experiencing Ladakh's diverse fauna.
                    </p>

                    <p>
                        Tsomoriri Lake is located within the Changthang Wildlife Sanctuary, which is home to several endangered species and is a haven for biodiversity. This sanctuary is a perfect destination for those who are keen to explore the region's natural wonders. The sanctuary's remote location ensures that Tsomoriri Lake remains a peaceful and unspoiled environment, providing visitors with a chance to experience nature in its most pure and untouched form. A visit to Tsomoriri Lake allows tourists to connect deeply with the landscape and appreciate the delicate balance of life that exists in such a harsh climate.
                    </p>

                    <p>
                        For those interested in cultural exploration, Tsomoriri Lake also offers opportunities to visit nearby settlements and learn about the unique lifestyle of the Changpa nomads. These indigenous people have lived in the region for centuries, depending on livestock farming for their livelihood. Visitors can gain insight into the traditional Ladakhi way of life by interacting with the nomadic communities that inhabit the area. The hospitality of the local people adds to the overall experience of visiting Tsomoriri Lake, offering a glimpse into the cultural richness of Ladakh.
                    </p>

                    <p>
                        In conclusion, Tsomoriri Lake is one of Ladakh's most stunning and peaceful destinations, offering a perfect blend of natural beauty, adventure, and cultural exploration. Whether you're trekking through its surrounding landscapes, enjoying the tranquility of the lake, or observing the diverse wildlife, Tsomoriri Lake provides an unforgettable experience for every traveler. Its remote location and serene environment make it an ideal getaway for those looking to escape into nature and connect with the beauty of Ladakh. If you're planning a trip to Ladakh, Tsomoriri Lake should undoubtedly be on your itinerary, as it promises to be one of the most rewarding experiences of your journey.
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
  title: "Tsomoriri Lake",
  meta: [
    {
      name: "description",
      content: "Tsomoriri Lake",
    },
  ],
};
