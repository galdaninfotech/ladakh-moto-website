import { component$, useStylesScoped$ } from '@builder.io/qwik';
import styles from './header.css?inline';
import ImgLogoSM from '../../media/logo-sm.png?jsx';
import ImgLogoLG from '../../media/logo-lg.png?jsx';

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <header id="header" class="header-area style-2 header-border absulate-header">
        <div class="container">
            {/* <!-- Start header top --> */}
            <div class="row">
                <div class="col-lg-6 col-sm-3">
                    <div class="header-top-left d-none">
                        
                    </div>
                </div>
                <div class="col-lg-6 col-sm-9">
                    {/* <!-- Header top contact --> */}
                    <div class="header-top-contact">
                        <ul>
                            <li><a class="email email-link" aria-label="Email" title="Email" href="#">Email Us</a></li>
                            <li><a class="phone" aria-label="phone" title="phone" href="tel:+91-9622958013">+91-9622958013</a></li>
                            <li><a class="phone" aria-label="phone" title="phone" href="tel:+91-9906989962">+91-9906989962</a></li>
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
                                <ImgLogoSM id="logo-sm" decoding="sync" loading="eager" alt="Ladakh Moto" aria-label="Ladakh Moto" title="Ladakh Moto" />
                            </a>
                        </div>

                        <div class="site-logo d-none d-md-block" style="top: -8px;">
                            <a href="/">
                                <ImgLogoLG decoding="sync" loading="eager" alt="LadakhMoto" aria-label="Ladakh Moto" title="Ladakh Moto" />
                            </a>
                        </div>
                        {/* <!-- End site logo --> */}
                    </div>
                    <div class="col-lg-10 col-sm-6 col-6">
                        {/* <!-- Start Navigation --> */}
                        <div class="main-menu-wrap">
                            <nav class="gene-nav">
                                <ul class="menu">
                                    <li>
                                        <a aria-label="Home" title="Home" href="/">Home</a>
                                    </li>
                                    <li class="dropdown">
                                        <a aria-label="About" title="About" href="#">About</a>
                                        <ul>
                                            <li><a aria-label="About Us" title="About Us" href="/about/about-us">About Us</a></li>
                                            <li><a aria-label="About Ladakh" title="About Ladakh" href="/about/about-ladakh">About Ladakh</a></li>
                                            <li><a aria-label="Our Services" title="Our Services" href="/about/our-services">Our Services</a></li>
                                            <li><a aria-label="Our Team" title="Our Team" href="/about/our-team">Our Team</a></li>
                                        </ul>
                                    </li>
                                    <li class="dropdown">
                                        <a aria-label="Biking Adventures" title="Biking Adventures" href="#">Biking Adventures</a>
                                        <ul>
                                            <li><a aria-label="Leh Ladakh Adventure" title="Leh Ladakh Adventure" href="/bike-tours/leh-ladakh-adventure">Leh Ladakh Adventure</a></li>
                                            <li><a aria-label="Leh Ladakh With Turtuk" title="Leh Ladakh With Turtuk" href="/bike-tours/leh-ladakh-with-turtuk">Leh Ladakh With Turtuk</a></li>
                                            <li><a aria-label="Ladakh With Umling La" title="Ladakh With Umling La" href="/bike-tours/ladakh-with-umling-la">Ladakh With Umling La</a></li>                             
                                            <li><a aria-label="Manali Leh With Umling La" title="Manali Leh With Umling La" href="/bike-tours/manali-leh-with-umling-la">Manali Leh With Umling La</a></li>                             
                                            <li><a aria-label="Ladakh Srinagar With Umling La" title="Ladakh Srinagar With Umling La" href="/bike-tours/ladakh-srinagar-with-umling-la">Ladakh Srinagar With Umling La</a></li>
                                            <li><a aria-label="Manali Leh Srinagar" title="Manali Leh Srinagar" href="/bike-tours/manali-leh-srinagar">Manali Leh Srinagar</a></li>
                                            <li><a aria-label="Srinagar Leh Manali" title="Srinagar Leh Manali" href="/bike-tours/srinagar-leh-manali">Srinagar Leh Manali</a></li>
                                            <li><a aria-label="Leh Zanskar Leh" title="Leh Zanskar Leh" href="/bike-tours/leh-zanskar-leh">Leh Zanskar Leh</a></li>
                                        </ul>
                                    </li>
                                    <li class="dropdown">
                                        <a aria-label="Holiday Packages" title="Holiday Packages" href="#">Holiday Packages</a>
                                        <ul> 
                                            <li><a aria-label="All Ladakh Tour" title="All Ladakh Tour" href="/bike-tour-packages/all-ladakh-tour">All Ladakh Tour</a></li>
                                            <li><a aria-label="Amazing Ladakh Tour" title="Amazing Ladakh Tour" href="/bike-tour-packages/amazing-ladakh">Amazing Ladakh Tour</a></li>
                                            <li><a aria-label="Ladakh Tour With Hanle" title="Ladakh Tour With Hanle" href="/bike-tour-packages/ladakh-tour-with-hanle">Ladakh Tour With Hanle</a></li>
                                            <li><a aria-label="Ladakh Zanskar Valley Tour" title="Ladakh Zanskar Valley Tour" href="/bike-tour-packages/ladakh-zanskar-valley-tour">Ladakh Zanskar Valley Tour</a></li>
                                        </ul>
                                    </li>
                                    <li class="dropdown">
                                        <a aria-label="Destinations" title="Destinations" href="#">Destinations</a>
                                        <ul>
                                            <li><a aria-label="Leh City" title="Leh City" href="/destinations/leh-city">Leh City</a></li>
                                            <li><a aria-label="Nubra Valley" title="Nubra Valley" href="/destinations/nubra-valley">Nubra Valley</a></li>
                                            <li><a aria-label="Pangong Lake" title="Pangong Lake" href="/destinations/pangong-lake">Pangong Lake</a></li>
                                            <li><a aria-label="Tsomoriri Lake" title="Tsomoriri Lake" href="/destinations/tsomoriri-lake">Tsomoriri Lake</a></li>
                                            <li><a aria-label="Zanskar Valley" title="Zanskar Valley" href="/destinations/zanskar-valley">Zanskar Valley</a></li>
                                            <li><a aria-label="Hanle Village" title="Hanle Village" href="/destinations/hanle-village">Hanle Village</a></li> 
                                            <li><a aria-label="Shanti Stupa" title="Shanti Stupa" href="/destinations/shanti-stupa">Shanti Stupa</a></li>
                                            <li><a aria-label="Thiksey Monastery" title="Thiksey Monastery" href="/destinations/thiksey-monastery">Thiksey Monastery</a></li>
                                            <li><a aria-label="Lamayuru Monastery" title="Lamayuru Monastery" href="/destinations/lamayuru-monastery">Lamayuru Monastery</a></li>
                                        </ul>
                                    </li>
                                    <li><a aria-label="Gallery" title="Gallery" href="/gallery">Gallery</a></li>
                                    <li><a aria-label="Blog" title="Blog" href="/gallery">Blog</a></li>
                                    <li class="icon">
                                        <a aria-label="Contack" title="Contack" href="/contact"><i class="far fa-user"></i>Contact</a>
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