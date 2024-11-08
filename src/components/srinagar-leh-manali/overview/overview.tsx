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
                    <ItineraryIcons highestAltitude="18300 ft" distance="1350 km" duration="9N/10D" lodging="Hotel/Camp" meal="BF/Dinner" />
                </div>

                <div class="col-12 col-lg-6 mt-3 mb-3 d-flex align-items-center justify-content-center">
                    <ItineraryImage src="/img/tours/srinagar-leh-manali/srinagar-leh-manali-overview.jpg" alt="Day One Itinerary Image Of The Srinagar Leh Manali Bike Tour" />
                </div>
            </div>

            {/* Desktop Screen */}
            <div class="row d-none d-lg-block">
                <div class="col-12 col-lg-12">
                    <ItineraryIcons highestAltitude="18300 ft" distance="1350 km" duration="9N/10D" lodging="Hotel/Camp" meal="BF/Dinner" />
                </div>

                <div class="col-12 col-lg-12 mt-3 mb-3 d-flex align-items-center justify-content-center">
                    <ItineraryImage size="desktop" src="/img/tours/srinagar-leh-manali/srinagar-leh-manali-overview.jpg" alt="Day One Itinerary Image Of The Srinagar Leh Manali Bike Tour" />
                </div>
            </div>
            
            <p>
                This 10-day motorbiking adventure takes you from the picturesque landscapes of Srinagar to the breathtaking mountains of Manali, passing through the stunning Nubra Valley and the iconic Pangong Lake. Get ready for an exhilarating journey filled with diverse landscapes, rich culture, and unforgettable experiences.
            </p>


            <h3>Tour Highlights:</h3>
            <ul class="overview-tour-highlights">
                <li>Ride through the stunning landscapes of Nubra Valley, Pangong Lake, and Kargil.</li>
                <li>Conquer Khardung La and Baralacha La, some of the highest motorable passes in the world.</li>
                <li>Experience the rich culture of Turtuk and the serene beauty of Pangong Lake.</li>
                <li>Enjoy breathtaking mountain views, vibrant markets, and delicious local cuisine throughout the journey.</li>
            </ul>

            <p>
                This motorbiking tour promises an unforgettable experience, filled with adventure, scenic beauty, and the opportunity to explore the rich culture of the Himalayas.
            </p>
            

        </div>
    );
});