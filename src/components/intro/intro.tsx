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
                        <h2>Why Choose LadakhMoto?</h2>
                        <span class="d-flex justify-content-center"><strong><i>Authentic Adventures Guided By Locals</i></strong></span>
                        <p>
                            Ladakhmoto is a local company located right in the center of Leh, Ladakh. We provide authentic and seamless travel experiences with full accountability and a deep-rooted knowledge of the region.  
                        </p>

                        <p class="more-intro">
                            Being a direct provider is the key, as it ensures you receive personalized service, immediate support and the emphasis on detail is there to make your whole journey a seamless one. Whether you're looking to put together a greater route, need a road captain or mechanic, we're here for you! With Ladakhmoto you not only receive a piece of memoirs by participating in a memorable adventure, you also support a local enterprise dedicated to responsible, sustainable tourism in Ladakh. 
                        </p>
                        <span class="readmore-button">Read More... <i class="fa fa-angle-down" aria-hidden="true"></i></span>
                    </div>

                    {/* Desktop */}
                    <div class="intro d-none d-lg-block">
                        <h2>Why Choose LadakhMoto?</h2>
                        <span class="d-flex justify-content-center"><strong><i>Authentic Adventures Guided By Locals</i></strong></span>
                        <p>
                            Ladakhmoto is a local company located right in the center of Leh, Ladakh. We provide authentic and seamless travel experiences with full accountability and a deep-rooted knowledge of the region.
                        </p>

                        <p>
                            Being a direct provider is the key, as it ensures you receive personalized service, immediate support and the emphasis on detail is there to make your whole journey a seamless one. Whether you're looking to put together a greater route, need a road captain or mechanic, we're here for you! With Ladakhmoto you not only receive a piece of memoirs by participating in a memorable adventure, you also support a local enterprise dedicated to responsible, sustainable tourism in Ladakh.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
});