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
                        <h1 class="main-heading">Pangong Lake</h1>
                    </div>
                    <span class="d-flex justify-content-center"><strong><i>A Stunning Destination for Every Traveler</i></strong></span>

                    {/* Mobile Screen */}
                    <div class="row d-block d-lg-none">
                        <div class="col-12 col-lg-6 mt-3 mb-3 d-flex align-items-center justify-content-center">
                            <DestinationImage src="/img/destinations/pangong-lake/pangong-lake.webp" alt="Pangong Lake" />
                        </div>
                    </div>

                    {/* Desktop Screen */}
                    <div class="row d-none d-lg-block">
                        <div class="col-12 col-lg-12 mt-3 mb-3 d-flex align-items-center justify-content-center">
                            <DestinationImage size="desktop" src="/img/destinations/pangong-lake/pangong-lake.webp" alt="Pangong Lake" />
                        </div>
                    </div>


                    
                    <p>
                        Pangong Lake, located in the northern region of Ladakh, is one of the most famous and breathtaking destinations in India. Known for its stunning beauty, this high-altitude lake stretches across 134 kilometers, with roughly two-thirds of it lying in China. Pangong Lake is a must-visit spot for nature lovers, adventure seekers, and anyone looking to experience the serene and untouched landscapes of Ladakh. Its unique color-changing waters, surrounded by barren mountains, offer a surreal and unforgettable experience for every tourist visiting Pangong Lake.
                    </p>

                    <p>
                        The main highlight of Pangong Lake is its mesmerizing blue waters, which change colors throughout the day. The lake, located at an altitude of 14,270 feet, is known for its vivid shades of blue and turquoise, which appear even more striking against the backdrop of the barren, rocky mountains. Whether it's the early morning sunlight or the late afternoon glow, Pangong Lake offers numerous opportunities for photography, making it an ideal destination for those looking to capture the natural beauty of Ladakh. The crystal-clear waters and dramatic surroundings make Pangong Lake one of the most photogenic locations in the world.
                    </p>

                    <p>
                        A visit to Pangong Lake is also an adventure in itself. While the lake is the primary attraction, the journey to Pangong Lake is equally fascinating. Located about 160 kilometers from Leh, the road to Pangong Lake takes travelers through some of the most stunning landscapes of Ladakh, including high mountain passes like Chang La. The drive offers panoramic views of the surrounding hills, valleys, and villages, making it a memorable experience. For those seeking a bit of adventure, the road journey to Pangong Lake is sure to excite and inspire.
                    </p>

                    <p>
                        Pangong Lake also offers an opportunity for peaceful reflection and relaxation. The remote and tranquil environment of the lake makes it a perfect spot for unwinding and connecting with nature. Visitors can spend their time walking along the shore, taking in the mesmerizing views, or simply sitting and soaking in the peaceful atmosphere. Pangong Lake is an ideal destination for those who wish to escape the hustle and bustle of city life and immerse themselves in a place of solitude and serenity. Camping by the lake under the starry sky is another popular activity that allows tourists to experience the full magic of Pangong Lake.
                    </p>

                    <p>
                        Another unique feature of Pangong Lake is its unique wildlife. Despite being situated in a harsh and remote region, Pangong Lake is home to a variety of birds and animals, making it a great destination for wildlife enthusiasts. Migratory birds such as the Bar-headed Goose, Ruddy Shelduck, and other species are often spotted around the lake, making it a haven for birdwatchers. The area surrounding Pangong Lake is also home to the rare Tibetan wild ass, or Kiang, as well as marmots and other small wildlife. These fascinating creatures add an extra layer of excitement to the overall experience of visiting Pangong Lake.
                    </p>

                    <p>
                        While visiting Pangong Lake, travelers also have the chance to explore nearby villages and cultural sites. The nearby village of Spangmik, where many travelers camp, offers a glimpse into the local Ladakhi lifestyle. Visitors can interact with the friendly locals, sample traditional Ladakhi cuisine, and experience the simplicity of life in one of the most remote areas of India. The area's unique culture and hospitality add an enriching experience to your visit to Pangong Lake. Exploring these villages provides a deeper connection to the culture and traditions of Ladakh.
                    </p>

                    <p>
                        Pangong Lake is a destination that should be included in every traveler's itinerary when visiting Ladakh. Its unparalleled beauty, peaceful surroundings, and the unique experience it offers make it one of the most sought-after destinations in the region. Whether you're looking for adventure, tranquility, or simply a place to marvel at the wonders of nature, Pangong Lake is sure to exceed your expectations. With its stunning landscape, rich wildlife, and tranquil atmosphere, Pangong Lake is more than just a lake - it's an unforgettable experience that every traveler must experience.
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
  title: "Pangong Lake - Ladakh's Iconic High-Altitude Lake & Scenic Beauty | Complete Travel Guide!",
  meta: [
    {
      name: "description",
      content: "Explore the breathtaking Pangong Lake with Ladakh Moto. Witness the changing colors of the lake, enjoy scenic drives, and experience Ladakh's stunning landscapes. Book your Pangong Lake adventure today!",
    },
  ],
};
