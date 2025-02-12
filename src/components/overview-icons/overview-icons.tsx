import { component$, useStylesScoped$ } from '@builder.io/qwik';
import styles from './overview-icons.css?inline';

interface ItemProps {
    highestAltitude?: string;
    distance?: string;
    duration?: string;
    lodging?: string;
    meal?: string;
}

export default component$<ItemProps>((props) => {
    useStylesScoped$(styles);

    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th><div id="duration"></div></th>
                        <th><div id="highest-point"></div></th>
                        <th><div id="distance"></div></th>
                        <th><div id="lodging"></div></th>
                        <th><div id="meal"></div></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><span>{props.duration}</span></td>
                        <td><span>{props.highestAltitude}</span></td>
                        <td><span>{props.distance}</span></td>
                        <td><span>{props.lodging}</span></td>
                        <td><span>{props.meal}</span></td>
                    </tr>
                </tbody>
            </table>
            
            
        </>
    );
});