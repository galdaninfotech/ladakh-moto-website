import { component$, useStylesScoped$ } from '@builder.io/qwik';
import styles from './intro.css?inline';

export default component$(() => {
    useStylesScoped$(styles);

    return (
        <div class="container">
            <div class="row">
                <div class="col">
                    {/* Mobile */}
                    <div class="intro d-block d-lg-none">
                        <h1>Why Choose LadakhMoto?</h1>
                        <span><strong><i>Authentic Adventures Guided By Locals</i></strong></span>
                        <p>
                            Welcome to Ladakh Moto, your trusted travel companion in the breathtaking landscapes of Leh Ladakh. As a proud, locally-owned travel agency based in the heart of this stunning region, we specialize in curating unforgettable journeys for travelers from all over India. <span class="readmore-button">Read More... <i class="fa fa-angle-down" aria-hidden="true"></i></span> 
                        </p>

                        <p class="more-intro">
                            With our intimate knowledge of the local terrain, the vibrant local culture, and our deep-rooted expertise based on our experience and past performance since 2014, we pride ourselves on providing authentic and personalized travel experiences to adventurers and travellers across India and beyond. At Ladakh Moto, we don't just plan trips, we craft adventures that capture the true spirit of this extraordinary land. Come explore the Himalayas with Ladakh Moto where adventure meets authenticity. 
                        </p>
                    </div>

                    {/* Desktop */}
                    <div class="intro d-none d-lg-block">
                        <h1>Why Choose LadakhMoto?</h1>
                        <span><strong><i>Authentic Adventures Guided By Locals</i></strong></span>
                        <p>
                            Welcome to Ladakh Moto, your trusted travel companion in the breathtaking landscapes of Leh Ladakh. As a proud, locally-owned travel agency based in the heart of this stunning region, we specialize in curating unforgettable journeys for travelers from all over India.
                        </p>

                        <p>
                            With our intimate knowledge of the local terrain, the vibrant local culture, and our deep-rooted expertise based on our experience and past performance since 2014, we pride ourselves on providing authentic and personalized travel experiences to adventurers and travellers across India and beyond. At Ladakh Moto, we don't just plan trips, we craft adventures that capture the true spirit of this extraordinary land. Come explore the Himalayas with Ladakh Moto where adventure meets authenticity. 
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
});