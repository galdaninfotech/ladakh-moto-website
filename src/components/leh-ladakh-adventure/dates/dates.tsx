import { component$, useStylesScoped$ } from '@builder.io/qwik';
import styles from './dates.css?inline';

export default component$(() => {
    useStylesScoped$(styles);

    return (
        <div id="dates">
            <div class="sub-headings d-flex justify-content-between align-items-center">
                <h2>Tour Dates</h2>
            </div>
            <div class="itinerary-accordian">
                <div class="accordion" id="itineraryAccordion">

                    <div class="accordion-item">
                        <h3 class="accordion-header">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#itineraryCollapse1" aria-expanded="true" aria-controls="itineraryCollapse1">
                            April 2025
                            </button>
                        </h3>
                        <div id="itineraryCollapse1" class="accordion-collapse collapse show" data-bs-parent="#itineraryAccordion">
                            <div class="accordion-body">

                                <div class="itinerary">
                                    <div>
                                        <strong>LLA202501</strong>
                                        <span>19th April - 24th April</span>
                                        <span>Open</span>
                                    </div>
                                    <div>
                                        <strong>LLA202502</strong>
                                        <span>26th April - 01st May</span>
                                        <span>Open</span>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>


                    <div class="accordion-item">
                        <h3 class="accordion-header">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#itineraryCollapse2" aria-expanded="true" aria-controls="itineraryCollapse2">
                            May 2025
                            </button>
                        </h3>
                        <div id="itineraryCollapse2" class="accordion-collapse collapse" data-bs-parent="#itineraryAccordion">
                            <div class="accordion-body">

                                <div class="itinerary">
                                    <div>
                                        <strong>LLA20253</strong>
                                        <span>03rd May - 08th May</span>
                                        <span>Open</span>
                                    </div>
                                    <div>
                                        <strong>LLA20254</strong>
                                        <span>10th May -15th May</span>
                                        <span>Open</span>
                                    </div>
                                    <div>
                                        <strong>LLA20255</strong>
                                        <span>17th May - 22nd May</span>
                                        <span>Open</span>
                                    </div>
                                    <div>
                                        <strong>LLA20256</strong>
                                        <span>24th May - 29th May</span>
                                        <span>Open</span>
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