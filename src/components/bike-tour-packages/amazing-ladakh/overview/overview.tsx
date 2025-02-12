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
                    <OverviewIcons duration="5N/6D" highestAltitude="18380 ft" distance="530 km" lodging="Hotel/Resort" meal="BF/Dinner" />
                </div>

                <div class="col-12 col-lg-6 mt-3 mb-3 d-flex align-items-center justify-content-center">
                    <ItineraryImage src="/img/bike-tour-packages/amazing-ladakh-tour/amazing-ladakh-tour-overview.webp" alt="Overview Image Of The Amazing Ladakh Bike Package" />
                </div>
            </div>

            {/* Desktop Screen */}
            <div class="row d-none d-lg-block">
                <div class="col-12 col-lg-12">
                    <OverviewIcons duration="5N/6D" highestAltitude="18380 ft" distance="530 km" lodging="Hotel/Resort" meal="BF/Dinner" />
                </div>

                <div class="col-12 col-lg-12 mt-3 mb-3 d-flex align-items-center justify-content-center">
                    <ItineraryImage size="desktop" src="/img/bike-tour-packages/amazing-ladakh-tour/amazing-ladakh-tour-overview.webp" alt="Overview Image Of The Amazing Ladakh Bike Package" />
                </div>
            </div>


            
            <p>
                The 6-day tour package in Ladakh is an ideal holiday package for individuals trying to explore the beauty of Ladakh’s regions and its culture. It includes travel tours through the Nubra Valley via Khardung La Pass, Pangong Lake, visit to monasteries and deserts. One can imagine such a vast region to have so much to offer, from tours to comfortable hotels.
            </p>


            <h3>Tour Highlights:</h3>
            <ul class="overview-tour-highlights">
                <li>Scenic Drives: Drive through Khardung La and Chang La Pass.</li>
                <li>Lakes and Valleys: The famous Pangong Lake, desert of Nubra valley, and other areas.</li>
                <li>Cultural Experiences: visit Hemis Monastery, Thiksey Monastery, Diskit Monastery, and other places.</li>
                <li>Adventure: At Hunder Sand Dunes, one can go on a camel safari as well as tour high altitude deserts.</li>
                <li>Leisure Time: When in leh, you can also explore local markets and other places, and relax a bit too.</li>
            </ul>
            

        </div>
    );
});