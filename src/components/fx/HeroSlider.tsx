"use client";

import { useEffect } from "react";
import { prefersReducedMotion } from "@/lib/motion";

const WORD = 4200; // each service name and its drawing
const FACE = 3200; // each person on the Match card

/**
 * Home hero slider: slide 1 = staffing, slide 2 = services; they switch by themselves, the arrows step. One clock
 * for everything: the services slide shows each name and its drawing once, the staffing slide shows each person
 * once. The clock pauses with a hidden tab and resumes where it stopped; scrolling never pauses it.
 */
export function HeroSlider() {
  useEffect(() => {
    const box = document.getElementById("hero-slides");
    const rot = box?.querySelector<HTMLElement>(".hs-rot");
    const trk = box?.querySelector<HTMLElement>(".hn-trk");
    if (!box || !rot || !trk) return;
    const ac = new AbortController();
    const { signal } = ac;
    const slides = Array.from(box.querySelectorAll<HTMLElement>(".hero-slide"));
    const nums = Array.from(box.querySelectorAll<HTMLElement>(".hn-num"));
    const words = Array.from(rot.children) as HTMLElement[];
    const pics = Array.from(box.querySelectorAll<HTMLElement>(".hs-pic"));
    const faceImgs = Array.from(box.querySelectorAll<HTMLElement>(".hp-img"));
    const faceRoles = Array.from(box.querySelectorAll<HTMLElement>(".hp-role"));
    const faces = faceImgs.length;
    const reduce = prefersReducedMotion();

    let cur = 0;
    let w = 0;
    let seen = true;
    const isServices = (k: number) => slides[k].id === "hs-2";
    const duration = (k: number) => (isServices(k) ? WORD * words.length : FACE * faces);

    // the roll is as tall as its tallest name
    function size() {
      let h = 0;
      words.forEach((s) => (h = Math.max(h, s.offsetHeight)));
      if (h) rot!.style.setProperty("--rot-h", `${h}px`);
    }
    function word(k: number) {
      words.forEach((s, i) => {
        s.classList.toggle("is-on", i === k);
        s.classList.toggle("is-out", i === w && i !== k);
      });
      pics.forEach((p) => p.classList.toggle("is-on", Number(p.dataset.k) === k));
      w = k;
    }
    function face(k: number) {
      faceImgs.forEach((el, i) => el.classList.toggle("is-active", i === k));
      faceRoles.forEach((el, i) => el.classList.toggle("is-active", i === k));
    }

    // `elapsed` is the time already played on this slide; each change is a timer at its own time on the slide, so a
    // resume only schedules what is still ahead.
    let elapsed = 0;
    let from = 0;
    let running = false;
    let timers: number[] = [];
    function stop() {
      if (running) elapsed += performance.now() - from;
      running = false;
      timers.forEach(clearTimeout);
      timers = [];
    }
    function at(t: number, fn: () => void) {
      if (t > elapsed) timers.push(window.setTimeout(fn, t - elapsed));
    }
    function run() {
      if (running || reduce || !seen) return;
      running = true;
      from = performance.now();
      at(duration(cur), () => go(cur + 1));
      if (isServices(cur)) for (let i = 1; i < words.length; i++) at(WORD * i, () => word(i));
      else for (let j = 1; j < faces; j++) at(FACE * j, () => face(j));
    }
    function go(n: number) {
      cur = (n + slides.length) % slides.length;
      slides.forEach((s, i) => {
        const on = i === cur;
        s.classList.toggle("is-on", on);
        s.setAttribute("aria-hidden", String(!on));
        s.inert = !on;
      });
      nums.forEach((el, i) => el.classList.toggle("is-on", i === cur));
      box!.style.setProperty("--hs-ms", `${duration(cur)}ms`);
      if (isServices(cur)) {
        // from the first name, and the drawing drawn in afresh
        words.forEach((s) => s.classList.remove("is-out"));
        pics.forEach((p) => p.classList.remove("is-on"));
        void box!.offsetWidth;
        w = 0;
        word(0);
      } else face(0); // the people from the first one
      stop();
      elapsed = 0; // a new slide: its clock and the timeline from the start
      trk!.classList.remove("run");
      void trk!.offsetWidth;
      trk!.classList.add("run");
      run();
    }

    box.querySelector(".hn-prev")?.addEventListener("click", () => go(cur - 1), { signal });
    box
      .querySelector(".hn-arr:not(.hn-prev)")
      ?.addEventListener("click", () => go(cur + 1), { signal });
    document.addEventListener(
      "visibilitychange",
      () => {
        seen = !document.hidden;
        box.classList.toggle("is-paused", !seen);
        if (seen) run();
        else stop();
      },
      { signal },
    );
    window.addEventListener("resize", size, { signal });
    document.fonts.ready.then(() => !signal.aborted && size());
    size();
    go(0);

    return () => {
      ac.abort();
      stop();
    };
  }, []);

  return null;
}
