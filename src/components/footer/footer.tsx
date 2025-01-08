import { component$, useStylesScoped$ } from '@builder.io/qwik';
import styles from './footer.css?inline';

export default component$(() => {
    useStylesScoped$(styles);

    return (
        <>
            <footer class="footer-area pt-85 pb-60">
				<div class="container">
					<div class="row">
						<div class="col-lg-3 col-sm-6">
							<div class="widget contact-widget">
								<h3>About Ladakh Moto</h3>
								<p>Ladakh Moto is a locally based Ladakhi company with dedicated local employees working under the supervision of Local managers who are acquainted with the years of experience in handling and organizing such motorbiking expeditions.</p>
								<ul>
									<li><a href="https://www.facebook.com/ladakhmoto/" aria-label="Follow us on Facebook"><i class="fab fa-facebook-f"></i><span class="sr-only">Facebook</span></a></li>
									<li><a href="#" aria-label="Follow us on Twitter"><i class="bi bi-twitter-x"></i><span class="sr-only">Twitter</span></a></li>
									<li><a href="https://www.instagram.com/ladakhmototour/" aria-label="Follow us on Instagram"><i class="fab fa-instagram"></i><span class="sr-only">Instagram</span></a></li>
									<li><a href="https://www.youtube.com/ladakhmototour/" aria-label="Subscribe to our YouTube channel"><i class="fab fa-youtube"></i><span class="sr-only">YouTube</span></a></li>
								</ul>
							</div>
						</div>
						<div class="col-lg-2 col-sm-3">
							<div class="widget quick-link-widget">
								<h3>Quick Links</h3>
								<ul>
									<li><a href="/about"><i class="fal fa-angle-right"></i>About Us</a></li>
									<li><a href="/why-travel-with-ladakhmoto"><i class="fal fa-angle-right"></i>Why Travel With Us?</a></li>
									<li><a href="/guides-and-staffs"><i class="fal fa-angle-right"></i>Guides & Staff</a></li>
									<li><a href="/contact"><i class="fal fa-angle-right"></i>Contact Us</a></li>
									<li><a href="/how-to-reach"><i class="fal fa-angle-right"></i>How To Reach</a></li>
									<li><a href="/our-core-values"><i class="fal fa-angle-right"></i>Our Core Values</a></li>
								</ul>
							</div>
						</div>
						<div class="col-lg-2 col-sm-3">
							<div class="widget quick-link-categories">
								<h3>Adventure Rides</h3>
								<ul>
									<li><a href="/ladakh-with-umling-la"><i class="fal fa-angle-right"></i>Ladakh With Umling La</a></li>
									<li><a href="/leh-ladakh-adventure"><i class="fal fa-angle-right"></i>Leh Ladakh Adventure</a></li>
									<li><a href="/ladakh-srinagar-with-umling-la"><i class="fal fa-angle-right"></i>Ladakh Srinagar Umling La</a></li>
									<li><a href="/leh-zangskar-leh"><i class="fal fa-angle-right"></i>Leh Zangskar Leh</a></li>
									<li><a href="/manali-leh-srinagar"><i class="fal fa-angle-right"></i>Manali Leh Srinagar</a></li>
									<li><a href="/srinagar-leh-manali"><i class="fal fa-angle-right"></i>Srinagar Leh Manali</a></li>
								</ul>
							</div>
						</div>
						<div class="col-lg-2 col-sm-4">
							<div class="widget quick-destinations">
								<h3>Destinations</h3>
								<ul>
									<li><a href="#"><i class="fal fa-angle-right"></i>Nubra Valley</a></li>
									<li><a href="#"><i class="fal fa-angle-right"></i>Pangong Lake</a></li>
									<li><a href="#"><i class="fal fa-angle-right"></i>Tsomoriri Lake</a></li>
									<li><a href="#"><i class="fal fa-angle-right"></i>Suru Valley</a></li>
									<li><a href="#"><i class="fal fa-angle-right"></i>Zanskar Valley</a></li>
									<li><a href="#"><i class="fal fa-angle-right"></i>Tsokar Lake</a></li>
									<li><a href="#"><i class="fal fa-angle-right"></i>Turtuk Valley</a></li>
								</ul>
							</div>
						</div>
						<div class="col-lg-3 col-sm-6">
							<div class="widget contact-us">
								<h3>Contact Us</h3>
								<ul>
									<li><a href="#"><i class="fal fa-paper-plane"></i>DB2 Zangsti, Nr. MCL Vehicle Parking, Leh, 194101 Ladakh, India</a></li>
									<li><a href="mailto:info@ladakhmoto.com"><i class="fal fa-envelope"></i>info@ladakhmoto.com</a></li>
									<li><a href="tel:9622958013"><i class="fal fa-phone-alt"></i>+91 9622958013</a></li>
									<li><a href="tel:9906989962"><i class="fal fa-phone-alt"></i>+91 9906989962</a></li>
									<li><a href="tel:9419393330"><i class="fal fa-phone-alt"></i>+91 9419393330</a></li>
									<li><a href="tel:8899537311"><i class="fal fa-phone-alt"></i>+91 8899537311</a></li>
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
								<a href="tel:+91-9596690135"><i class="fal fa-phone-alt"></i>Galdan Infotech</a>
							</div>
						</div>
					</div>
				</div>
			</div>
        </>
    );
});