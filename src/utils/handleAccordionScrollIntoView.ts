import { $ } from '@builder.io/qwik';

export const handleAccordionScrollIntoView = $((event: Event) => {
    const button = event.target as HTMLElement;
    if (button) {
        const targetId = button.getAttribute('data-bs-target');
        if (targetId) {
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const yOffset = -106;
                const y = targetElement.getBoundingClientRect().top + window.pageYOffset + yOffset;
                const isVisible = targetElement.getBoundingClientRect().top >= 0 && targetElement.getBoundingClientRect().bottom <= window.innerHeight;
                if (!isVisible) {
                    window.scrollTo({ top: y, behavior: 'smooth' });
                }
            }
        }
    }
});