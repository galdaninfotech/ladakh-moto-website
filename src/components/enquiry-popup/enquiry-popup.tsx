import { component$, useStore, useStylesScoped$, $, useVisibleTask$ } from '@builder.io/qwik';
import styles from './enquiry-popup.css?inline';

export default component$(() => {
    useStylesScoped$(styles);

    const formState = useStore({
        tourName: '',
        tourDate: '',
        travelMode: '',
        noOfPerson: 1,
        email: '',
        phone: '',
        isSubmitting: false,
        successMessage: '',
        errorMessage: '',
        recaptchaToken: '',
        honeypot: '', // Should remain empty
        recaptchaLoaded: false,
    });

    useVisibleTask$(() => {
        const tourNameElement = document.getElementById('tour-name');
        const tourName = tourNameElement ? tourNameElement.getAttribute('data-tour-name') : '';
        if (tourName) {
            formState.tourName = tourName;
        }
        
        const loadRecaptcha = async () => {
            try {
                const siteKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY;
                console.log('Starting reCAPTCHA load with site key:', siteKey);
    
                if (!siteKey) {
                    throw new Error('reCAPTCHA site key is not defined');
                }
    
                const existingScript = document.querySelector('script[src*="recaptcha"]');
                if (existingScript) {
                    console.log('Removing existing reCAPTCHA script...');
                    existingScript.remove();
                }
    
                const script = document.createElement('script');
                script.src = `https://www.google.com/recaptcha/api.js?render=${siteKey}`;
                
                await new Promise<void>((resolve, reject) => {
                    script.onload = () => {
                        console.log('reCAPTCHA script loaded successfully');
                        if (!(window as any).grecaptcha) {
                            console.error('grecaptcha object not found after script load');
                            reject(new Error('reCAPTCHA initialization failed'));
                            return;
                        }
    
                        (window as any).grecaptcha.ready(() => {
                            console.log('reCAPTCHA is ready');
                            formState.recaptchaLoaded = true;
                            resolve();
                        });
                    };
    
                    script.onerror = (error) => {
                        console.error('reCAPTCHA script failed to load:', error);
                        reject(error);
                    };
    
                    document.head.appendChild(script);
                });
            } catch (error) {
                console.error('Error in loadRecaptcha:', error);
                throw error;
            }
        };
    
        loadRecaptcha().catch(error => {
            console.error('Failed to load reCAPTCHA:', error);
            formState.errorMessage = 'Failed to load reCAPTCHA. Please refresh the page.';
        });
    });

    const validateForm = $((formData: typeof formState) => {
        const errors: string[] = [];


        if (!formData.tourDate.trim()) {
            errors.push("Tour Date is required");
        }

        if (!formData.travelMode.trim()) {
            errors.push("Travel Mode is required");
        }
        
        // if (!formData.noOfPerson || formData.noOfPerson < 1) {
        //     errors.push("Number of Persons is required and must be at least 1");
        // }

        if (!formData.email) {
            errors.push("Email is required");
        } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email)) {
            errors.push("Please enter a valid email address");
        }

        if (!formData.phone) {
            errors.push("Phone is required");
        } else if (!/^\d{10}$/.test(formData.phone)) {
            errors.push("Please enter a valid 10-digit phone number");
        }


        if (errors.length > 0) {
            throw new Error(errors.join("\n"));
        }
    });

    const handleSubmit = $(async () => {
        if (formState.isSubmitting) return;

        try {
            formState.isSubmitting = true;
            formState.successMessage = '';
            formState.errorMessage = '';

            try {
                await validateForm(formState);
            } catch (error) {
                throw new Error(error instanceof Error ? error.message : 'Validation failed');
            }

            if (!formState.recaptchaLoaded || !(window as any).grecaptcha) {
                throw new Error('Please wait for reCAPTCHA to initialize');
            }

            try {
                console.log('Starting reCAPTCHA verification...');
                if (!(window as any).grecaptcha) {
                    console.error('grecaptcha object not found');
                    throw new Error('reCAPTCHA not initialized properly');
                }
            
                const token = await new Promise<string>((resolve, reject) => {
                    (window as any).grecaptcha.execute(
                        import.meta.env.VITE_RECAPTCHA_SITE_KEY,
                        { action: 'submit' }
                    ).then((token: string) => {
                        console.log('reCAPTCHA token generated successfully');
                        resolve(token);
                    }).catch((error: any) => {
                        console.error('reCAPTCHA execution failed:', error);
                        reject(error);
                    });
                });
            
                formState.recaptchaToken = token;
            } catch (error) {
                console.error('reCAPTCHA verification failed:', error);
                throw new Error('Failed to verify reCAPTCHA. Please try again.');
            }

            const response = await fetch('/.netlify/functions/booking', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    tourName: formState.tourName,
                    tourDate: formState.tourDate,
                    travelMode: formState.travelMode,
                    noOfPerson: formState.noOfPerson,
                    email: formState.email,
                    phone: formState.phone,
                    recaptchaToken: formState.recaptchaToken
                })
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'Unknown error');
            }

            formState.successMessage = data.message;
            formState.tourName = '';
            formState.tourDate = '';
            formState.travelMode = '';
            formState.noOfPerson = 1;
            formState.email = '';
            formState.phone = '';
        } catch (error) {
            formState.errorMessage = (error instanceof Error ? error.message : 'An error occurred. Please try again.');
        } finally {
            formState.isSubmitting = false;
        }
    });

    return (
        <div class="form-popup-bg">
            <div class="form-container">
                <button id="btnCloseForm" class="close-button">x</button>
                <form id="booking" preventdefault:submit onSubmit$={handleSubmit}>
                    <div class="tourName"></div>
                    <div class="form-group d-none">
                        <label for="tourName">Tour Name</label>
                        <input
                            id="tourName"
                            name="tourName"
                            type="hidden"
                            class="form-control tourname"
                            autocomplete="off"
                            value={formState.tourName}
                            onInput$={(e) => (formState.tourName = (e.target as HTMLInputElement).value)}
                        />
                    </div>
                    <div class="form-group">
                        <label for="tourDate">Tour Date <span>*</span></label>
                        <select
                            name="tourDate"
                            id="tourDate"
                            class="form-control"
                            value={formState.tourDate}
                            onChange$={(e) => (formState.tourDate = (e.target as HTMLSelectElement).value)}
                        >
                            <option value="Select">Select Tour Date</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="travelMode">Travel Mode <span>*</span></label>
                        <select
                            name="travelMode"
                            id="travelMode"
                            class="form-control"
                            value={formState.travelMode}
                            onChange$={(e) => (formState.travelMode = (e.target as HTMLSelectElement).value)}
                        >
                            <option value="Select">Your Preferred Travel Mode</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="noOfPerson">Number of Person</label>
                        <input
                            type="number"
                            id="noOfPerson"
                            name="noOfPerson"
                            class="form-control"
                            min="1"
                            value={formState.noOfPerson}
                            onInput$={(e) => (formState.noOfPerson = parseInt((e.target as HTMLInputElement).value, 10))}
                            autocomplete="off"
                        />
                    </div>
                    <div class="form-group">
                        <label for="email">Your E-Mail ID <span>*</span></label>
                        <input
                            id="email"
                            name="email"
                            class="form-control"
                            type="text"
                            autocomplete="email"
                            required
                            value={formState.email}
                            onInput$={(e) => (formState.email = (e.target as HTMLInputElement).value)}
                        />
                    </div>

                    <div class="form-group">
                        <label for="phone">Your Mobile Number <span>*</span></label>
                        <input
                            id="phone"
                            name="phone"
                            class="form-control"
                            type="text"
                            autocomplete="tel"
                            required
                            value={formState.phone}
                            onInput$={(e) => (formState.phone = (e.target as HTMLInputElement).value)}
                        />
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
                            <tbody id="cost-table-body"></tbody>
                        </table>
                    </div>


                    <input 
                        name="website" 
                        type="text"
                        value={formState.honeypot}
                        style={{ display: 'none' }}
                        onInput$={(e) => (formState.honeypot = (e.target as HTMLInputElement).value)}
                    />

                    <button type="submit" disabled={formState.isSubmitting || !formState.recaptchaLoaded}>
                        {!formState.recaptchaLoaded
                            ? 'Loading reCAPTCHA...'
                            : formState.isSubmitting
                            ? 'Sending Enquiry...'
                            : 'Book Now'}
                    </button>

                    <button style="float: left">Cancel</button>
                </form>

                {formState.successMessage && <p id="booking-success-message">{formState.successMessage}</p>}
                {formState.errorMessage && <p id="booking-failure-message">{formState.errorMessage}</p>}

                <div class="recaptcha-terms">
                    This site is protected by reCAPTCHA and the Google{' '}
                    <a href="https://policies.google.com/privacy" target="_blank" rel="noopener">
                        Privacy Policy
                    </a>{' '}
                    and{' '}
                    <a href="https://policies.google.com/terms" target="_blank" rel="noopener">
                        Terms of Service
                    </a>{' '}
                    apply.
                </div>
            </div>
        </div>
    );
});