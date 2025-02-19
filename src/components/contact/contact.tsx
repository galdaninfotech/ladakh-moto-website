import { component$, useStore, useStylesScoped$, $ } from "@builder.io/qwik";
import styles from "./contact.css?inline";
// import { Resend } from "resend";
// const resend = new Resend("re_QK8RviMo_Fc7ALxvoV3WK4KjSksxDfqES");

export const Contact = component$(() => {
  useStylesScoped$(styles);

  const formState = useStore({
    name: "",
    email: "",
    message: "",
    isSubmitting: false,
    successMessage: "",
    errorMessage: "",
  });

  // Wrap the function with $() to create a QRL
  const handleSubmit = $(async () => {
    alert("Send Starting!");
    if (formState.isSubmitting) return;
  
    formState.isSubmitting = true;
    formState.successMessage = "";
    formState.errorMessage = "";
  
    console.log("Submitting form with data:", formState);
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          message: formState.message
        })
      });
  
      // First, try to get the response text
      const responseText = await response.text();
      console.log("Raw response:", responseText);
  
      let errorData;
      try {
        // Try to parse it as JSON
        errorData = JSON.parse(responseText);
      } catch (parseError) {
        console.error("Response is not JSON:", responseText);
        throw new Error(`Server returned invalid JSON: ${responseText.substring(0, 100)}...`);
      }
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}, message: ${errorData.message || 'Unknown error'}`);
      }
  
      console.log("Email sent successfully:", errorData);
      formState.successMessage = "Your message has been sent!";
      formState.name = "";
      formState.email = "";
      formState.message = "";
    } catch (error) {
      console.error("Error sending email:", error);
      formState.errorMessage = `Failed to send your message. Please try again. Error: ${error.message}`;
    } finally {
      formState.isSubmitting = false;
    }
  });

  return (
    <div>
        <form preventdefault:submit onSubmit$={handleSubmit} class="mb-30">
            <div class="form-group">
                <label for="name">Name</label>
                <input name="name" type="text" class="form-control" 
                    value={formState.name}
                    onInput$={(e) =>
                        (formState.name = (e.target as HTMLInputElement).value)
                    }
                />
            </div>

            <div class="form-group">
                <label for="email">E-Mail Address <span>*</span></label>
                <input name="email" class="form-control" type="text" required
                    value={formState.email}
                    onInput$={(e) =>
                        (formState.email = (e.target as HTMLInputElement).value)
                    }
                />
            </div>

            <div class="form-group">
                <label for="message">Message</label>
                <textarea name="message" class="form-control" rows={7}
                    value={formState.message}
                    onInput$={(e) =>
                        (formState.message = (e.target as HTMLTextAreaElement).value)
                    }
                >
                </textarea>
            </div>

            <p class="mt-3">
                * All fields are required.
            </p>
           
            <button type="submit" disabled={formState.isSubmitting} class="btn btn-primary mt-3">
                {formState.isSubmitting ? "Sending Message..." : "Send Message"}
            </button>
        </form>

        {formState.successMessage && (
            <p style={{ color: "green" }}>{formState.successMessage}</p>
        )}
        {formState.errorMessage && (
            <p style={{ color: "red" }}>{formState.errorMessage}</p>
        )}
    </div>
  );
});
