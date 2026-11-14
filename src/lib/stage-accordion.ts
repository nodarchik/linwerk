/* Accordion with a stage: the open item auto-advances when its hairline fills (8s); a click opens one. The stage
   shows the open item's layer; each layer's interface pictures (.sc scenes) play once, from the top, when it opens.
   It waits until the section first comes into view, then plays continuously: scrolling away never pauses or restarts
   it. */
import type { Cleanup } from "./motion";
import { mountScene, type Scene } from "./ui-scene";

export function stageAccordion(sec: HTMLElement, sceneSelector: string): Cleanup {
  const ac = new AbortController();
  const { signal } = ac;
  const items = Array.from(sec.querySelectorAll<HTMLElement>(".path"));
  const layers = Array.from(sec.querySelectorAll<HTMLElement>(".stage-layer"));
  const scenes = layers.map((l) =>
    Array.from(l.querySelectorAll<HTMLElement>(sceneSelector)).map(
      (el): { el: HTMLElement; s: Scene } => ({ el, s: mountScene(el) }),
    ),
  );
  let cur = 0;
  let seen = false; // nothing plays before the section is first seen

  const dots = document.createElement("div");
  dots.className = "stage-dots";
  sec.querySelector(".path-stage")?.appendChild(dots);
  layers.forEach((_, k) => {
    const d = document.createElement("button");
    d.type = "button";
    d.tabIndex = -1;
    d.setAttribute("aria-label", `Show item ${k + 1}`);
    d.addEventListener("click", () => go(k), { signal });
    dots.appendChild(d);
  });

  function playScenes(k: number) {
    scenes.forEach((list, i) =>
      list.forEach((o) => {
        o.s.pause();
        if (i === k && o.el.offsetParent !== null) o.s.restart();
      }),
    );
  }

  function go(n: number, entering = false) {
    cur = (n + items.length) % items.length;
    items.forEach((el, k) => {
      const on = k === cur;
      const bar = el.querySelector<HTMLElement>(".path-progress");
      el.classList.toggle("is-active", on);
      el.querySelector(".path-head")?.setAttribute("aria-expanded", String(on));
      if (bar) {
        // restart the timer
        bar.style.animation = "none";
        void bar.offsetWidth;
        bar.style.animation = "";
      }
      layers[k]?.classList.toggle("is-active", on);
      dots.children[k]?.setAttribute("aria-current", String(on));
    });
    if (entering) seen = true;
    if (seen) playScenes(cur);
  }

  items.forEach((el, k) => {
    el.querySelector(".path-head")?.addEventListener("click", () => go(k), { signal });
    el.querySelector(".path-progress")?.addEventListener(
      "animationend",
      () => {
        if (k === cur) go(k + 1);
      },
      { signal },
    );
  });

  sec.classList.add("is-paused");
  go(0);
  const io = new IntersectionObserver(
    (e) => {
      if (!e[0].isIntersecting) return;
      io.disconnect();
      sec.classList.remove("is-paused");
      go(0, true);
    },
    { rootMargin: "-35% 0px -35% 0px" },
  );
  io.observe(sec);

  return () => {
    ac.abort();
    io.disconnect();
    dots.remove();
    scenes.forEach((list) => list.forEach((o) => o.s.pause()));
  };
}
