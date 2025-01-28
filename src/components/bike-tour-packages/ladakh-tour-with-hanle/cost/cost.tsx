import { component$, useStylesScoped$ } from '@builder.io/qwik';
import styles from './cost.css?inline';
import InclusionsExclusions from '~/components/bike-tour-packages/inclusions-exclusions/inclusions-exclusions';

export default component$(() => {
    useStylesScoped$(styles);

    return (
        <div id="cost">
            <div class="sub-headings">
                <h2>Tour Cost</h2>
            </div>
            <div class="table-responsive py-1">
                <table id="package-cost-table" class="table table-bordered table-hover">
                    <thead>
                        <tr>
                            <td><strong>Package Type</strong></td>
                            <td>Price 2 Pax Per person</td>
                            <td>Price 2-5 pax Per person</td>
                            <td>Price 5-12 Pax Per Person</td>
                            <td>Above 12 Pax Per person</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>Best Stay</strong></td>
                            <td>₹ 74,500</td>
                            <td>₹ 63,750</td>
                            <td>₹ 60,200</td>
                            <td>₹ 57,000</td>
                        </tr>
                        <tr>
                            <td><strong>Super Deluxe</strong></td>
                            <td>₹ 50,000</td>
                            <td>₹ 39,300</td>
                            <td>₹ 35,700</td>
                            <td>₹ 28,500</td>
                        </tr>
                        <tr>
                            <td><strong>Deluxe</strong></td>
                            <td>₹ 34,300</td>
                            <td>₹ 23,500</td>
                            <td>₹ 20,000</td>
                            <td>₹ 18,000</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <InclusionsExclusions />
            
        </div>
    );
});