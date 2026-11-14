"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

function toTop() {
  const id = decodeURIComponent(window.location.hash.slice(1));
  if (id && document.getElementById(id)) return;
  window.lenis?.scrollTo(0, { immediate: true, force: true });
  window.scrollTo(0, 0);
}

/**
 * The smooth ("lazy") scroll on every page: Lenis with lerp 0.1, loaded after hydration. Every page opens at the
 * top unless its address has a #target. Reduced motion: native scroll, still from the top.
 */
export function SmoothScroll() {
  const pathname = usePathname();

  useEffect(() => {
    if ("scrollRestoration" in history) history.scrollRestoration = "manual";
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let frame = 0;
    let cancelled = false;
    import("lenis").then(({ default: Lenis }) => {
      if (cancelled) return;
      const lenis = (window.lenis = new Lenis({ lerp: 0.1 }));
      const raf = (t: number) => {
        lenis.raf(t);
        frame = requestAnimationFrame(raf);
      };
      frame = requestAnimationFrame(raf);
    });
    return () => {
      cancelled = true;
      cancelAnimationFrame(frame);
      window.lenis?.destroy();
      window.lenis = undefined;
    };
  }, []);

  useEffect(() => {
    toTop();
    // again once everything has loaded, unless the visitor has already started to scroll
    const ac = new AbortController();
    let moved = false;
    for (const type of ["wheel", "touchstart", "keydown", "pointerdown"]) {
      window.addEventListener(type, () => (moved = true), {
        once: true,
        passive: true,
        signal: ac.signal,
      });
    }
    if (document.readyState !== "complete") {
      window.addEventListener("load", () => !moved && toTop(), {
        signal: ac.signal,
      });
    }
    window.addEventListener("pageshow", (e) => e.persisted && toTop(), {
      signal: ac.signal,
    });
    return () => ac.abort();
  }, [pathname]);

  return null;
}
