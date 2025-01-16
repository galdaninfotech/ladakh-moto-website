import { component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from './index.css?inline';

import type { DocumentHead } from "@builder.io/qwik-city";
import Sidebar from "~/components/sidebar/sidebar";
import Fab from "~/components/fab/fab";

export default component$(() => {
    useStylesScoped$(styles);

    return (
        <div class="container">
            <div class="row">
                <div class="col-lg-9">
                    <div class="intro">
                        <h1 class="main-heading">About Us</h1>
                    </div>
                    <span><strong><i>Authentic Adventures Guided By Locals</i></strong></span>

                    <p>Welcome to the Ladakh Moto, where we accompany you through the great views of Leh Ladakh. As a locally owned travel agency operating from the region, we are capable of organizing tours for any traveler in India as we başra of the people and so return all the support that it get from this scenic location.</p>

                    <p>We take pride in the fact that we live here, the local culture and the people are our own, and our experience and past performance in the field since 2014 has made us experts in doing so. We don't just plan trips, we create adventures that encompass the true essence of this incredible land, at Ladakh Moto. Discover the Himalayas with Ladakh Moto where adventure meets authenticity</p>

                    <Fab tourPrice={""} />
                </div>


                <div class="col-lg-3">
                    <Sidebar />
                </div>
            </div>
        </div>
    );
});

export const head: DocumentHead = {
  title: "About Us",
  meta: [
    {
      name: "description",
      content: "About Us",
    },
  ],
};
