import { component$, useStylesScoped$ } from '@builder.io/qwik';
import styles from './inclusions-exclusions.css?inline';

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
                                <li><i class="bi bi-check2-all"></i>Royal Enfield Himalayan 411CC Bike (For Rented Bike Option)</li>
                                <li><i class="bi bi-check2-all"></i>Riding Jacket, Gloves and Knee Guard for Bikers</li>
                                <li><i class="bi bi-check2-all"></i>Tempo/Innova Vehicle (For Tempo Traveller Option)</li>
                                <li><i class="bi bi-check2-all"></i>Transportation from Delhi to Manali & Manali to Delhi</li>
                                <li><i class="bi bi-check2-all"></i>Sharing-based accommodation in Hotels/Camps/Guest houses (Double Sharing for Couples)</li>
                                <li><i class="bi bi-check2-all"></i>Breakfast + Dinner as per the Itinerary</li>
                                <li><i class="bi bi-check2-all"></i>Experienced Motorbike Mechanic during the trip</li>
                                <li><i class="bi bi-check2-all"></i>Pangong, Nubra Permission fee</li>
                                <li><i class="bi bi-check2-all"></i>Wildlife & Environmental Fee</li>
                                <li><i class="bi bi-check2-all"></i>Oxygen Cylinder, Oximeter & Basic First Aid Kit</li>
                                <li><i class="bi bi-check2-all"></i>Backup Vehicle to Carry Luggage</li>
                                <li><i class="bi bi-check2-all"></i>All tolls during the Leh Ladakh Bike Trip</li>
                                <li><i class="bi bi-check2-all"></i>Achievement Certificate</li>
                                <li><i class="bi bi-check2-all"></i>Memories of Life Time</li>
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
                                <li><i class="bi bi-x"></i>GST 5% (Service Tax)</li>
                                <li><i class="bi bi-x"></i>Lunch is not included and any other meal than mentioned in the itinerary</li>
                                <li><i class="bi bi-x"></i>Any insurance</li>
                                <li><i class="bi bi-x"></i>Early check-in or late checkout rooms at any Guest House/ Camps</li>
                                <li><i class="bi bi-x"></i>Any entry fees or Personal Expenses</li>
                                <li><i class="bi bi-x"></i>Airport Transfers</li>
                                <li><i class="bi bi-x"></i>Fuel for own Vehicle Option</li>
                                <li><i class="bi bi-x"></i>Additional stays at any place except Itinerary will be chargeable.</li>
                                <li><i class="bi bi-x"></i>Tips to driver, guide, hotel staff & representative.</li>
                                <li><i class="bi bi-x"></i>Camera/video camera fee at monuments</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
});