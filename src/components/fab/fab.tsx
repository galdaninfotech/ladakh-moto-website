import { component$, useStylesScoped$ } from '@builder.io/qwik';
import styles from './fab.css?inline';

interface ItemProps {
    tourPrice?: string;
}
export default component$<ItemProps>((props) => {
    useStylesScoped$(styles);

    return (
        <div class="fab-wrapper">
            <input id="fabCheckbox" type="checkbox" class="fab-checkbox" />

            <div class="fab-container position-fixed bottom-0 start-0 end-0 d-flex justify-content-center align-items-center mb-1 px-3">
            {
                props.tourPrice ? 
                <div class="fab-price" onClick$={(event) => event.stopPropagation()}>
                    <span>Starting: {props.tourPrice}</span>
                </div>
                : 
                    null
            }
                
                <label class="fabb" for="fabCheckbox">
                    {/* <i class="bi bi-telephone-outbound"></i> */}
                    ENQUIRY
                </label>
            </div>

            <div class="fab-wheel">
                <a class="fab-action fab-action-1" href="https://api.whatsapp.com/send?phone=9622958013" target="_blank" aria-label="Contact us on WhatsApp">
                    <i class="bi bi-whatsapp" aria-hidden="true"></i>
                    <span class="sr-only">WhatsApp</span>
                </a>

                <a class="fab-action fab-action-2" href="tel:9622958013" aria-label="Call us">
                    <i class="bi bi-telephone-outbound" aria-hidden="true"></i>
                    <span class="sr-only">Phone</span>
                </a>

                <a class="fab-action fab-action-3" href="mailto:ladakhmoto@gmail" aria-label="Email us">
                    <i class="bi bi-envelope" aria-hidden="true"></i>
                    <span class="sr-only">Email</span>
                </a>

                <a class="fab-action fab-action-4" href="https://www.instagram.com/ladakhmoto/" target="_blank" aria-label="Follow us on Instagram">
                    <i class="bi bi-instagram" aria-hidden="true"></i>
                    <span class="sr-only">Instagram</span>
                </a>
            </div>
        </div>
    );
});