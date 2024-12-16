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
                                        <ItineraryIcons highestAltitude="6725 ft" distance="20 km" duration="4 hrs" lodging="Hotel" meal="BF/Dinner" />
                                    </div>

                                    <div class="col-12 col-lg-6 mt-3 mb-3 d-flex align-items-center justify-content-center">
                                        <ItineraryImage src="/img/tours/manali-leh-srinagar/manali-leh-srinagar-day1.jpg" alt="Day One Itinerary Image Of The Manali To Leh Vai Umling La Bike Tour" />
                                    </div>
                                </div>

                                {/* Desktop Screen */}
                                <div class="row d-none d-lg-block">
                                    <div class="col-12 col-lg-12">
                                        <ItineraryIcons highestAltitude="6725 ft" distance="20 km" duration="4 hrs" lodging="Hotel" meal="BF/Dinner" />
                                    </div>

                                    <div class="col-12 col-lg-12 mt-3 mb-3 d-flex align-items-center justify-content-center">
                                        <ItineraryImage size="desktop" src="/img/tours/manali-leh-srinagar/manali-leh-srinagar-day1.jpg" alt="Day One Itinerary Image Of The Manali To Leh Vai Umling La Bike Tour" />
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
                                        <ItineraryImage src="/img/tours/manali-leh-srinagar/manali-leh-srinagar-day2.jpg" alt="Day Two Itinerary Image Of The Manali To Leh Vai Umling La Bike Tour" />
                                    </div>
                                </div>

                                {/* Desktop Screen */}
                                <div class="row d-none d-lg-block">
                                    <div class="col-12 col-lg-12">
                                        <ItineraryIcons highestAltitude="16500 ft" distance="223 km" duration="8 hrs" lodging="Camp" meal="BF/Dinner" />
                                    </div>

                                    <div class="col-12 col-lg-12 mt-3 mb-3 d-flex align-items-center justify-content-center">
                                        <ItineraryImage size="desktop" src="/img/tours/manali-leh-srinagar/manali-leh-srinagar-day2.jpg" alt="Day Two Itinerary Image Of The Manali To Leh Vai Umling La Bike Tour" />
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
                            Day 03 : Sarchu to Leh 
                            </button>
                        </h3>
                        <div id="itineraryCollapse3" class="accordion-collapse collapse" data-bs-parent="#itineraryAccordion">
                            <div class="accordion-body">
                                <div class="row d-block d-lg-none">
                                    <div class="col-12 col-lg-6">
                                        <ItineraryIcons highestAltitude="16600 ft" distance="137 km" duration="6 hrs" lodging="Camp" meal="BF/Dinner" />
                                    </div>

                                    <div class="col-12 col-lg-6 mt-3 mb-3 d-flex align-items-center justify-content-center">
                                        <ItineraryImage src="/img/tours/manali-leh-srinagar/manali-leh-srinagar-day3.jpg" alt="Day Three Itinerary Image Of The Manali To Leh Vai Umling La Bike Tour" />
                                    </div>
                                </div>

                                {/* Desktop Screen */}
                                <div class="row d-none d-lg-block">
                                    <div class="col-12 col-lg-12">
                                        <ItineraryIcons highestAltitude="16600 ft" distance="137 km" duration="6 hrs" lodging="Camp" meal="BF/Dinner" />
                                    </div>

                                    <div class="col-12 col-lg-12 mt-3 mb-3 d-flex align-items-center justify-content-center">
                                        <ItineraryImage size="desktop" src="/img/tours/manali-leh-srinagar/manali-leh-srinagar-day3.jpg" alt="Day Three Itinerary Image Of The Manali To Leh Vai Umling La Bike Tour" />
                                    </div>
                                </div>

                                <ul class="itinerary">
                                    <li><span>Highlights</span>: Scenic Landscapes, Baralacha La, Gata loops</li>
                                    <li>After breakfast, set off towards Leh, riding through stunning landscapes and crossing Baralacha La (16,040 ft). The route offers breathtaking views of the mountains and valleys. The hairpin bends (Gataloops) on the Manali to Leh route offer a thrilling and challenging ride, winding through steep mountainsides with dramatic views of the surrounding valleys.</li>
                                    <li>Arrive in Leh by evening and relax at the Hotel after a long day of riding.</li>
                                    <li><span>Overnight</span>: Hotel at Leh</li>
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
                                        <ItineraryIcons highestAltitude="18,380 ft" distance="97 km" duration="5 hrs" lodging="Camp" meal="BF/Dinner" />
                                    </div>

                                    <div class="col-12 col-lg-6 mt-3 mb-3 d-flex align-items-center justify-content-center">
                                        <ItineraryImage src="/img/tours/manali-leh-srinagar/manali-leh-srinagar-day4.jpg" alt="Day Four Itinerary Image Of The Manali To Leh Vai Umling La Bike Tour" />
                                    </div>
                                </div>

                                {/* Desktop Screen */}
                                <div class="row d-none d-lg-block">
                                    <div class="col-12 col-lg-12">
                                        <ItineraryIcons highestAltitude="18,380 ft" distance="97 km" duration="5 hrs" lodging="Camp" meal="BF/Dinner" />
                                    </div>

                                    <div class="col-12 col-lg-12 mt-3 mb-3 d-flex align-items-center justify-content-center">
                                        <ItineraryImage size="desktop" src="/img/tours/manali-leh-srinagar/manali-leh-srinagar-day4.jpg" alt="Day Four Itinerary Image Of The Manali To Leh Vai Umling La Bike Tour" />
                                    </div>
                                </div>

                                <ul class="itinerary">
                                    <li><span>Highlights</span>: Khardung La Pass (18,380 ft), Diskit Monastery, Hunder Sand Dunes</li>
                                    Start your ride by ascending to Khardung La, one of the world’s highest motorable passes. After crossing the pass, descend into the beautiful Nubra Valley. Visit the Diskit Monastery, home to a gigantic Maitreya Buddha statue. Later, explore the Hunder Sand Dunes, where you can enjoy a camel ride on the unique double-humped Bactrian camels.
                                    <strong>Overnight</strong>: Camps/Guesthouse in Hunder, Nubra Valley
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
                                        <ItineraryIcons highestAltitude="14763 ft" distance="160 km" duration="6 hrs" lodging="Camp" meal="BF/Dinner" />
                                    </div>

                                    <div class="col-12 col-lg-6 mt-3 mb-3 d-flex align-items-center justify-content-center">
                                        <ItineraryImage src="/img/tours/manali-leh-srinagar/manali-leh-srinagar-day5.jpg" alt="Day Five Itinerary Image Of The Manali To Leh Vai Umling La Bike Tour" />
                                    </div>
                                </div>

                                {/* Desktop Screen */}
                                <div class="row d-none d-lg-block">
                                    <div class="col-12 col-lg-12">
                                        <ItineraryIcons highestAltitude="14763 ft" distance="160 km" duration="6 hrs" lodging="Camp" meal="BF/Dinner" />
                                    </div>

                                    <div class="col-12 col-lg-12 mt-3 mb-3 d-flex align-items-center justify-content-center">
                                        <ItineraryImage size="desktop" src="/img/tours/manali-leh-srinagar/manali-leh-srinagar-day5.jpg" alt="Day Five Itinerary Image Of The Manali To Leh Vai Umling La Bike Tour" />
                                    </div>
                                </div>

                                <ul class="itinerary">
                                    <li><span>Highlights</span>: Turtuk Village, Zero Point, Thang</li>
                                    <li>After breakfast, ride towards Turtuk, one of the northernmost villages in India. The ride offers stunning views of the mountains and valleys. Explore the village, where you can experience the unique Balti culture. If time permits, ride to Zero Point Thang, located near the India-Pakistan border. After exploring Turtuk, return to Nubra Valley for the night.</li>
                                    <li><span>Overnight</span>: Camps/Guesthouse in Nubra Valley</li>
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
                                        <ItineraryIcons highestAltitude="19024 ft" distance="150 km" duration="6 hrs" lodging="Camp" meal="BF/Dinner" />
                                    </div>

                                    <div class="col-12 col-lg-6 mt-3 mb-3 d-flex align-items-center justify-content-center">
                                        <ItineraryImage src="/img/tours/manali-leh-srinagar/manali-leh-srinagar-day6.jpg" alt="Day Six Itinerary Image Of The Manali To Leh Vai Umling La Bike Tour" />
                                    </div>
                                </div>

                                {/* Desktop Screen */}
                                <div class="row d-none d-lg-block">
                                    <div class="col-12 col-lg-12">
                                        <ItineraryIcons highestAltitude="19024 ft" distance="150 km" duration="6 hrs" lodging="Camp" meal="BF/Dinner" />
                                    </div>

                                    <div class="col-12 col-lg-12 mt-3 mb-3 d-flex align-items-center justify-content-center">
                                        <ItineraryImage size="desktop" src="/img/tours/manali-leh-srinagar/manali-leh-srinagar-day6.jpg" alt="Day Six Itinerary Image Of The Manali To Leh Vai Umling La Bike Tour" />
                                    </div>
                                </div>

                                <ul class="itinerary">
                                    <li><span>Highlights</span>: Scenic Ride, Pangong Lake</li>
                                    <li>After breakfast, begin your ride to Pangong Lake. The journey will take you through beautiful landscapes, including valleys, rivers, and rugged mountains. Upon reaching Pangong Lake, marvel at its striking blue waters and picturesque surroundings. Enjoy a relaxing evening by the lake and take in the stunning sunset.</li>
                                    <li><span>Overnight</span>: Cottages/Camp in Pangong Lake</li>
                                </ul>

                            </div>
                        </div>
                    </div>

                    <div class="accordion-item">
                        <h3 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#itineraryCollapse7" aria-expanded="false" aria-controls="itineraryCollapse7">
                            Day 07 : Pangong lake to Leh
                            </button>
                        </h3>
                        <div id="itineraryCollapse7" class="accordion-collapse collapse" data-bs-parent="#itineraryAccordion">
                            <div class="accordion-body">
                                <div class="row d-block d-lg-none">
                                    <div class="col-12 col-lg-6">
                                        <ItineraryIcons highestAltitude="13940 ft" distance="230 km" duration="7 hrs" lodging="Cottges" meal="BF/Dinner" />
                                    </div>

                                    <div class="col-12 col-lg-6 mt-3 mb-3 d-flex align-items-center justify-content-center">
                                        <ItineraryImage src="/img/tours/manali-leh-srinagar/manali-leh-srinagar-day7.jpg" alt="Day Seven Itinerary Image Of The Manali To Leh Vai Umling La Bike Tour" />
                                    </div>
                                </div>

                                {/* Desktop Screen */}
                                <div class="row d-none d-lg-block">
                                    <div class="col-12 col-lg-12">
                                        <ItineraryIcons highestAltitude="13940 ft" distance="230 km" duration="7 hrs" lodging="Cottges" meal="BF/Dinner" />
                                    </div>

                                    <div class="col-12 col-lg-12 mt-3 mb-3 d-flex align-items-center justify-content-center">
                                        <ItineraryImage size="desktop" src="/img/tours/manali-leh-srinagar/manali-leh-srinagar-day7.jpg" alt="Day Seven Itinerary Image Of The Manali To Leh Vai Umling La Bike Tour" />
                                    </div>
                                </div>

                                <ul class="itinerary">
                                    <li><span>Highlights</span>: Thiksey Monastery (optional stop)</li>
                                    <li>After breakfast, begin your return journey to Leh. You can stop at Thiksey Monastery on your way back, known for its impressive architecture and views. Arrive in Leh and spend the evening at leisure, perhaps visiting the local market or enjoying a farewell dinner.</li>
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
                                        <ItineraryIcons highestAltitude="10000 ft" distance="160 km" duration="6 hrs" lodging="Hotel/Camp" meal="BF/Dinner" />
                                    </div>

                                    <div class="col-12 col-lg-6 mt-3 mb-3 d-flex align-items-center justify-content-center">
                                        <ItineraryImage src="/img/tours/manali-leh-srinagar/manali-leh-srinagar-day8.jpg" alt="Day Eight Itinerary Image Of The Manali To Leh Vai Umling La Bike Tour" />
                                    </div>
                                </div>

                                {/* Desktop Screen */}
                                <div class="row d-none d-lg-block">
                                    <div class="col-12 col-lg-12">
                                        <ItineraryIcons highestAltitude="10000 ft" distance="160 km" duration="6 hrs" lodging="Hotel/Camp" meal="BF/Dinner" />
                                    </div>

                                    <div class="col-12 col-lg-12 mt-3 mb-3 d-flex align-items-center justify-content-center">
                                        <ItineraryImage size="desktop" src="/img/tours/manali-leh-srinagar/manali-leh-srinagar-day8.jpg" alt="Day Eight Itinerary Image Of The Manali To Leh Vai Umling La Bike Tour" />
                                    </div>
                                </div>

                                <ul class="itinerary">
                                    <li><span>Highlights</span>: Namika La, Fotu La, Indus Valley</li>
                                    <li>After breakfast, ride towards Kargil, crossing the Namika La and Fotu La passes. The stunning views of the Indus Valley will accompany you on this journey. Arrive in Kargil by afternoon.</li>
                                    <li><span>Overnight</span>: Hotel in Leh</li>
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
                                        <ItineraryIcons highestAltitude="10000 ft" distance="170 km" duration="6 hrs" lodging="Hotel/Camp" meal="BF/Dinner" />
                                    </div>

                                    <div class="col-12 col-lg-6 mt-3 mb-3 d-flex align-items-center justify-content-center">
                                        <ItineraryImage src="/img/tours/manali-leh-srinagar/manali-leh-srinagar-day9.jpg" alt="Day Nine Itinerary Image Of The Manali To Leh Vai Umling La Bike Tour" />
                                    </div>
                                </div>

                                {/* Desktop Screen */}
                                <div class="row d-none d-lg-block">
                                    <div class="col-12 col-lg-12">
                                        <ItineraryIcons highestAltitude="10000 ft" distance="170 km" duration="6 hrs" lodging="Hotel/Camp" meal="BF/Dinner" />
                                    </div>

                                    <div class="col-12 col-lg-12 mt-3 mb-3 d-flex align-items-center justify-content-center">
                                        <ItineraryImage size="desktop" src="/img/tours/manali-leh-srinagar/manali-leh-srinagar-day9.jpg" alt="Day Nine Itinerary Image Of The Manali To Leh Vai Umling La Bike Tour" />
                                    </div>
                                </div>

                                <ul class="itinerary">
                                    <li><span>Highlights</span>: Drass, Kargil War Memorial, Zojila pass</li>
                                    <li>After breakfast, begin your journey to Srinagar, passing through the scenic Drass Valley. The route offers stunning views of the mountains and valleys. Stop at the Kargil War Memorial in Drass to pay tribute to the soldiers who fought during the Kargil War. Continue to Srinagar, where you can explore the town in the evening.</li>
                                    <li><span>Overnight</span>: Hotel in Srinagar</li>
                                </ul>

                            </div>
                        </div>
                    </div>

                    <div class="accordion-item">
                        <h3 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#itineraryCollapse10" aria-expanded="false" aria-controls="itineraryCollapse10">
                            Day 11 : Departure from Srinagar
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