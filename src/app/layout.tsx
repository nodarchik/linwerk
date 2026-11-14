import type { Metadata, Viewport } from "next";
import { Geist, JetBrains_Mono } from "next/font/google";
import localFont from "next/font/local";
import { IconSprite } from "@/components/IconSprite";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SmoothScroll } from "@/components/fx/SmoothScroll";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  weight: ["300", "400"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

// The wordmark: Plus Jakarta Sans 700 cut down to the seven letters of "Linwerk" (1 KB).
const jakarta = localFont({
  src: "../fonts/plus-jakarta-sans-700-wordmark.woff2",
  weight: "700",
  style: "normal",
  display: "swap",
  declarations: [{ prop: "unicode-range", value: "U+4c, U+65, U+69, U+6b, U+6e, U+72, U+77" }],
});

// globals.css owns the fallback chain (--font, --mono), so only the web font's own family name is handed to it:
// next/font's metric-adjusted fallback face would otherwise sit in front of that chain and change line metrics.
const family = (font: { style: { fontFamily: string } }) => font.style.fontFamily.split(",")[0];
const fontVars = {
  "--f-geist": family(geist),
  "--f-jbmono": family(jetbrainsMono),
  "--f-jakarta": family(jakarta),
} as React.CSSProperties;

export const metadata: Metadata = {
  title: { default: "Linwerk", template: "Linwerk · %s" },
  description:
    "Senior engineers on your team within weeks, or a full product planned, built and run. Risk-free trial, no recruitment fee.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    // rv-js: [data-reveal] text stays hidden until <RevealText> has split it into letters.
    <html lang="en" className="rv-js" style={fontVars}>
      <body>
        <noscript>
          <style>{`html.rv-js [data-reveal]{visibility:visible!important}`}</style>
        </noscript>
        <IconSprite />
        <SiteHeader />
        {children}
        <SiteFooter />
        <SmoothScroll />
      </body>
    </html>
  );
}
