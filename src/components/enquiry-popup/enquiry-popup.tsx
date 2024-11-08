import { component$, useStylesScoped$ } from '@builder.io/qwik';
import styles from './enquiry-popup.css?inline';

export default component$(() => {
    useStylesScoped$(styles);

    return (
        <div class="form-popup-bg">
            <div class="form-container">
                <button id="btnCloseForm" class="close-button">X</button>
                <h4>Tour Enquiry</h4>
                <p>For more information. Please complete this form.</p>
                <form action="">
                    <div class="form-group">
                        <label for="">Name</label>
                        <input name="name" type="text" class="form-control" />
                    </div>
                    <div class="form-group">
                        <label for="">E-Mail Address <span>*</span></label>
                        <input name="email" class="form-control" type="text" required/>
                    </div>
                    <div class="form-group">
                        <label for="">Phone Number <span>*</span></label>
                        <input name="phone" class="form-control" type="text" required/>
                    </div>
                    <div class="form-group">
                        <label for="">Number of Person</label>
                        <input name="noOfPerson" class="form-control" type="text" />
                    </div>
                    <div class="form-group">
                        <label for="">Message</label>
                        <textarea name="message"></textarea>
                    </div>

                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
});