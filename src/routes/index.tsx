import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Intro from "~/components/intro/intro";
import Testimonials from "~/components/testimonials/testimonials";
import HomePackages from "~/components/home-packages/home-packages";
import AdventureRides from "~/components/adventure-rides/adventure-rides";
import EnquiryPopup from "~/components/enquiry-popup/enquiry-popup";
import HomeTeams from "~/components/home-team/home-teams";

export default component$(() => {
    return (
        <>
            <Intro />
            <AdventureRides />
            <HomePackages />
            <HomeTeams />
            <Testimonials />
            <EnquiryPopup />

            
        </>
    );
});

export const head: DocumentHead = {
  title: "Ladakh Moto - Local Travel Experts for Leh Ladakh bike adventures tours",
  meta: [
    {
      name: "description",
      content: "Ladakh Moto - Your local Ladakh travel agency specializing in bike tours, adventure bike trips, and customized road journeys. Experience Ladakh like never before!",
    },
  ],
};
