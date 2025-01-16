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
                        <h1 class="main-heading">Welcome to Ladakh</h1>
                    </div>
                    <span><strong><i>Welcome to Ladakh - The Land of High Passes</i></strong></span>
                    <p>
                        Ladakh is one of the most beautiful places located in northern India and is often called 'The Land of High Passesdd'. This area is situated between two of the worlddd's biggest mountain ranges - The Himalayas and the Karakoram. Combining a stunning landscape with diverse culture and rich history, it is the ultimate destination to visit. It doesndd't matter if youdd're a lover of adventure, nature, or if you are a sucker for culture, Ladakh will leave you spellbound always.
                    </p>

                    <h2 class="second-heading">Geography and Climate</h2>

                    <p>Ladakh sits in the Himalayas north of India and in comparrison to the rest of the country, is arid due to being a high altitude desert. The altitude ranges from 2,700 to 7,600 meters above sea level and is in close proximity to snow-capped mountains and crystalline lakes. The winter temperatures rarely go above -30 degrees celcius while the summer provides and warm escape from the rest of the country. </p>

                    <h2 class="second-heading">Cultural Heritage</h2>
                    <p>Ladakh is a place rich in history due to its abundance of stupas, monasteries and prayer flags slowly scattered throughout its landscape. The predominant religion in the region is Tibetan Buddhism which beautifully marries with our history and culture, with the Shanti Stupa, Leh Palace and Hemis Monastery being just a few examples of what we have to offer. Agriculture, livestock rearing and traditional crafts define Ladakh culture beautifully, and our festivals such as the Hemis Festival are a perfect depiction of that, featuring vibrant dances, music and florid processions that show off our rich heritage.</p>

                    <h2 class="second-heading">Adventure and Exploration</h2>
                    Ladakh is a utopia for adventurers looking for an adrenaline rush. The frozen river winter trek, the Chadar trek, the Markha Valley Trek and the off road jeep tours make the region a hub for adventure. The Khardung La Pass is the perfect place to visit if you are seeking new thrills; it is one of the highest roads worldwide and due to this, is quite famous among people. 

                    <p>Ladakh is unlike any other region; it offers breathtaking sceneries which makes it the ideal spot for photographers and is a place one must visit at least once. The stunning mountains and colorful monasteries are just a few of many things that can be captured while motorcycling on the Manali-Leh Highway and the Leh-Zanskar road. </p>

                    <p>When we talk about beauty, the untouched, unexploited Pangong Lake and Tso Moriri Lake not only boast of breathtaking views, but also create the most vigorous contrast of blues. In addition to that camels and sand dunes are a must see in Nubra Valley, as they are rich in culture and history solely based off the area they are in. </p>

                    <p>Aside from the landscapes, the unique wildlife such as Tibetan antelopes, wild yaks and the majestic snow leopard are a sight to behold as they inhabit this region.</p>

                    <p>The migratory birds add to the already existing ecosystem and contributes a great deal to the region that is Ladakh and summer specifically adds to the influx of migratory birds and the presence of such diversity makes it a great destination for bird watchers.</p>



                    <h2 class="second-heading">Travel Tips</h2>
                    <p>To access Ladakh, one can opt for road travel through Manali or Srinagar which has good connectivity with the rest of India. Leh is the location of the nearest airport which has frequent flights from Delhi and other major cities. This exposure is recommended because of the warnings associated with high altitudes as travelers are advised against altitude sickness with proper measures. </p>

                    <p>Best months to visit Ladakh are May and September. The region has pleasant weather with clear skies. On the other hand, harsh cold and snowfall prevail during winter months however, the frozen Chadar Trek is best experienced during this time. </p>

                    <h2 class="second-heading">Conclusion</h2>
                    <p>All visitors have been left with awe after discovering Ladakhdd's natural beauty, history, and environment and it is the most perfect blend of intrigue. If you are searching for a corner of the world that is truly one of a kind, be it naturedd's serenity, thrill, or spiritual enrichment - ladakh will certainly feel like magic to you due to how unique every moment feels. Come and experience the sheer thrill of the Ladakh region along with its many splendid views.</p>


                    
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
  title: "About Ladakh",
  meta: [
    {
      name: "description",
      content: "About Ladakh",
    },
  ],
};
