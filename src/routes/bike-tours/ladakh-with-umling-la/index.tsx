import { component$, useStylesScoped$, useVisibleTask$, useSignal } from "@builder.io/qwik";
import styles from './index.css?inline';

import type { DocumentHead } from "@builder.io/qwik-city";
import Dates from "~/components/bike-tours/ladakh-with-umling-la/dates/dates";
import Itinerary from "~/components/bike-tours/ladakh-with-umling-la/itinerary/itinerary";
import Overview from "~/components/bike-tours/ladakh-with-umling-la/overview/overview";
import Cost from "~/components/bike-tours/ladakh-with-umling-la/cost/cost";
import RidingGears from "~/components/riding-gears/riding-gears";
import TourPolicy from "~/components/tour-policy/tour-policy";

import Sidebar from "~/components/sidebar/sidebar";
import EnquiryPopup from "~/components/enquiry-popup/enquiry-popup";
import Fab from "~/components/fab/fab";
import ImportantInstructions from "~/components/things-to-keep-in-mind/things-to-keep-in-mind";
import GoogleReviews from "~/components/google-reviews/google-reviews";

export default component$(() => {
    useStylesScoped$(styles);
    const tourPrice = useSignal('');
    const activeSection = useSignal('');

    useVisibleTask$(() => {
        const priceElement = document.getElementById('tour-price');
        if (priceElement) {
            tourPrice.value = priceElement.innerHTML;
        }

        // Sticky Buttons
        const sections = document.querySelectorAll('div[id]');
        const stickyButtons = document.querySelector('.sticky-buttons') as HTMLElement;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    activeSection.value = entry.target.id;
                }
            });
        }, { 
            threshold: 0,
            rootMargin: `-${stickyButtons?.offsetHeight || 0}px 0px 0px 0px`
        });

        sections.forEach((section) => observer.observe(section));

        return () => {
            sections.forEach((section) => observer.unobserve(section));
        };
    });

    return (
        <div class="adventure-grid-area style-2 pt-50 pb-20">
            <div class="container">
                <div class="row">
                    <div class="col-lg-9">
                        <div class="intro">
                            <h1 id="tour-name" data-tour-name="Ladakh With Umling La">Ladakh With Umling La</h1>
                        </div>

                        <div class="sticky-buttons">
                            <a aria-label="Overview" title="Overview" href="#overview" class={{ active: activeSection.value === 'overview' }}>Overview</a>
                            <a aria-label="Itinerary" title="Itinerary" href="#itinerary" class={{ active: activeSection.value === 'itinerary' }}>Itinerary</a>
                            <a aria-label="Dates" title="Dates" href="#dates" class={{ active: activeSection.value === 'dates' }}>Dates</a>
                            <a aria-label="Cost" title="Cost" href="#cost" class={{ active: activeSection.value === 'cost' }}>Cost</a>
                        </div>

                        <Overview />
                        <Itinerary />
                        <Dates />
                        <Cost />

                        <RidingGears />
                        <TourPolicy />
                        <GoogleReviews />
                        <ImportantInstructions />
                        <EnquiryPopup />
                        <Fab tourPrice={tourPrice.value} />
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
  title: "Ladakh with Umling La - Bike Tour, Leh to Leh | 7N/8D, 1050 km - @ ₹19,500/-",
  meta: [
    {
      name: "description",
      content: "Leh to Leh | 1050 km trip on Himalayan 411 BSVI bike - Hotel, Meal, Fuel & Mechanic included | Ladakh With Umling La Bike Tour - including Khardong La, Nubra Valley, Pangong Lake, Hanle & Umling La pass. 100% Travellers Satisfaction Guaranteed.",
    },
  ],
};
