import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Intro from "~/components/intro/intro";
import Testimonials from "~/components/testimonials/testimonials";
import HomePackages from "~/components/home-packages/home-packages";
import AdventureRides from "~/components/adventure-rides/adventure-rides";
import EnquiryPopup from "~/components/enquiry-popup/enquiry-popup";

export default component$(() => {
    return (
        <>
            <Intro />
            <AdventureRides />
            <HomePackages />
            <Testimonials />
            <EnquiryPopup />
        </>
    );
});

export const head: DocumentHead = {
  title: "Welcome to Ladakh Moto",
  meta: [
    {
      name: "description",
      content: "Ladakh Moto",
    },
  ],
};
