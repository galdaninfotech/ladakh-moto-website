import { component$, useStylesScoped$ } from '@builder.io/qwik';
import styles from './cost.css?inline';
import InclusionsExclusions from '~/components/inclusions-exclusions/inclusions-exclusions';

export default component$(() => {
    useStylesScoped$(styles);

    return (
        <div id="cost">
            <div class="sub-headings d-flex justify-content-between align-items-center">
                <h2>Tour Cost</h2>
            </div>
            <div class="table-responsive py-1">
                <table class="table table-bordered table-hover">
                    <thead class="thead-dark table__head">
                        <tr>
                            <th scope="col">Travel Mode </th>
                            <th scope="col">Vehicle Provided</th>
                            <th scope="col">Cost Per Person</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Own Bike</td>
                            <td>₹ 23,000/- PP</td>
                            <td id="tour-price">₹ 15,500/- PP</td>
                        </tr>
                        <tr>
                            <td>Solo Rider</td>
                            <td>Himalayan 411cc BSVI</td>
                            <td>₹ 25,500/- PP</td>
                        </tr>
                        <tr>
                            <td>Dual Ride</td>
                            <td>Himalayan 411cc BSVI</td>
                            <td>₹ 21,500/- PP</td>
                        </tr>
                        <tr>
                            <td>Seat in Backup Vehicle</td>
                            <td>Isuzu/Camper</td>
                            <td>₹ 19,500/- PP</td>
                        </tr>
                        <tr>
                            <td>SUV (min 5 seats)</td>
                            <td>Innova/Xylo</td>
                            <td>₹ 19,500/- PP</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <InclusionsExclusions />
            
        </div>
    );
});