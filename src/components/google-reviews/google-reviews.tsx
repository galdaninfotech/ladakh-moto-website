import { component$, useStore, useVisibleTask$ } from '@builder.io/qwik';

export default component$(() => {
  interface Review {
    authorAttribution: {
      displayName: string;
    };
    originalText: {
      text: string;
    };
    rating: number;
  }

  interface PlaceDetailsResponse {
    result: {
      reviews: Review[];
      nextPageToken?: string;
    }
  }

  const store = useStore<{
    reviews: Review[];
    error: string | null;
    isLoading: boolean;
    pageToken?: string;
  }>({
    reviews: [],
    error: null,
    isLoading: false,
    pageToken: undefined
  });

  useVisibleTask$(() => {
    const fetchReviews = async (pageToken?: string): Promise<void> => {
      try {
        store.isLoading = true;
        const url = pageToken 
          ? `/api/google-reviews?pageToken=${pageToken}`
          : '/api/google-reviews';

        const response = await fetch(url);
  
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
  
        const data: PlaceDetailsResponse = await response.json();
        console.log('API Response:', data);
  
        if (data.result?.reviews?.length > 0) {
          // Append new reviews to existing ones
          store.reviews = [...store.reviews, ...data.result.reviews];
          
          // If there's a next page token, fetch more reviews
          if (data.result.nextPageToken) {
            // Add a small delay to ensure the token is ready
            await new Promise(resolve => setTimeout(resolve, 2000));
            await fetchReviews(data.result.nextPageToken);
          }
        } else if (store.reviews.length === 0) {
          store.error = 'No reviews found for this location';
        }
      } catch (err: any) {
        store.error = `Error fetching reviews: ${err.message}`;
        console.error('Fetch Error:', err);
      } finally {
        store.isLoading = false;
      }
    };
  
    fetchReviews();
  });

  return (
    <div>
      <h2>Google Reviews</h2>
      {store.isLoading && <p>Loading reviews...</p>}
      {store.error && <p style={{ color: 'red' }}>{store.error}</p>}
      <ul class="space-y-4">
        {store.reviews.map((review, index) => (
          <li key={index} class="border p-4 rounded-lg">
            <p>
              <strong>{review.authorAttribution.displayName}</strong>
            </p>
            <p class="mt-2">{review.originalText.text}</p>
            <p class="mt-2">Rating: {'⭐'.repeat(review.rating)}</p>
          </li>
        ))}
      </ul>
      <p class="mt-4">Total Reviews: {store.reviews.length}</p>
    </div>
  );
});