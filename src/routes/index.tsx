import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Intro from "~/components/intro/intro";
import HomePackages from "~/components/home-packages/home-packages";
import AdventureRides from "~/components/adventure-rides/adventure-rides";
import EnquiryPopup from "~/components/enquiry-popup/enquiry-popup";
import HomeTeams from "~/components/home-team/home-teams";
import GoogleReviews from "~/components/google-reviews/google-reviews";

export default component$(() => {

    return (
        <>
            <Intro />
            <AdventureRides />
            <HomePackages />
            <HomeTeams />
            <GoogleReviews />
            <EnquiryPopup />

            
        </>
    );
});

export const head: DocumentHead = {
  title: "Ladakh Moto - Local Travel Experts for Leh Ladakh bike tours",
  meta: [
    {
      name: "description",
      content: "Ladakh Moto - Your local Ladakh travel agency specializing in bike tours, adventure bike trips, and customized road journeys. Experience Ladakh Bike Tour!",
    },
  ],
  scripts: [
    {
      props: {
        type: "application/ld+json",
      },
      script: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Article",
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://ladakhmoto.com/"
        },
        "headline": "Why Choose LadakhMoto?",
        "description": "Ladakhmoto is a local company located right in the center of Leh, Ladakh. We provide authentic and seamless travel experiences with full accountability and a deep-rooted knowledge of the region.",
        "image": [
            "https://ladakhmoto.com/assets/B26Jsl4P-slide1.webp",
            "https://ladakhmoto.com/assets/ByTzixl1-slide2.webp",
            "https://ladakhmoto.com/assets/DxjDFJFx-slide3.webp",
            "https://ladakhmoto.com/assets/_3JxCjfx-slide4.webp"
        ],  
        "author": {
            "@type": "Organization",
            "name": "LadakhMoto",
            "url": "https://ladakhmoto.com/"
        },  
        "publisher": {
            "@type": "Organization",
            "name": "LadakhMoto",
            "logo": {
            "@type": "ImageObject",
            "url": "http://localhost:5173/@imagetools/39086c3a7df3bed4db98b6f983c86116815df987"
            }
        },
        "datePublished": "2025-02-01",
        "dateModified": "2025-02-15"
      }),
    },
  ],
};
