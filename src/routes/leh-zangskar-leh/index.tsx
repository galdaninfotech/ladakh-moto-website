import { component$, useStylesScoped$, useVisibleTask$, useSignal } from "@builder.io/qwik";
import styles from './index.css?inline';

import type { DocumentHead } from "@builder.io/qwik-city";
import Dates from "~/components/leh-zangskar-leh/dates/dates";
import Itinerary from "~/components/leh-zangskar-leh/itinerary/itinerary";
import Overview from "~/components/leh-zangskar-leh/overview/overview";
import Cost from "~/components/leh-zangskar-leh/cost/cost";
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
                            <h1 id="tour-name" data-tour-name="Leh Zangskar Leh">Leh Zangskar Leh </h1>
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
  title: "Leh Zangskar Leh" ,
  meta: [
    {
      name: "description",
      content: "Leh Zangskar Leh",
    },
  ],
};
