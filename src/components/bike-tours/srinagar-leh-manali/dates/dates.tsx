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
                            May 2026
                            </button>
                        </h3>
                        <div id="itineraryCollapse1" class="accordion-collapse collapse show" data-bs-parent="#itineraryAccordion">
                            <div class="accordion-body">

                                <table class="table table-striped table-hover tourdates">
                                    <thead>
                                        <tr>
                                            <th>Tour</th>
                                            <th>Date</th>
                                            <th>Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>{"SLM26MAY01".slice(8)}</td>
                                            <td>02 May - 11 May</td>
                                            <td><span>Open</span></td>
                                        </tr>
                                        
                                        <tr>
                                            <td>{"SLM26MAY02".slice(8)}</td>
                                            <td>21 May - 30 May</td>
                                            <td><span>Open</span></td>
                                        </tr>
                                        
                                    </tbody>
                                </table>

                                <span class="animated-arrow">👉</span>
                                <h4 class="note-heading">Note:</h4>
                                <ul class="note-list">
                                    <li>Closing soon. Grab your seat with special discount</li>
                                </ul>

                            </div>
                        </div>
                    </div>

                    <div class="accordion-item">
                        <h3 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#itineraryCollapse2" aria-expanded="false" aria-controls="itineraryCollapse2">
                            June 2026
                            </button>
                        </h3>
                        <div id="itineraryCollapse2" class="accordion-collapse collapse" data-bs-parent="#itineraryAccordion">
                            <div class="accordion-body">

                                <table class="table table-striped table-hover tourdates">
                                    <thead>
                                        <tr>
                                            <th>Tour</th>
                                            <th>Date</th>
                                            <th>Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>{"SLM26JUN01".slice(8)}</td>
                                            <td>10 Jun - 19 Jun</td>
                                            <td><span>Open</span></td>
                                        </tr>
                                        
                                        <tr>
                                            <td>{"SLM26JUN02".slice(8)}</td>
                                            <td>30 Jun - 09 Jul</td>
                                            <td><span>Open</span></td>
                                        </tr>
                                        
                                    </tbody>
                                </table>

                            </div>
                        </div>
                    </div>

                    <div class="accordion-item">
                        <h3 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#itineraryCollapse3" aria-expanded="false" aria-controls="itineraryCollapse3">
                            July 2026
                            </button>
                        </h3>
                        <div id="itineraryCollapse3" class="accordion-collapse collapse" data-bs-parent="#itineraryAccordion">
                            <div class="accordion-body">

                                <table class="table table-striped table-hover tourdates">
                                    <thead>
                                        <tr>
                                            <th>Tour</th>
                                            <th>Date</th>
                                            <th>Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>{"SLM26JUL01".slice(8)}</td>
                                            <td>20 Jul - 29 Jul</td>
                                            <td><span>Open</span></td>
                                        </tr>
                                        
                                    </tbody>
                                </table>

                            </div>
                        </div>
                    </div>

                    <div class="accordion-item">
                        <h3 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#itineraryCollapse4" aria-expanded="false" aria-controls="itineraryCollapse4">
                            August 2026
                            </button>
                        </h3>
                        <div id="itineraryCollapse4" class="accordion-collapse collapse" data-bs-parent="#itineraryAccordion">
                            <div class="accordion-body">

                                <table class="table table-striped table-hover tourdates">
                                    <thead>
                                        <tr>
                                            <th>Tour</th>
                                            <th>Date</th>
                                            <th>Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>{"SLM26AUG01".slice(8)}</td>
                                            <td>09 Aug - 18 Aug</td>
                                            <td><span>Open</span></td>
                                        </tr>
                                        
                                        <tr>
                                            <td>{"SLM26AUG02".slice(8)}</td>
                                            <td>29 Aug - 07 Sep</td>
                                            <td><span>Open</span></td>
                                        </tr>
                                        
                                    </tbody>
                                </table>

                            </div>
                        </div>
                    </div>

                    <div class="accordion-item">
                        <h3 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#itineraryCollapse5" aria-expanded="false" aria-controls="itineraryCollapse5">
                            September 2026
                            </button>
                        </h3>
                        <div id="itineraryCollapse5" class="accordion-collapse collapse" data-bs-parent="#itineraryAccordion">
                            <div class="accordion-body">

                                <table class="table table-striped table-hover tourdates">
                                    <thead>
                                        <tr>
                                            <th>Tour</th>
                                            <th>Date</th>
                                            <th>Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>{"SLM26SEP01".slice(8)}</td>
                                            <td>09 Sep - 28 Sep</td>
                                            <td><span>Open</span></td>
                                        </tr>
                                        
                                    </tbody>
                                </table>

                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
});