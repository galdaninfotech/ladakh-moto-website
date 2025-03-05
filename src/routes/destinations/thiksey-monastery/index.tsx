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
                        <h1 class="main-heading">Thiksey Monastery</h1>
                    </div>
                    <span class="d-flex justify-content-center"><strong><i>A Majestic Cultural and Spiritual Experience in Ladakh</i></strong></span>

                    {/* Mobile Screen */}
                    <div class="row d-block d-lg-none">
                        <div class="col-12 col-lg-6 mt-3 mb-3 d-flex align-items-center justify-content-center">
                            <DestinationImage src="/img/destinations/thiksey-monastery/thiksey-monastery.webp" alt="Thiksey Monastery" />
                        </div>
                    </div>

                    {/* Desktop Screen */}
                    <div class="row d-none d-lg-block">
                        <div class="col-12 col-lg-12 mt-3 mb-3 d-flex align-items-center justify-content-center">
                            <DestinationImage size="desktop" src="/img/destinations/thiksey-monastery/thiksey-monastery.webp" alt="Thiksey Monastery" />
                        </div>
                    </div>


                    
                    <p>
                        Perched on a hilltop at an altitude of 3,600 meters, Thiksey Monastery is one of the most stunning and largest monasteries in Ladakh. Often compared to Tibet's Potala Palace, this 12-story monastery offers breathtaking views of the Indus Valley and houses a treasure trove of Buddhist art, statues, stupas, and ancient scriptures. Founded in the 15th century, Thiksey is a thriving center of Buddhist learning, attracting monks, pilgrims, and travelers from around the world.
                    </p>

                    <h2>Things to See Inside Thiksey Monastery</h2>

                    <ul>
                        <li>
                            <strong>Maitreya Buddha Statue</strong> - One of the most iconic attractions of Thiksey Monastery, this 49-foot-tall statue of Maitreya Buddha (the Future Buddha) spans two floors and is adorned with gold and vibrant colors. It was built in 1970 to commemorate the 14th Dalai Lama's visit.
                        </li>
                        <li>
                            <strong>Assembly Hall (Dukhang)</strong> - The main prayer hall, where monks gather for daily prayers and religious ceremonies. The hall is beautifully decorated with intricate murals, thangkas (Buddhist paintings), and ancient scriptures.
                        </li>
                        <li>
                            <strong>3Tara Temple</strong> - This sacred space is dedicated to Goddess Tara, the female Bodhisattva of compassion. Inside, you'll find 21 statues of Tara, each representing a different aspect of her divine presence.
                        </li>
                        <li>
                            <strong>Lamokhang Temple</strong> - This section houses sacred Buddhist scriptures, including rare manuscripts written in gold and silver ink. It also serves as a learning center where young monks study Buddhist philosophy and literature.
                        </li>
                        <li>
                            <strong>Rooftop Viewpoint</strong> - One of the highlights of the monastery is its panoramic rooftop, offering stunning views of the surrounding mountains, the Indus River, and the lush valleys of Ladakh. Sunset and sunrise from this point are particularly mesmerizing.
                        </li>
                        <li>
                            <strong>Prayer Wheels & Chortens</strong> - As you walk around the monastery, you will find giant prayer wheels and white stupas (chortens), symbolizing peace and enlightenment. Spinning the prayer wheels while chanting mantras is a common spiritual practice.
                        </li>
                        <li>
                            <strong>Monks' Living Quarters</strong> - The monastery is home to over 100 monks, and visitors can observe their daily routines, including morning prayer chants, meditation sessions, and traditional rituals.
                        </li>
                        <li>
                            <strong>Cham Dance Hall</strong> - During festivals like Gustor, the monastery hosts elaborate masked dance performances, where monks perform the Cham dance to depict Buddhist teachings and the victory of good over evil.
                        </li>
                    </ul>


                    <h2>Things to See Around Thiksey Monastery</h2>
                    <ul>
                        <li>
                            <strong>Shey Palace & Monastery (5 km away)</strong> - The former royal residence of Ladakh's kings, this historic palace features a 15-meter-tall copper statue of Shakyamuni Buddha, one of the largest in Ladakh.
                        </li>
                        <li>
                            <strong>Stakna Monastery (9 km away)</strong> - Known as the "Tiger's Nose Monastery" due to its location on a rocky hill, this monastery offers incredible views of the Indus River and houses beautiful paintings and scriptures.
                        </li>
                        <li>
                            <strong>Hemis Monastery (35 km away)</strong> - The largest and wealthiest monastery in Ladakh, Hemis is famous for its Hemis Festival, celebrated with vibrant mask dances and traditional rituals.
                        </li>
                        <li>
                            <strong>Indus River Rafting</strong> - Adventure seekers can experience white-water rafting on the Indus River, offering thrilling rapids and scenic landscapes along the way.
                        </li>
                        <li>
                            <strong>Leh City (19 km away) </strong>- The capital of Ladakh, Leh is home to Leh Palace, Shanti Stupa, bustling markets, and vibrant cafés, making it a perfect stop before or after visiting Thiksey.
                        </li>
                    </ul>

                    <h2>Festivals at Thiksey Monastery</h2>
                    <p>
                        Thiksey Monastery is known for hosting two major Buddhist festivals:
                    </p>
                    <ul>
                        <li>
                            <strong>Gustor Festival (October-November)</strong> - A two-day festival featuring sacred Cham dances (masked dances), ritual prayers, and spiritual ceremonies, celebrating the victory of good over evil.
                        </li>
                        <li>
                            <strong>Ladakh Festival (September)</strong> - The monastery participates in this grand cultural festival, showcasing traditional music, dance, and Ladakhi heritage.
                        </li>
                    </ul>

                    <h2>Best Time to Visit</h2>
                    <p>
                        The ideal time to visit Thiksey Monastery is from May to September, when Ladakh's weather is pleasant, and all roads remain accessible. The early morning prayer ceremony, held around 6:00 AM, is a must-experience for visitors seeking a deeper spiritual connection.
                    </p>

                    <h2>How to Reach Thiksey Monastery</h2>
                    <ul>
                        <li>
                            <strong>By Road</strong>: Thiksey Monastery is located 19 km from Leh, easily accessible by car, bike, or taxi via the Leh-Manali Highway.
                        </li>
                        <li>
                            <strong>By Public Transport</strong>: Buses and shared taxis operate between Leh and Thiksey, making it convenient for travelers.
                        </li>
                        <li>
                            <strong>By Air</strong>: The nearest airport is Kushok Bakula Rimpochee Airport in Leh (about 20 km away), with regular flights from Delhi, Mumbai, and Srinagar.
                        </li>
                    </ul>

                    <h2>Where to Stay</h2>
                    <p>
                        Visitors can find accommodations in Leh, Shey, or nearby guesthouses around Thiksey. For a truly immersive experience, some guesthouses offer monastery stays, where you can live among the monks and experience their daily routines.
                    </p>

                    <p>
                        Experience the Spiritual Grandeur of Thiksey With its majestic architecture, deep-rooted Buddhist traditions, and breathtaking views, Thiksey Monastery is a must-visit destination in Ladakh. Whether you're a spiritual seeker, an architecture enthusiast, or a traveler looking for peace and tranquility, Thiksey offers an unforgettable experience.
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
  title: "Thiksey Monastery - Ladakh's Majestic Buddhist Monastery | Complete Travel Guide!",
  meta: [
    {
      name: "description",
      content: "Explore Thiksey Monastery with Ladakh Moto. Discover ancient architecture, vibrant Buddhist culture, and stunning panoramic views of the Indus Valley. Plan your Thiksey Monastery visit today!",
    },
  ],
};
