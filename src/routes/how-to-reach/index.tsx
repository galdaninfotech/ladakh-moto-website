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
                        <h1 class="main-heading">How To Reach?</h1>
                    </div>

                    <p>Leh Ladakh is situated amidst the snowy mountains of the Indian Himalayas. It is every adventurer's and an explorer's dream destination. In order to reach this isolated paradise, there are several ways available depending on the user's likes and the time he/she wants to spend. </p>

                    <h2>By Air </h2>
                    <p>The quickest and the most feasible way to travel to Leh requires you to take a flight. The Kushok Bakula Rinpoche Airport is located in Leh and is connected with many major cities in India including Delhi, Mumbai, and Srinagar. There are regular flights, especially in the tourist season from May to September. The view of the Himalayan ranges from the air is just breathtaking. However, with the height of the airport which is more than 10,000 feet soaring altitude sickness is inevitable which travelers need to be ready for. </p>

                    <h2 class="mt-5">By Road</h2>

                    <p>Leh can also be reached by road. Two main roads offer a vision of various picturesque places: </p>

                    <h3>1. Manali-Leh Highway</h3>

                    <p>The 474 km route is heavily populated with travelers looking to catch a glimpse of beautiful views accompanied with high mountain passes including  Baralacha La, and  Tanglang La, and experiences like camping at Sarchu. After the circumstances aid, the road should be opened from late May to October.  </p>

                    <h3>2. Srinagar-Leh Highway </h3>

                    <p>This route spans about 434 km and is known for its gentler ascent, making it more suitable for those who want to acclimatize gradually.</p>
                    You may encounter several remarkable sites like Sonamarg, Drass (which is the second coldest region in the world), and Kargil. The entire highway stays functional from April to November. 

                    <p>Both of these routes are greatly loved by bikers and motorists due to having magnificent views alongside the sharp turns. </p>

                    <h2 class="mt-5">By Train</h2>

                    <p>Because of how remote and difficult the location is, there isn't a train service that can take you to Leh directly. However, the narest railway station is Jammu Tawi, which is somewhat 700 kilometers away from the destination. After reaching Jammu you can always get a taxi or a bus so that you can get an overland journey through Srinagar.  </p>

                    <h2 class="mt-5">By Bus</h2>
                    <p>Private and government buses commute to Leh from Srinagar and Manali. For tourists that are on a budget, these buses tend to be good as they allow you to talk with the locals. There are Deluxe and Semi-Deluxe buses available through HPTDC and JKSRTC, so travelling through these will definitely give you smooth rides. </p>

                    <h2 class="mt-5">By Motorcycle</h2>
                    <p>For those that are looking for an adventure, travelling with motorbikes is a great experience. You can start your journey from Delhi or Srinagar, crossing through mountain passes and then viewing the beauty of Ladakh would definitely be the highlight. But do remember to prepare in advance so that the ride remains fun and safe.  </p>

                    <p>So whether you choose to go on soaring high altitudes, a long-distance bus ride, or even grab a flight, Leh Ladakh is full of adventures waiting for you.</p>

                    <p>Make sure to pick the option that best corresponds with your exploration style and prepare to head towards one of the most beautiful areas of the planet!</p>
                    
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
  title: "How To Reach?",
  meta: [
    {
      name: "description",
      content: "How To Reach?",
    },
  ],
};
