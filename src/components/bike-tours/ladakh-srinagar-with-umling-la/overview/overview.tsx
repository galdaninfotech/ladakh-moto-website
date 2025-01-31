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
                    <OverviewIcons highestAltitude="19024 ft" distance="1576 km" duration="10N/11D" lodging="Hotel/Camp" meal="BF/Dinner" />
                </div>

                <div class="col-12 col-lg-6 mt-3 mb-3 d-flex align-items-center justify-content-center">
                    <ItineraryImage src="/img/tours/ladakh-srinagar-with-umling-la/ladakh-srinagar-with-umling-la-overview.jpg" alt="Overview Image Of The Ladakh Srinagar With Umling La Bike Tour" />
                </div>
            </div>

            {/* Desktop Screen */}
            <div class="row d-none d-lg-block">
                <div class="col-12 col-lg-12">
                    <OverviewIcons highestAltitude="19024 ft" distance="1576 km" duration="10N/11D" lodging="Hotel/Camp" meal="BF/Dinner" />
                </div>

                <div class="col-12 col-lg-12 mt-3 mb-3 d-flex align-items-center justify-content-center">
                    <ItineraryImage size="desktop" src="/img/tours/ladakh-srinagar-with-umling-la/ladakh-srinagar-with-umling-la-overview.jpg" alt="Overview Image Of The Ladakh Srinagar With Umling La Bike Tour" />
                </div>
            </div>
            
            <p>
                This is a tour where you will be island hopping across the interesting places in Ladakh and Kashmir for its 11 exciting days. You will be enthralled by countless mountain passes, tranquil lakes, secluded villages as well as towns full of history. Before we start with Nubra Valley, this tour will take us to the impressive Pangong Lake, Hanle, the world’s highest motorable road Umling La and picturesque regions of Kargil and Srinagar, beginning from Leh.
            </p>


            <h3>Tour Highlights:</h3>
            <ul class="overview-tour-highlights">
                <li>In this tour, you will have a chance to ride through Khardung La Pass & Umling La Pass the highest passes ever known to mankind.</li>
                <li>Be familiarized by the Nubra Valley culture, history while visiting the distant village of Turtuk.</li>
                <li>Get the chance to watch the sundown/sunrise at the mesmerizing Pangong Lake and enjoy the unadulterated beauty of Hanle.</li>
                <li>Ride the renowned Zoji La Pass, and head to explore the rich historical town of Kargil.</li>
                <li>Finally end your travel by the calm and serene Srinagar popular for its beautiful greenery and shapes.</li>
                <li>Combining extreme adventure, culture and scenic beauty is something which this tour provides you on an unforgettable basis.</li>
            </ul>

            <p>
                This tour combines high-altitude adventure with serene cultural exploration, making it perfect for motorbiking enthusiasts looking to challenge themselves while experiencing the beauty of Ladakh.
            </p>
            

        </div>
    );
});