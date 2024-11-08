import { component$, useStylesScoped$ } from '@builder.io/qwik';
import styles from './overview.css?inline';
import ItineraryIcons from '~/components/itinerary-icons/itinerary-icons';
import ItineraryImage from '~/components/itinerary-image';

export default component$(() => {
    useStylesScoped$(styles);

    return (
        <div id="overview">
            <div class="sub-headings d-flex justify-content-between align-items-center">
                <h2>Overview</h2>
                <button class="btnOpenForm">Enquiry</button>
            </div>

            <div class="row d-block d-lg-none">
                <div class="col-12 col-lg-6">
                    <ItineraryIcons highestAltitude="19024 ft" distance="1576 km" duration="9N/10D" lodging="Hotel/Camp" meal="BF/Dinner" />
                </div>

                <div class="col-12 col-lg-6 mt-3 mb-3 d-flex align-items-center justify-content-center">
                    <ItineraryImage src="/img/tours/ladakh-srinagar-with-umling-la/ladakh-srinagar-with-umling-la-overview.jpg" alt="Overview Image Of The Ladakh Srinagar With Umling La Bike Tour" />
                </div>
            </div>

            {/* Desktop Screen */}
            <div class="row d-none d-lg-block">
                <div class="col-12 col-lg-12">
                    <ItineraryIcons highestAltitude="19024 ft" distance="1576 km" duration="9N/10D" lodging="Hotel/Camp" meal="BF/Dinner" />
                </div>

                <div class="col-12 col-lg-12 mt-3 mb-3 d-flex align-items-center justify-content-center">
                    <ItineraryImage size="desktop" src="/img/tours/ladakh-srinagar-with-umling-la/ladakh-srinagar-with-umling-la-overview.jpg" alt="Overview Image Of The Ladakh Srinagar With Umling La Bike Tour" />
                </div>
            </div>
            
            <p>
                This 11-day journey takes you through the most captivating landscapes of Ladakh and Kashmir, offering a perfect mix of thrilling mountain passes, serene lakes, remote villages, and historical towns. Starting in Leh, this tour will take you to Nubra Valley, the stunning Pangong Lake, the remote Hanle, the world’s highest motorable road at Umling La, and finally, to the beautiful landscapes of Kargil and Srinagar.
            </p>


            <h3>Tour Highlights:</h3>
            <ul class="overview-tour-highlights">
                <li>Ride through some of the world’s highest motorable passes, including Khardung La and Umling La.</li>
                <li>Explore the vibrant cultures of Nubra Valley and the remote village of Turtuk.</li>
                <li>Witness the changing colors of Pangong Lake and the pristine beauty of Hanle.</li>
                <li>Cross the famous Zoji La Pass and explore the historic town of Kargil.</li>
                <li>End your journey with a serene experience in the lush valleys of Srinagar.</li>
            </ul>

            <p>
            This tour offers an unforgettable experience, combining extreme adventure with cultural exploration and breathtaking natural beauty.
            </p>
            

        </div>
    );
});