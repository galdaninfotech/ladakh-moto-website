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
                    <OverviewIcons duration="7N/8D" highestAltitude="18380 ft" distance="530 km" lodging="Hotel/Resort" meal="BF/Dinner" />
                </div>

                <div class="col-12 col-lg-6 mt-3 mb-3 d-flex align-items-center justify-content-center">
                    <ItineraryImage src="/img/packages/amazing-ladakh/amazing-ladakh-overview.jpg" alt="Overview Image Of The Amazing Ladakh Bike Package" />
                </div>
            </div>

            {/* Desktop Screen */}
            <div class="row d-none d-lg-block">
                <div class="col-12 col-lg-12">
                    <OverviewIcons duration="7N/8D" highestAltitude="18380 ft" distance="530 km" lodging="Hotel/Resort" meal="BF/Dinner" />
                </div>

                <div class="col-12 col-lg-12 mt-3 mb-3 d-flex align-items-center justify-content-center">
                    <ItineraryImage size="desktop" src="/img/packages/amazing-ladakh/amazing-ladakh-overview.jpg" alt="Overview Image Of The Amazing Ladakh Bike Package" />
                </div>
            </div>


            
            <p>
            This 6-day Ladakh holiday package is designed for travelers seeking an immersive experience in Ladakh's stunning landscapes, culture, and serene beauty. Highlights include journeys through the Nubra Valley via Khardung La Pass, the magical Pangong Lake, and cultural treasures like ancient monasteries and high-altitude deserts. This tour provides a well-rounded adventure with comfortable accommodations, scenic drives, and ample time for exploration and relaxation.
            </p>


            <h3>Tour Highlights:</h3>
            <ul class="overview-tour-highlights">
                <li>Scenic Drives: Breathtaking drives through Khardung La and Chang La passes.</li>
                <li>Lakes and Valleys: Pangong Lake’s changing colors, the Nubra Valley desert, and unique landscapes.</li>
                <li>Cultural Experiences: Visits to prominent monasteries like Hemis, Thiksey, and Diskit.</li>
                <li>Adventure: Camel safari at Hunder Sand Dunes and exploration of high-altitude deserts.</li>
                <li>Leisure Time: Opportunities to relax and explore Leh’s local markets and scenic spots.</li>
            </ul>
            

        </div>
    );
});