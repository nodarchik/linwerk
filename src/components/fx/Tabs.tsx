"use client";

import { useEffect } from "react";

/** Wires a server-rendered `role="tablist"`: a click or the arrow keys pick a tab and show its panel. */
export function Tabs({ tablist }: { tablist: string }) {
  useEffect(() => {
    const tabs = Array.from(document.querySelectorAll<HTMLElement>(`${tablist} [role="tab"]`));
    const ac = new AbortController();
    const { signal } = ac;
    function pick(tab: HTMLElement) {
      for (const x of tabs) {
        const on = x === tab;
        x.setAttribute("aria-selected", String(on));
        x.tabIndex = on ? 0 : -1;
        const panel = document.getElementById(x.getAttribute("aria-controls") ?? "");
        if (panel) panel.hidden = !on;
      }
    }
    tabs.forEach((tab, i) => {
      tab.addEventListener("click", () => pick(tab), { signal });
      tab.addEventListener(
        "keydown",
        (e) => {
          if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
          const next = tabs[(i + (e.key === "ArrowRight" ? 1 : tabs.length - 1)) % tabs.length];
          pick(next);
          next.focus();
        },
        { signal },
      );
    });
    return () => ac.abort();
  }, [tablist]);

  return null;
}
