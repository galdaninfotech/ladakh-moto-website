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
                    <OverviewIcons highestAltitude="16703 ft" distance="1485 km" duration="9N/10D" lodging="Hotel/Camp" meal="BF/Dinner" />
                </div>

                <div class="col-12 col-lg-6 mt-3 mb-3 d-flex align-items-center justify-content-center">
                    <ItineraryImage src="/img/bike-tours/leh-zangskar-leh/leh-zangskar-leh-overview.jpg" alt="Overview Image Of The Leh Zanskar Leh Bike Tour" />
                </div>
            </div>

            {/* Desktop Screen */}
            <div class="row d-none d-lg-block">
                <div class="col-12 col-lg-12">
                    <OverviewIcons highestAltitude="16703 ft" distance="1485 km" duration="9N/10D" lodging="Hotel/Camp" meal="BF/Dinner" />
                </div>

                <div class="col-12 col-lg-12 mt-3 mb-3 d-flex align-items-center justify-content-center">
                    <ItineraryImage size="desktop" src="/img/bike-tours/leh-zangskar-leh/leh-zangskar-leh-overview.jpg" alt="Overview Image Of The Leh Zanskar Leh Bike Tour" />
                </div>
            </div>
            
            <p>
                This heart-thumping motorbike ride lasts 10 days and takes you through the unspoiled Zanskar Valley and the UNESCO-listed Ladakh. You ride through treacherous mountain passes, travel to secluded monasteries, and navigate some of the roughest but breathtaking areas in the foothills of the Himalayas. As you will get to see some of the hidden beauty of Zanskar and Ladakh, this journey is the perfect combination of thrill, art, as well as the environment.
            </p>


            <h3>Tour Highlights:</h3>
            <ul class="overview-tour-highlights">
                <li>Encounter thrilling altitude mountain passes such as Shinku La, Nakee La and Lachulung La.</li>
                <li>Get an insight into the culturally rich and remote area of Zanskar Valley and its rare monasteries.</li>
                <li>Trek to the cliffside Phuktal Monastery.</li>
                <li>Appreciate high-alpine lakes, such as Tso Kar and Tso Moriri.</li>
                <li>Go through the harsh landscape of Changthang Plateau and the splendid Himalayan range.</li>
            </ul>

            <p>
                This tour is ideal for you if you are a biking fanatic as its a perfect mix of challenging mountain passes, and untouched valleys and lakes.
            </p>
            

        </div>
    );
});