import { component$, useStylesScoped$, useVisibleTask$, useSignal } from "@builder.io/qwik";
import styles from './index.css?inline';

import type { DocumentHead } from "@builder.io/qwik-city";
import Itinerary from "~/components/bike-tour-packages/all-ladakh-tour/itinerary/itinerary";
import Overview from "~/components/bike-tour-packages/all-ladakh-tour/overview/overview";
import Cost from "~/components/bike-tour-packages/all-ladakh-tour/cost/cost";
import TourPolicy from "~/components/tour-policy/tour-policy";
import Sidebar from "~/components/sidebar/sidebar";
import EnquiryPopup from "~/components/enquiry-popup/enquiry-popup";
import { Contact } from "~/components/contact/contact";
import Fab from "~/components/fab/fab";
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
                            <h1 id="tour-name" data-tour-name="All-Ladakh-Tour">All-Ladakh-Tour</h1>
                        </div>

                        <div class="sticky-buttons">
                            <a aria-label="Overview" title="Overview" href="#overview" class={{ active: activeSection.value === 'overview' }}>Overview</a>
                            <a aria-label="Itinerary" title="Itinerary" href="#itinerary" class={{ active: activeSection.value === 'itinerary' }}>Itinerary</a>
                            <a aria-label="Cost" title="Cost" href="#cost" class={{ active: activeSection.value === 'cost' }}>Cost</a>
                        </div>

                        <Overview />
                        <Itinerary />
                        <Cost />

                        <TourPolicy />
                        <TourPolicy />
                        <EnquiryPopup />
                        <Contact />
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
  title: "All Ladakh Tour - Tour Package, Leh to Leh | 8N/9D, 960 km - @ ₹20,000/-",
  meta: [
    {
      name: "description",
      content: "Leh to Leh | 960 km Trip  - Hotel, Meal, Transportation, Permit, Guide | All Ladakh Tour - including Khardong La, Nubra Valley, Pangong Lake, Hanle & Tsomoriri Lake. 100% Travellers Satisfaction Guaranteed.",
    },
  ],
};
