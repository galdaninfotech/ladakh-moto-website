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
                        <h1 class="main-heading">Our Team</h1>
                    </div>

                    <span class="d-flex justify-content-center"><strong><i>Our team of local experts.</i></strong></span>

                    <p class="mb-5">
                        The team of local tour coordinators, bike marshals, mechanics, and support staff at Ladakhmoto has never let us down with their exceptional skill and knowledge of the region during our motorbiking tours. Because they are from Ladakh, these professionals place a high importance on providing you with a secure and genuine experience in the breathtaking and rugged terrain of the region.
                    </p>

                    <table class="table table-striped table-bordered mt-5">
                        <thead>
                            <tr><td>Name</td><td>Responsibility</td></tr>
                        </thead>

                        <tbody>
                            <tr><td>Phuntsog</td><td>Tour Leader/Founder</td></tr>
                            <tr> <td>Gyatso</td><td>Tour Coordinator</td></tr>
                            <tr> <td>Stanzin</td><td>Marshall</td></tr>
                            <tr> <td>Aman</td><td>Mechanical assistance management</td></tr>
                            <tr> <td>Skalzang</td><td>Management</td></tr>
                            <tr> <td>Namgyal</td><td>Transportations</td></tr>
                            <tr> <td>Thinles</td><td>Accounts and Compliance (Founder)</td></tr>
                            <tr> <td>Rigzin</td><td>Sales</td></tr>
                            <tr> <td>Tsering</td><td>Sales</td></tr>
                        </tbody>
                    </table>        

                    <p class="mt-5">
                        The dedicated team at Ladakhmoto ensures that every motorbiking tour through Ladakh is a seamless and unforgettable adventure. With expert guides, skilled mechanics, and a passion for the region, they handle every detail—from route planning to safety—so riders can focus on the thrill of the journey. Beyond adventure, the team is deeply committed to preserving Ladakh's pristine beauty, following eco-friendly practices, and promoting responsible tourism. Whether navigating high-altitude passes or ensuring minimal environmental impact, Ladakhmoto blends excitement with sustainability for a truly enriching experience.
                    </p>


                   
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
  title: "Our Team",
  meta: [
    {
      name: "description",
      content: "Our Team",
    },
  ],
};
