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
                            April 2026
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
                                            <td>{"LUL26APR01".slice(8)}</td>
                                            <td>18 Apr - 25 Apr</td>
                                            <td><span>Open</span></td>
                                        </tr>
                                        
                                        <tr>
                                            <td>{"LUL26APR02".slice(8)}</td>
                                            <td>25 Apr -02 May</td>
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
                                            <td>{"LUL26MAY01".slice(8)}</td>
                                            <td>02 May - 09 May</td>
                                            <td><span>Open</span></td>
                                        </tr>
                                        
                                        <tr>
                                            <td>{"LUL26MAY02".slice(8)}</td>
                                            <td>09 May - 16 May</td>
                                            <td><span>Open</span></td>
                                        </tr>

                                        <tr>
                                            <td>{"LUL26MAY03".slice(8)}</td>
                                            <td>16 May - 23 May</td>
                                            <td><span>Open</span></td>
                                        </tr>

                                        <tr>
                                            <td>{"LUL26MAY04".slice(8)}</td>
                                            <td>23 May - 30 May</td>
                                            <td><span>Open</span></td>
                                        </tr>

                                        <tr>
                                            <td>{"LUL26MAY05".slice(8)}</td>
                                            <td>30 May - 06 Jun</td>
                                            <td><span>Open</span></td>
                                        </tr>
                                        
                                    </tbody>
                                </table>


                            </div>
                        </div>
                    </div>

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
                                            <td>{"LUL26JUN01".slice(8)}</td>
                                            <td>06 June - 13 June</td>
                                            <td><span>Open</span></td>
                                        </tr>
                                        
                                        <tr>
                                            <td>{"LUL26JUN02".slice(8)}</td>
                                            <td>13 June - 20 June</td>
                                            <td><span>Open</span></td>
                                        </tr>

                                        <tr>
                                            <td>{"LUL26JUN03".slice(8)}</td>
                                            <td>20 June - 27 June</td>
                                            <td><span>Open</span></td>
                                        </tr>

                                        <tr>
                                            <td>{"LUL26JUN04".slice(8)}</td>
                                            <td>27 June - 04 July</td>
                                            <td><span>Open</span></td>
                                        </tr>
                                        
                                    </tbody>
                                </table>

                            </div>
                        </div>
                    </div>

                    <div class="accordion-item">
                        <h3 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#itineraryCollapse3" aria-expanded="true" aria-controls="itineraryCollapse3">
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
                                            <td>{"LUL26JUL01".slice(8)}</td>
                                            <td>04 July - 11 July</td>
                                            <td><span>Open</span></td>
                                        </tr>
                                        
                                        <tr>
                                            <td>{"LUL26JUL02".slice(8)}</td>
                                            <td>11 July - 18 July</td>
                                            <td><span>Open</span></td>
                                        </tr>

                                        <tr>
                                            <td>{"LUL26JUL03".slice(8)}</td>
                                            <td>18 July - 25 July</td>
                                            <td><span>Open</span></td>
                                        </tr>

                                        <tr>
                                            <td>{"LUL26JUL04".slice(8)}</td>
                                            <td>25 July - 01 Aug</td>
                                            <td><span>Open</span></td>
                                        </tr>
                                        
                                    </tbody>
                                </table>

                            </div>
                        </div>
                    </div>

                    <div class="accordion-item">
                        <h3 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#itineraryCollapse4" aria-expanded="true" aria-controls="itineraryCollapse4">
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
                                            <td>{"LUL26AUG01".slice(8)}</td>
                                            <td>01 Aug - 08 Aug</td>
                                            <td><span>Open</span></td>
                                        </tr>
                                        
                                        <tr>
                                            <td>{"LUL26AUG02".slice(8)}</td>
                                            <td>08 Aug - 15 Aug</td>
                                            <td><span>Open</span></td>
                                        </tr>

                                        <tr>
                                            <td>{"LUL26AUG03".slice(8)}</td>
                                            <td>15 Aug -22 Aug</td>
                                            <td><span>Open</span></td>
                                        </tr>

                                        <tr>
                                            <td>{"LUL26AUG04".slice(8)}</td>
                                            <td>22 Aug - 29 Aug</td>
                                            <td><span>Open</span></td>
                                        </tr>

                                        <tr>
                                            <td>{"LUL26AUG05".slice(8)}</td>
                                            <td>28 Aug - 04 Sep</td>
                                            <td><span>Open</span></td>
                                        </tr>
                                        
                                    </tbody>
                                </table>

                            </div>
                        </div>
                    </div>

                    <div class="accordion-item">
                        <h3 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#itineraryCollapse5" aria-expanded="true" aria-controls="itineraryCollapse5">
                            Sepember 2026
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
                                            <td>{"LUL26SEP01".slice(8)}</td>
                                            <td>05 Sep - 12 Sep</td>
                                            <td><span>Open</span></td>
                                        </tr>
                                        
                                        <tr>
                                            <td>{"LUL26SEP02".slice(8)}</td>
                                            <td>12 Sep - 19 Sep</td>
                                            <td><span>15 Seats Left</span></td>
                                        </tr>

                                        <tr>
                                            <td>{"LUL26SEP03".slice(8)}</td>
                                            <td>19 Sep - 26 Sep</td>
                                            <td><span>Open</span></td>
                                        </tr>

                                        <tr>
                                            <td>{"LUL26SEP04".slice(8)}</td>
                                            <td>26 Sep - 03 Oct</td>
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