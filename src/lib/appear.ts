/* Scroll appear: every block (heading, line, button, card, picture, scene) below the opening screen rises 16px and
   fades in over 550ms on a decelerating curve when its top is 12% above the bottom of the window; a batch staggers
   60ms per element, 400ms at most.
   - only opacity and the CSS `translate` property (Web Animations API), so an element's own transform, transitions
     and hover states are untouched, and the work stays on the compositor;
   - plays once per element; whatever is on screen (or above it) when the page opens is shown as it is;
   - text with its own letter appear (data-reveal) keeps that, and is not moved;
   - decorative layers (absolutely positioned), hidden panels and the insides of pictures / scenes are left alone;
   - a box that scrolls on its own appears as one block;
   - reduced motion: nothing moves or hides.
   The [data-ap-wait] rule is in globals.css. */
import { prefersReducedMotion, type Cleanup } from "./motion";

const OUT = "cubic-bezier(.22,1,.36,1)";
const TEXT =
  "h1,h2,h3,h4,h5,h6,p,dt,dd,label,blockquote,figcaption,input,select,textarea,.btn,.tlink,.tag,.mono";
const MEDIA = "img,svg,video,canvas,picture,iframe";
const FRAMES: Keyframe[] = [
  { opacity: 0, translate: "0 16px" },
  { opacity: 1, translate: "0 0" },
];

function shown(el: Element, cs: CSSStyleDeclaration) {
  return cs.display !== "none" && cs.visibility !== "hidden" && el.getClientRects().length > 0;
}

// a card or panel: its own fill, edge or shadow
function surface(cs: CSSStyleDeclaration) {
  return (
    (!!cs.backgroundColor && !/rgba?\(0, 0, 0, 0\)|transparent/.test(cs.backgroundColor)) ||
    cs.boxShadow !== "none" ||
    parseFloat(cs.borderTopWidth) + parseFloat(cs.borderLeftWidth) > 0 ||
    cs.backgroundImage !== "none"
  );
}

// words of its own beside child elements (a FAQ question with its +/− mark)
function ownText(el: Element) {
  for (let n = el.firstChild; n; n = n.nextSibling) {
    if (n.nodeType === 3 && /\S/.test(n.nodeValue ?? "")) return true;
  }
  return false;
}

// walk a section down to its blocks: text, media, surfaces (cards, stages) and childless leaves are blocks
function collect(el: Element, out: HTMLElement[]) {
  for (const c of Array.from(el.children) as HTMLElement[]) {
    if (
      c.matches("script,style,template,br") ||
      c.hasAttribute("data-reveal") ||
      c.closest("[data-appear-skip]")
    )
      continue;
    const cs = getComputedStyle(c);
    if (!shown(c, cs) || cs.position === "absolute" || cs.position === "fixed") continue;
    // a box that scrolls on its own (the Careers roles list) is one block
    const scrolls = /auto|scroll/.test(cs.overflowY);
    if (
      scrolls ||
      c.matches(TEXT) ||
      c.matches(MEDIA) ||
      !c.children.length ||
      ownText(c) ||
      (surface(cs) && c.offsetHeight > 40)
    )
      out.push(c);
    else collect(c, out);
  }
}

function play(batch: HTMLElement[]) {
  batch.sort((a, b) => {
    const ra = a.getBoundingClientRect();
    const rb = b.getBoundingClientRect();
    return ra.top - rb.top || ra.left - rb.left;
  });
  batch.forEach((el, i) => {
    el.removeAttribute("data-ap-wait");
    el.animate(FRAMES, { duration: 550, easing: OUT, delay: Math.min(i * 60, 400), fill: "backwards" });
  });
}

export function startAppear(): Cleanup {
  const main = document.querySelector("main");
  if (!main || prefersReducedMotion() || !Element.prototype.animate) return () => {};
  const targets: HTMLElement[] = [];
  for (const sec of Array.from(main.children)) if (sec.matches("section")) collect(sec, targets);

  const vh = window.innerHeight;
  // on screen or above it: shown as it is
  let waiting = targets.filter((el) => el.getBoundingClientRect().top >= vh * 0.88);
  if (!waiting.length) return () => {};
  const all = waiting;
  all.forEach((el) => el.setAttribute("data-ap-wait", ""));

  // a plain position check on scroll (throttled to ~20 per second), not an IntersectionObserver: it cannot be
  // skipped, so nothing is ever left hidden
  let timer = 0;
  const stop = () => {
    window.clearTimeout(timer);
    window.removeEventListener("scroll", onScroll, true);
    window.removeEventListener("resize", onScroll);
  };
  const check = () => {
    timer = 0;
    const line = window.innerHeight * 0.88;
    const batch: HTMLElement[] = [];
    waiting = waiting.filter((el) => {
      if (el.getBoundingClientRect().top < line) {
        batch.push(el);
        return false;
      }
      return true;
    });
    if (batch.length) play(batch);
    if (!waiting.length) stop();
  };
  function onScroll() {
    if (!timer) timer = window.setTimeout(check, 50);
  }
  // capture: inner scroll boxes count too
  window.addEventListener("scroll", onScroll, { passive: true, capture: true });
  window.addEventListener("resize", onScroll);

  return () => {
    stop();
    all.forEach((el) => el.removeAttribute("data-ap-wait"));
  };
}
