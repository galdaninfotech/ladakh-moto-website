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

                    <div class="accordion-item">
                        <h3 class="accordion-header">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#itineraryCollapse3" aria-expanded="true" aria-controls="itineraryCollapse3">
                            June 2025
                            </button>
                        </h3>
                        <div id="itineraryCollapse3" class="accordion-collapse collapse" data-bs-parent="#itineraryAccordion">
                            <div class="accordion-body">

                                <div class="itinerary">
                                    <div>
                                        <strong>LLA20257</strong>
                                        <span>07th June - 12th June</span>
                                        <span>Open</span>
                                    </div>
                                    <div>
                                        <strong>LLA20258</strong>
                                        <span>14th June - 19th June</span>
                                        <span>Open</span>
                                    </div>
                                    <div>
                                        <strong>LLA20259</strong>
                                        <span>21st June - 26th June</span>
                                        <span>Open</span>
                                    </div>
                                    <div>
                                        <strong>LLA202510</strong>
                                        <span>28th June - 03rd July</span>
                                        <span>Open</span>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div class="accordion-item">
                        <h3 class="accordion-header">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#itineraryCollapse4" aria-expanded="true" aria-controls="itineraryCollapse4">
                            July 2025
                            </button>
                        </h3>
                        <div id="itineraryCollapse4" class="accordion-collapse collapse" data-bs-parent="#itineraryAccordion">
                            <div class="accordion-body">

                                <div class="itinerary">
                                    <div>
                                        <strong>LLA202511</strong>
                                        <span>05th July - 10th July</span>
                                        <span>Open</span>
                                    </div>
                                    <div>
                                        <strong>LLA202512</strong>
                                        <span>12th July - 17th July</span>
                                        <span>Open</span>
                                    </div>
                                    <div>
                                        <strong>LLA202513</strong>
                                        <span>19th July - 24th July</span>
                                        <span>Open</span>
                                    </div>
                                    <div>
                                        <strong>LLA202514</strong>
                                        <span>26th July - 31st July</span>
                                        <span>Open</span>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div class="accordion-item">
                        <h3 class="accordion-header">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#itineraryCollapse5" aria-expanded="true" aria-controls="itineraryCollapse5">
                            August 2025
                            </button>
                        </h3>
                        <div id="itineraryCollapse5" class="accordion-collapse collapse" data-bs-parent="#itineraryAccordion">
                            <div class="accordion-body">

                                <div class="itinerary">
                                    <div>
                                        <strong>LLA202515</strong>
                                        <span>02nd Aug - 07th Aug</span>
                                        <span>Open</span>
                                    </div>
                                    <div>
                                        <strong>LLA202516</strong>
                                        <span>09th Aug - 14th Aug</span>
                                        <span>Open</span>
                                    </div>
                                    <div>
                                        <strong>LLA202517</strong>
                                        <span>16th Aug -21st Aug</span>
                                        <span>Open</span>
                                    </div>
                                    <div>
                                        <strong>LLA202518</strong>
                                        <span>23rd Aug - 28th Aug</span>
                                        <span>Open</span>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div class="accordion-item">
                        <h3 class="accordion-header">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#itineraryCollapse6" aria-expanded="true" aria-controls="itineraryCollapse6">
                            September 2025
                            </button>
                        </h3>
                        <div id="itineraryCollapse6" class="accordion-collapse collapse" data-bs-parent="#itineraryAccordion">
                            <div class="accordion-body">

                                <div class="itinerary">
                                    <div>
                                        <strong>LLA202519</strong>
                                        <span>06th Sept - 11th Sept</span>
                                        <span>Open</span>
                                    </div>
                                    <div>
                                        <strong>LLA202520</strong>
                                        <span>13th Sept - 18th Sept</span>
                                        <span>Open</span>
                                    </div>
                                    <div>
                                        <strong>LLA202521</strong>
                                        <span>20th Sept - 25th Sept</span>
                                        <span>Open</span>
                                    </div>
                                    <div>
                                        <strong>LLA202522</strong>
                                        <span>27th Sept - 01st Oct</span>
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