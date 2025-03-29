import { component$, useStylesScoped$ } from '@builder.io/qwik';
import styles from './overview.css?inline';
import ItineraryImage from '~/components/itinerary-image';
import OverviewIcons from '~/components/overview-icons/overview-icons';

export default component$(() => {
    useStylesScoped$(styles);

    return (
        <div id="overview">
            <div class="sub-headings d-flex justify-content-between align-items-center">
                <h2>Overview</h2>
            </div>

            <div class="row d-block d-lg-none">
                <div class="col-12 col-lg-6">
                    <OverviewIcons highestAltitude="18300 ft" distance="720 km" duration="6N/7D" lodging="Hotel/Camp" meal="BF/Dinner" />
                </div>

                <div class="col-12 col-lg-6 mt-3 mb-3 d-flex align-items-center justify-content-center">
                    <ItineraryImage src="/img/bike-tours/leh-ladakh-with-turtuk/leh-ladakh-with-turtuk-overview.webp" alt="Day One Itinerary Image Of The Leh Ladakh With Turtuk Bike Tour" />
                </div>
            </div>

            {/* Desktop Screen */}
            <div class="row d-none d-lg-block">
                <div class="col-12 col-lg-12">
                    <OverviewIcons highestAltitude="18300 ft" distance="720 km" duration="6N/7D" lodging="Hotel/Camp" meal="BF/Dinner" />
                </div>

                <div class="col-12 col-lg-12 mt-3 mb-3 d-flex align-items-center justify-content-center">
                    <ItineraryImage size="desktop" src="/img/bike-tours/leh-ladakh-with-turtuk/leh-ladakh-with-turtuk-overview.webp" alt="Day One Itinerary Image Of The Leh Ladakh With Turtuk Bike Tour" />
                </div>
            </div>
            
            <p>
                This 7-day tour will take you on a motorbike trip across the stunning sceneries of Ladakh, including the gorgeous Nubra Valley and enchanting Pangong Lake. Get ready for an incredible experience filled with leisurely rides, cultural visits, and once in a lifetime experiences of bike tour in the Himalayan region.
            </p>


            <h3>Tour Highlights:</h3>
            <ul class="overview-tour-highlights">
                <li>Drive through Khardung La, which is one of the highest motorable passes in the world.</li>
                <li>Explore Turtuk, a beautiful village located at the Indo-Pak border with breathtaking views and rich Balti culture</li>
                <li>Get the opportunity to witness the culture and the sights which Nubra Valley has to offer, including its sand dunes.</li>
                <li>Marvel at the views of ever-changing colors of Pangong Lake.</li>
                <li>Get in touch with the culture and scenic views of Ladakh region.</li>
            </ul>

            <p>
                This bike tour package combines high-altitude adventure with serene cultural exploration, making it perfect for motor biking enthusiasts looking to challenge themselves while experiencing the beauty of Ladakh.
            </p>
            

        </div>
    );
});