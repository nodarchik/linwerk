/* The animated interface pictures. A scene is plain markup built once. Its timeline is a list of steps in its
   data-steps attribute, "name:delay name:delay …" (delay in ms after the step before). One class per step is added
   to the scene, cumulatively; the CSS moves things with transform and opacity transitions only.

     data-loop   start again after data-hold ms (default 2600): the content fades (.ui-out), the classes are cleared
                 without transitions (.ui-snap), and it plays from the top

   While a scene plays it has .ui-live (the CSS pauses its looping animations otherwise).
   Reduced motion: every step is applied at once and nothing loops. */
import { prefersReducedMotion, type Cleanup } from "./motion";

export interface Scene {
  play(): void;
  /** Keeps the place: play() after it carries on with what was left of the step it was waiting for. */
  pause(): void;
  restart(): void;
  finish(): void;
}

const scenes = new WeakMap<HTMLElement, Scene>();

export function mountScene(el: HTMLElement): Scene {
  const known = scenes.get(el);
  if (known) return known;

  const steps = (el.getAttribute("data-steps") ?? "")
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .map((s): [string, number] => {
      const p = s.split(":");
      return [p[0], +p[1] || 0];
    });
  const loop = el.hasAttribute("data-loop");
  const hold = Number(el.getAttribute("data-hold")) || 2600;
  let i = 0;
  let timer = 0;
  let on = false;
  let due = 0;
  let left = -1; // what was still to wait for the next step when paused

  // typed code lines: --n = characters, for the stepped reveal (monospace, 1ch per character)
  el.querySelectorAll<HTMLElement>(".tx").forEach((t) => {
    t.style.setProperty("--n", String((t.textContent ?? "").length));
  });

  function clear() {
    el.classList.add("ui-snap");
    steps.forEach((s) => el.classList.remove(s[0]));
    void el.offsetWidth;
    el.classList.remove("ui-snap");
    i = 0;
  }
  function next() {
    if (!on) return;
    if (i < steps.length) {
      const wait = left >= 0 ? left : steps[i][1];
      left = -1;
      due = Date.now() + wait;
      timer = window.setTimeout(() => {
        timer = 0;
        el.classList.add(steps[i][0]);
        i++;
        next();
      }, wait);
    } else if (loop) {
      timer = window.setTimeout(() => {
        el.classList.add("ui-out");
        timer = window.setTimeout(() => {
          clear();
          timer = window.setTimeout(() => {
            el.classList.remove("ui-out");
            next();
          }, 60);
        }, 450);
      }, hold);
    }
  }
  function finish() {
    window.clearTimeout(timer);
    steps.forEach((s) => el.classList.add(s[0]));
    i = steps.length;
  }
  const api: Scene = {
    play() {
      if (on) return;
      if (prefersReducedMotion()) {
        finish();
        return;
      }
      on = true;
      el.classList.add("ui-live");
      next();
    },
    pause() {
      if (on && timer && i < steps.length) left = Math.max(0, due - Date.now());
      on = false;
      window.clearTimeout(timer);
      timer = 0;
      el.classList.remove("ui-live");
    },
    restart() {
      api.pause();
      left = -1;
      el.classList.remove("ui-out");
      clear();
      api.play();
    },
    finish,
  };
  scenes.set(el, api);
  return api;
}

/** Scale each .ui-fit (a fixed design size, data-w) to its box by setting --k on the box. */
export function fitScenes(selector: string, root: ParentNode = document): Cleanup {
  const ro = new ResizeObserver((entries) => {
    for (const e of entries) set(e.target as HTMLElement);
  });
  const boxes = new Map<HTMLElement, number>();
  function set(box: HTMLElement) {
    const w = boxes.get(box);
    if (w) box.style.setProperty("--k", (box.clientWidth / w).toFixed(4));
  }
  root.querySelectorAll<HTMLElement>(selector).forEach((f) => {
    const box = f.parentElement;
    if (!box) return;
    boxes.set(box, Number(f.getAttribute("data-w")));
    ro.observe(box);
    set(box);
  });
  const onResize = () => boxes.forEach((_, box) => set(box));
  window.addEventListener("resize", onResize);
  return () => {
    ro.disconnect();
    window.removeEventListener("resize", onResize);
  };
}
