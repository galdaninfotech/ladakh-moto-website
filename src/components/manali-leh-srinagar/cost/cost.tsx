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
                            <th scope="col">Selling Cost</th>
                            <th scope="col">Early Discount</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Own Bike</td>
                            <td>₹ 29,000/- PP</td>
                            <td id="tour-price">₹ 25,000/- PP</td>
                        </tr>
                        <tr>
                            <td>Solo Rider</td>
                            <td>₹ 52,000/- PP</td>
                            <td>₹ 48,000/- PP</td>
                        </tr>
                        <tr>
                            <td>Dual Ride</td>
                            <td>₹ 44,000/- PP</td>
                            <td>₹ 38,000/- PP</td>
                        </tr>
                        <tr>
                            <td>Seat in Backup Vehicle</td>
                            <td>₹ 44,000/- PP</td>
                            <td>₹ 38,000/- PP</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <InclusionsExclusions />
            
        </div>
    );
});