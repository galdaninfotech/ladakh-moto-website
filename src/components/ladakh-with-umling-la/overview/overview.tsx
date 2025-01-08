import { component$, useStylesScoped$ } from '@builder.io/qwik';
import styles from './overview.css?inline';
import OverviewIcons from '~/components/overview-icons/overview-icons';

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
                    <iframe src="https://www.google.com/maps/embed?pb=!1m46!1m12!1m3!1d794878.3151970134!2d77.23674265448821!3d34.242156987288716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m31!3e9!4m5!1s0x38fdebcd12c62837%3A0x4cf8ccb43b913de8!2sLeh%20City%20Market%20%2C%20Ladakh%2C%20Leh!3m2!1d34.1622742!2d77.58558839999999!4m5!1s0x38fd99d503a96917%3A0x966547e17b6bdda4!2sSangam%20point%2C%20Srinagar%20-%20Leh%20Highway%2C%20Leh!3m2!1d34.1653744!2d77.332813!4m5!1s0x38fc4c4e89860449%3A0xb2a592c28540d7ff!2sHunder!3m2!1d34.5752836!2d77.4988753!4m5!1s0x3901d9b11695972d%3A0x86a63221606d7af3!2sSpangmik!3m2!1d33.9078735!2d78.45956439999999!4m5!1s0x38fdebcd12c62837%3A0x4cf8ccb43b913de8!2sLeh%20City%20Market%20%2C%20Ladakh%2C%20Leh!3m2!1d34.1622742!2d77.58558839999999!5e1!3m2!1sen!2sin!4v1736254066396!5m2!1sen!2sin" width="600" height="450" style="border:0;" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>

            {/* Desktop Screen */}
            <div class="row d-none d-lg-block">
                <div class="col-12 col-lg-12">
                    <OverviewIcons duration="7D/8N" highestAltitude="19024 ft" distance="1050 km" lodging="Hotel" meal="BF/Dinner" />
                </div>

                <div class="col-12 col-lg-12 mt-3 mb-3 d-flex align-items-center justify-content-center">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m46!1m12!1m3!1d794878.3151970134!2d77.23674265448821!3d34.242156987288716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m31!3e9!4m5!1s0x38fdebcd12c62837%3A0x4cf8ccb43b913de8!2sLeh%20City%20Market%20%2C%20Ladakh%2C%20Leh!3m2!1d34.1622742!2d77.58558839999999!4m5!1s0x38fd99d503a96917%3A0x966547e17b6bdda4!2sSangam%20point%2C%20Srinagar%20-%20Leh%20Highway%2C%20Leh!3m2!1d34.1653744!2d77.332813!4m5!1s0x38fc4c4e89860449%3A0xb2a592c28540d7ff!2sHunder!3m2!1d34.5752836!2d77.4988753!4m5!1s0x3901d9b11695972d%3A0x86a63221606d7af3!2sSpangmik!3m2!1d33.9078735!2d78.45956439999999!4m5!1s0x38fdebcd12c62837%3A0x4cf8ccb43b913de8!2sLeh%20City%20Market%20%2C%20Ladakh%2C%20Leh!3m2!1d34.1622742!2d77.58558839999999!5e1!3m2!1sen!2sin!4v1736254066396!5m2!1sen!2sin" width="600" height="450" style="border:0;" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
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