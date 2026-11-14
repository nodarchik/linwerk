/* Text appear: the text sharpens in from a soft blur, letter by letter from left to right. Each letter fades from
   0 opacity and blur(10px) to sharp; the delays are spread so a whole block takes about 0.8s, however long it is.
   Needs the .rv-* rules in globals.css. Reduced motion: the text is just there. */
import type { Cleanup } from "./motion";

const SPAN = 800; // ms from the first letter to the last
const MAX_STEP = 22; // ms between letters, at most

/** Wrap the letters once (words stay unbreakable). */
export function split(el: HTMLElement) {
  if (el.getAttribute("data-rv")) return;
  const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT);
  const nodes: Text[] = [];
  let n: Node | null;
  while ((n = walker.nextNode())) nodes.push(n as Text);
  let i = 0;
  for (const node of nodes) {
    const frag = document.createDocumentFragment();
    for (const part of (node.nodeValue ?? "").split(/(\s+)/)) {
      if (!part) continue;
      if (/^\s+$/.test(part)) {
        frag.appendChild(document.createTextNode(" "));
        continue;
      }
      const w = document.createElement("span");
      w.className = "rv-w";
      // code points: emoji stay whole
      for (const ch of Array.from(part)) {
        const c = document.createElement("span");
        c.className = "rv-c";
        c.textContent = ch;
        c.style.setProperty("--i", String(i++));
        w.appendChild(c);
      }
      frag.appendChild(w);
    }
    node.parentNode?.replaceChild(frag, node);
  }
  el.setAttribute("data-rv", String(i));
  el.style.setProperty("--rv-step", `${Math.min(MAX_STEP, SPAN / Math.max(1, i))}ms`);
  el.setAttribute("aria-label", el.textContent ?? "");
}

export function hide(el: HTMLElement) {
  split(el);
  el.classList.remove("rv-on");
}

export function play(el: HTMLElement, delay = 0) {
  split(el);
  el.style.setProperty("--rv-delay", `${delay}ms`);
  el.classList.remove("rv-on");
  void el.offsetWidth; // restart from blurred
  el.classList.add("rv-on");
}

/** Play each match once it scrolls into view. */
export function observe(selector: string): Cleanup {
  const els = Array.from(document.querySelectorAll<HTMLElement>(selector));
  els.forEach(hide);
  const io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (e.isIntersecting) {
          play(e.target as HTMLElement);
          io.unobserve(e.target);
        }
      }
    },
    { threshold: 0.4 },
  );
  els.forEach((el) => io.observe(el));
  return () => io.disconnect();
}
