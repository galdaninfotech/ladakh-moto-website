import { component$, useStylesScoped$, useVisibleTask$, useSignal } from "@builder.io/qwik";
import styles from './index.css?inline';

import type { DocumentHead } from "@builder.io/qwik-city";
import Dates from "~/components/bike-tours/manali-leh-with-umling-la/dates/dates";
import Itinerary from "~/components/bike-tours/manali-leh-with-umling-la/itinerary/itinerary";
import Overview from "~/components/bike-tours/manali-leh-with-umling-la/overview/overview";
import Cost from "~/components/bike-tours/manali-leh-with-umling-la/cost/cost";
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
                            <h1 id="tour-name" data-tour-name="Manali Leh With Umling La">Manali Leh With Umling La</h1>
                        </div>

                        <div class="sticky-buttons">
                            <a aria-label="Overview" title="Overview" href="#overview">Overview</a>
                            <a aria-label="Itinerary" title="Itinerary" href="#itinerary">Itinerary</a>
                            <a aria-label="Dates" title="Dates" href="#dates">Dates</a>
                            <a aria-label="Cost" title="Cost" href="#cost">Cost</a>
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
  title: "Manali Leh With Umling La - Bike Tour, Manali to Srinagar | 9N/10D, 1525 km - @ ₹23,000/-",
  meta: [
    {
      name: "description",
      content: "Manali to Srinagar | 1525 km trip on Himalayan 411 BSVI bike - Hotel, Meal, Fuel & Mechanic included | Manali Leh With Umling La Bike Tour - including Manali, Leh, Khardong la, Nubra valley, Turtuk, Pangong lake, Kargil & Srinagar. 100% Travellers Satisfaction Guaranteed.",
    },
  ],
};
