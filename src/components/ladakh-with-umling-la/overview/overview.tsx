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
                    <OverviewIcons duration="7D/8N" highestAltitude="19024 ft" distance="1050 km" lodging="Hotel/Camp" meal="BF/Dinner" />
                </div>

                <div class="col-12 col-lg-6 mt-3 mb-3 d-flex align-items-center justify-content-center">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d398754.0544797353!2d77.80004321432321!3d33.962668269854355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x38fdeb034ac7f00d%3A0x92d64b5b0ccebba5!2sladakhmoto%20Zangsti%20Rd%20Leh%2C%20Ladakh%20194101!3m2!1d34.1655667!2d77.58419289999999!4m5!1s0x39002d69b6082a97%3A0xb7ba17e3c8c016a9!2sPangong%20Lake!3m2!1d33.7595131!2d78.66744039999999!5e1!3m2!1sen!2sin!4v1735901876326!5m2!1sen!2sin" width="600" height="450" style="border:0;" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>

            {/* Desktop Screen */}
            <div class="row d-none d-lg-block">
                <div class="col-12 col-lg-12">
                    <OverviewIcons duration="7D/8N" highestAltitude="19024 ft" distance="1050 km" lodging="Hotel" meal="BF/Dinner" />
                </div>

                <div class="col-12 col-lg-12 mt-3 mb-3 d-flex align-items-center justify-content-center">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d398754.0544797353!2d77.80004321432321!3d33.962668269854355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x38fdeb034ac7f00d%3A0x92d64b5b0ccebba5!2sladakhmoto%20Zangsti%20Rd%20Leh%2C%20Ladakh%20194101!3m2!1d34.1655667!2d77.58419289999999!4m5!1s0x39002d69b6082a97%3A0xb7ba17e3c8c016a9!2sPangong%20Lake!3m2!1d33.7595131!2d78.66744039999999!5e1!3m2!1sen!2sin!4v1735901876326!5m2!1sen!2sin" width="850" height="350" style="border:0;" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>

            <p>
                This 8-day motorbiking adventure takes you through the iconic landscapes of Ladakh, including Nubra Valley, Pangong Lake, and the remote Hanle region. You'll also conquer Umling La Pass, the highest motorable road in the world. This journey combines cultural exploration, high-altitude mountain riding, and breathtaking natural beauty.
            </p>


            <h3>Tour Highlights:</h3>
            <ul class="overview-tour-highlights">
                <li>Conquer the Khardung La and Umling La passes, some of the highest motorable roads in the world.</li>
                <li>Experience the cultural and natural beauty of Nubra Valley, Pangong Lake, and Hanle.</li>
                <li>Ride through remote, high-altitude landscapes like the Changthang Plateau and Puga Valley.</li>
                <li>Witness stunning vistas and starry nights in some of the most untouched regions of Ladakh.</li>
            </ul>

            <p>
                This tour offers the ultimate mix of high-altitude adventure and serene cultural exploration, making it perfect for motorbiking enthusiasts looking to challenge themselves while experiencing the beauty of Ladakh.
            </p>
            

        </div>
    );
});