import { component$, useStylesScoped$ } from '@builder.io/qwik';
import styles from './essentials.css?inline';

export default component$(() => {
    useStylesScoped$(styles);

    return (
        <div id="essentials" class="mt-5">
            <div class="sub-headings">
                <h2>Essentials</h2>
            </div>
            <div class="essentials-accordian">
                <div class="accordion" id="essentialAccordion">
                    <div class="accordion-item">
                        <h3 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#essentialCollapse1" aria-expanded="false" aria-controls="essentialCollapse1">
                            Rider Essentials
                            </button>
                        </h3>
                        <div id="essentialCollapse1" class="accordion-collapse collapse" data-bs-parent="#essentialAccordion">
                            <div class="accordion-body">
                                <ul>
                                    <li>Personal Medicines, Sunscreen lotion, Lip balm, Glucose</li>
                                    <li>Couple of water bottles</li>
                                    <li>Chocolates, biscuits and nuts:</li>
                                    <li>Other essentials: Paper soap, toothbrush, toothpaste, comb and toilet paper.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h3 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#essentialCollapse2" aria-expanded="false" aria-controls="essentialCollapse2">
                            Riding Gear Essentials
                            </button>
                        </h3>
                        <div id="essentialCollapse2" class="accordion-collapse collapse" data-bs-parent="#essentialAccordion">
                            <div class="accordion-body">
                                <ul>
                                    <li>Full Face Helmet with Clear Visor</li>
                                    <li>UV sunglasses</li>
                                    <li>Gloves</li>
                                    <li>Riding Jacket</li>
                                    <li>Riding pants</li>
                                    <li>Shoes</li>
                                    <li>Raincoat</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h3 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#essentialCollapse3" aria-expanded="false" aria-controls="essentialCollapse3">
                            Clothing Essentials
                            </button>
                        </h3>
                        <div id="essentialCollapse3" class="accordion-collapse collapse" data-bs-parent="#essentialAccordion">
                            <div class="accordion-body">
                                <ul>
                                    <li>Jeans/pants</li>
                                    <li>Shirts/t-shirts/sweatshirt</li>
                                    <li>Sweater, Socks</li>
                                    <li>Cap</li>
                                    <li>Warm inner</li>
                                    <li>Innerwear</li>
                                    <li>Handkerchief/towels</li>
                                    <li>Slippers</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h3 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#essentialCollapse4" aria-expanded="false" aria-controls="essentialCollapse4">
                            Electrical Essentials
                            </button>
                        </h3>
                        <div id="essentialCollapse4" class="accordion-collapse collapse" data-bs-parent="#essentialAccordion">
                            <div class="accordion-body">
                                <ul>
                                    <li>Chargers for all the gadgets, cameras and mobile</li>
                                    <li>Spare camera batteries</li>
                                    <li>Car charger or battery bank</li>
                                    <li>3 socket power strip</li>
                                    <li>Enough memory cards to last you the entire trip</li>
                                    <li>Torch</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h3 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#essentialCollapse5" aria-expanded="false" aria-controls="essentialCollapse5">
                            Documents And IDs
                            </button>
                        </h3>
                        <div id="essentialCollapse5" class="accordion-collapse collapse" data-bs-parent="#essentialAccordion">
                            <div class="accordion-body">
                                <ul>
                                    <li>Driving License</li>
                                    <li>Registration Certificate (We will provide you)</li>
                                    <li>Medical Insurance Card</li>
                                    <li>Secondary ID</li>
                                    <li>Map and itinerary (We will provide you)</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h3 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#essentialCollapse6" aria-expanded="false" aria-controls="essentialCollapse6">
                            How to carry all these
                            </button>
                        </h3>
                        <div id="essentialCollapse6" class="accordion-collapse collapse" data-bs-parent="#essentialAccordion">
                            <div class="accordion-body">
                                <ul>
                                    <li>Saddle bag</li>
                                    <li>Tank bag</li>
                                    <li>Day bag</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h3 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#essentialCollapse7" aria-expanded="false" aria-controls="essentialCollapse7">
                            Mobile Phone Connectivity
                            </button>
                        </h3>
                        <div id="essentialCollapse7" class="accordion-collapse collapse" data-bs-parent="#essentialAccordion">
                            <div class="accordion-body">
                                <p>Only post-paid mobile phone connections from other states work in Ladakh and even from these, only BSNL has a presence beyond Leh. So unless you wish to be dependent upon STD booths, carry a BSNL/MTNL post-paid connection</p>
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h3 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#essentialCollapse8" aria-expanded="false" aria-controls="essentialCollapse8">
                            How to pack?
                            </button>
                        </h3>
                        <div id="essentialCollapse8" class="accordion-collapse collapse" data-bs-parent="#essentialAccordion">
                            <div class="accordion-body">
                                <p>Pack everything in plastic bags, before putting them in your saddlebag. This way clothes do not get dirty and even if water gets inside the bag, it won’t likely ruin your clothes and other stuff. Also, make sure to pack the essential tools, spares, and food towards the top to easily accessible while on the road.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
});