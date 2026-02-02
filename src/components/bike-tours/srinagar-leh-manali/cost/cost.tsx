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
                <table class="table table-bordered table-hover travel-mode">
                    <thead class="thead-dark table__head">
                        <tr>
                            <th scope="col">Travel Mode </th>
                            <th scope="col">Vehicle Provided</th>
                            <th scope="col">Cost Per Person</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>Own Bike</strong></td>
                            <td>Own Bike</td>
                            <td id="tour-price">₹ 23,000/- PP</td>
                        </tr>
                        <tr>
                            <td><strong>Solo Rider</strong></td>
                            <td>Himalayan 411 BSVI</td>
                            <td>₹ 43,000/- PP</td>
                        </tr>
                        <tr>
                            <td><strong>Dual Ride</strong></td>
                            <td>Himalayan 411 BSVI</td>
                            <td>₹ 33,000/- PP</td>
                        </tr>
                        <tr>
                            <td><strong>Seat in Backup Vehicle</strong></td>
                            <td>Isuzu/Camper</td>
                            <td>₹ 30,500/- PP</td>
                        </tr>
                        <tr>
                            <td><strong>SUV (min 5 seats)</strong></td>
                            <td>Innova/Xylo</td>
                            <td>₹ 30,500/- PP</td>
                        </tr>
                        <tr>
                            <td class="flex items-center justify-end" colSpan={3}><strong><span class="animated-arrow">👉</span> Solo rider private room upgrade: extra Rs 10000</strong></td>
                        </tr>
                        <tr>
                            <td class="flex items-center justify-end" colSpan={3}><strong><span class="animated-arrow">👉</span> Bike (Himalayan 452) upgrade: extra Rs 15000</strong></td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <InclusionsExclusions />
            
        </div>
    );
});