import { component$, useStylesScoped$ } from '@builder.io/qwik';
import styles from './faqs.css?inline';

export default component$(() => {
    useStylesScoped$(styles);

    return (
        <div id="faqs" class="mt-5">
            <div class="sub-headings">
                <h2>FAQs</h2>
            </div>
            <div class="faqs-accordian">
                <div class="accordion" id="faqsAccordion">
                    <div class="accordion-item">
                        <h3 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqsCollapse1" aria-expanded="false" aria-controls="faqsCollapse1">
                            Q. What is the best time to visit leh ladakh?
                            </button>
                        </h3>
                        <div id="faqsCollapse1" class="accordion-collapse collapse" data-bs-parent="#faqsAccordion">
                            <div class="accordion-body">
                                <p>A. We provide Royal Enfield Himalayan Bikes for the Leh Ladakh Road Trip.</p>
                            </div>
                        </div>
                    </div>

                    <div class="accordion-item">
                        <h3 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqsCollapse2" aria-expanded="false" aria-controls="faqsCollapse2">
                            Q. Which bike you provide for the Leh Ladakh Road Trip?
                            </button>
                        </h3>
                        <div id="faqsCollapse2" class="accordion-collapse collapse" data-bs-parent="#faqsAccordion">
                            <div class="accordion-body">
                                <p>A. We provide Royal Enfield Himalayan Bikes for the Leh Ladakh Road Trip.</p>
                            </div>
                        </div>
                    </div>

                    <div class="accordion-item">
                        <h3 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqsCollapse3" aria-expanded="false" aria-controls="faqsCollapse3">
                            Q. Can we have any option in bikes in Leh Ladakh Road Trip?
                            </button>
                        </h3>
                        <div id="faqsCollapse3" class="accordion-collapse collapse" data-bs-parent="#faqsAccordion">
                            <div class="accordion-body">
                                <p>A. Yes, you have other options of bikes like Bajaj Avenger, Royal Enfield 350 & Royal Enfield 500 in Leh Ladakh Road Trip.</p>
                            </div>
                        </div>
                    </div>

                    <div class="accordion-item">
                        <h3 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqsCollapse4" aria-expanded="false" aria-controls="faqsCollapse4">
                            Q. Do you have any right shift gear bikes for Leh road tour?
                            </button>
                        </h3>
                        <div id="faqsCollapse4" class="accordion-collapse collapse" data-bs-parent="#faqsAccordion">
                            <div class="accordion-body">
                                <p>A. No, We don’t have bikes with right-shift gears for Leh Ladakh Road Trip.</p>
                            </div>
                        </div>
                    </div>

                    <div class="accordion-item">
                        <h3 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqsCollapse5" aria-expanded="false" aria-controls="faqsCollapse5">
                            Q. What things do you provide with bike in the Leh Ladakh Road Trip?
                            </button>
                        </h3>
                        <div id="faqsCollapse5" class="accordion-collapse collapse" data-bs-parent="#faqsAccordion">
                            <div class="accordion-body">
                                <p>A. In the Leh Ladakh Road Trip, we provide all the required accessories like Riding Jacket, Helmets, Riding Gloves, Riding Guards, Cans for fuel, etc.</p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="accordion-item">
                        <h3 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqsCollapse6" aria-expanded="false" aria-controls="faqsCollapse6">
                            Q. What about the condition of bikes?
                            </button>
                        </h3>
                        <div id="faqsCollapse6" class="accordion-collapse collapse" data-bs-parent="#faqsAccordion">
                            <div class="accordion-body">
                                <p>A. In the Leh Ladakh Road Trip, we provide you best and perfect conditions of bike, with adding new bikes to our fleet every year.</p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="accordion-item">
                        <h3 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqsCollapse7" aria-expanded="false" aria-controls="faqsCollapse7">
                            Q. Is the fuel included in Leh Ladakh Road Tour cost?
                            </button>
                        </h3>
                        <div id="faqsCollapse7" class="accordion-collapse collapse" data-bs-parent="#faqsAccordion">
                            <div class="accordion-body">
                                <p>A. Yes, the fuel is also included in the Leh Ladakh Road Trip cost.</p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="accordion-item">
                        <h3 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqsCollapse8" aria-expanded="false" aria-controls="faqsCollapse8">
                            Q. How is the condition of road during the time of Leh Ladakh Road Trip?
                            </button>
                        </h3>
                        <div id="faqsCollapse8" class="accordion-collapse collapse" data-bs-parent="#faqsAccordion">
                            <div class="accordion-body">
                                <p>A. During the time of Leh ladakh road trip, 60% Roads are in good condition and in other 40% you can experience off road driving.</p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="accordion-item">
                        <h3 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqsCollapse9" aria-expanded="false" aria-controls="faqsCollapse9">
                            Q. Do I need to carry full set of tools for bike repairing?
                            </button>
                        </h3>
                        <div id="faqsCollapse9" class="accordion-collapse collapse" data-bs-parent="#faqsAccordion">
                            <div class="accordion-body">
                                <p>A. No, You do not need to carry any kit regarding bike repair. We will provide you mechanic and every tool you need during the road tour to ladakh.</p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="accordion-item">
                        <h3 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqsCollapse10" aria-expanded="false" aria-controls="faqsCollapse10">
                            Q. Which transport you provide for backup vehicle during road tour to leh ladakh?
                            </button>
                        </h3>
                        <div id="faqsCollapse10" class="accordion-collapse collapse" data-bs-parent="#faqsAccordion">
                            <div class="accordion-body">
                                <p>A. During Leh Ladakh Road tour, we mostly provide you Tempo Traveller / Tata Sumo / Mahindra Bolero for backup vehicle.</p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="accordion-item">
                        <h3 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqsCollapse11" aria-expanded="false" aria-controls="faqsCollapse11">
                            Q. Can you provide a Leh Ladakh Road Trip map during the tour?
                            </button>
                        </h3>
                        <div id="faqsCollapse11" class="accordion-collapse collapse" data-bs-parent="#faqsAccordion">
                            <div class="accordion-body">
                                <p>A. Yes,Our Team will provide you a Ladakh Road Trip map during the tour.</p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="accordion-item">
                        <h3 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqsCollapse12" aria-expanded="false" aria-controls="faqsCollapse12">
                            Q. How many members are in one group during leh road trip?
                            </button>
                        </h3>
                        <div id="faqsCollapse12" class="accordion-collapse collapse" data-bs-parent="#faqsAccordion">
                            <div class="accordion-body">
                                <p>A. There are 30-40 members are in one group during Leh road trip.</p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="accordion-item">
                        <h3 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqsCollapse13" aria-expanded="false" aria-controls="faqsCollapse13">
                            Q. What riding gear do I need for Leh Ladakh Road Trip?
                            </button>
                        </h3>
                        <div id="faqsCollapse13" class="accordion-collapse collapse" data-bs-parent="#faqsAccordion">
                            <div class="accordion-body">
                                <p>A. You need different types of riding gear like riding jacket, pants, shoes, gloves and full face helmet. Always keep in mind that all of your riding gear should be good to go against rain and hail.
                                </p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="accordion-item">
                        <h3 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqsCollapse14" aria-expanded="false" aria-controls="faqsCollapse14">
                            Q. Do I need to carry thermal wear?
                            </button>
                        </h3>
                        <div id="faqsCollapse14" class="accordion-collapse collapse" data-bs-parent="#faqsAccordion">
                            <div class="accordion-body">
                                <p>A. Yes, You need to carry thermal wear because the weather of Leh Ladakh Road Tour is very cold.
                                </p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="accordion-item">
                        <h3 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqsCollapse15" aria-expanded="false" aria-controls="faqsCollapse15">
                            Q. What kind of food you provide during the Leh Ladakh Road Trip?
                            </button>
                        </h3>
                        <div id="faqsCollapse15" class="accordion-collapse collapse" data-bs-parent="#faqsAccordion">
                            <div class="accordion-body">
                                <p>A. In Ladakh road tour, We provide 2 times of food in a day i.e. Breakfast & Dinner.
                                </p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="accordion-item">
                        <h3 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqsCollapse16" aria-expanded="false" aria-controls="faqsCollapse16">
                            Q. Do I need to carry any documents with me during this road tour?
                            </button>
                        </h3>
                        <div id="faqsCollapse16" class="accordion-collapse collapse" data-bs-parent="#faqsAccordion">
                            <div class="accordion-body">
                                <p>A. Yes, you need to carry some documents like an original Driving License card and a passport size photograph during this road tour.
                                </p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="accordion-item">
                        <h3 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqsCollapse17" aria-expanded="false" aria-controls="faqsCollapse17">
                            Q. Is there any lack of oxygen during trip?
                            </button>
                        </h3>
                        <div id="faqsCollapse17" class="accordion-collapse collapse" data-bs-parent="#faqsAccordion">
                            <div class="accordion-body">
                                <ul>
                                    <li>A. Anybody travelling 10,000 feet above sea level will find difficulty in breathing or is likely to fall prey to altitude sickness. It happens due to low level of atmospheric oxygen. The biggest cause of AMS (Acute Mountain Sickness) is dehydration. People on the trip forget to drink enough water, they just keep on riding.</li>
                                    <li>
                                        <strong>To beat AMS, take the following steps:</strong>
                                        <ol>
                                            <li>Drink lots and lots of water mixed with glucose.</li>
                                            <li>Take everything slow. Even little labor at high altitudes will leave you spent.</li>
                                            <li>Take one Diamox at Manali on the morning when you leave for Leh. Diamox takes one hour to start working.</li>
                                            <li>Don’t push too hard, take the trip slow. Ascent slowly, decent slowly.</li>
                                            <li>If you feel the symptoms creeping up, stop and take some rest. Don’t keep pushing.</li>
                                        </ol>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                    <div class="accordion-item">
                        <h3 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqsCollapse18" aria-expanded="false" aria-controls="faqsCollapse18">
                            Q. Which language speaks in ladakh?
                            </button>
                        </h3>
                        <div id="faqsCollapse18" class="accordion-collapse collapse" data-bs-parent="#faqsAccordion">
                            <div class="accordion-body">
                                <p>A. In Ladakh, Most of people speaks local Ladakhi language,some people(City Resident) also understand hindi and English language also.</p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="accordion-item">
                        <h3 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqsCollapse19" aria-expanded="false" aria-controls="faqsCollapse19">
                            Q. What about money exchange, can we use Debit/credit cards?
                            </button>
                        </h3>
                        <div id="faqsCollapse19" class="accordion-collapse collapse" data-bs-parent="#faqsAccordion">
                            <div class="accordion-body">
                                <p>A. You can exchange money only in Manali & Leh town, you can also use debit/credit card in some of the reputed shops and hotels but at additional 2% service tax.</p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="accordion-item">
                        <h3 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqsCollapse20" aria-expanded="false" aria-controls="faqsCollapse20">
                            Q. Which network is accessible for the location of leh road tour?
                            </button>
                        </h3>
                        <div id="faqsCollapse20" class="accordion-collapse collapse" data-bs-parent="#faqsAccordion">
                            <div class="accordion-body">
                                <p>A. During whole Leh road trip, you can get BSNL network at some places.You can get every mobile network in manali but in Ladakh region you can only access postpaid BSNL, Idea, Airtel and Vodafone.</p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="accordion-item">
                        <h3 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqsCollapse21" aria-expanded="false" aria-controls="faqsCollapse21">
                            Q. What is the maximum altitude point of this Ladakh Road Trip?
                            </button>
                        </h3>
                        <div id="faqsCollapse21" class="accordion-collapse collapse" data-bs-parent="#faqsAccordion">
                            <div class="accordion-body">
                                <p>A. Khardungla Pass is the highest point of Ladakh Road Trip. It is situated at the height of 5359m / 17582 ft.</p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="accordion-item">
                        <h3 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqsCollapse22" aria-expanded="false" aria-controls="faqsCollapse22">
                            Q. Is photography allowed on this Leh Road Trip?
                            </button>
                        </h3>
                        <div id="faqsCollapse22" class="accordion-collapse collapse" data-bs-parent="#faqsAccordion">
                            <div class="accordion-body">
                                <p>A. Yes, this Road Tour to Leh is full of surprises for shutterbugs. However, keep checking on the warning boards. if it is not permitted at some places then avoid it.</p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="accordion-item">
                        <h3 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqsCollapse23" aria-expanded="false" aria-controls="faqsCollapse23">
                            Q. Is Leh Ladakh Road Tour safe for solo female travellers?
                            </button>
                        </h3>
                        <div id="faqsCollapse23" class="accordion-collapse collapse" data-bs-parent="#faqsAccordion">
                            <div class="accordion-body">
                                <p>A. Yes, the Leh Ladakh Road Tour is very safe for female solo travellers. Among all the Ladakh Road Tour organizers, Team Aahvan Adventures has a very proactive and responsible approach for all the trekkers, especially for female travellers.</p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="accordion-item">
                        <h3 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqsCollapse24" aria-expanded="false" aria-controls="faqsCollapse24">
                            Q. Can I do Ladakh Road Trip Solo?
                            </button>
                        </h3>
                        <div id="faqsCollapse24" class="accordion-collapse collapse" data-bs-parent="#faqsAccordion">
                            <div class="accordion-body">
                                <p>A. Yes,you can join us as Solo Traveller. There are many solo male and female travellers join us for the Ladakh Road Trip.</p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="accordion-item">
                        <h3 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqsCollapse25" aria-expanded="false" aria-controls="faqsCollapse25">
                            Q. What is the Age Limit for Leh Ladakh Road Trip?
                            </button>
                        </h3>
                        <div id="faqsCollapse25" class="accordion-collapse collapse" data-bs-parent="#faqsAccordion">
                            <div class="accordion-body">
                                <p>A. As a pillion rider, the minimum age required for this leh ladakh road trip is 10+ years,If you are going to drive the bike then you must have a valid driving license as per government rules.</p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="accordion-item">
                        <h3 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqsCollapse26" aria-expanded="false" aria-controls="faqsCollapse26">
                            Q. Can we expect rains/snowfall during the Leh Ladakh Road Trip?
                            </button>
                        </h3>
                        <div id="faqsCollapse26" class="accordion-collapse collapse" data-bs-parent="#faqsAccordion">
                            <div class="accordion-body">
                                <p>Yes, Weather are suddenally changed sometime, we suggest you always carry a light raincoat or waterproof windcheater/poncho.</p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="accordion-item">
                        <h3 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqsCollapse27" aria-expanded="false" aria-controls="faqsCollapse27">
                            Q. Do I need to permission for this Ladakh Road Trip?
                            </button>
                        </h3>
                        <div id="faqsCollapse27" class="accordion-collapse collapse" data-bs-parent="#faqsAccordion">
                            <div class="accordion-body">
                                <p>A. No, you don’t  need to take any permission for this ladakh road trip. In our trip cost, we already get permission from the Authorised government department for Rohtang Pass and Ladakh.</p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="accordion-item">
                        <h3 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqsCollapse28" aria-expanded="false" aria-controls="faqsCollapse28">
                            Q. Can we do this Road Tour to leh along with family?
                            </button>
                        </h3>
                        <div id="faqsCollapse28" class="accordion-collapse collapse" data-bs-parent="#faqsAccordion">
                            <div class="accordion-body">
                                <p>A. Yes, You can go to Ladakh Road Trip along with your family.The trip is moderate however physical fitness is required.</p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="accordion-item">
                        <h3 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqsCollapse29" aria-expanded="false" aria-controls="faqsCollapse29">
                            Q. What is the distance between leh ladakh and manali?
                            </button>
                        </h3>
                        <div id="faqsCollapse29" class="accordion-collapse collapse" data-bs-parent="#faqsAccordion">
                            <div class="accordion-body">
                                <p>A. Distance between leh ladakh and manali is around 426.9 km.</p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="accordion-item">
                        <h3 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqsCollapse30" aria-expanded="false" aria-controls="faqsCollapse30">
                            Q. What is the difficulty level of Road trip to leh ladakh on bike from manali?
                            </button>
                        </h3>
                        <div id="faqsCollapse30" class="accordion-collapse collapse" data-bs-parent="#faqsAccordion">
                            <div class="accordion-body">
                                <p>A. Difficulty level of Road trip to leh ladakh on bike from manali is moderate to high.</p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="accordion-item">
                        <h3 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqsCollapse31" aria-expanded="false" aria-controls="faqsCollapse31">
                            Q. What is the Distance between leh ladakh and ahmedabad?
                            </button>
                        </h3>
                        <div id="faqsCollapse31" class="accordion-collapse collapse" data-bs-parent="#faqsAccordion">
                            <div class="accordion-body">
                                <p>A. Distance between leh ladakh and ahmedabad is 1896.7 km.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
});