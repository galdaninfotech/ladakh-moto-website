import { component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from './index.css?inline';

import type { DocumentHead } from "@builder.io/qwik-city";
import Sidebar from "~/components/sidebar/sidebar";
import Fab from "~/components/fab/fab";

export default component$(() => {
    useStylesScoped$(styles);

    return (
        <div class="container">
            <div class="row">
                <div class="col-lg-9">
                    <div class="intro">
                        <h1 class="main-heading">Terms & conditions</h1>
                    </div>

                    <h2 class="mt-5">Tour Itinerary Changes</h2>
                    <p>LadakhMoto reserves the right to change the sequence of the day-wise tour program or itinerary without prior notice. The itinerary is subject to alterations due to traffic restrictions, weather conditions, flight changes, landslides, or other unforeseen travel-related events.</p>

                    <h2 class="mt-5">Tour Cancellations</h2>
                    <p>If the group tour is canceled by LadakhMoto due to unavoidable circumstances, we will either transfer your booking to another fixed departure trip or provide a full refund, excluding any flight charges.</p>

                    <h2 class="mt-5">Safety & Liability</h2>
                    <p>LadakhMoto ensures the highest level of safety during its adventure programs. However, in the case of any accidents or unforeseen incidents, we are not liable for injuries or loss of life. Any disputes will be subject to the jurisdiction of Leh only.</p>

                    <h2 class="mt-5">Indemnity Form</h2>
                    <p>All participants must sign an Indemnity Form before starting the program. Failure to do so will result in the traveler being unable to join the adventure activities.</p>

                    <h2 class="mt-5">No Refund for Sickness or Injury</h2>
                    <p>No refund will be given if the client gets sick or injured during the trip. However, LadakhMoto will provide full assistance and support at no additional charge.</p>

                    <h2 class="mt-5">Exclusions from Package Price</h2>
                    <p>The package price does not include personal expenses such as laundry, phone calls, room service, alcohol, minibar charges, tips, porterage/offloading charges, monument entrance fees, camera fees, etc.</p>

                    <h2 class="mt-5">Price Changes & Force Majeure</h2>
                    <p>Package rates are subject to change without notice due to Force Majeure events, strikes, festivals, weather conditions, traffic delays, hotel or flight overbookings, cancellations or rerouting of flights, or entry restrictions at destinations. No refunds or compensation will be provided in such cases.</p>

                    <h2 class="mt-5">Identification Requirements</h2>
                    <p>All guests are required to carry valid photo identification (Passport, Driving License, or Voter ID). Note that a PAN card is not accepted as valid ID in many locations.</p>

                    <h2 class="mt-5">Booking Confirmation</h2>
                    <p>A booking is considered confirmed only after the full payment is received and an official confirmation is sent by LadakhMoto.</p>

                     <h2 class="mt-5">Travel Insurance</h2>
                    <p>All participants are advised to have valid travel insurance covering medical expenses, personal injury, and trip cancellations.</p>

                     <h2 class="mt-5">Behavior & Conduct</h2>
                    <p>Participants are expected to respect local customs, the environment, and fellow travelers. Any disruptive or unlawful behavior may result in immediate removal from the tour without any refund.</p>

                     <h2 class="mt-5">Equipment & Motorcycle Usage</h2>
                    <p>Riders must adhere to safety guidelines, wear protective gear, and use the provided motorcycle responsibly. Any damages to the motorcycle due to negligence will be the participant's financial responsibility.</p>

                    <p>By booking a tour with LadakhMoto, you agree to abide by these Terms and Conditions.</p>


                    
                    <Fab tourPrice={""} />
                </div>


                <div class="col-lg-3">
                    <Sidebar />
                </div>
            </div>
        </div>
    );
});

export const head: DocumentHead = {
  title: "Terms And conditions",
  meta: [
    {
      name: "description",
      content: "Terms & conditions",
    },
  ],
};
