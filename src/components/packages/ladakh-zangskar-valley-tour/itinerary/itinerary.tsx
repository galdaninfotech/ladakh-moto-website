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
                            Day 01 : Arrival in Leh – Acclimatization DayArrival in Leh
                            </button>
                        </h3>
                        <div id="itineraryCollapse1" class="accordion-collapse collapse show" data-bs-parent="#itineraryAccordion">
                            <div class="accordion-body">
                               {/* Mobile Screen */}
                               <div class="row d-block d-lg-none">
                                    <div class="col-12 col-lg-6">
                                        <ItineraryIcons duration="4 Hr" highestAltitude="11000 ft" distance="20 km" lodging="Hotel" meal="BF/Dinner" />
                                    </div>

                                    <div class="col-12 col-lg-6 mt-3 mb-3 d-flex align-items-center justify-content-center">
                                        <ItineraryImage src="/img/packages/ladakh-zangskar-valley-tour/ladakh-zangskar-valley-tour-day1.jpg" alt="Day One Itinerary Image Of The Ladakh Zanskar Valley Tour Bike Package" />
                                    </div>
                                </div>

                                {/* Desktop Screen */}
                                <div class="row d-none d-lg-block">
                                    <div class="col-12 col-lg-12">
                                        <ItineraryIcons duration="4 Hr" highestAltitude="11000 ft" distance="20 km" lodging="Hotel" meal="BF/Dinner" />
                                    </div>

                                    <div class="col-12 col-lg-12 mt-3 mb-3 d-flex align-items-center justify-content-center">
                                        <ItineraryImage size="desktop" src="/img/packages/ladakh-zangskar-valley-tour/ladakh-zangskar-valley-tour-day1.jpg" alt="Day One Itinerary Image Of The Ladakh Zanskar Valley Tour Bike Package" />
                                    </div>
                                </div>

                                <ul class="itinerary">
                                    <li><span>Activity</span>: Acclimatization and Rest</li>
                                    <li><span>Highlights</span>: Arrival and relaxation in Leh.</li>
                                    <li>Arrival in Leh: Meet at Leh Airport and transfer to the hotel.</li>
                                    <li>Rest and Acclimatization: Spend the day relaxing to adjust to Leh’s high altitude.</li>
                                    <li>Optional Evening Leisure: If feeling well-acclimated, visit Leh Market, Shanti Stupa, or Leh Palace for panoramic city views.</li>
                                    <li><span>Overnight</span>: Hotel in Leh</li>
                                </ul>

                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h3 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#itineraryCollapse2" aria-expanded="false" aria-controls="itineraryCollapse2">
                            Day 02 : Local Sightseeing and Acclimatization
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
                                        <ItineraryImage src="/img/packages/ladakh-zangskar-valley-tour/ladakh-zangskar-valley-tour-day2.jpg" alt="Day Two Itinerary Image Of The Ladakh Zanskar Valley Tour Bike Package" />
                                    </div>
                                </div>

                                {/* Desktop Screen */}
                                <div class="row d-none d-lg-block">
                                    <div class="col-12 col-lg-12">
                                        <ItineraryIcons duration="3-4 Hr" highestAltitude="11000 ft" distance="60 km" lodging="Hotel" meal="BF/Dinner" />
                                    </div>

                                    <div class="col-12 col-lg-12 mt-3 mb-3 d-flex align-items-center justify-content-center">
                                        <ItineraryImage size="desktop" src="/img/packages/ladakh-zangskar-valley-tour/ladakh-zangskar-valley-tour-day2.jpg" alt="Day Two Itinerary Image Of The Ladakh Zanskar Valley Tour Bike Package" />
                                    </div>
                                </div>

                                <ul class="itinerary">
                                    <li><span>Highlights</span>:Continued acclimatization with visits to Leh’s cultural sites.</li>
                                    <li>Local Exploration:</li>
                                    <li>Hall of Fame: Learn about the Indian Army’s contributions in Ladakh.</li>
                                    <li>Gurudwara Pathar Sahib: A sacred Sikh temple.</li>
                                    <li>Magnetic Hill: Experience the famous optical illusion where vehicles seem to roll uphill.</li>
                                    <li>Sangam Point: Visit the confluence of the Indus and Zanskar Rivers.</li>
                                    <li>Return to Leh: Free evening to explore the local market.</li>
                                    <li><span>Overnight</span>: Hotel in Leh</li>
                                </ul>

                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h3 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#itineraryCollapse3" aria-expanded="false" aria-controls="itineraryCollapse3">
                            Day 03 : Leh to Kargil (210 km, 6-7 hours)
                            </button>
                        </h3>
                        <div id="itineraryCollapse3" class="accordion-collapse collapse" data-bs-parent="#itineraryAccordion">
                            <div class="accordion-body">
                                {/* Mobile Screen */}
                               <div class="row d-block d-lg-none">
                                    <div class="col-12 col-lg-6">
                                        <ItineraryIcons duration="5-6 Hr" highestAltitude="13478 ft" distance="210 km" lodging="Hotel" meal="BF/Dinner" />
                                    </div>

                                    <div class="col-12 col-lg-6 mt-3 mb-3 d-flex align-items-center justify-content-center">
                                        <ItineraryImage src="/img/packages/ladakh-zangskar-valley-tour/ladakh-zangskar-valley-tour-day3.jpg" alt="Day Three Itinerary Image Of The Ladakh Zanskar Valley Tour Bike Package" />
                                    </div>
                                </div>

                                {/* Desktop Screen */}
                                <div class="row d-none d-lg-block">
                                    <div class="col-12 col-lg-12">
                                        <ItineraryIcons duration="5-6 Hr" highestAltitude="13478 ft" distance="210 km" lodging="Hotel" meal="BF/Dinner" />
                                    </div>

                                    <div class="col-12 col-lg-12 mt-3 mb-3 d-flex align-items-center justify-content-center">
                                        <ItineraryImage size="desktop" src="/img/packages/ladakh-zangskar-valley-tour/ladakh-zangskar-valley-tour-day3.jpg" alt="Day Three Itinerary Image Of The Ladakh Zanskar Valley Tour Bike Package" />
                                    </div>
                                </div>

                                <ul class="itinerary">
                                    <li><span>Highlights</span>:Scenic drive with visits to Lamayuru and Alchi monasteries.</li>
                                    <li>Breakfast and Departure: Start your drive to Kargil via Lamayuru Monastery and Alchi Monastery.</li>
                                    <li>Lamayuru Monastery: Visit the ancient monastery and explore its “moonland” landscapes, known for their unique rock formations.</li>
                                    <li>Alchi Monastery: Stop at Alchi, one of Ladakh’s oldest monasteries, known for its unique Indo-Tibetan art.</li>
                                    <li>Arrival in Kargil: Evening at leisure in Kargil.</li>
                                    <li><span>Overnight</span>: Hotel in Kargil</li>
                                </ul>

                            </div>
                        </div>
                    </div>

                    <div class="accordion-item">
                        <h3 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#itineraryCollapse4" aria-expanded="false" aria-controls="itineraryCollapse4">
                            Day 04 : Kargil to Padum (240 km, 8-9 hours)
                            </button>
                        </h3>
                        <div id="itineraryCollapse4" class="accordion-collapse collapse" data-bs-parent="#itineraryAccordion">
                            <div class="accordion-body">
                                {/* Mobile Screen */}
                               <div class="row d-block d-lg-none">
                                    <div class="col-12 col-lg-6">
                                        <ItineraryIcons duration="6-7 Hr Hr" highestAltitude="14500 ft" distance="240 km" lodging="Hotel" meal="BF/Dinner" />
                                    </div>

                                    <div class="col-12 col-lg-6 mt-3 mb-3 d-flex align-items-center justify-content-center">
                                        <ItineraryImage src="/img/packages/ladakh-zangskar-valley-tour/ladakh-zangskar-valley-tour-day4.jpg" alt="Day Four Itinerary Image Of The Ladakh Zanskar Valley Tour Bike Package" />
                                    </div>
                                </div>

                                {/* Desktop Screen */}
                                <div class="row d-none d-lg-block">
                                    <div class="col-12 col-lg-12">
                                        <ItineraryIcons duration="6-7 Hr" highestAltitude="14500 ft" distance="240 km" lodging="Hotel" meal="BF/Dinner" />
                                    </div>

                                    <div class="col-12 col-lg-12 mt-3 mb-3 d-flex align-items-center justify-content-center">
                                        <ItineraryImage size="desktop" src="/img/packages/ladakh-zangskar-valley-tour/ladakh-zangskar-valley-tour-day4.jpg" alt="Day Four Itinerary Image Of The Ladakh Zanskar Valley Tour Bike Package" />
                                    </div>
                                </div>

                                <ul class="itinerary">
                                    <li><span>Highlights</span>: Scenic drive through Suru Valley, monastery visit, and arrival in Zanskar.</li>
                                    <li>Early Breakfast and Departure: Begin the long and scenic drive to Padum, the heart of Zanskar Valley.</li>
                                    <li>Suru Valley: Drive through the lush Suru Valley, passing views of the Nun-Kun Peaks.</li>
                                    <li>Rangdum Monastery: Stop at Rangdum, a remote monastery with panoramic mountain views.</li>
                                    <li>Arrival in Padum: Check into a guesthouse upon arrival in the Zanskar Valley.</li>
                                    <li><span>Overnight</span>: Hotel/Guesthouse in Padum, Zangskar Valley</li>
                                </ul>

                            </div>
                        </div>
                    </div>

                    <div class="accordion-item">
                        <h3 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#itineraryCollapse5" aria-expanded="false" aria-controls="itineraryCollapse5">
                            Day 05 : Padum – Zanskar Valley Exploration
                            </button>
                        </h3>
                        <div id="itineraryCollapse5" class="accordion-collapse collapse" data-bs-parent="#itineraryAccordion">
                            <div class="accordion-body">
                                {/* Mobile Screen */}
                               <div class="row d-block d-lg-none">
                                    <div class="col-12 col-lg-6">
                                        <ItineraryIcons duration="5-6 Hr" highestAltitude="12040 ft" distance="80 km" lodging="Hotel" meal="BF/Dinner" />
                                    </div>

                                    <div class="col-12 col-lg-6 mt-3 mb-3 d-flex align-items-center justify-content-center">
                                        <ItineraryImage src="/img/packages/ladakh-zangskar-valley-tour/ladakh-zangskar-valley-tour-day5.jpg" alt="Day Five Itinerary Image Of The Ladakh Zanskar Valley Tour Bike Package" />
                                    </div>
                                </div>

                                {/* Desktop Screen */}
                                <div class="row d-none d-lg-block">
                                    <div class="col-12 col-lg-12">
                                        <ItineraryIcons duration="7D/8N" highestAltitude="12040 ft" distance="80 km" lodging="Hotel" meal="BF/Dinner" />
                                    </div>

                                    <div class="col-12 col-lg-12 mt-3 mb-3 d-flex align-items-center justify-content-center">
                                        <ItineraryImage size="desktop" src="/img/packages/ladakh-zangskar-valley-tour/ladakh-zangskar-valley-tour-day5.jpg" alt="Day Five Itinerary Image Of The Ladakh Zanskar Valley Tour Bike Package" />
                                    </div>
                                </div>

                                <ul class="itinerary">
                                    <li><span>Highlights</span>: : Exploration of Karsha and Stongdey Monasteries, and optional visit to Zangla.</li>
                                    <li>Breakfast: Begin a day dedicated to exploring Zanskar’s cultural and natural sites.</li>
                                    <li>Karsha Monastery: Visit Karsha Monastery, the largest monastery in Zanskar, offering beautiful valley views.</li>
                                    <li>Stongdey Monastery: Head to Stongdey, another prominent monastery with vibrant artwork and a tranquil atmosphere.</li>
                                    <li>Zangla Village (Optional): If time allows, visit Zangla Village, known for its ancient fort and traditional Zanskari homes.</li>
                                    <li>Evening at Leisure: Relax in Padum, enjoying the serenity of the Zanskar Valley.</li>
                                    <li><span>Overnight</span>: Hotel/Guest house in Padum</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="accordion-item">
                        <h3 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#itineraryCollapse6" aria-expanded="false" aria-controls="itineraryCollapse6">
                            Day 06 : Padum to Rangdum (110 km, 4-5 hours)
                            </button>
                        </h3>
                        <div id="itineraryCollapse6" class="accordion-collapse collapse" data-bs-parent="#itineraryAccordion">
                            <div class="accordion-body">
                                {/* Mobile Screen */}
                               <div class="row d-block d-lg-none">
                                    <div class="col-12 col-lg-6">
                                        <ItineraryIcons duration="4-5 Hr" highestAltitude="12040 ft" distance="110 km" lodging="Hotel/Camp" meal="BF/Dinner" />
                                    </div>

                                    <div class="col-12 col-lg-6 mt-3 mb-3 d-flex align-items-center justify-content-center">
                                        <ItineraryImage src="/img/packages/ladakh-zangskar-valley-tour/ladakh-zangskar-valley-tour-day6.jpg" alt="Day Six Itinerary Image Of The Ladakh Zanskar Valley Tour Bike Package" />
                                    </div>
                                </div>

                                {/* Desktop Screen */}
                                <div class="row d-none d-lg-block">
                                    <div class="col-12 col-lg-12">
                                        <ItineraryIcons duration="4-5 Hr" highestAltitude="12040 ft" distance="110 km" lodging="Hotel/Camp" meal="BF/Dinner" />
                                    </div>

                                    <div class="col-12 col-lg-12 mt-3 mb-3 d-flex align-items-center justify-content-center">
                                        <ItineraryImage size="desktop" src="/img/packages/ladakh-zangskar-valley-tour/ladakh-zangskar-valley-tour-day6.jpg" alt="Day Six Itinerary Image Of The Ladakh Zanskar Valley Tour Bike Package" />
                                    </div>
                                </div>

                                <ul class="itinerary">
                                    <li><span>Highlights</span>:Scenic drive through the heart of Zanskar, night in the isolated village of Rangdum.</li>
                                    <li>Breakfast and Departure: Start the return journey toward Rangdum, a remote and scenic village.</li>
                                    <li>Free Exploration: On arrival, explore the village and enjoy stunning views of the mountains surrounding Rangdum.</li>
                                    <li>Evening at Leisure: Spend a quiet evening in the remote beauty of Rangdum.</li>
                                    <li><span>Overnight</span>: Homestay/Guest house in Rangdum</li>
                                </ul>

                            </div>
                        </div>
                    </div>

                    <div class="accordion-item">
                        <h3 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#itineraryCollapse7" aria-expanded="false" aria-controls="itineraryCollapse7">
                            Day 07 : Rangdum to Leh via Kargil (320 km, 8-9 hours)
                            </button>
                        </h3>
                        <div id="itineraryCollapse7" class="accordion-collapse collapse" data-bs-parent="#itineraryAccordion">
                            <div class="accordion-body">
                                {/* Mobile Screen */}
                               <div class="row d-block d-lg-none">
                                    <div class="col-12 col-lg-6">
                                        <ItineraryIcons duration="8-9 Hr" highestAltitude="12040 ft" distance="320 km" lodging="Hotel" meal="BF/Dinner" />
                                    </div>

                                    <div class="col-12 col-lg-6 mt-3 mb-3 d-flex align-items-center justify-content-center">
                                        <ItineraryImage src="/img/packages/ladakh-zangskar-valley-tour/ladakh-zangskar-valley-tour-day7.jpg" alt="Day Seven Itinerary Image Of The Ladakh Zanskar Valley Tour Bike Package" />
                                    </div>
                                </div>

                                {/* Desktop Screen */}
                                <div class="row d-none d-lg-block">
                                    <div class="col-12 col-lg-12">
                                        <ItineraryIcons duration="8-9 Hr" highestAltitude="12040 ft" distance="320 km" lodging="Hotel" meal="BF/Dinner" />
                                    </div>

                                    <div class="col-12 col-lg-12 mt-3 mb-3 d-flex align-items-center justify-content-center">
                                        <ItineraryImage size="desktop" src="/img/packages/ladakh-zangskar-valley-tour/ladakh-zangskar-valley-tour-day7.jpg" alt="Day Seven Itinerary Image Of The Ladakh Zanskar Valley Tour Bike Package" />
                                    </div>
                                </div>

                                <ul class="itinerary">
                                    <li><span>Highlights</span>: Return journey with views of Ladakh’s landscapes and the Suru Valley.</li>
                                    <li>Early Breakfast and Departure: Begin the scenic journey back to Leh, with stops for photos and relaxation.</li>
                                    <li>Drive via Suru Valley: Enjoy one last look at Suru Valley’s lush greenery and mountain peaks.</li>
                                    <li>Arrival in Leh: Arrive in Leh in the evening with time to rest.</li>
                                    <li><span>Overnight</span>: Hotel in Leh</li>
                                </ul>

                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h3 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#itineraryCollapse8" aria-expanded="false" aria-controls="itineraryCollapse8">
                            Day 08 : Rest Day or Optional Sightseeing around Leh
                            </button>
                        </h3>
                        <div id="itineraryCollapse8" class="accordion-collapse collapse" data-bs-parent="#itineraryAccordion">
                            <div class="accordion-body">
                                {/* Mobile Screen */}
                               <div class="row d-block d-lg-none">
                                    <div class="col-12 col-lg-6">
                                        <ItineraryIcons duration="4 Hr" highestAltitude="11000 ft" distance="40 km" lodging="Hotel" meal="BF/Dinner" />
                                    </div>

                                    <div class="col-12 col-lg-6 mt-3 mb-3 d-flex align-items-center justify-content-center">
                                        <ItineraryImage src="/img/packages/ladakh-zangskar-valley-tour/ladakh-zangskar-valley-tour-day8.jpg" alt="Day Eight Itinerary Image Of The Ladakh Zanskar Valley Tour Bike Package" />
                                    </div>
                                </div>

                                {/* Desktop Screen */}
                                <div class="row d-none d-lg-block">
                                    <div class="col-12 col-lg-12">
                                        <ItineraryIcons duration="4 Hr" highestAltitude="11000 ft" distance="40 km" lodging="Hotel" meal="BF/Dinner" />
                                    </div>

                                    <div class="col-12 col-lg-12 mt-3 mb-3 d-flex align-items-center justify-content-center">
                                        <ItineraryImage size="desktop" src="/img/packages/ladakh-zangskar-valley-tour/ladakh-zangskar-valley-tour-day8.jpg" alt="Day Eight Itinerary Image Of The Ladakh Zanskar Valley Tour Bike Package" />
                                    </div>
                                </div>

                                <ul class="itinerary">
                                    <li><span>Highlights</span>: Optional cultural exploration around Leh.</li>
                                    <li>Optional Exploration: Spend the day resting or exploring additional sites around Leh:</li>
                                    <li>Thiksey Monastery: Known for its impressive architecture and beautiful location.</li>
                                    <li>Shey Palace: An ancient palace with statues and scenic views.</li>
                                    <li>Stok Palace Museum: Learn about Ladakhi royal heritage.</li>
                                    <li>Free Evening: Opportunity for shopping or relaxing in Leh Market.</li>
                                    <li><span>Overnight</span>: Hotel in Leh</li>
                                </ul>

                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h3 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#itineraryCollapse9" aria-expanded="false" aria-controls="itineraryCollapse9">
                            Day 09 : Leh to Pangong Lake (160 km, 5-6 hours)
                            </button>
                        </h3>
                        <div id="itineraryCollapse9" class="accordion-collapse collapse" data-bs-parent="#itineraryAccordion">
                            <div class="accordion-body">
                                {/* Mobile Screen */}
                               <div class="row d-block d-lg-none">
                                    <div class="col-12 col-lg-6">
                                        <ItineraryIcons duration="5-6 Hr" highestAltitude="17688 ft" distance="160 km" lodging="Cottage" meal="BF/Dinner" />
                                    </div>

                                    <div class="col-12 col-lg-6 mt-3 mb-3 d-flex align-items-center justify-content-center">
                                        <ItineraryImage src="/img/packages/ladakh-zangskar-valley-tour/ladakh-zangskar-valley-tour-day9.jpg" alt="Day Nine Itinerary Image Of The Ladakh Zanskar Valley Tour Bike Package" />
                                    </div>
                                </div>

                                {/* Desktop Screen */}
                                <div class="row d-none d-lg-block">
                                    <div class="col-12 col-lg-12">
                                        <ItineraryIcons duration="5-6 Hr" highestAltitude="17688 ft" distance="160 km" lodging="Cottage" meal="BF/Dinner" />
                                    </div>

                                    <div class="col-12 col-lg-12 mt-3 mb-3 d-flex align-items-center justify-content-center">
                                        <ItineraryImage size="desktop" src="/img/packages/ladakh-zangskar-valley-tour/ladakh-zangskar-valley-tour-day9.jpg" alt="Day Nine Itinerary Image Of The Ladakh Zanskar Valley Tour Bike Package" />
                                    </div>
                                </div>

                                <ul class="itinerary">
                                    <li><span>Highlights</span>: Drive through Chang La, serene evening by Pangong Lake.</li>
                                    <li>Breakfast and Departure: Begin the drive to Pangong Lake via Chang La Pass (17,590 feet).</li>
                                    <li>Chang La Pass: Stop briefly at the pass for photos.</li>
                                    <li>Arrival at Pangong Lake: Check into a lakeside camp, with time to explore the lake and enjoy its famous color changes.</li>
                                    <li>Evening at Leisure: Relax by the lake, taking in the beauty of Pangong Tso.</li>
                                    <li><span>Overnight</span>: Camp/Wooden cottages in Pangong Lake</li>
                                </ul>

                            </div>
                            <div class="accordion-item">
                        <h3 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#itineraryCollapse10" aria-expanded="false" aria-controls="itineraryCollapse10">
                            Day 10 : Pangong Lake to Leh (160 km, 5-6 hours)
                            </button>
                        </h3>
                        <div id="itineraryCollapse10" class="accordion-collapse collapse" data-bs-parent="#itineraryAccordion">
                            <div class="accordion-body">
                                {/* Mobile Screen */}
                               <div class="row d-block d-lg-none">
                                    <div class="col-12 col-lg-6">
                                        <ItineraryIcons duration="5-6 Hr" highestAltitude="17688 ft" distance="160 km" lodging="Hotel" meal="BF/Dinner" />
                                    </div>

                                    <div class="col-12 col-lg-6 mt-3 mb-3 d-flex align-items-center justify-content-center">
                                        <ItineraryImage src="/img/packages/ladakh-zangskar-valley-tour/ladakh-zangskar-valley-tour-day10.jpg" alt="Day Ten Itinerary Image Of The Ladakh Zanskar Valley Tour Bike Package" />
                                    </div>
                                </div>

                                {/* Desktop Screen */}
                                <div class="row d-none d-lg-block">
                                    <div class="col-12 col-lg-12">
                                        <ItineraryIcons duration="5-6 Hr" highestAltitude="17688 ft" distance="160 km" lodging="Hotel" meal="BF/Dinner" />
                                    </div>

                                    <div class="col-12 col-lg-12 mt-3 mb-3 d-flex align-items-center justify-content-center">
                                        <ItineraryImage size="desktop" src="/img/packages/ladakh-zangskar-valley-tour/ladakh-zangskar-valley-tour-day10.jpg" alt="Day Ten Itinerary Image Of The Ladakh Zanskar Valley Tour Bike Package" />
                                    </div>
                                </div>

                                <ul class="itinerary">
                                    <li><span>Highlights</span>:Enjoy one last look at Ladakh’s rugged landscape.</li>
                                    <li>Breakfast and Departure: Begin the return journey to Leh.</li>
                                    <li>Arrival in Leh: Late afternoon arrival with time for last-minute shopping or relaxation.</li>
                                    <li>Tour Ends: Departure from Leh the following morning.</li>
                                    <li><span>Overnight</span>: Hotel in Leh</li>
                                </ul>

                            </div>
                        </div>
                    </div>
                        </div>
                    </div>

                    <div class="accordion-item">
                        <h3 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#itineraryCollapse11" aria-expanded="false" aria-controls="itineraryCollapse11">
                            Day 11 : Departure From Leh
                            </button>
                        </h3>
                        <div id="itineraryCollapse11" class="accordion-collapse collapse" data-bs-parent="#itineraryAccordion">
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