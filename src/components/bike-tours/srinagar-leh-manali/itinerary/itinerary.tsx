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
                            Day 01 : Arrival in Srinagar
                            </button>
                        </h3>
                        <div id="itineraryCollapse1" class="accordion-collapse collapse show" data-bs-parent="#itineraryAccordion">
                            <div class="accordion-body">
                                <div class="row d-block d-lg-none">
                                    <div class="col-12 col-lg-6">
                                        <ItineraryIcons highestAltitude="5200 ft" distance="20 km" duration="3-4 hrs" lodging="Hotel" meal="BF/Dinner" />
                                    </div>

                                    <div class="col-12 col-lg-6 mt-3 mb-3 d-flex align-items-center justify-content-center">
                                        <ItineraryImage src="/img/bike-tours/srinagar-leh-manali/srinagar-leh-manali-day1.webp" alt="Day One Itinerary Image Of The Srinagar Leh Manali Bike Tour" />
                                    </div>
                                </div>

                                {/* Desktop Screen */}
                                <div class="row d-none d-lg-block">
                                    <div class="col-12 col-lg-12">
                                        <ItineraryIcons highestAltitude="5200 ft" distance="20 km" duration="3-4 hrs" lodging="Hotel" meal="BF/Dinner" />
                                    </div>

                                    <div class="col-12 col-lg-12 mt-3 mb-3 d-flex align-items-center justify-content-center">
                                        <ItineraryImage size="desktop" src="/img/bike-tours/srinagar-leh-manali/srinagar-leh-manali-day1.webp" alt="Day One Itinerary Image Of The Srinagar Leh Manali Bike Tour" />
                                    </div>
                                </div>

                                <ul class="itinerary">
                                    <li><span>Activity</span>: Bike check-up, Acclimatization and Local Sightseeing</li>
                                    <li><span>Highlights</span>: Dal Lake, Mughal Gardens, Shankaracharya Temple</li>
                                    <li>Arrival Srinagar. For your convenience, we recommend that clients arrange their taxi to reach hotel. Once you arrive at Srinagar, please get to the designated hotel, where our team will be ready to welcome you. Take the day to adjust to the altitude while enjoying a shikara ride on Dal Lake. When time allows, visit the Shankaracharya Temple for beautiful sights of the complete city.</li>
                                    <li><span>Overnight</span>: Hotel in Srinagar</li>
                                </ul>

                            </div>
                        </div>
                    </div>

                    <div class="accordion-item">
                        <h3 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#itineraryCollapse2" aria-expanded="false" aria-controls="itineraryCollapse2" onClick$={handleAccordionScrollIntoView}>
                            Day 02 : Srinagar to Kargil
                            </button>
                        </h3>
                        <div id="itineraryCollapse2" class="accordion-collapse collapse" data-bs-parent="#itineraryAccordion">
                            <div class="accordion-body">
                                <div class="row d-block d-lg-none">
                                    <div class="col-12 col-lg-6">
                                        <ItineraryIcons highestAltitude="11575 ft" distance="204 km" duration="5-6 hrs" lodging="Hotel" meal="BF/Dinner" />
                                    </div>

                                    <div class="col-12 col-lg-6 mt-3 mb-3 d-flex align-items-center justify-content-center">
                                        <ItineraryImage src="/img/bike-tours/srinagar-leh-manali/srinagar-leh-manali-day2.webp" alt="Day Two Itinerary Image Of The Srinagar Leh Manali Bike Tour" />
                                    </div>
                                </div>

                                {/* Desktop Screen */}
                                <div class="row d-none d-lg-block">
                                    <div class="col-12 col-lg-12">
                                        <ItineraryIcons highestAltitude="11575 ft" distance="204 km" duration="5-6 hrs" lodging="Hotel" meal="BF/Dinner" />
                                    </div>

                                    <div class="col-12 col-lg-12 mt-3 mb-3 d-flex align-items-center justify-content-center">
                                        <ItineraryImage size="desktop" src="/img/bike-tours/srinagar-leh-manali/srinagar-leh-manali-day2.webp" alt="Day Two Itinerary Image Of The Srinagar Leh Manali Bike Tour" />
                                    </div>
                                </div>

                                <ul class="itinerary">
                                    <li><span>Highlights</span>: Zojila pass, Sonmarg, Drass, Kargil War Memorial</li>
                                    <li>Once you are done with breakfast, we begin the long drive towards Kargil through the lovely Sonmarg and Drass Valley.  Zojila Pass provides breathtaking views of the mountains and the valleys. After crossing the pass you can then proceed to the Kargil War Memorial located in Drass where the brave soldiers of the Kargil War are honoured. Later move towards Kargil where during the dusk you may take a brief tour of the town.</li>
                                    <li><span>Overnight</span>: Hotel in Kargil</li>
                                </ul>

                            </div>
                        </div>
                    </div>

                    <div class="accordion-item">
                        <h3 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#itineraryCollapse3" aria-expanded="false" aria-controls="itineraryCollapse3" onClick$={handleAccordionScrollIntoView}>
                            Day 03 : Kargil to Leh Via Lamayuru
                            </button>
                        </h3>
                        <div id="itineraryCollapse3" class="accordion-collapse collapse" data-bs-parent="#itineraryAccordion">
                            <div class="accordion-body">
                                <div class="row d-block d-lg-none">
                                    <div class="col-12 col-lg-6">
                                        <ItineraryIcons highestAltitude="13478 ft" distance="210 km" duration="5-6 hrs" lodging="Hotel" meal="BF/Dinner" />
                                    </div>

                                    <div class="col-12 col-lg-6 mt-3 mb-3 d-flex align-items-center justify-content-center">
                                        <ItineraryImage src="/img/bike-tours/srinagar-leh-manali/srinagar-leh-manali-day3.webp" alt="Day Three Itinerary Image Of The Srinagar Leh Manali Bike Tour" />
                                    </div>
                                </div>

                                {/* Desktop Screen */}
                                <div class="row d-none d-lg-block">
                                    <div class="col-12 col-lg-12">
                                        <ItineraryIcons highestAltitude="13478 ft" distance="210 km" duration="5-6 hrs" lodging="Hotel" meal="BF/Dinner" />
                                    </div>

                                    <div class="col-12 col-lg-12 mt-3 mb-3 d-flex align-items-center justify-content-center">
                                        <ItineraryImage size="desktop" src="/img/bike-tours/srinagar-leh-manali/srinagar-leh-manali-day3.webp" alt="Day Three Itinerary Image Of The Srinagar Leh Manali Bike Tour" />
                                    </div>
                                </div>

                                <ul class="itinerary">
                                    <li><span>Highlights</span>: Namika La, Fotu La, Indus Valley and Lamayuru Monastery</li>
                                    <li>After breakfast, we start riding towards Leh, passing through the Namkila La and Fotu La passes. Enroute vist Lamayuru monastery. During this journey, you are accompanied by lovely views of the Indus Valley. You are fully in Leh by the early afternoon where you are free to relaxation and getting ready for the other rides which are to occur. The evening can be enjoyed exploring the local markets or paying a visit to the Leh Palace </li>
                                    <li><span>Overnight</span>: Hotel in Leh</li>
                                </ul>

                            </div>
                        </div>
                    </div>

                    <div class="accordion-item">
                        <h3 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#itineraryCollapse4" aria-expanded="false" aria-controls="itineraryCollapse4" onClick$={handleAccordionScrollIntoView}>
                            Day 04 : Leh to Nubra Valley via Khardung La Pass
                            </button>
                        </h3>
                        <div id="itineraryCollapse4" class="accordion-collapse collapse" data-bs-parent="#itineraryAccordion">
                            <div class="accordion-body">
                                <div class="row d-block d-lg-none">
                                    <div class="col-12 col-lg-6">
                                        <ItineraryIcons highestAltitude="18380 ft" distance="120 km" duration="4-5 hrs" lodging="Hotel/Camp" meal="BF/Dinner" />
                                    </div>

                                    <div class="col-12 col-lg-6 mt-3 mb-3 d-flex align-items-center justify-content-center">
                                        <ItineraryImage src="/img/bike-tours/srinagar-leh-manali/srinagar-leh-manali-day4.webp" alt="Day Four Itinerary Image Of The Srinagar Leh Manali Bike Tour" />
                                    </div>
                                </div>

                                {/* Desktop Screen */}
                                <div class="row d-none d-lg-block">
                                    <div class="col-12 col-lg-12">
                                        <ItineraryIcons highestAltitude="18380 ft" distance="120 km" duration="4-5 hrs" lodging="Hotel/Camp" meal="BF/Dinner" />
                                    </div>

                                    <div class="col-12 col-lg-12 mt-3 mb-3 d-flex align-items-center justify-content-center">
                                        <ItineraryImage size="desktop" src="/img/bike-tours/srinagar-leh-manali/srinagar-leh-manali-day4.webp" alt="Day Four Itinerary Image Of The Srinagar Leh Manali Bike Tour" />
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
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#itineraryCollapse5" aria-expanded="false" aria-controls="itineraryCollapse5" onClick$={handleAccordionScrollIntoView}>
                            Day 05 : Nubra Valley to Turtuk and Back
                            </button>
                        </h3>
                        <div id="itineraryCollapse5" class="accordion-collapse collapse" data-bs-parent="#itineraryAccordion">
                            <div class="accordion-body">
                                <div class="row d-block d-lg-none">
                                    <div class="col-12 col-lg-6">
                                        <ItineraryIcons highestAltitude="10000 ft" distance="130 km" duration="5-6 hrs" lodging="Hotel/Camp" meal="BF/Dinner" />
                                    </div>

                                    <div class="col-12 col-lg-6 mt-3 mb-3 d-flex align-items-center justify-content-center">
                                        <ItineraryImage src="/img/bike-tours/srinagar-leh-manali/srinagar-leh-manali-day5.webp" alt="Day Five Itinerary Image Of The Srinagar Leh Manali Bike Tour" />
                                    </div>
                                </div>

                                {/* Desktop Screen */}
                                <div class="row d-none d-lg-block">
                                    <div class="col-12 col-lg-12">
                                        <ItineraryIcons highestAltitude="10000 ft" distance="130 km" duration="5-6 hrs" lodging="Hotel/Camp" meal="BF/Dinner" />
                                    </div>

                                    <div class="col-12 col-lg-12 mt-3 mb-3 d-flex align-items-center justify-content-center">
                                        <ItineraryImage size="desktop" src="/img/bike-tours/srinagar-leh-manali/srinagar-leh-manali-day5.webp" alt="Day Five Itinerary Image Of The Srinagar Leh Manali Bike Tour" />
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
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#itineraryCollapse6" aria-expanded="false" aria-controls="itineraryCollapse6" onClick$={handleAccordionScrollIntoView}>
                            Day 06 : Nubra Valley to Pangong Lake Via Shayok valley
                            </button>
                        </h3>
                        <div id="itineraryCollapse6" class="accordion-collapse collapse" data-bs-parent="#itineraryAccordion">
                            <div class="accordion-body">
                                <div class="row d-block d-lg-none">
                                    <div class="col-12 col-lg-6">
                                        <ItineraryIcons highestAltitude="14270 ft" distance="160 km" duration="5-6 hrs" lodging="Cottages" meal="BF/Dinner" />
                                    </div>

                                    <div class="col-12 col-lg-6 mt-3 mb-3 d-flex align-items-center justify-content-center">
                                        <ItineraryImage src="/img/bike-tours/srinagar-leh-manali/srinagar-leh-manali-day6.webp" alt="Day Six Itinerary Image Of The Srinagar Leh Manali Bike Tour" />
                                    </div>
                                </div>

                                {/* Desktop Screen */}
                                <div class="row d-none d-lg-block">
                                    <div class="col-12 col-lg-12">
                                        <ItineraryIcons highestAltitude="14270 ft" distance="160 km" duration="5-6 hrs" lodging="Cottages" meal="BF/Dinner" />
                                    </div>

                                    <div class="col-12 col-lg-12 mt-3 mb-3 d-flex align-items-center justify-content-center">
                                        <ItineraryImage size="desktop" src="/img/bike-tours/srinagar-leh-manali/srinagar-leh-manali-day6.webp" alt="Day Six Itinerary Image Of The Srinagar Leh Manali Bike Tour" />
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
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#itineraryCollapse7" aria-expanded="false" aria-controls="itineraryCollapse7" onClick$={handleAccordionScrollIntoView}>
                            Day 07 : Pangong Lake to Leh
                            </button>
                        </h3>
                        <div id="itineraryCollapse7" class="accordion-collapse collapse" data-bs-parent="#itineraryAccordion">
                            <div class="accordion-body">
                                <div class="row d-block d-lg-none">
                                    <div class="col-12 col-lg-6">
                                        <ItineraryIcons highestAltitude="17688 ft" distance="140 km" duration="4-5 hrs" lodging="Hotel" meal="BF/Dinner" />
                                    </div>

                                    <div class="col-12 col-lg-6 mt-3 mb-3 d-flex align-items-center justify-content-center">
                                        <ItineraryImage src="/img/bike-tours/srinagar-leh-manali/srinagar-leh-manali-day7.webp" alt="Day Seven Itinerary Image Of The Srinagar Leh Manali Bike Tour" />
                                    </div>
                                </div>

                                {/* Desktop Screen */}
                                <div class="row d-none d-lg-block">
                                    <div class="col-12 col-lg-12">
                                        <ItineraryIcons highestAltitude="17688 ft" distance="140 km" duration="4-5 hrs" lodging="Hotel" meal="BF/Dinner" />
                                    </div>

                                    <div class="col-12 col-lg-12 mt-3 mb-3 d-flex align-items-center justify-content-center">
                                        <ItineraryImage size="desktop" src="/img/bike-tours/srinagar-leh-manali/srinagar-leh-manali-day7.webp" alt="Day Seven Itinerary Image Of The Srinagar Leh Manali Bike Tour" />
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
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#itineraryCollapse8" aria-expanded="false" aria-controls="itineraryCollapse8" onClick$={handleAccordionScrollIntoView}>
                            Day 08 : Leh to Serchu Via Taglangla
                            </button>
                        </h3>
                        <div id="itineraryCollapse8" class="accordion-collapse collapse" data-bs-parent="#itineraryAccordion">
                            <div class="accordion-body">
                                <div class="row d-block d-lg-none">
                                    <div class="col-12 col-lg-6">
                                        <ItineraryIcons highestAltitude="17582 ft" distance="245 km" duration="6-7 hrs" lodging="Camp" meal="BF/Dinner" />
                                    </div>

                                    <div class="col-12 col-lg-6 mt-3 mb-3 d-flex align-items-center justify-content-center">
                                        <ItineraryImage src="/img/bike-tours/srinagar-leh-manali/srinagar-leh-manali-day8.webp" alt="Day Eight Itinerary Image Of The Srinagar Leh Manali Bike Tour" />
                                    </div>
                                </div>

                                {/* Desktop Screen */}
                                <div class="row d-none d-lg-block">
                                    <div class="col-12 col-lg-12">
                                        <ItineraryIcons highestAltitude="17582 ft" distance="245 km" duration="6-7 hrs" lodging="Camp" meal="BF/Dinner" />
                                    </div>

                                    <div class="col-12 col-lg-12 mt-3 mb-3 d-flex align-items-center justify-content-center">
                                        <ItineraryImage size="desktop" src="/img/bike-tours/srinagar-leh-manali/srinagar-leh-manali-day8.webp" alt="Day Eight Itinerary Image Of The Srinagar Leh Manali Bike Tour" />
                                    </div>
                                </div>

                                <ul class="itinerary">
                                    <li><span>Highlights</span>: Gata loops, Tanglang la pass, Lachung la pass </li>
                                    <li>After breakfast, start your journey towards Serchu while crossing Tanglang la pass. Pass through the famous Gata Loops, a series of 21 hairpin bends that lead to Nakee La and Lachulung La passes. The route itself is picturesque as it offers a breathtaking view of the mountains and the valleys. Reaching Serchu by evening strike the camp and rest for the day after riding for hours.</li>
                                    <li><span>Overnight</span>: Camp in Serchu</li>
                                </ul>

                            </div>
                        </div>
                    </div>

                    <div class="accordion-item">
                        <h3 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#itineraryCollapse9" aria-expanded="false" aria-controls="itineraryCollapse9" onClick$={handleAccordionScrollIntoView}>
                            Day 09 : Serchu to Manali Via Baralacha
                            </button>
                        </h3>
                        <div id="itineraryCollapse9" class="accordion-collapse collapse" data-bs-parent="#itineraryAccordion">
                            <div class="accordion-body">
                                <div class="row d-block d-lg-none">
                                    <div class="col-12 col-lg-6">
                                        <ItineraryIcons highestAltitude="16040 ft" distance="150 km" duration="4-5 hrs" lodging="Hotel" meal="BF/Dinner" />
                                    </div>

                                    <div class="col-12 col-lg-6 mt-3 mb-3 d-flex align-items-center justify-content-center">
                                        <ItineraryImage src="/img/bike-tours/srinagar-leh-manali/srinagar-leh-manali-day9.webp" alt="Day Nine Itinerary Image Of The Srinagar Leh Manali Bike Tour" />
                                    </div>
                                </div>

                                {/* Desktop Screen */}
                                <div class="row d-none d-lg-block">
                                    <div class="col-12 col-lg-12">
                                        <ItineraryIcons highestAltitude="16040 ft" distance="150 km" duration="4-5 hrs" lodging="Hotel" meal="BF/Dinner" />
                                    </div>

                                    <div class="col-12 col-lg-12 mt-3 mb-3 d-flex align-items-center justify-content-center">
                                        <ItineraryImage size="desktop" src="/img/bike-tours/srinagar-leh-manali/srinagar-leh-manali-day9.webp" alt="Day Nine Itinerary Image Of The Srinagar Leh Manali Bike Tour" />
                                    </div>
                                </div>

                                <ul class="itinerary">
                                    <li><span>Highlights</span>: Baralacha pass, Atal tunnel, Keylong</li>
                                    <li>After an early breakfast, begin your ride towards Manali, passing through Baralacha pass, Atal tunnel. Enjoy the stunning mountain scenery and the exhilarating ride towards Manali. Arrive in Manali by afternoon, where you can relax and explore the local area. Look forward to enjoying a farewell dinner whilst reminiscing all the good times you had on your tour.</li>
                                    <li><span>Overnight</span>: Hotel in Manali</li>
                                </ul>

                            </div>
                        </div>
                    </div>

                    <div class="accordion-item">
                        <h3 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#itineraryCollapse10" aria-expanded="false" aria-controls="itineraryCollapse10 onClick$={handleAccordionScrollIntoView}">
                            Day 10 : Departure From Manali
                            </button>
                        </h3>
                        <div id="itineraryCollapse10" class="accordion-collapse collapse" data-bs-parent="#itineraryAccordion">
                            <div class="accordion-body">
                                <p>
                                    After breakfast, check out from your hotel and transfer to Kullu Airport or the bus station for your onward journey. Carry with you unforgettable memories of your motorbiking adventure through the majestic landscapes of Ladakh and Himachal Pradesh.
                                </p>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
});