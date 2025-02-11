import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
    // const head = useDocumentHead();
    
    return (
        <>
            <div class="container mb-5">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="error-page text-center">
                            <h1 class="mt-5">404</h1>
                            <h2>Page Not Found</h2>
                            <p>The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
                            <p>Explore our exciting Ladakh bike tours and adventure trips instead. Head back to our homepage and start planning your next Himalayan journey with Ladakh Moto!</p>
                            <a href="/" class="btn btn-primary mt-5">Back to Home</a>
                        </div>
                    </div>
                </div>
            </div>            
            
        </>
    );
});

export const head: DocumentHead = {
  title: "404 Page Not Found - Ladakh Moto",
  meta: [
    {
      name: "description",
      content: "Oops! The page you're looking for doesn't exist.",
    },
  ],
};
