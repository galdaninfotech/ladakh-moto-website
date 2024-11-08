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
            This 10-day Ladakh holiday package offers travelers a chance to immerse themselves in the unique culture and stunning landscapes of Ladakh and the Zanskar Valley. The tour begins with two days in Leh for acclimatization and sightseeing. You’ll then venture to the remote Zanskar Valley, known for its serene villages, ancient monasteries, and scenic vistas. Highlights include crossing high-altitude passes, experiencing traditional Ladakhi life, and exploring the dramatic landscapes of Zanskar, making this ideal for travelers seeking adventure and cultural immersion.
            </p>


            <h3>Tour Highlights:</h3>
            <ul class="overview-tour-highlights">
                <li>Scenic Drives: Cross high-altitude passes like Khardung La and Chang La, and travel through the lush Suru Valley.</li>
                <li>Remote Landscapes: Explore the Zanskar Valley’s stunning scenery, from the lush Suru Valley to the rugged peaks of the Nun-Kun range.</li>
                <li>Cultural Visits: Visit monasteries including Karsha, Stongdey, Lamayuru, and Alchi.</li>
                <li>Lakeside Serenity: Witness the changing colors of Pangong Lake, one of Ladakh’s most scenic attractions.</li>
                <li>Traditional Villages: Experience the unique cultures of Ladakh and Zanskar’s remote villages.</li>
            </ul>
            

        </div>
    );
});