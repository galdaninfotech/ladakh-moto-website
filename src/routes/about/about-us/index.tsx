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

                    <p>Ladakhmoto is a local company located right in the center of Leh, Ladakh. We provide authentic and seamless travel experiences with full accountability and a deep-rooted knowledge of the region.</p>

                    <p>Being a direct provider is the key, as it ensures you receive personalized service, immediate support and the emphasis on detail is there to make your whole journey a seamless one. Whether you're looking to put together a greater route, need a road captain or mechanic, we're here for you! With Ladakhmoto you not only receive a piece of memoirs by participating in a memorable adventure, you also support a local enterprise dedicated to responsible, sustainable tourism in Ladakh.</p>

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
