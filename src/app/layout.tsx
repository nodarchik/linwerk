import type { Metadata, Viewport } from "next";
import { IconSprite } from "@/components/IconSprite";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SmoothScroll } from "@/components/fx/SmoothScroll";
import { fontVars } from "./fonts";
import "./globals.css";

const description =
  "Senior engineers on your team within weeks, or a full product planned, built and run. Risk-free trial, no recruitment fee.";

export const metadata: Metadata = {
  metadataBase: new URL("https://linwerk.com"),
  title: { default: "Linwerk", template: "%s · Linwerk" },
  description,
  icons: {
    icon: [
      { url: "/brand/favicon.svg", type: "image/svg+xml" },
      { url: "/brand/favicon-32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/brand/favicon-512.png", sizes: "512x512", type: "image/png" }],
  },
  openGraph: {
    type: "website",
    siteName: "Linwerk",
    description,
    images: [
      {
        url: "/brand/thumbnail.png",
        width: 3600,
        height: 1890,
        alt: "Linwerk",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    description,
    images: ["/brand/thumbnail.png"],
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
