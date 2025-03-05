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

                                <table class="table table-striped table-hover">
                                    <thead>
                                        <tr>
                                            <th>Tour</th>
                                            <th>Date</th>
                                            <th>Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>{"MLS25MAY01".slice(8)}</td>
                                            <td>01 May - 11 May</td>
                                            <td><span>Open</span></td>
                                        </tr>
                                        
                                        <tr>
                                            <td>{"MLS25MAY02".slice(8)}</td>
                                            <td>13 May - 23 May</td>
                                            <td><span>Open</span></td>
                                        </tr>

                                        <tr>
                                            <td>{"MLS25MAY03".slice(8)}</td>
                                            <td>15 May - 25 May</td>
                                            <td><span>Open</span></td>
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

                                <table class="table table-striped table-hover">
                                    <thead>
                                        <tr>
                                            <th>Tour</th>
                                            <th>Date</th>
                                            <th>Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>{"MLS25JUN01".slice(8)}</td>
                                            <td>05 Jun - 15 Jun</td>
                                            <td><span>Open</span></td>
                                        </tr>
                                        
                                        <tr>
                                            <td>{"MLS25JUN02".slice(8)}</td>
                                            <td>12 Jun - 22 Jun</td>
                                            <td><span>Open</span></td>
                                        </tr>

                                        <tr>
                                            <td>{"MLS25JUN03".slice(8)}</td>
                                            <td>19 Jun - 29 Jun</td>
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
                            July 2025
                            </button>
                        </h3>
                        <div id="itineraryCollapse3" class="accordion-collapse collapse" data-bs-parent="#itineraryAccordion">
                            <div class="accordion-body">

                                <table class="table table-striped table-hover">
                                    <thead>
                                        <tr>
                                            <th>Tour</th>
                                            <th>Date</th>
                                            <th>Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>{"MLS25JUL01".slice(8)}</td>
                                            <td>3 July - 13 July</td>
                                            <td><span>Open</span></td>
                                        </tr>
                                        
                                        <tr>
                                            <td>{"MLS25JUL02".slice(8)}</td>
                                            <td>10 July - 20 July</td>
                                            <td><span>Open</span></td>
                                        </tr>

                                        <tr>
                                            <td>{"MLS25JUL03".slice(8)}</td>
                                            <td>17 July - 28 July</td>
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
                            August 2025
                            </button>
                        </h3>
                        <div id="itineraryCollapse4" class="accordion-collapse collapse" data-bs-parent="#itineraryAccordion">
                            <div class="accordion-body">

                                <table class="table table-striped table-hover">
                                    <thead>
                                        <tr>
                                            <th>Tour</th>
                                            <th>Date</th>
                                            <th>Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>{"MLS25AUG01".slice(8)}</td>
                                            <td>1 Aug - 11 Aug</td>
                                            <td><span>Open</span></td>
                                        </tr>
                                        
                                        <tr>
                                            <td>{"MLS25AUG02".slice(8)}</td>
                                            <td>07 Aug - 17 Aug</td>
                                            <td><span>Open</span></td>
                                        </tr>

                                        <tr>
                                            <td>{"MLS25AUG03".slice(8)}</td>
                                            <td>14 Aug - 24 Aug</td>
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
                            September 2025
                            </button>
                        </h3>
                        <div id="itineraryCollapse5" class="accordion-collapse collapse" data-bs-parent="#itineraryAccordion">
                            <div class="accordion-body">

                                <table class="table table-striped table-hover">
                                    <thead>
                                        <tr>
                                            <th>Tour</th>
                                            <th>Date</th>
                                            <th>Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>{"MLS25SEP01".slice(8)}</td>
                                            <td>04 Sep - 14 Sep</td>
                                            <td><span>Open</span></td>
                                        </tr>
                                        
                                        <tr>
                                            <td>{"MLS25SEP02".slice(8)}</td>
                                            <td>11 Sep - 21 Sep</td>
                                            <td><span>Open</span></td>
                                        </tr>

                                        <tr>
                                            <td>{"MLS25SEP03".slice(8)}</td>
                                            <td>18 Sep - 28 Sep</td>
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