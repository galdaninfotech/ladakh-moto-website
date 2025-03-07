import { component$, useStylesScoped$ } from '@builder.io/qwik';
import styles from './enquiry-popup.css?inline';

export default component$(() => {
    useStylesScoped$(styles);

    return (
        <div class="form-popup-bg">
            <div class="form-container">
                <button id="btnCloseForm" class="close-button">X</button>
                {/* <h4>Book Tour</h4> */}
                <form action="">
                    <div class="tourName"></div>
                    <div class="form-group d-none">
                        <label for="tourName">Tour Name</label>
                        <input id="tourName" name="tourName" type="hidden" class="form-control tourname" autocomplete="off"/>
                    </div>
                    <div class="form-group">
                        <label for="tourDate">Tour Date <span>*</span></label>
                        <select name="tourDate" id="tourDate" class="form-control">
                            <option value="Select">Select Tour Date</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="travelMode">Travel Mode <span>*</span></label>
                        <select name="travelMode" id="travelMode" class="form-control">
                            <option value="Select">Your Prefered Travel Mode</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="noOfPerson">Number of Person</label>
                        <input type="number" id="noOfPerson" name="noOfPerson" class="form-control" min="1" value="1" autocomplete="off" />
                    </div>
                    <div class="form-group">
                        <label for="email">Your E-Mail ID <span>*</span></label>
                        <input id="email" name="email" class="form-control" type="text" autocomplete="email" required/>
                    </div>

                    <div id="cost-display" class="table-responsive d-none">
                        <table class="table">
                            <thead class="thead-dark">
                                <tr>
                                    <th scope="col">MODE</th>
                                    <th scope="col">VEHICLE</th>
                                    <th scope="col">COST</th>
                                </tr>
                            </thead>
                            <tbody id="cost-table-body">
                            </tbody>
                        </table>
                    </div>
                    
                    <button type="submit">Book Now</button>
                </form>

                
            </div>
        </div>
    );
});