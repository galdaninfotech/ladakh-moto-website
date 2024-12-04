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
                        Ladakh is a paradise for motor biking enthusiasts, and our tours offer the perfect blend of adventure and serenity. From the majestic landscapes of the Nubra Valley to the pristine beauty of Pangong Lake, we take you on an unforgettable journey through Ladakh's most iconic spots. Our expert guides ensure that your ride is safe, thrilling, and full of memories that will last a lifetime.
                    </p>

                    <ul>
                        <li><strong>Tailored Itineraries</strong>: Whether you prefer a short 5-day trip or a long 14-day adventure, we have a range of customized itineraries to suit your schedule and preferences.</li>
                        <li><strong>Off-Road Adventures</strong>: Ride through challenging terrains, high mountain passes, and remote villages for the ultimate off-road motorbiking experience.</li>
                        <li><strong>Experienced Guides</strong>: Our team of experienced local guides are passionate about the region and will show you Ladakh from a unique perspective, ensuring you see the hidden gems and untold stories of the land.</li>
                        <li></li>
                    </ul>
                    
                    <h2 class="second-heading">Tour Packages</h2>
                    <p>For those who prefer a fully planned and hassle-free experience, we offer a variety of all-inclusive tour packages. Each package is designed to highlight the best of Ladakh's natural beauty, cultural heritage, and adventure. Our tour packages include:</p>

                    <ul>
                        <li><strong>Group Tours</strong>: Join a group of like-minded adventure seekers for a shared journey through Ladakh.</li>
                        <li><strong>Private Tours</strong>: For those who prefer a more personalized experience, we offer private tours with flexible itineraries.</li>
                        <li><strong>Cultural & Scenic Tours</strong>: Immerse yourself in the unique culture, monasteries, and landscapes of Ladakh, with stops at places like Leh, Pangong, Nubra, and Tsomoriri.</li>
                        <li><strong>Luxury Options</strong>: We also offer premium packages, with stays in high-end hotels, gourmet meals, and luxury transport for those who prefer an upscale experience.</li>
                    </ul>

                    <h2 class="second-heading">Bike Rentals</h2>
                    <p>For those who want to explore Ladakh on their own, we offer a wide range of high-performance bikes for rent. Whether you prefer a Royal Enfield or a Himalayan, our fleet is carefully maintained to ensure a smooth and safe ride.</p>
                    <ul>
                        <li><strong>Fleet of Bikes</strong>: Choose from a variety of well-maintained bikes including Royal Enfields, Himalayans, and more. All bikes are equipped for long-distance touring with necessary gear.</li>
                        <li><strong>Flexible Rental Packages</strong>: We offer flexible rental options ranging from daily rentals to week-long adventures.</li>
                        <li><strong>Safety First</strong>: Helmets, riding jackets, and other safety gear are included to ensure you are well-protected throughout your journey.</li>
                    </ul>

                    <h2 class="second-heading">Why Choose Us?</h2>
                    <ul>
                        <li><strong>Local Expertise</strong>: As a locally based tour operator, we have deep knowledge of Ladakh's culture, roads, and weather conditions. Our insights ensure your safety and a richer travel experience.</li>
                        <li><strong>Personalized Service</strong>: We believe in giving each traveler a unique experience. Whether you're here for a weekend getaway or a month-long exploration, we personalize every trip to match your preferences.</li>
                        <li><strong>Safety & Comfort</strong>: We prioritize your safety and comfort throughout your journey, with well-maintained bikes, qualified support staff, and backup services in case of emergencies.</li>
                        <li><strong>Environmental Responsibility</strong>: We are committed to preserving the pristine beauty of Ladakh. We promote sustainable travel practices and encourage eco-friendly tourism.</li>
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
