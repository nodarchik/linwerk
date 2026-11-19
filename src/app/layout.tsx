import type { Metadata, Viewport } from "next";
import { IconSprite } from "@/components/IconSprite";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SmoothScroll } from "@/components/fx/SmoothScroll";
import { fontVars } from "./fonts";
import "./globals.css";

const DESCRIPTION =
  "Senior engineers on your team within weeks, or a full product planned, built and run. Risk-free trial, no recruitment fee.";

// Link previews (chat apps, social) need absolute image URLs and a JPEG/PNG, not WebP.
export const metadata: Metadata = {
  metadataBase: new URL("https://linwerk.com"),
  title: { default: "Linwerk", template: "%s · Linwerk" },
  description: DESCRIPTION,
  openGraph: {
    type: "website",
    siteName: "Linwerk",
    title: "Linwerk",
    description: DESCRIPTION,
    images: [{ url: "/og.jpg", width: 1200, height: 600, alt: "Linwerk" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Linwerk",
    description: DESCRIPTION,
    images: ["/og.jpg"],
  },
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
