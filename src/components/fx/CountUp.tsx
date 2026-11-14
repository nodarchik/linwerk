"use client";

import { useEffect } from "react";
import { prefersReducedMotion } from "@/lib/motion";

/** Counts each `.num-c[data-to]` figure up from 0 once `watch` comes into view (1.6s, eased). Reduced motion keeps
    the figure. */
export function CountUp({ watch, figures }: { watch: string; figures: string }) {
  useEffect(() => {
    const target = document.querySelector(watch);
    const els = Array.from(document.querySelectorAll<HTMLElement>(figures));
    if (!target || prefersReducedMotion()) return;
    const finals = els.map((el) => el.textContent);
    els.forEach((el) => (el.textContent = "0"));
    let frame = 0;
    const io = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting) return;
        io.disconnect();
        const t0 = performance.now();
        const MS = 1600;
        const step = (now: number) => {
          const k = Math.min(1, (now - t0) / MS);
          const e = 1 - Math.pow(1 - k, 3);
          els.forEach((el) => (el.textContent = String(Math.round(Number(el.dataset.to) * e))));
          if (k < 1) frame = requestAnimationFrame(step);
        };
        step(t0);
      },
      { threshold: 0.6 },
    );
    io.observe(target);
    return () => {
      io.disconnect();
      cancelAnimationFrame(frame);
      els.forEach((el, i) => (el.textContent = finals[i]));
    };
  }, [watch, figures]);

  return null;
}
