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
                {/* {
                    props.tourPrice ? 
                    <div class="fab-book-now btnOpenForm" onClick$={(event) => event.stopPropagation()}>
                        <span>BOOK NOW</span>
                    </div>
                    : 
                        null
                } */}
                
                <div id="{props.tourPrice}" class="fab-book-now btnOpenForm" onClick$={(event) => event.stopPropagation()}>
                    <span>BOOK NOW</span>
                    <span class="d-none">{props.tourPrice}</span>
                </div>

                <label class="fabb" for="fabCheckbox">
                    {/* <i class="bi bi-telephone-outbound"></i> */}
                    ENQUIRY
                </label>
            </div>

            <div class="fab-wheel">
                <a class="fab-action fab-action-1" href="https://api.whatsapp.com/send?phone=919622958013" target="_blank" aria-label="Leave a message on WhatsApp" title="Leave a message on WhatsApp">
                    <i class="bi bi-whatsapp" aria-hidden="true"></i>
                    <span class="sr-only">WhatsApp</span>
                </a>

                <a class="fab-action fab-action-2" href="tel:+91-9622958013" aria-label="Call For Instant Booking" title="Call For Instant Booking">
                    <i class="bi bi-telephone-outbound" aria-hidden="true"></i>
                    <span class="sr-only">Phone</span>
                </a>

                <a class="fab-action fab-action-4" href="https://www.instagram.com/ladakhmototour/" target="_blank" aria-label="Follow On Instagram" title="Follow On Instagram">
                    <i class="bi bi-instagram" aria-hidden="true"></i>
                    <span class="sr-only">Instagram</span>
                </a>
            </div>
        </div>
    );
});