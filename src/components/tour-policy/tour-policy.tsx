import { component$, useStylesScoped$ } from '@builder.io/qwik';
import styles from './tour-policy.css?inline';

export default component$(() => {
    useStylesScoped$(styles);

    return (
        <div id="tour-policies" class="mt-5">
            <div class="sub-headings">
                <h2>Tour Policies</h2>
            </div>
            <div class="tour-policy-accordian">
                <div class="accordion" id="tourPolicyAccordion">
                    <div class="accordion-item">
                        <h3 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#tourPolicyCollapse1" aria-expanded="false" aria-controls="tourPolicyCollapse1">
                            Booking and Payment Policies
                            </button>
                        </h3>
                        <div id="tourPolicyCollapse1" class="accordion-collapse collapse" data-bs-parent="#tourPolicyAccordion">
                            <div class="accordion-body">
                                <ul>
                                    <li>Advance Payment: Full payment or an advance must be made at the time of booking.</li>
                                    <li>Remaining Payment: The balance payment is required at least 15 days before the trip departure date.</li>
                                    <li>Booking Methods: Payments can be made via NEFT, RTGS, SWIFT, Bank Transfer, or Cash.</li>
                                    <li>GST Charges: A 5% GST (Service Tax) will be added to all bookings.</li>
                                    <li>Booking Deadline: The final date for booking is 10 days prior to the trip's departure.</li>
                                    <li>Seat Availability: Before making any online reservations, please verify the trip dates and seat availability by contacting our team via email or phone.</li>
                                    <li>TCS Applicability: For invoices above ₹2 lakhs, if any portion of the payment is made in cash (either at the counter or deposited into a bank), an additional 1% TCS will apply. A PAN card copy must also be provided.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h3 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#tourPolicyCollapse2" aria-expanded="false" aria-controls="tourPolicyCollapse2">
                            Cancellation Policy
                            </button>
                        </h3>
                        <div id="tourPolicyCollapse2" class="accordion-collapse collapse" data-bs-parent="#tourPolicyAccordion">
                            <div class="accordion-body">
                                <ul>
                                    <li>In case of trip or adventure activity cancellation due to any avoidable or unavoidable reasons, notification must be sent via email to info@ladakhmoto.com.</li>
                                    <li>Cancellation charges will apply from the date we receive the cancellation request by email. The charges are as follows:
                                        <ul>
                                            <li>30 days or more before departure: 90% of the total Land Package Cost will be refunded.</li>
                                            <li>15–29 days before departure: 50% of the total Land Package Cost will be refunded.</li>
                                            <li>Less than 15 days before departure: No refund will be issued.</li>
                                        </ul>
                                    </li>
                                    <li>Refund Process: Refunds will be processed within 10 working days after the cancellation date.</li>
                                </ul>

                                <h6><strong>Note:</strong></h6>
                                    <ul>
                                        <li>Cancellation charges are calculated on the total tour cost and depend on the date of departure and the date of cancellation.</li>
                                        <li>The Booking Amount is non-refundable.</li>
                                    </ul>

                                <h6><strong>No refunds will be granted in the following cases:</strong></h6>
                                <ul>
                                    <li>For any missed or unused services during the tour, including meals, for any reason.</li>
                                    <li>If the tour services are modified, changed, cancelled, or not utilized.</li>
                                    <li>If the client cancels the tour due to any alterations in the itinerary or trip details.</li>
                                    <li>If the client is dissatisfied with any service provided during the tour.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h3 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#tourPolicyCollapse3" aria-expanded="false" aria-controls="tourPolicyCollapse3">
                            Other Terms & Policies
                            </button>
                        </h3>
                        <div id="tourPolicyCollapse3" class="accordion-collapse collapse" data-bs-parent="#tourPolicyAccordion">
                            <div class="accordion-body">
                                <ul>
                                    <li>The sequence of the day-wise tour program or itinerary may be changed by Ladakhmoto without prior notice.</li>
                                    <li>The itinerary is subject to alterations due to traffic restrictions, weather conditions, flight changes, landslides, or other unforeseen travel-related events.</li>
                                    <li>In the event that the group tour is canceled by us due to unavoidable circumstances, we will either transfer your booking to another fixed departure trip or provide a full refund, excluding any flight charges.</li>
                                    <li>Ladakhmoto ensures the highest level of safety during its adventure programs. However, in the case of any accidents or unforeseen incidents, we are not liable for injuries or loss of life. Any disputes will be subject to the jurisdiction of Leh only.</li>
                                    <li>All participants must sign an Indemnity Form before starting the program; failure to do so will result in the traveler being unable to join the adventure activities.</li>
                                    <li>The package price does not include personal expenses such as laundry, phone calls, room service, alcohol, minibar charges, tips, porterage/offloading charges, monument entrance fees, camera fees, etc.</li>
                                    <li>Package rates are subject to change without notice due to Force Majeure events, strikes, festivals, weather conditions, traffic delays, hotel or flight overbookings, cancellations or rerouting of flights, or entry restrictions at destinations. No refunds or compensation will be provided in such cases.</li>
                                    <li>All guests are required to carry valid photo identification (Passport, Driving License, or Voter ID). Note that a PAN card is not accepted as valid ID in many locations.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h3 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#tourPolicyCollapse4" aria-expanded="false" aria-controls="tourPolicyCollapse4">
                            Please Note
                            </button>
                        </h3>
                        <div id="tourPolicyCollapse4" class="accordion-collapse collapse" data-bs-parent="#tourPolicyAccordion">
                            <div class="accordion-body">
                                <ul>
                                    <li>For Rented Bike Option Rs.10,000 is the deposit Amount, which will be refunded back on the final day after completing trip.</li>
                                    <li>If you leave your bike at any place then deposit amount will not be refunded.</li>
                                    <li>Any damage/change of spare part will be payable by traveler directly.</li>
                                    <li>For International Traveller Rs. 4000 will be additional</li>
                                    <li>Liability for change in itinerary due to any reasons beyond our control Like Change in Weather Condition, Government Regulations, Local Authority, Biker Unions Rules & Regulations.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
});