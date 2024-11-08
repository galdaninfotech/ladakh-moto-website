import { component$, useStylesScoped$ } from '@builder.io/qwik';
import styles from './intro.css?inline';

export default component$(() => {
    useStylesScoped$(styles);

    return (
        <div class="container">
            <div class="row">
                <div class="col">
                    <div class="intro">
                        <h1>About LadakhMoto</h1>
                        <span><strong><i>Authentic Adventures Guided By Locals</i></strong></span>
                        <p>
                            Welcome to Ladakh Moto, your trusted travel companion in the breathtaking landscapes of Leh Ladakh. As a proud, locally-owned travel agency based in the heart of this stunning region, we specialize in curating unforgettable journeys for travelers from all over India. <span class="readmore-button">Read More... <i class="fa fa-angle-down" aria-hidden="true"></i></span> 
                        </p>

                        

                        <p class="more-intro">
                            I'm an unknown content height element. I'm an unknown content height element. I'm an unknown content height element. I'm an unknown content height element. I'm an unknown content height element. I'm an unknown content height element. I'm an unknown content height element. I'm an unknown content height element. I'm an unknown content height element. I'm an unknown content height element. I'm an unknown content height element. I'm an unknown content height element. I'm an unknown content height element. 
                        </p>

                    </div>
                </div>
            </div>
        </div>
    );
});