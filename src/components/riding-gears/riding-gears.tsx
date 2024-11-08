import { component$, useStylesScoped$ } from '@builder.io/qwik';
import styles from './riding-gears.css?inline';

export default component$(() => {
    useStylesScoped$(styles);

    return (
        <div id="riding-gears" class="mt-5">
            <div class="sub-headings">
                <h2>Riding Gears</h2>
            </div>
            <img src="/img/tours/gears.jpg" alt="Riding Gears" />
        </div>
    );
});