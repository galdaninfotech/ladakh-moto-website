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
                                            <td>{"LLA26ARP01".slice(8)}</td>
                                            <td>18 Apr - 23 Apr</td>
                                            <td><span>Open</span></td>
                                        </tr>

                                        <tr>
                                            <td>{"LLA26ARP02".slice(8)}</td>
                                            <td>25 Apr - 30 Apr</td>
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
                            May 2026
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
                                            <td>{"LLA26MAY01".slice(8)}</td>
                                            <td>02 May - 07 May</td>
                                            <td><span>Open</span></td>
                                        </tr>
                                        
                                        <tr>
                                            <td>{"LLA26MAY02".slice(8)}</td>
                                            <td>09 May -14 May</td>
                                            <td><span>Open</span></td>
                                        </tr>

                                        <tr>
                                            <td>{"LLA26MAY03".slice(8)}</td>
                                            <td>16 May - 21 May</td>
                                            <td><span>Open</span></td>
                                        </tr>

                                        <tr>
                                            <td>{"LLA26MAY04".slice(8)}</td>
                                            <td>23 May - 28 May</td>
                                            <td><span>Open</span></td>
                                        </tr>

                                        <tr>
                                            <td>{"LLA26MAY05".slice(8)}</td>
                                            <td>30 May - 04 Jun</td>
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
                            June 2026
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
                                            <td>{"LLA26JUN01".slice(8)}</td>
                                            <td>06 June - 11 June</td>
                                            <td><span>Open</span></td>
                                        </tr>
                                        
                                        <tr>
                                            <td>{"LLA26JUN02".slice(8)}</td>
                                            <td>13 June - 18 June</td>
                                            <td><span>Open</span></td>
                                        </tr>

                                        <tr>
                                            <td>{"LLA26JUN03".slice(8)}</td>
                                            <td>20 June - 25 June</td>
                                            <td><span>Open</span></td>
                                        </tr>

                                        <tr>
                                            <td>{"LLA26JUN04".slice(8)}</td>
                                            <td>27 June - 02 July</td>
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
                            July 2026
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
                                            <td>{"LLA26JUL01".slice(8)}</td>
                                            <td>04 July - 09 July</td>
                                            <td><span>Open</span></td>
                                        </tr>
                                        
                                        <tr>
                                            <td>{"LLA26JUL02".slice(8)}</td>
                                            <td>11 July - 16 July</td>
                                            <td><span>Open</span></td>
                                        </tr>

                                        <tr>
                                            <td>{"LLA26JUL03".slice(8)}</td>
                                            <td>18 July - 23 July</td>
                                            <td><span>Open</span></td>
                                        </tr>

                                        <tr>
                                            <td>{"LLA26JUL04".slice(8)}</td>
                                            <td>25 July - 30 July</td>
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
                            August 2026
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
                                            <td>{"LLA26AUG01".slice(8)}</td>
                                            <td>01 Aug - 06 Aug</td>
                                            <td><span>Open</span></td>
                                        </tr>
                                        
                                        <tr>
                                            <td>{"LLA26AUG02".slice(8)}</td>
                                            <td>08 Aug - 13 Aug</td>
                                            <td><span>Open</span></td>
                                        </tr>

                                        <tr>
                                            <td>{"LLA26AUG03".slice(8)}</td>
                                            <td>15 Aug -20 Aug</td>
                                            <td><span>Open</span></td>
                                        </tr>

                                        <tr>
                                            <td>{"LLA26AUG04".slice(8)}</td>
                                            <td>22 Aug - 27 Aug</td>
                                            <td><span>Open</span></td>
                                        </tr>

                                        <tr>
                                            <td>{"LLA26AUG05".slice(8)}</td>
                                            <td>28 Aug - 02 Sep</td>
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
                            September 2026
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
                                            <td>{"LLA26SEP01".slice(8)}</td>
                                            <td>05 Sept - 10 Sept</td>
                                            <td><span>Open</span></td>
                                        </tr>
                                        
                                        <tr>
                                            <td>{"LLA26SEP02".slice(8)}</td>
                                            <td>12 Sept - 17 Sept</td>
                                            <td><span>Open</span></td>
                                        </tr>

                                        <tr>
                                            <td>{"LLA26SEP03".slice(8)}</td>
                                            <td>19 Sept - 24 Sept</td>
                                            <td><span>Open</span></td>
                                        </tr>

                                        <tr>
                                            <td>{"LLA26SEP04".slice(8)}</td>
                                            <td>26 Sept - 01 Oct</td>
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