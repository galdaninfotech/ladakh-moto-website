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
                            Day 01 : Arrival in Leh
                            </button>
                        </h3>
                        <div id="itineraryCollapse1" class="accordion-collapse collapse show" data-bs-parent="#itineraryAccordion">
                            <div class="accordion-body">
                                <div class="row d-block d-lg-none">
                                    <div class="col-12 col-lg-6">
                                        <ItineraryIcons highestAltitude="11000 ft" distance="20 km" duration="4 hrs" lodging="Hotel" meal="BF/Dinner" />
                                    </div>

                                    <div class="col-12 col-lg-6 mt-3 mb-3 d-flex align-items-center justify-content-center">
                                        <ItineraryImage src="/img/tours/ladakh-srinagar-with-umling-la/ladakh-srinagar-with-umling-la-day1.jpg" alt="Day One Itinerary Image Of The Ladakh Srinagar With Umling La Bike Tour" />
                                    </div>
                                </div>

                                {/* Desktop Screen */}
                                <div class="row d-none d-lg-block">
                                    <div class="col-12 col-lg-12">
                                        <ItineraryIcons highestAltitude="11000 ft" distance="20 km" duration="4 hrs" lodging="Hotel" meal="BF/Dinner" />
                                    </div>

                                    <div class="col-12 col-lg-12 mt-3 mb-3 d-flex align-items-center justify-content-center">
                                        <ItineraryImage size="desktop" src="/img/tours/ladakh-srinagar-with-umling-la/ladakh-srinagar-with-umling-la-day1.jpg" alt="Day One Itinerary Image Of The Ladakh Srinagar With Umling La Bike Tour" />
                                    </div>
                                </div>

                                <ul class="itinerary">
                                    <li><span>Activity</span>: Acclimatization and Rest</li>
                                    <li><span>Highlights</span>: Explore Leh Market, Leh Palace (optional)</li>
                                    <li>Upon arrival at Leh Airport, you’ll be transferred to your hotel. Spend the day acclimatizing to Leh's high altitude. Take a light walk around Leh Market, or, if you feel comfortable, visit Leh Palace for panoramic views of the town.</li>
                                    <li><span>Overnight</span>: Hotel in Leh</li>
                                </ul>

                            </div>
                        </div>
                    </div>

                    <div class="accordion-item">
                        <h3 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#itineraryCollapse2" aria-expanded="false" aria-controls="itineraryCollapse2">
                            Day 02 : Local Sightseeing in Leh
                            </button>
                        </h3>
                        <div id="itineraryCollapse2" class="accordion-collapse collapse" data-bs-parent="#itineraryAccordion">
                            <div class="accordion-body">
                                <div class="row d-block d-lg-none">
                                    <div class="col-12 col-lg-6">
                                        <ItineraryIcons highestAltitude="11000 ft" distance="60 km" duration="4 hrs" lodging="Hotel" meal="BF/Dinner" />
                                    </div>

                                    <div class="col-12 col-lg-6 mt-3 mb-3 d-flex align-items-center justify-content-center">
                                        <ItineraryImage src="/img/tours/ladakh-srinagar-with-umling-la/ladakh-srinagar-with-umling-la-day2.jpg" alt="Day Two Itinerary Image Of The Ladakh Srinagar With Umling La Bike Tour" />
                                    </div>
                                </div>

                                {/* Desktop Screen */}
                                <div class="row d-none d-lg-block">
                                    <div class="col-12 col-lg-12">
                                        <ItineraryIcons highestAltitude="11000 ft" distance="60 km" duration="4 hrs" lodging="Hotel" meal="BF/Dinner" />
                                    </div>

                                    <div class="col-12 col-lg-12 mt-3 mb-3 d-flex align-items-center justify-content-center">
                                        <ItineraryImage size="desktop" src="/img/tours/ladakh-srinagar-with-umling-la/ladakh-srinagar-with-umling-la-day2.jpg" alt="Day Two Itinerary Image Of The Ladakh Srinagar With Umling La Bike Tour" />
                                    </div>
                                </div>

                                <ul class="itinerary">
                                    <li><span>Highlights</span>: Shanti Stupa, Leh Palace, Magnetic Hill, Hall of Fame, Gurudwara Pathar Sahib</li>
                                    <li>After breakfast, embark on a local sightseeing tour of Leh. Visit the Shanti Stupa, a white-domed structure offering breathtaking views of Leh town. Explore the Leh Palace, a former royal palace. Next, head towards the Magnetic Hill, where vehicles appear to defy gravity, and stop at Gurudwara Pathar Sahib, a peaceful Sikh temple. Conclude the day with a visit to the Hall of Fame, a museum honoring the Indian Army.</li>
                                    <li><span>Overnight</span>: Hotel in Leh</li>
                                </ul>

                            </div>
                        </div>
                    </div>

                    <div class="accordion-item">
                        <h3 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#itineraryCollapse3" aria-expanded="false" aria-controls="itineraryCollapse3">
                            Day 03 : Leh to Nubra Valley via Khardung La
                            </button>
                        </h3>
                        <div id="itineraryCollapse3" class="accordion-collapse collapse" data-bs-parent="#itineraryAccordion">
                            <div class="accordion-body">
                                <div class="row d-block d-lg-none">
                                    <div class="col-12 col-lg-6">
                                        <ItineraryIcons highestAltitude="18300 ft" distance="140 km" duration="5 hrs" lodging="Hotel/Camp" meal="BF/Dinner" />
                                    </div>

                                    <div class="col-12 col-lg-6 mt-3 mb-3 d-flex align-items-center justify-content-center">
                                        <ItineraryImage src="/img/tours/ladakh-srinagar-with-umling-la/ladakh-srinagar-with-umling-la-day3.jpg" alt="Day Three Itinerary Image Of The Ladakh Srinagar With Umling La Bike Tour" />
                                    </div>
                                </div>

                                {/* Desktop Screen */}
                                <div class="row d-none d-lg-block">
                                    <div class="col-12 col-lg-12">
                                        <ItineraryIcons highestAltitude="18300 ft" distance="140 km" duration="5 hrs" lodging="Hotel/Camp" meal="BF/Dinner" />
                                    </div>

                                    <div class="col-12 col-lg-12 mt-3 mb-3 d-flex align-items-center justify-content-center">
                                        <ItineraryImage size="desktop" src="/img/tours/ladakh-srinagar-with-umling-la/ladakh-srinagar-with-umling-la-day3.jpg" alt="Day Three Itinerary Image Of The Ladakh Srinagar With Umling La Bike Tour" />
                                    </div>
                                </div>

                                <ul class="itinerary">
                                    <li><span>Highlights</span>: Khardung La Pass (18,380 ft), Diskit Monastery, Hunder Sand Dunes</li>
                                    <li>Start your ride by ascending to Khardung La, one of the world’s highest motorable passes. After crossing the pass, descend into the beautiful Nubra Valley. Visit the Diskit Monastery, home to a gigantic Maitreya Buddha statue. Later, explore the Hunder Sand Dunes, where you can enjoy a camel ride on the unique double-humped Bactrian camels.</li>
                                    <li><span>Overnight</span>: Camps/Guesthouse in Hunder, Nubra Valley</li>
                                </ul>

                            </div>
                        </div>
                    </div>

                    <div class="accordion-item">
                        <h3 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#itineraryCollapse4" aria-expanded="false" aria-controls="itineraryCollapse4">
                            Day 04 : Hunder to Turtuk and back to Hunder
                            </button>
                        </h3>
                        <div id="itineraryCollapse4" class="accordion-collapse collapse" data-bs-parent="#itineraryAccordion">
                            <div class="accordion-body">
                                <div class="row d-block d-lg-none">
                                    <div class="col-12 col-lg-6">
                                        <ItineraryIcons highestAltitude="10000 ft" distance="170 km" duration="6 hrs" lodging="Hotel/Camp" meal="BF/Dinner" />
                                    </div>

                                    <div class="col-12 col-lg-6 mt-3 mb-3 d-flex align-items-center justify-content-center">
                                        <ItineraryImage src="/img/tours/ladakh-srinagar-with-umling-la/ladakh-srinagar-with-umling-la-day4.jpg" alt="Day Four Itinerary Image Of The Ladakh Srinagar With Umling La Bike Tour" />
                                    </div>
                                </div>

                                {/* Desktop Screen */}
                                <div class="row d-none d-lg-block">
                                    <div class="col-12 col-lg-12">
                                        <ItineraryIcons highestAltitude="10000 ft" distance="170 km" duration="6 hrs" lodging="Hotel/Camp" meal="BF/Dinner" />
                                    </div>

                                    <div class="col-12 col-lg-12 mt-3 mb-3 d-flex align-items-center justify-content-center">
                                        <ItineraryImage size="desktop" src="/img/tours/ladakh-srinagar-with-umling-la/ladakh-srinagar-with-umling-la-day4.jpg" alt="Day Four Itinerary Image Of The Ladakh Srinagar With Umling La Bike Tour" />
                                    </div>
                                </div>

                                <ul class="itinerary">
                                    <li><span>Highlights</span>: Turtuk Village, Indo-Pak Border, Balti Culture</li>
                                    <li>Today’s ride takes you to the remote and culturally unique village of Turtuk, located near the Indo-Pak border. Turtuk offers a glimpse of the rich Balti culture, distinct from the rest of Ladakh. Explore the village, interact with the locals, and enjoy the beautiful apricot orchards before riding back to Hunder for the night.</li>
                                    <li><span>Overnight</span>: Camps/Guesthouse in Hunder, Nubra Valley</li>
                                </ul>

                            </div>
                        </div>
                    </div>

                    <div class="accordion-item">
                        <h3 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#itineraryCollapse5" aria-expanded="false" aria-controls="itineraryCollapse5">
                            Day 05 : Nubra Valley to Pangong Lake via Shyok
                            </button>
                        </h3>
                        <div id="itineraryCollapse5" class="accordion-collapse collapse" data-bs-parent="#itineraryAccordion">
                            <div class="accordion-body">
                                <div class="row d-block d-lg-none">
                                    <div class="col-12 col-lg-6">
                                        <ItineraryIcons highestAltitude="13940 ft" distance="160 km" duration="7 hrs" lodging="Cottges" meal="BF/Dinner" />
                                    </div>

                                    <div class="col-12 col-lg-6 mt-3 mb-3 d-flex align-items-center justify-content-center">
                                        <ItineraryImage src="/img/tours/ladakh-srinagar-with-umling-la/ladakh-srinagar-with-umling-la-day5.jpg" alt="Day Five Itinerary Image Of The Ladakh Srinagar With Umling La Bike Tour" />
                                    </div>
                                </div>

                                {/* Desktop Screen */}
                                <div class="row d-none d-lg-block">
                                    <div class="col-12 col-lg-12">
                                        <ItineraryIcons highestAltitude="13940 ft" distance="160 km" duration="7 hrs" lodging="Cottges" meal="BF/Dinner" />
                                    </div>

                                    <div class="col-12 col-lg-12 mt-3 mb-3 d-flex align-items-center justify-content-center">
                                        <ItineraryImage size="desktop" src="/img/tours/ladakh-srinagar-with-umling-la/ladakh-srinagar-with-umling-la-day5.jpg" alt="Day Five Itinerary Image Of The Ladakh Srinagar With Umling La Bike Tour" />
                                    </div>
                                </div>

                                <ul class="itinerary">
                                    <li><span>Highlights</span>: Shyok River, Pangong Lake</li>
                                    <li>Today, ride along the scenic and adventurous Shyok River route to reach the magnificent Pangong Lake. The journey will take you through rugged mountain terrain and small Ladakhi villages. Upon reaching Pangong Lake, witness its mesmerizing blue waters changing colors under the sunlight. The lake extends from India into Tibet and is one of the highest saltwater lakes in the world.</li>
                                    <li><span>Overnight</span>: Camps/Cottage in Pangong lake</li>
                                </ul>

                            </div>
                        </div>
                    </div>

                    <div class="accordion-item">
                        <h3 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#itineraryCollapse6" aria-expanded="false" aria-controls="itineraryCollapse6">
                            Day 06 : Pangong Lake to Hanle
                            </button>
                        </h3>
                        <div id="itineraryCollapse6" class="accordion-collapse collapse" data-bs-parent="#itineraryAccordion">
                            <div class="accordion-body">
                                <div class="row d-block d-lg-none">
                                    <div class="col-12 col-lg-6">
                                        <ItineraryIcons highestAltitude="14763 ft" distance="230 km" duration="8 hrs" lodging="Hotel/Camp" meal="BF/Dinner" />
                                    </div>

                                    <div class="col-12 col-lg-6 mt-3 mb-3 d-flex align-items-center justify-content-center">
                                        <ItineraryImage src="/img/tours/ladakh-srinagar-with-umling-la/ladakh-srinagar-with-umling-la-day6.jpg" alt="Day Six Itinerary Image Of The Ladakh Srinagar With Umling La Bike Tour" />
                                    </div>
                                </div>

                                {/* Desktop Screen */}
                                <div class="row d-none d-lg-block">
                                    <div class="col-12 col-lg-12">
                                        <ItineraryIcons highestAltitude="14763 ft" distance="230 km" duration="8 hrs" lodging="Hotel/Camp" meal="BF/Dinner" />
                                    </div>

                                    <div class="col-12 col-lg-12 mt-3 mb-3 d-flex align-items-center justify-content-center">
                                        <ItineraryImage size="desktop" src="/img/tours/ladakh-srinagar-with-umling-la/ladakh-srinagar-with-umling-la-day6.jpg" alt="Day Six Itinerary Image Of The Ladakh Srinagar With Umling La Bike Tour" />
                                    </div>
                                </div>

                                <ul class="itinerary">
                                    <li><span>Highlights</span>: Changthang Plateau, Remote Villages, Hanle Observatory</li>
                                    <li>Begin your journey towards Hanle, one of the most remote regions in Ladakh. The ride will take you across the barren Changthang Plateau, known for its vast landscapes and occasional wildlife sightings. Upon reaching Hanle, visit the Hanle Observatory, one of the world’s highest astronomical observatories. Hanle is a peaceful, off-the-beaten-path village with a serene atmosphere and clear night skies.</li>
                                    <li><span>Overnight</span>: Homestay in Hanle</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="accordion-item">
                        <h3 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#itineraryCollapse7" aria-expanded="false" aria-controls="itineraryCollapse7">
                            Day 07 : Hanle to Umling La Pass and Back to Hanle
                            </button>
                        </h3>
                        <div id="itineraryCollapse7" class="accordion-collapse collapse" data-bs-parent="#itineraryAccordion">
                            <div class="accordion-body">
                                <div class="row d-block d-lg-none">
                                    <div class="col-12 col-lg-6">
                                        <ItineraryIcons highestAltitude="19024 ft" distance="150 km" duration="6 hrs" lodging="Hotel/Camp" meal="BF/Dinner" />
                                    </div>

                                    <div class="col-12 col-lg-6 mt-3 mb-3 d-flex align-items-center justify-content-center">
                                        <ItineraryImage src="/img/tours/ladakh-srinagar-with-umling-la/ladakh-srinagar-with-umling-la-day7.jpg" alt="Day Seven Itinerary Image Of The Ladakh Srinagar With Umling La Bike Tour" />
                                    </div>
                                </div>

                                {/* Desktop Screen */}
                                <div class="row d-none d-lg-block">
                                    <div class="col-12 col-lg-12">
                                        <ItineraryIcons highestAltitude="19024 ft" distance="150 km" duration="6 hrs" lodging="Hotel/Camp" meal="BF/Dinner" />
                                    </div>

                                    <div class="col-12 col-lg-12 mt-3 mb-3 d-flex align-items-center justify-content-center">
                                        <ItineraryImage size="desktop" src="/img/tours/ladakh-srinagar-with-umling-la/ladakh-srinagar-with-umling-la-day7.jpg" alt="Day Seven Itinerary Image Of The Ladakh Srinagar With Umling La Bike Tour" />
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
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#itineraryCollapse8" aria-expanded="false" aria-controls="itineraryCollapse8">
                            Day 08 : Hanle to Leh via Puga Valley
                            </button>
                        </h3>
                        <div id="itineraryCollapse8" class="accordion-collapse collapse" data-bs-parent="#itineraryAccordion">
                            <div class="accordion-body">
                                <div class="row d-block d-lg-none">
                                    <div class="col-12 col-lg-6">
                                        <ItineraryIcons highestAltitude="14763 ft" distance="254 km" duration="8 hrs" lodging="Hotel" meal="BF/Dinner" />
                                    </div>

                                    <div class="col-12 col-lg-6 mt-3 mb-3 d-flex align-items-center justify-content-center">
                                        <ItineraryImage src="/img/tours/ladakh-srinagar-with-umling-la/ladakh-srinagar-with-umling-la-day8.jpg" alt="Day Eight Itinerary Image Of The Ladakh Srinagar With Umling La Bike Tour" />
                                    </div>
                                </div>

                                {/* Desktop Screen */}
                                <div class="row d-none d-lg-block">
                                    <div class="col-12 col-lg-12">
                                        <ItineraryIcons highestAltitude="14763 ft" distance="254 km" duration="8 hrs" lodging="Hotel" meal="BF/Dinner" />
                                    </div>

                                    <div class="col-12 col-lg-12 mt-3 mb-3 d-flex align-items-center justify-content-center">
                                        <ItineraryImage size="desktop" src="/img/tours/ladakh-srinagar-with-umling-la/ladakh-srinagar-with-umling-la-day8.jpg" alt="Day Eight Itinerary Image Of The Ladakh Srinagar With Umling La Bike Tour" />
                                    </div>
                                </div>

                                <ul class="itinerary">
                                    <li><span>Highlights</span>: Puga Valley, Hot Springs, Thiksey Monastery</li>
                                    <li>Ride back to Leh through the beautiful and isolated Puga Valley, known for its geothermal springs and stunning landscapes. En route, visit Thiksey Monastery, one of the most picturesque monasteries in Ladakh. The monastery, perched on a hilltop, resembles the Potala Palace in Lhasa. Continue to Leh, where you can spend the evening at leisure.</li>
                                    <li><span>Overnight</span>: Hotel in Leh</li>
                                </ul>

                            </div>
                        </div>
                    </div>

                    <div class="accordion-item">
                        <h3 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#itineraryCollapse9" aria-expanded="false" aria-controls="itineraryCollapse9">
                            Day 09 : Leh to Kargil via Lamayuru, Magnetic Hill, Sangam
                            </button>
                        </h3>
                        <div id="itineraryCollapse9" class="accordion-collapse collapse" data-bs-parent="#itineraryAccordion">
                            <div class="accordion-body">
                                <div class="row d-block d-lg-none">
                                    <div class="col-12 col-lg-6">
                                        <ItineraryIcons highestAltitude="12139 ft" distance="210 km" duration="6 hrs" lodging="Hotel" meal="BF/Dinner" />
                                    </div>

                                    <div class="col-12 col-lg-6 mt-3 mb-3 d-flex align-items-center justify-content-center">
                                        <ItineraryImage src="/img/tours/ladakh-srinagar-with-umling-la/ladakh-srinagar-with-umling-la-day9.jpg" alt="Day Nine Itinerary Image Of The Ladakh Srinagar With Umling La Bike Tour" />
                                    </div>
                                </div>

                                {/* Desktop Screen */}
                                <div class="row d-none d-lg-block">
                                    <div class="col-12 col-lg-12">
                                        <ItineraryIcons highestAltitude="12139 ft" distance="210 km" duration="6 hrs" lodging="Hotel" meal="BF/Dinner" />
                                    </div>

                                    <div class="col-12 col-lg-12 mt-3 mb-3 d-flex align-items-center justify-content-center">
                                        <ItineraryImage size="desktop" src="/img/tours/ladakh-srinagar-with-umling-la/ladakh-srinagar-with-umling-la-day9.jpg" alt="Day Nine Itinerary Image Of The Ladakh Srinagar With Umling La Bike Tour" />
                                    </div>
                                </div>

                                <ul class="itinerary">
                                    <li><span>Highlights</span>: Magnetic Hill, Gurudwara Pathar Sahib, Lamayuru Monastery, Kargil War Memorial</li>
                                    <li>Today, ride to Kargil, a historically significant town in Ladakh. En route, stop at Magnetic Hill and Gurudwara Pathar Sahib before visiting the Lamayuru Monastery, one of the oldest and most beautiful monasteries in Ladakh. Continue to the Kargil War Memorial, a tribute to the soldiers who fought during the Kargil War. Reach Kargil by evening.</li>
                                    <li><span>Overnight</span>: Hotel in Kargil</li>
                                </ul>

                            </div>
                        </div>
                    </div>

                    <div class="accordion-item">
                        <h3 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#itineraryCollapse10" aria-expanded="false" aria-controls="itineraryCollapse10">
                            Day 10 : Kargil to Srinagar via Zoji La Pass
                            </button>
                        </h3>
                        <div id="itineraryCollapse10" class="accordion-collapse collapse" data-bs-parent="#itineraryAccordion">
                            <div class="accordion-body">
                                <div class="row d-block d-lg-none">
                                    <div class="col-12 col-lg-6">
                                        <ItineraryIcons highestAltitude="11575 ft" distance="202 km" duration="7 hrs" lodging="Hotel" meal="BF/Dinner" />
                                    </div>

                                    <div class="col-12 col-lg-6 mt-3 mb-3 d-flex align-items-center justify-content-center">
                                        <ItineraryImage src="/img/tours/ladakh-srinagar-with-umling-la/ladakh-srinagar-with-umling-la-day10.jpg" alt="Day Ten Itinerary Image Of The Ladakh Srinagar With Umling La Bike Tour" />
                                    </div>
                                </div>

                                {/* Desktop Screen */}
                                <div class="row d-none d-lg-block">
                                    <div class="col-12 col-lg-12">
                                        <ItineraryIcons highestAltitude="11575 ft" distance="202 km" duration="7 hrs" lodging="Hotel" meal="BF/Dinner" />
                                    </div>

                                    <div class="col-12 col-lg-12 mt-3 mb-3 d-flex align-items-center justify-content-center">
                                        <ItineraryImage size="desktop" src="/img/tours/ladakh-srinagar-with-umling-la/ladakh-srinagar-with-umling-la-day10.jpg" alt="Day Ten Itinerary Image Of The Ladakh Srinagar With Umling La Bike Tour" />
                                    </div>
                                </div>

                                <ul class="itinerary">
                                    <li><span>Highlights</span>: Zoji La Pass, Drass, Sonamarg</li>
                                    <li>Begin the ride to Srinagar, crossing the challenging Zoji La Pass, which offers breathtaking views of the Himalayas. Stop at Drass, the second coldest inhabited place in the world. After descending from Zoji La, pass through the lush green meadows of Sonamarg before reaching the beautiful city of Srinagar.</li>
                                    <li><span>Overnight</span>: Houseboat/Hotel in Srinagar</li>
                                </ul>

                            </div>
                        </div>
                    </div>

                    <div class="accordion-item">
                        <h3 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#itineraryCollapse11" aria-expanded="false" aria-controls="itineraryCollapse11">
                            Day 11 :Departure from Srinagar
                            </button>
                        </h3>
                        <div id="itineraryCollapse11" class="accordion-collapse collapse" data-bs-parent="#itineraryAccordion">
                            <div class="accordion-body">
                                <p>
                                    After breakfast, bid farewell to the mesmerizing landscapes of Ladakh and Kashmir. Transfer to Srinagar Airport for your onward journey, carrying unforgettable memories of your motorbiking adventure across the Himalayas.
                                </p>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
});