"use client";

import { useEffect } from "react";
import { bandPaths } from "@/lib/dot-sphere";
import { prefersReducedMotion } from "@/lib/motion";

type Vec = [number, number, number];
const D = Math.PI / 180;
const BANDS = 6;
const HOT = 4;
// pulses: a new one every EVERY ms at a random land dot well inside the near side
const LIFE = 3200;
const EVERY = 1400;
const MAXR = 11;

/**
 * Where we are: a see-through globe of land dots in latitude rows, no grid and no rim. Near-side dots grow and
 * strengthen towards the viewer (six depth bands, one SVG path each); the far side shows faintly through. Every
 * ~1.4s a small ring of darker, larger dots opens at a random land point on the near side. Turns slowly (4°/s) and
 * by drag (a little inertia); runs only while on screen, ~30 fps at rest. Reduced motion: still, no pulses; dragging
 * works. The land data (29 KB) is loaded on demand.
 */
export function DotGlobe({ box: boxSelector }: { box: string }) {
  useEffect(() => {
    const box = document.querySelector<HTMLElement>(boxSelector);
    const svg = box?.querySelector("svg");
    if (!box || !svg) return;
    const ac = new AbortController();
    const { signal } = ac;
    const stops: (() => void)[] = [() => ac.abort()];

    import("@/data/globe-dots").then(({ LAND }) => {
      if (signal.aborted) return;
      const back = bandPaths(
        svg.querySelector(".g-back")!,
        1,
        () => 1.1,
        () => 0.2,
      );
      const bands = bandPaths(
        svg.querySelector(".g-land")!,
        BANDS,
        (k) => 1.2 + k,
        (k) => 0.3 + 0.55 * k,
      );
      const hot = bandPaths(
        svg.querySelector(".g-hot")!,
        HOT,
        (k) => 2 + 1.1 * k,
        (k) => 0.3 + 0.7 * k,
      );
      stops.push(back.remove, bands.remove, hot.remove);

      const vec = (lat: number, lon: number): Vec => [
        Math.cos(lat * D) * Math.cos(lon * D),
        Math.sin(lat * D),
        Math.cos(lat * D) * Math.sin(lon * D),
      ];
      const a = LAND.split(",").map(Number);
      const land: Vec[] = [];
      for (let i = 0; i < a.length; i += 2) land.push(vec(a[i] / 10, a[i + 1] / 10));

      let R = 200;
      let lam = 20;
      let tilt = 28;
      const reduce = prefersReducedMotion();
      function fit() {
        const w = box!.clientWidth;
        R = w * 0.45;
        svg!.setAttribute("viewBox", `${-w / 2} ${-w / 2} ${w} ${w}`);
      }
      // a point (x, y, z, y up) to the screen: turn by lam round the axis, tip the north pole by tilt towards the viewer
      let cl = 1;
      let sl = 0;
      let ct = 1;
      let st = 0;
      function setRot() {
        cl = Math.cos(-lam * D);
        sl = Math.sin(-lam * D);
        ct = Math.cos(tilt * D);
        st = Math.sin(tilt * D);
      }
      // screen x, screen y, depth (towards the viewer)
      function pv(v: Vec): Vec {
        const x = v[0] * cl - v[2] * sl;
        const z = v[0] * sl + v[2] * cl;
        const y = v[1];
        return [z, -(y * ct - x * st), y * st + x * ct];
      }
      let pulses: { c: Vec; t0: number }[] = [];
      let nextAt = 0;
      function spawn(now: number) {
        for (let n = 0; n < 40; n++) {
          const c = land[(Math.random() * land.length) | 0];
          if (pv(c)[2] > 0.45) {
            pulses.push({ c, t0: now });
            return;
          }
        }
      }
      function draw(now: number) {
        setRot();
        if (!reduce) {
          if (now >= nextAt) {
            spawn(now);
            nextAt = now + EVERY * (0.7 + 0.6 * Math.random());
          }
          pulses = pulses.filter((p) => now - p.t0 < LIFE);
        }
        // each pulse: radius (degrees), half-width (thickens 1.2° → 3.4°) and strength (fades from the middle of its life)
        const ps = pulses.map((p) => {
          const k = (now - p.t0) / LIFE;
          const e = 1 - Math.pow(1 - k, 2);
          return {
            c: p.c,
            r: MAXR * e,
            w: 1.2 + 2.2 * k,
            s: Math.min(1, (1 - k) / 0.55),
          };
        });
        const out: string[] = Array(BANDS).fill("");
        const hb: string[] = Array(HOT).fill("");
        let bk = "";
        for (const d of land) {
          const p = pv(d);
          const m = `M${(p[0] * R).toFixed(1)} ${(p[1] * R).toFixed(1)}h0`;
          if (p[2] <= 0) {
            bk += m;
            continue;
          }
          let q = 0;
          for (const pulse of ps) {
            const c = pulse.c;
            const dot = d[0] * c[0] + d[1] * c[1] + d[2] * c[2];
            if (dot < 0.95) continue; // farther than ~18°: no pulse can reach it
            const ang = Math.acos(Math.min(1, dot)) / D;
            const qq =
              Math.max(0, Math.min(1, (pulse.w - Math.abs(ang - pulse.r)) / 0.9 + 0.5)) * pulse.s;
            if (qq > q) q = qq;
          }
          // drawn over the dot's normal self, so a fading pulse never reads lighter than a resting dot
          if (q > 0.12) hb[Math.min(HOT - 1, (q * HOT) | 0)] += m;
          out[Math.min(BANDS - 1, (p[2] * BANDS) | 0)] += m;
        }
        back.paths[0].setAttribute("d", bk);
        bands.paths.forEach((p, i) => p.setAttribute("d", out[i]));
        hot.paths.forEach((p, i) => p.setAttribute("d", hb[i]));
      }
      fit();
      draw(0);
      window.addEventListener(
        "resize",
        () => {
          fit();
          draw(performance.now());
        },
        { signal },
      );

      // drag: the globe follows the pointer (one radius of drag ≈ one radian); on release it coasts and slows to the turn
      let drag: { x: number; y: number } | null = null;
      let vx = 0;
      const idle = reduce ? 0 : 4;
      let spin = idle;
      let raf = 0;
      let last = 0;
      let seen = false;
      function tick(now: number) {
        raf = requestAnimationFrame(tick);
        const dt = last ? Math.min(0.1, (now - last) / 1000) : 0;
        const moving = drag || Math.abs(spin - idle) > 0.05;
        if (!moving && now - last < 33) return;
        if (!drag) {
          spin += (idle - spin) * Math.min(1, dt * 1.6);
          lam += spin * dt;
        }
        last = now;
        draw(now);
        if (reduce && !drag && Math.abs(spin) < 0.05) {
          cancelAnimationFrame(raf);
          raf = 0;
        }
      }
      function kick() {
        if (!raf && seen) {
          last = 0;
          raf = requestAnimationFrame(tick);
        }
      }
      box.addEventListener(
        "pointerdown",
        (e) => {
          drag = { x: e.clientX, y: e.clientY };
          vx = 0;
          box.setPointerCapture(e.pointerId);
          box.classList.add("is-drag");
          kick();
        },
        { signal },
      );
      box.addEventListener(
        "pointermove",
        (e) => {
          if (!drag) return;
          const k = 180 / Math.PI / R;
          const dx = (e.clientX - drag.x) * k;
          const dy = (e.clientY - drag.y) * k;
          lam -= dx;
          tilt = Math.max(-35, Math.min(55, tilt + dy));
          vx = -dx;
          drag.x = e.clientX;
          drag.y = e.clientY;
        },
        { signal },
      );
      function up() {
        if (!drag) return;
        drag = null;
        box!.classList.remove("is-drag");
        spin = Math.max(-60, Math.min(60, vx * 30));
      }
      box.addEventListener("pointerup", up, { signal });
      box.addEventListener("pointercancel", up, { signal });

      const io = new IntersectionObserver((entries) => {
        seen = entries[0].isIntersecting;
        if (seen) kick();
        else {
          cancelAnimationFrame(raf);
          raf = 0;
        }
      });
      io.observe(box);
      stops.push(() => {
        io.disconnect();
        cancelAnimationFrame(raf);
      });
    });

    return () => stops.forEach((stop) => stop());
  }, [boxSelector]);

  return null;
}
