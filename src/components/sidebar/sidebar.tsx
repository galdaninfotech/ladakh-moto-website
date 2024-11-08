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
                    <div class="item"><span><i class="fas fa-phone-volume"></i></span><span>+91-9622958013</span></div>
                    <div class="item"><span><i class="fas fa-envelope-open-text"></i></span><span>info@ladakhmoto.com</span></div>
                </div>
            </div>

            <div style="background-color: #dee2e6; border-radius: 4px;"></div>
            <p>
                <span style="color: #ff0000;">
                    <span style="color: #000; margin-right: 5px;">Starting from</span> 
                    <span style="color: #999999; margin-right: 5px;"><del>Rs. 27,999</del></span>
                </span>
                <span style="color: #000; text-align: center;">Rs. 22,999</span>
            </p>
            <div id="download-pdf">
                <a class="" href="https://aahvan.com/wp-content/uploads/2024/04/Ladakh-Travel-Guide-PDF.pdf" target="_blank">
                <i class="bi bi-download"></i>
                <span class="elementor-button-text ml-3" style="margin-left: 10px;">Ladakh Travel Guide</span>
                </a>
            </div>
            <p id="earnest-money">Book your dream trip with a deposit of 30% of the tour cost</p>
        </div>
    );
});