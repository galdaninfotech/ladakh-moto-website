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
                    <OverviewIcons duration="7N/8D" highestAltitude="18380 ft" distance="930 km" lodging="Hotel/Resort" meal="BF/Dinner" />
                </div>

                <div class="col-12 col-lg-6 mt-3 mb-3 d-flex align-items-center justify-content-center">
                    <ItineraryImage src="/img/packages/ladakh-tour-with-hanle/ladakh-tour-with-hanle-overview.jpg" alt="Overview Image Of The Ladakh Tour With Hanle Bike Package" />
                </div>
            </div>

            {/* Desktop Screen */}
            <div class="row d-none d-lg-block">
                <div class="col-12 col-lg-12">
                    <OverviewIcons duration="7N/8D" highestAltitude="18380 ft" distance="930 km" lodging="Hotel/Resort" meal="BF/Dinner" />
                </div>

                <div class="col-12 col-lg-12 mt-3 mb-3 d-flex align-items-center justify-content-center">
                    <ItineraryImage size="desktop" src="/img/packages/ladakh-tour-with-hanle/ladakh-tour-with-hanle-overview.jpg" alt="Overview Image Of The Ladakh Tour With Hanle Bike Package" />
                </div>
            </div>


            
            <p>
            This 8-day Ladakh holiday package offers a balanced blend of adventure, scenic landscapes, and cultural insights. Starting with two days of acclimatization in Leh, you’ll explore the Nubra Valley’s sand dunes and monasteries, Pangong Lake’s stunning waters, and the secluded Hanle village, renowned for its pristine night skies and astronomy center. Ideal for travelers seeking a comprehensive Ladakh experience, this itinerary provides ample time for sightseeing, relaxation, and stargazing in Hanle.
            </p>


            <h3>Tour Highlights:</h3>
            <ul class="overview-tour-highlights">
                <li>High-Altitude Passes: Drive through Khardung La and Chang La, two of the world’s highest motorable roads.</li>
                <li>Breathtaking Landscapes: Experience the Nubra Valley’s unique desert, Pangong Lake’s vibrant waters, and Hanle’s remote beauty.</li>
                <li>Cultural Immersion: Visit historic monasteries like Diskit, Thiksey, and optional Leh sites.</li>
                <li>Camel Safari: Ride the rare Bactrian camels on Hunder’s white sand dunes.</li>
                <li>Stargazing in Hanle: Experience one of the clearest night skies in India with optional observatory visits.</li>
            </ul>
            

        </div>
    );
});