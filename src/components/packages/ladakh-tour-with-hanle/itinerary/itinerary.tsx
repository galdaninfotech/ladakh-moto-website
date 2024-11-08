import { component$, useStylesScoped$ } from '@builder.io/qwik';
import ItineraryImage from "~/components/itinerary-image";
import styles from './itinerary.css?inline';
import ItineraryIcons from '~/components/itinerary-icons/itinerary-icons';

export default component$(() => {
    useStylesScoped$(styles);

    return (
        <div id="itinerary">
            <div class="sub-headings">
                <h2>Itinerary</h2>
            </div>
            <div class="itinerary-accordian">
                <div class="accordion" id="itineraryAccordion">
                    <div class="accordion-item">
                        <h3 class="accordion-header">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#itineraryCollapse1" aria-expanded="true" aria-controls="itineraryCollapse1">
                            Day 01 : Arrival in Leh – Acclimatization Day
                            </button>
                        </h3>
                        <div id="itineraryCollapse1" class="accordion-collapse collapse show" data-bs-parent="#itineraryAccordion">
                            <div class="accordion-body">
                                {/* Mobile Screen */}
                                <div class="row d-block d-lg-none">
                                    <div class="col-12 col-lg-6">
                                        <ItineraryIcons duration="4 Hr" highestAltitude="11000 ft" distance="50 km" lodging="Hotel" meal="BF/Dinner" />
                                    </div>

                                    <div class="col-12 col-lg-6 mt-3 mb-3 d-flex align-items-center justify-content-center">
                                        <ItineraryImage src="/img/packages/ladakh-tour-with-hanle/ladakh-tour-with-hanle-day1.jpg" alt="Day One Itinerary Image Of The Ladakh Tour With Hanle Bike Package" />
                                    </div>
                                </div>

                                {/* Desktop Screen */}
                                <div class="row d-none d-lg-block">
                                    <div class="col-12 col-lg-12">
                                        <ItineraryIcons duration="4 Hr" highestAltitude="11000 ft" distance="50 km" lodging="Hotel" meal="BF/Dinner" />
                                    </div>

                                    <div class="col-12 col-lg-12 mt-3 mb-3 d-flex align-items-center justify-content-center">
                                        <ItineraryImage size="desktop" src="/img/packages/ladakh-tour-with-hanle/ladakh-tour-with-hanle-day1.jpg" alt="Day One Itinerary Image Of The Ladakh Tour With Hanle Bike Package" />
                                    </div>
                                </div>

                                <ul class="itinerary">
                                    <li><span>Activity</span>: Acclimatization and Rest</li>
                                    <li><span>Highlights</span>: Arrival and acclimatization in Leh.</li>
                                    <li>Arrival in Leh: Transfer from Leh Airport to your hotel.</li>
                                    <li>Rest and Acclimatization: Spend the day resting to adjust to Leh’s high altitude.</li>
                                    <li>Evening Leisure (Optional): If feeling well-acclimated, explore Leh Market, Shanti Stupa, or Leh Palace for scenic views of the city and valley.</li>
                                    <li><span>Overnight</span>: Hotel in Leh</li>
                                </ul>

                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h3 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#itineraryCollapse2" aria-expanded="false" aria-controls="itineraryCollapse2">
                            Day 02 : Leh – Local Sightseeing and Acclimatization
                            </button>
                        </h3>
                        <div id="itineraryCollapse2" class="accordion-collapse collapse" data-bs-parent="#itineraryAccordion">
                            <div class="accordion-body">
                                {/* Mobile Screen */}
                                <div class="row d-block d-lg-none">
                                    <div class="col-12 col-lg-6">
                                        <ItineraryIcons duration="4-5 Hr" highestAltitude="11000 ft" distance="60 km" lodging="Hotel" meal="BF/Dinner" />
                                    </div>

                                    <div class="col-12 col-lg-6 mt-3 mb-3 d-flex align-items-center justify-content-center">
                                        <ItineraryImage src="/img/packages/ladakh-tour-with-hanle/ladakh-tour-with-hanle-day2.jpg" alt="Day Two Itinerary Image Of The Ladakh Tour With Hanle Bike Package" />
                                    </div>
                                </div>

                                {/* Desktop Screen */}
                                <div class="row d-none d-lg-block">
                                    <div class="col-12 col-lg-12">
                                        <ItineraryIcons duration="4-5 Hr" highestAltitude="11000 ft" distance="60 km" lodging="Hotel" meal="BF/Dinner" />
                                    </div>

                                    <div class="col-12 col-lg-12 mt-3 mb-3 d-flex align-items-center justify-content-center">
                                        <ItineraryImage size="desktop" src="/img/packages/ladakh-tour-with-hanle/ladakh-tour-with-hanle-day2.jpg" alt="Day Two Itinerary Image Of The Ladakh Tour With Hanle Bike Package" />
                                    </div>
                                </div>

                                <ul class="itinerary">
                                    <li><span>Highlights</span>: Introduction to Ladakh’s cultural and natural sites, continued acclimatization.</li>
                                    <li>Local Exploration:</li>
                                    <li>Hall of Fame: Visit this museum dedicated to the Indian Army.</li>
                                    <li>Gurudwara Pathar Sahib: A revered Sikh temple with beautiful mountain surroundings.</li>
                                    <li>Magnetic Hill: Witness the unique optical illusion that makes vehicles appear to roll uphill.</li>
                                    <li>Sangam: Stop at the confluence of the Indus and Zanskar Rivers for photos and sightseeing.</li>
                                    <li>Return to Leh: Relax in the evening, with free time to explore the local market.</li>
                                    <li><span>Overnight</span>: Hotel in Leh</li>
                                </ul>

                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h3 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#itineraryCollapse3" aria-expanded="false" aria-controls="itineraryCollapse3">
                            Day 03 : Leh to Nubra Valley via Khardung La (140 km, 5-6 hours)
                            </button>
                        </h3>
                        <div id="itineraryCollapse3" class="accordion-collapse collapse" data-bs-parent="#itineraryAccordion">
                            <div class="accordion-body">
                                {/* Mobile Screen */}
                                <div class="row d-block d-lg-none">
                                    <div class="col-12 col-lg-6">
                                        <ItineraryIcons duration="5-6 Hr" highestAltitude="18380 ft" distance="120 km" lodging="Hotel/Resort" meal="BF/Dinner" />
                                    </div>

                                    <div class="col-12 col-lg-6 mt-3 mb-3 d-flex align-items-center justify-content-center">
                                        <ItineraryImage src="/img/packages/ladakh-tour-with-hanle/ladakh-tour-with-hanle-day3.jpg" alt="Day Three Itinerary Image Of The Ladakh Tour With Hanle Bike Package" />
                                    </div>
                                </div>

                                {/* Desktop Screen */}
                                <div class="row d-none d-lg-block">
                                    <div class="col-12 col-lg-12">
                                        <ItineraryIcons duration="5-6 Hr" highestAltitude="18380 ft" distance="120 km" lodging="Hotel/Resort" meal="BF/Dinner" />
                                    </div>

                                    <div class="col-12 col-lg-12 mt-3 mb-3 d-flex align-items-center justify-content-center">
                                        <ItineraryImage size="desktop" src="/img/packages/ladakh-tour-with-hanle/ladakh-tour-with-hanle-day3.jpg" alt="Day Three Itinerary Image Of The Ladakh Tour With Hanle Bike Package" />
                                    </div>
                                </div>

                                <ul class="itinerary">
                                    <li><span>Highlights</span>: Scenic drive through Khardung La, cultural visit to Diskit Monastery, and camel safari at Hunder.</li>
                                    <li>Breakfast and Departure: Begin your journey to Nubra Valley via Khardung La Pass (18,380 feet).</li>
                                    <li>Khardung La: Stop briefly at the pass to enjoy the breathtaking views and capture photos.</li>
                                    <li>Diskit Monastery: Visit Diskit Monastery, home to the 32-meter tall Maitreya Buddha statue overlooking the Nubra Valley.</li>
                                    <li>Hunder Sand Dunes: Take a camel safari on the unique double-humped Bactrian camels at the Hunder Sand Dunes.</li>
                                    <li><span>Overnight</span>: Hotel/Guesthouse in Hunder, Nubra Valley</li>
                                </ul>

                            </div>
                        </div>
                    </div>

                    <div class="accordion-item">
                        <h3 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#itineraryCollapse4" aria-expanded="false" aria-controls="itineraryCollapse4">
                            Day 04 : Nubra Valley to Pangong Lake via Shyok Route (180 km, 5-6 hours)
                            </button>
                        </h3>
                        <div id="itineraryCollapse4" class="accordion-collapse collapse" data-bs-parent="#itineraryAccordion">
                            <div class="accordion-body">
                               {/* Mobile Screen */}
                               <div class="row d-block d-lg-none">
                                    <div class="col-12 col-lg-6">
                                        <ItineraryIcons duration="5-6 Hr" highestAltitude="14760 ft" distance="180 km" lodging="Cottages" meal="BF/Dinner" />
                                    </div>

                                    <div class="col-12 col-lg-6 mt-3 mb-3 d-flex align-items-center justify-content-center">
                                        <ItineraryImage src="/img/packages/ladakh-tour-with-hanle/ladakh-tour-with-hanle-day4.jpg" alt="Day Four Itinerary Image Of The Ladakh Tour With Hanle Bike Package" />
                                    </div>
                                </div>

                                {/* Desktop Screen */}
                                <div class="row d-none d-lg-block">
                                    <div class="col-12 col-lg-12">
                                        <ItineraryIcons duration="5-6 Hr" highestAltitude="14760 ft" distance="180 km" lodging="Cottages" meal="BF/Dinner" />
                                    </div>

                                    <div class="col-12 col-lg-12 mt-3 mb-3 d-flex align-items-center justify-content-center">
                                        <ItineraryImage size="desktop" src="/img/packages/ladakh-tour-with-hanle/ladakh-tour-with-hanle-day4.jpg" alt="Day Four Itinerary Image Of The Ladakh Tour With Hanle Bike Package" />
                                    </div>
                                </div>

                                <ul class="itinerary">
                                    <li><span>Highlights</span>: Scenic journey through the Shyok route and a mesmerizing evening by Pangong Lake.</li>
                                    <li>Breakfast and Departure: Drive along the scenic Shyok River route toward Pangong Lake.</li>
                                    <li>Arrival at Pangong Lake: Check into a lakeside camp and explore the vibrant blue waters of Pangong Tso.</li>
                                    <li>Evening Leisure: Relax by the lakeside, take photos, or simply enjoy the tranquility of the area.</li>
                                    <li><span>Overnight</span>: Camps/woooden cottages in Pangong lake</li>
                                </ul>

                            </div>
                        </div>
                    </div>

                    <div class="accordion-item">
                        <h3 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#itineraryCollapse5" aria-expanded="false" aria-controls="itineraryCollapse5">
                            Day 05 : Pangong Lake to Hanle via Chushul (250 km, 6-7 hours)
                            </button>
                        </h3>
                        <div id="itineraryCollapse5" class="accordion-collapse collapse" data-bs-parent="#itineraryAccordion">
                            <div class="accordion-body">
                                {/* Mobile Screen */}
                                <div class="row d-block d-lg-none">
                                    <div class="col-12 col-lg-6">
                                        <ItineraryIcons duration="6-7 Hr" highestAltitude="14764 ft" distance="250 km" lodging="Homestay/G.house" meal="BF/Dinner" />
                                    </div>

                                    <div class="col-12 col-lg-6 mt-3 mb-3 d-flex align-items-center justify-content-center">
                                        <ItineraryImage src="/img/packages/ladakh-tour-with-hanle/ladakh-tour-with-hanle-day5.jpg" alt="Day Five Itinerary Image Of The Ladakh Tour With Hanle Bike Package" />
                                    </div>
                                </div>

                                {/* Desktop Screen */}
                                <div class="row d-none d-lg-block">
                                    <div class="col-12 col-lg-12">
                                        <ItineraryIcons duration="6-7 Hr" highestAltitude="14764 ft" distance="250 km" lodging="Homestay/G.House" meal="BF/Dinner" />
                                    </div>

                                    <div class="col-12 col-lg-12 mt-3 mb-3 d-flex align-items-center justify-content-center">
                                        <ItineraryImage size="desktop" src="/img/packages/ladakh-tour-with-hanle/ladakh-tour-with-hanle-day5.jpg" alt="Day Five Itinerary Image Of The Ladakh Tour With Hanle Bike Package" />
                                    </div>
                                </div>

                                <ul class="itinerary">
                                    <li><span>Highlights</span>: Offbeat drive through Chushul, remote beauty of Hanle, and opportunity for stargazing.</li>
                                    <li>Breakfast and Departure: Begin your journey to Hanle, a remote village known for its night skies and observatory.</li>
                                    <li>Drive via Chushul: Follow the scenic and less-traveled route, passing through Chushul village and Rezang La Memorial.</li>
                                    <li>Arrival in Hanle: Check into a homestay or guesthouse and enjoy an evening of stargazing.</li>
                                    <li>Hanle Observatory (Optional): Visit the Indian Astronomical Observatory for a closer look at the stars.</li>
                                    <li><span>Overnight</span>: Homestay in Hanle</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="accordion-item">
                        <h3 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#itineraryCollapse6" aria-expanded="false" aria-controls="itineraryCollapse6">
                            Day 06 : Hanle to Leh via Nyoma and Mahe Bridge (250 km, 6-7 hours)
                            </button>
                        </h3>
                        <div id="itineraryCollapse6" class="accordion-collapse collapse" data-bs-parent="#itineraryAccordion">
                            <div class="accordion-body">
                                {/* Mobile Screen */}
                                <div class="row d-block d-lg-none">
                                    <div class="col-12 col-lg-6">
                                        <ItineraryIcons duration="6-7 Hr" highestAltitude="14760 ft" distance="250 km" lodging="Hotel" meal="BF/Dinner" />
                                    </div>

                                    <div class="col-12 col-lg-6 mt-3 mb-3 d-flex align-items-center justify-content-center">
                                        <ItineraryImage src="/img/packages/ladakh-tour-with-hanle/ladakh-tour-with-hanle-day6.jpg" alt="Day Six Itinerary Image Of The Ladakh Tour With Hanle Bike Package" />
                                    </div>
                                </div>

                                {/* Desktop Screen */}
                                <div class="row d-none d-lg-block">
                                    <div class="col-12 col-lg-12">
                                        <ItineraryIcons duration="6-7 Hr" highestAltitude="14760 ft" distance="250 km" lodging="Hotel" meal="BF/Dinner" />
                                    </div>

                                    <div class="col-12 col-lg-12 mt-3 mb-3 d-flex align-items-center justify-content-center">
                                        <ItineraryImage size="desktop" src="/img/packages/ladakh-tour-with-hanle/ladakh-tour-with-hanle-day6.jpg" alt="Day Six Itinerary Image Of The Ladakh Tour With Hanle Bike Package" />
                                    </div>
                                </div>

                                <ul class="itinerary">
                                    <li><span>Highlights</span>: Scenic return journey with views of high-altitude deserts.</li>
                                    <li>Breakfast and Departure: After breakfast, drive back to Leh through Nyoma and Mahe Bridge.</li>
                                    <li>Scenic Drive: Enjoy beautiful desert vistas, mountain ranges, and unique rock formations along the route.</li>
                                    <li>Arrival in Leh: Arrive in the late afternoon, with free time in Leh for rest or last-minute shopping.</li>
                                    <li><span>Overnight</span>: Homestay in Hanle</li>
                                </ul>

                            </div>
                        </div>
                    </div>

                    <div class="accordion-item">
                        <h3 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#itineraryCollapse7" aria-expanded="false" aria-controls="itineraryCollapse7">
                            Day 07 : Rest Day or Optional Sightseeing around Leh
                            </button>
                        </h3>
                        <div id="itineraryCollapse7" class="accordion-collapse collapse" data-bs-parent="#itineraryAccordion">
                            <div class="accordion-body">
                                {/* Mobile Screen */}
                                <div class="row d-block d-lg-none">
                                    <div class="col-12 col-lg-6">
                                        <ItineraryIcons duration="20" highestAltitude="11000 ft" distance="50 km" lodging="Hotel" meal="BF/Dinner" />
                                    </div>

                                    <div class="col-12 col-lg-6 mt-3 mb-3 d-flex align-items-center justify-content-center">
                                        <ItineraryImage src="/img/packages/ladakh-tour-with-hanle/ladakh-tour-with-hanle-day7.jpg" alt="Day Seven Itinerary Image Of The Ladakh Tour With Hanle Bike Package" />
                                    </div>
                                </div>

                                {/* Desktop Screen */}
                                <div class="row d-none d-lg-block">
                                    <div class="col-12 col-lg-12">
                                        <ItineraryIcons duration="7D/8N" highestAltitude="11000 ft" distance="50 km" lodging="Hotel" meal="BF/Dinner" />
                                    </div>

                                    <div class="col-12 col-lg-12 mt-3 mb-3 d-flex align-items-center justify-content-center">
                                        <ItineraryImage size="desktop" src="/img/packages/ladakh-tour-with-hanle/ladakh-tour-with-hanle-day7.jpg" alt="Day Seven Itinerary Image Of The Ladakh Tour With Hanle Bike Package" />
                                    </div>
                                </div>

                                <ul class="itinerary">
                                    <li><span>Highlights</span>: Optional visits to iconic Leh monasteries and cultural sites.</li>
                                    <li>Optional Exploration: Use this day to rest or explore additional sites like:</li>
                                    <li>Thiksey Monastery: Known for its resemblance to the Potala Palace and panoramic valley views.</li>
                                    <li>Shey Palace: Visit this ancient Ladakhi palace with striking architecture and Buddha statues.</li>
                                    <li>Stok Palace Museum: Learn about Ladakhi royal heritage and culture.</li>
                                    <li>Leisure: Evening at leisure to stroll Leh’s markets and cafes.</li>
                                    <li><span>Overnight</span>: Hotel in Leh</li>
                                </ul>

                            </div>
                        </div>
                    </div>

                    <div class="accordion-item">
                        <h3 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#itineraryCollapse8" aria-expanded="false" aria-controls="itineraryCollapse8">
                            Day 08 : Departure from Leh
                            </button>
                        </h3>
                        <div id="itineraryCollapse8" class="accordion-collapse collapse" data-bs-parent="#itineraryAccordion">
                            <div class="accordion-body">
                                <p>
                                Transfer to Leh Airport for your onward journey. Final departure, carrying lasting memories of Ladakh’s breathtaking landscapes and culture.
                                </p>

                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
});