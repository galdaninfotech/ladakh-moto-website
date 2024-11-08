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
                                <li><i class="bi bi-check2-all"></i>Accommodation: Comfortable stays in Leh, Nubra Valley, Pangong Lake, and Hanle (hotels, camps, and homestays).</li>
                                <li><i class="bi bi-check2-all"></i>Meals: Daily breakfast and dinner.</li>
                                <li><i class="bi bi-check2-all"></i>Transportation: Private SUV or Tempo Traveler (for groups) with an experienced driver.</li>
                                <li><i class="bi bi-check2-all"></i>Permits: Inner Line Permits for Nubra, Pangong, and Hanle.</li>
                                <li><i class="bi bi-check2-all"></i>Guides: Knowledgeable local guides for cultural sites and monastery visits.</li>
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