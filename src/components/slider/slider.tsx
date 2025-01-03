import { component$, useStylesScoped$ } from '@builder.io/qwik';
import styles from './slider.css?inline';
import { useDocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
    useStylesScoped$(styles);
    const head = useDocumentHead();

    return (
        <div class="bradcumb-area adventure-2 overlay-bg-4">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col">
                        <div class="contact-info d-md-none">
                            <a href="tel:+91-9622958013"><i class="fal fa-phone-alt"></i>+91-9622958013</a>
                            <a href="tel:+91-9906989962"><i class="fal fa-phone-alt"></i>+91-9906989962</a>
                            <a href="mailto:info@ladakhmoto.com"><i class="fal fa-envelope"></i>info@ladakhmoto.com</a>
                        </div>
                        <div class="bradcumb text-center">
                            <h1>Ladakh Moto</h1>
                            <ul>
                                <li><a href="#">Home</a></li>
                                <li>{head.title}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
});