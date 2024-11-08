import { component$, useStylesScoped$ } from '@builder.io/qwik';
import ItineraryImage from "~/components/itinerary-image";
import styles from './itinerary.css?inline';
import ItineraryIcons from '~/components/itinerary-icons/itinerary-icons';

export default component$(() => {
    useStylesScoped$(styles);

    return (
        <div id="itinerary">
            <div class="sub-headings d-flex justify-content-between align-items-center">
                <h2>Itinerary</h2>
                <button class="btnOpenForm">Enquiry</button>
            </div>
            <div class="itinerary-accordian">
                <div class="accordion" id="itineraryAccordion">

                    <div class="accordion-item">
                        <h3 class="accordion-header">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#itineraryCollapse1" aria-expanded="true" aria-controls="itineraryCollapse1">
                            Day 01 : Arrival in Manali
                            </button>
                        </h3>
                        <div id="itineraryCollapse1" class="accordion-collapse collapse show" data-bs-parent="#itineraryAccordion">
                            <div class="accordion-body">
                                <div class="row d-block d-lg-none">
                                    <div class="col-12 col-lg-6">
                                        <ItineraryIcons highestAltitude="6725 ft" distance="20 km" duration="4 hrs" lodging="Hotel" meal="BF/Dinner" />
                                    </div>

                                    <div class="col-12 col-lg-6 mt-3 mb-3 d-flex align-items-center justify-content-center">
                                        <ItineraryImage src="/img/tours/manali-to-leh-via-umling-la/manali-to-leh-via-umling-la-day1.jpg" alt="Day One Itinerary Image Of The Manali To Leh Vai Umling La Bike Tour" />
                                    </div>
                                </div>

                                {/* Desktop Screen */}
                                <div class="row d-none d-lg-block">
                                    <div class="col-12 col-lg-12">
                                        <ItineraryIcons highestAltitude="6725 ft" distance="20 km" duration="4 hrs" lodging="Hotel" meal="BF/Dinner" />
                                    </div>

                                    <div class="col-12 col-lg-12 mt-3 mb-3 d-flex align-items-center justify-content-center">
                                        <ItineraryImage size="desktop" src="/img/tours/manali-to-leh-via-umling-la/manali-to-leh-via-umling-la-day1.jpg" alt="Day One Itinerary Image Of The Manali To Leh Vai Umling La Bike Tour" />
                                    </div>
                                </div>

                                <ul class="itinerary">
                                    <li><span>Activity</span>: Bike Check, Acclimatization, Local Exploration</li>
                                    <li><span>Highlights</span>: Mall Road, Hadimba Temple, Vashisht Hot Springs</li>
                                    <li>Arrive in Manali and spend the day getting acclimatized to the altitude. After checking into your hotel, you will be introduced to your bikes and given a safety briefing. In the afternoon, you can explore the local attractions like Mall Road, the Hadimba Temple, and the Vashisht Hot Springs.</li>
                                    <li><span>Overnight</span>: Hotel in Manali</li>
                                </ul>

                            </div>
                        </div>
                    </div>

                    <div class="accordion-item">
                        <h3 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#itineraryCollapse2" aria-expanded="false" aria-controls="itineraryCollapse2">
                            Day 02 : Manali to Sarchu
                            </button>
                        </h3>
                        <div id="itineraryCollapse2" class="accordion-collapse collapse" data-bs-parent="#itineraryAccordion">
                            <div class="accordion-body">
                                <div class="row d-block d-lg-none">
                                    <div class="col-12 col-lg-6">
                                        <ItineraryIcons highestAltitude="16500 ft" distance="223 km" duration="8 hrs" lodging="Camp" meal="BF/Dinner" />
                                    </div>

                                    <div class="col-12 col-lg-6 mt-3 mb-3 d-flex align-items-center justify-content-center">
                                        <ItineraryImage src="/img/tours/manali-to-leh-via-umling-la/manali-to-leh-via-umling-la-day2.jpg" alt="Day Two Itinerary Image Of The Manali To Leh Vai Umling La Bike Tour" />
                                    </div>
                                </div>

                                {/* Desktop Screen */}
                                <div class="row d-none d-lg-block">
                                    <div class="col-12 col-lg-12">
                                        <ItineraryIcons highestAltitude="16500 ft" distance="223 km" duration="8 hrs" lodging="Camp" meal="BF/Dinner" />
                                    </div>

                                    <div class="col-12 col-lg-12 mt-3 mb-3 d-flex align-items-center justify-content-center">
                                        <ItineraryImage size="desktop" src="/img/tours/manali-to-leh-via-umling-la/manali-to-leh-via-umling-la-day2.jpg" alt="Day Two Itinerary Image Of The Manali To Leh Vai Umling La Bike Tour" />
                                    </div>
                                </div>

                                <ul class="itinerary">
                                    <li><span>Highlights</span>: Atal tunnel, Keylong, Baralacha La Pass (16,500 ft)</li>
                                    <li>The adventure begins with a ride through the famous Atal tunnel, offering stunning views of the lush Kullu Valley. After crossing the tunnel, you’ll descend into the Lahaul Valley, passing Keylong, and continue the ascent to the majestic <strong>Baralacha La Pass</strong>. The ride is thrilling, with changing landscapes from green valleys to barren high-altitude deserts.</li>
                                    <li><span>Overnight</span>: Camp at Serchu</li>
                                </ul>

                            </div>
                        </div>
                    </div>

                    <div class="accordion-item">
                        <h3 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#itineraryCollapse3" aria-expanded="false" aria-controls="itineraryCollapse3">
                            Day 03 : Sarchu to Tso Kar Lake 
                            </button>
                        </h3>
                        <div id="itineraryCollapse3" class="accordion-collapse collapse" data-bs-parent="#itineraryAccordion">
                            <div class="accordion-body">
                                <div class="row d-block d-lg-none">
                                    <div class="col-12 col-lg-6">
                                        <ItineraryIcons highestAltitude="16600 ft" distance="137 km" duration="6 hrs" lodging="Camp" meal="BF/Dinner" />
                                    </div>

                                    <div class="col-12 col-lg-6 mt-3 mb-3 d-flex align-items-center justify-content-center">
                                        <ItineraryImage src="/img/tours/manali-to-leh-via-umling-la/manali-to-leh-via-umling-la-day3.jpg" alt="Day Three Itinerary Image Of The Manali To Leh Vai Umling La Bike Tour" />
                                    </div>
                                </div>

                                {/* Desktop Screen */}
                                <div class="row d-none d-lg-block">
                                    <div class="col-12 col-lg-12">
                                        <ItineraryIcons highestAltitude="16600 ft" distance="137 km" duration="6 hrs" lodging="Camp" meal="BF/Dinner" />
                                    </div>

                                    <div class="col-12 col-lg-12 mt-3 mb-3 d-flex align-items-center justify-content-center">
                                        <ItineraryImage size="desktop" src="/img/tours/manali-to-leh-via-umling-la/manali-to-leh-via-umling-la-day3.jpg" alt="Day Three Itinerary Image Of The Manali To Leh Vai Umling La Bike Tour" />
                                    </div>
                                </div>

                                <ul class="itinerary">
                                    <li><span>Highlights</span>: Gata Loops, Nakee La Pass (15,547 ft), Lachulung La Pass (16,616 ft), Tso Kar Lake</li>
                                    <li>Today’s ride includes tackling the challenging Gata Loops (21 hairpin bends), as you ascend to Nakee La and Lachulung La passes. After a series of breathtaking views and descents, you’ll reach the saltwater Tso Kar Lake, known for its shimmering white banks and the surrounding wildlife.</li>
                                    <li><span>Overnight</span>: Camp at Thukjey village at Tsokar lake</li>
                                </ul>

                            </div>
                        </div>
                    </div>

                    <div class="accordion-item">
                        <h3 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#itineraryCollapse4" aria-expanded="false" aria-controls="itineraryCollapse4">
                            Day 04 : Tso Kar to Tso Moriri
                            </button>
                        </h3>
                        <div id="itineraryCollapse4" class="accordion-collapse collapse" data-bs-parent="#itineraryAccordion">
                            <div class="accordion-body">
                                <div class="row d-block d-lg-none">
                                    <div class="col-12 col-lg-6">
                                        <ItineraryIcons highestAltitude="14836 ft" distance="97 km" duration="5 hrs" lodging="Camp" meal="BF/Dinner" />
                                    </div>

                                    <div class="col-12 col-lg-6 mt-3 mb-3 d-flex align-items-center justify-content-center">
                                        <ItineraryImage src="/img/tours/manali-to-leh-via-umling-la/manali-to-leh-via-umling-la-day4.jpg" alt="Day Four Itinerary Image Of The Manali To Leh Vai Umling La Bike Tour" />
                                    </div>
                                </div>

                                {/* Desktop Screen */}
                                <div class="row d-none d-lg-block">
                                    <div class="col-12 col-lg-12">
                                        <ItineraryIcons highestAltitude="14836 ft" distance="97 km" duration="5 hrs" lodging="Camp" meal="BF/Dinner" />
                                    </div>

                                    <div class="col-12 col-lg-12 mt-3 mb-3 d-flex align-items-center justify-content-center">
                                        <ItineraryImage size="desktop" src="/img/tours/manali-to-leh-via-umling-la/manali-to-leh-via-umling-la-day4.jpg" alt="Day Four Itinerary Image Of The Manali To Leh Vai Umling La Bike Tour" />
                                    </div>
                                </div>

                                <ul class="itinerary">
                                    <li><span>Highlights</span>: Changthang Plateau, Korzok Village, Tso Moriri Lake</li>
                                    <li>From Tso Kar, you will ride through the remote Changthang Plateau, home to nomadic herders and yaks. The ride takes you to the mesmerizing Tso Moriri Lake, which lies in a remote area surrounded by towering snow-capped mountains. Spend the afternoon exploring the Korzok Village, which lies along the lake.</li>
                                    <li><span>Overnight</span>: Camps/Guesthouse at Korzok village</li>
                                </ul>

                            </div>
                        </div>
                    </div>

                    <div class="accordion-item">
                        <h3 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#itineraryCollapse5" aria-expanded="false" aria-controls="itineraryCollapse5">
                            Day 05 : Tso Moriri to Hanle
                            </button>
                        </h3>
                        <div id="itineraryCollapse5" class="accordion-collapse collapse" data-bs-parent="#itineraryAccordion">
                            <div class="accordion-body">
                                <div class="row d-block d-lg-none">
                                    <div class="col-12 col-lg-6">
                                        <ItineraryIcons highestAltitude="14763 ft" distance="160 km" duration="6 hrs" lodging="Camp" meal="BF/Dinner" />
                                    </div>

                                    <div class="col-12 col-lg-6 mt-3 mb-3 d-flex align-items-center justify-content-center">
                                        <ItineraryImage src="/img/tours/manali-to-leh-via-umling-la/manali-to-leh-via-umling-la-day5.jpg" alt="Day Five Itinerary Image Of The Manali To Leh Vai Umling La Bike Tour" />
                                    </div>
                                </div>

                                {/* Desktop Screen */}
                                <div class="row d-none d-lg-block">
                                    <div class="col-12 col-lg-12">
                                        <ItineraryIcons highestAltitude="14763 ft" distance="160 km" duration="6 hrs" lodging="Camp" meal="BF/Dinner" />
                                    </div>

                                    <div class="col-12 col-lg-12 mt-3 mb-3 d-flex align-items-center justify-content-center">
                                        <ItineraryImage size="desktop" src="/img/tours/manali-to-leh-via-umling-la/manali-to-leh-via-umling-la-day5.jpg" alt="Day Five Itinerary Image Of The Manali To Leh Vai Umling La Bike Tour" />
                                    </div>
                                </div>

                                <ul class="itinerary">
                                    <li><span>Highlights</span>: Remote Villages, Hanle Monastery, Astronomical Observatory</li>
                                    <li>Today’s ride takes you further into one of the remotest parts of Ladakh as you head to Hanle. The journey is filled with barren landscapes, isolated villages, and vast skies. Hanle is famous for its Indian Astronomical Observatory, one of the highest observatories in the world. Explore the Hanle Monastery and enjoy the tranquil night sky.</li>
                                    <li><span>Overnight</span>: Homestay in Hanle</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="accordion-item">
                        <h3 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#itineraryCollapse6" aria-expanded="false" aria-controls="itineraryCollapse6">
                            Day 06 : Hanle to Umling La Pass and Back to Hanle
                            </button>
                        </h3>
                        <div id="itineraryCollapse6" class="accordion-collapse collapse" data-bs-parent="#itineraryAccordion">
                            <div class="accordion-body">
                                <div class="row d-block d-lg-none">
                                    <div class="col-12 col-lg-6">
                                        <ItineraryIcons highestAltitude="19024 ft" distance="150 km" duration="6 hrs" lodging="Camp" meal="BF/Dinner" />
                                    </div>

                                    <div class="col-12 col-lg-6 mt-3 mb-3 d-flex align-items-center justify-content-center">
                                        <ItineraryImage src="/img/tours/manali-to-leh-via-umling-la/manali-to-leh-via-umling-la-day6.jpg" alt="Day Six Itinerary Image Of The Manali To Leh Vai Umling La Bike Tour" />
                                    </div>
                                </div>

                                {/* Desktop Screen */}
                                <div class="row d-none d-lg-block">
                                    <div class="col-12 col-lg-12">
                                        <ItineraryIcons highestAltitude="19024 ft" distance="150 km" duration="6 hrs" lodging="Camp" meal="BF/Dinner" />
                                    </div>

                                    <div class="col-12 col-lg-12 mt-3 mb-3 d-flex align-items-center justify-content-center">
                                        <ItineraryImage size="desktop" src="/img/tours/manali-to-leh-via-umling-la/manali-to-leh-via-umling-la-day6.jpg" alt="Day Six Itinerary Image Of The Manali To Leh Vai Umling La Bike Tour" />
                                    </div>
                                </div>

                                <ul class="itinerary">
                                    <li><span>Highlights</span>: Umling La Pass (World’s Highest Motorable Road)</li>
                                    <li>Today is one of the most challenging and exhilarating days of the tour. Ride to Umling La Pass, the highest motorable road in the world at an altitude of 19,024 feet. The ascent to Umling La is demanding, with extreme altitudes and rugged terrain, but the panoramic views from the top are breathtaking. After reaching the summit, ride back to Hanle for a relaxing evening.</li>
                                    <li><span>Overnight</span>: Homestay in Hanle</li>
                                </ul>

                            </div>
                        </div>
                    </div>

                    <div class="accordion-item">
                        <h3 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#itineraryCollapse7" aria-expanded="false" aria-controls="itineraryCollapse7">
                            Day 07 : Hanle to Pangong Lake 
                            </button>
                        </h3>
                        <div id="itineraryCollapse7" class="accordion-collapse collapse" data-bs-parent="#itineraryAccordion">
                            <div class="accordion-body">
                                <div class="row d-block d-lg-none">
                                    <div class="col-12 col-lg-6">
                                        <ItineraryIcons highestAltitude="13940 ft" distance="230 km" duration="7 hrs" lodging="Cottges" meal="BF/Dinner" />
                                    </div>

                                    <div class="col-12 col-lg-6 mt-3 mb-3 d-flex align-items-center justify-content-center">
                                        <ItineraryImage src="/img/tours/manali-to-leh-via-umling-la/manali-to-leh-via-umling-la-day7.jpg" alt="Day Seven Itinerary Image Of The Manali To Leh Vai Umling La Bike Tour" />
                                    </div>
                                </div>

                                {/* Desktop Screen */}
                                <div class="row d-none d-lg-block">
                                    <div class="col-12 col-lg-12">
                                        <ItineraryIcons highestAltitude="13940 ft" distance="230 km" duration="7 hrs" lodging="Cottges" meal="BF/Dinner" />
                                    </div>

                                    <div class="col-12 col-lg-12 mt-3 mb-3 d-flex align-items-center justify-content-center">
                                        <ItineraryImage size="desktop" src="/img/tours/manali-to-leh-via-umling-la/manali-to-leh-via-umling-la-day7.jpg" alt="Day Seven Itinerary Image Of The Manali To Leh Vai Umling La Bike Tour" />
                                    </div>
                                </div>

                                <ul class="itinerary">
                                    <li><span>Highlights</span>: Remote Desert Landscapes, Pangong Tso Lake</li>
                                    <li>Depart Hanle and ride towards the magnificent Pangong Lake, a vast saltwater lake that stretches from India into Tibet. The route takes you through remote and barren desert-like terrain with occasional river crossings. Upon arrival at Pangong Lake, marvel at its changing colors and crystal-clear waters.</li>
                                    <li><span>Overnight</span>: Wooden cottages at Pangong Lake</li>
                                </ul>

                            </div>
                        </div>
                    </div>

                    <div class="accordion-item">
                        <h3 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#itineraryCollapse8" aria-expanded="false" aria-controls="itineraryCollapse8">
                            Day 08 : Pangong Lake to Nubra Valley via Shyok River 
                            </button>
                        </h3>
                        <div id="itineraryCollapse8" class="accordion-collapse collapse" data-bs-parent="#itineraryAccordion">
                            <div class="accordion-body">
                                <div class="row d-block d-lg-none">
                                    <div class="col-12 col-lg-6">
                                        <ItineraryIcons highestAltitude="10000 ft" distance="160 km" duration="6 hrs" lodging="Hotel/Camp" meal="BF/Dinner" />
                                    </div>

                                    <div class="col-12 col-lg-6 mt-3 mb-3 d-flex align-items-center justify-content-center">
                                        <ItineraryImage src="/img/tours/manali-to-leh-via-umling-la/manali-to-leh-via-umling-la-day8.jpg" alt="Day Eight Itinerary Image Of The Manali To Leh Vai Umling La Bike Tour" />
                                    </div>
                                </div>

                                {/* Desktop Screen */}
                                <div class="row d-none d-lg-block">
                                    <div class="col-12 col-lg-12">
                                        <ItineraryIcons highestAltitude="10000 ft" distance="160 km" duration="6 hrs" lodging="Hotel/Camp" meal="BF/Dinner" />
                                    </div>

                                    <div class="col-12 col-lg-12 mt-3 mb-3 d-flex align-items-center justify-content-center">
                                        <ItineraryImage size="desktop" src="/img/tours/manali-to-leh-via-umling-la/manali-to-leh-via-umling-la-day8.jpg" alt="Day Eight Itinerary Image Of The Manali To Leh Vai Umling La Bike Tour" />
                                    </div>
                                </div>

                                <ul class="itinerary">
                                    <li><span>Highlights</span>: Shyok River Valley, Sand Dunes of Hunder, Diskit Monastery</li>
                                    <li>The ride to Nubra Valley takes you through the scenic Shyok River route, a challenging yet stunning path. Once in Nubra, visit the Hunder Sand Dunes, where you can experience a camel ride on the unique double-humped Bactrian camels. Later, visit the Diskit Monastery, home to a giant Buddha statue overlooking the valley.</li>
                                    <li><span>Overnight</span>: Hotel at Hunder village</li>
                                </ul>

                            </div>
                        </div>
                    </div>

                    <div class="accordion-item">
                        <h3 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#itineraryCollapse9" aria-expanded="false" aria-controls="itineraryCollapse9">
                            Day 09 :  Nubra Valley to Turtuk and back to Nubra
                            </button>
                        </h3>
                        <div id="itineraryCollapse9" class="accordion-collapse collapse" data-bs-parent="#itineraryAccordion">
                            <div class="accordion-body">
                                <div class="row d-block d-lg-none">
                                    <div class="col-12 col-lg-6">
                                        <ItineraryIcons highestAltitude="10000 ft" distance="170 km" duration="6 hrs" lodging="Hotel/Camp" meal="BF/Dinner" />
                                    </div>

                                    <div class="col-12 col-lg-6 mt-3 mb-3 d-flex align-items-center justify-content-center">
                                        <ItineraryImage src="/img/tours/manali-to-leh-via-umling-la/manali-to-leh-via-umling-la-day9.jpg" alt="Day Nine Itinerary Image Of The Manali To Leh Vai Umling La Bike Tour" />
                                    </div>
                                </div>

                                {/* Desktop Screen */}
                                <div class="row d-none d-lg-block">
                                    <div class="col-12 col-lg-12">
                                        <ItineraryIcons highestAltitude="10000 ft" distance="170 km" duration="6 hrs" lodging="Hotel/Camp" meal="BF/Dinner" />
                                    </div>

                                    <div class="col-12 col-lg-12 mt-3 mb-3 d-flex align-items-center justify-content-center">
                                        <ItineraryImage size="desktop" src="/img/tours/manali-to-leh-via-umling-la/manali-to-leh-via-umling-la-day9.jpg" alt="Day Nine Itinerary Image Of The Manali To Leh Vai Umling La Bike Tour" />
                                    </div>
                                </div>

                                <ul class="itinerary">
                                    <li><span>Highlights</span>: Turtuk Village, Last Indian Village on the Indo-Pak Border</li>
                                    <li>Today’s ride takes you to the remote Turtuk Village, one of the northernmost villages in India, located near the Indo-Pak border. Turtuk, once part of Baltistan, offers a unique cultural experience with its Balti heritage and apricot orchards. After exploring Turtuk, return to Nubra Valley.</li>
                                    <li><span>Overnight</span>: Hotel at Hunder village</li>
                                </ul>

                            </div>
                        </div>
                    </div>

                    <div class="accordion-item">
                        <h3 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#itineraryCollapse10" aria-expanded="false" aria-controls="itineraryCollapse10">
                            Day 10 :  Nubra Valley to Leh via Khardung La Pass 
                            </button>
                        </h3>
                        <div id="itineraryCollapse10" class="accordion-collapse collapse" data-bs-parent="#itineraryAccordion">
                            <div class="accordion-body">
                                <div class="row d-block d-lg-none">
                                    <div class="col-12 col-lg-6">
                                        <ItineraryIcons highestAltitude="18300 ft" distance="120 km" duration="5 hrs" lodging="Hotel" meal="BF/Dinner" />
                                    </div>

                                    <div class="col-12 col-lg-6 mt-3 mb-3 d-flex align-items-center justify-content-center">
                                        <ItineraryImage src="/img/tours/manali-to-leh-via-umling-la/manali-to-leh-via-umling-la-day10.jpg" alt="Day Ten Itinerary Image Of The Manali To Leh Vai Umling La Bike Tour" />
                                    </div>
                                </div>

                                {/* Desktop Screen */}
                                <div class="row d-none d-lg-block">
                                    <div class="col-12 col-lg-12">
                                        <ItineraryIcons highestAltitude="18300 ft" distance="120 km" duration="5 hrs" lodging="Hotel" meal="BF/Dinner" />
                                    </div>

                                    <div class="col-12 col-lg-12 mt-3 mb-3 d-flex align-items-center justify-content-center">
                                        <ItineraryImage size="desktop" src="/img/tours/manali-to-leh-via-umling-la/manali-to-leh-via-umling-la-day10.jpg" alt="Day Ten Itinerary Image Of The Manali To Leh Vai Umling La Bike Tour" />
                                    </div>
                                </div>

                                <ul class="itinerary">
                                    <li><span>Highlights</span>: Khardung La Pass, Leh Market</li>
                                    <li>Begin your ride towards Leh by crossing the famous Khardung La, one of the highest motorable roads in the world. The challenging climb is rewarded with incredible views of the Karakoram and Zanskar ranges. Once you reach Leh, you can relax and explore the local markets and cafes.</li>
                                    <li><span>Overnight</span>: Hotel in Leh</li>
                                </ul>

                            </div>
                        </div>
                    </div>

                    <div class="accordion-item">
                        <h3 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#itineraryCollapse11" aria-expanded="false" aria-controls="itineraryCollapse11">
                            Day 11 : Departure from Leh
                            </button>
                        </h3>
                        <div id="itineraryCollapse11" class="accordion-collapse collapse" data-bs-parent="#itineraryAccordion">
                            <div class="accordion-body">
                                <p>
                                    After breakfast, bid farewell to the mesmerizing landscapes of Ladakh and transfer to Leh Airport for your onward journey, carrying with you unforgettable memories of your motorbiking adventure across the Himalayas.
                                </p>

                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
});