import { component$, useVisibleTask$, useStylesScoped$ } from "@builder.io/qwik";
import styles from './google-reviews.css?inline';

export default component$(() => {
    useStylesScoped$(styles);
    useVisibleTask$(() => {
        // Load Elfsight script
        const script = document.createElement('script');
        script.src = "https://static.elfsight.com/platform/platform.js";
        script.async = true;
        document.head.appendChild(script);
    });

    return (
        <div id="reviews" class="reviews-section mt-5">
            <div class="elfsight-app-136c5355-8476-4324-9c2e-a4c6b9cd287b" data-elfsight-app-lazy></div>
        </div>
    );
});
