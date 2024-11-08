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
                    <OverviewIcons duration="7D/8N" highestAltitude="19024 ft" distance="1050 km" lodging="Hotel/Camp" meal="BF/Dinner" />
                </div>

                <div class="col-12 col-lg-6 mt-3 mb-3 d-flex align-items-center justify-content-center">
                    <ItineraryImage src="/img/tours\ladakh-with-umling-la/ladakh-with-umling-la-overview.jpg" alt="Overview Image Of The Ladakh With Umling La Bike Tour" />
                </div>
            </div>

            {/* Desktop Screen */}
            <div class="row d-none d-lg-block">
                <div class="col-12 col-lg-12">
                    <OverviewIcons duration="7D/8N" highestAltitude="19024 ft" distance="1050 km" lodging="Hotel" meal="BF/Dinner" />
                </div>

                <div class="col-12 col-lg-12 mt-3 mb-3 d-flex align-items-center justify-content-center">
                    <ItineraryImage size="desktop" src="/img/tours/ladakh-with-umling-la-overview.jpg" alt="Overview Image Of The Ladakh With Umling La Bike Tour" />
                </div>
            </div>

            <p>
                This 8-day motorbiking adventure takes you through the iconic landscapes of Ladakh, including Nubra Valley, Pangong Lake, and the remote Hanle region. You'll also conquer Umling La Pass, the highest motorable road in the world. This journey combines cultural exploration, high-altitude mountain riding, and breathtaking natural beauty.
            </p>


            <h3>Tour Highlights:</h3>
            <ul class="overview-tour-highlights">
                <li>Conquer the Khardung La and Umling La passes, some of the highest motorable roads in the world.</li>
                <li>Experience the cultural and natural beauty of Nubra Valley, Pangong Lake, and Hanle.</li>
                <li>Ride through remote, high-altitude landscapes like the Changthang Plateau and Puga Valley.</li>
                <li>Witness stunning vistas and starry nights in some of the most untouched regions of Ladakh.</li>
            </ul>

            <p>
                This tour offers the ultimate mix of high-altitude adventure and serene cultural exploration, making it perfect for motorbiking enthusiasts looking to challenge themselves while experiencing the beauty of Ladakh.
            </p>
            

        </div>
    );
});