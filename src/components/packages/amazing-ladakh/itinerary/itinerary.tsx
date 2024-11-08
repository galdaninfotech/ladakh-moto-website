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
                                        <ItineraryIcons duration="Rest" highestAltitude="18380 ft" distance="20 km" lodging="Hotel" meal="BF/Dinner" />
                                    </div>

                                    <div class="col-12 col-lg-6 mt-3 mb-3 d-flex align-items-center justify-content-center">
                                        <ItineraryImage src="/img/packages/amazing-ladakh/amazing-ladakh-day1.jpg" alt="Day One Itinerary Image Of The Amazing Ladakh Bike Package" />
                                    </div>
                                </div>

                                {/* Desktop Screen */}
                                <div class="row d-none d-lg-block">
                                    <div class="col-12 col-lg-12">
                                        <ItineraryIcons duration="7D/8N" highestAltitude="18380 ft" distance="20 km" lodging="Hotel" meal="BF/Dinner" />
                                    </div>

                                    <div class="col-12 col-lg-12 mt-3 mb-3 d-flex align-items-center justify-content-center">
                                        <ItineraryImage size="desktop" src="/img/packages/amazing-ladakh/amazing-ladakh-day1.jpg" alt="Day One Itinerary Image Of The Amazing Ladakh Bike Package" />
                                    </div>
                                </div>

                                <ul class="itinerary">
                                    <li><span>Activity</span>: Acclimatization and Rest</li>
                                    <li><span>Highlights</span>: Arrival in Leh, initial exploration of local sights (optional), and rest.</li>
                                    <li>Arrival in Leh: Transfer from Leh Airport to the hotel.</li>
                                    <li>Rest and Acclimatization: Adjust to Leh's high altitude to ensure a comfortable journey.</li>
                                    <li>Evening Leisure: (Optional) Explore Leh Market, Shanti Stupa, or Leh Palace.</li>
                                    <li><span>Overnight</span>: Hotel in Leh</li>
                                </ul>

                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h3 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#itineraryCollapse2" aria-expanded="false" aria-controls="itineraryCollapse2">
                            Day 02 : : Leh – Sham Valley Tour
                            </button>
                        </h3>
                        <div id="itineraryCollapse2" class="accordion-collapse collapse" data-bs-parent="#itineraryAccordion">
                            <div class="accordion-body">
                               {/* Mobile Screen */}
                               <div class="row d-block d-lg-none">
                                    <div class="col-12 col-lg-6">
                                        <ItineraryIcons duration="3-4 Hr" highestAltitude="11000 ft" distance="60 km" lodging="Hotel" meal="BF/Dinner" />
                                    </div>

                                    <div class="col-12 col-lg-6 mt-3 mb-3 d-flex align-items-center justify-content-center">
                                        <ItineraryImage src="/img/packages/amazing-ladakh/amazing-ladakh-day2.jpg" alt="Day Two Itinerary Image Of The Amazing Ladakh Bike Package" />
                                    </div>
                                </div>

                                {/* Desktop Screen */}
                                <div class="row d-none d-lg-block">
                                    <div class="col-12 col-lg-12">
                                        <ItineraryIcons duration="3-4 Hr" highestAltitude="11000 ft" distance="60 km" lodging="Hotel" meal="BF/Dinner" />
                                    </div>

                                    <div class="col-12 col-lg-12 mt-3 mb-3 d-flex align-items-center justify-content-center">
                                        <ItineraryImage size="desktop" src="/img/packages/amazing-ladakh/amazing-ladakh-day2.jpg" alt="Day Two Itinerary Image Of The Amazing Ladakh Bike Package" />
                                    </div>
                                </div>

                                <ul class="itinerary">
                                    <li><span>Highlights</span>: Visit to key sites around Leh, learning about Ladakh’s cultural and natural history.</li>
                                    <li>Breakfast: Enjoy a traditional Ladakhi breakfast at the hotel.</li>
                                    <li>Hall of Fame: Visit the museum dedicated to the Indian Army’s valor and history.</li>
                                    <li>Magnetic Hill: Witness the natural optical illusion where vehicles appear to defy gravity.</li>
                                    <li>Gurudwara Pathar Sahib: Visit this revered Sikh temple nestled in the mountains.</li>
                                    <li>Sangam: See the confluence of the Indus and Zanskar Rivers – a striking sight.</li>
                                    <li>Return to Leh: Evening at leisure to explore local bazaars or relax at the hotel.</li>
                                    <li><span>Overnight</span>: Hotel in Leh</li>
                                </ul>

                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h3 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#itineraryCollapse3" aria-expanded="false" aria-controls="itineraryCollapse3">
                            Day 03 : Leh to Nubra Valley via Khardung La Pass (140 km, 5-6 hours)
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
                                        <ItineraryImage src="/img/packages/amazing-ladakh/amazing-ladakh-day3.jpg" alt="Day Three Itinerary Image Of The Amazing Ladakh Bike Package" />
                                    </div>
                                </div>

                                {/* Desktop Screen */}
                                <div class="row d-none d-lg-block">
                                    <div class="col-12 col-lg-12">
                                        <ItineraryIcons duration="5-6 Hr" highestAltitude="18380 ft" distance="120 km" lodging="Hotel/Resort" meal="BF/Dinner" />
                                    </div>

                                    <div class="col-12 col-lg-12 mt-3 mb-3 d-flex align-items-center justify-content-center">
                                        <ItineraryImage size="desktop" src="/img/packages/amazing-ladakh/amazing-ladakh-day3.jpg" alt="Day Three Itinerary Image Of The Amazing Ladakh Bike Package" />
                                    </div>
                                </div>

                                <ul class="itinerary">
                                    <li><span>Highlights</span>: Breathtaking drive via Khardung La Pass, visits to Diskit Monastery, and the camel safari at Hunder.</li>
                                    <li>Breakfast and Departure: Begin the drive to Nubra Valley via the thrilling Khardung La Pass (18,380 feet).</li>
                                    <li>Khardung La: Brief stop to take in views and snap photos at one of the world’s highest motorable passes.</li>
                                    <li>Diskit Monastery: Marvel at the iconic 32-meter statue of Maitreya Buddha and explore the ancient monastery with views over the valley.</li>
                                    <li>Hunder Sand Dunes: Enjoy a camel safari on Bactrian camels across the unique white dunes surrounded by mountains.</li>
                                    <li></li>
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
                                        <ItineraryIcons duration="5-6 Hr" highestAltitude="14272 ft" distance="180 km" lodging="Cottages" meal="BF/Dinner" />
                                    </div>

                                    <div class="col-12 col-lg-6 mt-3 mb-3 d-flex align-items-center justify-content-center">
                                        <ItineraryImage src="/img/packages/amazing-ladakh/amazing-ladakh-day4.jpg" alt="Day Four Itinerary Image Of The Amazing Ladakh Bike Package" />
                                    </div>
                                </div>

                                {/* Desktop Screen */}
                                <div class="row d-none d-lg-block">
                                    <div class="col-12 col-lg-12">
                                        <ItineraryIcons duration="5-6 Hr" highestAltitude="14272 ft" distance="180 km" lodging="Cottages" meal="BF/Dinner" />
                                    </div>

                                    <div class="col-12 col-lg-12 mt-3 mb-3 d-flex align-items-center justify-content-center">
                                        <ItineraryImage size="desktop" src="/img/packages/amazing-ladakh/amazing-ladakh-day4.jpg" alt="Day Four Itinerary Image Of The Amazing Ladakh Bike Package" />
                                    </div>
                                </div>

                                <ul class="itinerary">
                                    <li><span>Highlights</span>:Serene Pangong Lake with its changing colors, stunning photo opportunities, and lakeside relaxation.</li>
                                    <li>Breakfast and Departure: After breakfast, embark on the scenic Shyok River route toward Pangong Lake.</li>
                                    <li>Scenic Route: Drive along the Shyok River, witnessing changing landscapes and unique rock formations.</li>
                                    <li>Arrival at Pangong Lake: Arrive at the mesmerizing Pangong Tso, famed for its vivid blue waters that shift colors throughout the day.</li>
                                    <li>Evening by the Lake: Enjoy the peaceful atmosphere, capture stunning photos, and explore the lakeshore.</li>
                                    <li><span>Overnight</span>: Lakeside camp by Pangong Lake.</li>
                                </ul>

                            </div>
                        </div>
                    </div>

                    <div class="accordion-item">
                        <h3 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#itineraryCollapse5" aria-expanded="false" aria-controls="itineraryCollapse5">
                            Day 05 : Pangong Lake to Leh via Chang La Pass (150 km, 5-6 hours)
                            </button>
                        </h3>
                        <div id="itineraryCollapse5" class="accordion-collapse collapse" data-bs-parent="#itineraryAccordion">
                            <div class="accordion-body">
                               {/* Mobile Screen */}
                               <div class="row d-block d-lg-none">
                                    <div class="col-12 col-lg-6">
                                        <ItineraryIcons duration="5-6 Hr" highestAltitude="17688 ft" distance="150 km" lodging="Hotel" meal="BF/Dinner" />
                                    </div>

                                    <div class="col-12 col-lg-6 mt-3 mb-3 d-flex align-items-center justify-content-center">
                                        <ItineraryImage src="/img/packages/amazing-ladakh/amazing-ladakh-day5.jpg" alt="Day Five Itinerary Image Of The Amazing Ladakh Bike Package" />
                                    </div>
                                </div>

                                {/* Desktop Screen */}
                                <div class="row d-none d-lg-block">
                                    <div class="col-12 col-lg-12">
                                        <ItineraryIcons duration="7D/8N" highestAltitude="17688 ft" distance="150 km" lodging="Hotel" meal="BF/Dinner" />
                                    </div>

                                    <div class="col-12 col-lg-12 mt-3 mb-3 d-flex align-items-center justify-content-center">
                                        <ItineraryImage size="desktop" src="/img/packages/amazing-ladakh/amazing-ladakh-day5.jpg" alt="Day Five Itinerary Image Of The Amazing Ladakh Bike Package" />
                                    </div>
                                </div>

                                <ul class="itinerary">
                                    <li><span>Highlights</span>:Sunrise at Pangong, journey through Chang La, visits to Hemis and Thiksey Monasteries.</li>
                                    <li>Sunrise at Pangong: Watch the beautiful sunrise over the lake, creating a memorable morning.</li>
                                    <li>Breakfast and Departure: After breakfast, drive back to Leh, crossing the Chang La Pass (17,586 feet).</li>
                                    <li>Hemis Monastery: En route, stop at Hemis Monastery, one of Ladakh’s oldest and richest monasteries, with intricate frescoes and ancient statues.</li>
                                    <li>Thiksey Monastery (Optional): Also visit Thiksey Monastery for its stunning hilltop location and views over the Indus Valley.</li>
                                    <li>Return to Leh: Evening at leisure in Leh.</li>
                                    <li><span>Overnight</span>: : Leh Hotel</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="accordion-item">
                        <h3 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#itineraryCollapse6" aria-expanded="false" aria-controls="itineraryCollapse6">
                            Day 06 : Departure from Leh
                            </button>
                        </h3>
                        <div id="itineraryCollapse6" class="accordion-collapse collapse" data-bs-parent="#itineraryAccordion">
                            <div class="accordion-body">

                                <ul class="itinerary">
                                    <li><span>Highlights</span>:Final departure with memories of scenic landscapes and cultural experiences.</li>
                                    <li>Breakfast and Check-Out: After breakfast, transfer to Leh Airport for your onward journey.</li>
                                    <li>Tour Ends: Depart with lasting memories of Ladakh’s unique landscapes and culture.</li>
                                </ul>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
});