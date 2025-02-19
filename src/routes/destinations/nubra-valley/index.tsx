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
                        Nubra Valley, located in the northernmost region of Ladakh, is a stunning destination that has recently gained popularity among tourists. Known for its captivating landscapes, Nubra Valley is often described as the "Valley of Flowers" due to its lush green fields, vibrant flowers, and tranquil beauty. The valley is surrounded by towering mountains and vast sand dunes, offering visitors a unique combination of natural beauty, adventure, and cultural heritage. If you're looking for an off-the-beaten-path destination, Nubra Valley is the place to be.
                    </p>

                    <p>
                        One of the key attractions of Nubra Valley is its picturesque landscapes. The valley is situated at the confluence of the Nubra and Shyok rivers, creating a fertile area filled with greenery and wildflowers amidst the rugged terrain. The stark contrast between the snow-capped mountains and the lush fields makes Nubra Valley an ideal destination for photographers and nature lovers. For those seeking adventure, Nubra Valley offers trekking, camel rides on the sand dunes of Hunder, and camping under the starry skies, making it a perfect retreat for adventure seekers.
                    </p>

                    <p>
                        Nubra Valley is also known for its ancient monasteries, which hold immense spiritual significance. The Diskit Monastery, perched on a hilltop, is one of the oldest and most famous in Nubra Valley. It offers panoramic views of the valley and houses a 32-meter-high statue of Maitreya Buddha, which stands as a symbol of peace and hope. Other monasteries, such as Samstanling and Panamik, are also worth a visit for those interested in the spiritual heritage of the region. Exploring these sacred sites offers a deeper connection to the history and culture of Nubra Valley.
                    </p>

                    <p>
                        The unique culture of Nubra Valley is another reason why travelers are drawn to this enchanting place. The valley is home to the Nubra people, who have a rich cultural heritage that blends Tibetan and Central Asian influences. Their traditional lifestyle, food, and festivals offer visitors a chance to immerse themselves in a unique and vibrant culture. The people of Nubra Valley are known for their hospitality, and tourists are often welcomed with open arms. If you're lucky, you may even get a chance to witness the traditional Ladakhi festivals that are celebrated in the valley.
                    </p>

                    <p>
                        Nubra Valley is also famous for its unique geography. One of the valley's most iconic features is the Hunder Sand Dunes, which are an unusual sight in this high-altitude desert. The sand dunes, combined with the backdrop of snow-capped mountains, create a surreal landscape that draws travelers from across the globe. Riding Bactrian camels, also known as the "double-humped camels," through these sand dunes is a popular activity in Nubra Valley, offering a unique experience in a truly remarkable setting.
                    </p>

                    <p>
                        For those seeking peace and tranquility, Nubra Valley offers several opportunities for relaxation and rejuvenation. The valley's remote location, away from the hustle and bustle of city life, makes it an ideal spot for meditation, yoga, and introspection. With its pristine environment, clear skies, and serene atmosphere, Nubra Valley allows visitors to disconnect from the outside world and reconnect with themselves. Whether you're camping by the river or enjoying a peaceful sunset over the mountains, the valley's serenity is unmatched.
                    </p>

                    <p>
                        The climate in Nubra Valley is also one of its highlights. The valley experiences a cold desert climate with harsh winters and pleasant summers. During the summer months (from May to September), the weather is ideal for sightseeing, trekking, and other outdoor activities. The clear skies and moderate temperatures create perfect conditions for exploring the valley's natural beauty. However, due to its high altitude, visitors should be prepared for sudden changes in weather and take necessary precautions. Regardless of the time of year, Nubra Valley's beauty remains captivating and unforgettable.
                    </p>

                    <p>
                        In conclusion, Nubra Valley is an exceptional destination that offers a perfect blend of natural beauty, adventure, culture, and tranquility. Whether you're exploring ancient monasteries, riding camels on the sand dunes, or simply enjoying the peaceful surroundings, Nubra Valley promises an unforgettable experience. Its stunning landscapes, rich cultural heritage, and unique geography make it a must-visit destination for every traveler seeking an off-the-beaten-path adventure. If you're planning a trip to Ladakh, make sure to include Nubra Valley in your itinerary - it will undoubtedly be the highlight of your journey.
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
  title: "Nubra Valley",
  meta: [
    {
      name: "description",
      content: "Nubra Valley",
    },
  ],
};
