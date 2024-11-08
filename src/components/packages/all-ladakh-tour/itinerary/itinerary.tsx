import { component$, useStylesScoped$ } from '@builder.io/qwik';
import ItineraryImage from "~/components/itinerary-image";
import styles from './itinerary.css?inline';
import ItineraryIcons from '~/components/itinerary-icons/itinerary-icons';
import OverviewIcons from '~/components/overview-icons/overview-icons';

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
                                        <ItineraryIcons duration="4 Hr" highestAltitude="11000 ft" distance="20 km" lodging="Hotel" meal="Bf/Dinner" />
                                    </div>

                                    <div class="col-12 col-lg-6 mt-3 mb-3 d-flex align-items-center justify-content-center">
                                        <ItineraryImage src="/img/packages/all-ladakh-tour/all-ladakh-tour-day1.jpg" alt="Day One Itinerary Image Of The All Ladakh Tour Bike Package" />
                                    </div>
                                </div>

                                {/* Desktop Screen */}
                                <div class="row d-none d-lg-block">
                                    <div class="col-12 col-lg-12">
                                        <ItineraryIcons duration="4 Hr" highestAltitude="11000 ft" distance="20 km" lodging="Hotel" meal="Bf/Dinner" />
                                    </div>

                                    <div class="col-12 col-lg-12 mt-3 mb-3 d-flex align-items-center justify-content-center">
                                        <ItineraryImage size="desktop" src="/img/packages/all-ladakh-tour/all-ladakh-tour-day1.jpg" alt="Day One Itinerary Image Of The All Ladakh Tour Bike Package" />
                                    </div>
                                </div>

                                <ul class="itinerary">
                                    <li><span>Activity</span>: Acclimatization and Rest</li>
                                    <li><span>Highlights</span>:Introduction to Leh and light local exploration (if acclimatized).</li>
                                    <li> Arrival in Leh: Meet at Leh Airport and transfer to the hotel. </li>
                                    <li>Rest and Acclimatization: Spend the day resting to adapt to Leh’s high altitude.</li>
                                    <li>Optional Evening Leisure: If well-acclimatized, visit Leh Market, Shanti Stupa, or Leh Palace.</li>
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
                                        <ItineraryIcons duration="4-5 Hr" highestAltitude="11000 ft" distance="60 km" lodging="Hotel" meal="Bf/Dinner" />
                                    </div>

                                    <div class="col-12 col-lg-6 mt-3 mb-3 d-flex align-items-center justify-content-center">
                                        <ItineraryImage src="/img/packages/all-ladakh-tour/all-ladakh-tour-day2.jpg" alt="Day Two Itinerary Image Of The All Ladakh Tour Bike Package" />
                                    </div>
                                </div>

                                {/* Desktop Screen */}
                                <div class="row d-none d-lg-block">
                                    <div class="col-12 col-lg-12">
                                        <ItineraryIcons duration="4-5 Hr" highestAltitude="11000 ft" distance="60 km" lodging="Hotel" meal="Bf/Dinner" />
                                    </div>

                                    <div class="col-12 col-lg-12 mt-3 mb-3 d-flex align-items-center justify-content-center">
                                        <ItineraryImage size="desktop" src="/img/packages/all-ladakh-tour/all-ladakh-tour-day2.jpg" alt="Day Two Itinerary Image Of The All Ladakh Tour Bike Package" />
                                    </div>
                                </div>

                                <ul class="itinerary">
                                    <li><span>Highlights</span>: Continued acclimatization with visits to Leh’s iconic attractions.</li>
                                    <li>Hall of Fame: A museum honoring the Indian Army’s contributions in the region.</li>
                                    <li>Gurudwara Pathar Sahib: A revered Sikh shrine.</li>
                                    <li>Magnetic Hill: Experience the fascinating optical illusion that defies gravity.</li>
                                    <li>Sangam Point: See the confluence of the Indus and Zanskar Rivers.</li>
                                    <li>Return to Leh: Free evening to explore the local market and rest.</li>
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
                                        <ItineraryIcons duration="4-5 Hr" highestAltitude="18380 ft" distance="120 km" lodging="Hotel/Resort" meal="BF/Dinner" />
                                    </div>

                                    <div class="col-12 col-lg-6 mt-3 mb-3 d-flex align-items-center justify-content-center">
                                        <ItineraryImage src="/img/packages/all-ladakh-tour/all-ladakh-tour-day3.jpg" alt="Day Three Itinerary Image Of The All Ladakh Tour Bike Package" />
                                    </div>
                                </div>

                                {/* Desktop Screen */}
                                <div class="row d-none d-lg-block">
                                    <div class="col-12 col-lg-12">
                                        <ItineraryIcons duration="4-5 Hr" highestAltitude="18380 ft" distance="120 km" lodging="Hotel/Resort" meal="BF/Dinner" />
                                    </div>

                                    <div class="col-12 col-lg-12 mt-3 mb-3 d-flex align-items-center justify-content-center">
                                        <ItineraryImage size="desktop" src="/img/packages/all-ladakh-tour/all-ladakh-tour-day3.jpg" alt="Day Three Itinerary Image Of The All Ladakh Tour Bike Package" />
                                    </div>
                                </div>

                                <ul class="itinerary">
                                    <li><span>Highlights</span>: Thrilling journey over Khardung La, cultural immersion at Diskit Monastery, and camel safari in Hunder.</li>
                                    <li>Breakfast and Departure: Start the drive to Nubra Valley via Khardung La Pass (18,380 feet), one of the highest motorable roads.</li>
                                    <li>Khardung La: Brief stop for photos and acclimatization.</li>
                                    <li>Diskit Monastery: Visit Diskit Monastery, featuring a 32-meter Maitreya Buddha statue with panoramic valley views.</li>
                                    <li>Hunder Sand Dunes: Take a camel safari on the double-humped Bactrian camels at Hunder.</li>
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
                                        <ItineraryIcons duration="5-6 Hr" highestAltitude="14272 ft" distance="160 km" lodging="Cottages" meal="BF/Dinner" />
                                    </div>

                                    <div class="col-12 col-lg-6 mt-3 mb-3 d-flex align-items-center justify-content-center">
                                        <ItineraryImage src="/img/packages/all-ladakh-tour/all-ladakh-tour-day4.jpg" alt="Day Four Itinerary Image Of The All Ladakh Tour Bike Package" />
                                    </div>
                                </div>

                                {/* Desktop Screen */}
                                <div class="row d-none d-lg-block">
                                    <div class="col-12 col-lg-12">
                                        <ItineraryIcons duration="5-6 Hr" highestAltitude="14272 ft" distance="160 km" lodging="Cottages" meal="BF/Dinner" />
                                    </div>

                                    <div class="col-12 col-lg-12 mt-3 mb-3 d-flex align-items-center justify-content-center">
                                        <ItineraryImage size="desktop" src="/img/packages/all-ladakh-tour/all-ladakh-tour-day4.jpg" alt="Day Four Itinerary Image Of The All Ladakh Tour Bike Package" />
                                    </div>
                                </div>

                                <ul class="itinerary">
                                    <li><span>Highlights</span>: Scenic drive through Shyok route and picturesque evening by Pangong Lake.</li>
                                    <li>Breakfast and Departure: Drive to Pangong Lake along the scenic Shyok River route.</li>
                                    <li>Arrival at Pangong Lake: Check into a lakeside camp, with time to explore the mesmerizing lake and its changing hues.</li>
                                    <li>Evening at Leisure: Relax by the lake, take photos, and enjoy the peaceful surroundings.</li>
                                    <li><span>Overnight</span>: Camps/Guesthouse in Hunder, Nubra Valley</li>
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
                                        <ItineraryImage src="/img/packages/all-ladakh-tour/all-ladakh-tour-day5.jpg" alt="Day Five Itinerary Image Of The All Ladakh Tour Bike Package" />
                                    </div>
                                </div>

                                {/* Desktop Screen */}
                                <div class="row d-none d-lg-block">
                                    <div class="col-12 col-lg-12">
                                        <ItineraryIcons duration="6-7 Hr" highestAltitude="14764 ft" distance="250 km" lodging="Homestay/G.House" meal="BF/Dinner" />
                                    </div>

                                    <div class="col-12 col-lg-12 mt-3 mb-3 d-flex align-items-center justify-content-center">
                                        <ItineraryImage size="desktop" src="/img/packages/all-ladakh-tour/all-ladakh-tour-day5.jpg" alt="Day Five Itinerary Image Of The All Ladakh Tour Bike Package" />
                                    </div>
                                </div>

                                <ul class="itinerary">
                                    <li><span>Highlights</span>: Offbeat route through Chushul, remote beauty of Hanle, and stargazing opportunities.</li>
                                    <li>Breakfast and Departure: Journey to Hanle via Chushul village, passing by scenic high-altitude landscapes.</li>
                                    <li>Chushul Route: Drive along lesser-traveled roads with views of remote valleys and mountain passes.</li>
                                    <li>Arrival in Hanle: Check into a homestay or guesthouse in Hanle, a secluded village known for its stargazing.</li>
                                    <li>Hanle Observatory (Optional): Visit the Indian Astronomical Observatory, one of the world’s highest observatories, and spend the evening stargazing.</li>
                                    <li><span>Overnight</span>: Homestay/Guest house in Hanle</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="accordion-item">
                        <h3 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#itineraryCollapse6" aria-expanded="false" aria-controls="itineraryCollapse6">
                            Day 06 : Hanle to Tso Moriri Lake via Nyoma (160 km, 5-6 hours)
                            </button>
                        </h3>
                        <div id="itineraryCollapse6" class="accordion-collapse collapse" data-bs-parent="#itineraryAccordion">
                            <div class="accordion-body">
                                {/* Mobile Screen */}
                                <div class="row d-block d-lg-none">
                                    <div class="col-12 col-lg-6">
                                        <ItineraryIcons duration="5-6 Hr" highestAltitude="14836 ft" distance="160 km" lodging="Hotel/Camp" meal="BF/Dinner" />
                                    </div>

                                    <div class="col-12 col-lg-6 mt-3 mb-3 d-flex align-items-center justify-content-center">
                                        <ItineraryImage src="/img/packages/all-ladakh-tour/all-ladakh-tour-day6.jpg" alt="Day Six Itinerary Image Of The All Ladakh Tour Bike Package" />
                                    </div>
                                </div>

                                {/* Desktop Screen */}
                                <div class="row d-none d-lg-block">
                                    <div class="col-12 col-lg-12">
                                        <ItineraryIcons duration="5-6 Hr" highestAltitude="14836 ft" distance="160 km" lodging="Hotel/Camp" meal="BF/Dinner" />
                                    </div>

                                    <div class="col-12 col-lg-12 mt-3 mb-3 d-flex align-items-center justify-content-center">
                                        <ItineraryImage size="desktop" src="/img/packages/all-ladakh-tour/all-ladakh-tour-day6.jpg" alt="Day Six Itinerary Image Of The All Ladakh Tour Bike Package" />
                                    </div>
                                </div>

                                <ul class="itinerary">
                                    <li><span>Highlights</span>: Scenic drive to Tso Moriri Lake, one of Ladakh’s most remote and beautiful lakes.</li>
                                    <li>Breakfast and Departure: Drive to Tso Moriri Lake, one of Ladakh’s most scenic high-altitude lakes.</li>
                                    <li>Nyoma and Mahe Bridge: Drive through the small village of Nyoma, crossing Mahe Bridge to reach Tso Moriri.</li>
                                    <li>Arrival at Tso Moriri: Check into a lakeside camp, then explore the shores of this beautiful, serene lake.</li>
                                    <li>•	Evening at Leisure: Enjoy the peaceful environment of Tso Moriri, ideal for photography and relaxation.</li>
                                    <li><span>Overnight</span>: Hotel/Guest house in Tsomoriri</li>
                                </ul>

                            </div>
                        </div>
                    </div>

                    <div class="accordion-item">
                        <h3 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#itineraryCollapse7" aria-expanded="false" aria-controls="itineraryCollapse7">
                            Day 07 : Hanle to Leh via Puga Valley
                            </button>
                        </h3>
                        <div id="itineraryCollapse7" class="accordion-collapse collapse" data-bs-parent="#itineraryAccordion">
                            <div class="accordion-body">
                                {/* Mobile Screen */}
                                <div class="row d-block d-lg-none">
                                    <div class="col-12 col-lg-6">
                                        <ItineraryIcons duration="5-6 Hr" highestAltitude="14836 ft" distance="170 km" lodging="Hotel" meal="BF/Dinner" />
                                    </div>

                                    <div class="col-12 col-lg-6 mt-3 mb-3 d-flex align-items-center justify-content-center">
                                        <ItineraryImage src="/img/packages/all-ladakh-tour/all-ladakh-tour-day7.jpg" alt="Day Seven Itinerary Image Of The All Ladakh Tour Bike Package" />
                                    </div>
                                </div>

                                {/* Desktop Screen */}
                                <div class="row d-none d-lg-block">
                                    <div class="col-12 col-lg-12">
                                        <ItineraryIcons duration="5-6 Hr" highestAltitude="14836 ft" distance="170 km" lodging="Hotel" meal="BF/Dinner" />
                                    </div>

                                    <div class="col-12 col-lg-12 mt-3 mb-3 d-flex align-items-center justify-content-center">
                                        <ItineraryImage size="desktop" src="/img/packages/all-ladakh-tour/all-ladakh-tour-day7.jpg" alt="Day Seven Itinerary Image Of The All Ladakh Tour Bike Package" />
                                    </div>
                                </div>

                                <ul class="itinerary">
                                    <li><span>Highlights</span>: Tso Moriri to Leh via Tso Kar and Taglang La (240 km, 7-8 hours)</li>
                                    <li>Journey through high-altitude lakes and passes, return to Leh with scenic views.</li>
                                    <li>Breakfast and Departure: Start the scenic drive back to Leh, passing through Tso Kar Lake and Taglang La (17,480 feet).</li>
                                    <li>Tso Kar Lake: Brief stop at the salt lake, known for its birdlife and desolate beauty.</li>
                                    <li>Taglang La Pass: Enjoy panoramic views from one of the highest motorable passes.</li>
                                    <li>Arrival in Leh: Evening at leisure to explore local markets or rest.</li>
                                    <li><span>Overnight</span>: Hotel in Leh</li>
                                </ul>

                            </div>
                        </div>
                    </div>

                    <div class="accordion-item">
                        <h3 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#itineraryCollapse8" aria-expanded="false" aria-controls="itineraryCollapse8">
                            Day 08 : Leh Rest Day or Optional Local Sightseeing
                            </button>
                        </h3>
                        <div id="itineraryCollapse8" class="accordion-collapse collapse" data-bs-parent="#itineraryAccordion">
                            <div class="accordion-body">
                                {/* Mobile Screen */}
                                <div class="row d-block d-lg-none">
                                    <div class="col-12 col-lg-6">
                                        <ItineraryIcons duration="5 Hr" highestAltitude="11000 ft" distance="50 km" lodging="Hotel" meal="BF/Dinner" />
                                    </div>

                                    <div class="col-12 col-lg-6 mt-3 mb-3 d-flex align-items-center justify-content-center">
                                        <ItineraryImage src="/img/packages/all-ladakh-tour/all-ladakh-tour-day8.jpg" alt="Day Eight Itinerary Image Of The All Ladakh Tour Bike Package" />
                                    </div>
                                </div>

                                {/* Desktop Screen */}
                                <div class="row d-none d-lg-block">
                                    <div class="col-12 col-lg-12">
                                        <OverviewIcons duration="5 Hr" highestAltitude="11000 ft" distance="50 km" lodging="Hotel" meal="BF/Dinner" />
                                    </div>

                                    <div class="col-12 col-lg-12 mt-3 mb-3 d-flex align-items-center justify-content-center">
                                        <ItineraryImage size="desktop" src="/img/packages/all-ladakh-tour/all-ladakh-tour-day8.jpg" alt="Day Eight Itinerary Image Of The All Ladakh Tour Bike Package" />
                                    </div>
                                </div>

                                <ul class="itinerary">
                                    <li><span>Highlights</span>:Option for more cultural exploration around Leh.</li>
                                    <li>Optional Exploration: Use this day to rest or explore more sites around Leh:</li>
                                    <li>Thiksey Monastery: Known for its resemblance to the Potala Palace and beautiful valley views.</li>
                                    <li>Shey Palace: Ancient royal residence with unique Buddha statues.</li>
                                    <li>Stok Palace Museum: Insight into Ladakhi royal heritage and artifacts.</li>
                                    <li>Leisure: Evening free for last-minute shopping or relaxation.</li>
                                    <li><span>Overnight</span>: Hotel in Leh</li>
                                </ul>

                            </div>
                        </div>
                    </div>

                    <div class="accordion-item">
                        <h3 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#itineraryCollapse9" aria-expanded="false" aria-controls="itineraryCollapse9">
                            Day 09 :: Departure from Leh
                            </button>
                        </h3>
                        <div id="itineraryCollapse9" class="accordion-collapse collapse" data-bs-parent="#itineraryAccordion">
                            <div class="accordion-body">
                                <p>Breakfast and Check-Out: Transfer to Leh Airport for departure.Departure with memories of Nubra Valley, Pangong Lake, Hanle, Tso Moriri, and the beautiful landscapes of Ladakh.</p>

                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
});