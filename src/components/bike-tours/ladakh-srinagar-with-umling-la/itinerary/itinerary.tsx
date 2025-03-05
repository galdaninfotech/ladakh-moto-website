import { component$, useStylesScoped$ } from '@builder.io/qwik';
import ItineraryImage from "~/components/itinerary-image";
import styles from './itinerary.css?inline';
import ItineraryIcons from '~/components/itinerary-icons/itinerary-icons';
import { handleAccordionScrollIntoView } from '~/utils/handleAccordionScrollIntoView';

export default component$(() => {
    useStylesScoped$(styles);

    return (
        <div id="itinerary">
            <div class="sub-headings d-flex justify-content-between align-items-center">
                <h2>Itinerary</h2>
            </div>
            <div class="itinerary-accordian">
                <div class="accordion" id="itineraryAccordion">

                    <div class="accordion-item">
                        <h3 class="accordion-header">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#itineraryCollapse1" aria-expanded="true" aria-controls="itineraryCollapse1" onClick$={handleAccordionScrollIntoView}>
                            Day 01 : Arrival in Leh
                            </button>
                        </h3>
                        <div id="itineraryCollapse1" class="accordion-collapse collapse show" data-bs-parent="#itineraryAccordion">
                            <div class="accordion-body">
                                <div class="row d-block d-lg-none">
                                    <div class="col-12 col-lg-6">
                                        <ItineraryIcons highestAltitude="11000 ft" distance="20 km" duration="2-3 hrs" lodging="Hotel" meal="BF/Dinner" />
                                    </div>

                                    <div class="col-12 col-lg-6 mt-3 mb-3 d-flex align-items-center justify-content-center">
                                        <ItineraryImage src="/img/bike-tours/ladakh-srinagar-with-umling-la/ladakh-srinagar-with-umling-la-day1.webp" alt="Day One Itinerary Image Of The Ladakh Srinagar With Umling La Bike Tour" />
                                    </div>
                                </div>

                                {/* Desktop Screen */}
                                <div class="row d-none d-lg-block">
                                    <div class="col-12 col-lg-12">
                                        <ItineraryIcons highestAltitude="11000 ft" distance="20 km" duration="2-3 hrs" lodging="Hotel" meal="BF/Dinner" />
                                    </div>

                                    <div class="col-12 col-lg-12 mt-3 mb-3 d-flex align-items-center justify-content-center">
                                        <ItineraryImage size="desktop" src="/img/bike-tours/ladakh-srinagar-with-umling-la/ladakh-srinagar-with-umling-la-day1.webp" alt="Day One Itinerary Image Of The Ladakh Srinagar With Umling La Bike Tour" />
                                    </div>
                                </div>

                                <ul class="itinerary">
                                    <li><span>Activity</span>: Bike Checkup, acclimatization and rest</li>
                                    <li><span>Highlights</span>: Acclimatization and evening explore Leh Market</li>
                                    <li>For your convenience, we recommend that clients arrange their taxi to reach Leh hotel. Once you arrive at Leh, please get to the designated hotel, where our team will be ready to welcome you. We can provide guidance on trusted taxi services if needed, ensuring a smooth and hassle-free journey to the hotel. Spend the day acclimatizing to Leh's high altitude. Take a light walk around Leh Market, or, if you feel comfortable, visit Leh Palace for panoramic town views.</li>
                                    <li><span>Overnight</span>: Hotel in Leh</li>
                                </ul>

                            </div>
                        </div>
                    </div>

                    <div class="accordion-item">
                        <h3 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#itineraryCollapse2" aria-expanded="false" aria-controls="itineraryCollapse2" onClick$={handleAccordionScrollIntoView}>
                            Day 02 : Local Sightseeing in Leh
                            </button>
                        </h3>
                        <div id="itineraryCollapse2" class="accordion-collapse collapse" data-bs-parent="#itineraryAccordion">
                            <div class="accordion-body">
                                <div class="row d-block d-lg-none">
                                    <div class="col-12 col-lg-6">
                                        <ItineraryIcons highestAltitude="11000 ft" distance="60 km" duration="4-5 hrs" lodging="Hotel" meal="BF/Dinner" />
                                    </div>

                                    <div class="col-12 col-lg-6 mt-3 mb-3 d-flex align-items-center justify-content-center">
                                        <ItineraryImage src="/img/bike-tours/ladakh-srinagar-with-umling-la/ladakh-srinagar-with-umling-la-day2.webp" alt="Day Two Itinerary Image Of The Ladakh Srinagar With Umling La Bike Tour" />
                                    </div>
                                </div>

                                {/* Desktop Screen */}
                                <div class="row d-none d-lg-block">
                                    <div class="col-12 col-lg-12">
                                        <ItineraryIcons highestAltitude="11000 ft" distance="60 km" duration="4-5 hrs" lodging="Hotel" meal="BF/Dinner" />
                                    </div>

                                    <div class="col-12 col-lg-12 mt-3 mb-3 d-flex align-items-center justify-content-center">
                                        <ItineraryImage size="desktop" src="/img/bike-tours/ladakh-srinagar-with-umling-la/ladakh-srinagar-with-umling-la-day2.webp" alt="Day Two Itinerary Image Of The Ladakh Srinagar With Umling La Bike Tour" />
                                    </div>
                                </div>

                                <ul class="itinerary">
                                    <li><span>Highlights</span>: Shanti Stupa, Leh Palace, Magnet Hill, Hall of Fame, Gurudwara Pathar Sahib</li>
                                    <li>After your breakfast today, drive to visit the Magnetic Hill which is also enthralling as it generates an optical illusion and on the way visit Gurudwara Pathar Sahib which is a serene Sikh shrine. Later, visit out the Shanti Stupa to take stunning views of the Leh town and then venture out to the UNESCO recognized Leh Palace. End off your day with a trip to the Hall of Fame which is a memorial for the Indian Army and recollects the history with its specific gallery.</li>
                                    <li><span>Overnight</span>: Hotel in Leh</li>
                                </ul>

                            </div>
                        </div>
                    </div>

                    <div class="accordion-item">
                        <h3 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#itineraryCollapse3" aria-expanded="false" aria-controls="itineraryCollapse3" onClick$={handleAccordionScrollIntoView}>
                            Day 03 : Leh to Nubra Valley via Khardung La
                            </button>
                        </h3>
                        <div id="itineraryCollapse3" class="accordion-collapse collapse" data-bs-parent="#itineraryAccordion">
                            <div class="accordion-body">
                                <div class="row d-block d-lg-none">
                                    <div class="col-12 col-lg-6">
                                        <ItineraryIcons highestAltitude="18300 ft" distance="140 km" duration="4-5 hrs" lodging="Hotel/Camp" meal="BF/Dinner" />
                                    </div>

                                    <div class="col-12 col-lg-6 mt-3 mb-3 d-flex align-items-center justify-content-center">
                                        <ItineraryImage src="/img/bike-tours/ladakh-srinagar-with-umling-la/ladakh-srinagar-with-umling-la-day3.webp" alt="Day Three Itinerary Image Of The Ladakh Srinagar With Umling La Bike Tour" />
                                    </div>
                                </div>

                                {/* Desktop Screen */}
                                <div class="row d-none d-lg-block">
                                    <div class="col-12 col-lg-12">
                                        <ItineraryIcons highestAltitude="18300 ft" distance="140 km" duration="4-5 hrs" lodging="Hotel/Camp" meal="BF/Dinner" />
                                    </div>

                                    <div class="col-12 col-lg-12 mt-3 mb-3 d-flex align-items-center justify-content-center">
                                        <ItineraryImage size="desktop" src="/img/bike-tours/ladakh-srinagar-with-umling-la/ladakh-srinagar-with-umling-la-day3.webp" alt="Day Three Itinerary Image Of The Ladakh Srinagar With Umling La Bike Tour" />
                                    </div>
                                </div>

                                <ul class="itinerary">
                                    <li><span>Highlights</span>: Khardung La Pass, 18380 feet height, Diskit Monastery, and Hunder Sand Dunes</li>
                                    <li>This ride will take you to the highest point on the route, Khardung La. After crossing the pass, you will reach the beautiful valley of Nubra. You can visit the Diskit Monastery, which has a large Maitreya Buddha statue. After that, you can go to the Hunder Sand Dunes, where you could ride camels that have two humps, known as Bactrian camels.</li>
                                    <li><span>Overnight</span>: Hotel/Camp in Hunder, Nubra Valley</li>
                                </ul>

                            </div>
                        </div>
                    </div>

                    <div class="accordion-item">
                        <h3 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#itineraryCollapse4" aria-expanded="false" aria-controls="itineraryCollapse4" onClick$={handleAccordionScrollIntoView}>
                            Day 04 : Hunder to Turtuk and back to Hunder
                            </button>
                        </h3>
                        <div id="itineraryCollapse4" class="accordion-collapse collapse" data-bs-parent="#itineraryAccordion">
                            <div class="accordion-body">
                                <div class="row d-block d-lg-none">
                                    <div class="col-12 col-lg-6">
                                        <ItineraryIcons highestAltitude="10000 ft" distance="170 km" duration="4-5 hrs" lodging="Hotel/Camp" meal="BF/Dinner" />
                                    </div>

                                    <div class="col-12 col-lg-6 mt-3 mb-3 d-flex align-items-center justify-content-center">
                                        <ItineraryImage src="/img/bike-tours/ladakh-srinagar-with-umling-la/ladakh-srinagar-with-umling-la-day4.webp" alt="Day Four Itinerary Image Of The Ladakh Srinagar With Umling La Bike Tour" />
                                    </div>
                                </div>

                                {/* Desktop Screen */}
                                <div class="row d-none d-lg-block">
                                    <div class="col-12 col-lg-12">
                                        <ItineraryIcons highestAltitude="10000 ft" distance="170 km" duration="4-5 hrs" lodging="Hotel/Camp" meal="BF/Dinner" />
                                    </div>

                                    <div class="col-12 col-lg-12 mt-3 mb-3 d-flex align-items-center justify-content-center">
                                        <ItineraryImage size="desktop" src="/img/bike-tours/ladakh-srinagar-with-umling-la/ladakh-srinagar-with-umling-la-day4.webp" alt="Day Four Itinerary Image Of The Ladakh Srinagar With Umling La Bike Tour" />
                                    </div>
                                </div>

                                <ul class="itinerary">
                                    <li><span>Highlights</span>: Turtuk Village, Indo-Pak Border, Balti Culture</li>
                                    <li>Today, we will go on an excursion to Turtuk, a remote and isolated village located close to the protracted Indo – Pak Border, which is culturally diverse. Turtuk portrays the vividness of esteemed culture of balti, which is quite different from rest of Ladakh. This part of the ride lets you explore the village, interact with locals, and savor the views of the Apricot orchid’s farms before heading back to Hunder for an overnight stay. </li>
                                    <li><span>Overnight</span>: Hotel/Camp Hunder, Nubra Valley</li>
                                </ul>

                            </div>
                        </div>
                    </div>

                    <div class="accordion-item">
                        <h3 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#itineraryCollapse5" aria-expanded="false" aria-controls="itineraryCollapse5" onClick$={handleAccordionScrollIntoView}>
                            Day 05 : Nubra Valley to Pangong Lake via Shyok
                            </button>
                        </h3>
                        <div id="itineraryCollapse5" class="accordion-collapse collapse" data-bs-parent="#itineraryAccordion">
                            <div class="accordion-body">
                                <div class="row d-block d-lg-none">
                                    <div class="col-12 col-lg-6">
                                        <ItineraryIcons highestAltitude="14763 ft" distance="160 km" duration="5-6 hrs" lodging="Cottges" meal="BF/Dinner" />
                                    </div>

                                    <div class="col-12 col-lg-6 mt-3 mb-3 d-flex align-items-center justify-content-center">
                                        <ItineraryImage src="/img/bike-tours/ladakh-srinagar-with-umling-la/ladakh-srinagar-with-umling-la-day5.webp" alt="Day Five Itinerary Image Of The Ladakh Srinagar With Umling La Bike Tour" />
                                    </div>
                                </div>

                                {/* Desktop Screen */}
                                <div class="row d-none d-lg-block">
                                    <div class="col-12 col-lg-12">
                                        <ItineraryIcons highestAltitude="14763 ft" distance="160 km" duration="5-6 hrs" lodging="Cottges" meal="BF/Dinner" />
                                    </div>

                                    <div class="col-12 col-lg-12 mt-3 mb-3 d-flex align-items-center justify-content-center">
                                        <ItineraryImage size="desktop" src="/img/bike-tours/ladakh-srinagar-with-umling-la/ladakh-srinagar-with-umling-la-day5.webp" alt="Day Five Itinerary Image Of The Ladakh Srinagar With Umling La Bike Tour" />
                                    </div>
                                </div>

                                <ul class="itinerary">
                                    <li><span>Highlights</span>: Shyok River, Pangong Lake</li>
                                    <li>Prepare for a spectacular journey that will take you along the breathtaking and exciting route of the Shyok river to reach the exquisite Pangong Lake. The trip will take you across rough mountain landscapes and tiny Periodically rural settlements of the Ladakhi people. Before long, once you have reached the lake, you will see its numerous blue waters gets refracted and scattered by sunlight. The lake is spread across of India and tibet and ranks among the highest salt water lakes of the world.</li>
                                    <li><span>Overnight</span>: Cottages at Pangong Lake</li>
                                </ul>

                            </div>
                        </div>
                    </div>

                    <div class="accordion-item">
                        <h3 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#itineraryCollapse6" aria-expanded="false" aria-controls="itineraryCollapse6" onClick$={handleAccordionScrollIntoView}>
                            Day 06 : Pangong Lake to Hanle
                            </button>
                        </h3>
                        <div id="itineraryCollapse6" class="accordion-collapse collapse" data-bs-parent="#itineraryAccordion">
                            <div class="accordion-body">
                                <div class="row d-block d-lg-none">
                                    <div class="col-12 col-lg-6">
                                        <ItineraryIcons highestAltitude="14763 ft" distance="230 km" duration="6-7 hrs" lodging="GH/Camp" meal="BF/Dinner" />
                                    </div>

                                    <div class="col-12 col-lg-6 mt-3 mb-3 d-flex align-items-center justify-content-center">
                                        <ItineraryImage src="/img/bike-tours/ladakh-srinagar-with-umling-la/ladakh-srinagar-with-umling-la-day6.webp" alt="Day Six Itinerary Image Of The Ladakh Srinagar With Umling La Bike Tour" />
                                    </div>
                                </div>

                                {/* Desktop Screen */}
                                <div class="row d-none d-lg-block">
                                    <div class="col-12 col-lg-12">
                                        <ItineraryIcons highestAltitude="14763 ft" distance="230 km" duration="6-7 hrs" lodging="Camp" meal="BF/Dinner" />
                                    </div>

                                    <div class="col-12 col-lg-12 mt-3 mb-3 d-flex align-items-center justify-content-center">
                                        <ItineraryImage size="desktop" src="/img/bike-tours/ladakh-srinagar-with-umling-la/ladakh-srinagar-with-umling-la-day6.webp" alt="Day Six Itinerary Image Of The Ladakh Srinagar With Umling La Bike Tour" />
                                    </div>
                                </div>

                                <ul class="itinerary">
                                    <li><span>Highlights</span>:Remote Landscapes, Changthang Plateau, Hanle Observatory</li>
                                    <li>Start your trip to Hanle, one of the most isolated places in Ladakh. You will ride through the arid Changthang Plateau which is known for the expansive scenery and some wildlife. Arriving at Hanle, the ones who are fond of astronomy may visit the Hanle Telescope, among the highest telescopes in the world. To sum up, Hanle is a small undisturbed quiet village with clear dark nights ideal for stargazing and away from the tourist crowd.</li>
                                    <li><span>Overnight</span>: Camp/Homestay in Hanle</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="accordion-item">
                        <h3 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#itineraryCollapse7" aria-expanded="false" aria-controls="itineraryCollapse7" onClick$={handleAccordionScrollIntoView}>
                            Day 07 : Hanle to Umling La Pass and Back to Hanle
                            </button>
                        </h3>
                        <div id="itineraryCollapse7" class="accordion-collapse collapse" data-bs-parent="#itineraryAccordion">
                            <div class="accordion-body">
                                <div class="row d-block d-lg-none">
                                    <div class="col-12 col-lg-6">
                                        <ItineraryIcons highestAltitude="19024 ft" distance="150 km" duration="6-7 hrs" lodging="GH/Camp" meal="BF/Dinner" />
                                    </div>

                                    <div class="col-12 col-lg-6 mt-3 mb-3 d-flex align-items-center justify-content-center">
                                        <ItineraryImage src="/img/bike-tours/ladakh-srinagar-with-umling-la/ladakh-srinagar-with-umling-la-day7.webp" alt="Day Seven Itinerary Image Of The Ladakh Srinagar With Umling La Bike Tour" />
                                    </div>
                                </div>

                                {/* Desktop Screen */}
                                <div class="row d-none d-lg-block">
                                    <div class="col-12 col-lg-12">
                                        <ItineraryIcons highestAltitude="19024 ft" distance="150 km" duration="6-7 hrs" lodging="GH/Camp" meal="BF/Dinner" />
                                    </div>

                                    <div class="col-12 col-lg-12 mt-3 mb-3 d-flex align-items-center justify-content-center">
                                        <ItineraryImage size="desktop" src="/img/bike-tours/ladakh-srinagar-with-umling-la/ladakh-srinagar-with-umling-la-day7.webp" alt="Day Seven Itinerary Image Of The Ladakh Srinagar With Umling La Bike Tour" />
                                    </div>
                                </div>

                                <ul class="itinerary">
                                    <li><span>Highlights</span>: Umling La Pass (World’s Highest Motorable Road)</li>
                                    <li>Today is among the most difficult and exciting days of this tour. Ride up to Umling La Pass which has the distinction of being the highest motor able road in the whole world which stands at an astounding 19,024 feet. The ascent towards the Umling La pass is not easy with high altitudes and harsh weather conditions but once on top, you can see some great views. After reaching the top, ride back to Hanle and enjoy your evening.</li>
                                    <li><span>Overnight</span>: Camp/Homestay in Hanle</li>
                                </ul>

                            </div>
                        </div>
                    </div>

                    <div class="accordion-item">
                        <h3 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#itineraryCollapse8" aria-expanded="false" aria-controls="itineraryCollapse8" onClick$={handleAccordionScrollIntoView}>
                            Day 08 : Hanle to Leh via Puga Valley
                            </button>
                        </h3>
                        <div id="itineraryCollapse8" class="accordion-collapse collapse" data-bs-parent="#itineraryAccordion">
                            <div class="accordion-body">
                                <div class="row d-block d-lg-none">
                                    <div class="col-12 col-lg-6">
                                        <ItineraryIcons highestAltitude="14763 ft" distance="254 km" duration="5-6 hrs" lodging="Hotel" meal="BF/Dinner" />
                                    </div>

                                    <div class="col-12 col-lg-6 mt-3 mb-3 d-flex align-items-center justify-content-center">
                                        <ItineraryImage src="/img/bike-tours/ladakh-srinagar-with-umling-la/ladakh-srinagar-with-umling-la-day8.webp" alt="Day Eight Itinerary Image Of The Ladakh Srinagar With Umling La Bike Tour" />
                                    </div>
                                </div>

                                {/* Desktop Screen */}
                                <div class="row d-none d-lg-block">
                                    <div class="col-12 col-lg-12">
                                        <ItineraryIcons highestAltitude="14763 ft" distance="254 km" duration="5-6 hrs" lodging="Hotel" meal="BF/Dinner" />
                                    </div>

                                    <div class="col-12 col-lg-12 mt-3 mb-3 d-flex align-items-center justify-content-center">
                                        <ItineraryImage size="desktop" src="/img/bike-tours/ladakh-srinagar-with-umling-la/ladakh-srinagar-with-umling-la-day8.webp" alt="Day Eight Itinerary Image Of The Ladakh Srinagar With Umling La Bike Tour" />
                                    </div>
                                </div>

                                <ul class="itinerary">
                                    <li><span>Highlights</span>: Thiksey Monastery, Puga Valley Hot Springs</li>
                                    <li>The return journey into the Leh is through Puga Valley, which is beautiful and secluded; this valley has many hot springs and mesmerizing scenery. Visit Thiksey monastery along the way, which is one of the most photogenic in Ladakh. The monastery built on a mountain top look and feel like the Potala Palace of Lhasa. Then afterwards, further proceed down to Leh, where you will have time free to spend the evenings.</li>
                                    <li><span>Overnight</span>: Hotel in Leh</li>
                                </ul>

                            </div>
                        </div>
                    </div>

                    <div class="accordion-item">
                        <h3 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#itineraryCollapse9" aria-expanded="false" aria-controls="itineraryCollapse9" onClick$={handleAccordionScrollIntoView}>
                            Day 09 : Leh to Kargil via Lamayuru, Magnetic Hill, Sangam
                            </button>
                        </h3>
                        <div id="itineraryCollapse9" class="accordion-collapse collapse" data-bs-parent="#itineraryAccordion">
                            <div class="accordion-body">
                                <div class="row d-block d-lg-none">
                                    <div class="col-12 col-lg-6">
                                        <ItineraryIcons highestAltitude="12139 ft" distance="210 km" duration="5-6 hrs" lodging="Hotel" meal="BF/Dinner" />
                                    </div>

                                    <div class="col-12 col-lg-6 mt-3 mb-3 d-flex align-items-center justify-content-center">
                                        <ItineraryImage src="/img/bike-tours/ladakh-srinagar-with-umling-la/ladakh-srinagar-with-umling-la-day9.webp" alt="Day Nine Itinerary Image Of The Ladakh Srinagar With Umling La Bike Tour" />
                                    </div>
                                </div>

                                {/* Desktop Screen */}
                                <div class="row d-none d-lg-block">
                                    <div class="col-12 col-lg-12">
                                        <ItineraryIcons highestAltitude="12139 ft" distance="210 km" duration="5-6 hrs" lodging="Hotel" meal="BF/Dinner" />
                                    </div>

                                    <div class="col-12 col-lg-12 mt-3 mb-3 d-flex align-items-center justify-content-center">
                                        <ItineraryImage size="desktop" src="/img/bike-tours/ladakh-srinagar-with-umling-la/ladakh-srinagar-with-umling-la-day9.webp" alt="Day Nine Itinerary Image Of The Ladakh Srinagar With Umling La Bike Tour" />
                                    </div>
                                </div>

                                <ul class="itinerary">
                                    <li><span>Highlights</span>: Magnetic Hill, Gurudwara Pathar Sahib, Lamayuru Monastery, Kargil War Memorial</li>
                                    <li>Today ride towards Kargil, a town of great antiquity in Ladakh. On the way, visit the Magnetic Hill and Gurudwara Pathar Sahib and then head on to visit Lamayuru Gompa, which is regarded as one of the oldest and most exquisite monasteries in Ladakh. From Lamayuru, move ahead to Kargil War Memorial, a homage paying place for the soldiers who died during Kargil War. Be in Kargil by sunset.</li>
                                    <li><span>Overnight</span>: Hotel in Kargil</li>
                                </ul>

                            </div>
                        </div>
                    </div>

                    <div class="accordion-item">
                        <h3 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#itineraryCollapse10" aria-expanded="false" aria-controls="itineraryCollapse10" onClick$={handleAccordionScrollIntoView}>
                            Day 10 : Kargil to Srinagar via Zoji La Pass
                            </button>
                        </h3>
                        <div id="itineraryCollapse10" class="accordion-collapse collapse" data-bs-parent="#itineraryAccordion">
                            <div class="accordion-body">
                                <div class="row d-block d-lg-none">
                                    <div class="col-12 col-lg-6">
                                        <ItineraryIcons highestAltitude="11575 ft" distance="202 km" duration="5-6 hrs" lodging="Hotel" meal="BF/Dinner" />
                                    </div>

                                    <div class="col-12 col-lg-6 mt-3 mb-3 d-flex align-items-center justify-content-center">
                                        <ItineraryImage src="/img/bike-tours/ladakh-srinagar-with-umling-la/ladakh-srinagar-with-umling-la-day10.webp" alt="Day Ten Itinerary Image Of The Ladakh Srinagar With Umling La Bike Tour" />
                                    </div>
                                </div>

                                {/* Desktop Screen */}
                                <div class="row d-none d-lg-block">
                                    <div class="col-12 col-lg-12">
                                        <ItineraryIcons highestAltitude="11575 ft" distance="202 km" duration="5-6 hrs" lodging="Hotel" meal="BF/Dinner" />
                                    </div>

                                    <div class="col-12 col-lg-12 mt-3 mb-3 d-flex align-items-center justify-content-center">
                                        <ItineraryImage size="desktop" src="/img/bike-tours/ladakh-srinagar-with-umling-la/ladakh-srinagar-with-umling-la-day10.webp" alt="Day Ten Itinerary Image Of The Ladakh Srinagar With Umling La Bike Tour" />
                                    </div>
                                </div>

                                <ul class="itinerary">
                                    <li><span>Highlights</span>: Zoji La Pass (11,575 ft), Drass, Sonamarg</li>
                                    <li>We were going to start off the ride to Srinagar through the arduous and picturesque Zoji La Pass that has breathtaking views of the Himalayan mountain range. Get on the bikes and go to Drass, which is the second coldest place on earth. After a descent of the ZOJI LA, one will cross over the vast green plains of SONAMARG after which the alluring city of Srinagar is finally reached. Look forward to enjoying a farewell dinner whilst reminiscing all the good times you had in your tour.</li>
                                    <li><span>Overnight</span>: Hotel in Srinagar</li>
                                </ul>

                            </div>
                        </div>
                    </div>

                    <div class="accordion-item">
                        <h3 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#itineraryCollapse11" aria-expanded="false" aria-controls="itineraryCollapse11" onClick$={handleAccordionScrollIntoView}>
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