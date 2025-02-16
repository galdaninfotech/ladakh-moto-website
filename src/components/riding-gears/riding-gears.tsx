import { component$, useStylesScoped$ } from '@builder.io/qwik';
import styles from './riding-gears.css?inline';
import ImgRidingGears from '../../media/bike-tours/gears.webp?jsx';

export default component$(() => {
    useStylesScoped$(styles);

    return (
        <div id="riding-gears" class="mt-5">
            <div class="sub-headings">
                <h2>Riding Gears</h2>
            </div>
            <ImgRidingGears alt="Riding Gears" />
        </div>
    );
});