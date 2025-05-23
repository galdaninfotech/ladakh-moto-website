import { component$, useSignal, useTask$ } from '@builder.io/qwik';

interface StrapiResponse {
  data: any;
  meta: any;
}

export const StrapiFetcher = component$(() => {
  const data = useSignal<any>(null);
  const loading = useSignal(true);
  const error = useSignal<string | null>(null);

  useTask$(async () => {
    try {
      // Replace with your Strapi API endpoint
      const response = await fetch('https://valuable-dream-16512a9c4c.strapiapp.com/api/home-page');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const result: StrapiResponse = await response.json();
      data.value = result.data;
      loading.value = false;
    } catch (err) {
      error.value = err instanceof Error ? err.message : 'An error occurred';
      loading.value = false;
    }
  });

  return (
    <div>
      {loading.value && <div>Loading...</div>}
      {error.value && <div>Error: {error.value}</div>}
      {data.value && (
        <div>
          {/* Render your data here */}
          <pre>{JSON.stringify(data.value, null, 2)}</pre>
        </div>
      )}
    </div>
  );
});

