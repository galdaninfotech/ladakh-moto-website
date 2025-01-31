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
                                            <th>Tour ID</th>
                                            <th>Date</th>
                                            <th>Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>LUL20251</td>
                                            <td>03rd May - 10th May</td>
                                            <td><span>Open</span></td>
                                        </tr>
                                        
                                        <tr>
                                            <td>LUL20252</td>
                                            <td>10th May -17th May</td>
                                            <td><span>Open</span></td>
                                        </tr>

                                        <tr>
                                            <td>LUL20253</td>
                                            <td>17th May - 24th May</td>
                                            <td><span>Open</span></td>
                                        </tr>

                                        <tr>
                                            <td>LUL20254</td>
                                            <td>24th May - 31st May</td>
                                            <td><span>Open</span></td>
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

                                <table class="table table-striped table-hover">
                                    <thead>
                                        <tr>
                                            <th>Tour ID</th>
                                            <th>Date</th>
                                            <th>Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>LUL20255</td>
                                            <td>07th June - 14th June</td>
                                            <td><span>Open</span></td>
                                        </tr>
                                        
                                        <tr>
                                            <td>LUL20256</td>
                                            <td>14th June - 21st June</td>
                                            <td><span>Open</span></td>
                                        </tr>

                                        <tr>
                                            <td>LUL20257</td>
                                            <td>21st June - 28th June</td>
                                            <td><span>Open</span></td>
                                        </tr>

                                        <tr>
                                            <td>LUL20258</td>
                                            <td>28th June - 05th July</td>
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
                            July 2025
                            </button>
                        </h3>
                        <div id="itineraryCollapse3" class="accordion-collapse collapse" data-bs-parent="#itineraryAccordion">
                            <div class="accordion-body">

                                <table class="table table-striped table-hover">
                                    <thead>
                                        <tr>
                                            <th>Tour ID</th>
                                            <th>Date</th>
                                            <th>Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>LUL20259</td>
                                            <td>05th July - 12th July</td>
                                            <td><span>Open</span></td>
                                        </tr>
                                        
                                        <tr>
                                            <td>LUL202510</td>
                                            <td>12th July - 19th July</td>
                                            <td><span>Open</span></td>
                                        </tr>

                                        <tr>
                                            <td>LUL202511</td>
                                            <td>19th July - 26th July</td>
                                            <td><span>Open</span></td>
                                        </tr>

                                        <tr>
                                            <td>LUL202512</td>
                                            <td>26th July - 2nd Aug</td>
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
                            August 2025
                            </button>
                        </h3>
                        <div id="itineraryCollapse4" class="accordion-collapse collapse" data-bs-parent="#itineraryAccordion">
                            <div class="accordion-body">

                                <table class="table table-striped table-hover">
                                    <thead>
                                        <tr>
                                            <th>Tour ID</th>
                                            <th>Date</th>
                                            <th>Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>LUL202513</td>
                                            <td>02nd Aug - 09th Aug</td>
                                            <td><span>Open</span></td>
                                        </tr>
                                        
                                        <tr>
                                            <td>LUL202514</td>
                                            <td>09th Aug - 16th Aug</td>
                                            <td><span>Open</span></td>
                                        </tr>

                                        <tr>
                                            <td>LUL202515</td>
                                            <td>16th Aug -23rd Aug</td>
                                            <td><span>Open</span></td>
                                        </tr>

                                        <tr>
                                            <td>LUL202516</td>
                                            <td>23rd Aug - 30th Aug</td>
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
                            September 2025
                            </button>
                        </h3>
                        <div id="itineraryCollapse5" class="accordion-collapse collapse" data-bs-parent="#itineraryAccordion">
                            <div class="accordion-body">

                                <table class="table table-striped table-hover">
                                    <thead>
                                        <tr>
                                            <th>Tour ID</th>
                                            <th>Date</th>
                                            <th>Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>LUL202517</td>
                                            <td>06th Sept - 13th Sept</td>
                                            <td><span>Open</span></td>
                                        </tr>
                                        
                                        <tr>
                                            <td>LUL202518</td>
                                            <td>13th Sept - 20th Sept</td>
                                            <td><span>Open</span></td>
                                        </tr>

                                        <tr>
                                            <td>LUL202519</td>
                                            <td>20th Sept - 27th Sept</td>
                                            <td><span>Open</span></td>
                                        </tr>

                                        <tr>
                                            <td>LUL202520</td>
                                            <td>27th Sept - 03rd Oct</td>
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