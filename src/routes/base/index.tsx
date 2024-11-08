import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Dates from "~/components/ladakh-with-umling-la/dates/dates";
import Itinerary from "~/components/ladakh-with-umling-la/itinerary/itinerary";
import Overview from "~/components/ladakh-with-umling-la/overview/overview";
import Cost from "~/components/ladakh-with-umling-la/cost/cost";
import RidingGears from "~/components/riding-gears/riding-gears";
import TourPolicy from "~/components/tour-policy/tour-policy";
import Faqs from "~/components/faqs/faqs";
import Essentials from "~/components/essentials/essentials";
import Sidebar from "~/components/sidebar/sidebar";
import EnquiryPopup from "~/components/enquiry-popup/enquiry-popup";
import { Contact } from "~/components/contact/contact";

export default component$(() => {
    return (
        <div class="adventure-grid-area style-2 pt-50 pb-85">
            <div class="container">
                <div class="row">
                    <div class="col-lg-9">
                        <div class="intro">
                            <h1 id="tour-name" data-tour-name="Ladakh With Umling La">Ladakh With Umling La</h1>
                        </div>

                        <div class="sticky-buttons">
                            <a href="#overview">Overview</a>
                            <a href="#itinerary">Itinerary</a>
                            <a href="#dates">Dates</a>
                            <a href="#cost">Cost</a>
                        </div>

                        <Overview />
                        <Itinerary />
                        <Dates />
                        <Cost />

                        <RidingGears />
                        <TourPolicy />
                        <Essentials />
                        <Faqs />
                        <EnquiryPopup />
                        <Contact />
                    </div>
                    <div class="col-lg-3">
                        <Sidebar />
                    </div>
                </div>
            </div>
        </div>
    );
});

export const head: DocumentHead = {
  title: "Ladakh With Umling La",
  meta: [
    {
      name: "description",
      content: "Ladakh With Umling La",
    },
  ],
};
