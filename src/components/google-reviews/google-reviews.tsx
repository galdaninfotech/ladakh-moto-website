import { component$, useVisibleTask$ } from '@builder.io/qwik';

export default component$(() => {
  useVisibleTask$(() => {
    // Load Elfsight script dynamically
    const script = document.createElement('script');
    script.src = 'https://static.elfsight.com/platform/platform.js';
    script.async = true;
    document.body.appendChild(script);

    // Cleanup function
    return () => {
      document.body.removeChild(script);
    };
  });

  return (
    <div 
      class="elfsight-app-e61de2df-e8bf-4dd0-9151-ad719eae83c4" 
      data-elfsight-app-lazy
    />
  );
});