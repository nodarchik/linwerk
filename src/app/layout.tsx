import type { Metadata, Viewport } from "next";
import { IconSprite } from "@/components/IconSprite";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SmoothScroll } from "@/components/fx/SmoothScroll";
import { fontVars } from "./fonts";
import "./globals.css";

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
