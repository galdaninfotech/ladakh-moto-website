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
                            Day 01 : Arrival in Srinagar
                            </button>
                        </h3>
                        <div id="itineraryCollapse1" class="accordion-collapse collapse show" data-bs-parent="#itineraryAccordion">
                            <div class="accordion-body">
                                <div class="row d-block d-lg-none">
                                    <div class="col-12 col-lg-6">
                                        <ItineraryIcons highestAltitude="5200 ft" distance="20 km" duration="4 hrs" lodging="Hotel" meal="BF/Dinner" />
                                    </div>

                                    <div class="col-12 col-lg-6 mt-3 mb-3 d-flex align-items-center justify-content-center">
                                        <ItineraryImage src="/img/tours/srinagar-leh-manali/srinagar-leh-manali-day1.jpg" alt="Day One Itinerary Image Of The Srinagar Leh Manali Bike Tour" />
                                    </div>
                                </div>

                                {/* Desktop Screen */}
                                <div class="row d-none d-lg-block">
                                    <div class="col-12 col-lg-12">
                                        <ItineraryIcons highestAltitude="5200 ft" distance="20 km" duration="4 hrs" lodging="Hotel" meal="BF/Dinner" />
                                    </div>

                                    <div class="col-12 col-lg-12 mt-3 mb-3 d-flex align-items-center justify-content-center">
                                        <ItineraryImage size="desktop" src="/img/tours/srinagar-leh-manali/srinagar-leh-manali-day1.jpg" alt="Day One Itinerary Image Of The Srinagar Leh Manali Bike Tour" />
                                    </div>
                                </div>

                                <ul class="itinerary">
                                    <li><span>Activity</span>: Acclimatization and Local sightseeing</li>
                                    <li><span>Highlights</span>: Dal Lake, Mughal Gardens, Shankaracharya Temple</li>
                                    <li>Arrive at Srinagar Airport, where you’ll be greeted and transferred to your hotel. Spend the day acclimatizing to the altitude and explore Dal Lake on a shikara (traditional wooden boat) ride. Visit the Mughal Gardens, including Shalimar Bagh and Nishat Bagh, known for their stunning terraced lawns and beautiful flowers. If time permits, visit the Shankaracharya Temple for panoramic views of the city.</li>
                                    <li><span>Overnight</span>: Hotel in Srinagar</li>
                                </ul>

                            </div>
                        </div>
                    </div>

                    <div class="accordion-item">
                        <h3 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#itineraryCollapse2" aria-expanded="false" aria-controls="itineraryCollapse2">
                            Day 02 : Srinagar to Kargil
                            </button>
                        </h3>
                        <div id="itineraryCollapse2" class="accordion-collapse collapse" data-bs-parent="#itineraryAccordion">
                            <div class="accordion-body">
                                <div class="row d-block d-lg-none">
                                    <div class="col-12 col-lg-6">
                                        <ItineraryIcons highestAltitude="11575 ft" distance="204 km" duration="6 hrs" lodging="Hotel" meal="BF/Dinner" />
                                    </div>

                                    <div class="col-12 col-lg-6 mt-3 mb-3 d-flex align-items-center justify-content-center">
                                        <ItineraryImage src="/img/tours/srinagar-leh-manali/srinagar-leh-manali-day2.jpg" alt="Day Two Itinerary Image Of The Srinagar Leh Manali Bike Tour" />
                                    </div>
                                </div>

                                {/* Desktop Screen */}
                                <div class="row d-none d-lg-block">
                                    <div class="col-12 col-lg-12">
                                        <ItineraryIcons highestAltitude="11575 ft" distance="204 km" duration="6 hrs" lodging="Hotel" meal="BF/Dinner" />
                                    </div>

                                    <div class="col-12 col-lg-12 mt-3 mb-3 d-flex align-items-center justify-content-center">
                                        <ItineraryImage size="desktop" src="/img/tours/srinagar-leh-manali/srinagar-leh-manali-day2.jpg" alt="Day Two Itinerary Image Of The Srinagar Leh Manali Bike Tour" />
                                    </div>
                                </div>

                                <ul class="itinerary">
                                    <li><span>Highlights</span>: Drass, Kargil War Memorial</li>
                                    <li>After breakfast, begin your journey to Kargil, passing through the scenic Drass Valley. The route offers stunning views of the mountains and valleys. Stop at the Kargil War Memorial in Drass to pay tribute to the soldiers who fought during the Kargil War. Continue to Kargil, where you can explore the town in the evening.</li>
                                    <li><span>Overnight</span>: Hotel in Kargil</li>
                                </ul>

                            </div>
                        </div>
                    </div>

                    <div class="accordion-item">
                        <h3 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#itineraryCollapse3" aria-expanded="false" aria-controls="itineraryCollapse3">
                            Day 03 : Kargil to Leh
                            </button>
                        </h3>
                        <div id="itineraryCollapse3" class="accordion-collapse collapse" data-bs-parent="#itineraryAccordion">
                            <div class="accordion-body">
                                <div class="row d-block d-lg-none">
                                    <div class="col-12 col-lg-6">
                                        <ItineraryIcons highestAltitude="13478 ft" distance="210 km" duration="6 hrs" lodging="Hotel" meal="BF/Dinner" />
                                    </div>

                                    <div class="col-12 col-lg-6 mt-3 mb-3 d-flex align-items-center justify-content-center">
                                        <ItineraryImage src="/img/tours/srinagar-leh-manali/srinagar-leh-manali-day3.jpg" alt="Day Three Itinerary Image Of The Srinagar Leh Manali Bike Tour" />
                                    </div>
                                </div>

                                {/* Desktop Screen */}
                                <div class="row d-none d-lg-block">
                                    <div class="col-12 col-lg-12">
                                        <ItineraryIcons highestAltitude="13478 ft" distance="210 km" duration="6 hrs" lodging="Hotel" meal="BF/Dinner" />
                                    </div>

                                    <div class="col-12 col-lg-12 mt-3 mb-3 d-flex align-items-center justify-content-center">
                                        <ItineraryImage size="desktop" src="/img/tours/srinagar-leh-manali/srinagar-leh-manali-day3.jpg" alt="Day Three Itinerary Image Of The Srinagar Leh Manali Bike Tour" />
                                    </div>
                                </div>

                                <ul class="itinerary">
                                    <li><span>Highlights</span>:Namika La, Fotu La, Indus Valley</li>
                                    <li>After breakfast, ride towards Leh, crossing the Namika La and Fotu La passes. The stunning views of the Indus Valley will accompany you on this journey. Arrive in Leh by afternoon, where you can relax and prepare for the upcoming adventures. Spend the evening exploring the local market or visiting Leh Palace.</li>
                                    <li><span>Overnight</span>: Hotel in Leh</li>
                                </ul>

                            </div>
                        </div>
                    </div>

                    <div class="accordion-item">
                        <h3 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#itineraryCollapse4" aria-expanded="false" aria-controls="itineraryCollapse4">
                            Day 04 : Leh to Nubra Valley via Khardung La Pass
                            </button>
                        </h3>
                        <div id="itineraryCollapse4" class="accordion-collapse collapse" data-bs-parent="#itineraryAccordion">
                            <div class="accordion-body">
                                <div class="row d-block d-lg-none">
                                    <div class="col-12 col-lg-6">
                                        <ItineraryIcons highestAltitude="18300 ft" distance="120 km" duration="5 hrs" lodging="Hotel/Camp" meal="BF/Dinner" />
                                    </div>

                                    <div class="col-12 col-lg-6 mt-3 mb-3 d-flex align-items-center justify-content-center">
                                        <ItineraryImage src="/img/tours/srinagar-leh-manali/srinagar-leh-manali-day4.jpg" alt="Day Four Itinerary Image Of The Srinagar Leh Manali Bike Tour" />
                                    </div>
                                </div>

                                {/* Desktop Screen */}
                                <div class="row d-none d-lg-block">
                                    <div class="col-12 col-lg-12">
                                        <ItineraryIcons highestAltitude="18300 ft" distance="120 km" duration="5 hrs" lodging="Hotel/Camp" meal="BF/Dinner" />
                                    </div>

                                    <div class="col-12 col-lg-12 mt-3 mb-3 d-flex align-items-center justify-content-center">
                                        <ItineraryImage size="desktop" src="/img/tours/srinagar-leh-manali/srinagar-leh-manali-day4.jpg" alt="Day Four Itinerary Image Of The Srinagar Leh Manali Bike Tour" />
                                    </div>
                                </div>

                                <ul class="itinerary">
                                    <li><span>Highlights</span>: Khardung La Pass (18,380 ft), Diskit Monastery, Hunder Sand Dunes</li>
                                    <li>Start early and ride to Nubra Valley via Khardung La, one of the highest motorable roads in the world. Enjoy the breathtaking views from the pass and take some memorable photographs. Descend into Nubra Valley and visit the Diskit Monastery, where you can see the magnificent statue of Maitreya Buddha. Continue to Hunder, known for its unique sand dunes and double-humped Bactrian camels.</li>
                                    <li><span>Overnight</span>: Camps/Guesthouse in Hunder, Nubra Valley</li>
                                </ul>

                            </div>
                        </div>
                    </div>

                    <div class="accordion-item">
                        <h3 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#itineraryCollapse5" aria-expanded="false" aria-controls="itineraryCollapse5">
                            Day 05 : Nubra Valley to Turtuk and Back
                            </button>
                        </h3>
                        <div id="itineraryCollapse5" class="accordion-collapse collapse" data-bs-parent="#itineraryAccordion">
                            <div class="accordion-body">
                                <div class="row d-block d-lg-none">
                                    <div class="col-12 col-lg-6">
                                        <ItineraryIcons highestAltitude="10000 ft" distance="130 km" duration="6 hrs" lodging="Hotel/Camp" meal="BF/Dinner" />
                                    </div>

                                    <div class="col-12 col-lg-6 mt-3 mb-3 d-flex align-items-center justify-content-center">
                                        <ItineraryImage src="/img/tours/srinagar-leh-manali/srinagar-leh-manali-day5.jpg" alt="Day Five Itinerary Image Of The Srinagar Leh Manali Bike Tour" />
                                    </div>
                                </div>

                                {/* Desktop Screen */}
                                <div class="row d-none d-lg-block">
                                    <div class="col-12 col-lg-12">
                                        <ItineraryIcons highestAltitude="10000 ft" distance="130 km" duration="6 hrs" lodging="Hotel/Camp" meal="BF/Dinner" />
                                    </div>

                                    <div class="col-12 col-lg-12 mt-3 mb-3 d-flex align-items-center justify-content-center">
                                        <ItineraryImage size="desktop" src="/img/tours/srinagar-leh-manali/srinagar-leh-manali-day5.jpg" alt="Day Five Itinerary Image Of The Srinagar Leh Manali Bike Tour" />
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
                            Day 06 : Nubra Valley to Pangong Lake Via Shayok valley
                            </button>
                        </h3>
                        <div id="itineraryCollapse6" class="accordion-collapse collapse" data-bs-parent="#itineraryAccordion">
                            <div class="accordion-body">
                                <div class="row d-block d-lg-none">
                                    <div class="col-12 col-lg-6">
                                        <ItineraryIcons highestAltitude="14270 ft" distance="160 km" duration="6 hrs" lodging="Cottages" meal="BF/Dinner" />
                                    </div>

                                    <div class="col-12 col-lg-6 mt-3 mb-3 d-flex align-items-center justify-content-center">
                                        <ItineraryImage src="/img/tours/srinagar-leh-manali/srinagar-leh-manali-day6.jpg" alt="Day Six Itinerary Image Of The Srinagar Leh Manali Bike Tour" />
                                    </div>
                                </div>

                                {/* Desktop Screen */}
                                <div class="row d-none d-lg-block">
                                    <div class="col-12 col-lg-12">
                                        <ItineraryIcons highestAltitude="14270 ft" distance="160 km" duration="6 hrs" lodging="Cottages" meal="BF/Dinner" />
                                    </div>

                                    <div class="col-12 col-lg-12 mt-3 mb-3 d-flex align-items-center justify-content-center">
                                        <ItineraryImage size="desktop" src="/img/tours/srinagar-leh-manali/srinagar-leh-manali-day6.jpg" alt="Day Six Itinerary Image Of The Srinagar Leh Manali Bike Tour" />
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
                            Day 07 : Pangong Lake to Leh
                            </button>
                        </h3>
                        <div id="itineraryCollapse7" class="accordion-collapse collapse" data-bs-parent="#itineraryAccordion">
                            <div class="accordion-body">
                                <div class="row d-block d-lg-none">
                                    <div class="col-12 col-lg-6">
                                        <ItineraryIcons highestAltitude="17688 ft" distance="140 km" duration="5 hrs" lodging="Hotel" meal="BF/Dinner" />
                                    </div>

                                    <div class="col-12 col-lg-6 mt-3 mb-3 d-flex align-items-center justify-content-center">
                                        <ItineraryImage src="/img/tours/srinagar-leh-manali/srinagar-leh-manali-day7.jpg" alt="Day Seven Itinerary Image Of The Srinagar Leh Manali Bike Tour" />
                                    </div>
                                </div>

                                {/* Desktop Screen */}
                                <div class="row d-none d-lg-block">
                                    <div class="col-12 col-lg-12">
                                        <ItineraryIcons highestAltitude="17688 ft" distance="140 km" duration="5 hrs" lodging="Hotel" meal="BF/Dinner" />
                                    </div>

                                    <div class="col-12 col-lg-12 mt-3 mb-3 d-flex align-items-center justify-content-center">
                                        <ItineraryImage size="desktop" src="/img/tours/srinagar-leh-manali/srinagar-leh-manali-day7.jpg" alt="Day Seven Itinerary Image Of The Srinagar Leh Manali Bike Tour" />
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
                            Day 08 : Leh to Serchu
                            </button>
                        </h3>
                        <div id="itineraryCollapse8" class="accordion-collapse collapse" data-bs-parent="#itineraryAccordion">
                            <div class="accordion-body">
                                <div class="row d-block d-lg-none">
                                    <div class="col-12 col-lg-6">
                                        <ItineraryIcons highestAltitude="16040 ft" distance="220 km" duration="8 hrs" lodging="Camp" meal="BF/Dinner" />
                                    </div>

                                    <div class="col-12 col-lg-6 mt-3 mb-3 d-flex align-items-center justify-content-center">
                                        <ItineraryImage src="/img/tours/srinagar-leh-manali/srinagar-leh-manali-day8.jpg" alt="Day Eight Itinerary Image Of The Srinagar Leh Manali Bike Tour" />
                                    </div>
                                </div>

                                {/* Desktop Screen */}
                                <div class="row d-none d-lg-block">
                                    <div class="col-12 col-lg-12">
                                        <ItineraryIcons highestAltitude="16040 ft" distance="220 km" duration="8 hrs" lodging="Camp" meal="BF/Dinner" />
                                    </div>

                                    <div class="col-12 col-lg-12 mt-3 mb-3 d-flex align-items-center justify-content-center">
                                        <ItineraryImage size="desktop" src="/img/tours/srinagar-leh-manali/srinagar-leh-manali-day8.jpg" alt="Day Eight Itinerary Image Of The Srinagar Leh Manali Bike Tour" />
                                    </div>
                                </div>

                                <ul class="itinerary">
                                    <li><span>Highlights</span>: Scenic Landscapes, Baralacha La</li>
                                    <li>After breakfast, set off towards Serchu, riding through stunning landscapes and crossing Baralacha La (16,040 ft). The route offers breathtaking views of the mountains and valleys. Arrive in Serchu by evening and relax at the campsite after a long day of riding.</li>
                                    <li><span>Overnight</span>: Camp in Serchu</li>
                                </ul>

                            </div>
                        </div>
                    </div>

                    <div class="accordion-item">
                        <h3 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#itineraryCollapse9" aria-expanded="false" aria-controls="itineraryCollapse9">
                            Day 09 : Serchu to Manali
                            </button>
                        </h3>
                        <div id="itineraryCollapse9" class="accordion-collapse collapse" data-bs-parent="#itineraryAccordion">
                            <div class="accordion-body">
                                <div class="row d-block d-lg-none">
                                    <div class="col-12 col-lg-6">
                                        <ItineraryIcons highestAltitude="6398 ft" distance="150 km" duration="6 hrs" lodging="Hotel" meal="BF/Dinner" />
                                    </div>

                                    <div class="col-12 col-lg-6 mt-3 mb-3 d-flex align-items-center justify-content-center">
                                        <ItineraryImage src="/img/tours/srinagar-leh-manali/srinagar-leh-manali-day9.jpg" alt="Day Nine Itinerary Image Of The Srinagar Leh Manali Bike Tour" />
                                    </div>
                                </div>

                                {/* Desktop Screen */}
                                <div class="row d-none d-lg-block">
                                    <div class="col-12 col-lg-12">
                                        <ItineraryIcons highestAltitude="6398 ft" distance="150 km" duration="6 hrs" lodging="Hotel" meal="BF/Dinner" />
                                    </div>

                                    <div class="col-12 col-lg-12 mt-3 mb-3 d-flex align-items-center justify-content-center">
                                        <ItineraryImage size="desktop" src="/img/tours/srinagar-leh-manali/srinagar-leh-manali-day9.jpg" alt="Day Nine Itinerary Image Of The Srinagar Leh Manali Bike Tour" />
                                    </div>
                                </div>

                                <ul class="itinerary">
                                    <li><span>Highlights</span>: Atal Tunnel, Scenic Views</li>
                                    <li>After an early breakfast, begin your ride towards Manali, passing through Atal tunnel. Enjoy the stunning mountain scenery and the exhilarating ride down to Manali. Arrive in Manali by afternoon, where you can relax and explore the local area.</li>
                                    <li><span>Overnight</span>: Hotel in Manali</li>
                                </ul>

                            </div>
                        </div>
                    </div>

                    <div class="accordion-item">
                        <h3 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#itineraryCollapse10" aria-expanded="false" aria-controls="itineraryCollapse10">
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