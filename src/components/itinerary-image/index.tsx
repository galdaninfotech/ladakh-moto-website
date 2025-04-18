import { component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from './index.css?inline';

interface Props {
    src?: string;
    alt?: string;
    size?: string;
}

export default component$<Props>((props) => {
    useStylesScoped$(styles);
    return (
        <div class="responsive-image-container">
            {
            props.size === 'mobile' ? 
                <img width="1500" height="800" loading="lazy" src={props.src} alt={props.alt} /> 
            : 
                <img width="1500" height="800" loading="lazy" style="height: 305px;" src={props.src} alt={props.alt} />
            }
        </div>

    );
});