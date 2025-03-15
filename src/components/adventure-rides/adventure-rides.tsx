import { component$, useStylesScoped$ } from '@builder.io/qwik';
import styles from './adventure-rides.css?inline';
import OverviewIcons from '~/components/overview-icons/overview-icons';
import ImgLehLadakhAdventureHome from '../../media/bike-tours/leh-ladakh-adventure/leh-ladakh-adventure-home.webp?jsx';
import ImgLadakhWithUmlingLaHome from '../../media/bike-tours/ladakh-with-umling-la/ladakh-with-umling-la-home.webp?jsx';
import ImgLadakhSrinagarWithUmlingLaHome from '../../media/bike-tours/ladakh-srinagar-with-umling-la/ladakh-srinagar-with-umling-la-home.webp?jsx';
import ImgLehZanskarLeh from '../../media/bike-tours/leh-zanskar-leh/leh-zanskar-leh-home.webp?jsx';
import ImgManaliLehSrinagar from '../../media/bike-tours/manali-leh-srinagar/manali-leh-srinagar-home.webp?jsx';
import ImgSrinagarLehManali from '../../media/bike-tours/srinagar-leh-manali/srinagar-leh-manali-home.webp?jsx';

export default component$(() => {
    useStylesScoped$(styles);

    return (
        <div class="package-section">
            <div class="container">
                <div class="package-inner">
                    <div class="row">
                        <div class="col-12">
                            <div class="intro">
                                <h2>Adventure Rides 2025</h2>
                            </div>
                        </div>

                        <div class="col-md-6 col-lg-4">
                            <div class="package-wrap">
                            <figure class="feature-image">
                                <a href="/bike-tours/leh-ladakh-adventure" aria-label="Leh Ladakh Adventure" title="Leh Ladakh Adventure">
                                    <ImgLehLadakhAdventureHome alt="Leh Ladakh Adventure" />
                                </a>
                            </figure>
                            <div class="package-price">
                                <span class="price-badge">₹ 15,500 / pp</span>
                            </div>
                            <div class="package-content-wrap">
                                <div class="package-meta text-center">
                                    <ul>
                                        <li> <i class="fas fa-calendar-alt"></i> 6 Days </li>
                                        <li> <i class="fas fa-map-marked-alt"></i> Leh - Leh </li>
                                    </ul>
                                </div>
                                <div class="package-content d-md-block">
                                    <h3><a href="/bike-tours/leh-ladakh-adventure" aria-label="Leh Ladakh Adventure" title="Leh Ladakh Adventure">Leh Ladakh Adventure</a></h3>
                                    <div class="col-12">
                                        <OverviewIcons highestAltitude="18300ft" distance="460km" duration="6D/5N" lodging="Hotel/Camp" meal="BF/Din" />
                                    </div>
                                    <span style="color: #000; margin-right: 5px;">Starting from</span> 
                                    <span style="color: #767474; margin-right: 5px;"><del>₹ 21,000</del></span>
                                    <span style="color: teal; text-align: center; font-size: 14px; font-weight: 700;">₹ 15,500/- </span>per person

                                    <div class="btn-wrap">
                                        <a class="button-text width-6" href="/downloads/bike-tours/leh-ladakh-adventure.pdf" download="Leh Ladakh Adventure" type="application/octet-stream" target="_blank" aria-label="Download PDF" title="Download PDF">Download PDF<i class="fas fa-angle-double-right"></i></a>
                                        <a href="/bike-tours/leh-ladakh-adventure" class="button-text width-6" aria-label="More Details" title="More Details">More Details<i class="fas fa-book-reader"></i></a>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>

                        <div class="col-md-6 col-lg-4"> 
                            <div class="package-wrap">
                            <figure class="feature-image">
                                <a href="/bike-tours/ladakh-with-umling-la" aria-label="Ladakh with Umling La" title="Ladakh with Umling La">
                                    <ImgLadakhWithUmlingLaHome alt="Ladakh with Umling La" />
                                </a>
                            </figure>
                            <div class="package-price">
                                <span class="price-badge">₹ 19,500 / pp</span> 
                            </div>
                            <div class="package-content-wrap">
                                <div class="package-meta text-center">
                                    <ul>
                                        <li> <i class="fas fa-calendar-alt"></i> 8 Days </li>
                                        <li> <i class="fas fa-map-marked-alt"></i> Leh - Leh </li>
                                    </ul>
                                </div>
                                <div class="package-content d-md-block">
                                    <h3 class="tour-name" data-tour-name="Ladakh With Umling La"><a href="/bike-tours/ladakh-with-umling-la" aria-label="Ladakh with Umling La" title="Ladakh with Umling La">Ladakh With Umling La</a></h3>
                                    <div class="col-12">
                                        <OverviewIcons duration="8D/7N" highestAltitude="19024ft" distance="820km" lodging="Hotel/Camp" meal="BF/Din" />
                                    </div>
                                    <span style="color: #000; margin-right: 5px;">Starting from</span> 
                                    <span style="color: #767474; margin-right: 5px;"><del>₹ 24,000</del></span>
                                    <span style="color: teal; text-align: center; font-size: 14px; font-weight: 700;">₹ 19,500/- </span>per person

                                    <div class="btn-wrap">
                                        <a class="button-text width-6" href="/downloads/bike-tours/ladakh-with-umling-la.pdf" download="Ladakh With Umling La" type="application/octet-stream" target="_blank" aria-label="Download PDF" title="Download PDF">Download PDF<i class="fas fa-angle-double-right"></i></a>
                                        <a href="/bike-tours/ladakh-with-umling-la" class="button-text width-6" aria-label="More Details" title="More Details">More Details<i class="fas fa-book-reader"></i></a>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>

                        <div class="col-md-6 col-lg-4">
                            <div class="package-wrap">
                            <figure class="feature-image">
                                <a href="/bike-tours/ladakh-srinagar-with-umling-la" aria-label="Ladakh Srinagar With Umling La" title="Ladakh Srinagar With Umling La">
                                    <ImgLadakhSrinagarWithUmlingLaHome alt="Ladakh Srinagar With Umling La" />
                                </a>
                            </figure>
                            <div class="package-price">
                                <span class="price-badge">₹ 25,000 / pp</span>

                            </div>
                            <div class="package-content-wrap">
                                <div class="package-meta text-center">
                                    <ul>
                                        <li> <i class="fas fa-calendar-alt"></i> 11 Days </li>
                                        <li> <i class="fas fa-map-marked-alt"></i> Leh - Srinagar </li>
                                    </ul>
                                </div>
                                <div class="package-content d-md-block">
                                    <h3><a href="/bike-tours/ladakh-srinagar-with-umling-la" aria-label="Ladakh Srinagar With Umling La" title="Ladakh Srinagar With Umling La">Ladakh Srinagar Umling La</a></h3>
                                    <div class="col-12">
                                        <OverviewIcons highestAltitude="19024ft" distance="1280km" duration="10N/11D" lodging="Hotel/Camp" meal="BF/Din" />
                                    </div>
                                    <span style="color: #000; margin-right: 5px;">Starting from</span> 
                                    <span style="color: #767474; margin-right: 5px;"><del>₹ 29,000</del></span>
                                    <span style="color: teal; text-align: center; font-size: 14px; font-weight: 700;">₹ 25,000/- </span>per person

                                    <div class="btn-wrap">
                                        <a class="button-text width-6" href="/downloads/bike-tours/ladakh-srinagar-with-umling-la.pdf" download="Ladakh Srinagar Umling La" type="application/octet-stream" target="_blank" aria-label="Download PDF" title="Download PDF">Download PDF<i class="fas fa-angle-double-right"></i></a>
                                        <a href="/bike-tours/ladakh-srinagar-with-umling-la" class="button-text width-6" aria-label="More Details" title="More Details">More Details<i class="fas fa-book-reader"></i></a>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>

                        <div class="col-md-6 col-lg-4">
                            <div class="package-wrap">
                            <figure class="feature-image">
                                <a href="/bike-tours/leh-zanskar-leh" aria-label="Leh Zanskar Leh" title="Leh Zanskar Leh">
                                    <ImgLehZanskarLeh alt="Leh Zanskar Leh" />
                                </a>
                            </figure>
                            <div class="package-price">
                                <span class="price-badge">₹ 28,500 / pp</span>
                            </div>
                            <div class="package-content-wrap">
                                <div class="package-meta text-center">
                                    <ul>
                                        <li> <i class="fas fa-calendar-alt"></i> 10 Days </li>
                                        <li> <i class="fas fa-map-marked-alt"></i> Leh - Leh </li>
                                    </ul>
                                </div>
                                <div class="package-content d-md-block">
                                    <h3><a href="/bike-tours/leh-zanskar-leh" aria-label="Leh Zanskar Leh" title="Leh Zanskar Leh">Leh Zanskar Leh</a></h3>
                                    <div class="col-12">
                                        <OverviewIcons highestAltitude="16703ft" distance="991km" duration="10D/9N" lodging="Hotel/Camp" meal="BF/Din" />
                                    </div>
                                    <span style="color: #000; margin-right: 5px;">Starting from</span> 
                                    <span style="color: #767474; margin-right: 5px;"><del>₹ 34,000</del></span>
                                    <span style="color: teal; text-align: center; font-size: 14px; font-weight: 700;">₹ 28,500/- </span>per person

                                    <div class="btn-wrap">
                                        <a class="button-text width-6" href="/downloads/bike-tours/leh-zanskar-leh.pdf" download="Leh Zanskar Leh" type="application/octet-stream" target="_blank" aria-label="Download PDF" title="Download PDF">Download PDF<i class="fas fa-angle-double-right"></i></a>
                                        <a href="/bike-tours/leh-zanskar-leh" class="button-text width-6" aria-label="More Details" title="More Details">More Details<i class="fas fa-book-reader"></i></a>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>

                        <div class="col-md-6 col-lg-4">
                            <div class="package-wrap">
                            <figure class="feature-image">
                                <a href="/bike-tours/manali-leh-srinagar" aria-label="Manali Leh Srinagar" title="Manali Leh Srinagar">
                                    <ImgManaliLehSrinagar alt="Manali Leh Srinagar" />
                                </a>
                            </figure>
                            <div class="package-price">
                                <span class="price-badge">₹ 23,000 / pp</span>
                            </div>
                            <div class="package-content-wrap">
                                <div class="package-meta text-center">
                                    <ul>
                                        <li> <i class="fas fa-calendar-alt"></i> 10 Days </li>
                                        <li> <i class="fas fa-map-marked-alt"></i> Manali - Srinagar </li>
                                    </ul>
                                </div>
                                <div class="package-content d-md-block">
                                    <h3><a href="/bike-tours/manali-leh-srinagar" aria-label="Manali Leh Srinagar" title="Manali Leh Srinagar">Manali Leh Srinagar</a></h3>
                                    <div class="col-12">
                                        <OverviewIcons highestAltitude="18380ft" distance="1010km" duration="10D/09N" lodging="Hotel/Camp" meal="BF/Din" />
                                    </div>
                                    <span style="color: #000; margin-right: 5px;">Starting from</span> 
                                    <span style="color: #767474; margin-right: 5px;"><del>₹ 29,000</del></span>
                                    <span style="color: teal; text-align: center; font-size: 14px; font-weight: 700;">₹ 23,000/- </span>per person

                                    <div class="btn-wrap">
                                        <a class="button-text width-6" href="/downloads/bike-tours/manali-leh-srinagar.pdf" download="Manali Leh Srinagar" type="application/octet-stream" target="_blank" aria-label="Download PDF" title="Download PDF">Download PDF<i class="fas fa-angle-double-right"></i></a>
                                        <a href="/bike-tours/manali-leh-srinagar" class="button-text width-6" aria-label="More Details" title="More Details">More Details<i class="fas fa-book-reader"></i></a>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>

                        <div class="col-md-6 col-lg-4">
                            <div class="package-wrap">
                            <figure class="feature-image">
                                <a href="/bike-tours/srinagar-leh-manali" aria-label="Srinagar Leh Manali" title="Srinagar Leh Manali">
                                    <ImgSrinagarLehManali alt="Srinagar Leh Manali" />
                                </a>
                            </figure>
                            <div class="package-price">
                                <span class="price-badge">₹ 23,000 / pp</span>
                            </div>
                            <div class="package-content-wrap">
                                <div class="package-meta text-center">
                                    <ul>
                                        <li> <i class="fas fa-calendar-alt"></i> 10 Days </li>
                                        <li> <i class="fas fa-map-marked-alt"></i> Srinagar - Manali </li>
                                    </ul>
                                </div>
                                <div class="package-content d-md-block">
                                    <h3><a href="/bike-tours/srinagar-leh-manali" aria-label="Srinagar Leh Manali" title="Srinagar Leh Manali">Srinagar Leh Manali</a></h3>
                                    <div class="col-12">
                                        <OverviewIcons highestAltitude="19024ft" distance="1010km" duration="10D/9N" lodging="Hotel/Camp" meal="BF/Din" />
                                    </div>
                                    <span style="color: #000; margin-right: 5px;">Starting from</span> 
                                    <span style="color: #767474; margin-right: 5px;"><del>₹ 27,000</del></span>
                                    <span style="color: teal; text-align: center; font-size: 14px; font-weight: 700;">₹ 23,000/- </span>per person

                                    <div class="btn-wrap">
                                        <a class="button-text width-6" href="/downloads/bike-tours/srinagar-leh-manali.pdf" download="Srinagar Leh Manali" type="application/octet-stream" target="_blank" aria-label="Download PDF" title="Download PDF">Download PDF<i class="fas fa-angle-double-right"></i></a>
                                        <a href="/bike-tours/srinagar-leh-manali" class="button-text width-6" aria-label="More Details" title="More Details">More Details<i class="fas fa-book-reader"></i></a>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
});