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
                    <OverviewIcons duration="10N/11D" highestAltitude="17688 ft" distance="1360 km" lodging="Hotel/Resorts" meal="BF/Dinner" />
                </div>

                <div class="col-12 col-lg-6 mt-3 mb-3 d-flex align-items-center justify-content-center">
                    <ItineraryImage src="/img/packages/ladakh-zangskar-valley-tour/ladakh-zangskar-valley-tour-overview.jpg" alt="Overview Image Of The Ladakh Zanskar Valley Tour Bike Package" />
                </div>
            </div>

            {/* Desktop Screen */}
            <div class="row d-none d-lg-block">
                <div class="col-12 col-lg-12">
                    <OverviewIcons duration="10N/11D" highestAltitude="17688 ft" distance="1360 km" lodging="Hotel/Resorts" meal="BF/Dinner" />
                </div>

                <div class="col-12 col-lg-12 mt-3 mb-3 d-flex align-items-center justify-content-center">
                    <ItineraryImage size="desktop" src="/img/packages/ladakh-zangskar-valley-tour/ladakh-zangskar-valley-tour-overview.jpg" alt="Overview Image Of The Ladakh Zanskar Valley Tour Bike Package" />
                </div>
            </div>


            
            <p>
                The culture and the beauty of Ladakh and the Zanskar Valley can be experienced during this 10-day Leh Ladakh holiday package. The entire excursion starts with two days of sightseeing and acclimatization in Leh. You will then travel to the isolated Zanskar Valley which comprises of ancient monasteries, splendid villages and picturesque views. Encounters with high passes, traditional Ladakhi cultures, expansive landscapes of Zanskar makes this one an excellent fit for thrill-seekers and those interested in deep-rooted cultures.
            </p>


            <h3>Tour Highlights:</h3>
            <ul class="overview-tour-highlights">
                <li>Landscapes: Drive through the sprawling Suru valley, amazing view of Nun-Kun range and Chang la passes along with other breathtaking views.</li>
                <li>Cultural Shrines: Explore the wide varieties of monasteries across Ladakh and Zangskar, which include Alchi, Karsha, Stongdey, Lamayuru.</li>
                <li>Lakesides: The picturesque Pangong lake can be enjoyed while witnessing its colorful transitions.</li>
                <li>Villages: The remote villages of Zanskar provide a great opportunity to experience the local lifestyle.</li>
            </ul>
            

        </div>
    );
});