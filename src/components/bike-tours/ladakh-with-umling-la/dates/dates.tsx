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
                                            <th>Statusz</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>{"LUL25MAY01".slice(8)}</td>
                                            <td>03 May - 10 May</td>
                                            <td><span class="closed">Closed</span></td>
                                        </tr>
                                        
                                        <tr>
                                            <td>{"LUL25MAY02".slice(8)}</td>
                                            <td>10 May -17 May</td>
                                            <td><span class="closed">Closed</span></td>
                                        </tr>

                                        <tr>
                                            <td>{"LUL25MAY03".slice(8)}</td>
                                            <td>17 May - 24 May</td>
                                            <td><span class="closed">Closed</span></td>
                                        </tr>

                                        <tr>
                                            <td>{"LUL25MAY04".slice(8)}</td>
                                            <td>24 May - 31 May</td>
                                            <td><span class="closed">Closed</span></td>
                                        </tr>
                                        
                                    </tbody>
                                </table>


                            </div>
                        </div>
                    </div>

                    <div class="accordion-item">
                        <h3 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#itineraryCollapse2" aria-expanded="true" aria-controls="itineraryCollapse2">
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
                                            <td>{"LUL25JUN01".slice(8)}</td>
                                            <td>07 June - 14 June</td>
                                            <td><span>Filling Fast</span></td>
                                        </tr>
                                        
                                        <tr>
                                            <td>{"LUL25JUN02".slice(8)}</td>
                                            <td>14 June - 21 June</td>
                                            <td><span>12 Seats Left</span></td>
                                        </tr>

                                        <tr>
                                            <td>{"LUL25JUN03".slice(8)}</td>
                                            <td>21 June - 28 June</td>
                                            <td><span>9 Seats Left</span></td>
                                        </tr>

                                        <tr>
                                            <td>{"LUL25JUN04".slice(8)}</td>
                                            <td>28 June - 05 July</td>
                                            <td><span>Open</span></td>
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
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#itineraryCollapse3" aria-expanded="true" aria-controls="itineraryCollapse3">
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
                                            <td>{"LUL25JUL01".slice(8)}</td>
                                            <td>05 July - 12 July</td>
                                            <td><span>Open</span></td>
                                        </tr>
                                        
                                        <tr>
                                            <td>{"LUL25JUL02".slice(8)}</td>
                                            <td>12 July - 19 July</td>
                                            <td><span>Filling Fast</span></td>
                                        </tr>

                                        <tr>
                                            <td>{"LUL25JUL03".slice(8)}</td>
                                            <td>19 July - 26 July</td>
                                            <td><span>16 Seats Left</span></td>
                                        </tr>

                                        <tr>
                                            <td>{"LUL25JUL04".slice(8)}</td>
                                            <td>26 July - 02 Aug</td>
                                            <td><span>14 Seats Left</span></td>
                                        </tr>
                                        
                                    </tbody>
                                </table>

                            </div>
                        </div>
                    </div>

                    <div class="accordion-item">
                        <h3 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#itineraryCollapse4" aria-expanded="true" aria-controls="itineraryCollapse4">
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
                                            <td>{"LUL25AUG01".slice(8)}</td>
                                            <td>02 Aug - 09 Aug</td>
                                            <td><span>Open</span></td>
                                        </tr>
                                        
                                        <tr>
                                            <td>{"LUL25AUG02".slice(8)}</td>
                                            <td>09 Aug - 16 Aug</td>
                                            <td><span>17 Seats Left</span></td>
                                        </tr>

                                        <tr>
                                            <td>{"LUL25AUG03".slice(8)}</td>
                                            <td>16 Aug -23 Aug</td>
                                            <td><span>Open</span></td>
                                        </tr>

                                        <tr>
                                            <td>{"LUL25AUG04".slice(8)}</td>
                                            <td>23 Aug - 30 Aug</td>
                                            <td><span>14 Seats Left</span></td>
                                        </tr>
                                        
                                    </tbody>
                                </table>

                            </div>
                        </div>
                    </div>

                    <div class="accordion-item">
                        <h3 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#itineraryCollapse5" aria-expanded="true" aria-controls="itineraryCollapse5">
                            Sepember 2025
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
                                            <td>{"LUL25SEP01".slice(8)}</td>
                                            <td>06 Sep - 13 Sep</td>
                                            <td><span>Open</span></td>
                                        </tr>
                                        
                                        <tr>
                                            <td>{"LUL25SEP02".slice(8)}</td>
                                            <td>13 Sep - 20 Sep</td>
                                            <td><span>15 Seats Left</span></td>
                                        </tr>

                                        <tr>
                                            <td>{"LUL25SEP03".slice(8)}</td>
                                            <td>20 Sep - 27 Sep</td>
                                            <td><span>Open</span></td>
                                        </tr>

                                        <tr>
                                            <td>{"LUL25SEP04".slice(8)}</td>
                                            <td>27 Sep - 03 Oct</td>
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