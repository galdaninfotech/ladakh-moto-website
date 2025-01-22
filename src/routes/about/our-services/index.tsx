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
                        <h1 class="main-heading">Our Services</h1>
                    </div>
                    <span><strong><i>Welcome to Ladakhmoto - The Ultimate Ladakh Motorbiking Experience</i></strong></span>
                    <p>
                        At LadakhMoto, we believe in offering more than just a tour; we deliver an adventure that stays with you forever. Based in the heart of Ladakh, we specialize in motorbiking tours that allow you to explore this breathtaking region in the most exhilarating way possible. Whether you're a seasoned rider or a beginner, our tours are tailored to provide an unforgettable experience. 
                    </p>

                    <h2 class="second-heading">Motorbiking Tours in Ladakh</h2>
                    <p>
                        Ladakh has everything that a motorbike lover could ever ask for, and our tours have the right mix of adventure, as well as some tranquillity. From the scenic vistas of Nubra Valley to the untainted magnificence of Pangong Lake, we guide you to the core of Ladakh's most remarkable sites. Our trained personnel facilitate your rides assuring personal safety while providing exhilarating moments and reminiscences for years to come.  
                    </p>

                    <ul>
                        <li><strong>Tailored Itineraries</strong>: We offer out customized itineraries to fit your needs; be it a few days or in case a 2 week trip suits you more!</li>
                        <li><strong>Off-Road Adventures</strong>: Weather endurance is a must as you ride across rugged terrains, cross high mountains, and thunder through villages for a phenomenal off-road motorbiking experience.</li>
                        <li><strong>Experienced Guides</strong>: These sights are as off the beaten path as one can imagine – leverage our experienced local guides who are passionate about the region to truly uncover the hidden stories.</li>
                        <li></li>
                    </ul>
                    
                    <h2 class="second-heading">Tour Packages</h2>
                    <p>If you are someone who has a preference on packaged tour then we have lots of all inclusive packages that are on offer. Every package is planned in such a way that it complements the adventure, culture, and nature tourism of Ladakh. Our offered tour packages include the following:</p>

                    <ul>
                        <li><strong>Group Tours</strong>:You are able to meet and travel with other visitors with similar interests as you making your stay in Ladakh even better. Travel in groups as you desire.</li>
                        <li><strong>Private Tours</strong>: This is specially created for the ones interested in tour all by themselves and have the total freedom when it comes to deciding their plan.</li>
                        <li><strong>Cultural & Scenic Tours</strong>: Places such as Leh, Pangong, Nubra, Tsomoriri and Zangskar are one of the stops on the tour that give you the chance to experience the culture, monasteries and beautiful landscapes of Ladakh. </li>
                        <li><strong>Luxury Options</strong>: In the case with us relaxation can be accompanied by luxury and comfort because we have premium packages that offer good hotels, high quality food, and expensive cars to those of you who like to enjoy finer things in life.</li>
                    </ul>

                    <h2 class="second-heading">Bike Rentals</h2>
                    <p>If you wish to self-generate the experience of Ladakh, we have a collection of high quality bikes available on rent. All our bikes, whether its a Royal Enfield or a Himalayan, are well maintained for safety and comfort.</p>
                    <ul>
                        <li><strong>Fleet of Bikes</strong>: We boast a collection of bikes with a wide range of themes such as Royal Enfield's Himalayan, Classic 350cc, Standard 500cc, KTM Adventure and much more. All bikes come fitted with the right parameters for extensive touring. </li>
                        <li><strong>Flexible Rental Packages</strong>: Our rates are competitive and offer a wide spectrum of options, starting with daily rent patterns to weekly tours.</li>
                        <li><strong>Safety First</strong>: Helmet, Riding jackets and other safety accessories and gears are included in the rental charge as a precaution to ensure your safety.</li>
                    </ul>

                    <h2 class="second-heading">Why Choose Us?</h2>
                    <ul>
                        <li><strong>Local Expertise</strong>: Being a local tour company in Leh, Ladakh we are well informed about the people and culture, the roads, and of course the weather. This knowledge adds another layer of security and travelling confidence that you are well cared for and will have a wonderful experience.</li>
                        <li><strong>Personalized Service</strong>: Each traveler is a valuable customer. You have an opportunity to tailor make your journey with us, be it only for a weekend, or you are planning to spend a month depending on your specific requirements. All aspects of your trip are adapted to your needs.</li>
                        <li><strong>Safety & Comfort</strong>: It is our duty to always keep you safe and comfortable during your journey, make sure you have good bikes, be it well maintained, have qualifed support personnel and backup collection through all means for possible emergencies or unforeseen circumstances.</li>
                        <li><strong>Environmental Responsibility</strong>: The picturesque place that is Ladakh deserves to be protected. Once again, we support the green tourism industry and hope to undertake green travelling practices.</li>
                    </ul>

                    <h2 class="second-heading">Ready to Ride?</h2>
                    <p>
                        Join us for a journey of a lifetime in one of the world's most awe-inspiring destinations. Explore the high-altitude deserts, traverse winding mountain roads, and experience the rich culture of Ladakh on two wheels. Whether you're renting a bike or booking a tour, your adventure awaits!
                    </p>

                    <p>
                        For inquiries or to book your motorbiking tour, contact us today. Let's hit the road and make memories in Ladakh!
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
  title: "Our Services",
  meta: [
    {
      name: "description",
      content: "Our Services",
    },
  ],
};
