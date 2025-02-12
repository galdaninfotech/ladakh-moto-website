import { component$, useStylesScoped$ } from '@builder.io/qwik';
import styles from './header.css?inline';
import ImgLogoSM from '../../media/logo-sm.png?jsx';
import ImgLogoLG from '../../media/logo-lg.png?jsx';
import ChevronDown from "~/components/svgs/chevron-down/chevron-down";
import EmailAt from "~/components/svgs/email-at/email-at";
import Telephone from "~/components/svgs/telephone/telephone";

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <header id="header" class="header-area style-2 header-border absulate-header">
        <div class="container">
            {/* <!-- Start header top --> */}
            <div class="row">
                <div class="col-lg-6 col-sm-3">
                    <div class="header-top-left d-none">
                        <ul>
                            <li class="dropdown"><a href="#" aria-label="USD">USD</a>
                                <ul>
                                    <li><a href="#" aria-label="INR">INR</a></li>
                                    <li><a href="#" aria-label="USD">USD</a></li>
                                    <li><a href="#" aria-label="EUR">EUR</a></li>
                                </ul>
                            </li>
                            <li class="dropdown"><a href="#" aria-label="English">English</a>
                                <ul>
                                    <li><a href="#" aria-label="English">English</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-6 col-sm-9">
                    {/* <!-- Header top contact --> */}
                    <div class="header-top-contact">
                        <ul>
                            <li><a class="email" href="mailto:info@ladakhmoto.com">info@ladakhmoto.com</a></li>
                            <li><a class="phone" href="tel:+91-9622958013">+91-9622958013</a></li>
                            <li><a class="phone" href="tel:+91-9906989962">+91-9906989962</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* <!-- Start header top --> */}
        </div>
        <div class="navigation-area">
            <div class="container">
                <div class="row">
                    <div class="col-lg-2 col-sm-6 col-6">
                        {/* <!-- Start site logo --> */}
                        <div class="site-logo d-md-none">
                            <a href="/">
                                <ImgLogoSM id="logo-sm" decoding="sync" loading="eager" alt="Ladakh Moto" />
                            </a>
                        </div>

                        <div class="site-logo d-none d-md-block" style="top: -8px;">
                            <ImgLogoLG decoding="sync" loading="eager" alt="LadakhMoto" />
                        </div>
                        {/* <!-- End site logo --> */}
                    </div>
                    <div class="col-lg-10 col-sm-6 col-6">
                        {/* <!-- Start Navigation --> */}
                        <div class="main-menu-wrap">
                            <nav class="gene-nav">
                                <ul class="menu">
                                    <li>
                                        <a href="/">Home</a>
                                    </li>
                                    <li class="dropdown">
                                        <a href="#">About</a>
                                        <ul>
                                            <li><a href="/about/about-us">About Us</a></li>
                                            <li><a href="/about/about-ladakh">About Ladakh</a></li>
                                            <li><a href="/about/our-services">Our Services</a></li>
                                            <li><a href="/about/our-team">Our Team</a></li>
                                        </ul>
                                    </li>
                                    <li class="dropdown">
                                        <a href="#">Biking Adventures</a>
                                        <ul>
                                            <li><a href="/bike-tours/leh-ladakh-adventure">Leh Ladakh Adventure</a></li>
                                            <li><a href="/bike-tours/ladakh-with-umling-la">Ladakh With Umling La</a></li>
                                            <li><a href="/bike-tours/ladakh-srinagar-with-umling-la">Ladakh Srinagar With Umling La</a></li>
                                            <li><a href="/bike-tours/leh-zangskar-leh">Leh Zangskar Leh</a></li>
                                            <li><a href="/bike-tours/manali-leh-srinagar">Manali Leh Srinagar</a></li>
                                            <li><a href="/bike-tours/srinagar-leh-manali">Srinagar Leh Manali</a></li>
                                        </ul>
                                    </li>
                                    <li class="dropdown">
                                        <a href="#">Holiday Packages</a>
                                        <ul>
                                            <li><a href="/bike-tour-packages/all-ladakh-tour">All Ladakh Tour</a></li>
                                            <li><a href="/bike-tour-packages/amazing-ladakh">Amazing Ladakh Tour</a></li>
                                            <li><a href="/bike-tour-packages/ladakh-tour-with-hanle">Ladakh Tour With Hanle</a></li>
                                            <li><a href="/bike-tour-packages/ladakh-zangskar-valley-tour">Ladakh Zangskar Valley Tour</a></li>
                                        </ul>
                                    </li>
                                    <li class="dropdown">
                                        <a href="#">Destinations</a>
                                        <ul>
                                            <li><a href="/destinations\leh-city">Leh City</a></li>
                                            <li><a href="/destinations\nubra-valley">Nubra Valley</a></li>
                                            <li><a href="/destinations\pangong-lake">Pangong Lake</a></li>
                                            <li><a href="/destinations\tsomoriri-lake">Tsomoriri Lake</a></li>
                                            <li><a href="/destinations\zanskar-valley">Zanskar Valley</a></li>
                                            <li><a href="/destinations\hanle-village">Hanle Village</a></li>
                                            <li><a href="/destinations\shanti-stupa">Shanti Stupa</a></li>
                                            <li><a href="/destinations\thiksey-monastery">Thiksey Monastery</a></li>
                                            <li><a href="/destinations\lamayuru-monastery">Lamayuru Monastery</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="/gallery">Gallery</a></li>
                                    <li><a href="/gallery">Blog</a></li>
                                    <li class="icon">
                                        <a href="/contact"><i class="far fa-user"></i>Contact</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        {/* <!-- Mobile Menu Active here. Don't Remove it --> */}
                        <div class="mobile-menu-area"></div>
                        {/* <!-- End Navigation --> */}
                    </div>
                </div>
            </div>
        </div>
    </header>
  );
});