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
                        <h1 class="main-heading">Guides & Staffs</h1>
                    </div>
                    <p>
                        At Ladakhmoto, we believe that the success of every adventure lies in the hands of our skilled and dedicated team. Our staff is more than just a support crew; they are the heart and soul of every tour, ensuring that your experience is safe, enjoyable, and unforgettable. 
                    </p>

                    <h2 class="main-heading">Guides</h2>

                    <p>Our expert guides are locals of Ladakh and have extensive knowledge of the region, from its hidden trails to its cultural history. With years of experience leading riders through Ladakh's challenging terrains, they ensure that every rider is not only guided safely but also enriched with the beauty and stories of the region. They are trained to handle all situations, ensuring that your journey is as smooth and insightful as possible.</p>

                    <h2 class="main-heading">Bike Marshals</h2>
                    Our professional bike marshals are there to keep the group together, maintain pace, and assist in any technical or logistical needs on the road. Whether you are a seasoned rider or a beginner, they will provide the necessary support and guidance to ensure you can focus on enjoying the ride. Their experience with the terrain and ability to handle any situation on the road make them an essential part of our team.

                    <h2 class="main-heading">Mechanics</h2>
                    <p>Our team of highly skilled mechanics is always on standby to handle any mechanical issues that may arise during the tour. They are trained to work with various bike models, ensuring that all our bikes are in top condition and can withstand the challenges of Ladakh’s rugged landscapes. If you face any issues along the way, our mechanics will be there to get you back on track without delay.</p>

                    <h2 class="main-heading">Support Staff</h2>
                    <p>Our support staff works tirelessly behind the scenes to make sure everything runs smoothly. From managing logistics and ensuring that riders’ needs are met to providing on-road assistance, they ensure that every aspect of the tour is well-organized. They handle everything from food arrangements to first aid, giving you peace of mind as you focus on the adventure ahead.</p>

                    <p>At Ladakhmoto, we pride ourselves on our highly trained and dedicated team who go above and beyond to ensure you have an exceptional experience. Whether you're riding through the majestic passes or exploring the beauty of Ladakh, our team is with you every step of the way, making sure your journey is safe, memorable, and filled with adventure.</p>


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
  title: "Guides & Staffs",
  meta: [
    {
      name: "description",
      content: "Guides & Staffs",
    },
    {
        name: "robots",
        content: "index, follow"
    },
  ],
};
