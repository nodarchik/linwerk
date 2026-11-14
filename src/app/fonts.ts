import localFont from "next/font/local";
import type { CSSProperties } from "react";

/* Self-hosted type, the same files and unicode ranges Google Fonts serves for
   Geist 300/400 (one variable file), JetBrains Mono 400 and the Plus Jakarta Sans 700 wordmark.
   Latin is preloaded; Latin Extended is fetched only if a page uses one of its characters.
   (next/font options must be literals, so the unicode ranges are repeated.) */

const geistLatin = localFont({
  src: "../fonts/geist-latin.woff2",
  weight: "300 400",
  style: "normal",
  display: "swap",
  declarations: [
    {
      prop: "unicode-range",
      value:
        "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
    },
  ],
});

const geistLatinExt = localFont({
  src: "../fonts/geist-latin-ext.woff2",
  weight: "300 400",
  style: "normal",
  display: "swap",
  preload: false,
  declarations: [
    {
      prop: "unicode-range",
      value:
        "U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+0304, U+0308, U+0329, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C4, U+2113, U+2C60-2C7F, U+A720-A7FF",
    },
  ],
});

const monoLatin = localFont({
  src: "../fonts/jetbrains-mono-latin.woff2",
  weight: "400",
  style: "normal",
  display: "swap",
  declarations: [
    {
      prop: "unicode-range",
      value:
        "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
    },
  ],
});

const monoLatinExt = localFont({
  src: "../fonts/jetbrains-mono-latin-ext.woff2",
  weight: "400",
  style: "normal",
  display: "swap",
  preload: false,
  declarations: [
    {
      prop: "unicode-range",
      value:
        "U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+0304, U+0308, U+0329, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C4, U+2113, U+2C60-2C7F, U+A720-A7FF",
    },
  ],
});

// The wordmark: cut down to the seven letters of "Linwerk" (1 KB).
const wordmark = localFont({
  src: "../fonts/plus-jakarta-sans-700-wordmark.woff2",
  weight: "700",
  style: "normal",
  display: "swap",
  declarations: [
    {
      prop: "unicode-range",
      value: "U+4c, U+65, U+69, U+6b, U+6e, U+72, U+77",
    },
  ],
});

// globals.css owns the fallback chain (--font, --mono), so only each face's own family name is handed to it:
// next/font's metric-adjusted fallback face would otherwise sit in front of that chain and change line metrics.
const family = (...fonts: { style: { fontFamily: string } }[]) =>
  fonts.map((font) => font.style.fontFamily.split(",")[0]).join(", ");

/** Custom properties for <html>; globals.css reads them as var(--f-geist), var(--f-jbmono), var(--f-jakarta). */
export const fontVars = {
  "--f-geist": family(geistLatin, geistLatinExt),
  "--f-jbmono": family(monoLatin, monoLatinExt),
  "--f-jakarta": family(wordmark),
} as CSSProperties;
