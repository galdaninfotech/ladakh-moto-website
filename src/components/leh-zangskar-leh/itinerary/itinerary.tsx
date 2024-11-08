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
                                        <ItineraryImage src="/img/tours/leh-zangskar-leh/leh-zangskar-leh-day1.jpg" alt="Day One Itinerary Image Of The Leh Zanskar Leh Bike Tour" />
                                    </div>
                                </div>

                                {/* Desktop Screen */}
                                <div class="row d-none d-lg-block">
                                    <div class="col-12 col-lg-12">
                                        <ItineraryIcons highestAltitude="11000 ft" distance="20 km" duration="4 hrs" lodging="Hotel" meal="BF/Dinner" />
                                    </div>

                                    <div class="col-12 col-lg-12 mt-3 mb-3 d-flex align-items-center justify-content-center">
                                        <ItineraryImage size="desktop" src="/img/tours/leh-zangskar-leh/leh-zangskar-leh-day1.jpg" alt="Day One Itinerary Image Of The Ladakh With Umling La Bike Tour" />
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
                            Day 02 : Leh to Lamayuru
                            </button>
                        </h3>
                        <div id="itineraryCollapse2" class="accordion-collapse collapse" data-bs-parent="#itineraryAccordion">
                            <div class="accordion-body">
                                <div class="row d-block d-lg-none">
                                    <div class="col-12 col-lg-6">
                                        <ItineraryIcons highestAltitude="11500 ft" distance="125 km" duration="5 hrs" lodging="Hotel" meal="BF/Dinner" />
                                    </div>

                                    <div class="col-12 col-lg-6 mt-3 mb-3 d-flex align-items-center justify-content-center">
                                        <ItineraryImage src="/img/tours/leh-zangskar-leh/leh-zangskar-leh-day2.jpg" alt="Day Two Itinerary Image Of The Ladakh With Umling La Bike Tour" />
                                    </div>
                                </div>

                                {/* Desktop Screen */}
                                <div class="row d-none d-lg-block">
                                    <div class="col-12 col-lg-12">
                                        <ItineraryIcons highestAltitude="11500 ft" distance="125 km" duration="5 hrs" lodging="Hotel" meal="BF/Dinner" />
                                    </div>

                                    <div class="col-12 col-lg-12 mt-3 mb-3 d-flex align-items-center justify-content-center">
                                        <ItineraryImage size="desktop" src="/img/tours/leh-zangskar-leh/leh-zangskar-leh-day2.jpg" alt="Day Two Itinerary Image Of The Ladakh With Umling La Bike Tour" />
                                    </div>
                                </div>

                                <ul class="itinerary">
                                    <li><span>Highlights</span>: Magnetic Hill, Basgo Fort, Lamayuru Monastery</li>
                                    <li>•	Begin your motorbiking journey by heading west towards Lamayuru, one of the most ancient and iconic monasteries in Ladakh. En route, stop at Magnetic Hill, a spot where vehicles appear to roll uphill against gravity. Visit the ruins of Basgo Fort, a former seat of Ladakhi kings. Reach Lamayuru Monastery, known for its unique lunar-like landscape called "Moonland."</li>
                                    <li><span>Overnight</span>: Hotel/guest house in Lamayuru</li>
                                </ul>

                            </div>
                        </div>
                    </div>

                    <div class="accordion-item">
                        <h3 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#itineraryCollapse3" aria-expanded="false" aria-controls="itineraryCollapse3">
                            Day 03 : Lamayuru to Padum
                            </button>
                        </h3>
                        <div id="itineraryCollapse3" class="accordion-collapse collapse" data-bs-parent="#itineraryAccordion">
                            <div class="accordion-body">
                                <div class="row d-block d-lg-none">
                                    <div class="col-12 col-lg-6">
                                        <ItineraryIcons highestAltitude="13478 ft" distance="200 km" duration="8 hrs" lodging="Hotel" meal="BF/Dinner" />
                                    </div>

                                    <div class="col-12 col-lg-6 mt-3 mb-3 d-flex align-items-center justify-content-center">
                                        <ItineraryImage src="/img/tours/leh-zangskar-leh/leh-zangskar-leh-day3.jpg" alt="Day Three Itinerary Image Of The Ladakh With Umling La Bike Tour" />
                                    </div>
                                </div>

                                {/* Desktop Screen */}
                                <div class="row d-none d-lg-block">
                                    <div class="col-12 col-lg-12">
                                        <ItineraryIcons highestAltitude="13478 ft" distance="200 km" duration="8 hrs" lodging="Hotel" meal="BF/Dinner" />
                                    </div>

                                    <div class="col-12 col-lg-12 mt-3 mb-3 d-flex align-items-center justify-content-center">
                                        <ItineraryImage size="desktop" src="/img/tours/leh-zangskar-leh/leh-zangskar-leh-day3.jpg" alt="Day Three Itinerary Image Of The Ladakh With Umling La Bike Tour" />
                                    </div>
                                </div>

                                <ul class="itinerary">
                                    <li><span>Highlights</span>: Fotu La Pass (13,478 ft), Namika La Pass (12,139 ft), Rangdum Monastery, Suru Valley</li>
                                    <li>•	Today’s ride takes you deeper into the remote and stunning Zanskar Valley. Ride over the scenic Fotu La and Namika La passes before entering the Suru Valley, a lush green oasis with breathtaking views of the Nun-Kun peaks. Visit the ancient Rangdum Monastery, which is dramatically perched on a hilltop, and then continue towards Padum, the capital of Zanskar.</li>
                                    <li><span>Overnight</span>: Hotel/Guesthouse in Padum, Zangskar Valley</li>
                                </ul>

                            </div>
                        </div>
                    </div>

                    <div class="accordion-item">
                        <h3 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#itineraryCollapse4" aria-expanded="false" aria-controls="itineraryCollapse4">
                            Day 04 : Padum to Purne
                            </button>
                        </h3>
                        <div id="itineraryCollapse4" class="accordion-collapse collapse" data-bs-parent="#itineraryAccordion">
                            <div class="accordion-body">
                                <div class="row d-block d-lg-none">
                                    <div class="col-12 col-lg-6">
                                        <ItineraryIcons highestAltitude="12000 ft" distance="65 km" duration="4 hrs" lodging="Camp" meal="BF/Dinner" />
                                    </div>

                                    <div class="col-12 col-lg-6 mt-3 mb-3 d-flex align-items-center justify-content-center">
                                        <ItineraryImage src="/img/tours/leh-zangskar-leh/leh-zangskar-leh-day4.jpg" alt="Day Four Itinerary Image Of The Ladakh With Umling La Bike Tour" />
                                    </div>
                                </div>

                                {/* Desktop Screen */}
                                <div class="row d-none d-lg-block">
                                    <div class="col-12 col-lg-12">
                                        <ItineraryIcons highestAltitude="12000 ft" distance="65 km" duration="4 hrs" lodging="Camp" meal="BF/Dinner" />
                                    </div>

                                    <div class="col-12 col-lg-12 mt-3 mb-3 d-flex align-items-center justify-content-center">
                                        <ItineraryImage size="desktop" src="/img/tours/leh-zangskar-leh/leh-zangskar-leh-day4.jpg" alt="Day Four Itinerary Image Of The Ladakh With Umling La Bike Tour" />
                                    </div>
                                </div>

                                <ul class="itinerary">
                                    <li><span>Highlights</span>: Zanskar River, Bardan Monastery, Remote Villages</li>
                                    <li>•	After breakfast, ride to Purne, a remote village that serves as the base for the Phuktal Monastery trek. The road follows the scenic Zanskar River, and en route, visit the Bardan Monastery, known for its giant prayer wheels. The ride offers a mix of dirt trails and challenging terrain, leading to the peaceful village of Purne.</li>
                                    <li><span>Overnight</span>: Camps/Guesthouse in Purne</li>
                                </ul>

                            </div>
                        </div>
                    </div>

                    <div class="accordion-item">
                        <h3 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#itineraryCollapse5" aria-expanded="false" aria-controls="itineraryCollapse5">
                            Day 05 : Hiking Day – Phuktal Monastery and back to Purne
                            </button>
                        </h3>
                        <div id="itineraryCollapse5" class="accordion-collapse collapse" data-bs-parent="#itineraryAccordion">
                            <div class="accordion-body">
                                <div class="row d-block d-lg-none">
                                    <div class="col-12 col-lg-6">
                                        <ItineraryIcons highestAltitude="12000 ft" distance="14 km" duration="5 hrs" lodging="Camp" meal="BF/Dinner" />
                                    </div>

                                    <div class="col-12 col-lg-6 mt-3 mb-3 d-flex align-items-center justify-content-center">
                                        <ItineraryImage src="/img/tours/leh-zangskar-leh/leh-zangskar-leh-day5.jpg" alt="Day Five Itinerary Image Of The Ladakh With Umling La Bike Tour" />
                                    </div>
                                </div>

                                {/* Desktop Screen */}
                                <div class="row d-none d-lg-block">
                                    <div class="col-12 col-lg-12">
                                        <ItineraryIcons highestAltitude="12000 ft" distance="14 km" duration="5 hrs" lodging="Camp" meal="BF/Dinner" />
                                    </div>

                                    <div class="col-12 col-lg-12 mt-3 mb-3 d-flex align-items-center justify-content-center">
                                        <ItineraryImage size="desktop" src="/img/tours/leh-zangskar-leh/leh-zangskar-leh-day5.jpg" alt="Day Five Itinerary Image Of The Ladakh With Umling La Bike Tour" />
                                    </div>
                                </div>

                                <ul class="itinerary">
                                    <li><span>Highlights</span>: Phuktal Monastery, Hanging Monastery, Zanskar Gorge</li>
                                    <li>•	Today is a day of exploration on foot. Hike to the spectacular Phuktal Monastery, which is built into the cliffs of a gorge and overlooks the Tsarap River. This 12th-century monastery is one of the most remote in the world and offers stunning views of the surrounding valley. After spending time at the monastery, hike back to Purne.</li>
                                    <li><span>Overnight</span>: Homestay in Purne</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="accordion-item">
                        <h3 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#itineraryCollapse6" aria-expanded="false" aria-controls="itineraryCollapse6">
                            Day 06 : Purne to Sarchu
                            </button>
                        </h3>
                        <div id="itineraryCollapse6" class="accordion-collapse collapse" data-bs-parent="#itineraryAccordion">
                            <div class="accordion-body">
                                <div class="row d-block d-lg-none">
                                    <div class="col-12 col-lg-6">
                                        <ItineraryIcons highestAltitude="16700 ft" distance="250 km" duration="8 hrs" lodging="Camp" meal="BF/Dinner" />
                                    </div>

                                    <div class="col-12 col-lg-6 mt-3 mb-3 d-flex align-items-center justify-content-center">
                                        <ItineraryImage src="/img/tours/leh-zangskar-leh/leh-zangskar-leh-day6.jpg" alt="Day Six Itinerary Image Of The Ladakh With Umling La Bike Tour" />
                                    </div>
                                </div>

                                {/* Desktop Screen */}
                                <div class="row d-none d-lg-block">
                                    <div class="col-12 col-lg-12">
                                        <ItineraryIcons highestAltitude="16700 ft" distance="250 km" duration="8 hrs" lodging="Camp" meal="BF/Dinner" />
                                    </div>

                                    <div class="col-12 col-lg-12 mt-3 mb-3 d-flex align-items-center justify-content-center">
                                        <ItineraryImage size="desktop" src="/img/tours/leh-zangskar-leh/leh-zangskar-leh-day6.jpg" alt="Day Six Itinerary Image Of The Ladakh With Umling La Bike Tour" />
                                    </div>
                                </div>

                                <ul class="itinerary">
                                    <li><span>Highlights</span>: Shingo La Pass (16,700 ft), Lahaul Valley</li>
                                    <li>•	Today’s ride is challenging as you cross the high-altitude Shingo La Pass, which connects Zanskar to Lahaul Valley. The pass offers panoramic views of the Himalayas, with glaciers and snow-capped peaks surrounding you. Descend into the beautiful Lahaul Valley and continue to Sarchu, a popular stopover for travelers on the Manali-Leh highway.</li>
                                    <li><span>Overnight</span>: Camp in Serchu</li>
                                </ul>

                            </div>
                        </div>
                    </div>

                    <div class="accordion-item">
                        <h3 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#itineraryCollapse7" aria-expanded="false" aria-controls="itineraryCollapse7">
                            Day 07 : Sarchu to Tso Kar 
                            </button>
                        </h3>
                        <div id="itineraryCollapse7" class="accordion-collapse collapse" data-bs-parent="#itineraryAccordion">
                            <div class="accordion-body">
                                <div class="row d-block d-lg-none">
                                    <div class="col-12 col-lg-6">
                                        <ItineraryIcons highestAltitude="16616 ft" distance="130 km" duration="5 hrs" lodging="Camp" meal="BF/Dinner" />
                                    </div>

                                    <div class="col-12 col-lg-6 mt-3 mb-3 d-flex align-items-center justify-content-center">
                                        <ItineraryImage src="/img/tours/leh-zangskar-leh/leh-zangskar-leh-day7.jpg" alt="Day Seven Itinerary Image Of The Ladakh With Umling La Bike Tour" />
                                    </div>
                                </div>

                                {/* Desktop Screen */}
                                <div class="row d-none d-lg-block">
                                    <div class="col-12 col-lg-12">
                                        <ItineraryIcons highestAltitude="16616 ft" distance="130 km" duration="5 hrs" lodging="Camp" meal="BF/Dinner" />
                                    </div>

                                    <div class="col-12 col-lg-12 mt-3 mb-3 d-flex align-items-center justify-content-center">
                                        <ItineraryImage size="desktop" src="/img/tours/leh-zangskar-leh/leh-zangskar-leh-day7.jpg" alt="Day Seven Itinerary Image Of The Ladakh With Umling La Bike Tour" />
                                    </div>
                                </div>

                                <ul class="itinerary">
                                    <li><span>Highlights</span>:Gata Loops, Nakee La Pass (15,547 ft), Lachulung La Pass (16,616 ft), Tso Kar Lake</li>
                                    <li>Ride through the famous Gata Loops, a series of 21 hairpin bends that take you up to Nakee La and Lachulung La passes. The journey offers stunning views of the barren high-altitude desert. After descending from the passes, reach the mesmerizing Tso Kar Lake, known for its saltwater shores and abundant wildlife, especially migratory birds.</li>
                                    <li><span>Overnight</span>: Camp near Tsokar Lake</li>
                                </ul>

                            </div>
                        </div>
                    </div>

                    <div class="accordion-item">
                        <h3 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#itineraryCollapse8" aria-expanded="false" aria-controls="itineraryCollapse8">
                            Day 08 : Tso Kar to Tso Moriri Lake 
                            </button>
                        </h3>
                        <div id="itineraryCollapse8" class="accordion-collapse collapse" data-bs-parent="#itineraryAccordion">
                            <div class="accordion-body">
                                <div class="row d-block d-lg-none">
                                    <div class="col-12 col-lg-6">
                                        <ItineraryIcons highestAltitude="14836 ft" distance="97 km" duration="5 hrs" lodging="Camp" meal="BF/Dinner" />
                                    </div>

                                    <div class="col-12 col-lg-6 mt-3 mb-3 d-flex align-items-center justify-content-center">
                                        <ItineraryImage src="/img/tours/leh-zangskar-leh/leh-zangskar-leh-day8.jpg" alt="Day Eight Itinerary Image Of The Ladakh With Umling La Bike Tour" />
                                    </div>
                                </div>

                                {/* Desktop Screen */}
                                <div class="row d-none d-lg-block">
                                    <div class="col-12 col-lg-12">
                                        <ItineraryIcons highestAltitude="14836 ft" distance="97 km" duration="5 hrs" lodging="Camp" meal="BF/Dinner" />
                                    </div>

                                    <div class="col-12 col-lg-12 mt-3 mb-3 d-flex align-items-center justify-content-center">
                                        <ItineraryImage size="desktop" src="/img/tours/leh-zangskar-leh/leh-zangskar-leh-day8.jpg" alt="Day Eight Itinerary Image Of The Ladakh With Umling La Bike Tour" />
                                    </div>
                                </div>

                                <ul class="itinerary">
                                    <li><span>Highlights</span>:Changthang Plateau, Korzok Village, Tso Moriri Lake</li>
                                    <li>After breakfast, continue your journey across the desolate Changthang Plateau to reach the beautiful Tso Moriri Lake, one of the largest high-altitude lakes in India. Visit Korzok Village, located along the lake, where you can interact with local nomadic herders. Spend the afternoon exploring the shores of Tso Moriri, with its turquoise waters and surrounding snow-capped peaks.</li>
                                    <li><span>Overnight</span>: Camp near Tsomoriri Lake</li>
                                </ul>

                            </div>
                        </div>
                    </div>

                    <div class="accordion-item">
                        <h3 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#itineraryCollapse9" aria-expanded="false" aria-controls="itineraryCollapse9">
                            Day 09 : Tso Moriri to Leh via Puga Valley 
                            </button>
                        </h3>
                        <div id="itineraryCollapse9" class="accordion-collapse collapse" data-bs-parent="#itineraryAccordion">
                            <div class="accordion-body">
                                <div class="row d-block d-lg-none">
                                    <div class="col-12 col-lg-6">
                                        <ItineraryIcons highestAltitude="14836 ft" distance="220 km" duration="7 hrs" lodging="Hotel" meal="BF/Dinner" />
                                    </div>

                                    <div class="col-12 col-lg-6 mt-3 mb-3 d-flex align-items-center justify-content-center">
                                        <ItineraryImage src="/img/tours/leh-zangskar-leh/leh-zangskar-leh-day9.jpg" alt="Day Nine Itinerary Image Of The Ladakh With Umling La Bike Tour" />
                                    </div>
                                </div>

                                {/* Desktop Screen */}
                                <div class="row d-none d-lg-block">
                                    <div class="col-12 col-lg-12">
                                        <ItineraryIcons highestAltitude="14836 ft" distance="220 km" duration="7 hrs" lodging="Hotel" meal="BF/Dinner" />
                                    </div>

                                    <div class="col-12 col-lg-12 mt-3 mb-3 d-flex align-items-center justify-content-center">
                                        <ItineraryImage size="desktop" src="/img/tours/leh-zangskar-leh/leh-zangskar-leh-day9.jpg" alt="Day Nine Itinerary Image Of The Ladakh With Umling La Bike Tour" />
                                    </div>
                                </div>

                                <ul class="itinerary">
                                    <li><span>Highlights</span>:Puga Valley, Hot Springs, Thiksey Monastery</li>
                                    <li>Ride back to Leh through the scenic Puga Valley, known for its geothermal springs and vast landscapes. En route, stop at Thiksey Monastery, one of Ladakh’s largest and most beautiful monasteries, built on a hill resembling the Potala Palace in Lhasa. Reach Leh by evening, where you can relax and explore the local markets.</li>
                                    <li><span>Overnight</span>: Hotel in Leh</li>
                                </ul>

                            </div>
                        </div>
                    </div>
                   

                    <div class="accordion-item">
                        <h3 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#itineraryCollapse10" aria-expanded="false" aria-controls="itineraryCollapse10">
                            Day 10 : Departure From Leh
                            </button>
                        </h3>
                        <div id="itineraryCollapse10" class="accordion-collapse collapse" data-bs-parent="#itineraryAccordion">
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