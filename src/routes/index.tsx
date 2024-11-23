import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Intro from "~/components/intro/intro";
import Testimonials from "~/components/testimonials/testimonials";
import HomePackages from "~/components/home-packages/home-packages";
import AdventureRides from "~/components/adventure-rides/adventure-rides";

export default component$(() => {
    return (
        <>
            <Intro />
            <AdventureRides />
            <HomePackages />
            <Testimonials />
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
