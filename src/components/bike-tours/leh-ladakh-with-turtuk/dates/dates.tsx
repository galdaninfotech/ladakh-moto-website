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
                                            <td>{"LLT25MAY01".slice(8)}</td>
                                            <td>01 May - 07 May</td>
                                            <td><span class="closed">Closed</span></td>
                                        </tr>
                                        
                                        <tr>
                                            <td>{"LLT25MAY02".slice(8)}</td>
                                            <td>10 May - 16 May</td>
                                            <td><span class="closed">Closed</span></td>
                                        </tr>

                                        <tr>
                                            <td>{"LLT25MAY03".slice(8)}</td>
                                            <td>18 May - 24 May</td>
                                            <td><span class="closed">Closed</span></td>
                                        </tr>
                                        
                                    </tbody>
                                </table>

                     

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
                                            <td>{"LLT25JUN01".slice(8)}</td>
                                            <td>01 Jun - 07 Jun</td>
                                            <td><span class="closed">Closed</span></td>
                                        </tr>
                                        
                                        <tr>
                                            <td>{"LLT25JUN02".slice(8)}</td>
                                            <td>14 Jun - 20 Jun</td>
                                            <td><span class="closed">Closed</span></td>
                                        </tr>

                                        <tr>
                                            <td>{"LLT25JUN03".slice(8)}</td>
                                            <td>22 Jun - 28 Jun</td>
                                            <td><span class="closed">Closed</span></td>
                                        </tr>
                                        
                                    </tbody>
                                </table>


                                <span class="animated-arrow">👉</span>
                                <h4 class="note-heading">Note:</h4>
                                <ul class="note-list">
                                    <li>Closing soon. Grab your seat with special discount</li>
                                    <li>If you are more than 7 person, we can arrange new slot.</li>
                                </ul>

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
                                            <td>{"LLT25JUL01".slice(8)}</td>
                                            <td>05 Jul - 11 Jul</td>
                                            <td><span class="closed">Closed</span></td>
                                        </tr>
                                        
                                        <tr>
                                            <td>{"LLT25JUL02".slice(8)}</td>
                                            <td>13 Jul - 19 Jul</td>
                                            <td><span class="closed">Closed</span></td>
                                        </tr>

                                        <tr>
                                            <td>{"LLT25JUL03".slice(8)}</td>
                                            <td>20 Jul - 26 Jul</td>
                                            <td><span class="closed">Closed</span></td>
                                        </tr>
                                        
                                    </tbody>
                                </table>

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
                                            <td>{"LLT25AUG01".slice(8)}</td>
                                            <td>02 Aug - 08 Aug</td>
                                            <td><span class="closed">Closed</span></td>
                                        </tr>
                                        
                                        <tr>
                                            <td>{"LLT25AUG02".slice(8)}</td>
                                            <td>10 Aug - 16 Aug</td>
                                            <td><span class="closed">Closed</span></td>
                                        </tr>

                                        <tr>
                                            <td>{"LLT25AUG03".slice(8)}</td>
                                            <td>17 Aug - 23 Aug</td>
                                            <td><span class="closed">Closed</span></td>
                                        </tr>
                                        
                                    </tbody>
                                </table>

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
                                            <td>{"LLT25SEP01".slice(8)}</td>
                                            <td>01 Sep - 07 Sep</td>
                                            <td><span>Open</span></td>
                                        </tr>
                                        
                                        <tr>
                                            <td>{"LLT25SEP02".slice(8)}</td>
                                            <td>13 Sep - 19 Sep</td>
                                            <td><span>Open</span></td>
                                        </tr>

                                        <tr>
                                            <td>{"LLT25SEP03".slice(8)}</td>
                                            <td>21 Sep - 27 Sep</td>
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
