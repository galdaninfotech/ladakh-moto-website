import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Intro from "~/components/intro/intro";
import Testimonials from "~/components/testimonials/testimonials";
import HomeTours from "~/components/home-tours/home-tours";
import HomePackages from "~/components/home-packages/home-packages";

export default component$(() => {
    return (
        <>
            <Intro />
            <HomeTours />
            <HomePackages />
            <Testimonials />
        </>
    );
});

export const head: DocumentHead = {
  title: "zaaWelcome to Ladakh Moto",
  meta: [
    {
      name: "description",
      content: "Ladakh Moto",
    },
  ],
};
