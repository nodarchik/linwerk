/* FAQ: animate <details> open and close instead of the instant jump. The browser still owns the open state; this
   only eases the height between the closed and open sizes. */
import type { Cleanup } from "./motion";

const EASE = "cubic-bezier(.4,0,.2,1)";
const MS = 520;

export function animateFaq(selector = ".faq-item"): Cleanup {
  const ac = new AbortController();
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
  document.querySelectorAll<HTMLDetailsElement>(selector).forEach((item) => {
    const q = item.querySelector("summary");
    const a = item.querySelector("p");
    if (!q || !a) return;
    let anim: Animation | null = null;
    function run(from: number, to: number, done: () => void) {
      anim?.cancel();
      item.style.overflow = "hidden";
      const me = (anim = item.animate(
        { height: [`${from}px`, `${to}px`] },
        { duration: MS, easing: EASE, fill: "forwards" },
      ));
      me.onfinish = () => {
        done();
        item.style.overflow = "";
        me.cancel();
      };
      me.oncancel = () => {
        if (anim === me) anim = null;
      };
    }
    q.addEventListener(
      "click",
      (e) => {
        if (reduce.matches || !item.animate) return;
        e.preventDefault();
        const now = item.offsetHeight;
        const edge = item.offsetHeight - item.clientHeight;
        if (item.open && !item.classList.contains("is-closing")) {
          item.classList.add("is-closing");
          run(now, q.offsetHeight + edge, () => {
            item.open = false;
            item.classList.remove("is-closing");
          });
        } else {
          item.classList.remove("is-closing");
          item.open = true;
          a.style.opacity = "0";
          const full = q.offsetHeight + a.offsetHeight + edge;
          requestAnimationFrame(() => {
            a.style.opacity = "";
          });
          run(now, full, () => {});
        }
      },
      { signal: ac.signal },
    );
  });
  return () => ac.abort();
}
