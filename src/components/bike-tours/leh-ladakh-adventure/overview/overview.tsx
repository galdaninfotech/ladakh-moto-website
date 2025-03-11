import { component$, useStylesScoped$ } from '@builder.io/qwik';
import styles from './overview.css?inline';
// import ItineraryImage from '~/components/itinerary-image';
import OverviewIcons from '~/components/overview-icons/overview-icons';
import ItineraryImage from '~/components/itinerary-image';

export default component$(() => {
    useStylesScoped$(styles);

    return (
        <div id="overview">
            <div class="sub-headings d-flex justify-content-between align-items-center">
                <h2>Overview</h2>
            </div>

            <div class="row d-block d-lg-none">
                <div class="col-12 col-lg-6">
                    <OverviewIcons highestAltitude="18380 ft" distance="550 km" duration="5N/6D" lodging="Hotel/Camp" meal="BF/Dinner" />
                </div>

                <div class="col-12 col-lg-6 mt-3 mb-3 d-flex align-items-center justify-content-center">
                    <ItineraryImage src="/img/bike-tours/leh-ladakh-adventure/leh-ladakh-adventure-overview.webp" alt="Overview Image Of The Leh Zanskar Leh Bike Tour" />
                </div>
            </div>

            {/* Desktop Screen */}
            <div class="row d-none d-lg-block">
                <div class="col-12 col-lg-12">
                    <OverviewIcons highestAltitude="18380 ft" distance="550 km" duration="5N/6D" lodging="Hotel/Camp" meal="BF/Dinner" />
                </div>

                <div class="col-12 col-lg-12 mt-3 mb-3 d-flex align-items-center justify-content-center">
                    <ItineraryImage size="desktop" src="/img/bike-tours/leh-ladakh-adventure/leh-ladakh-adventure-overview.webp" alt="Overview Image Of The Leh Zanskar Leh Bike Tour" />
                </div>
            </div>
            
            <p>
                This 6-day tour will take you on a motorbike trip across the stunning sceneries of Ladakh, including the gorgeous Nubra Valley and enchanting Pangong Lake. Get ready for an incredible experience filled with leisurely rides, cultural visits, and once in a lifetime experiences of bike tour in the Himalayan region.
            </p>


            <h3>Tour Highlights:</h3>
            <ul class="overview-tour-highlights">
                <li>Drive through Khardung La, which is one of the highest motorable passes in the world.</li>
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