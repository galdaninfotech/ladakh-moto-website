import { component$, useStylesScoped$ } from '@builder.io/qwik';
import styles from './inclusions-exclusions.css?inline';
import CheckAll from "~/components/svgs/check-all/check-all";
import CrossSm from "~/components/svgs/cross-sm/cross-sm";

export default component$(() => {
    useStylesScoped$(styles);

    return (
        <>
            <div class="accordion" id="costAccordion">
                <div class="accordion-item">
                    <h3 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#costCollapse1" aria-expanded="true" aria-controls="costCollapse1">
                        Inclusions
                        </button>
                    </h3>
                    <div id="costCollapse1" class="accordion-collapse collapse" data-bs-parent="#costAccordion">
                        <div class="accordion-body">
                            <ul class="inclusions">
                                <li><CheckAll />Royal Enfield Himalayan 411 Bike BSVI</li>
                                <li><CheckAll />Fuel for tour</li>
                                <li><CheckAll />Riding Jacket, Gloves and Knee Guard for Bikers</li>
                                <li><CheckAll />Tempo/Innova Vehicle (For seat in vehicle Option)</li>
                                <li><CheckAll />Sharing-based accommodation in Hotels/Camps/Guest houses (Double Sharing for Couples)</li>
                                <li><CheckAll />Breakfast + Dinner as per the Itinerary</li>
                                <li><CheckAll />Experienced Motorbike Mechanic during the trip</li>
                                <li><CheckAll />Pangong, Nubra Permission fee</li>
                                <li><CheckAll />Wildlife & Environmental Fee</li>
                                <li><CheckAll />Oxygen Cylinder, Oximeter & Basic First Aid Kit</li>
                                <li><CheckAll />Backup Vehicle to Carry Luggage</li>
                                <li><CheckAll />All tolls during the Leh Ladakh Bike Trip</li>
                                <li><CheckAll />Achievement Certificate</li>
                                <li><CheckAll />Memories of Life Time</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h3 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#costCollapse2" aria-expanded="false" aria-controls="costCollapse2">
                        Exclusions
                        </button>
                    </h3>
                    <div id="costCollapse2" class="accordion-collapse collapse" data-bs-parent="#costAccordion">
                        <div class="accordion-body">
                            <ul class="exclusions">
                                <li><CrossSm />GST 5% (Service Tax)</li>
                                <li><CrossSm />Lunch is not included and any other meal than mentioned in the itinerary</li>
                                <li><CrossSm />Any insurance</li>
                                <li><CrossSm />Early check-in or late checkout rooms at any Guest House/ Camps</li>
                                <li><CrossSm />Any entry fees or Personal Expenses</li>
                                <li><CrossSm />Airport Transfers</li>
                                <li><CrossSm />Additional stays at any place except Itinerary will be chargeable.</li>
                                <li><CrossSm />Tips to driver, guide, hotel staff & representative.</li>
                                <li><CrossSm />Camera/video camera fee at monuments</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
});