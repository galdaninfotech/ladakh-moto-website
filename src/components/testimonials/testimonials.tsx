import { component$, useStylesScoped$ } from '@builder.io/qwik';
import styles from './testimonials.css?inline';
import ImgRajesh from '../../media/testimonials/rajesh.jpg?jsx';
import ImgSuraj from '../../media/testimonials/suraj.jpg?jsx';
import ImgAditya from '../../media/testimonials/aditya.jpg?jsx';
// import ImgAnkit from '../../media/testimonials/ankit.jpg?jsx';
// import ImgSunny from '../../media/testimonials/sunny.jpg?jsx';

export default component$(() => {
    useStylesScoped$(styles);

    return (
        <div class="container-xxl py-5">
            <div class="container py-5">
                <div class="row">
                    <div class="col-12">
                        <div class="intro">
                            <h2>Testimonials</h2>
                        </div>
                    </div>
                </div>

                <div class="testimonial-text g-5">
                    <div class="wow fadeIn" data-wow-delay="0.1s">
                        <span class="mb-4">LadakhMoto Reviews</span>
                            <p class="mb-4">With Ladakhmoto you not only receive a piece of memoirs by participating in a memorable adventure, you also support a local enterprise dedicated to responsible, sustainable tourism in Ladakh.</p>
                            <a class="btn btn-primary rounded-pill px-4" href="https://www.ladakhmoto.com/contact">Contact Sales</a>
                    </div>

                    <section class="carousel-landmark wow fadeIn" data-wow-delay="0.5s">
                        <div id="carouselExampleCaptions" class="carousel slide testimonial-carousel border-start border-primary">

                            <div class="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            </div>
                            <div class="carousel-inner">
                            <div class="carousel-item carousel-item-1 active">
                                        <div class="testimonial-item ps-5">
                                            <i class="fa fa-quote-left fa-2x text-primary mb-3"></i>
                                            <p class="fs-4 textimal-text">Ladakhmoto made our 10-day biking tour in Ladakh an unforgettable experience! The professional team, well-planned itinerary, and stunning routes exceeded our expectations. From the road captain to the mechanics, everything was top-notch. Highly recommended!</p>
                                            <div class="d-flex align-items-center">
                                                <ImgRajesh style="width: 60px; height: 60px;" class="img-fluid flex-shrink-0 rounded-circle" alt="Rajesh, Gujurat" />
                                                <div class="ps-3">
                                                    <span class="mb-1">Rajesh</span>
                                                    <span class="at">@Gujurat</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                            <div class="carousel-item carousel-item-2">
                                        <div class="testimonial-item ps-5">
                                            <i class="fa fa-quote-left fa-2x text-primary mb-3"></i>
                                            <p class="fs-4 textimal-text">My 10-day Zanskar biking tour with Ladakhmoto was absolutely incredible! The breathtaking landscapes, expert guidance, and seamless support from their team made it an adventure of a lifetime. I highly recommend Ladakhmoto for unforgettable journeys!</p>
                                            <div class="d-flex align-items-center">
                                                <ImgSuraj style="width: 60px; height: 60px;" class="img-fluid flex-shrink-0 rounded-circle" alt="Suraj, Maharashtra" />
                                                <div class="ps-3">
                                                    <span class="mb-1">Suraj</span>
                                                    <span class="at">@Maharashtra</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div> 

                            <div class="carousel-item carousel-item-2">
                                    <div class="testimonial-item ps-5">
                                        <i class="fa fa-quote-left fa-2x text-primary mb-3"></i>
                                        <p class="fs-4 textimal-text">Ladakhmoto made our 7-day Leh-Ladakh biking tour an extraordinary adventure! The well-organized itinerary, skilled road captain, and stunning routes left us in awe. Exceptional support throughout the journey made it truly unforgettable. Highly recommended!</p>
                                        <div class="d-flex align-items-center">
                                            <ImgAditya style="width: 60px; height: 60px;" class="img-fluid flex-shrink-0 rounded-circle" alt="Aditya, Karnataka" />
                                            <div class="ps-3">
                                                <span class="mb-1">Aditya</span>
                                                <span class="at">@Karnataka</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="control-btn">
                                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                                    <i class="fa-solid fa-arrow-left"></i>
                                    <span class="carousel-control-prev-icon visually-hidden" aria-hidden="true"></span>
                                    <span class="visually-hidden">Previous</span>
                                    </button>
                                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                                    <i class="fa-solid fa-arrow-right"></i>
                                
                                    <span class="carousel-control-next-icon visually-hidden" aria-hidden="true"></span>
                                    <span class="visually-hidden">Next</span>
                                    </button>
                                </div>
                            </div>

                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
});