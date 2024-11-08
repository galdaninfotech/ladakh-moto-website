import { component$, useStylesScoped$, useVisibleTask$, useSignal } from "@builder.io/qwik";
import styles from './index.css?inline';

import type { DocumentHead } from "@builder.io/qwik-city";
import Dates from "~/components/packages/ladakh-zangskar-valley-tour/dates/dates";
import Itinerary from "~/components/packages/ladakh-zangskar-valley-tour/itinerary/itinerary";
import Overview from "~/components/packages/ladakh-zangskar-valley-tour/overview/overview";
import Cost from "~/components/packages/ladakh-zangskar-valley-tour/cost/cost";
import RidingGears from "~/components/riding-gears/riding-gears";
import TourPolicy from "~/components/tour-policy/tour-policy";
import Faqs from "~/components/faqs/faqs";
import Essentials from "~/components/essentials/essentials";
import Sidebar from "~/components/sidebar/sidebar";
import EnquiryPopup from "~/components/enquiry-popup/enquiry-popup";
import { Contact } from "~/components/contact/contact";
import Fab from "~/components/fab/fab";

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
        <div class="adventure-grid-area style-2 pt-50 pb-85">
            <div class="container">
                <div class="row">
                    <div class="col-lg-9">
                        <div class="intro">
                            <h1 id="tour-name" data-tour-name="Ladakh-Zangskar-Valley-Tour">Ladakh-Zangskar-Valley-Tour</h1>
                        </div>

                        <div class="sticky-buttons">
                            <a href="#overview" class={{ active: activeSection.value === 'overview' }}>Overview</a>
                            <a href="#itinerary" class={{ active: activeSection.value === 'itinerary' }}>Itinerary</a>
                            <a href="#dates" class={{ active: activeSection.value === 'dates' }}>Dates</a>
                            <a href="#cost" class={{ active: activeSection.value === 'cost' }}>Cost</a>
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
  title: "Ladakh-Zangskar-Valley-Tour",
  meta: [
    {
      name: "description",
      content: "Ladakh-Zangskar-Valley-Tour",
    },
  ],
};
