import { component$, useStylesScoped$ } from '@builder.io/qwik';
import styles from './slider-itinerary.css?inline';
import { useDocumentHead } from "@builder.io/qwik-city";
import { useLocation  } from "@builder.io/qwik-city";

import GeoAlt from "~/components/svgs/geo-alt/geo-alt";

const trimTitle = (str: string) => {

    // Define the special characters you want to check for
    const specialChars = "!@#$%^&*()-+?_=,<>/";

    // Find the index of the first special character
    let index = str.length; // Default to the end of the string
    for (let i = 0; i < str.length; i++) {
        if (specialChars.includes(str[i]) ) {
            index = i;
            break;
        }
    }

    // Extract the substring up to the special character

    return str.substring(0, index);
}

export default component$(() => {
    useStylesScoped$(styles);
    const head = useDocumentHead();
    const loc = useLocation();

    const pathSegments = loc.url.pathname.split('/').filter(Boolean);
    // const urlSection = pathSegments.length > 1 ? pathSegments[0] : null;
    const urlSection = pathSegments.length > 1 
        ? pathSegments[0]
            .split('-')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ')
        : null;
    
    

    const title = trimTitle(head.title).trimEnd().replace(/ /g,"-").toLowerCase();
    let imageUrl: string;
    if(urlSection === 'Bike Tours') {
        imageUrl = `../../img/bike-tours/${title}/${title}-slide.webp`;
    } else if(urlSection === 'Bike Tour Packages') {
        imageUrl = `../../img/bike-tour-packages/${title}/${title}-slide.webp`;
    } else if(urlSection === 'About') {
        imageUrl = `../../img/about/${title}-slide.webp`;
    } else {
        imageUrl = `../../img/${title}-slide.webp`;
    }

    return (
        <div class="bradcumb-area adventure-2 overlay-bg-4" data-title={`${title}`} style={{ backgroundImage: `url(${imageUrl})`, backgroundSize: 'cover' }}>
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col">
                        <div class="bradcumb text-center">
                            <span>{trimTitle(head.title)}</span>
                            <ul>
                                <li><GeoAlt /></li>
                                <li><a href="/">Home</a></li>
                                {urlSection && <li><a href="/">{urlSection}</a></li>}
                                <li>{trimTitle(head.title)}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
});
