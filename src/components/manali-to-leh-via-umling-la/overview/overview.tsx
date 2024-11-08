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
            <p>
                This thrilling motorbiking tour takes you on a journey of a lifetime through the breathtaking landscapes of the Himalayas. Starting from the lush green valleys of Manali, you’ll traverse the highest motorable passes, visit pristine lakes, explore remote villages, and experience the raw beauty of Ladakh's rugged terrain. Designed for adventurers, this tour offers a mix of exhilarating rides, cultural encounters, and some of the most stunning vistas on Earth. It’s not just a ride, but an exploration of the extreme and serene, from high-altitude passes to serene lakes, ancient monasteries, and the starry skies of Hanle.
            </p>

            <div class="row d-block d-lg-none">
                <div class="col-12 col-lg-6">
                    <ItineraryIcons highestAltitude="19024 ft" distance="1525 km" duration="10N/11D" lodging="Hotel/Camp" meal="BF/Dinner" />
                </div>

                <div class="col-12 col-lg-6 mt-3 mb-3 d-flex align-items-center justify-content-center">
                    <ItineraryImage src="/img/tours/manali-to-leh-via-umling-la/manali-to-leh-via-umling-la-overview.jpg" alt="Day One Itinerary Image Of The Manali  To Leh Vai Umling La Bike Tour" />
                </div>
            </div>

            {/* Desktop Screen */}
            <div class="row d-none d-lg-block">
                <div class="col-12 col-lg-12">
                    <ItineraryIcons highestAltitude="19024 ft" distance="1525 km" duration="10N/11D" lodging="Hotel/Camp" meal="BF/Dinner" />
                </div>

                <div class="col-12 col-lg-12 mt-3 mb-3 d-flex align-items-center justify-content-center">
                    <ItineraryImage size="desktop" src="/img/tours/manali-to-leh-via-umling-la/manali-to-leh-via-umling-la-overview.jpg" alt="Day One Itinerary Image Of The Manali  To Leh Vai Umling La Bike Tour" />
                </div>
            </div>

            <h3>Tour Highlights:</h3>
            <ul class="overview-tour-highlights">
                <li>Cross multiple high-altitude passes, including Umling La and Khardung La.</li>
                <li>Visit pristine and remote lakes such as Tso Moriri and Pangong.</li>
                <li>Experience the tranquility of Hanle, with its observatory and starry night skies.</li>
                <li>Explore the sand dunes of Nubra Valley and ride through the lush Shyok River valley.</li>
                <li>Immerse yourself in the unique culture and history of Ladakh in towns like Leh and Diskit.</li>
            </ul>

            <p>
                This Manali-to-Leh motorbiking tour is a perfect blend of adventure, stunning scenery, and cultural exploration, designed for seasoned bikers looking for an unforgettable journey through one of the most remote and beautiful regions in the world.
            </p>
            

        </div>
    );
});