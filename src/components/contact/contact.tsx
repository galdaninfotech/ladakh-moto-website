import { component$, useStore, useStylesScoped$, $, useVisibleTask$ } from "@builder.io/qwik";
import styles from "./contact.css?inline";

export const Contact = component$(() => {
  useStylesScoped$(styles);

  const formState = useStore({
    name: "",
    email: "",
    message: "",
    isSubmitting: false,
    successMessage: "",
    errorMessage: "",
    recaptchaToken: "",
    honeypot: "", // Should remain empty
    recaptchaLoaded: false,
  });

  // Add this hook to load reCAPTCHA
  useVisibleTask$(() => {
    const loadRecaptcha = async () => {
      // Clear existing script if any
      const existingScript = document.querySelector('script[src*="recaptcha"]');
      if (existingScript) {
        existingScript.remove();
      }

      // Add new script
      const script = document.createElement('script');
      script.src = `https://www.google.com/recaptcha/api.js?render=${import.meta.env.VITE_RECAPTCHA_SITE_KEY}`;
      
      return new Promise<void>((resolve) => {
        script.onload = () => {
          (window as any).grecaptcha?.ready(() => {
            console.log('reCAPTCHA loaded');  // Debug log
            formState.recaptchaLoaded = true;
            resolve();
          });
        };
        script.onerror = (error) => {
          console.error('reCAPTCHA load error:', error);  // Debug log
        };
        document.head.appendChild(script);
      });
    };

    loadRecaptcha().catch(console.error);

    return () => {
      const script = document.querySelector('script[src*="recaptcha"]');
      if (script) script.remove();
      formState.recaptchaLoaded = false;
    };
  });

  const validateForm = $((formData: typeof formState) => {
    const errors: string[] = [];
    
    // Name validation
    if (!formData.name.trim()) {
      errors.push("Name is required");
    } else if (formData.name.length < 2) {
      errors.push("Name must be at least 2 characters long");
    }
    
    // Email validation - more comprehensive regex
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!formData.email) {
      errors.push("Email is required");
    } else if (!emailRegex.test(formData.email)) {
      errors.push("Please enter a valid email address");
    }
    
    // Message validation
    if (!formData.message.trim()) {
      errors.push("Message is required");
    } else if (formData.message.length < 10) {
      errors.push("Message must be at least 10 characters long");
    } else if (formData.message.length > 1000) {
      errors.push("Message must not exceed 1000 characters");
    }
    
    // Check for spam patterns
    const spamPatterns = [
      /http[s]?:\/\//i,
      /www\./i,
      /\[url\]/i,
      /<a\s+href/i,
      /\.ru\//i,
      /\.cn\//i
    ];
    
    if (spamPatterns.some(pattern => pattern.test(formData.message))) {
      errors.push("Links are not allowed in messages");
    }
    
    // Rate limiting
    const lastSubmission = sessionStorage.getItem('lastSubmission');
    if (lastSubmission && Date.now() - parseInt(lastSubmission) < 60000) {
      errors.push("Please wait 1 minute before submitting again");
    }
  
    if (errors.length > 0) {
      throw new Error(errors.join("\n"));
    }
  });

  // Wrap the function with $() to create a QRL
  const handleSubmit = $(async () => {
    if (formState.isSubmitting) return;

    try {
      formState.isSubmitting = true;
      formState.successMessage = "";
      formState.errorMessage = "";

      // Validate form first
      try {
        await validateForm(formState);
      } catch (error) {
        throw new Error(error instanceof Error ? error.message : 'Validation failed');
      }

      // Check reCAPTCHA
      if (!formState.recaptchaLoaded || !(window as any).grecaptcha) {
        throw new Error('Please wait for reCAPTCHA to initialize');
      }

      // Get reCAPTCHA token
      try {
        const token = await (window as any).grecaptcha.execute(
          import.meta.env.VITE_RECAPTCHA_SITE_KEY, 
          {action: 'submit'}
        );
        formState.recaptchaToken = token;
      } catch (error) {
        throw new Error('Failed to verify reCAPTCHA. Please try again.');
      }

      const response = await fetch('/api/contact-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          message: formState.message,
          recaptchaToken: formState.recaptchaToken
        })
      });
  
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'Unknown error');
      }
  
      formState.successMessage = data.message;
      formState.name = "";
      formState.email = "";
      formState.message = "";
    } catch (error) {
      formState.errorMessage = (error instanceof Error ? error.message : 'An error occurred. Please try again.');
    } finally {
      formState.isSubmitting = false;
    }
  });

  return (
    <div>
        <form id="contact" preventdefault:submit onSubmit$={handleSubmit} class="mb-30 contact-form">
            <div class="form-group">
                <label for="name">Name <span>*</span></label>
                <input 
                    id="name" 
                    name="name" 
                    type="text" 
                    class={`form-control ${formState.name.length > 0 && formState.name.length < 2 ? 'is-invalid' : ''}`}
                    value={formState.name}
                    onInput$={(e) => (formState.name = (e.target as HTMLInputElement).value)}
                    required
                    minLength={2}
                />
                {formState.name.length > 0 && formState.name.length < 2 && (
                    <div class="invalid-feedback">Name must be at least 2 characters long</div>
                )}
            </div>

            <div class="form-group">
                <label for="email">E-Mail Address <span>*</span></label>
                <input 
                    id="email" 
                    name="email" 
                    type="email" 
                    class={`form-control ${formState.email && !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formState.email) ? 'is-invalid' : ''}`}
                    value={formState.email}
                    onInput$={(e) => (formState.email = (e.target as HTMLInputElement).value)}
                    required
                />
                {formState.email && !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formState.email) && (
                    <div class="invalid-feedback">Please enter a valid email address</div>
                )}
            </div>

            <div class="form-group">
                <label for="message">Message <span>*</span></label>
                <textarea 
                    id="message" 
                    name="message" 
                    class={`form-control ${formState.message.length > 0 && formState.message.length < 10 ? 'is-invalid' : ''}`}
                    rows={7}
                    value={formState.message}
                    onInput$={(e) => (formState.message = (e.target as HTMLTextAreaElement).value)}
                    required
                    minLength={10}
                    maxLength={1000}
                />
                {formState.message.length > 0 && formState.message.length < 10 && (
                    <div class="invalid-feedback">Message must be at least 10 characters long</div>
                )}
                <small class="text-muted">{formState.message.length}/1000 characters</small>
            </div>

            <input 
              name="website" 
              type="text"
              value={formState.honeypot}
              style={{ display: 'none' }}
              onInput$={(e) => (formState.honeypot = (e.target as HTMLInputElement).value)}
            />

            <p class="mt-3">
                * All fields are required.
            </p>
           
            <button 
              type="submit" 
              disabled={formState.isSubmitting || !formState.recaptchaLoaded} 
              class="btn btn-primary mt-3"
            >
              {!formState.recaptchaLoaded 
                ? "Loading reCAPTCHA..." 
                : formState.isSubmitting 
                  ? "Sending Message..." 
                  : "Send Message"
              }
            </button>
        </form>

        {formState.successMessage && (
            <p id="contact-success-message">{formState.successMessage}</p>
        )}
        {formState.errorMessage && (
            <p id="contact-failure-message">{formState.errorMessage}</p>
        )}

        {/* Add reCAPTCHA badge */}
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
  );
});