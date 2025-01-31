import { component$, useStylesScoped$ } from '@builder.io/qwik';
import styles from './slider-itinerary.css?inline';
import { useDocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
    useStylesScoped$(styles);
    const head = useDocumentHead();
    
    const trimTitle = (str: string) => {

        // Define the special characters you want to check for
        const specialChars = "!@#$%^&*()-+?_=,<>/";

        // Find the index of the first special character
        let index = str.length; // Default to the end of the string
        for (let i = 0; i < str.length; i++) {
            if (specialChars.includes(str[i])) {
            index = i;
            break;
            }
        }

        // Extract the substring up to the special character
        return str.substring(0, index);
    }

    return (
        <div class="bradcumb-area adventure-2 overlay-bg-4">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col">
                        <div class="bradcumb text-center">
                            <span>{trimTitle(head.title)}</span>
                            <ul>
                                <li><a href="/">Home</a></li>
                                <li>{trimTitle(head.title)}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
});