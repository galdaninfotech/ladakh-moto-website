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
                    <ItineraryIcons highestAltitude="18300 ft" distance="550 km" duration="5N/6D" lodging="Hotel/Camp" meal="BF/Dinner" />
                </div>

                <div class="col-12 col-lg-6 mt-3 mb-3 d-flex align-items-center justify-content-center">
                    <ItineraryImage src="/img/tours/leh-ladakh-adventure/leh-ladakh-adventure-overview.jpg" alt="Day One Itinerary Image Of The Ladakh With Umling La Bike Tour" />
                </div>
            </div>

            {/* Desktop Screen */}
            <div class="row d-none d-lg-block">
                <div class="col-12 col-lg-12">
                    <ItineraryIcons highestAltitude="18300 ft" distance="550 km" duration="5N/6D" lodging="Hotel/Camp" meal="BF/Dinner" />
                </div>

                <div class="col-12 col-lg-12 mt-3 mb-3 d-flex align-items-center justify-content-center">
                    <ItineraryImage size="desktop" src="/img/tours/leh-ladakh-adventure/leh-ladakh-adventure-overview.jpg" alt="Day One Itinerary Image Of The Ladakh With Umling La Bike Tour" />
                </div>
            </div>
            
            <p>
                This 6-day motorbiking tour will take you through the breathtaking landscapes of Ladakh, including the stunning Nubra Valley and the mesmerizing Pangong Lake. Get ready for an adventure filled with scenic rides, cultural explorations, and unforgettable memories in the heart of the Himalayas.
            </p>


            <h3>Tour Highlights:</h3>
            <ul class="overview-tour-highlights">
                <li>Conquer Khardung La, one of the highest motorable passes in the world.</li>
                <li>Experience the unique culture and beauty of Nubra Valley and its sand dunes.</li>
                <li>Witness the mesmerizing views of Pangong Lake, with its ever-changing colors.</li>
                <li>Explore the rich heritage and breathtaking landscapes of Ladakh.</li>
            </ul>

            <p>
            This motorbiking tour offers an incredible journey through the heart of Ladakh, filled with adventure, culture, and stunning natural beauty, making it an unforgettable experience for every traveler.
            </p>
            

        </div>
    );
});