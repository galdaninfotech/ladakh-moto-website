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
                            May 2025
                            </button>
                        </h3>
                        <div id="itineraryCollapse1" class="accordion-collapse collapse show" data-bs-parent="#itineraryAccordion">
                            <div class="accordion-body">

                                <div class="itinerary">
                                    <div>
                                        <strong>MLU20251</strong>
                                        <span>1st May - 11th May</span>
                                        <span>Open</span>
                                    </div>
                                    <div>
                                        <strong>MLU20252</strong>
                                        <span>13th May - 23rd May</span>
                                        <span>Open</span>
                                    </div>
                                    <div>
                                        <strong>MLU20253</strong>
                                        <span>15th May - 25th May</span>
                                        <span>Open</span>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div class="accordion-item">
                        <h3 class="accordion-header">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#itineraryCollapse2" aria-expanded="true" aria-controls="itineraryCollapse2">
                            June 2025
                            </button>
                        </h3>
                        <div id="itineraryCollapse2" class="accordion-collapse collapse" data-bs-parent="#itineraryAccordion">
                            <div class="accordion-body">

                                <div class="itinerary">
                                    <div>
                                        <strong>MLU20254</strong>
                                        <span>05th June - 15th June</span>
                                        <span>Open</span>
                                    </div>
                                    <div>
                                        <strong>MLU20255</strong>
                                        <span>12th June - 22nd June</span>
                                        <span>Open</span>
                                    </div>
                                    <div>
                                        <strong>MLU20256</strong>
                                        <span>19th June - 29th June</span>
                                        <span>Open</span>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div class="accordion-item">
                        <h3 class="accordion-header">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#itineraryCollapse3" aria-expanded="true" aria-controls="itineraryCollapse3">
                            July 2025
                            </button>
                        </h3>
                        <div id="itineraryCollapse3" class="accordion-collapse collapse" data-bs-parent="#itineraryAccordion">
                            <div class="accordion-body">

                                <div class="itinerary">
                                    <div>
                                        <strong>MLU20257</strong>
                                        <span>3rd July - 13th July</span>
                                        <span>Open</span>
                                    </div>
                                    <div>
                                        <strong>MLU20258</strong>
                                        <span>10th July - 20th July</span>
                                        <span>Open</span>
                                    </div>
                                    <div>
                                        <strong>MLU20259</strong>
                                        <span>17th July - 28th July</span>
                                        <span>Open</span>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div class="accordion-item">
                        <h3 class="accordion-header">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#itineraryCollapse4" aria-expanded="true" aria-controls="itineraryCollapse4">
                            August 2025
                            </button>
                        </h3>
                        <div id="itineraryCollapse4" class="accordion-collapse collapse" data-bs-parent="#itineraryAccordion">
                            <div class="accordion-body">

                                <div class="itinerary">
                                    <div>
                                        <strong>MLU202510</strong>
                                        <span>1st Aug - 11th Aug</span>
                                        <span>Open</span>
                                    </div>
                                    <div>
                                        <strong>MLU202511</strong>
                                        <span>07th Aug - 17th Aug</span>
                                        <span>Open</span>
                                    </div>
                                    <div>
                                        <strong>MLU202512</strong>
                                        <span>14th Aug - 24th Aug</span>
                                        <span>Open</span>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div class="accordion-item">
                        <h3 class="accordion-header">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#itineraryCollapse5" aria-expanded="true" aria-controls="itineraryCollapse5">
                            September 2025
                            </button>
                        </h3>
                        <div id="itineraryCollapse5" class="accordion-collapse collapse" data-bs-parent="#itineraryAccordion">
                            <div class="accordion-body">

                                <div class="itinerary">
                                    <div>
                                        <strong>MLU202513</strong>
                                        <span>04th Sept - 14th Sept</span>
                                        <span>Open</span>
                                    </div>
                                    <div>
                                        <strong>MLU202514</strong>
                                        <span>11th Sept - 21st Sept</span>
                                        <span>Open</span>
                                    </div>
                                    <div>
                                        <strong>MLU202515</strong>
                                        <span>18th Sept - 28th Sept</span>
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