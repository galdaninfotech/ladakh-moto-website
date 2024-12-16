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
                                        <strong>LZL20251</strong>
                                        <span>1st May - 10th May</span>
                                        <span>Open</span>
                                    </div>
                                    <div>
                                        <strong>LZL20252</strong>
                                        <span>13th May - 22nd May</span>
                                        <span>Open</span>
                                    </div>
                                    <div>
                                        <strong>LZL20253</strong>
                                        <span>15th May - 24th May</span>
                                        <span>Open</span>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div class="accordion-item">
                        <h3 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#itineraryCollapse2" aria-expanded="false" aria-controls="itineraryCollapse2">
                            June 2025
                            </button>
                        </h3>
                        <div id="itineraryCollapse2" class="accordion-collapse collapse" data-bs-parent="#itineraryAccordion">
                            <div class="accordion-body">

                                <div class="itinerary">
                                    <div>
                                        <strong>LZL20254</strong>
                                        <span>05th June - 14th June</span>
                                        <span>Open</span>
                                    </div>
                                    <div>
                                        <strong>LZL20255</strong>
                                        <span>12th June - 21st June</span>
                                        <span>Open</span>
                                    </div>
                                    <div>
                                        <strong>LZL20256</strong>
                                        <span>19th June - 28th June</span>
                                        <span>Open</span>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div class="accordion-item">
                        <h3 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#itineraryCollapse3" aria-expanded="false" aria-controls="itineraryCollapse3">
                            July 2025
                            </button>
                        </h3>
                        <div id="itineraryCollapse3" class="accordion-collapse collapse" data-bs-parent="#itineraryAccordion">
                            <div class="accordion-body">

                                <div class="itinerary">
                                    <div>
                                        <strong>LZL20257</strong>
                                        <span>3rd July - 12th July</span>
                                        <span>Open</span>
                                    </div>
                                    <div>
                                        <strong>LZL20258</strong>
                                        <span>10th July - 19th July</span>
                                        <span>Open</span>
                                    </div>
                                    <div>
                                        <strong>LZL20259</strong>
                                        <span>17th July - 27th July</span>
                                        <span>Open</span>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div class="accordion-item">
                        <h3 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#itineraryCollapse4" aria-expanded="false" aria-controls="itineraryCollapse4">
                            August 2025
                            </button>
                        </h3>
                        <div id="itineraryCollapse4" class="accordion-collapse collapse" data-bs-parent="#itineraryAccordion">
                            <div class="accordion-body">

                                <div class="itinerary">
                                    <div>
                                        <strong>LZL202510</strong>
                                        <span>1st Aug - 10th Aug</span>
                                        <span>Open</span>
                                    </div>
                                    <div>
                                        <strong>LZL202511</strong>
                                        <span>07th Aug - 16th Aug</span>
                                        <span>Open</span>
                                    </div>
                                    <div>
                                        <strong>LZL202512</strong>
                                        <span>14th Aug - 23rd Aug</span>
                                        <span>Open</span>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div class="accordion-item">
                        <h3 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#itineraryCollapse5" aria-expanded="false" aria-controls="itineraryCollapse5">
                            September 2025
                            </button>
                        </h3>
                        <div id="itineraryCollapse5" class="accordion-collapse collapse" data-bs-parent="#itineraryAccordion">
                            <div class="accordion-body">

                                <div class="itinerary">
                                    <div>
                                        <strong>LZL202513</strong>
                                        <span>04th Sept - 13th Sept</span>
                                        <span>Open</span>
                                    </div>
                                    <div>
                                        <strong>LZL202514</strong>
                                        <span>11th Sept - 20th Sept</span>
                                        <span>Open</span>
                                    </div>
                                    <div>
                                        <strong>LZL202515</strong>
                                        <span>18th Sept - 27th Sept</span>
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