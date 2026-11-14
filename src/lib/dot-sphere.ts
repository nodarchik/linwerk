import type { Cleanup } from "./motion";

const NS = "http://www.w3.org/2000/svg";

/** One <path> per depth band; each dot is an "M x y h0" segment drawn with a round stroke. */
export function bandPaths(
  g: Element,
  n: number,
  width: (k: number) => number,
  opacity: (k: number) => number,
): { paths: SVGPathElement[]; remove: Cleanup } {
  const paths: SVGPathElement[] = [];
  for (let b = 0; b < n; b++) {
    const path = document.createElementNS(NS, "path");
    const k = n > 1 ? b / (n - 1) : 1;
    path.setAttribute("stroke-width", width(k).toFixed(2));
    path.setAttribute("stroke-opacity", opacity(k).toFixed(2));
    g.appendChild(path);
    paths.push(path);
  }
  return { paths, remove: () => paths.forEach((p) => p.remove()) };
}
