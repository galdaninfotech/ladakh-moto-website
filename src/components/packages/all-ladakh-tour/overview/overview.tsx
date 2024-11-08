import { component$, useStylesScoped$ } from '@builder.io/qwik';
import styles from './overview.css?inline';
import OverviewIcons from '~/components/overview-icons/overview-icons';
import ItineraryImage from '~/components/itinerary-image';

export default component$(() => {
    useStylesScoped$(styles);

    return (
        <div id="overview">
            <div class="sub-headings">
                <h2>Tour Overview</h2>
            </div>

            {/* Mobile Screen */}
            <div class="row d-block d-lg-none">
                <div class="col-12 col-lg-6">
                    <OverviewIcons duration="8N 9D" highestAltitude="18380 ft" distance="960 km" lodging="Hotel/G.House" meal="BF/Dinner" />
                </div>

                <div class="col-12 col-lg-6 mt-3 mb-3 d-flex align-items-center justify-content-center">
                    <ItineraryImage src="/img/packages/all-ladakh-tour/all-ladakh-tour-overview.jpg" alt="Overview Image Of The All Ladakh Tour Bike Package" />
                </div>
            </div>

            {/* Desktop Screen */}
            <div class="row d-none d-lg-block">
                <div class="col-12 col-lg-12">
                    <OverviewIcons duration="8N 9D" highestAltitude="18380 ft" distance="960 km" lodging="Hotel/G.House" meal="BF/Dinner" />
                </div>

                <div class="col-12 col-lg-12 mt-3 mb-3 d-flex align-items-center justify-content-center">
                    <ItineraryImage size="desktop" src="/img/packages/all-ladakh-tour/all-ladakh-tour-overview.jpg" alt="Overview Image Of The All Ladakh Tour Bike Package" />
                </div>
            </div>


            
            <p>
            This 10-day Ladakh holiday package combines acclimatization, adventure, and exploration across Ladakh's pristine natural and cultural sites. You’ll start with two days in Leh to adjust to the altitude before traveling through the rugged landscapes of Nubra Valley, the vibrant Pangong Lake, the serene Hanle village, and the remote beauty of Tso Moriri Lake. This itinerary is ideal for travelers looking for both Ladakh’s highlights and its secluded, lesser-known gems.
            </p>


            <h3>Tour Highlights:</h3>
            <ul class="overview-tour-highlights">
                <li>Scenic Drives: Cross Khardung La, Chang La, and Taglang La Passes for spectacular mountain views.</li>
                <li>Iconic Landscapes: Experience Nubra Valley’s unique desert, Pangong Lake’s changing colors, Hanle’s serene skies, and Tso Moriri’s peaceful shores.</li>
                <li>Cultural Immersion: Visit Diskit Monastery, ancient palaces, and significant sites around Leh.</li>
                <li>Camel Safari: Ride double-humped camels at the Hunder Sand Dunes in Nubra Valley.</li>
                <li>Stargazing in Hanle: Enjoy one of the clearest night skies in India at Hanle’s observatory.</li>
                <li>Birdwatching: Spot migratory birds at Tso Moriri and Tso Kar lakes.</li>
            </ul>
            

        </div>
    );
});