/**
 * useScrollReveal — Triggers CSS reveal animations on scroll using IntersectionObserver
 * Adds 'visible' class to elements with 'reveal' class when they enter the viewport
 */

import { useEffect, useRef } from "react";

export function useScrollReveal(threshold = 0.15) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const revealEls = entry.target.querySelectorAll(".reveal");
            revealEls.forEach((item, i) => {
              setTimeout(() => {
                (item as HTMLElement).classList.add("visible");
              }, i * 80);
            });
          }
        });
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref };
}
