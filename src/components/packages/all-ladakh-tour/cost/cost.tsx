import { component$, useStylesScoped$ } from '@builder.io/qwik';
import styles from './cost.css?inline';
import InclusionsExclusions from '~/components/packages/inclusions-exclusions/inclusions-exclusions';

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
                            <td>Package Type</td>
                            <td>Price 2 Pax Per person</td>
                            <td>Price 2-5 pax Per person</td>
                            <td>Price 5-12 Pax Per Person</td>
                            <td>Above 12 Pax Per person</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Best Stay</td>
                            <td>20,000</td>
                            <td>20,000</td>
                            <td>20,000</td>
                            <td>20,000</td>
                        </tr>
                        <tr>
                            <td>Super Deluxe</td>
                            <td>20,000</td>
                            <td>20,000</td>
                            <td>20,000</td>
                            <td>20,000</td>
                        </tr>
                        <tr>
                            <td>Deluxe</td>
                            <td>20,000</td>
                            <td>20,000</td>
                            <td>20,000</td>
                            <td>20,000</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <InclusionsExclusions />
            
        </div>
    );
});

