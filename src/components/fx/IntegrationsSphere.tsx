"use client";

import { useEffect } from "react";
import { bandPaths } from "@/lib/dot-sphere";
import { prefersReducedMotion } from "@/lib/motion";

const D = Math.PI / 180;
const BANDS = 6;
const STEP = 2.8;

interface Chip {
  el: HTMLLIElement;
  g: number;
  w: number;
  lat: number;
  lon: number;
}

/**
 * Integrations: an accordion (8s per group) drives a sphere of dots that carries the systems as chips, each group
 * scattered over its own face. Opening a group turns the sphere to that face in an eased move and lights its chips;
 * at rest it sways a little. Not interactive; the stage is as tall as the left column, so the sphere re-fits when
 * that changes.
 */
export function IntegrationsSphere({ section }: { section: string }) {
  useEffect(() => {
    const sec = document.getElementById(section);
    const box = sec?.querySelector<HTMLElement>(".iv-globe-box");
    const pins = box?.querySelector<HTMLElement>(".iv-pins");
    const svg = box?.querySelector<SVGSVGElement>(".iv-dots");
    const nowBox = sec?.querySelector<HTMLElement>(".int-now");
    if (!sec || !box || !pins || !svg || !nowBox) return;
    const ac = new AbortController();
    const { signal } = ac;
    const items = Array.from(sec.querySelectorAll<HTMLElement>(".path"));
    const back = bandPaths(
      svg.querySelector(".iv-back")!,
      1,
      () => 1.1,
      () => 0.12,
    );
    const front = bandPaths(
      svg.querySelector(".iv-front")!,
      BANDS,
      (k) => 1.2 + k,
      (k) => 0.18 + 0.34 * k,
    );
    const reduce = prefersReducedMotion();
    let R = 240;
    let lam = 0;
    let phi = 28;
    let cur = 0;
    let prev = -1;

    // the six faces: alternately above and below the equator, 60° apart, so each move is one step round
    const all: Chip[] = [];
    const groups = items.map((li, k) => {
      const chips = Array.from(li.querySelectorAll(".int-names li")).map((n) => {
        const el = document.createElement("li");
        el.textContent = n.textContent;
        el.style.opacity = "0";
        pins.appendChild(el);
        const chip: Chip = { el, g: k, w: 0, lat: 0, lon: 0 };
        all.push(chip);
        return chip;
      });
      return { lat: k % 2 ? -28 : 28, lon: k * 60, chips };
    });
    // latitude rows, as the About globe
    const dots: [number, number][] = [];
    for (let la = 90 - STEP / 2; la > -90; la -= STEP) {
      const n = Math.max(1, Math.round((360 * Math.cos(la * D)) / STEP));
      for (let j = 0; j < n; j++) dots.push([la, -180 + (360 * (j + 0.5)) / n]);
    }

    // a group's chips are scattered on a flat disc, then each spot is projected back onto the sphere around the
    // group's centre, so the scatter reads undistorted when the face is towards you
    function unproj(x: number, y: number, lat0: number, lon0: number): [number, number] {
      const rho = Math.sqrt(x * x + y * y);
      if (!rho) return [lat0, lon0];
      const c = Math.asin(Math.min(1, rho));
      const p0 = lat0 * D;
      const up = -y;
      return [
        Math.asin(Math.cos(c) * Math.sin(p0) + (up * Math.sin(c) * Math.cos(p0)) / rho) / D,
        lon0 +
          Math.atan2(
            x * Math.sin(c),
            rho * Math.cos(c) * Math.cos(p0) - up * Math.sin(c) * Math.sin(p0),
          ) /
            D,
      ];
    }
    function layout() {
      const w = box!.clientWidth;
      const h = box!.clientHeight;
      if (!w) return;
      R = Math.min(w, h) * 0.44;
      svg!.setAttribute("viewBox", `${-w / 2} ${-h / 2} ${w} ${h}`);
      // a loose scatter: each chip takes the best of 40 random spots on the face's disc, the one farthest from the
      // chips already placed without touching them; a fixed seed per group keeps the scatter the same on every load
      groups.forEach((g, gi) => {
        let seed = 7 + gi * 101;
        const rnd = () => {
          seed = (seed * 16807) % 2147483647;
          return (seed - 1) / 2147483646;
        };
        const placed: { x: number; y: number; w: number }[] = [];
        const RX = R * 0.9;
        const RY = R * 0.78;
        g.chips
          .slice()
          .sort((a, b) => b.el.offsetWidth - a.el.offsetWidth)
          .forEach((o) => {
            o.w = o.el.offsetWidth;
            const hh = 32;
            let best = { x: 0, y: 0, w: o.w };
            let bestD = -Infinity;
            for (let t = 0; t < 40; t++) {
              const a = rnd() * Math.PI * 2;
              const r = Math.sqrt(rnd());
              const x = Math.cos(a) * r * (RX - o.w / 2);
              const y = Math.sin(a) * r * (RY - hh / 2);
              let d = 1e9;
              placed.forEach((q) => {
                const gx = Math.abs(x - q.x) - (o.w + q.w) / 2 - 10;
                const gy = Math.abs(y - q.y) - hh - 8;
                d = Math.min(d, Math.max(gx, gy));
              });
              if (d > bestD) {
                bestD = d;
                best = { x, y, w: o.w };
              }
            }
            placed.push(best);
            const p = unproj(best.x / R, best.y / R, g.lat, g.lon);
            o.lat = p[0];
            o.lon = p[1];
          });
      });
    }

    function proj(lat: number, lon: number): [number, number, number] {
      const p = lat * D;
      const l = (lon - lam) * D;
      const p0 = phi * D;
      return [
        Math.cos(p) * Math.sin(l),
        -(Math.cos(p0) * Math.sin(p) - Math.sin(p0) * Math.cos(p) * Math.cos(l)),
        Math.sin(p0) * Math.sin(p) + Math.cos(p0) * Math.cos(p) * Math.cos(l),
      ];
    }
    function draw() {
      // only the open group's chips show; during a switch the group being left fades as its face turns away
      const near = groups.map((g) =>
        Math.max(0, Math.min(1, (proj(g.lat, g.lon)[2] - 0.55) / 0.3)),
      );
      all.forEach((o) => {
        const v = proj(o.lat, o.lon);
        const on = o.g === cur;
        let vis = Math.max(0, Math.min(1, (v[2] - 0.1) / 0.25));
        if (!on) vis = o.g === prev ? Math.min(vis, near[o.g]) : 0;
        o.el.style.transform = `translate(${(v[0] * R).toFixed(1)}px,${(v[1] * R).toFixed(1)}px) translate(-50%,-50%) scale(${(0.9 + 0.1 * vis).toFixed(3)})`;
        o.el.style.opacity = vis.toFixed(2);
        o.el.classList.toggle("is-back", vis === 0);
        o.el.style.zIndex = String(Math.round(v[2] * 100) + (on ? 300 : 100));
      });
      const out: string[] = Array(BANDS).fill("");
      let bk = "";
      dots.forEach((d) => {
        const v = proj(d[0], d[1]);
        const seg = `M${(v[0] * R).toFixed(1)} ${(v[1] * R).toFixed(1)}h0`;
        if (v[2] <= 0) bk += seg;
        else out[Math.min(BANDS - 1, (v[2] * BANDS) | 0)] += seg;
      });
      back.paths[0].setAttribute("d", bk);
      front.paths.forEach((p, i) => p.setAttribute("d", out[i]));
    }

    // the eased turn to a face (the shortest way round); the sway starts from where it lands
    let tween = 0;
    let raf = 0;
    let home = 0;
    function aim() {
      cancelAnimationFrame(tween);
      home = 0;
      const g = groups[cur];
      const l0 = lam;
      const p0 = phi;
      const dl = ((((g.lon - lam) % 360) + 540) % 360) - 180;
      const dp = g.lat - phi;
      if (reduce) {
        lam = l0 + dl;
        phi = g.lat;
        prev = -1;
        draw();
        return;
      }
      const t0 = performance.now();
      const MS = 900;
      const step = (now: number) => {
        const k = Math.min(1, (now - t0) / MS);
        const e = k < 0.5 ? 4 * k * k * k : 1 - Math.pow(-2 * k + 2, 3) / 2;
        lam = l0 + dl * e;
        phi = p0 + dp * e;
        draw();
        if (k < 1) tween = requestAnimationFrame(step);
        else {
          tween = 0;
          home = now;
          prev = -1;
          draw();
        }
      };
      step(t0);
    }
    // at rest on a face: a slow sway of a few degrees around it
    function sway() {
      if (reduce) return;
      const tick = (now: number) => {
        if (!tween && home) {
          const g = groups[cur];
          const t = (now - home) / 1000;
          const ease = Math.min(1, t / 1.5);
          lam = g.lon + ease * 5 * Math.sin(t * 0.9);
          phi = g.lat + ease * 3 * Math.sin(t * 0.6);
          draw();
        }
        raf = requestAnimationFrame(tick);
      };
      tick(performance.now());
    }

    // the open group's name and line on the right
    function caption(k: number) {
      nowBox!.querySelector("h3")!.textContent = items[k].querySelector(".t")?.textContent ?? "";
      nowBox!.querySelector("p")!.textContent =
        items[k].querySelector(".path-body p")?.textContent ?? "";
    }
    // the accordion (as on the home page): the open group's bar fills in 8s, then the next one opens
    function go(n: number) {
      prev = cur;
      cur = (n + items.length) % items.length;
      if (prev === cur) prev = -1;
      items.forEach((el, k) => {
        const on = k === cur;
        const bar = el.querySelector<HTMLElement>(".path-progress");
        el.classList.toggle("is-active", on);
        el.querySelector(".path-head")?.setAttribute("aria-expanded", String(on));
        if (bar) {
          bar.style.animation = "none";
          void bar.offsetWidth;
          bar.style.animation = "";
        }
      });
      all.forEach((o) => o.el.classList.toggle("on", o.g === cur));
      home = 0;
      aim();
      caption(cur);
      nowBox!.classList.remove("swap");
      void nowBox!.offsetWidth;
      nowBox!.classList.add("swap");
    }
    items.forEach((el, k) => {
      el.querySelector(".path-head")?.addEventListener("click", () => go(k), {
        signal,
      });
      el.querySelector(".path-progress")?.addEventListener(
        "animationend",
        () => {
          if (k === cur) go(k + 1);
        },
        { signal },
      );
    });
    sway(); // plays continuously, on screen or not
    // the stage follows the left column's height (an accordion item opening or closing changes it)
    let lastW = 0;
    let lastH = 0;
    const ro = new ResizeObserver(() => {
      const w = box.clientWidth;
      const h = box.clientHeight;
      if (w === lastW && h === lastH) return;
      lastW = w;
      lastH = h;
      layout();
      draw();
    });
    ro.observe(box);
    layout();
    lam = groups[0].lon;
    phi = groups[0].lat;
    caption(0);
    all.forEach((o) => o.el.classList.toggle("on", o.g === 0));
    draw();
    home = performance.now();
    document.fonts.ready.then(() => {
      if (signal.aborted) return;
      layout();
      draw();
    });

    return () => {
      ac.abort();
      ro.disconnect();
      cancelAnimationFrame(raf);
      cancelAnimationFrame(tween);
      back.remove();
      front.remove();
      all.forEach((o) => o.el.remove());
    };
  }, [section]);

  return null;
}
