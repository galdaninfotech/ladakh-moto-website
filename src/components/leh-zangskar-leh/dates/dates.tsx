import { component$, useStylesScoped$ } from '@builder.io/qwik';
import styles from './dates.css?inline';

export default component$(() => {
    useStylesScoped$(styles);

    return (
        <div id="dates">
            <div class="sub-headings d-flex justify-content-between align-items-center">
                <h2>Tour Dates</h2>
                <button class="btnOpenForm">Enquiry</button>
            </div>
            <p>No tours dates available for the current year!</p>
        </div>
    );
});