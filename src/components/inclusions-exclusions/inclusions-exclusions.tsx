import { component$, useStylesScoped$ } from '@builder.io/qwik';
import styles from './inclusions-exclusions.css?inline';
import { handleAccordionScrollIntoView } from '~/utils/handleAccordionScrollIntoView';

export default component$(() => {
    useStylesScoped$(styles);

    return (
        <>
            <div class="accordion" id="inclusionsExclusionsAccordion">
                <div class="accordion-item">
                    <h3 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#inclusionsExclusionsCollapse1" aria-expanded="true" aria-controls="inclusionsExclusionsCollapse1" onClick$={handleAccordionScrollIntoView}>
                        Inclusions
                        </button>
                    </h3>
                    <div id="inclusionsExclusionsCollapse1" class="accordion-collapse collapse" data-bs-parent="#inclusionsExclusionsAccordion">
                        <div class="accordion-body">
                            <ul class="inclusions">
                                <li>Royal Enfield Himalayan 411 Bike BSVI</li>
                                <li>Fuel for tour</li>
                                <li>Road Captain/Marshal</li>
                                <li>Experienced motor bike Mechanic during the trip</li>
                                <li>Riding Jacket, Gloves and Knee Guard for Bikers</li>
                                <li>Tempo/Innova Vehicle (For seat in vehicle Option)</li>
                                <li>Sharing-based accommodation in Hotels/Camps/Guest houses (Double Sharing for Couples)</li>
                                <li>Breakfast + Dinner as per the tour Itinerary</li>
                                <li>Pangong, Nubra Permission Fees</li>
                                <li>Wildlife & Environmental Fees</li>
                                <li>Oxygen Cylinder, Oximeter & Basic First Aid Kit</li>
                                <li>Backup Vehicle to Carry Luggage</li>
                                <li>All tolls during the Leh Ladakh Bike Trip</li>
                                <li>Achievement Certificate</li>
                                <li>Memories of Life Time</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h3 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#inclusionsExclusionsCollapse2" aria-expanded="false" aria-controls="inclusionsExclusionsCollapse2" onClick$={handleAccordionScrollIntoView}>
                        Exclusions
                        </button>
                    </h3>
                    <div id="inclusionsExclusionsCollapse2" class="accordion-collapse collapse" data-bs-parent="#inclusionsExclusionsAccordion">
                        <div class="accordion-body">
                            <ul class="exclusions">
                                <li>GST 5% (Service Tax)</li>
                                <li>Lunch is not included and any other meal than mentioned in the tour itinerary</li>
                                <li>Any insurance</li>
                                <li>Early check-in or late checkout rooms at any Guest House/Camps</li>
                                <li>Any entry fees or Personal Expenses</li>
                                <li>Airport Transfers</li>
                                <li>Additional stays at any place except Itinerary will be chargeable.</li>
                                <li>Tips to driver, guide, hotel staff & representative.</li>
                                <li>Camera/video camera fee at monuments</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
});