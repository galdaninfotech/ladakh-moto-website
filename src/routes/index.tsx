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
  title: "Welcome to Ladakh Moto - LadakhMoto",
  meta: [
    {
        name: "keyword",
        content: "Ladakh Moto, LadakhMoto"
    },
    {
      name: "description",
      content: "Discover Ladakh with Ladakh Moto – your trusted, locally-owned travel agency in Leh. Offering authentic adventures, customized tours, and expert guidance, we help you explore the breathtaking landscapes and vibrant culture of Ladakh. Start your unforgettable journey today!",
    },
  ],
};
