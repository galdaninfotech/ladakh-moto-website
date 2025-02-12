import { component$, useStylesScoped$, useVisibleTask$ } from '@builder.io/qwik';
import styles from './footer.css?inline';
import Twitter from "~/components/svgs/twitter/twitter";
import Facebook from "~/components/svgs/facebook/facebook";
import Instagram from "~/components/svgs/instagram/instagram";
import Youtube from "~/components/svgs/youtube/youtube";

import EmailAt from "~/components/svgs/email-at/email-at";
import Telephone from "~/components/svgs/telephone/telephone";

import ChevronDoubleRight from "~/components/svgs/chevron-double-right/chevron-double-right";

export default component$(() => {
    useStylesScoped$(styles);

    useVisibleTask$(() => {
        const footer = document.querySelector('.footer-area');
        if (footer) {
			const bgImage = footer.getAttribute('data-bg');
			if (bgImage) {
				(footer as HTMLElement).style.backgroundImage = `url(${bgImage})`;
			}
        }
    });

    return (
        <>
            <footer class="footer-area pt-85 pb-60" data-bg="/img/bg/footer-bg.webp">
				<div class="container">
					<div class="row">
						<div class="col-lg-3 col-sm-6">
							<div class="widget contact-widget">
								<h3>About Ladakh Moto</h3>
								<p>Ladakh Moto is a locally based Ladakhi company with dedicated local employees working under the supervision of Local managers who are acquainted with the years of experience in handling and organizing such motorbiking expeditions.</p>
								<ul>
									<li><a class="facebook" href="https://www.facebook.com/ladakhmotos/" aria-label="Follow us on Facebook" target="_blank"><span class="sr-only">Facebook</span></a></li>
									<li><a class="twitter" href="https://x.com/LadakhMoto/status/1868987553472561199" aria-label="Follow us on Twitter" target="_blank"><span class="sr-only">Twitter</span></a></li>
									<li><a class="instagram" href="https://www.instagram.com/ladakhmototour/" aria-label="Follow us on Instagram" target="_blank"><span class="sr-only">Instagram</span></a></li>
									<li><a class="youtube" href="https://www.youtube.com/@LadakhMotoTour" aria-label="Subscribe to our YouTube channel" target="_blank"><span class="sr-only">YouTube</span></a></li>
								</ul>
							</div>
						</div>
						<div class="col-lg-2 col-sm-3">
							<div class="widget quick-link-widget">
								<h3>Quick Links</h3>
								<ul>
									<li><a href="/about/about-us">About Us</a></li>
									<li><a href="/why-travel-with-ladakhmoto">Why Travel With Us?</a></li>
									<li><a href="/guides-and-staffs">Guides & Staff</a></li>
									<li><a href="/contact">Contact Us</a></li>
									<li><a href="/how-to-reach">How To Reach</a></li>
									<li><a href="/our-core-values">Our Core Values</a></li>
								</ul>
							</div>
						</div>
						<div class="col-lg-2 col-sm-3">
							<div class="widget quick-link-categories">
								<h3>Adventure Rides</h3>
								<ul>
									<li><a href="/bike-tours/leh-ladakh-adventure">Leh Ladakh Adventure</a></li>
									<li><a href="/bike-tours/ladakh-with-umling-la">Ladakh With Umling La</a></li>
									<li><a href="/bike-tours/ladakh-srinagar-with-umling-la">Ladakh Srinagar Umling La</a></li>
									<li><a href="/bike-tours/leh-zangskar-leh">Leh Zangskar Leh</a></li>
									<li><a href="/bike-tours/manali-leh-srinagar">Manali Leh Srinagar</a></li>
									<li><a href="/bike-tours/srinagar-leh-manali">Srinagar Leh Manali</a></li>
								</ul>
							</div>
						</div>
						<div class="col-lg-2 col-sm-4">
							<div class="widget quick-destinations">
								<h3>Destinations</h3>
								<ul>
									<li><a href="/destinations/nubra-valley">Nubra Valley</a></li>
									<li><a href="/destinations/pangong-lake">Pangong Lake</a></li>
									<li><a href="/destinations/tsomoriri-lake">Tsomoriri Lake</a></li>
									<li><a href="/destinations/leh-city">Leh City</a></li>
									<li><a href="/destinations/zanskar-valley">Zanskar Valley</a></li>
									<li><a href="/destinations/shanti-stupa">Shanti Stupa</a></li>
									<li><a href="/destinations/lamayuru-monastery">Lamayuru Monastery</a></li>
								</ul>
							</div>
						</div>
						<div class="col-lg-3 col-sm-6">
							<div class="widget contact-us">
								<h3>Contact Us</h3>
								<ul>
									<li><a class="address" href="#">DB2 Zangsti, Nr. MCL Vehicle Parking, Leh, 194101 Ladakh, India</a></li>
									<li><a class="email" href="mailto:info@ladakhmoto.com">info@ladakhmoto.com</a></li>
									<li><a class="phone" href="tel:+91 9622958013">+91 9622958013</a></li>
									<li><a class="phone" href="tel:+91 9906989962">+91 9906989962</a></li>
									<li><a class="phone" href="tel:+91 9419393330">+91 9419393330</a></li>
									<li><a class="phone" href="tel:+91 8899537311">+91 8899537311</a></li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</footer>

            <div class="copy-right-area">
				<div class="container">
					<div class="row">
						<div class="col-sm-6">
							<div class="copyright-text">
								<p>© 2024 LadakhMoto.com All rights reserved.</p>
							</div>							
						</div>
						<div class="col-sm-6">
							<div class="developedby-text">
								<a class="galdaninfotech" href="tel:+91-9596690135">Galdan Infotech</a>
							</div>
						</div>
					</div>
				</div>
			</div>
        </>
    );
});