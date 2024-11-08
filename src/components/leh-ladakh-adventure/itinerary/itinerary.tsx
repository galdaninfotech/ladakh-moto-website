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
                                        <ItineraryImage src="/img/tours/leh-ladakh-adventure/leh-ladakh-adventure-day1.jpg" alt="Day One Itinerary Image Of The leh-ladakh-adventure Bike Tour" />
                                    </div>
                                </div>

                                {/* Desktop Screen */}
                                <div class="row d-none d-lg-block">
                                    <div class="col-12 col-lg-12">
                                        <ItineraryIcons highestAltitude="11000 ft" distance="20 km" duration="4 hrs" lodging="Hotel" meal="BF/Dinner" />
                                    </div>

                                    <div class="col-12 col-lg-12 mt-3 mb-3 d-flex align-items-center justify-content-center">
                                        <ItineraryImage size="desktop" src="/img/tours/leh-ladakh-adventure/leh-ladakh-adventure-day1.jpg" alt="Day One Itinerary Image Of The leh-ladakh-adventure Bike Tour" />
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
                                        <ItineraryIcons highestAltitude="11000 ft" distance="60 km" duration="5 hrs" lodging="Hotel" meal="BF/Dinner" />
                                    </div>

                                    <div class="col-12 col-lg-6 mt-3 mb-3 d-flex align-items-center justify-content-center">
                                        <ItineraryImage src="/img/tours/leh-ladakh-adventure/leh-ladakh-adventure-day2.jpg" alt="Day Two Itinerary Image Of The leh-ladakh-adventure Bike Tour" />
                                    </div>
                                </div>

                                {/* Desktop Screen */}
                                <div class="row d-none d-lg-block">
                                    <div class="col-12 col-lg-12">
                                        <ItineraryIcons highestAltitude="11000 ft" distance="60 km" duration="5 hrs" lodging="Hotel" meal="BF/Dinner" />
                                    </div>

                                    <div class="col-12 col-lg-12 mt-3 mb-3 d-flex align-items-center justify-content-center">
                                        <ItineraryImage size="desktop" src="/img/tours/leh-ladakh-adventure/leh-ladakh-adventure-day2.jpg" alt="Day Two Itinerary Image Of The leh-ladakh-adventure Bike Tour" />
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
                                        <ItineraryIcons highestAltitude="18300 ft" distance="120 km" duration="6 hrs" lodging="Hotel/Camp" meal="BF/Dinner" />
                                    </div>

                                    <div class="col-12 col-lg-6 mt-3 mb-3 d-flex align-items-center justify-content-center">
                                        <ItineraryImage src="/img/tours/leh-ladakh-adventure/leh-ladakh-adventure-day3.jpg" alt="Day Three Itinerary Image Of The leh-ladakh-adventure Bike Tour" />
                                    </div>
                                </div>

                                {/* Desktop Screen */}
                                <div class="row d-none d-lg-block">
                                    <div class="col-12 col-lg-12">
                                        <ItineraryIcons highestAltitude="18300 ft" distance="120 km" duration="6 hrs" lodging="Hotel/Camp" meal="BF/Dinner" />
                                    </div>

                                    <div class="col-12 col-lg-12 mt-3 mb-3 d-flex align-items-center justify-content-center">
                                        <ItineraryImage size="desktop" src="/img/tours/leh-ladakh-adventure/leh-ladakh-adventure-day3.jpg" alt="Day Three Itinerary Image Of The leh-ladakh-adventure Bike Tour" />
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
                            Day 04 : Nubra Valley to Pangong Lake via Shyok
                            </button>
                        </h3>
                        <div id="itineraryCollapse4" class="accordion-collapse collapse" data-bs-parent="#itineraryAccordion">
                            <div class="accordion-body">
                                <div class="row d-block d-lg-none">
                                    <div class="col-12 col-lg-6">
                                        <ItineraryIcons highestAltitude="13940 ft" distance="160 km" duration="6 hrs" lodging="Cottages" meal="BF/Dinner" />
                                    </div>

                                    <div class="col-12 col-lg-6 mt-3 mb-3 d-flex align-items-center justify-content-center">
                                        <ItineraryImage src="/img/tours/leh-ladakh-adventure/leh-ladakh-adventure-day4.jpg" alt="Day Four Itinerary Image Of The leh-ladakh-adventure Bike Tour" />
                                    </div>
                                </div>

                                {/* Desktop Screen */}
                                <div class="row d-none d-lg-block">
                                    <div class="col-12 col-lg-12">
                                        <ItineraryIcons highestAltitude="13940 ft" distance="160 km" duration="6 hrs" lodging="Cottages" meal="BF/Dinner" />
                                    </div>

                                    <div class="col-12 col-lg-12 mt-3 mb-3 d-flex align-items-center justify-content-center">
                                        <ItineraryImage size="desktop" src="/img/tours/leh-ladakh-adventure/leh-ladakh-adventure-day4.jpg" alt="Day Four Itinerary Image Of The leh-ladakh-adventure Bike Tour" />
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
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#itineraryCollapse5" aria-expanded="false" aria-controls="itineraryCollapse5">
                            Day 05 : Pangong Lake to Leh
                            </button>
                        </h3>
                        <div id="itineraryCollapse5" class="accordion-collapse collapse" data-bs-parent="#itineraryAccordion">
                            <div class="accordion-body">
                                <div class="row d-block d-lg-none">
                                    <div class="col-12 col-lg-6">
                                        <ItineraryIcons highestAltitude="17688 ft" distance="140 km" duration="5 hrs" lodging="Hotel" meal="BF/Dinner" />
                                    </div>

                                    <div class="col-12 col-lg-6 mt-3 mb-3 d-flex align-items-center justify-content-center">
                                        <ItineraryImage src="/img/tours/leh-ladakh-adventure/leh-ladakh-adventure-day5.jpg" alt="Day Five Itinerary Image Of The leh-ladakh-adventure Bike Tour" />
                                    </div>
                                </div>

                                {/* Desktop Screen */}
                                <div class="row d-none d-lg-block">
                                    <div class="col-12 col-lg-12">
                                        <ItineraryIcons highestAltitude="17688 ft" distance="140 km" duration="5 hrs" lodging="Hotel" meal="BF/Dinner" />
                                    </div>

                                    <div class="col-12 col-lg-12 mt-3 mb-3 d-flex align-items-center justify-content-center">
                                        <ItineraryImage size="desktop" src="/img/tours/leh-ladakh-adventure/leh-ladakh-adventure-day5.jpg" alt="Day Five Itinerary Image Of The leh-ladakh-adventure Bike Tour" />
                                    </div>
                                </div>

                                <ul class="itinerary">
                                    <li><span>Highlights</span>: Return Journey, Thiksey Monastery (optional stop)</li>
                                    <li>After breakfast, begin your return journey to Leh. En route, you can choose to stop at Thiksey Monastery, one of the most beautiful monasteries in Ladakh, known for its striking architecture and views. Continue your ride back to Leh, where you can relax and explore any sites you might have missed earlier. Enjoy a farewell dinner, reminiscing about the amazing experiences you’ve had during your tour.</li>
                                    <li><span>Overnight</span>: Hotel in Leh</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="accordion-item">
                        <h3 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#itineraryCollapse8" aria-expanded="false" aria-controls="itineraryCollapse8">
                            Day 06 : Departure From Leh
                            </button>
                        </h3>
                        <div id="itineraryCollapse8" class="accordion-collapse collapse" data-bs-parent="#itineraryAccordion">
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