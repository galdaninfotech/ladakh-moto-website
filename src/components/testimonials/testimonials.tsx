import { component$, useStylesScoped$ } from '@builder.io/qwik';
import styles from './testimonials.css?inline';

export default component$(() => {
    useStylesScoped$(styles);

    return (
        <>
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="intro">
                            <h1>Testimonials</h1>
                        </div>
                    </div>
                </div>
            </div>
            <section id="testim" class="testim">
                <div class="wrap">
                    <span id="right-arrow" class="arrow right fa fa-chevron-right"></span>
                    <span id="left-arrow" class="arrow left fa fa-chevron-left"></span>
                    <ul id="testim-dots" class="dots">
                        <li class="dot active"></li>
                        <li class="dot"></li>
                        <li class="dot"></li>
                        <li class="dot"></li>
                        <li class="dot"></li>
                    </ul>
                    <div id="testim-content" class="cont">
                        <div class="active">
                            <div class="img">
                                <img
                                    src="/img/testimonials/rajesh.jpg"
                                    alt="Rajesh, Gujurat"
                                />
                            </div>
                            <h2>Rajesh, Gujurat</h2>
                            <p>"Ladakhmoto made our 10-day biking tour in Ladakh an unforgettable experience! The professional team, well-planned itinerary, and stunning routes exceeded our expectations. From the road captain to the mechanics, everything was top-notch. Highly recommended!"</p>
                        </div>
            
                        <div>
                            <div class="img">
                                <img
                                    src="/img/testimonials/suraj.jpg"
                                    alt="Suraj, Maharashtra"
                                />
                            </div>
                            <h2>Suraj, Maharashtra</h2>
                            <p>"My 10-day Zanskar biking tour with Ladakhmoto was absolutely incredible! The breathtaking landscapes, expert guidance, and seamless support from their team made it an adventure of a lifetime. I highly recommend Ladakhmoto for unforgettable journeys!"</p>
                        </div>
            
                        <div>
                            <div class="img">
                                <img
                                    src="/img/testimonials/aditya.jpg"
                                    alt="Aditya, Karnataka"
                                />
                            </div>
                            <h2>Aditya, Karnataka</h2>
                            <p>"Ladakhmoto made our 7-day Leh-Ladakh biking tour an extraordinary adventure! The well-organized itinerary, skilled road captain, and stunning routes left us in awe. Exceptional support throughout the journey made it truly unforgettable. Highly recommended!"
                            </p>
                        </div>
            
                        <div>
                            <div class="img">
                                <img
                                    src="/img/testimonials/ankit.jpg"
                                    alt="Ankit, Kerela"
                                />
                            </div>
                            <h2>Ankit, Kerela</h2>
                            <p>"My biking tour with Ladakhmoto through Leh-Ladakh was absolutely amazing! The scenic routes, expert guidance, and exceptional support made it an unforgettable adventure. Everything was perfectly organized, and the experience was beyond expectations. Highly recommended!"</p>
                        </div>
            
                        <div>
                            <div class="img">
                                <img
                                    src="/img/testimonials/sunny.jpg"
                                    alt="Sunny, Mumbai"
                                />
                            </div>
                            <h2>Sunny, Mumbai</h2>
                            <p>"Ladakhmoto made our 7-day Leh-Ladakh biking tour an extraordinary adventure! The well-organized itinerary, skilled road captain, and stunning routes left us in awe. Exceptional support throughout the journey made it truly unforgettable. Highly recommended!"
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
});