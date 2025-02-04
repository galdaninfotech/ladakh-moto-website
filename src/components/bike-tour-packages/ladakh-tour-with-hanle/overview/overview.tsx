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
                    <OverviewIcons duration="7N/8D" highestAltitude="18380 ft" distance="930 km" lodging="Hotel/Resort" meal="BF/Dinner" />
                </div>

                <div class="col-12 col-lg-6 mt-3 mb-3 d-flex align-items-center justify-content-center">
                    <ItineraryImage src="/img/bike-tour-packages/ladakh-tour-with-hanle/ladakh-tour-with-hanle-overview.jpg" alt="Overview Image Of The Ladakh Tour With Hanle Bike Package" />
                </div>
            </div>

            {/* Desktop Screen */}
            <div class="row d-none d-lg-block">
                <div class="col-12 col-lg-12">
                    <OverviewIcons duration="7N/8D" highestAltitude="18380 ft" distance="930 km" lodging="Hotel/Resort" meal="BF/Dinner" />
                </div>

                <div class="col-12 col-lg-12 mt-3 mb-3 d-flex align-items-center justify-content-center">
                    <ItineraryImage size="desktop" src="/img/bike-tour-packages/ladakh-tour-with-hanle/ladakh-tour-with-hanle-overview.jpg" alt="Overview Image Of The Ladakh Tour With Hanle Bike Package" />
                </div>
            </div>


            
            <p>
                The package of Ladakh tour for 8 days is a mix of culture, exploration and adventure providing a thorough culture insight to its travelers. It will start with a duration of 2 full days acclimatization in Leh, extending to Nubra Valley sand dunes and Monasteries, Pangong Lake and its appealing water, and Hanle village for its top notch astronomy center and breathtaking night skies Hanle is famous off. Encompassing of all the beautiful locations, it is a perfect fit to people looking for a complete glimpse of Ladakh’s unique culture and natural beauty.
            </p>


            <h3>Tour Highlights:</h3>
            <ul class="overview-tour-highlights">
                <li>High Altitude Passes: Journey through Khardung La and Chang La, two of the highest motorable roads in the world </li>
                <li>Stunning Landscapes: Witness desert beauty of Nubra valley, the vibrant blue waters of Pangong Lake and the remoteness of Hanle </li>
                <li>Cultural Experiences: Explore Diskit and Thiksey monasteries and if time suitable some more in Leh </li>
                <li>Camel Ride: Experience the rare Bactrian camels from Hunder sand dunes</li>
                <li>Explore the Rambling Skies of Hanle: Have an option of going to the observatories that provide a glimpse of one of the clearest night skies of India </li>
            </ul>
            

        </div>
    );
});