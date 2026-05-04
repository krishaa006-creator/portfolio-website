import { useEffect, useRef } from "react";

/**
 * Adds `reveal-base reveal-{dir}` classes immediately,
 * then adds `is-revealed` after a frame so the browser
 * paints the hidden state first — guaranteeing the
 * CSS transition fires visibly every time.
 *
 * Usage:
 *   const ref = useReveal("up");          // fade + slide up
 *   const ref = useReveal("left", 150);   // slide from left, 150ms delay
 *   <div ref={ref} ...>
 */
export function useReveal(dir = "up", delayMs = 0, threshold = 0.12) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Apply base + direction classes so element starts hidden
    el.classList.add("reveal-base", `reveal-${dir}`);

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        obs.disconnect();
        // Two rAFs: first ensures hidden state is painted, second triggers transition
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            setTimeout(() => {
              el.classList.add("is-revealed");
            }, delayMs);
          });
        });
      },
      { threshold }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [dir, delayMs, threshold]);

  return ref;
}
