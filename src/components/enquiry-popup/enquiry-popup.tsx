import { component$, useStylesScoped$ } from '@builder.io/qwik';
import styles from './enquiry-popup.css?inline';

export default component$(() => {
    useStylesScoped$(styles);

    return (
        <div class="form-popup-bg">
            <div class="form-container">
                <button id="btnCloseForm" class="close-button">X</button>
                <h4>Tour Enquiry</h4>
                <p>For more information, please complete this form.</p>
                <form action="">
                    <div class="form-group">
                        <label for="name">Name</label>
                        <input id="name" name="name" type="text" class="form-control" autocomplete="name"/>
                    </div>
                    <div class="form-group">
                        <label for="email">E-Mail Address <span>*</span></label>
                        <input id="email" name="email" class="form-control" type="text" autocomplete="email" required/>
                    </div>
                    <div class="form-group">
                        <label for="phone">Phone Number <span>*</span></label>
                        <input id="phone" name="phone" class="form-control" type="text" autocomplete="tel" required/>
                    </div>
                    <div class="form-group">
                        <label for="noOfPerson">Number of Person</label>
                        <input id="noOfPerson" name="noOfPerson" class="form-control" autocomplete="off" type="text" />
                    </div>
                    <div class="form-group">
                        <label for="message">Message</label>
                        <textarea id="message" name="message"></textarea>
                    </div>

                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
});