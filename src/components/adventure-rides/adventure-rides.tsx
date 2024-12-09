import { component$, useStylesScoped$ } from '@builder.io/qwik';
import styles from './adventure-rides.css?inline';
import OverviewIcons from '~/components/overview-icons/overview-icons';

export default component$(() => {
    useStylesScoped$(styles);

    return (
        <div class="package-section">
            <div class="container">
                <div class="package-inner">
                    <div class="row">
                        <div class="col-12">
                            <div class="intro">
                                <h1>Adventure Rides 2025</h1>
                            </div>
                        </div>
                        
                        <div class="col-md-6 col-lg-4"> 
                            <div class="package-wrap">
                            <figure class="feature-image">
                                <a href="/ladakh-with-umling-la">
                                    <img src="/img/tours/ladakh-with-umling-la/ladakh-with-umling-la-home.jpg" alt="" />
                                </a>
                            </figure>
                            <div class="package-price">
                                <h6>
                                    <span>₹ 23,000 </span> / pp
                                </h6>
                            </div>
                            <div class="package-content-wrap">
                                <div class="package-meta text-center">
                                    <ul>
                                        <li> <i class="fas fa-calendar-alt"></i> 8 Days </li>
                                        <li> <i class="fas fa-map-marked-alt"></i> Leh - Leh </li>
                                    </ul>
                                </div>
                                <div class="package-content d-md-block">
                                    <h3 class="tour-name" data-tour-name="Ladakh With Umling La"><a href="/ladakh-with-umling-la">Ladakh With Umling La</a></h3>
                                    <div class="col-12">
                                        <OverviewIcons duration="8D/7N" highestAltitude="19024ft" distance="1050km" lodging="Hotel/Camp" meal="BF/Din" />
                                    </div>
                                    <span style="color: #000; margin-right: 5px;">Starting from</span> 
                                    <span style="color: #999999; margin-right: 5px;"><del>₹ 27,000</del></span>
                                    <span style="color: green; text-align: center; font-size: 14px; font-weight: 700;">₹ 23,000/- </span>per person

                                    <div class="btn-wrap">
                                        <a href="#" class="button-text width-6 btnOpenForm">Book Now<i class="fas fa-angle-double-right"></i></a>
                                        <a href="/ladakh-with-umling-la" class="button-text width-6">More Details<i class="fas fa-book-reader"></i></a>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>

                        <div class="col-md-6 col-lg-4">
                            <div class="package-wrap">
                            <figure class="feature-image">
                                <a href="/leh-ladakh-adventure">
                                    <img src="/img/tours/leh-ladakh-adventure/leh-ladakh-adventure-home.jpg" alt="" />
                                </a>
                            </figure>
                            <div class="package-price">
                                <h6>
                                    <span>₹ 19,500 </span> / pp
                                </h6>
                            </div>
                            <div class="package-content-wrap">
                                <div class="package-meta text-center">
                                    <ul>
                                        <li> <i class="fas fa-calendar-alt"></i> 6 Days </li>
                                        <li> <i class="fas fa-map-marked-alt"></i> Leh - Leh </li>
                                    </ul>
                                </div>
                                <div class="package-content d-md-block">
                                    <h3><a href="/leh-ladakh-adventure">Leh Ladakh Adventure</a></h3>
                                    <div class="col-12">
                                        <OverviewIcons highestAltitude="18300ft" distance="550km" duration="6D/5N" lodging="Hotel/Camp" meal="BF/Din" />
                                    </div>
                                    <span style="color: #000; margin-right: 5px;">Starting from</span> 
                                    <span style="color: #999999; margin-right: 5px;"><del>₹ 23,000</del></span>
                                    <span style="color: green; text-align: center; font-size: 14px; font-weight: 700;">₹ 19,500/- </span>per person

                                    <div class="btn-wrap">
                                        <a href="#" class="button-text width-6 btnOpenForm">Book Now<i class="fas fa-angle-double-right"></i></a>
                                        <a href="/leh-ladakh-adventure" class="button-text width-6">More Details<i class="fas fa-book-reader"></i></a>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>

                        <div class="col-md-6 col-lg-4">
                            <div class="package-wrap">
                            <figure class="feature-image">
                                <a href="/ladakh-srinagar-with-umling-la">
                                    <img src="/img/tours/ladakh-srinagar-with-umling-la/ladakh-srinagar-with-umling-la-home.jpg" alt="" />
                                </a>
                            </figure>
                            <div class="package-price">
                                <h6>
                                    <span>₹ 22,000 </span> / pp
                                </h6>
                            </div>
                            <div class="package-content-wrap">
                                <div class="package-meta text-center">
                                    <ul>
                                        <li> <i class="fas fa-calendar-alt"></i> 10 Days </li>
                                        <li> <i class="fas fa-map-marked-alt"></i> Leh - Srinagar </li>
                                    </ul>
                                </div>
                                <div class="package-content d-md-block">
                                    <h3><a href="/ladakh-srinagar-with-umling-la">Ladakh Srinagar Umling La</a></h3>
                                    <div class="col-12">
                                        <OverviewIcons highestAltitude="19024ft" distance="1576km" duration="10D/9N" lodging="Hotel/Camp" meal="BF/Din" />
                                    </div>
                                    <span style="color: #000; margin-right: 5px;">Starting from</span> 
                                    <span style="color: #999999; margin-right: 5px;"><del>₹ 27,000</del></span>
                                    <span style="color: green; text-align: center; font-size: 14px; font-weight: 700;">₹ 22,000/- </span>per person

                                    <div class="btn-wrap">
                                        <a href="#" class="button-text width-6 btnOpenForm">Book Now<i class="fas fa-angle-double-right"></i></a>
                                        <a href="/ladakh-srinagar-with-umling-la" class="button-text width-6">More Details<i class="fas fa-book-reader"></i></a>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>

                        <div class="col-md-6 col-lg-4">
                            <div class="package-wrap">
                            <figure class="feature-image">
                                <a href="/leh-zangskar-leh">
                                    <img src="/img/tours/leh-zangskar-leh/leh-zangskar-leh-home.jpg" alt="" />
                                </a>
                            </figure>
                            <div class="package-price">
                                <h6>
                                    <span>₹ 29,500 </span> / pp
                                </h6>
                            </div>
                            <div class="package-content-wrap">
                                <div class="package-meta text-center">
                                    <ul>
                                        <li> <i class="fas fa-calendar-alt"></i> 10 Days </li>
                                        <li> <i class="fas fa-map-marked-alt"></i> Leh - Leh </li>
                                    </ul>
                                </div>
                                <div class="package-content d-md-block">
                                    <h3><a href="/leh-zangskar-leh">Leh Zangskar Leh</a></h3>
                                    <div class="col-12">
                                        <OverviewIcons highestAltitude="14070ft" distance="1485km" duration="10D/9N" lodging="Hotel/Camp" meal="BF/Din" />
                                    </div>
                                    <span style="color: #000; margin-right: 5px;">Starting from</span> 
                                    <span style="color: #999999; margin-right: 5px;"><del>₹ 34,000</del></span>
                                    <span style="color: green; text-align: center; font-size: 14px; font-weight: 700;">₹ 29,500/- </span>per person

                                    <div class="btn-wrap">
                                        <a href="#" class="button-text width-6 btnOpenForm">Book Now<i class="fas fa-angle-double-right"></i></a>
                                        <a href="/leh-zangskar-leh" class="button-text width-6">More Details<i class="fas fa-book-reader"></i></a>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>

                        <div class="col-md-6 col-lg-4">
                            <div class="package-wrap">
                            <figure class="feature-image">
                                <a href="/manali-to-leh-via-umling-la">
                                    <img src="/img/tours/manali-to-leh-via-umling-la/manali-to-leh-via-umling-la-home.jpg" alt="" />
                                </a>
                            </figure>
                            <div class="package-price">
                                <h6>
                                    <span>₹ 25,000 </span> / pp
                                </h6>
                            </div>
                            <div class="package-content-wrap">
                                <div class="package-meta text-center">
                                    <ul>
                                        <li> <i class="fas fa-calendar-alt"></i> 11 Days </li>
                                        <li> <i class="fas fa-map-marked-alt"></i> Manali - Leh </li>
                                    </ul>
                                </div>
                                <div class="package-content d-md-block">
                                    <h3><a href="/manali-to-leh-via-umling-la">Manali Leh Via Umling La</a></h3>
                                    <div class="col-12">
                                        <OverviewIcons highestAltitude="19024ft" distance="1525km" duration="11D/10N" lodging="Hotel/Camp" meal="BF/Din" />
                                    </div>
                                    <span style="color: #000; margin-right: 5px;">Starting from</span> 
                                    <span style="color: #999999; margin-right: 5px;"><del>₹ 29,000</del></span>
                                    <span style="color: green; text-align: center; font-size: 14px; font-weight: 700;">₹ 25,000/- </span>per person

                                    <div class="btn-wrap">
                                        <a href="#" class="button-text width-6 btnOpenForm">Book Now<i class="fas fa-angle-double-right"></i></a>
                                        <a href="/manali-to-leh-via-umling-la" class="button-text width-6">More Details<i class="fas fa-book-reader"></i></a>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>

                        <div class="col-md-6 col-lg-4">
                            <div class="package-wrap">
                            <figure class="feature-image">
                                <a href="/srinagar-leh-manali">
                                    <img src="/img/tours/srinagar-leh-manali/srinagar-leh-manali-home.jpg" alt="" />
                                </a>
                            </figure>
                            <div class="package-price">
                                <h6>
                                    <span>₹ 22,000 </span> / pp
                                </h6>
                            </div>
                            <div class="package-content-wrap">
                                <div class="package-meta text-center">
                                    <ul>
                                        <li> <i class="fas fa-calendar-alt"></i> 10 Days </li>
                                        <li> <i class="fas fa-map-marked-alt"></i> Srinagar - Manali </li>
                                    </ul>
                                </div>
                                <div class="package-content d-md-block">
                                    <h3><a href="/srinagar-leh-manali">Srinagar Leh Manali</a></h3>
                                    <div class="col-12">
                                        <OverviewIcons highestAltitude="19024ft" distance="1576km" duration="10D/9N" lodging="Hotel/Camp" meal="BF/Din" />
                                    </div>
                                    <span style="color: #000; margin-right: 5px;">Starting from</span> 
                                    <span style="color: #999999; margin-right: 5px;"><del>₹ 27,000</del></span>
                                    <span style="color: green; text-align: center; font-size: 14px; font-weight: 700;">₹ 22,000/- </span>per person

                                    <div class="btn-wrap">
                                        <a href="#" class="button-text width-6 btnOpenForm">Book Now<i class="fas fa-angle-double-right"></i></a>
                                        <a href="/srinagar-leh-manali" class="button-text width-6">More Details<i class="fas fa-book-reader"></i></a>
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