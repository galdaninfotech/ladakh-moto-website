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
                    <OverviewIcons highestAltitude="18380 ft" distance="1525 km" duration="9N/10D" lodging="Hotel/Camp" meal="BF/Dinner" />
                </div>

                <div class="col-12 col-lg-6 mt-3 mb-3 d-flex align-items-center justify-content-center">
                    <ItineraryImage src="/img/bike-tours/manali-leh-with-umling-la/manali-leh-with-umling-la-overview.webp" alt="Day One Itinerary Image Of The Manali  To Leh Vai Umling La Bike Tour" />
                </div>
            </div>

            {/* Desktop Screen */}
            <div class="row d-none d-lg-block">
                <div class="col-12 col-lg-12">
                    <OverviewIcons highestAltitude="18380 ft" distance="1525 km" duration="9N/10D" lodging="Hotel/Camp" meal="BF/Dinner" />
                </div>

                <div class="col-12 col-lg-12 mt-3 mb-3 d-flex align-items-center justify-content-center">
                    <ItineraryImage size="desktop" src="/img/bike-tours/manali-leh-with-umling-la/manali-leh-with-umling-la-overview.webp" alt="Day One Itinerary Image Of The Manali  To Leh Vai Umling La Bike Tour" />
                </div>
            </div>

            <p>
                This exciting motorbiking journey takes us through the great Himalayan mountain ranges. Beginning with the lush green hills and valleys of Manali, one will conquer the highest motorable passes, the beautiful lakes and remote Ladakh villages. The trip is tailor-made for explorers and thrill-seekers as it combines exciting rides, unforgettable cultural experiences, and some of the finest sights in the world. This is not merely just a ride, but an adventure through the high pray, serene plains, silent lakes, old aged monasteries and the twinkling stars in the skies of Pangong.   
            </p>

            <h3>Tour Highlights:</h3>
            <ul class="overview-tour-highlights">
                <li>Cross several important mountain passes including Zojila , Baralacha and Khardung La </li>
                <li>Visit the beautiful and isolated lake Pangong </li>
                <li>Explore Turtuk, a beautiful town located at the Indo-Pak border with breathtaking views and rich Balti culture</li>
                <li>Take a trip to the Nubra Valley where you get to ride through the Shyok river valleys and the surrounding sand dunes</li>
                <li>Get to experience the wonderful culture and history in cities of Leh and Diskit.</li>
            </ul>

            <p>
                This Manali-leh-with-umling-la motorbiking tour is a harmonious combination of thrill, picturesque landscapes and diverse cultures, crafted specifically for expert bikers who have the epic desire to travel in one of the most remote and breathtaking areas of the globe.
            </p>
            

        </div>
    );
});