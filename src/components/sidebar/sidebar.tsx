import { component$, useStylesScoped$ } from '@builder.io/qwik';
import styles from './sidebar.css?inline';

export default component$(() => {
    useStylesScoped$(styles);

    return (
        <div id="sidebar">
            <div class="wrapper-confidence">
                <h2>Book With Confidence!</h2>
                <div class="items">
                    <div class="item">No-hassle best price guarantee</div>
                    <div class="item">Customer care available 24/7</div>
                    <div class="item">Hand-picked Tours & Activities</div>
                    <div class="item">RE Himalayan Bike with Fuel</div>
                    <div class="item">Handpicked Accomodation</div>
                    <div class="item">Includes Lodging, Meal & Fuel </div>
                    <div class="item">Motorbike Mechanic</div>
                </div>
            </div>


            <div id="download-pdf">
                <a id="download-itinerary" href="" download="" type="application/octet-stream" aria-label="Download Ladakh Travel Guide PDF" title="Download Ladakh Travel Guide PDF" target="_blank">
                    <i class="bi bi-download"></i>
                    <span class="elementor-button-text ml-3" style="margin-left: 10px;">Download Itinerary PDF</span>
                </a>
            </div>
            <p id="earnest-money">Book your dream trip with a deposit of 30% of the tour cost.</p>


            <div id="wrapper-need-help">
                <h2>Need Help?</h2>
                <p>
                    Do not hesitage to give us a call. We are a team of local experts and we are happy to talk to you.
                </p>
                <div class="items">
                    <div class="item phone"><a href="tel:+91-9622958013" aria-label="Phone" title="Phone">+91-9622958013</a></div>
                    <div class="item phone"><a href="tel:+91-9906989962" aria-label="Phone" title="Phone">+91-9906989962</a></div>
                    <div class="item email"><a class="email email-link" aria-label="Email" title="Email" href="#">Email Us</a></div>
                </div>
            </div>

            <div style="background-color: #dee2e6; border-radius: 4px;"></div>

        </div>
    );
});