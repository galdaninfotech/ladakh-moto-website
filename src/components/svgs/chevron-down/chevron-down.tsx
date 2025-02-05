import { component$, useStylesScoped$ } from '@builder.io/qwik';
import styles from './chevron-down.css?inline';

export default component$(() => {
    useStylesScoped$(styles);

    return (
        <svg xmlns="http://www.w3.org/2000/svg" style="position: absolute; top: 12px; right: 5px; color: #fff;" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
        </svg>
    );
});