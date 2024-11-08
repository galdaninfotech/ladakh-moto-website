import { component$, useStylesScoped$ } from '@builder.io/qwik';
import styles from './overview.css?inline';
import ItineraryIcons from '~/components/itinerary-icons/itinerary-icons';
import ItineraryImage from '~/components/itinerary-image';

export default component$(() => {
    useStylesScoped$(styles);

    return (
        <div id="overview">
            <div class="sub-headings d-flex justify-content-between align-items-center">
                <h2>Overview</h2>
                <button class="btnOpenForm">Enquiry</button>
            </div>

            <div class="row d-block d-lg-none">
                <div class="col-12 col-lg-6">
                    <ItineraryIcons highestAltitude="14070 ft" distance="1485 km" duration="9N/10D" lodging="Hotel/Camp" meal="BF/Dinner" />
                </div>

                <div class="col-12 col-lg-6 mt-3 mb-3 d-flex align-items-center justify-content-center">
                    <ItineraryImage src="/img/tours/leh-zangskar-leh/leh-zangskar-leh-overview.jpg" alt="Overview Image Of The Leh Zanskar Leh Bike Tour" />
                </div>
            </div>

            {/* Desktop Screen */}
            <div class="row d-none d-lg-block">
                <div class="col-12 col-lg-12">
                    <ItineraryIcons highestAltitude="14070 ft" distance="1485 km" duration="9N/10D" lodging="Hotel/Camp" meal="BF/Dinner" />
                </div>

                <div class="col-12 col-lg-12 mt-3 mb-3 d-flex align-items-center justify-content-center">
                    <ItineraryImage size="desktop" src="/img/tours/leh-zangskar-leh/leh-zangskar-leh-overview.jpg" alt="Overview Image Of The Leh Zanskar Leh Bike Tour" />
                </div>
            </div>
            
            <p>
                This exciting 10-day motorbiking adventure takes you through the heart of Ladakh and the remote and breathtaking Zanskar Valley. You'll traverse rugged mountain passes, visit remote monasteries, and ride through some of the most challenging and scenic landscapes in the Himalayas. This journey offers a perfect blend of adventure, culture, and nature as you explore the hidden gems of Zanskar and Ladakh.
            </p>


            <h3>Tour Highlights:</h3>
            <ul class="overview-tour-highlights">
                <li>Ride through high-altitude mountain passes like Shingo La, Nakee La, and Lachulung La.</li>
                <li>Explore the remote and culturally rich Zanskar Valley and its monasteries.</li>
                <li>Hike to the stunning cliffside Phuktal Monastery.</li>
                <li>Experience the breathtaking beauty of high-altitude lakes like Tso Kar and Tso Moriri.</li>
                <li>Traverse the rugged terrain of the Changthang Plateau and the majestic Himalayan ranges.</li>
            </ul>

            <p>
                This tour offers an unforgettable adventure for motorbiking enthusiasts, combining the thrill of challenging mountain passes with the serene beauty of remote valleys and pristine lakes.
            </p>
            

        </div>
    );
});