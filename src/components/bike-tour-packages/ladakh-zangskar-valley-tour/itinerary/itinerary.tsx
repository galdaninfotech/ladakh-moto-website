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
                                        <ItineraryImage src="/img/bike-tour-packages/ladakh-zangskar-valley-tour/ladakh-zangskar-valley-tour-day1.jpg" alt="Day One Itinerary Image Of The Ladakh Zanskar Valley Tour Bike Package" />
                                    </div>
                                </div>

                                {/* Desktop Screen */}
                                <div class="row d-none d-lg-block">
                                    <div class="col-12 col-lg-12">
                                        <ItineraryIcons duration="4 Hr" highestAltitude="11000 ft" distance="20 km" lodging="Hotel" meal="BF/Dinner" />
                                    </div>

                                    <div class="col-12 col-lg-12 mt-3 mb-3 d-flex align-items-center justify-content-center">
                                        <ItineraryImage size="desktop" src="/img/bike-tour-packages/ladakh-zangskar-valley-tour/ladakh-zangskar-valley-tour-day1.jpg" alt="Day One Itinerary Image Of The Ladakh Zanskar Valley Tour Bike Package" />
                                    </div>
                                </div>

                                <ul class="itinerary">
                                    <li><span>Activity</span>: Acclimatization and rest</li>
                                    <li><span>Highlights</span>:Introduction to Leh and light local exploration (if acclimatized).</li>
                                    <li> Arrival in Leh: Meet at Leh Airport and transfer to the hotel. </li>
                                    <li>Rest and Acclimatization: The rest day is for adapting to the high altitude of Leh.</li>
                                    <li>Optional Evening Leisure:  If sufficiently acclimatized, one can explore Leh market, shove off to Shanti Stupa or pay a visit to the magnificent Leh Palace. </li>
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
                                        <ItineraryImage src="/img/bike-tour-packages/ladakh-zangskar-valley-tour/ladakh-zangskar-valley-tour-day2.jpg" alt="Day Two Itinerary Image Of The Ladakh Zanskar Valley Tour Bike Package" />
                                    </div>
                                </div>

                                {/* Desktop Screen */}
                                <div class="row d-none d-lg-block">
                                    <div class="col-12 col-lg-12">
                                        <ItineraryIcons duration="3-4 Hr" highestAltitude="11000 ft" distance="60 km" lodging="Hotel" meal="BF/Dinner" />
                                    </div>

                                    <div class="col-12 col-lg-12 mt-3 mb-3 d-flex align-items-center justify-content-center">
                                        <ItineraryImage size="desktop" src="/img/bike-tour-packages/ladakh-zangskar-valley-tour/ladakh-zangskar-valley-tour-day2.jpg" alt="Day Two Itinerary Image Of The Ladakh Zanskar Valley Tour Bike Package" />
                                    </div>
                                </div>

                                <ul class="itinerary">
                                    <li><span>Highlights</span>: Continued acclimatization with visits to Leh’s cultural sites. </li>
                                    <li>Thiksey Monastery: A stunning hilltop monastery resembling the Potala Palace, known for its giant Maitreya Buddha statue and panoramic views of the Indus Valley.</li>
                                    <li>Shey Palace: The former royal summer residence, featuring a massive copper and gold Buddha statue and picturesque surroundings.</li>
                                    <li>Hemis Monastery: The largest and wealthiest monastery in Ladakh, famous for its vibrant annual festival and historic Buddhist relics. </li>
                                    <li>Sangam Point: Come across the confluence of the Indus and Zanskar Rivers.</li>
                                    <li>Return to Leh: No activities planned for the evening enabling sightseeing of local markets and some rest. </li>
                                    <li><span>Overnight</span>: Hotel in Leh</li>
                                </ul>

                            </div>
                        </div>
                    </div>

                    <div class="accordion-item">
                        <h3 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#itineraryCollapse3" aria-expanded="false" aria-controls="itineraryCollapse3">
                            Day 03 : Leh to Kargil
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
                                        <ItineraryImage src="/img/bike-tour-packages/ladakh-zangskar-valley-tour/ladakh-zangskar-valley-tour-day3.jpg" alt="Day Three Itinerary Image Of The Ladakh Zanskar Valley Tour Bike Package" />
                                    </div>
                                </div>

                                {/* Desktop Screen */}
                                <div class="row d-none d-lg-block">
                                    <div class="col-12 col-lg-12">
                                        <ItineraryIcons duration="5-6 Hr" highestAltitude="13478 ft" distance="210 km" lodging="Hotel" meal="BF/Dinner" />
                                    </div>

                                    <div class="col-12 col-lg-12 mt-3 mb-3 d-flex align-items-center justify-content-center">
                                        <ItineraryImage size="desktop" src="/img/bike-tour-packages/ladakh-zangskar-valley-tour/ladakh-zangskar-valley-tour-day3.jpg" alt="Day Three Itinerary Image Of The Ladakh Zanskar Valley Tour Bike Package" />
                                    </div>
                                </div>

                                <ul class="itinerary">
                                    <li><span>Highlights</span>: Picturesque ride with a tour of Lamayuru and Alchi monasteries. </li>
                                    <li>Breakfast and Departure: Enjoy your drive to Kargil through Lamayuru and Alchi Monasteries. </li>
                                    <li>Lamayuru Monastery: Visit the old age monastery and see the unique “moonland” that is quite famous for its peculiar shaped rocks.</li>
                                    <li>Alchi Monastery: Proceed towards Alchi- one of the oldest monasteries in Ladakh famous for its unique Indo-Tibetan art.</li>
                                    <li><span>Overnight</span>: Hotel/Resort in Kargil</li>
                                </ul>

                            </div>
                        </div>
                    </div>

                    <div class="accordion-item">
                        <h3 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#itineraryCollapse4" aria-expanded="false" aria-controls="itineraryCollapse4">
                            Day 04 : Kargil to Padum
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
                                        <ItineraryImage src="/img/bike-tour-packages/ladakh-zangskar-valley-tour/ladakh-zangskar-valley-tour-day4.jpg" alt="Day Four Itinerary Image Of The Ladakh Zanskar Valley Tour Bike Package" />
                                    </div>
                                </div>

                                {/* Desktop Screen */}
                                <div class="row d-none d-lg-block">
                                    <div class="col-12 col-lg-12">
                                        <ItineraryIcons duration="6-7 Hr" highestAltitude="14500 ft" distance="240 km" lodging="Hotel" meal="BF/Dinner" />
                                    </div>

                                    <div class="col-12 col-lg-12 mt-3 mb-3 d-flex align-items-center justify-content-center">
                                        <ItineraryImage size="desktop" src="/img/bike-tour-packages/ladakh-zangskar-valley-tour/ladakh-zangskar-valley-tour-day4.jpg" alt="Day Four Itinerary Image Of The Ladakh Zanskar Valley Tour Bike Package" />
                                    </div>
                                </div>

                                <ul class="itinerary">
                                    <li><span>Highlights</span>: Scenic drive through Suru Valley, monastery visit, and arrival in Zanskar.</li>
                                    <li>Breakfast and Departure: Begin the long and scenic drive to Padum, the heart of Zanskar Valley.</li>
                                    <li>Suru Valley: Drive through the lush Suru Valley, passing views of the Nun-Kun Peaks.</li>
                                    <li>Rangdum Monastery: Stop at Rangdum, a remote monastery with panoramic mountain views.</li>
                                    <li><span>Overnight</span>: Hotel/resort in Padum</li>
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
                                        <ItineraryImage src="/img/bike-tour-packages/ladakh-zangskar-valley-tour/ladakh-zangskar-valley-tour-day5.jpg" alt="Day Five Itinerary Image Of The Ladakh Zanskar Valley Tour Bike Package" />
                                    </div>
                                </div>

                                {/* Desktop Screen */}
                                <div class="row d-none d-lg-block">
                                    <div class="col-12 col-lg-12">
                                        <ItineraryIcons duration="5-6 Hr" highestAltitude="12040 ft" distance="80 km" lodging="Hotel" meal="BF/Dinner" />
                                    </div>

                                    <div class="col-12 col-lg-12 mt-3 mb-3 d-flex align-items-center justify-content-center">
                                        <ItineraryImage size="desktop" src="/img/bike-tour-packages/ladakh-zangskar-valley-tour/ladakh-zangskar-valley-tour-day5.jpg" alt="Day Five Itinerary Image Of The Ladakh Zanskar Valley Tour Bike Package" />
                                    </div>
                                </div>

                                <ul class="itinerary">
                                    <li><span>Highlights</span>: Scenic drive through Suru Valley, monastery visit, and arrival in Zanskar.</li>
                                    <li>Breakfast and Departure: Begin the long and scenic drive to Padum, the heart of Zanskar Valley.</li>
                                    <li>Suru Valley: Drive through the lush Suru Valley, passing views of the Nun-Kun Peaks.</li>
                                    <li>Rangdum Monastery: Stop at Rangdum, a remote monastery with panoramic mountain views.</li>
                                    <li><span>Overnight</span>: Hotel/resort in Padum</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="accordion-item">
                        <h3 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#itineraryCollapse6" aria-expanded="false" aria-controls="itineraryCollapse6">
                            Day 06 : Padum to Lamayuru Via Lingshed Village
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
                                        <ItineraryImage src="/img/bike-tour-packages/ladakh-zangskar-valley-tour/ladakh-zangskar-valley-tour-day6.jpg" alt="Day Six Itinerary Image Of The Ladakh Zanskar Valley Tour Bike Package" />
                                    </div>
                                </div>

                                {/* Desktop Screen */}
                                <div class="row d-none d-lg-block">
                                    <div class="col-12 col-lg-12">
                                        <ItineraryIcons duration="4-5 Hr" highestAltitude="12040 ft" distance="110 km" lodging="Hotel/Camp" meal="BF/Dinner" />
                                    </div>

                                    <div class="col-12 col-lg-12 mt-3 mb-3 d-flex align-items-center justify-content-center">
                                        <ItineraryImage size="desktop" src="/img/bike-tour-packages/ladakh-zangskar-valley-tour/ladakh-zangskar-valley-tour-day6.jpg" alt="Day Six Itinerary Image Of The Ladakh Zanskar Valley Tour Bike Package" />
                                    </div>
                                </div>

                                <ul class="itinerary">
                                    <li><span>Highlights</span>: Scenic drive through Zangskar valley, isolated Linshed Village, Singe - la pass</li>
                                    <li>Breakfast and Departure: Depart from Padum early, enjoying the serene morning views of the Zanskar Valley.</li>
                                    <li>Lingshed Village, a remote and tranquil hamlet known for its ancient monastery and traditional Ladakhi culture.</li>
                                    <li>Cross Singe - La Pass, a very high remote pass</li>
                                    <li>Reach Lamayuru, home to the iconic Lamayuru Monastery, often called the "Moonland" due to its unique lunar-like terrain.</li>
                                    <li><span>Overnight</span>: Hotel/Guest house in Lamayuru</li>
                                </ul>

                            </div>
                        </div>
                    </div>

                    <div class="accordion-item">
                        <h3 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#itineraryCollapse7" aria-expanded="false" aria-controls="itineraryCollapse7">
                            Day 07 : Lamayuru to Leh
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
                                        <ItineraryImage src="/img/bike-tour-packages/ladakh-zangskar-valley-tour/ladakh-zangskar-valley-tour-day7.jpg" alt="Day Seven Itinerary Image Of The Ladakh Zanskar Valley Tour Bike Package" />
                                    </div>
                                </div>

                                {/* Desktop Screen */}
                                <div class="row d-none d-lg-block">
                                    <div class="col-12 col-lg-12">
                                        <ItineraryIcons duration="8-9 Hr" highestAltitude="12040 ft" distance="320 km" lodging="Hotel" meal="BF/Dinner" />
                                    </div>

                                    <div class="col-12 col-lg-12 mt-3 mb-3 d-flex align-items-center justify-content-center">
                                        <ItineraryImage size="desktop" src="/img/bike-tour-packages/ladakh-zangskar-valley-tour/ladakh-zangskar-valley-tour-day7.jpg" alt="Day Seven Itinerary Image Of The Ladakh Zanskar Valley Tour Bike Package" />
                                    </div>
                                </div>

                                <ul class="itinerary">
                                    <li><span>Highlights</span>: Return journey with views of Ladakh’s landscapes and the indus Valley.</li>
                                    <li>Early Breakfast and Departure: Begin the scenic journey back to Leh, with stops for photos and relaxation.</li>
                                    <li>Drive via Indus Valley: Enjoy one last look at Indus Valley’s lush greenery and mountain peaks..</li>
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
                                        <ItineraryImage src="/img/bike-tour-packages/ladakh-zangskar-valley-tour/ladakh-zangskar-valley-tour-day8.jpg" alt="Day Eight Itinerary Image Of The Ladakh Zanskar Valley Tour Bike Package" />
                                    </div>
                                </div>

                                {/* Desktop Screen */}
                                <div class="row d-none d-lg-block">
                                    <div class="col-12 col-lg-12">
                                        <ItineraryIcons duration="4 Hr" highestAltitude="11000 ft" distance="40 km" lodging="Hotel" meal="BF/Dinner" />
                                    </div>

                                    <div class="col-12 col-lg-12 mt-3 mb-3 d-flex align-items-center justify-content-center">
                                        <ItineraryImage size="desktop" src="/img/bike-tour-packages/ladakh-zangskar-valley-tour/ladakh-zangskar-valley-tour-day8.jpg" alt="Day Eight Itinerary Image Of The Ladakh Zanskar Valley Tour Bike Package" />
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
                            Day 09 : Leh to Pangong Lake
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
                                        <ItineraryImage src="/img/bike-tour-packages/ladakh-zangskar-valley-tour/ladakh-zangskar-valley-tour-day9.jpg" alt="Day Nine Itinerary Image Of The Ladakh Zanskar Valley Tour Bike Package" />
                                    </div>
                                </div>

                                {/* Desktop Screen */}
                                <div class="row d-none d-lg-block">
                                    <div class="col-12 col-lg-12">
                                        <ItineraryIcons duration="5-6 Hr" highestAltitude="17688 ft" distance="160 km" lodging="Cottage" meal="BF/Dinner" />
                                    </div>

                                    <div class="col-12 col-lg-12 mt-3 mb-3 d-flex align-items-center justify-content-center">
                                        <ItineraryImage size="desktop" src="/img/bike-tour-packages/ladakh-zangskar-valley-tour/ladakh-zangskar-valley-tour-day9.jpg" alt="Day Nine Itinerary Image Of The Ladakh Zanskar Valley Tour Bike Package" />
                                    </div>
                                </div>

                                <ul class="itinerary">
                                    <li><span>Highlights</span>:Drive through Changla pass one of the highest in the world</li>
                                    <li>Breakfast and Departure: Drive to Pangong Lake via Chang La Pass (17,688 ft) after enjoying breakfast.</li>
                                    <li>Arrival at Pangong Lake: Check into a lakeside cottage, with time to explore the mesmerizing lake and its changing hues.</li>
                                    <li>Evening at Leisure: Relax by the lake, take photos, and enjoy the peaceful surroundings.</li>
                                    <li><span>Overnight</span>: Cottage in Pangong</li>
                                </ul>

                            </div>
                        </div>
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
                                        <ItineraryImage src="/img/bike-tour-packages/ladakh-zangskar-valley-tour/ladakh-zangskar-valley-tour-day10.jpg" alt="Day Ten Itinerary Image Of The Ladakh Zanskar Valley Tour Bike Package" />
                                    </div>
                                </div>

                                {/* Desktop Screen */}
                                <div class="row d-none d-lg-block">
                                    <div class="col-12 col-lg-12">
                                        <ItineraryIcons duration="5-6 Hr" highestAltitude="17688 ft" distance="160 km" lodging="Hotel" meal="BF/Dinner" />
                                    </div>

                                    <div class="col-12 col-lg-12 mt-3 mb-3 d-flex align-items-center justify-content-center">
                                        <ItineraryImage size="desktop" src="/img/bike-tour-packages/ladakh-zangskar-valley-tour/ladakh-zangskar-valley-tour-day10.jpg" alt="Day Ten Itinerary Image Of The Ladakh Zanskar Valley Tour Bike Package" />
                                    </div>
                                </div>

                                <ul class="itinerary">
                                    <li><span>Highlights</span>: : A wonderful day start is created by the sunrise at the lake which looks mesmerizing. </li>
                                    <li>Breakfast and Departure: Drive back to Leh via Chang La Pass (17,688 ft) after enjoying breakfast. </li>
                                    <li>Thiksey Monastery (Optional): In addition, admire the great panoramas of the Indus Valley from the Thiksey Monastery located on a hilltop. </li>
                                    <li>Arrive Leh by afternoon. Evening visit Leh market.</li>
                                    <li><span>Overnight</span>: Hotel in Leh</li>
                                </ul>

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
                                    Breakfast and Check-Out: Transfer to Leh Airport for departure.Departure with memories of Nubra Valley, Pangong Lake, Hanle, Tso Moriri, and the beautiful landscapes of Ladakh.
                                </p>

                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
});