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
                                        <ItineraryIcons highestAltitude="6725 ft" distance="20 km" duration="3-4 hrs" lodging="Hotel" meal="BF/Dinner" />
                                    </div>

                                    <div class="col-12 col-lg-6 mt-3 mb-3 d-flex align-items-center justify-content-center">
                                        <ItineraryImage src="/img/bike-tours/manali-leh-srinagar/manali-leh-srinagar-day1.jpg" alt="Day One Itinerary Image Of The Manali To Leh Vai Umling La Bike Tour" />
                                    </div>
                                </div>

                                {/* Desktop Screen */}
                                <div class="row d-none d-lg-block">
                                    <div class="col-12 col-lg-12">
                                        <ItineraryIcons highestAltitude="6725 ft" distance="20 km" duration="3-4 hrs" lodging="Hotel" meal="BF/Dinner" />
                                    </div>

                                    <div class="col-12 col-lg-12 mt-3 mb-3 d-flex align-items-center justify-content-center">
                                        <ItineraryImage size="desktop" src="/img/bike-tours/manali-leh-srinagar/manali-leh-srinagar-day1.jpg" alt="Day One Itinerary Image Of The Manali To Leh Vai Umling La Bike Tour" />
                                    </div>
                                </div>

                                <ul class="itinerary">
                                    <li><span>Activity</span>: Bike check-up, Acclimatization and Local Sightseeing</li>
                                    <li><span>Highlights</span>: Mall Road, Hadimba Temple, Vashisht Hot Springs</li>
                                    <li>Travel to Manali and take a day for the body to get used to the changes in altitude. After checking in your hotel, you will be escorted to your machines where you will receive safety instructions. In the afternoon, you are free to visit a few of the local sites such as Mall Road, the Hadimba Temple, and the Vashisht Hot Springs.</li>
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
                                        <ItineraryIcons highestAltitude="16575 ft" distance="223 km" duration="4-5 hrs" lodging="Camp" meal="BF/Dinner" />
                                    </div>

                                    <div class="col-12 col-lg-6 mt-3 mb-3 d-flex align-items-center justify-content-center">
                                        <ItineraryImage src="/img/bike-tours/manali-leh-srinagar/manali-leh-srinagar-day2.jpg" alt="Day Two Itinerary Image Of The Manali To Leh Vai Umling La Bike Tour" />
                                    </div>
                                </div>

                                {/* Desktop Screen */}
                                <div class="row d-none d-lg-block">
                                    <div class="col-12 col-lg-12">
                                        <ItineraryIcons highestAltitude="16575 ft" distance="223 km" duration="4-5 hrs" lodging="Camp" meal="BF/Dinner" />
                                    </div>

                                    <div class="col-12 col-lg-12 mt-3 mb-3 d-flex align-items-center justify-content-center">
                                        <ItineraryImage size="desktop" src="/img/bike-tours/manali-leh-srinagar/manali-leh-srinagar-day2.jpg" alt="Day Two Itinerary Image Of The Manali To Leh Vai Umling La Bike Tour" />
                                    </div>
                                </div>

                                <ul class="itinerary">
                                    <li><span>Highlights</span>: Baralacha pass, Atal tunnel and Keylong</li>
                                    <li>The adventure begins with a ride through the famous Atal tunnel, offering stunning views of the lush Kullu Valley. After crossing the tunnel, you'll descend into the Lahaul Valley, passing Keylong, and continue the ascent to the majestic Baralacha La Pass. The ride is thrilling, with changing landscapes from green valleys to barren high-altitude deserts.</li>
                                    <li><span>Overnight</span>: Camp in Serchu</li>
                                </ul>

                            </div>
                        </div>
                    </div>

                    <div class="accordion-item">
                        <h3 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#itineraryCollapse3" aria-expanded="false" aria-controls="itineraryCollapse3">
                            Day 03 : Sarchu to Leh 
                            </button>
                        </h3>
                        <div id="itineraryCollapse3" class="accordion-collapse collapse" data-bs-parent="#itineraryAccordion">
                            <div class="accordion-body">
                                <div class="row d-block d-lg-none">
                                    <div class="col-12 col-lg-6">
                                        <ItineraryIcons highestAltitude="17582 ft" distance="137 km" duration="5-6 hrs" lodging="Camp" meal="BF/Dinner" />
                                    </div>

                                    <div class="col-12 col-lg-6 mt-3 mb-3 d-flex align-items-center justify-content-center">
                                        <ItineraryImage src="/img/bike-tours/manali-leh-srinagar/manali-leh-srinagar-day3.jpg" alt="Day Three Itinerary Image Of The Manali To Leh Vai Umling La Bike Tour" />
                                    </div>
                                </div>

                                {/* Desktop Screen */}
                                <div class="row d-none d-lg-block">
                                    <div class="col-12 col-lg-12">
                                        <ItineraryIcons highestAltitude="17582 ft" distance="252 km" duration="5-6 hrs" lodging="Camp" meal="BF/Dinner" />
                                    </div>

                                    <div class="col-12 col-lg-12 mt-3 mb-3 d-flex align-items-center justify-content-center">
                                        <ItineraryImage size="desktop" src="/img/bike-tours/manali-leh-srinagar/manali-leh-srinagar-day3.jpg" alt="Day Three Itinerary Image Of The Manali To Leh Vai Umling La Bike Tour" />
                                    </div>
                                </div>

                                <ul class="itinerary">
                                    <li><span>Highlights</span>: Scenic Landscapes, Tanglang La, Gata loops</li>
                                    <li>After breakfast, head towards Leh, riding through stunning landscapes and crossing Tanglang la. The route offers breathtaking views of the mountains and valleys. The hairpin bends (Gataloops) on the Manali to Leh route offer a thrilling and challenging ride, winding through steep mountainsides with dramatic views of the surrounding valleys.</li>
                                    <li><span>Overnight</span>: Hotel in Leh</li>
                                </ul>

                            </div>
                        </div>
                    </div>

                    <div class="accordion-item">
                        <h3 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#itineraryCollapse4" aria-expanded="false" aria-controls="itineraryCollapse4">
                            Day 04 : Leh to Nubra valley via Khardong La
                            </button>
                        </h3>
                        <div id="itineraryCollapse4" class="accordion-collapse collapse" data-bs-parent="#itineraryAccordion">
                            <div class="accordion-body">
                                <div class="row d-block d-lg-none">
                                    <div class="col-12 col-lg-6">
                                        <ItineraryIcons highestAltitude="18,380 ft" distance="124 km" duration="4-5 hrs" lodging="Hotel" meal="BF/Dinner" />
                                    </div>

                                    <div class="col-12 col-lg-6 mt-3 mb-3 d-flex align-items-center justify-content-center">
                                        <ItineraryImage src="/img/bike-tours/manali-leh-srinagar/manali-leh-srinagar-day4.jpg" alt="Day Four Itinerary Image Of The Manali To Leh Vai Umling La Bike Tour" />
                                    </div>
                                </div>

                                {/* Desktop Screen */}
                                <div class="row d-none d-lg-block">
                                    <div class="col-12 col-lg-12">
                                        <ItineraryIcons highestAltitude="18,380 ft" distance="124 km" duration="4-5 hrs" lodging="Hotel" meal="BF/Dinner" />
                                    </div>

                                    <div class="col-12 col-lg-12 mt-3 mb-3 d-flex align-items-center justify-content-center">
                                        <ItineraryImage size="desktop" src="/img/bike-tours/manali-leh-srinagar/manali-leh-srinagar-day4.jpg" alt="Day Four Itinerary Image Of The Manali To Leh Vai Umling La Bike Tour" />
                                    </div>
                                </div>

                                <ul class="itinerary">
                                    <li><span>Highlights</span>: Khardung La Pass, 18380 feet height, Diskit Monastery, and Hunder Sand Dunes</li>
                                    <li>This ride will take you to the highest point on the route, Khardung La. After crossing the pass, you will reach the beautiful valley of Nubra. You can visit the Diskit Monastery, which has a large Maitreya Buddha statue. After that, you can go to the Hunder Sand Dunes, where you could ride camels that have two humps, known as Bactrian camels. </li>
                                    <li><span>Overnight</span>: Hotel/Guest house in Hunder</li>
                                </ul>

                            </div>
                        </div>
                    </div>

                    <div class="accordion-item">
                        <h3 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#itineraryCollapse5" aria-expanded="false" aria-controls="itineraryCollapse5">
                            Day 05 : Nubra valley to Turtuk and back
                            </button>
                        </h3>
                        <div id="itineraryCollapse5" class="accordion-collapse collapse" data-bs-parent="#itineraryAccordion">
                            <div class="accordion-body">
                                <div class="row d-block d-lg-none">
                                    <div class="col-12 col-lg-6">
                                        <ItineraryIcons highestAltitude="10000 ft" distance="160 km" duration="5-6 hrs" lodging="Camp" meal="BF/Dinner" />
                                    </div>

                                    <div class="col-12 col-lg-6 mt-3 mb-3 d-flex align-items-center justify-content-center">
                                        <ItineraryImage src="/img/bike-tours/manali-leh-srinagar/manali-leh-srinagar-day5.jpg" alt="Day Five Itinerary Image Of The Manali To Leh Vai Umling La Bike Tour" />
                                    </div>
                                </div>

                                {/* Desktop Screen */}
                                <div class="row d-none d-lg-block">
                                    <div class="col-12 col-lg-12">
                                        <ItineraryIcons highestAltitude="10000 ft" distance="160 km" duration="5-6 hrs" lodging="Camp" meal="BF/Dinner" />
                                    </div>

                                    <div class="col-12 col-lg-12 mt-3 mb-3 d-flex align-items-center justify-content-center">
                                        <ItineraryImage size="desktop" src="/img/bike-tours/manali-leh-srinagar/manali-leh-srinagar-day5.jpg" alt="Day Five Itinerary Image Of The Manali To Leh Vai Umling La Bike Tour" />
                                    </div>
                                </div>

                                <ul class="itinerary">
                                    <li><span>Highlights</span>: Turtuk Village, Indo-Pak Border, Balti Culture</li>
                                    <li>Today, we will go on an excursion to Turtuk, a remote and isolated village located close to the protracted India Pakistan boundary, which is culturally diverse. Turtuk portrays the vividness of esteemed culture of balti, which is quite different from rest of Ladakh. This part of the ride lets you explore the village, interact with locals, and savor the views of the Apricot orchid's farms before heading back to Hunder for an overnight stay. </li>
                                    <li><span>Overnight</span>: Camp/Guest house in Purne</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="accordion-item">
                        <h3 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#itineraryCollapse6" aria-expanded="false" aria-controls="itineraryCollapse6">
                            Day 06 : Nubra valley to Pangong lake via Shayok valley
                            </button>
                        </h3>
                        <div id="itineraryCollapse6" class="accordion-collapse collapse" data-bs-parent="#itineraryAccordion">
                            <div class="accordion-body">
                                <div class="row d-block d-lg-none">
                                    <div class="col-12 col-lg-6">
                                        <ItineraryIcons highestAltitude="14270 ft" distance="150 km" duration="5-6 hrs" lodging="Cottages" meal="BF/Dinner" />
                                    </div>

                                    <div class="col-12 col-lg-6 mt-3 mb-3 d-flex align-items-center justify-content-center">
                                        <ItineraryImage src="/img/bike-tours/manali-leh-srinagar/manali-leh-srinagar-day6.jpg" alt="Day Six Itinerary Image Of The Manali To Leh Vai Umling La Bike Tour" />
                                    </div>
                                </div>

                                {/* Desktop Screen */}
                                <div class="row d-none d-lg-block">
                                    <div class="col-12 col-lg-12">
                                        <ItineraryIcons highestAltitude="14270 ft" distance="150 km" duration="5-6 hrs" lodging="Cottages" meal="BF/Dinner" />
                                    </div>

                                    <div class="col-12 col-lg-12 mt-3 mb-3 d-flex align-items-center justify-content-center">
                                        <ItineraryImage size="desktop" src="/img/bike-tours/manali-leh-srinagar/manali-leh-srinagar-day6.jpg" alt="Day Six Itinerary Image Of The Manali To Leh Vai Umling La Bike Tour" />
                                    </div>
                                </div>

                                <ul class="itinerary">
                                    <li><span>Highlights</span>:: Shyok River, Pangong Lake</li>
                                    <li>Prepare for a spectacular journey that will take you along the breathtaking and exciting route of the Shyok river to reach the exquisite Pangong Lake. The trip will take you across rough mountain landscapes and tiny Periodically rural settlements of the Ladakhi people. Before long, once you have reached the lake, you will see its numerous blue waters gets refracted and scattered by sunlight. The lake is spread across of India and tibet and ranks among the highest salt water lakes of the world.</li>
                                    <li><span>Overnight</span>: Cottages in Pangong</li>
                                </ul>

                            </div>
                        </div>
                    </div>

                    <div class="accordion-item">
                        <h3 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#itineraryCollapse7" aria-expanded="false" aria-controls="itineraryCollapse7">
                            Day 07 : Pangong lake to Leh Via Changla
                            </button>
                        </h3>
                        <div id="itineraryCollapse7" class="accordion-collapse collapse" data-bs-parent="#itineraryAccordion">
                            <div class="accordion-body">
                                <div class="row d-block d-lg-none">
                                    <div class="col-12 col-lg-6">
                                        <ItineraryIcons highestAltitude="17688 ft" distance="140 km" duration="4-5 hrs" lodging="Cottges" meal="BF/Dinner" />
                                    </div>

                                    <div class="col-12 col-lg-6 mt-3 mb-3 d-flex align-items-center justify-content-center">
                                        <ItineraryImage src="/img/bike-tours/manali-leh-srinagar/manali-leh-srinagar-day7.jpg" alt="Day Seven Itinerary Image Of The Manali To Leh Vai Umling La Bike Tour" />
                                    </div>
                                </div>

                                {/* Desktop Screen */}
                                <div class="row d-none d-lg-block">
                                    <div class="col-12 col-lg-12">
                                        <ItineraryIcons highestAltitude="17688 ft" distance="140 km" duration="4-5 hrs" lodging="Cottges" meal="BF/Dinner" />
                                    </div>

                                    <div class="col-12 col-lg-12 mt-3 mb-3 d-flex align-items-center justify-content-center">
                                        <ItineraryImage size="desktop" src="/img/bike-tours/manali-leh-srinagar/manali-leh-srinagar-day7.jpg" alt="Day Seven Itinerary Image Of The Manali To Leh Vai Umling La Bike Tour" />
                                    </div>
                                </div>

                                <ul class="itinerary">
                                    <li><span>Highlights</span>: Changla pass, Thiksey Monastery (optional stop)</li>
                                    <li>The return trip to Leh may commence after breakfast, during which you will cross Chang la pass which is among ppone of the highest and  it is also possible to stop for some sightseeing including one of the best monasteries in Ladakh, Thiksey Monastery which is beautiful in its architecture style and its surrounding views. Proceed with riding back to leh and this time you could opt for some rest and sight seeing for all the places that you might have left earlier. </li>
                                    <li><span>Overnight</span>: Hotel in Leh</li>
                                </ul>

                            </div>
                        </div>
                    </div>

                    <div class="accordion-item">
                        <h3 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#itineraryCollapse8" aria-expanded="false" aria-controls="itineraryCollapse8">
                            Day 08 : Leh to Kargil
                            </button>
                        </h3>
                        <div id="itineraryCollapse8" class="accordion-collapse collapse" data-bs-parent="#itineraryAccordion">
                            <div class="accordion-body">
                                <div class="row d-block d-lg-none">
                                    <div class="col-12 col-lg-6">
                                        <ItineraryIcons highestAltitude="13400 ft" distance="215 km" duration="5-6 hrs" lodging="Hotel" meal="BF/Dinner" />
                                    </div>

                                    <div class="col-12 col-lg-6 mt-3 mb-3 d-flex align-items-center justify-content-center">
                                        <ItineraryImage src="/img/bike-tours/manali-leh-srinagar/manali-leh-srinagar-day8.jpg" alt="Day Eight Itinerary Image Of The Manali To Leh Vai Umling La Bike Tour" />
                                    </div>
                                </div>

                                {/* Desktop Screen */}
                                <div class="row d-none d-lg-block">
                                    <div class="col-12 col-lg-12">
                                        <ItineraryIcons highestAltitude="13400 ft" distance="215 km" duration="5-6 hrs" lodging="Hotel" meal="BF/Dinner" />
                                    </div>

                                    <div class="col-12 col-lg-12 mt-3 mb-3 d-flex align-items-center justify-content-center">
                                        <ItineraryImage size="desktop" src="/img/bike-tours/manali-leh-srinagar/manali-leh-srinagar-day8.jpg" alt="Day Eight Itinerary Image Of The Manali To Leh Vai Umling La Bike Tour" />
                                    </div>
                                </div>

                                <ul class="itinerary">
                                    <li><span>Highlights</span>: Magnetic Hill, Gurudwara Pathar Sahib, Lamayuru Monastery, Kargil War Memorial </li>
                                    <li>Today ride towards Kargil, a town of great antiquity in Ladakh. On the way, visit the Magnetic Hill and Gurudwara Pathar Sahib and then head on to visit Lamayuru Gompa, which is regarded as one of the oldest and most exquisite monasteries in Ladakh. From Lamayuru, move ahead to Kargil War Memorial, a homage paying place for the soldiers who died during Kargil War. Be in Kargil by sunset.</li>
                                    <li><span>Overnight</span>: Hotel in Kargil</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="accordion-item">
                        <h3 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#itineraryCollapse9" aria-expanded="false" aria-controls="itineraryCollapse9">
                            Day 09 :  Kargil to Srinagar via Zojila pass
                            </button>
                        </h3>
                        <div id="itineraryCollapse9" class="accordion-collapse collapse" data-bs-parent="#itineraryAccordion">
                            <div class="accordion-body">
                                <div class="row d-block d-lg-none">
                                    <div class="col-12 col-lg-6">
                                        <ItineraryIcons highestAltitude="11650 ft" distance="201 km" duration="5-6 hrs" lodging="Hotel" meal="BF/Dinner" />
                                    </div>

                                    <div class="col-12 col-lg-6 mt-3 mb-3 d-flex align-items-center justify-content-center">
                                        <ItineraryImage src="/img/bike-tours/manali-leh-srinagar/manali-leh-srinagar-day9.jpg" alt="Day Nine Itinerary Image Of The Manali To Leh Vai Umling La Bike Tour" />
                                    </div>
                                </div>

                                {/* Desktop Screen */}
                                <div class="row d-none d-lg-block">
                                    <div class="col-12 col-lg-12">
                                        <ItineraryIcons highestAltitude="11650 ft" distance="201 km" duration="5-6 hrs" lodging="Hotel" meal="BF/Dinner" />
                                    </div>

                                    <div class="col-12 col-lg-12 mt-3 mb-3 d-flex align-items-center justify-content-center">
                                        <ItineraryImage size="desktop" src="/img/bike-tours/manali-leh-srinagar/manali-leh-srinagar-day9.jpg" alt="Day Nine Itinerary Image Of The Manali To Leh Vai Umling La Bike Tour" />
                                    </div>
                                </div>

                                <ul class="itinerary">
                                    <li><span>Highlights</span>: Zoji La Pass, Drass, Sonamarg</li>
                                    <li>We were going to start off the ride to Srinagar through the arduous and picturesque Zoji La Pass that has breathtaking views of the Himalayan mountain range. Get on the bikes and go to Drass, which is the second coldest place on earth. After a descent of the ZOJI LA, one will cross over the vast green plains of SONAMARG after which the alluring city of Srinagar is finally reached. Look forward to enjoying a farewell dinner whilst reminiscing all the good times you had in your tour.</li>
                                    <li><span>Overnight</span>: Hotel in Srinagar</li>
                                </ul>

                            </div>
                        </div>
                    </div>

                    <div class="accordion-item">
                        <h3 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#itineraryCollapse10" aria-expanded="false" aria-controls="itineraryCollapse10">
                            Day 10 : Departure from Srinagar
                            </button>
                        </h3>
                        <div id="itineraryCollapse10" class="accordion-collapse collapse" data-bs-parent="#itineraryAccordion">
                            <div class="accordion-body">
                                <p>
                                    After breakfast, bid farewell to your motorbiking companions and transfer to the airport for your departure from Srinagar, carrying unforgettable memories of the incredible landscapes and thrilling rides.
                                </p>

                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
});