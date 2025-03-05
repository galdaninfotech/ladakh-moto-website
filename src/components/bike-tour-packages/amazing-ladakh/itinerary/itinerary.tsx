import { component$, useStylesScoped$ } from '@builder.io/qwik';
import ItineraryImage from "~/components/itinerary-image";
import styles from './itinerary.css?inline';
import ItineraryIcons from '~/components/itinerary-icons/itinerary-icons';
import { handleAccordionScrollIntoView } from '~/utils/handleAccordionScrollIntoView';

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
                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#itineraryCollapse1" aria-expanded="true" aria-controls="itineraryCollapse1" onClick$={handleAccordionScrollIntoView}>
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
                                        <ItineraryImage src="/img/bike-tour-packages/amazing-ladakh-tour/amazing-ladakh-tour-day1.webp" alt="Day One Itinerary Image Of The Amazing Ladakh Bike Package" />
                                    </div>
                                </div>

                                {/* Desktop Screen */}
                                <div class="row d-none d-lg-block">
                                    <div class="col-12 col-lg-12">
                                        <ItineraryIcons duration="3-4 hrs" highestAltitude="18380 ft" distance="20 km" lodging="Hotel" meal="BF/Dinner" />
                                    </div>

                                    <div class="col-12 col-lg-12 mt-3 mb-3 d-flex align-items-center justify-content-center">
                                        <ItineraryImage size="desktop" src="/img/bike-tour-packages/amazing-ladakh-tour/amazing-ladakh-tour-day1.webp" alt="Day One Itinerary Image Of The Amazing Ladakh Bike Package" />
                                    </div>
                                </div>

                                <ul class="itinerary">
                                    <li><span>Activity</span>: Acclimatization and rest</li>
                                    <li><span>Highlights</span>:Introduction to Leh and light local exploration (if acclimatized).</li>
                                    <li> Arrival in Leh: Travelers will be picked from Leh Airport and then led to their hotel. </li>
                                    <li>Rest and Acclimatization: Leh has an unusually high altitude, therefore you will have to take good rest on the first day to acclimatize to the high altitude of Leh. </li>
                                    <li>Optional Evening Leisure:  One can go see the local market of Leh, Shanti Stupa, or the Leh Palace .  </li>
                                    <li><span>Overnight</span>: Hotel in Leh</li>
                                </ul>

                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h3 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#itineraryCollapse2" aria-expanded="false" aria-controls="itineraryCollapse2" onClick$={handleAccordionScrollIntoView}>
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
                                        <ItineraryImage src="/img/bike-tour-packages/amazing-ladakh-tour/amazing-ladakh-tour-day2.webp" alt="Day Two Itinerary Image Of The Amazing Ladakh Bike Package" />
                                    </div>
                                </div>

                                {/* Desktop Screen */}
                                <div class="row d-none d-lg-block">
                                    <div class="col-12 col-lg-12">
                                        <ItineraryIcons duration="3-4 Hr" highestAltitude="11000 ft" distance="60 km" lodging="Hotel" meal="BF/Dinner" />
                                    </div>

                                    <div class="col-12 col-lg-12 mt-3 mb-3 d-flex align-items-center justify-content-center">
                                        <ItineraryImage size="desktop" src="/img/bike-tour-packages/amazing-ladakh-tour/amazing-ladakh-tour-day2.webp" alt="Day Two Itinerary Image Of The Amazing Ladakh Bike Package" />
                                    </div>
                                </div>

                                <ul class="itinerary">
                                    <li><span>Highlights</span>: Today, we continue with our acclimatization with a visit to some of the splendid sights of Leh. </li>
                                    <li>Hall of Fame: A place of honor praising the efforts of the Indian Army in this territory. </li>
                                    <li>Gurudwara Pathar Sahib: Another holy site for Sikhs.</li>
                                    <li>Magnetic Hill: A visual trick which is not normal as the as the hill has a magnetic pull. </li>
                                    <li>Sangam Point: Come across the confluence of the Indus and Zanskar Rivers.</li>
                                    <li>Return to Leh: No activities planned for the evening enabling sightseeing of local markets and some rest. </li>
                                    <li><span>Overnight</span>: Hotel in Leh</li>
                                </ul>

                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h3 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#itineraryCollapse3" aria-expanded="false" aria-controls="itineraryCollapse3" onClick$={handleAccordionScrollIntoView}>
                            Day 03 : Leh to Nubra Valley via Khardung La Pass
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
                                        <ItineraryImage src="/img/bike-tour-packages/amazing-ladakh-tour/amazing-ladakh-tour-day3.webp" alt="Day Three Itinerary Image Of The Amazing Ladakh Bike Package" />
                                    </div>
                                </div>

                                {/* Desktop Screen */}
                                <div class="row d-none d-lg-block">
                                    <div class="col-12 col-lg-12">
                                        <ItineraryIcons duration="5-6 Hr" highestAltitude="18380 ft" distance="120 km" lodging="Hotel/Resort" meal="BF/Dinner" />
                                    </div>

                                    <div class="col-12 col-lg-12 mt-3 mb-3 d-flex align-items-center justify-content-center">
                                        <ItineraryImage size="desktop" src="/img/bike-tour-packages/amazing-ladakh-tour/amazing-ladakh-tour-day3.webp" alt="Day Three Itinerary Image Of The Amazing Ladakh Bike Package" />
                                    </div>
                                </div>

                                <ul class="itinerary">
                                    <li><span>Highlights</span>: Gripping drive across Khardung La, cultural experience of Diskit Monastery and camel safari at Hunder. </li>
                                    <li>Breakfast and Departure: Take off for Nubra Valley, the Khardung La Pass, one of the highest motor able roads – 18,380 feet. </li>
                                    <li>Khardung La: A brief stop to take some photos and allow more time for acclimatizing.</li>
                                    <li>Diskit Monastery: Proceed to Diskit Monastery, here stands an eye-catching 32 meter high statue of Maitreya Buddha overlooking the wide valley. </li>
                                    <li>Hunder Sand Dunes: Go for a double humped Bactrian camel safari on the Sand dunes of Hunder.</li>
                                    <li><span>Overnight</span>: Hotel/Resort in Hunder, Nubra Valley</li>
                                </ul>

                            </div>
                        </div>
                    </div>

                    <div class="accordion-item">
                        <h3 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#itineraryCollapse4" aria-expanded="false" aria-controls="itineraryCollapse4" onClick$={handleAccordionScrollIntoView}>
                            Day 04 : Nubra Valley to Pangong Lake via Shyok Route
                            </button>
                        </h3>
                        <div id="itineraryCollapse4" class="accordion-collapse collapse" data-bs-parent="#itineraryAccordion">
                            <div class="accordion-body">
                                {/* Mobile Screen */}
                                <div class="row d-block d-lg-none">
                                    <div class="col-12 col-lg-6">
                                        <ItineraryIcons duration="5-6 Hr" highestAltitude="14272 ft" distance="180 km" lodging="Cottage/Camp" meal="BF/Dinner" />
                                    </div>

                                    <div class="col-12 col-lg-6 mt-3 mb-3 d-flex align-items-center justify-content-center">
                                        <ItineraryImage src="/img/bike-tour-packages/amazing-ladakh-tour/amazing-ladakh-tour-day4.webp" alt="Day Four Itinerary Image Of The Amazing Ladakh Bike Package" />
                                    </div>
                                </div>

                                {/* Desktop Screen */}
                                <div class="row d-none d-lg-block">
                                    <div class="col-12 col-lg-12">
                                        <ItineraryIcons duration="5-6 Hr" highestAltitude="14272 ft" distance="180 km" lodging="Cottage/Camp" meal="BF/Dinner" />
                                    </div>

                                    <div class="col-12 col-lg-12 mt-3 mb-3 d-flex align-items-center justify-content-center">
                                        <ItineraryImage size="desktop" src="/img/bike-tour-packages/amazing-ladakh-tour/amazing-ladakh-tour-day4.webp" alt="Day Four Itinerary Image Of The Amazing Ladakh Bike Package" />
                                    </div>
                                </div>

                                <ul class="itinerary">
                                    <li><span>Highlights</span>: Panoramic view while driving through Shyok route and wonderful evening at the Pangong Lake.</li>
                                    <li>Breakfast and Departure: Drive to Pangong Lake via Shyok valley.</li>
                                    <li>Arrival at Pangong Lake: A time to check in the camp beside the stunning lake famous for its colors.</li>
                                    <li>Evening at Leisure: Sit by the lake and click images relaxing in the calming environment.</li>
                                    <li><span>Overnight</span>: Cottages at Pangong lake</li>
                                </ul>

                            </div>
                        </div>
                    </div>

                    <div class="accordion-item">
                        <h3 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#itineraryCollapse5" aria-expanded="false" aria-controls="itineraryCollapse5" onClick$={handleAccordionScrollIntoView}>
                            Day 05 : Pangong Lake to Leh via Chang La Pass
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
                                        <ItineraryImage src="/img/bike-tour-packages/amazing-ladakh-tour/amazing-ladakh-tour-day5.webp" alt="Day Five Itinerary Image Of The Amazing Ladakh Bike Package" />
                                    </div>
                                </div>

                                {/* Desktop Screen */}
                                <div class="row d-none d-lg-block">
                                    <div class="col-12 col-lg-12">
                                        <ItineraryIcons duration="7D/8N" highestAltitude="17688 ft" distance="150 km" lodging="Hotel" meal="BF/Dinner" />
                                    </div>

                                    <div class="col-12 col-lg-12 mt-3 mb-3 d-flex align-items-center justify-content-center">
                                        <ItineraryImage size="desktop" src="/img/bike-tour-packages/amazing-ladakh-tour/amazing-ladakh-tour-day5.webp" alt="Day Five Itinerary Image Of The Amazing Ladakh Bike Package" />
                                    </div>
                                </div>

                                <ul class="itinerary">
                                    <li><span>Highlights</span>: : A wonderful day start is created by the sunrise at the lake which looks mesmerizing. </li>
                                    <li>Breakfast and Departure: Drive back to Leh via Chang La Pass (17,688 ft) after enjoying breakfast. </li>
                                    <li>Hemis Monastery: Discover ancient sculptures and detailed paintings by visiting one of the oldest and the wealthiest monastery in Ladakh, Hemis Monastery.  </li>
                                    <li>Thiksey Monastery (Optional): In addition, admire the great panoramas of the Indus Valley from the Thiksey Monastery located on a hilltop. </li>
                                    <li><span>Overnight</span>: Hotel in Leh</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="accordion-item">
                        <h3 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#itineraryCollapse6" aria-expanded="false" aria-controls="itineraryCollapse6" onClick$={handleAccordionScrollIntoView}>
                            Day 06 : Departure from Leh
                            </button>
                        </h3>
                        <div id="itineraryCollapse6" class="accordion-collapse collapse" data-bs-parent="#itineraryAccordion">
                            <div class="accordion-body">

                                <p>Breakfast and Check-Out: Transfer to Leh Airport for departure.Departure with memories of Nubra Valley, Pangong Lake, Hanle, Tso Moriri, and the beautiful landscapes of Ladakh.</p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
});