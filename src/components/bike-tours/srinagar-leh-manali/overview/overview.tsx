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
                    <OverviewIcons highestAltitude="18300 ft" distance="1350 km" duration="9N/10D" lodging="Hotel/Camp" meal="BF/Dinner" />
                </div>

                <div class="col-12 col-lg-6 mt-3 mb-3 d-flex align-items-center justify-content-center">
                    <ItineraryImage src="/img/bike-tours/srinagar-leh-manali/srinagar-leh-manali-overview.jpg" alt="Day One Itinerary Image Of The Srinagar Leh Manali Bike Tour" />
                </div>
            </div>

            {/* Desktop Screen */}
            <div class="row d-none d-lg-block">
                <div class="col-12 col-lg-12">
                    <OverviewIcons highestAltitude="18300 ft" distance="1350 km" duration="9N/10D" lodging="Hotel/Camp" meal="BF/Dinner" />
                </div>

                <div class="col-12 col-lg-12 mt-3 mb-3 d-flex align-items-center justify-content-center">
                    <ItineraryImage size="desktop" src="/img/bike-tours/srinagar-leh-manali/srinagar-leh-manali-overview.jpg" alt="Day One Itinerary Image Of The Srinagar Leh Manali Bike Tour" />
                </div>
            </div>
            
            <p>
                This 10-day motorbike trip passes through the spectacular Nubra Valley and the well-known Pangong Lake as it transports you from the charming surroundings of Srinagar to the magnificent mountains of Manali. Prepare yourself for a thrilling adventure full with varied scenery, a vibrant culture, and life-changing moments.
            </p>


            <h3>Tour Highlights:</h3>
            <ul class="overview-tour-highlights">
                <li>Cross some of the world's highest motorable crossings, Khardung La and Baralacha La</li>
                <li>Travel through the breathtaking scenery of Nubra Valley, Pangong Lake, and Kargil</li>
                <li>Discover the tranquil serenity of Pangong Lake and the rich culture of Turtuk</li>
                <li>Throughout the trip, savor delectable local cuisine, lively marketplaces, and stunning mountain views</li>
            </ul>

            <p>
                An amazing trip full of adventure, breathtaking scenery, and the chance to learn about the rich Himalayan culture is what this motorbike tour promises. 
            </p>
            

        </div>
    );
});