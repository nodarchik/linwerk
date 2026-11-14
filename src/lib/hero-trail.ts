/* "Dots + trail": a small lit patch follows the pointer and leaves a trail that fades out behind it. This only moves
   points: the head (an eased copy of the pointer) and the last few places it passed, writing --x<i>, --y<i> (px in
   the sky) and --a<i> (0..1) on the trail layer; the CSS mask draws one soft patch per point, smaller towards the
   tail. Fine pointers only; stops once the trail has faded. */
import type { Cleanup } from "./motion";

const N = 10;
const LIFE = 1500;
const GAP = 70;
const LAG = 0.3;
const FADE = 0.12; // the tail covers ~0.6s of movement and fades over 1.5s

export function mountHeroTrail(layer: HTMLElement | null, hero: HTMLElement | null): Cleanup {
  if (!layer || !hero || !window.matchMedia("(hover:hover) and (pointer:fine)").matches)
    return () => {};
  const sky = layer.parentElement as HTMLElement;
  let pts: { x: number; y: number; t: number }[] = [];
  let px = 0;
  let py = 0;
  let hx = 0;
  let hy = 0;
  let s = 0;
  let inside = false;
  let running = false;
  let last = 0;
  let raf = 0;

  function put(i: number, x: number, y: number, a: number) {
    layer!.style.setProperty(`--x${i}`, `${x.toFixed(1)}px`);
    layer!.style.setProperty(`--y${i}`, `${y.toFixed(1)}px`);
    layer!.style.setProperty(`--a${i}`, a.toFixed(3));
  }
  function frame(now: number) {
    hx += (px - hx) * LAG;
    hy += (py - hy) * LAG;
    s += ((inside ? 1 : 0) - s) * FADE;
    if (inside && now - last > GAP) {
      pts.unshift({ x: hx, y: hy, t: now });
      last = now;
      pts.length = Math.min(pts.length, N - 1);
    }
    put(0, hx, hy, s);
    let live = s > 0.005;
    for (let i = 1; i < N; i++) {
      const p = pts[i - 1];
      let a = p ? Math.max(0, 1 - (now - p.t) / LIFE) : 0;
      a = a * a * 0.85; // eases out, a little under the head
      if (a > 0.005) live = true;
      put(i, p ? p.x : hx, p ? p.y : hy, a);
    }
    if (live || inside) raf = requestAnimationFrame(frame);
    else {
      running = false;
      pts = [];
    }
  }
  function kick() {
    if (!running) {
      running = true;
      raf = requestAnimationFrame(frame);
    }
  }
  function onMove(e: PointerEvent) {
    if (hero!.getAttribute("data-bg") !== "trail") return;
    const r = sky.getBoundingClientRect();
    px = e.clientX - r.left;
    py = e.clientY - r.top;
    // the patch grows where the pointer came in
    if (!inside && s < 0.01) {
      hx = px;
      hy = py;
    }
    inside = true;
    kick();
  }
  function onLeave() {
    inside = false;
    kick();
  }
  hero.addEventListener("pointermove", onMove);
  hero.addEventListener("pointerleave", onLeave);
  return () => {
    cancelAnimationFrame(raf);
    hero.removeEventListener("pointermove", onMove);
    hero.removeEventListener("pointerleave", onLeave);
  };
}
