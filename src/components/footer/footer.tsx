import { component$, useStylesScoped$, useVisibleTask$ } from '@builder.io/qwik';
import styles from './footer.css?inline';

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
									<li><a class="facebook" href="https://www.facebook.com/ladakhmotos/" aria-label="Follow us on Facebook" title="Follow us on Facebook" target="_blank" rel="noreferrer"><span class="sr-only">Facebook</span></a></li>
									<li><a class="twitter" href="https://x.com/LadakhMoto/status/1868987553472561199" aria-label="Follow us on Twitter" title="Follow us on Twitter" target="_blank" rel="noreferrer"><span class="sr-only">Twitter</span></a></li>
									<li><a class="instagram" href="https://www.instagram.com/ladakhmototour/" aria-label="Follow us on Instagram" title="Follow us on Instagram" target="_blank" rel="noreferrer"><span class="sr-only">Instagram</span></a></li>
									<li><a class="youtube" href="https://www.youtube.com/@LadakhMotoTour" aria-label="Subscribe to our YouTube channel" title="Subscribe to our YouTube channel" target="_blank" rel="noreferrer"><span class="sr-only">YouTube</span></a></li>
								</ul>
							</div>
						</div>
						<div class="col-lg-2 col-sm-3">
							<div class="widget quick-link-widget">
								<h3>Quick Links</h3>
								<ul>
									<li><a href="/about/about-us" aria-label="About Us" title="About Us">About Us</a></li>
									<li><a href="/why-travel-with-ladakhmoto" aria-label="Why Travel With Us?" title="Why Travel With Us?">Why Travel With Us?</a></li>
									<li><a href="/guides-and-staffs" aria-label="Guides & Staff" title="Guides & Staff">Guides & Staff</a></li>
									<li><a href="/contact" aria-label="Contact Us" title="Contact Us">Contact Us</a></li>
									<li><a href="/how-to-reach" aria-label="How To Reach" title="How To Reach">How To Reach</a></li>
									<li><a href="/our-core-values" aria-label="Our Core Values" title="Our Core Values">Our Core Values</a></li>
								</ul>
							</div>
						</div>
						<div class="col-lg-2 col-sm-3">
							<div class="widget quick-link-categories">
								<h3>Adventure Rides</h3>
								<ul>
									<li><a href="/bike-tours/leh-ladakh-adventure" aria-label="Leh Ladakh Adventure" title="Leh Ladakh Adventure">Leh Ladakh Adventure</a></li>
									<li><a href="/bike-tours/ladakh-with-umling-la" aria-label="Ladakh With Umling La" title="Ladakh With Umling La"> Ladakh With Umling La</a></li>
									<li><a href="/bike-tours/ladakh-srinagar-with-umling-la" aria-label="Ladakh Srinagar Umling La" title="Ladakh Srinagar Umling La">Ladakh Srinagar Umling La</a></li>
									<li><a href="/bike-tours/leh-zangskar-leh" aria-label="Leh Zangskar Leh" title="Leh Zangskar Leh">Leh Zangskar Leh</a></li>
									<li><a href="/bike-tours/manali-leh-srinagar" aria-label="Manali Leh Srinagar" title="Manali Leh Srinagar">Manali Leh Srinagar</a></li>
									<li><a href="/bike-tours/srinagar-leh-manali" aria-label="Srinagar Leh Manali" title="Srinagar Leh Manali">Srinagar Leh Manali</a></li>
								</ul>
							</div>
						</div>
						<div class="col-lg-2 col-sm-4">
							<div class="widget quick-destinations">
								<h3>Destinations</h3>
								<ul>
									<li><a href="/destinations/nubra-valley" aria-label="Nubra Valley" title="Nubra Valley">Nubra Valley</a></li>
									<li><a href="/destinations/pangong-lake" aria-label="Pangong Lake" title="Pangong Lake">Pangong Lake</a></li>
									<li><a href="/destinations/tsomoriri-lake" aria-label="Tsomoriri Lake" title="Tsomoriri Lake">Tsomoriri Lake</a></li>
									<li><a href="/destinations/leh-city" aria-label="Leh City" title="Leh City">Leh City</a></li>
									<li><a href="/destinations/zanskar-valley" aria-label="Zanskar Valley" title="Zanskar Valley">Zanskar Valley</a></li>
									<li><a href="/destinations/shanti-stupa" aria-label="Shanti Stupa" title="Shanti Stupa">Shanti Stupa</a></li>
									<li><a href="/destinations/lamayuru-monastery" aria-label="Lamayuru Monastery" title="Lamayuru Monastery">Lamayuru Monastery</a></li>
								</ul>
							</div>
						</div>
						<div class="col-lg-3 col-sm-6">
							<div class="widget contact-us">
								<h3>Contact Us</h3>
								<ul>
									<li><a class="address" aria-label="Address" title="Address" href="#">DB2 Zangsti, Nr. MCL Vehicle Parking, Leh, 194101 Ladakh, India</a></li>
									<li><a class="email email-link" aria-label="Email" title="Email" href="#">Email Us</a></li>
									<li><a class="phone" aria-label="Phone Number" title="Phone Number" href="tel:+91 9622958013">+91 9622958013</a></li>
									<li><a class="phone" aria-label="Phone Number" title="Phone Number" href="tel:+91 9906989962">+91 9906989962</a></li>
									<li><a class="phone" aria-label="Phone Number" title="Phone Number" href="tel:+91 9419393330">+91 9419393330</a></li>
									<li><a class="phone" aria-label="Phone Number" title="Phone Number" href="tel:+91 8899537311">+91 8899537311</a></li>
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
								<a class="galdaninfotech" href="tel:+91-9596690135" aria-label="Galdan Infotech" title="Galdan Infotech">Galdan Infotech</a>
							</div>
						</div>
					</div>
				</div>
			</div>
        </>
    );
});