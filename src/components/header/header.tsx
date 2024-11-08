import { component$, useStylesScoped$ } from '@builder.io/qwik';
import styles from './header.css?inline';

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <header id="header" class="header-area style-2 header-border absulate-header">
        <div class="container">
            {/* <!-- Start header top --> */}
            <div class="row">
                <div class="col-lg-6 col-sm-3">
                    <div class="header-top-left">
                        <ul>
                            <li class="has-dropdown"><a href="#">USD</a>
                                <ul>
                                    <li><a href="#">INR</a></li>
                                    <li><a href="#">USD</a></li>
                                    <li><a href="#">EUR</a></li>
                                </ul>
                            </li>
                            <li class="has-dropdown"><a href="#">English</a>
                                <ul>
                                    <li><a href="#">English</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-6 col-sm-9">
                    {/* <!-- Header top contact --> */}
                    <div class="header-top-contact">
                        <ul>
                            <li><a href="mailto:info@ladakhmoto.com"><i class="fal fa-envelope"></i>info@ladakhmoto.com</a></li>
                            <li><a href="tel:+91-9622958013"><i class="fal fa-phone-alt"></i>+91-9622958013</a></li>
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
                        <div class="site-logo">
                            <a href="/"><img src="img/logo4zzz.png" alt="LadakhMoto" /></a>
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
                                    <li class="has-dropdown">
                                        <a href="#">About</a>
                                        <ul>
                                            <li><a href="/about">About Us</a></li>
                                            <li><a href="#">Our Services</a></li>
                                            <li><a href="#">About Ladakh</a></li>
                                        </ul>
                                    </li>
                                    <li class="has-dropdown">
                                        <a href="#">Biking Adventures</a>
                                        <ul>
                                            <li><a href="/ladakh-with-umling-la">Ladakh With Umling La</a></li>
                                            <li><a href="/leh-ladakh-adventure">Leh Ladakh Adventure</a></li>
                                            <li><a href="/ladakh-srinagar-with-umling-la">Ladakh Srinagar With Umling La</a></li>
                                            <li><a href="/leh-zangskar-leh">Leh Zangskar Leh</a></li>
                                            <li><a href="/manali-to-leh-via-umling-la">Manali To Leh Via Umling La</a></li>
                                            <li><a href="/srinagar-leh-manali">Srinagar Leh Manali</a></li>
                                        </ul>
                                    </li>
                                    <li class="has-dropdown">
                                        <a href="#">Packages</a>
                                        <ul>
                                            <li><a href="/packages/all-ladakh-tour">All Ladakh Tour</a></li>
                                            <li><a href="/packages/amazing-ladakh">Amazing Ladakh Tour</a></li>
                                            <li><a href="/packages/ladakh-tour-with-hanle">Ladakh Tour With Hanle</a></li>
                                            <li><a href="/packages/ladakh-zangskar-valley-tour">Ladakh Zangskar Valley Tour</a></li>
                                        </ul>
                                    </li>
                                    <li class="has-dropdown">
                                        <a href="#">Destinations</a>
                                        <ul>
                                            <li><a href="/destinations\leh-city">Leh City</a></li>
                                            <li><a href="/destinations\nubra-valley">Nubra Valley</a></li>
                                            <li><a href="/destinations\pangong-lake">Pangong Lake</a></li>
                                            <li><a href="/destinations\tsomoriri-lake">Tsomoriri Lake</a></li>
                                            <li><a href="/destinations\zangskar-valley">Zangskar Valley</a></li>
                                            <li><a href="/destinations\hanle-village">Hanle Village</a></li>
                                            <li><a href="/destinations\shanti-stupa">Shanti Stupa</a></li>
                                            <li><a href="/destinations\thiksey-monstery">Thiksey Monstery</a></li>
                                            <li><a href="/destinations\lamayuru-monastery">Lamayuru Monastery</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="c#">Gallery</a></li>
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