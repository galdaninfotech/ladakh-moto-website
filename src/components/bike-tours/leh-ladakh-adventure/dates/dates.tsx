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
                                            <td>{"LLA25ARP01".slice(8)}</td>
                                            <td>13 Apr - 18 Apr</td>
                                            <td><span class="closed">Closed</span></td>
                                        </tr>

                                        <tr>
                                            <td>{"LLA25ARP02".slice(8)}</td>
                                            <td>19 Apr - 24 Apr</td>
                                            <td><span class="closed">Closed</span></td>
                                        </tr>
                                        
                                        <tr>
                                            <td>{"LLA25ARP03".slice(8)}</td>
                                            <td>26 Apr - 01 May</td>
                                            <td><span>5 Seats left</span></td>
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
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#itineraryCollapse2" aria-expanded="false" aria-controls="itineraryCollapse2">
                            May 2025
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
                                            <td>{"LLA25MAY01".slice(8)}</td>
                                            <td>03 May - 08 May</td>
                                            <td><span>Limited seats</span></td>
                                        </tr>
                                        
                                        <tr>
                                            <td>{"LLA25MAY02".slice(8)}</td>
                                            <td>10 May -15 May</td>
                                            <td><span>8 Seats left</span></td>
                                        </tr>

                                        <tr>
                                            <td>{"LLA25MAY03".slice(8)}</td>
                                            <td>17 May - 22 May</td>
                                            <td><span>Filling Fast</span></td>
                                        </tr>

                                        <tr>
                                            <td>{"LLA25MAY04".slice(8)}</td>
                                            <td>24 May - 29 May</td>
                                            <td><span>10 Seats left</span></td>
                                        </tr>
                                        
                                    </tbody>
                                </table>

                            </div>
                        </div>
                    </div>

                    <div class="accordion-item">
                        <h3 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#itineraryCollapse3" aria-expanded="false" aria-controls="itineraryCollapse3">
                            June 2025
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
                                            <td>{"LLA25JUN01".slice(8)}</td>
                                            <td>07 June - 12 June</td>
                                            <td><span>12 Seats left</span></td>
                                        </tr>
                                        
                                        <tr>
                                            <td>{"LLA25JUN02".slice(8)}</td>
                                            <td>14 June - 19 June</td>
                                            <td><span>Open</span></td>
                                        </tr>

                                        <tr>
                                            <td>{"LLA25JUN03".slice(8)}</td>
                                            <td>21 June - 26 June</td>
                                            <td><span>Filling Fast</span></td>
                                        </tr>

                                        <tr>
                                            <td>{"LLA25JUN04".slice(8)}</td>
                                            <td>28 June - 03 July</td>
                                            <td><span>16 seats left</span></td>
                                        </tr>
                                        
                                    </tbody>
                                </table>

                            </div>
                        </div>
                    </div>

                    <div class="accordion-item">
                        <h3 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#itineraryCollapse4" aria-expanded="false" aria-controls="itineraryCollapse4">
                            July 2025
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
                                            <td>{"LLA25JUL01".slice(8)}</td>
                                            <td>05 July - 10 July</td>
                                            <td><span>13 Seats left</span></td>
                                        </tr>
                                        
                                        <tr>
                                            <td>{"LLA25JUL02".slice(8)}</td>
                                            <td>12 July - 17 July</td>
                                            <td><span>Open</span></td>
                                        </tr>

                                        <tr>
                                            <td>{"LLA25JUL03".slice(8)}</td>
                                            <td>19 July - 24 July</td>
                                            <td><span>Filling fast</span></td>
                                        </tr>

                                        <tr>
                                            <td>{"LLA25JUL04".slice(8)}</td>
                                            <td>26 July - 31 July</td>
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
                            August 2025
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
                                            <td>{"LLA25AUG01".slice(8)}</td>
                                            <td>02 Aug - 07 Aug</td>
                                            <td><span>Filling Fast</span></td>
                                        </tr>
                                        
                                        <tr>
                                            <td>{"LLA25AUG02".slice(8)}</td>
                                            <td>09 Aug - 14 Aug</td>
                                            <td><span>11 Seats left</span></td>
                                        </tr>

                                        <tr>
                                            <td>{"LLA25AUG03".slice(8)}</td>
                                            <td>16 Aug -21 Aug</td>
                                            <td><span>Open</span></td>
                                        </tr>

                                        <tr>
                                            <td>{"LLA25AUG04".slice(8)}</td>
                                            <td>23 Aug - 28 Aug</td>
                                            <td><span>Open</span></td>
                                        </tr>
                                        
                                    </tbody>
                                </table>

                            </div>
                        </div>
                    </div>

                    <div class="accordion-item">
                        <h3 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#itineraryCollapse6" aria-expanded="false" aria-controls="itineraryCollapse6">
                            September 2025
                            </button>
                        </h3>
                        <div id="itineraryCollapse6" class="accordion-collapse collapse" data-bs-parent="#itineraryAccordion">
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
                                            <td>{"LLA25SEP01".slice(8)}</td>
                                            <td>06 Sept - 11 Sept</td>
                                            <td><span>Open</span></td>
                                        </tr>
                                        
                                        <tr>
                                            <td>{"LLA25SEP02".slice(8)}</td>
                                            <td>13 Sept - 18 Sept</td>
                                            <td><span>17 Seats left</span></td>
                                        </tr>

                                        <tr>
                                            <td>{"LLA25SEP03".slice(8)}</td>
                                            <td>20 Sept - 25 Sept</td>
                                            <td><span>14 Seats left</span></td>
                                        </tr>

                                        <tr>
                                            <td>{"LLA25SEP04".slice(8)}</td>
                                            <td>27 Sept - 01 Oct</td>
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