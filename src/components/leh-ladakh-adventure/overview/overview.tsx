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
                    <OverviewIcons highestAltitude="18300 ft" distance="550 km" duration="5N/6D" lodging="Hotel/Camp" meal="BF/Dinner" />
                </div>

                <div class="col-12 col-lg-6 mt-3 mb-3 d-flex align-items-center justify-content-center">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m46!1m12!1m3!1d715710.6330606343!2d77.23668824116163!3d34.24329243740819!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m31!3e9!4m5!1s0x38fdebcd12c62837%3A0x4cf8ccb43b913de8!2sLeh%20City%20Market%20%2C%20Ladakh%2C%20Leh!3m2!1d34.1622742!2d77.58558839999999!4m5!1s0x38fd99d503a96917%3A0x966547e17b6bdda4!2sSangam%20point%2C%20Srinagar%20-%20Leh%20Highway%2C%20Leh!3m2!1d34.1653744!2d77.332813!4m5!1s0x38fc4c4e89860449%3A0xb2a592c28540d7ff!2sHunder!3m2!1d34.5752836!2d77.4988753!4m5!1s0x3901d9b11695972d%3A0x86a63221606d7af3!2sSpangmik!3m2!1d33.9078735!2d78.45956439999999!4m5!1s0x38fdebcd12c62837%3A0x4cf8ccb43b913de8!2sLeh%20City%20Market%20%2C%20Ladakh%2C%20Leh!3m2!1d34.1622742!2d77.58558839999999!5e1!3m2!1sen!2sin!4v1735919658467!5m2!1sen!2sin" 
                        width="850" height="350" style="border:0;" loading="lazy" referrerPolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>
            </div>

            {/* Desktop Screen */}
            <div class="row d-none d-lg-block">
                <div class="col-12 col-lg-12">
                    <OverviewIcons highestAltitude="18300 ft" distance="550 km" duration="5N/6D" lodging="Hotel/Camp" meal="BF/Dinner" />
                </div>

                <div class="col-12 col-lg-12 mt-3 mb-3 d-flex align-items-center justify-content-center">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m46!1m12!1m3!1d715710.6330606343!2d77.23668824116163!3d34.24329243740819!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m31!3e9!4m5!1s0x38fdebcd12c62837%3A0x4cf8ccb43b913de8!2sLeh%20City%20Market%20%2C%20Ladakh%2C%20Leh!3m2!1d34.1622742!2d77.58558839999999!4m5!1s0x38fd99d503a96917%3A0x966547e17b6bdda4!2sSangam%20point%2C%20Srinagar%20-%20Leh%20Highway%2C%20Leh!3m2!1d34.1653744!2d77.332813!4m5!1s0x38fc4c4e89860449%3A0xb2a592c28540d7ff!2sHunder!3m2!1d34.5752836!2d77.4988753!4m5!1s0x3901d9b11695972d%3A0x86a63221606d7af3!2sSpangmik!3m2!1d33.9078735!2d78.45956439999999!4m5!1s0x38fdebcd12c62837%3A0x4cf8ccb43b913de8!2sLeh%20City%20Market%20%2C%20Ladakh%2C%20Leh!3m2!1d34.1622742!2d77.58558839999999!5e1!3m2!1sen!2sin!4v1735919658467!5m2!1sen!2sin" 
                        width="850" height="350" style="border:0;" loading="lazy" referrerPolicy="no-referrer-when-downgrade">
                    </iframe>
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