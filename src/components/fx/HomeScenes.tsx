"use client";

import { useEffect } from "react";
import { prefersReducedMotion } from "@/lib/motion";
import { stageAccordion } from "@/lib/stage-accordion";
import { fitScenes, mountScene } from "@/lib/ui-scene";

/** The code scene types letter by letter: when the scene adds t<n>, line n's --x walks through the measured end of
    each character, 28ms apart; when the class goes (the loop restarts) it resets. */
function typeCode(sc: HTMLElement) {
  const reduce = prefersReducedMotion();
  const lines = [1, 2, 3, 4, 5].flatMap((n) => {
    const tx = sc.querySelector<HTMLElement>(`.l${n} .tx`);
    return tx ? [{ n, tx, timer: 0, on: false }] : [];
  });
  function ends(tx: HTMLElement) {
    const box = tx.getBoundingClientRect();
    const k = box.width / tx.offsetWidth || 1;
    const xs: number[] = [];
    const range = document.createRange();
    const walker = document.createTreeWalker(tx, NodeFilter.SHOW_TEXT);
    let node: Node | null;
    while ((node = walker.nextNode())) {
      for (let i = 0; i < (node as Text).length; i++) {
        range.setStart(node, i);
        range.setEnd(node, i + 1);
        xs.push((range.getBoundingClientRect().right - box.left) / k);
      }
    }
    return xs;
  }
  function type(line: (typeof lines)[number]) {
    const xs = ends(line.tx);
    if (reduce || !xs.length) {
      line.tx.style.setProperty("--x", `${line.tx.offsetWidth}px`);
      return;
    }
    let i = 0;
    (function next() {
      line.tx.style.setProperty("--x", `${xs[i].toFixed(1)}px`);
      if (++i < xs.length) line.timer = window.setTimeout(next, 28);
    })();
  }
  function sync() {
    for (const line of lines) {
      const want = sc.classList.contains(`t${line.n}`);
      if (want && !line.on) {
        line.on = true;
        type(line);
      } else if (!want && line.on) {
        line.on = false;
        clearTimeout(line.timer);
        line.tx.style.setProperty("--x", "0px");
      }
    }
  }
  const mo = new MutationObserver(sync);
  mo.observe(sc, { attributes: true, attributeFilter: ["class"] });
  sync();
  return () => {
    mo.disconnect();
    lines.forEach((line) => clearTimeout(line.timer));
  };
}

/** The column 03 chat: the first message is there from the start, the rest come in one by one, hold, then the chat
    starts over. Reduced motion: all bubbles shown, no loop. */
function loopChat(chat: HTMLElement) {
  const items = Array.from(chat.children) as HTMLElement[];
  const GAPS = [0, 1500, 1100, 300, 1600];
  const HOLD = 3600;
  if (prefersReducedMotion()) {
    items.forEach((w) => w.classList.add("in"));
    return () => {};
  }
  let timer = 0;
  let i = 0;
  function place() {
    let rest = 0;
    for (let k = i; k < items.length; k++) rest += items[k].offsetHeight;
    chat.style.transform = `translateY(${rest}px)`;
  }
  // show the first message at once (no transition), the others hidden below it
  function first() {
    chat.classList.add("out");
    items[0].classList.add("in");
    i = 1;
    place();
    void chat.offsetHeight;
    chat.classList.remove("out");
  }
  function step() {
    if (i < items.length) {
      items[i].classList.add("in");
      i++;
      place();
      timer = window.setTimeout(step, GAPS[i] || HOLD);
      return;
    }
    chat.classList.add("out");
    items.forEach((w) => w.classList.remove("in"));
    first();
    timer = window.setTimeout(step, GAPS[i]);
  }
  first();
  window.addEventListener("resize", place);
  timer = window.setTimeout(step, GAPS[i] || HOLD);
  return () => {
    clearTimeout(timer);
    window.removeEventListener("resize", place);
    items.forEach((w) => w.classList.remove("in"));
  };
}

/**
 * The home page's interface pictures: each is scaled to its box; How we work loops; The capability behind the
 * people and Why teams choose us are accordions whose open item's picture plays once.
 */
export function HomeScenes() {
  useEffect(() => {
    const stops = [fitScenes(".ui-fit")];
    // How we work plays continuously, on screen or not
    const how = Array.from(document.querySelectorAll<HTMLElement>(".how .sc")).map(mountScene);
    how.forEach((s) => s.play());
    stops.push(() => how.forEach((s) => s.pause()));

    const cap = document.getElementById("what-we-do");
    if (cap) stops.push(stageAccordion(cap, ".sc"));
    const why = document.getElementById("why-us");
    if (why) stops.push(stageAccordion(why, ".wf .sc"));

    const code = document.querySelector<HTMLElement>(".sc-team");
    if (code) stops.push(typeCode(code));
    const chat = document.querySelector<HTMLElement>("#how-we-work .hc-chat");
    if (chat) stops.push(loopChat(chat));

    return () => stops.forEach((stop) => stop());
  }, []);

  return null;
}
