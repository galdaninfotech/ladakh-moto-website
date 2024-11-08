import { component$, useStore, useStylesScoped$, $ } from "@builder.io/qwik";
import styles from "./contact.css?inline";
import { Resend } from "resend";
const resend = new Resend("re_A3gx4BcE_Gz6JPtno8y63q86ZLK5nkEgG");

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
      console.log("Attempting to send email...");
      const result = await resend.emails.send({
        from: "onboarding@resend.dev",
        to: "galdaninfotech@gmail.com",
        subject: "Test Email from Node.js",
        text: "This is a test email sent from a Node.js script using Resend API.",
      });

      console.log("Email sent successfully:", result);

      formState.successMessage = "Your message has been sent!";
      formState.name = "";
      formState.email = "";
      formState.message = "";
    } catch (error) {
      console.error("Error sending email:", error);
      formState.errorMessage = "Failed to send your message. Please try again.";
    }
  });

  return (
    <div>
        <form preventdefault:submit onSubmit$={handleSubmit} class="mb-30">
            <div class="form-group">
                <label for="">Name</label>
                <input name="name" type="text" class="form-control" 
                    value={formState.name}
                    onInput$={(e) =>
                        (formState.name = (e.target as HTMLInputElement).value)
                    }
                />
            </div>

            <div class="form-group">
                <label for="">E-Mail Address <span>*</span></label>
                <input name="email" class="form-control" type="text" required
                    value={formState.email}
                    onInput$={(e) =>
                        (formState.email = (e.target as HTMLInputElement).value)
                    }
                />
            </div>

            <div class="form-group">
                <label for="">Phone Number</label>
                <input name="phone" class="form-control" type="text" 
                    value={formState.email}
                    onInput$={(e) =>
                        (formState.email = (e.target as HTMLInputElement).value)
                    }
                />
            </div>

            <div class="form-group">
                <label for="">Message</label>
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
           
            <button type="button" disabled={formState.isSubmitting} class="btn btn-primary mt-3">
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
