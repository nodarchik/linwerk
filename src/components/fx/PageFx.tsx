"use client";

import { useEffect, useLayoutEffect } from "react";
import { startAppear } from "@/lib/appear";
import { animateFaq } from "@/lib/faq";
import { mountHeroTrail } from "@/lib/hero-trail";
import { scrollToTarget } from "@/lib/motion";
import { observe } from "@/lib/reveal";

interface PageFxProps {
  /** Letter-by-letter text appear on every [data-reveal]. */
  reveal?: boolean;
  /** Blocks below the opening screen rise and fade in as they are scrolled to. */
  appear?: boolean;
  /** Ease the FAQ <details> open and closed. */
  faq?: boolean;
  /** Section ids whose dotted sky leaves a trail behind the pointer. */
  trails?: readonly string[];
  /** In-page links matching this selector land `offset` px below the top, clear of the sticky header. */
  anchors?: { selector: string; offset: number };
  /** Pictures that stay hidden over their blurred preview until they have loaded and decoded. */
  lazyImages?: string;
}

// Layout effects cannot run on the server; the page's first paint is the server HTML either way.
const useIsomorphicLayoutEffect = typeof window === "undefined" ? useEffect : useLayoutEffect;

/**
 * The page-wide motion every page shares, attached to the server-rendered markup after hydration. Render it last
 * in a page so it sees what the page's own effects have set up.
 */
export function PageFx({ reveal, appear, faq, trails, anchors, lazyImages }: PageFxProps) {
  const trailKey = trails?.join(",");
  const anchorSelector = anchors?.selector;
  const anchorOffset = anchors?.offset ?? 0;

  useEffect(() => {
    if (!lazyImages) return;
    const ac = new AbortController();
    document.querySelectorAll<HTMLImageElement>(lazyImages).forEach((img) => {
      if (img.complete && img.naturalWidth) return;
      img.classList.add("lq-wait");
      const show = () => img.classList.remove("lq-wait");
      img.addEventListener("load", () => img.decode().then(show, show), {
        signal: ac.signal,
      });
      img.addEventListener("error", show, { signal: ac.signal });
    });
    return () => ac.abort();
  }, [lazyImages]);

  useEffect(() => {
    if (!trailKey) return;
    const stops = trailKey.split(",").map((id) => {
      const hero = document.getElementById(id);
      return mountHeroTrail(hero?.querySelector<HTMLElement>(".hb-trail") ?? null, hero);
    });
    return () => stops.forEach((stop) => stop());
  }, [trailKey]);

  useEffect(() => {
    if (!anchorSelector) return;
    const ac = new AbortController();
    document.querySelectorAll<HTMLAnchorElement>(anchorSelector).forEach((a) => {
      a.addEventListener(
        "click",
        (e) => {
          const href = a.getAttribute("href") ?? "";
          const target = href.length > 1 ? document.querySelector(href) : null;
          if (!target) return;
          e.preventDefault();
          scrollToTarget(target, anchorOffset);
          history.replaceState(null, "", href);
        },
        { signal: ac.signal },
      );
    });
    return () => ac.abort();
  }, [anchorSelector, anchorOffset]);

  useIsomorphicLayoutEffect(() => {
    if (reveal) return observe("[data-reveal]");
  }, [reveal]);

  useEffect(() => {
    if (faq) return animateFaq();
  }, [faq]);

  useIsomorphicLayoutEffect(() => {
    if (appear) return startAppear();
  }, [appear]);

  return null;
}
