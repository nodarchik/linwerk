import Link from "next/link";
import { MatchCard } from "./MatchCard";
import type React from "react";

export function Hero() {
  return (
    <section className="hero" id="hero" data-bg="trail" data-hv="2" aria-labelledby="hero-title">
      <div className="hero-sky" aria-hidden="true">
        <div className="hb hb-dots" />
        <div className="hb hb-trail" />
      </div>
      <div
        className="wrap hero-slides"
        id="hero-slides"
        aria-roledescription="carousel"
        aria-label="Linwerk"
      >
        <div
          className="hero-grid hero-slide is-on"
          id="hs-1"
          role="group"
          aria-roledescription="slide"
          aria-label="1 of 2: Engineers on your team"
        >
          <div className="hero-text">
            <h1
              id="hero-title"
              data-reveal=""
              aria-label="People-powered. AI-accelerated. Ready to join."
            >
              People‑powered. AI‑accelerated. Ready to join.
            </h1>
            <p className="sub" data-reveal="">
              Senior engineers who build with AI, on your team within weeks. Risk-free trial, no
              recruitment fee.
            </p>
            <div className="ctas">
              <Link className="btn btn-primary" href="/request">
                Request engineers
              </Link>{" "}
              <Link className="btn btn-ghost" href="/contact?type=project">
                Discuss a project
              </Link>
            </div>
          </div>
          <div className="hero-art">
            <MatchCard />
          </div>
        </div>
        <div
          className="hero-grid hero-slide"
          id="hs-2"
          role="group"
          aria-roledescription="slide"
          aria-label="2 of 2: Our services"
          aria-hidden="true"
          inert
        >
          <div className="hero-text">
            <h2 className="hs-title">
              Senior experts{" "}
              <span className="hs-l2">
                <span className="hs-in">in</span>{" "}
                <span className="hs-rot" aria-live="off">
                  <span className="is-on">AI and data.</span>
                  <span>development.</span>
                  <span>design.</span>
                </span>
              </span>
            </h2>
            <p className="sub">
              Hand us the whole product. We plan it, build it and keep it running.
            </p>
            <div className="ctas">
              <Link className="btn btn-primary" href="/request">
                Request engineers
              </Link>{" "}
              <Link className="btn btn-ghost" href="/contact?type=project">
                Discuss a project
              </Link>
            </div>
          </div>
          <div className="hero-art">
            <div className="hs-art" aria-hidden="true">
              <div className="hs-pic is-on" data-k="0">
                <svg
                  className="pa-art"
                  viewBox="-28.1 -28.1 256.1 256.1"
                  style={{ "--n": "5" } as React.CSSProperties}
                  aria-hidden="true"
                >
                  <defs className="guides">
                    <circle className="ds" cx="100" cy="100" r="80" fill="none" />
                    <line className="ds" x1="20" y1="100" x2="180" y2="100" />
                    <line className="ds" x1="100" y1="20" x2="100" y2="180" />
                  </defs>
                  <path
                    className="dt"
                    d="M20 100h0M180 100h0M100 20h0M100 180h0M22.2 100h0M24.4 100h0M26.7 100h0M28.9 100h0M31.1 100h0M33.3 100h0M35.6 100h0M37.8 100h0M40 100h0M42.2 100h0M44.4 100h0M46.7 100h0M48.9 100h0M51.1 100h0M53.3 100h0M55.6 100h0M57.8 100h0M60 100h0M62.2 100h0M137.8 100h0M140 100h0M142.2 100h0M144.4 100h0M146.7 100h0M148.9 100h0M151.1 100h0M153.3 100h0M155.6 100h0M157.8 100h0M160 100h0M162.2 100h0M164.4 100h0M166.7 100h0M168.9 100h0M171.1 100h0M173.3 100h0M175.6 100h0M177.8 100h0M100 22.2h0M100 24.4h0M100 26.7h0M100 28.9h0M100 31.1h0M100 33.3h0M100 35.6h0M100 37.8h0M100 40h0M100 42.2h0M100 44.4h0M100 46.7h0M100 48.9h0M100 51.1h0M100 53.3h0M100 55.6h0M100 57.8h0M100 60h0M100 62.2h0M100 137.8h0M100 140h0M100 142.2h0M100 144.4h0M100 146.7h0M100 148.9h0M100 151.1h0M100 153.3h0M100 155.6h0M100 157.8h0M100 160h0M100 162.2h0M100 164.4h0M100 166.7h0M100 168.9h0M100 171.1h0M100 173.3h0M100 175.6h0M100 177.8h0M180 102.2h0M179.9 104.4h0M179.7 106.6h0M179.5 108.8h0M179.2 111h0M178.9 113.2h0M178.5 115.3h0M178.1 117.5h0M177.6 119.6h0M177 121.8h0M176.4 123.9h0M175.7 126h0M174.9 128.1h0M174.1 130.1h0M173.3 132.1h0M172.3 134.1h0M171.4 136.1h0M170.4 138.1h0M169.3 140h0M168.2 141.9h0M167 143.8h0M165.7 145.6h0M164.5 147.4h0M163.1 149.1h0M161.8 150.9h0M160.3 152.5h0M158.9 154.2h0M157.3 155.8h0M155.8 157.3h0M154.2 158.9h0M152.5 160.3h0M143.8 167h0M141.9 168.2h0M140 169.3h0M138.1 170.4h0M136.1 171.4h0M134.1 172.3h0M132.1 173.3h0M130.1 174.1h0M128.1 174.9h0M126 175.7h0M123.9 176.4h0M121.8 177h0M119.6 177.6h0M117.5 178.1h0M115.3 178.5h0M113.2 178.9h0M111 179.2h0M108.8 179.5h0M106.6 179.7h0M104.4 179.9h0M102.2 180h0M97.8 180h0M95.6 179.9h0M93.4 179.7h0M91.2 179.5h0M89 179.2h0M86.8 178.9h0M84.7 178.5h0M82.5 178.1h0M80.4 177.6h0M78.2 177h0M76.1 176.4h0M74 175.7h0M71.9 174.9h0M69.9 174.1h0M67.9 173.3h0M65.9 172.3h0M63.9 171.4h0M61.9 170.4h0M60 169.3h0M58.1 168.2h0M56.2 167h0M54.4 165.7h0M52.6 164.5h0M50.9 163.1h0M49.1 161.8h0M47.5 160.3h0M45.8 158.9h0M44.2 157.3h0M42.7 155.8h0M41.1 154.2h0M39.7 152.5h0M33 143.8h0M31.8 141.9h0M30.7 140h0M29.6 138.1h0M28.6 136.1h0M27.7 134.1h0M26.7 132.1h0M25.9 130.1h0M25.1 128.1h0M24.3 126h0M23.6 123.9h0M23 121.8h0M22.4 119.6h0M21.9 117.5h0M21.5 115.3h0M21.1 113.2h0M20.8 111h0M20.5 108.8h0M20.3 106.6h0M20.1 104.4h0M20 102.2h0M20 97.8h0M20.1 95.6h0M20.3 93.4h0M20.5 91.2h0M20.8 89h0M21.1 86.8h0M21.5 84.7h0M21.9 82.5h0M22.4 80.4h0M23 78.2h0M23.6 76.1h0M24.3 74h0M25.1 71.9h0M25.9 69.9h0M26.7 67.9h0M27.7 65.9h0M28.6 63.9h0M29.6 61.9h0M30.7 60h0M31.8 58.1h0M33 56.2h0M34.3 54.4h0M35.5 52.6h0M36.9 50.9h0M38.2 49.1h0M39.7 47.5h0M41.1 45.8h0M42.7 44.2h0M44.2 42.7h0M45.8 41.1h0M47.5 39.7h0M56.2 33h0M58.1 31.8h0M60 30.7h0M61.9 29.6h0M63.9 28.6h0M65.9 27.7h0M67.9 26.7h0M69.9 25.9h0M71.9 25.1h0M74 24.3h0M76.1 23.6h0M78.2 23h0M80.4 22.4h0M82.5 21.9h0M84.7 21.5h0M86.8 21.1h0M89 20.8h0M91.2 20.5h0M93.4 20.3h0M95.6 20.1h0M97.8 20h0M102.2 20h0M104.4 20.1h0M106.6 20.3h0M108.8 20.5h0M111 20.8h0M113.2 21.1h0M115.3 21.5h0M117.5 21.9h0M119.6 22.4h0M121.8 23h0M123.9 23.6h0M126 24.3h0M128.1 25.1h0M130.1 25.9h0M132.1 26.7h0M134.1 27.7h0M136.1 28.6h0M138.1 29.6h0M140 30.7h0M141.9 31.8h0M143.8 33h0M145.6 34.3h0M147.4 35.5h0M149.1 36.9h0M150.9 38.2h0M152.5 39.7h0M154.2 41.1h0M155.8 42.7h0M157.3 44.2h0M158.9 45.8h0M160.3 47.5h0M167 56.2h0M168.2 58.1h0M169.3 60h0M170.4 61.9h0M171.4 63.9h0M172.3 65.9h0M173.3 67.9h0M174.1 69.9h0M174.9 71.9h0M175.7 74h0M176.4 76.1h0M177 78.2h0M177.6 80.4h0M178.1 82.5h0M178.5 84.7h0M178.9 86.8h0M179.2 89h0M179.5 91.2h0M179.7 93.4h0M179.9 95.6h0M180 97.8h0"
                  />
                  <g className="pt" style={{ "--p": "0" } as React.CSSProperties}>
                    <polygon
                      className="bg"
                      points="55.5,36 55.5,36.5 55.4,36.9 55.2,37.3 55,37.8 54.8,38.1 54.5,38.5 54.1,38.8 53.8,39 53.3,39.2 52.9,39.4 52.5,39.5 52,39.5 51.5,39.5 51.1,39.4 50.7,39.2 50.2,39 49.9,38.8 49.5,38.5 49.2,38.1 49,37.8 48.8,37.3 48.6,36.9 48.5,36.5 48.5,36 48.5,35.5 48.6,35.1 48.8,34.7 49,34.2 49.2,33.9 49.5,33.5 49.9,33.2 50.2,33 50.7,32.8 51.1,32.6 51.5,32.5 52,32.5 52.5,32.5 52.9,32.6 53.3,32.8 53.8,33 54.1,33.2 54.5,33.5 54.8,33.9 55,34.2 55.2,34.7 55.4,35.1 55.5,35.5"
                    />
                    <polygon
                      className="bg"
                      points="151.5,164 151.5,164.5 151.4,164.9 151.2,165.3 151,165.8 150.8,166.1 150.5,166.5 150.1,166.8 149.8,167 149.3,167.2 148.9,167.4 148.5,167.5 148,167.5 147.5,167.5 147.1,167.4 146.7,167.2 146.2,167 145.9,166.8 145.5,166.5 145.2,166.1 145,165.8 144.8,165.3 144.6,164.9 144.5,164.5 144.5,164 144.5,163.5 144.6,163.1 144.8,162.7 145,162.2 145.2,161.9 145.5,161.5 145.9,161.2 146.2,161 146.7,160.8 147.1,160.6 147.5,160.5 148,160.5 148.5,160.5 148.9,160.6 149.3,160.8 149.8,161 150.1,161.2 150.5,161.5 150.8,161.9 151,162.2 151.2,162.7 151.4,163.1 151.5,163.5"
                    />
                    <polygon
                      className="bg"
                      points="167.5,52 167.5,52.5 167.4,52.9 167.2,53.3 167,53.8 166.8,54.1 166.5,54.5 166.1,54.8 165.8,55 165.3,55.2 164.9,55.4 164.5,55.5 164,55.5 163.5,55.5 163.1,55.4 162.7,55.2 162.2,55 161.9,54.8 161.5,54.5 161.2,54.1 161,53.8 160.8,53.3 160.6,52.9 160.5,52.5 160.5,52 160.5,51.5 160.6,51.1 160.8,50.7 161,50.2 161.2,49.9 161.5,49.5 161.9,49.2 162.2,49 162.7,48.8 163.1,48.6 163.5,48.5 164,48.5 164.5,48.5 164.9,48.6 165.3,48.8 165.8,49 166.1,49.2 166.5,49.5 166.8,49.9 167,50.2 167.2,50.7 167.4,51.1 167.5,51.5"
                    />
                    <polygon
                      className="bg"
                      points="39.5,148 39.5,148.5 39.4,148.9 39.2,149.3 39,149.8 38.8,150.1 38.5,150.5 38.1,150.8 37.8,151 37.3,151.2 36.9,151.4 36.5,151.5 36,151.5 35.5,151.5 35.1,151.4 34.7,151.2 34.2,151 33.9,150.8 33.5,150.5 33.2,150.1 33,149.8 32.8,149.3 32.6,148.9 32.5,148.5 32.5,148 32.5,147.5 32.6,147.1 32.8,146.7 33,146.2 33.2,145.9 33.5,145.5 33.9,145.2 34.2,145 34.7,144.8 35.1,144.6 35.5,144.5 36,144.5 36.5,144.5 36.9,144.6 37.3,144.8 37.8,145 38.1,145.2 38.5,145.5 38.8,145.9 39,146.2 39.2,146.7 39.4,147.1 39.5,147.5"
                    />
                    <line className="ln" pathLength="1" x1="76" y1="50" x2="76" y2="36" />
                    <line className="ln" pathLength="1" x1="76" y1="36" x2="52" y2="36" />
                    <circle className="ln" pathLength="1" cx="52" cy="36" r="3.5" />
                    <line className="ln" pathLength="1" x1="124" y1="150" x2="124" y2="164" />
                    <line className="ln" pathLength="1" x1="124" y1="164" x2="148" y2="164" />
                    <circle className="ln" pathLength="1" cx="148" cy="164" r="3.5" />
                    <line className="ln" pathLength="1" x1="150" y1="76" x2="164" y2="76" />
                    <line className="ln" pathLength="1" x1="164" y1="76" x2="164" y2="52" />
                    <circle className="ln" pathLength="1" cx="164" cy="52" r="3.5" />
                    <line className="ln" pathLength="1" x1="50" y1="124" x2="36" y2="124" />
                    <line className="ln" pathLength="1" x1="36" y1="124" x2="36" y2="148" />
                    <circle className="ln" pathLength="1" cx="36" cy="148" r="3.5" />
                  </g>
                  <g className="pt" style={{ "--p": "1" } as React.CSSProperties}>
                    <line className="ln" pathLength="1" x1="76" y1="52" x2="76" y2="64" />
                    <line className="ln" pathLength="1" x1="76" y1="136" x2="76" y2="148" />
                    <line className="ln" pathLength="1" x1="52" y1="76" x2="64" y2="76" />
                    <line className="ln" pathLength="1" x1="136" y1="76" x2="148" y2="76" />
                    <line className="ln" pathLength="1" x1="92" y1="52" x2="92" y2="64" />
                    <line className="ln" pathLength="1" x1="92" y1="136" x2="92" y2="148" />
                    <line className="ln" pathLength="1" x1="52" y1="92" x2="64" y2="92" />
                    <line className="ln" pathLength="1" x1="136" y1="92" x2="148" y2="92" />
                    <line className="ln" pathLength="1" x1="108" y1="52" x2="108" y2="64" />
                    <line className="ln" pathLength="1" x1="108" y1="136" x2="108" y2="148" />
                    <line className="ln" pathLength="1" x1="52" y1="108" x2="64" y2="108" />
                    <line className="ln" pathLength="1" x1="136" y1="108" x2="148" y2="108" />
                    <line className="ln" pathLength="1" x1="124" y1="52" x2="124" y2="64" />
                    <line className="ln" pathLength="1" x1="124" y1="136" x2="124" y2="148" />
                    <line className="ln" pathLength="1" x1="52" y1="124" x2="64" y2="124" />
                    <line className="ln" pathLength="1" x1="136" y1="124" x2="148" y2="124" />
                  </g>
                  <g className="pt" style={{ "--p": "2" } as React.CSSProperties}>
                    <polygon className="bg" points="64,64 136,64 136,136 64,136" />
                    <g className="gl" clipPath="url(#h-c11)">
                      <clipPath id="h-c11">
                        <polygon points="64,64 136,64 136,136 64,136" />
                      </clipPath>
                      <polygon
                        className="gb"
                        points="64,64 136,64 136,136 64,136"
                        strokeWidth="1.80"
                      />
                      <polygon
                        className="gb"
                        points="64,64 136,64 136,136 64,136"
                        strokeWidth="3.60"
                      />
                      <polygon
                        className="gb"
                        points="64,64 136,64 136,136 64,136"
                        strokeWidth="5.40"
                      />
                      <polygon
                        className="gb"
                        points="64,64 136,64 136,136 64,136"
                        strokeWidth="7.20"
                      />
                      <polygon
                        className="gb"
                        points="64,64 136,64 136,136 64,136"
                        strokeWidth="9.00"
                      />
                      <polygon
                        className="gb"
                        points="64,64 136,64 136,136 64,136"
                        strokeWidth="10.80"
                      />
                      <polygon
                        className="gb"
                        points="64,64 136,64 136,136 64,136"
                        strokeWidth="12.60"
                      />
                      <polygon
                        className="gb"
                        points="64,64 136,64 136,136 64,136"
                        strokeWidth="14.40"
                      />
                      <polygon
                        className="gb"
                        points="64,64 136,64 136,136 64,136"
                        strokeWidth="16.20"
                      />
                      <polygon
                        className="gb"
                        points="64,64 136,64 136,136 64,136"
                        strokeWidth="18.00"
                      />
                      <polygon
                        className="gb"
                        points="64,64 136,64 136,136 64,136"
                        strokeWidth="19.80"
                      />
                      <polygon
                        className="gb"
                        points="64,64 136,64 136,136 64,136"
                        strokeWidth="21.60"
                      />
                    </g>
                    <polygon className="ln" pathLength="1" points="64,64 136,64 136,136 64,136" />
                    <circle
                      className="nd"
                      style={{ "--i": "1" } as React.CSSProperties}
                      cx="64"
                      cy="64"
                      r="1.21"
                    />
                    <circle
                      className="nd"
                      style={{ "--i": "2" } as React.CSSProperties}
                      cx="136"
                      cy="64"
                      r="1.21"
                    />
                    <circle
                      className="nd"
                      style={{ "--i": "3" } as React.CSSProperties}
                      cx="64"
                      cy="136"
                      r="1.21"
                    />
                    <circle
                      className="nd"
                      style={{ "--i": "4" } as React.CSSProperties}
                      cx="136"
                      cy="136"
                      r="1.21"
                    />
                  </g>
                  <g className="pt" style={{ "--p": "3" } as React.CSSProperties}>
                    <polygon className="bg" points="84,84 116,84 116,116 84,116" />
                    <g className="gl" clipPath="url(#h-c12)">
                      <clipPath id="h-c12">
                        <polygon points="84,84 116,84 116,116 84,116" />
                      </clipPath>
                      <polygon
                        className="gb"
                        points="84,84 116,84 116,116 84,116"
                        strokeWidth="0.80"
                      />
                      <polygon
                        className="gb"
                        points="84,84 116,84 116,116 84,116"
                        strokeWidth="1.60"
                      />
                      <polygon
                        className="gb"
                        points="84,84 116,84 116,116 84,116"
                        strokeWidth="2.40"
                      />
                      <polygon
                        className="gb"
                        points="84,84 116,84 116,116 84,116"
                        strokeWidth="3.20"
                      />
                      <polygon
                        className="gb"
                        points="84,84 116,84 116,116 84,116"
                        strokeWidth="4.00"
                      />
                      <polygon
                        className="gb"
                        points="84,84 116,84 116,116 84,116"
                        strokeWidth="4.80"
                      />
                      <polygon
                        className="gb"
                        points="84,84 116,84 116,116 84,116"
                        strokeWidth="5.60"
                      />
                      <polygon
                        className="gb"
                        points="84,84 116,84 116,116 84,116"
                        strokeWidth="6.40"
                      />
                      <polygon
                        className="gb"
                        points="84,84 116,84 116,116 84,116"
                        strokeWidth="7.20"
                      />
                      <polygon
                        className="gb"
                        points="84,84 116,84 116,116 84,116"
                        strokeWidth="8.00"
                      />
                      <polygon
                        className="gb"
                        points="84,84 116,84 116,116 84,116"
                        strokeWidth="8.80"
                      />
                      <polygon
                        className="gb"
                        points="84,84 116,84 116,116 84,116"
                        strokeWidth="9.60"
                      />
                    </g>
                    <polygon className="ln" pathLength="1" points="84,84 116,84 116,116 84,116" />
                    <circle
                      className="nd"
                      style={{ "--i": "5" } as React.CSSProperties}
                      cx="84"
                      cy="84"
                      r="1.21"
                    />
                    <circle
                      className="nd"
                      style={{ "--i": "6" } as React.CSSProperties}
                      cx="116"
                      cy="84"
                      r="1.21"
                    />
                    <circle
                      className="nd"
                      style={{ "--i": "7" } as React.CSSProperties}
                      cx="84"
                      cy="116"
                      r="1.21"
                    />
                    <circle
                      className="nd"
                      style={{ "--i": "8" } as React.CSSProperties}
                      cx="116"
                      cy="116"
                      r="1.21"
                    />
                  </g>
                  <g className="pt acg" style={{ "--p": "4" } as React.CSSProperties}>
                    <circle className="ac" cx="100" cy="100" r="5" />
                  </g>
                </svg>
              </div>
              <div className="hs-pic" data-k="1">
                <svg
                  className="pa-art"
                  viewBox="-28.1 -28.1 256.1 256.1"
                  style={{ "--n": "9" } as React.CSSProperties}
                  aria-hidden="true"
                >
                  <defs className="guides">
                    <line className="ds" x1="48" y1="70" x2="48" y2="146" />
                    <line className="ds" x1="60" y1="70" x2="60" y2="146" />
                    <line className="ds" x1="72" y1="70" x2="72" y2="146" />
                    <line className="ds" x1="14" y1="42" x2="186" y2="42" />
                    <line className="ds" x1="14" y1="158" x2="186" y2="158" />
                    <line className="ds" x1="28" y1="22" x2="28" y2="178" />
                    <line className="ds" x1="172" y1="22" x2="172" y2="178" />
                  </defs>
                  <path
                    className="dt"
                    d="M14 42h0M186 42h0M14 158h0M186 158h0M28 22h0M28 178h0M172 22h0M172 178h0M16.3 42h0M18.6 42h0M21 42h0M23.3 42h0M176.7 42h0M179 42h0M181.4 42h0M183.7 42h0M16.3 158h0M18.6 158h0M21 158h0M23.3 158h0M176.7 158h0M179 158h0M181.4 158h0M183.7 158h0M28 24.2h0M28 26.5h0M28 28.7h0M28 30.9h0M28 33.1h0M28 35.4h0M28 37.6h0M28 162.4h0M28 164.6h0M28 166.9h0M28 169.1h0M28 171.3h0M28 173.5h0M28 175.8h0M172 24.2h0M172 26.5h0M172 28.7h0M172 30.9h0M172 33.1h0M172 35.4h0M172 37.6h0M172 162.4h0M172 164.6h0M172 166.9h0M172 169.1h0M172 171.3h0M172 173.5h0M172 175.8h0"
                  />
                  <g className="pt" style={{ "--p": "0" } as React.CSSProperties}>
                    <polygon className="bg" points="28,42 172,42 172,158 28,158" />
                    <g className="gl" clipPath="url(#h-a21)">
                      <clipPath id="h-a21">
                        <polygon points="28,42 172,42 172,158 28,158" />
                      </clipPath>
                      <polygon
                        className="gb"
                        points="28,42 172,42 172,158 28,158"
                        strokeWidth="2.67"
                      />
                      <polygon
                        className="gb"
                        points="28,42 172,42 172,158 28,158"
                        strokeWidth="5.33"
                      />
                      <polygon
                        className="gb"
                        points="28,42 172,42 172,158 28,158"
                        strokeWidth="8.00"
                      />
                      <polygon
                        className="gb"
                        points="28,42 172,42 172,158 28,158"
                        strokeWidth="10.67"
                      />
                      <polygon
                        className="gb"
                        points="28,42 172,42 172,158 28,158"
                        strokeWidth="13.33"
                      />
                      <polygon
                        className="gb"
                        points="28,42 172,42 172,158 28,158"
                        strokeWidth="16.00"
                      />
                      <polygon
                        className="gb"
                        points="28,42 172,42 172,158 28,158"
                        strokeWidth="18.67"
                      />
                      <polygon
                        className="gb"
                        points="28,42 172,42 172,158 28,158"
                        strokeWidth="21.33"
                      />
                      <polygon
                        className="gb"
                        points="28,42 172,42 172,158 28,158"
                        strokeWidth="24.00"
                      />
                      <polygon
                        className="gb"
                        points="28,42 172,42 172,158 28,158"
                        strokeWidth="26.67"
                      />
                      <polygon
                        className="gb"
                        points="28,42 172,42 172,158 28,158"
                        strokeWidth="29.33"
                      />
                      <polygon
                        className="gb"
                        points="28,42 172,42 172,158 28,158"
                        strokeWidth="32.00"
                      />
                    </g>
                    <polygon className="ln" pathLength="1" points="28,42 172,42 172,158 28,158" />
                    <line className="ln" pathLength="1" x1="28" y1="60" x2="172" y2="60" />
                    <circle
                      className="nd"
                      style={{ "--i": "1" } as React.CSSProperties}
                      cx="28"
                      cy="42"
                      r="1.21"
                    />
                    <circle
                      className="nd"
                      style={{ "--i": "2" } as React.CSSProperties}
                      cx="172"
                      cy="42"
                      r="1.21"
                    />
                    <circle
                      className="nd"
                      style={{ "--i": "3" } as React.CSSProperties}
                      cx="28"
                      cy="158"
                      r="1.21"
                    />
                    <circle
                      className="nd"
                      style={{ "--i": "4" } as React.CSSProperties}
                      cx="172"
                      cy="158"
                      r="1.21"
                    />
                    <circle
                      className="nd"
                      style={{ "--i": "5" } as React.CSSProperties}
                      cx="28"
                      cy="60"
                      r="1.21"
                    />
                    <circle
                      className="nd"
                      style={{ "--i": "6" } as React.CSSProperties}
                      cx="172"
                      cy="60"
                      r="1.21"
                    />
                  </g>
                  <g className="pt" style={{ "--p": "1" } as React.CSSProperties}>
                    <polygon
                      className="bg"
                      points="42.6,51 42.6,51.3 42.5,51.7 42.4,52 42.3,52.3 42.1,52.6 41.8,52.8 41.6,53.1 41.3,53.3 41,53.4 40.7,53.5 40.3,53.6 40,53.6 39.7,53.6 39.3,53.5 39,53.4 38.7,53.3 38.4,53.1 38.2,52.8 37.9,52.6 37.7,52.3 37.6,52 37.5,51.7 37.4,51.3 37.4,51 37.4,50.7 37.5,50.3 37.6,50 37.7,49.7 37.9,49.4 38.2,49.2 38.4,48.9 38.7,48.7 39,48.6 39.3,48.5 39.7,48.4 40,48.4 40.3,48.4 40.7,48.5 41,48.6 41.3,48.7 41.6,48.9 41.8,49.2 42.1,49.4 42.3,49.7 42.4,50 42.5,50.3 42.6,50.7"
                    />
                    <polygon
                      className="bg"
                      points="51.6,51 51.6,51.3 51.5,51.7 51.4,52 51.3,52.3 51.1,52.6 50.8,52.8 50.6,53.1 50.3,53.3 50,53.4 49.7,53.5 49.3,53.6 49,53.6 48.7,53.6 48.3,53.5 48,53.4 47.7,53.3 47.4,53.1 47.2,52.8 46.9,52.6 46.7,52.3 46.6,52 46.5,51.7 46.4,51.3 46.4,51 46.4,50.7 46.5,50.3 46.6,50 46.7,49.7 46.9,49.4 47.2,49.2 47.4,48.9 47.7,48.7 48,48.6 48.3,48.5 48.7,48.4 49,48.4 49.3,48.4 49.7,48.5 50,48.6 50.3,48.7 50.6,48.9 50.8,49.2 51.1,49.4 51.3,49.7 51.4,50 51.5,50.3 51.6,50.7"
                    />
                    <polygon
                      className="bg"
                      points="60.6,51 60.6,51.3 60.5,51.7 60.4,52 60.3,52.3 60.1,52.6 59.8,52.8 59.6,53.1 59.3,53.3 59,53.4 58.7,53.5 58.3,53.6 58,53.6 57.7,53.6 57.3,53.5 57,53.4 56.7,53.3 56.4,53.1 56.2,52.8 55.9,52.6 55.7,52.3 55.6,52 55.5,51.7 55.4,51.3 55.4,51 55.4,50.7 55.5,50.3 55.6,50 55.7,49.7 55.9,49.4 56.2,49.2 56.4,48.9 56.7,48.7 57,48.6 57.3,48.5 57.7,48.4 58,48.4 58.3,48.4 58.7,48.5 59,48.6 59.3,48.7 59.6,48.9 59.8,49.2 60.1,49.4 60.3,49.7 60.4,50 60.5,50.3 60.6,50.7"
                    />
                    <circle className="ln" pathLength="1" cx="40" cy="51" r="2.6" />
                    <circle className="ln" pathLength="1" cx="49" cy="51" r="2.6" />
                    <circle className="ln" pathLength="1" cx="58" cy="51" r="2.6" />
                  </g>
                  <g className="pt" style={{ "--p": "2" } as React.CSSProperties}>
                    <line className="ln" pathLength="1" x1="48" y1="76" x2="112" y2="76" />
                    <circle
                      className="nd"
                      style={{ "--i": "7" } as React.CSSProperties}
                      cx="48"
                      cy="76"
                      r="1.21"
                    />
                    <circle
                      className="nd"
                      style={{ "--i": "8" } as React.CSSProperties}
                      cx="112"
                      cy="76"
                      r="1.21"
                    />
                  </g>
                  <g className="pt" style={{ "--p": "3" } as React.CSSProperties}>
                    <line className="ln" pathLength="1" x1="60" y1="89" x2="132" y2="89" />
                    <circle
                      className="nd"
                      style={{ "--i": "9" } as React.CSSProperties}
                      cx="60"
                      cy="89"
                      r="1.21"
                    />
                    <circle
                      className="nd"
                      style={{ "--i": "10" } as React.CSSProperties}
                      cx="132"
                      cy="89"
                      r="1.21"
                    />
                  </g>
                  <g className="pt" style={{ "--p": "4" } as React.CSSProperties}>
                    <line className="ln" pathLength="1" x1="72" y1="102" x2="120" y2="102" />
                    <circle
                      className="nd"
                      style={{ "--i": "11" } as React.CSSProperties}
                      cx="72"
                      cy="102"
                      r="1.21"
                    />
                    <circle
                      className="nd"
                      style={{ "--i": "12" } as React.CSSProperties}
                      cx="120"
                      cy="102"
                      r="1.21"
                    />
                  </g>
                  <g className="pt" style={{ "--p": "5" } as React.CSSProperties}>
                    <line className="ln" pathLength="1" x1="72" y1="115" x2="146" y2="115" />
                    <circle
                      className="nd"
                      style={{ "--i": "13" } as React.CSSProperties}
                      cx="72"
                      cy="115"
                      r="1.21"
                    />
                    <circle
                      className="nd"
                      style={{ "--i": "14" } as React.CSSProperties}
                      cx="146"
                      cy="115"
                      r="1.21"
                    />
                  </g>
                  <g className="pt" style={{ "--p": "6" } as React.CSSProperties}>
                    <line className="ln" pathLength="1" x1="60" y1="128" x2="96" y2="128" />
                    <circle
                      className="nd"
                      style={{ "--i": "15" } as React.CSSProperties}
                      cx="60"
                      cy="128"
                      r="1.21"
                    />
                    <circle
                      className="nd"
                      style={{ "--i": "16" } as React.CSSProperties}
                      cx="96"
                      cy="128"
                      r="1.21"
                    />
                  </g>
                  <g className="pt" style={{ "--p": "7" } as React.CSSProperties}>
                    <line className="ln" pathLength="1" x1="48" y1="141" x2="84" y2="141" />
                    <circle
                      className="nd"
                      style={{ "--i": "17" } as React.CSSProperties}
                      cx="48"
                      cy="141"
                      r="1.21"
                    />
                    <circle
                      className="nd"
                      style={{ "--i": "18" } as React.CSSProperties}
                      cx="84"
                      cy="141"
                      r="1.21"
                    />
                  </g>
                  <g className="pt acg" style={{ "--p": "8" } as React.CSSProperties}>
                    <polygon className="bg" points="150,111 157,111 157,121 150,121" />
                    <polygon className="acp" points="150,111 157,111 157,121 150,121" />
                  </g>
                </svg>
              </div>
              <div className="hs-pic" data-k="2">
                <svg
                  className="pa-art"
                  viewBox="-28.1 -28.1 256.1 256.1"
                  style={{ "--n": "5" } as React.CSSProperties}
                  aria-hidden="true"
                >
                  <defs className="guides">
                    <line className="ds" x1="34" y1="168" x2="64" y2="120" />
                    <line className="ds" x1="64" y1="120" x2="100" y2="150" />
                    <line className="ds" x1="100" y1="150" x2="136" y2="176" />
                    <line className="ds" x1="136" y1="176" x2="168" y2="138" />
                    <line className="ds" x1="100" y1="24" x2="100" y2="150" />
                  </defs>
                  <path
                    className="dt"
                    d="M100 24h0M64 120h0M136 176h0M100 26.2h0M100 28.4h0M100 30.6h0M100 32.8h0M100 35.1h0M100 37.3h0M100 39.5h0M100 41.7h0M100 43.9h0M37.5 162.5h0M42.1 155.1h0M43.2 153.2h0M44.4 151.4h0M45.5 149.5h0M46.7 147.7h0M47.8 145.8h0M49 144h0M50.2 142.2h0M51.3 140.3h0M52.5 138.5h0M53.6 136.6h0M54.8 134.8h0M55.9 132.9h0M57.1 131.1h0M58.2 129.2h0M59.4 127.4h0M60.5 125.5h0M61.7 123.7h0M62.8 121.8h0M137.5 174.3h0M138.9 172.5h0M140.4 170.8h0M141.8 169.1h0M143.3 167.4h0M144.7 165.6h0M146.2 163.9h0M147.6 162.2h0M149.1 160.5h0M150.5 158.7h0M152 157h0M153.5 155.3h0M154.9 153.5h0M156.4 151.8h0M157.8 150.1h0M159.3 148.4h0M65.9 121.6h0M67.8 123.2h0M69.7 124.7h0M73.5 127.9h0M75.4 129.5h0M77.3 131.1h0M79.2 132.6h0M81.1 134.2h0M82.9 135.8h0M84.8 137.4h0M86.7 138.9h0M132.4 173.4h0M134.2 174.7h0"
                  />
                  <g className="pt" style={{ "--p": "0" } as React.CSSProperties}>
                    <polygon className="bg" points="86,46 114,46 114,72 86,72" />
                    <g className="gl" clipPath="url(#h-a31)">
                      <clipPath id="h-a31">
                        <polygon points="86,46 114,46 114,72 86,72" />
                      </clipPath>
                      <polygon
                        className="gb"
                        points="86,46 114,46 114,72 86,72"
                        strokeWidth="0.65"
                      />
                      <polygon
                        className="gb"
                        points="86,46 114,46 114,72 86,72"
                        strokeWidth="1.30"
                      />
                      <polygon
                        className="gb"
                        points="86,46 114,46 114,72 86,72"
                        strokeWidth="1.95"
                      />
                      <polygon
                        className="gb"
                        points="86,46 114,46 114,72 86,72"
                        strokeWidth="2.60"
                      />
                      <polygon
                        className="gb"
                        points="86,46 114,46 114,72 86,72"
                        strokeWidth="3.25"
                      />
                      <polygon
                        className="gb"
                        points="86,46 114,46 114,72 86,72"
                        strokeWidth="3.90"
                      />
                      <polygon
                        className="gb"
                        points="86,46 114,46 114,72 86,72"
                        strokeWidth="4.55"
                      />
                      <polygon
                        className="gb"
                        points="86,46 114,46 114,72 86,72"
                        strokeWidth="5.20"
                      />
                      <polygon
                        className="gb"
                        points="86,46 114,46 114,72 86,72"
                        strokeWidth="5.85"
                      />
                      <polygon
                        className="gb"
                        points="86,46 114,46 114,72 86,72"
                        strokeWidth="6.50"
                      />
                      <polygon
                        className="gb"
                        points="86,46 114,46 114,72 86,72"
                        strokeWidth="7.15"
                      />
                      <polygon
                        className="gb"
                        points="86,46 114,46 114,72 86,72"
                        strokeWidth="7.80"
                      />
                    </g>
                    <polygon className="ln" pathLength="1" points="86,46 114,46 114,72 86,72" />
                    <circle
                      className="nd"
                      style={{ "--i": "1" } as React.CSSProperties}
                      cx="86"
                      cy="46"
                      r="1.21"
                    />
                    <circle
                      className="nd"
                      style={{ "--i": "2" } as React.CSSProperties}
                      cx="114"
                      cy="46"
                      r="1.21"
                    />
                  </g>
                  <g className="pt" style={{ "--p": "1" } as React.CSSProperties}>
                    <polygon className="bg" points="100,150 77,104 83,72 117,72 123,104" />
                    <polygon
                      className="bg"
                      points="104.2,104 104.2,104.5 104.1,105.1 103.9,105.6 103.6,106.1 103.3,106.6 103,107 102.6,107.3 102.1,107.6 101.6,107.9 101.1,108.1 100.5,108.2 100,108.2 99.5,108.2 98.9,108.1 98.4,107.9 97.9,107.6 97.4,107.3 97,107 96.7,106.6 96.4,106.1 96.1,105.6 95.9,105.1 95.8,104.5 95.8,104 95.8,103.5 95.9,102.9 96.1,102.4 96.4,101.9 96.7,101.4 97,101 97.4,100.7 97.9,100.4 98.4,100.1 98.9,99.9 99.5,99.8 100,99.8 100.5,99.8 101.1,99.9 101.6,100.1 102.1,100.4 102.6,100.7 103,101 103.3,101.4 103.6,101.9 103.9,102.4 104.1,102.9 104.2,103.5"
                    />
                    <g className="gl" clipPath="url(#h-a32)">
                      <clipPath id="h-a32">
                        <polygon points="100,150 77,104 83,72 117,72 123,104" />
                      </clipPath>
                      <polygon
                        className="gb"
                        points="100,150 77,104 83,72 117,72 123,104"
                        strokeWidth="1.15"
                      />
                      <polygon
                        className="gb"
                        points="100,150 77,104 83,72 117,72 123,104"
                        strokeWidth="2.30"
                      />
                      <polygon
                        className="gb"
                        points="100,150 77,104 83,72 117,72 123,104"
                        strokeWidth="3.45"
                      />
                      <polygon
                        className="gb"
                        points="100,150 77,104 83,72 117,72 123,104"
                        strokeWidth="4.60"
                      />
                      <polygon
                        className="gb"
                        points="100,150 77,104 83,72 117,72 123,104"
                        strokeWidth="5.75"
                      />
                      <polygon
                        className="gb"
                        points="100,150 77,104 83,72 117,72 123,104"
                        strokeWidth="6.90"
                      />
                      <polygon
                        className="gb"
                        points="100,150 77,104 83,72 117,72 123,104"
                        strokeWidth="8.05"
                      />
                      <polygon
                        className="gb"
                        points="100,150 77,104 83,72 117,72 123,104"
                        strokeWidth="9.20"
                      />
                      <polygon
                        className="gb"
                        points="100,150 77,104 83,72 117,72 123,104"
                        strokeWidth="10.35"
                      />
                      <polygon
                        className="gb"
                        points="100,150 77,104 83,72 117,72 123,104"
                        strokeWidth="11.50"
                      />
                      <polygon
                        className="gb"
                        points="100,150 77,104 83,72 117,72 123,104"
                        strokeWidth="12.65"
                      />
                      <polygon
                        className="gb"
                        points="100,150 77,104 83,72 117,72 123,104"
                        strokeWidth="13.80"
                      />
                    </g>
                    <polygon
                      className="ln"
                      pathLength="1"
                      points="100,150 77,104 83,72 117,72 123,104"
                    />
                    <line className="ln" pathLength="1" x1="100" y1="150" x2="100" y2="109" />
                    <circle className="ln" pathLength="1" cx="100" cy="104" r="4.2" />
                    <circle
                      className="nd"
                      style={{ "--i": "3" } as React.CSSProperties}
                      cx="77"
                      cy="104"
                      r="1.21"
                    />
                    <circle
                      className="nd"
                      style={{ "--i": "4" } as React.CSSProperties}
                      cx="123"
                      cy="104"
                      r="1.21"
                    />
                    <circle
                      className="nd"
                      style={{ "--i": "5" } as React.CSSProperties}
                      cx="83"
                      cy="72"
                      r="1.21"
                    />
                    <circle
                      className="nd"
                      style={{ "--i": "6" } as React.CSSProperties}
                      cx="117"
                      cy="72"
                      r="1.21"
                    />
                  </g>
                  <g className="pt" style={{ "--p": "2" } as React.CSSProperties}>
                    <path
                      className="ln"
                      pathLength="1"
                      d="M34 168Q64 120 100 150Q136 176 168 138"
                    />
                  </g>
                  <g className="pt" style={{ "--p": "3" } as React.CSSProperties}>
                    <polygon className="bg" points="30,164 38,164 38,172 30,172" />
                    <polygon className="bg" points="164,134 172,134 172,142 164,142" />
                    <polygon className="ln" pathLength="1" points="30,164 38,164 38,172 30,172" />
                    <polygon
                      className="ln"
                      pathLength="1"
                      points="164,134 172,134 172,142 164,142"
                    />
                    <line className="ln" pathLength="1" x1="70" y1="128" x2="130" y2="172" />
                    <circle
                      className="nd"
                      style={{ "--i": "7" } as React.CSSProperties}
                      cx="70"
                      cy="128"
                      r="1.21"
                    />
                    <circle
                      className="nd"
                      style={{ "--i": "8" } as React.CSSProperties}
                      cx="130"
                      cy="172"
                      r="1.21"
                    />
                  </g>
                  <g className="pt acg" style={{ "--p": "4" } as React.CSSProperties}>
                    <polygon className="bg" points="96,146 104,146 104,154 96,154" />
                    <polygon className="acp" points="96,146 104,146 104,154 96,154" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-nav" aria-label="Hero slides">
          <button type="button" className="hn-arr hn-prev" aria-label="Previous slide">
            <svg className="ic" aria-hidden="true">
              <use href="#i-chev-r" />
            </svg>
          </button>{" "}
          <button type="button" className="hn-arr" aria-label="Next slide">
            <svg className="ic" aria-hidden="true">
              <use href="#i-chev-r" />
            </svg>
          </button>{" "}
          <span className="hn-num" data-n="0">
            01
          </span>
          <span className="hn-num" data-n="1">
            02
          </span>
          <span className="hn-trk" aria-hidden="true">
            <i />
          </span>
        </div>
      </div>
      <div className="wrap trust" aria-labelledby="trusted-label">
        <p className="label" id="trusted-label">
          Trusted by
        </p>
        <div className="marquee">
          <ul className="marquee-track">
            <li>
              <img
                src="/logos/louis-vuitton.svg"
                alt="Louis Vuitton"
                style={{ "--h": "16px" } as React.CSSProperties}
              />
            </li>
            <li>
              <img
                src="/logos/dior.svg"
                alt="Dior"
                style={{ "--h": "22px" } as React.CSSProperties}
              />
            </li>
            <li>
              <img
                src="/logos/sephora.svg"
                alt="Sephora"
                style={{ "--h": "16px" } as React.CSSProperties}
              />
            </li>
            <li>
              <img
                src="/logos/tiffany-co.svg"
                alt={"Tiffany & Co."}
                style={{ "--h": "18px" } as React.CSSProperties}
              />
            </li>
            <li>
              <img
                src="/logos/moet-chandon.svg"
                alt={"Moët & Chandon"}
                style={{ "--h": "42px" } as React.CSSProperties}
              />
            </li>
            <li>
              <img
                src="/logos/hennessy.svg"
                alt="Hennessy"
                style={{ "--h": "46px" } as React.CSSProperties}
              />
            </li>
            <li>
              <img
                src="/logos/bvlgari.svg"
                alt="Bvlgari"
                style={{ "--h": "17px" } as React.CSSProperties}
              />
            </li>
            <li>
              <img
                src="/logos/tag-heuer.svg"
                alt="TAG Heuer"
                style={{ "--h": "29px" } as React.CSSProperties}
              />
            </li>
            <li>
              <img
                aria-hidden="true"
                src="/logos/louis-vuitton.svg"
                alt=""
                style={{ "--h": "16px" } as React.CSSProperties}
              />
            </li>
            <li>
              <img
                aria-hidden="true"
                src="/logos/dior.svg"
                alt=""
                style={{ "--h": "22px" } as React.CSSProperties}
              />
            </li>
            <li>
              <img
                aria-hidden="true"
                src="/logos/sephora.svg"
                alt=""
                style={{ "--h": "16px" } as React.CSSProperties}
              />
            </li>
            <li>
              <img
                aria-hidden="true"
                src="/logos/tiffany-co.svg"
                alt=""
                style={{ "--h": "18px" } as React.CSSProperties}
              />
            </li>
            <li>
              <img
                aria-hidden="true"
                src="/logos/moet-chandon.svg"
                alt=""
                style={{ "--h": "42px" } as React.CSSProperties}
              />
            </li>
            <li>
              <img
                aria-hidden="true"
                src="/logos/hennessy.svg"
                alt=""
                style={{ "--h": "46px" } as React.CSSProperties}
              />
            </li>
            <li>
              <img
                aria-hidden="true"
                src="/logos/bvlgari.svg"
                alt=""
                style={{ "--h": "17px" } as React.CSSProperties}
              />
            </li>
            <li>
              <img
                aria-hidden="true"
                src="/logos/tag-heuer.svg"
                alt=""
                style={{ "--h": "29px" } as React.CSSProperties}
              />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
