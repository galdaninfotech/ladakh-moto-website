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
                    <ItineraryImage src="/img/bike-tour-packages/all-ladakh-tour/all-ladakh-tour-overview.webp" alt="Overview Image Of The All Ladakh Tour Bike Package" />
                </div>
            </div>

            {/* Desktop Screen */}
            <div class="row d-none d-lg-block">
                <div class="col-12 col-lg-12">
                    <OverviewIcons duration="8N 9D" highestAltitude="18380 ft" distance="960 km" lodging="Hotel/G.House" meal="BF/Dinner" />
                </div>

                <div class="col-12 col-lg-12 mt-3 mb-3 d-flex align-items-center justify-content-center">
                    <ItineraryImage size="desktop" src="/img/bike-tour-packages/all-ladakh-tour/all-ladakh-tour-overview.webp" alt="Overview Image Of The All Ladakh Tour Bike Package" />
                </div>
            </div>


            
            <p>
                This 10-day Ladakh tour package includes acclimatization, tourism, and adventure in different parts of Ladakh. During the tour, you will spend two days in Leh and adapt to the high altitude while preparing to visit Nubra Valley, Pangong Lake, Hanle village, and Tso Moriri Lake. Such a trip will suit those who want to visit not only the must-see places of Ladakh but also explore places off the beaten path.
            </p>


            <h3>Tour Highlights:</h3>
            <ul class="overview-tour-highlights">
                <li>Breathtaking views await at Khardung La and Taglang La Passes.</li>
                <li>Enjoy Nubra Valley's desert, the colors of the Pangong Lake, tranquil skies in Hanle, and the Tso Moriri Lake's shores.</li>
                <li>Cultural exploration: Take a trip to - Diskit Monastery, old kingdoms’ palaces and other historical locations near Leh.</li>
                <li>Camel Riding: Try riding double-humped camels at the sand dunes of Hunder in the Nubra Valley.</li>
                <li>Stargazing in Hanle: One of the best night sky views in India can be found at the Hanle telescope site.</li>
                <li>Birdwatching: Find migratory birds on the shores of Tso Moriri and Tso Kar lakes.</li>
            </ul>
            

        </div>
    );
});