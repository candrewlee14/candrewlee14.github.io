/**
 * Svelte action to fade in an element when it scrolls into view.
 *
 * Usage: <element use:fadeIn class="fade-in-on-scroll">...</element>
 *
 * CSS required:
 * .fade-in-on-scroll {
 *   opacity: 0;
 *   transform: translateY(20px);
 *   transition: opacity 0.7s ease-out, transform 0.7s ease-out;
 *   transition-delay: 0.1s;
 * }
 * .fade-in-visible {
 *   opacity: 1;
 *   transform: translateY(0);
 * }
 */
export function fadeIn(node: HTMLElement, options?: { threshold?: number, rootMargin?: string }) {
  const { threshold = 0.1, rootMargin = '0px 0px -10% 0px' } = options || {};

  let observer: IntersectionObserver;

  function handleIntersect(entries: IntersectionObserverEntry[]) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        node.classList.add('fade-in-visible');
        // Optional: Unobserve after animation to save resources
        // if (observer) {
        //   observer.unobserve(node);
        // }
      }
    });
  }

  function initObserver() {
    observer = new IntersectionObserver(handleIntersect, {
      root: null, // viewport
      rootMargin: rootMargin, // e.g., '0px 0px -10% 0px' - trigger when 10% of the element is visible from the bottom
      threshold: threshold, // Percentage of element visibility
    });
    observer.observe(node);
  }

  // Ensure the node has the base class for initial styling
  // This is better handled by adding the class directly in the component markup
  // node.classList.add('fade-in-on-scroll');


  // Delay initialization slightly to ensure CSS transitions are ready if styles are dynamically added
  // and to avoid potential race conditions, though typically not an issue with Svelte's lifecycle.
  const timeoutId = setTimeout(initObserver, 0);


  return {
    destroy() {
      clearTimeout(timeoutId);
      if (observer) {
        observer.unobserve(node);
        observer.disconnect();
      }
    }
  };
}
