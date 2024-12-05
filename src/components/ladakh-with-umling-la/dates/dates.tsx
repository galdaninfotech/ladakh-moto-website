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
                                        <strong>LUL20251</strong>
                                        <span>03rd May - 10th May</span>
                                        <span>Open</span>
                                    </div>
                                    <div>
                                        <strong>LUL20252</strong>
                                        <span>10th May -17th May</span>
                                        <span>Open</span>
                                    </div>
                                    <div>
                                        <strong>LUL20253</strong>
                                        <span>17th May - 24th May</span>
                                        <span>Open</span>
                                    </div>
                                    <div>
                                        <strong>LUL20254</strong>
                                        <span>24th May - 31st May</span>
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
                                        <strong>LUL20255</strong>
                                        <span>07th June - 14th June</span>
                                        <span>Open</span>
                                    </div>
                                    <div>
                                        <strong>LUL20256</strong>
                                        <span>14th June - 21st June</span>
                                        <span>Open</span>
                                    </div>
                                    <div>
                                        <strong>LUL20257</strong>
                                        <span>21st June - 28th June</span>
                                        <span>Open</span>
                                    </div>
                                    <div>
                                        <strong>LUL20258</strong>
                                        <span>28th June - 05th July</span>
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
                                        <strong>LUL20259</strong>
                                        <span>05th July - 12th July</span>
                                        <span>Open</span>
                                    </div>
                                    <div>
                                        <strong>LUL202510</strong>
                                        <span>12th July - 19th July</span>
                                        <span>Open</span>
                                    </div>
                                    <div>
                                        <strong>LUL202511</strong>
                                        <span>19th July - 26th July</span>
                                        <span>Open</span>
                                    </div>
                                    <div>
                                        <strong>LUL202512</strong>
                                        <span>26th July - 2nd Aug</span>
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
                                        <strong>LUL202513</strong>
                                        <span>02nd Aug - 09th Aug</span>
                                        <span>Open</span>
                                    </div>
                                    <div>
                                        <strong>LUL202514</strong>
                                        <span>09th Aug - 16th Aug</span>
                                        <span>Open</span>
                                    </div>
                                    <div>
                                        <strong>LUL202515</strong>
                                        <span>16th Aug -23rd Aug</span>
                                        <span>Open</span>
                                    </div>
                                    <div>
                                        <strong>LUL202516</strong>
                                        <span>23rd Aug - 30th Aug</span>
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
                                        <strong>LUL202517</strong>
                                        <span>06th Sept - 13th Sept</span>
                                        <span>Open</span>
                                    </div>
                                    <div>
                                        <strong>LUL202518</strong>
                                        <span>13th Sept - 20th Sept</span>
                                        <span>Open</span>
                                    </div>
                                    <div>
                                        <strong>LUL202519</strong>
                                        <span>20th Sept - 27th Sept</span>
                                        <span>Open</span>
                                    </div>
                                    <div>
                                        <strong>LUL202520</strong>
                                        <span>27th Sept - 03rd Oct</span>
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