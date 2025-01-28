import { component$, useStylesScoped$ } from '@builder.io/qwik';
import styles from './dates.css?inline';

export default component$(() => {
    useStylesScoped$(styles);

    return (
        <div id="dates">
            <div class="sub-headings">
                <h2>Tour Dates</h2>
            </div>
            <p>No tours dates available for the current year!</p>
        </div>
    );
});