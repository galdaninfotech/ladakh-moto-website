import { component$, useStylesScoped$, useVisibleTask$, useSignal } from "@builder.io/qwik";
import styles from './index.css?inline';

import type { DocumentHead } from "@builder.io/qwik-city";
import Dates from "~/components/manali-leh-srinagar/dates/dates";
import Itinerary from "~/components/manali-leh-srinagar/itinerary/itinerary";
import Overview from "~/components/manali-leh-srinagar/overview/overview";
import Cost from "~/components/manali-leh-srinagar/cost/cost";
import RidingGears from "~/components/riding-gears/riding-gears";
import TourPolicy from "~/components/tour-policy/tour-policy";
import Sidebar from "~/components/sidebar/sidebar";
import EnquiryPopup from "~/components/enquiry-popup/enquiry-popup";
import Fab from "~/components/fab/fab";
import ImportantInstructions from "~/components/important-instructions/important-instructions";

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
                            <h1 id="tour-name" data-tour-name="Manali Leh Srinagar">Manali Leh Srinagar</h1>
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
  title: "Manali Leh Srinagar",
  meta: [
    {
      name: "description",
      content: "Manali Leh Srinagar",
    },
  ],
};