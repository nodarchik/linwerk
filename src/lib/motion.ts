export function prefersReducedMotion(): boolean {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export type Cleanup = () => void;

/** Scroll to an element, leaving `offset` px for the sticky header. Uses the smooth scroller when it is running. */
export function scrollToTarget(target: Element, offset: number) {
  const y = target.getBoundingClientRect().top + window.scrollY - offset;
  if (window.lenis) window.lenis.scrollTo(y);
  else window.scrollTo({ top: y, behavior: "smooth" });
}

declare global {
  interface Window {
    lenis?: import("lenis").default;
  }
}
