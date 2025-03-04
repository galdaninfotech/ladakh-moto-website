import { component$, useStylesScoped$ } from '@builder.io/qwik';
import styles from './sidebar.css?inline';

export default component$(() => {
    useStylesScoped$(styles);

    return (
        <div id="sidebar">
            <div class="wrapper-confidence">
                <h2>Book With Confidence!</h2>
                <div class="items">
                    <div class="item"><span><i class="far fa-thumbs-up"></i></span><span>No-hassle best price guarantee</span></div>
                    <div class="item"><span><i class="fas fa-headset"></i></span><span>Customer care available 24/7</span></div>
                    <div class="item"><span><i class="fas fa-hand-holding-heart"></i></span><span>Hand-picked Tours & Activities</span></div>
                    <div class="item"><span><i class="fas fa-motorcycle"></i></span><span>RE Himalayan Bike with Fuel</span></div>
                    <div class="item"><span><i class="fas fa-campground"></i></span><span>Handpicked Accomodation</span></div>
                    <div class="item"><span><i class="fas fa-tools"></i></span><span>Motorbike Mechanic</span></div>
                </div>
            </div>

            <div id="wrapper-need-help">
                <h2>Need Help?</h2>
                <p>
                    Do not hesitage to give us a call. We are a team of local experts and we are happy to talk to you.
                </p>
                <div class="items">
                    <div class="item phone"><a href="tel:9622958013" aria-label="Phone" title="Phone">9622958013</a></div>
                    <div class="item phone"><a href="tel:9906989962" aria-label="Phone" title="Phone">9906989962</a></div>
                    <div class="item email"><a class="email email-link" aria-label="Email" title="Email" href="#">Email Us</a></div>
                </div>
            </div>

            <div style="background-color: #dee2e6; border-radius: 4px;"></div>

            <div id="download-pdf d-none">
                <a class="" href="/Ladakh-Travel-Guide-PDF.pdf" aria-label="Download Ladakh Travel Guide PDF" title="Download Ladakh Travel Guide PDF" target="_blank">
                    <i class="bi bi-download d-none"></i>
                    <span class="elementor-button-text ml-3 d-none" style="margin-left: 10px;">Ladakh Travel Guide</span>
                </a>
            </div>
            <p id="earnest-money">Book your dream trip with a deposit of 30% of the tour cost</p>
        </div>
    );
});