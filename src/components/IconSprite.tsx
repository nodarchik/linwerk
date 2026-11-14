/** One SVG sprite for every page; icons are drawn with <use href="#i-…">. */
export function IconSprite() {
  return (
    <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden="true">
      <symbol id="i-chev-r" viewBox="0 0 16 16">
        <path d="M6 3.5 10.5 8 6 12.5" />
      </symbol>
      <symbol id="i-arrow" viewBox="0 0 16 16">
        <path d="M3 8h10M9 4l4 4-4 4" />
      </symbol>
      <symbol id="i-check" viewBox="0 0 24 24">
        <path d="M5 12.5l4.5 4.5L19 7.5" />
      </symbol>
      <symbol id="i-user" viewBox="0 0 24 24">
        <circle cx="12" cy="8" r="4" />
        <path d="M4 21c0-4 3.6-6 8-6s8 2 8 6" />
      </symbol>
      <symbol id="i-chat" viewBox="0 0 24 24">
        <path d="M20 15a2 2 0 0 1-2 2H8l-4 4V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2z" />
        <path d="M8.5 10.5h7" />
      </symbol>
      <symbol id="i-shield" viewBox="0 0 24 24">
        <path d="M12 21.5s7.5-3.6 7.5-9.5V5.5L12 3 4.5 5.5V12c0 5.9 7.5 9.5 7.5 9.5z" />
        <path d="M9 12l2.2 2.2L15.5 10" />
      </symbol>
      <symbol id="i-key" viewBox="0 0 24 24">
        <circle cx="8" cy="15" r="4" />
        <path d="M11 12l8.5-8.5M16.5 6.5l2.5 2.5M14.5 8.5l2 2" />
      </symbol>
      <symbol id="i-lead" viewBox="0 0 24 24">
        <circle cx="9" cy="8" r="4" />
        <path d="M2.5 21c0-4 3-6 6.5-6s6.5 2 6.5 6" />
        <path d="M16 11l2 2 4-4" />
      </symbol>
      <symbol id="i-cal" viewBox="0 0 24 24">
        <rect x="3.5" y="5" width="17" height="15.5" rx="3" />
        <path d="M3.5 10h17M8 3v4M16 3v4" />
      </symbol>
      <symbol id="i-tag" viewBox="0 0 24 24">
        <path d="M3.5 12.2V5a1.5 1.5 0 0 1 1.5-1.5h7.2l8.3 8.3a1.5 1.5 0 0 1 0 2.1l-6.5 6.5a1.5 1.5 0 0 1-2.1 0z" />
        <circle cx="8.5" cy="8.5" r="1.4" />
      </symbol>
      <symbol id="i-buoy" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="8.5" />
        <circle cx="12" cy="12" r="3.5" />
        <path d="M6 6l3.5 3.5M14.5 14.5L18 18M14.5 9.5L18 6M6 18l3.5-3.5" />
      </symbol>
      <symbol id="i-layers" viewBox="0 0 24 24">
        <path d="M12 3l9 5-9 5-9-5z" />
        <path d="M3 12.5l9 5 9-5" />
        <path d="M3 16.5l9 5 9-5" />
      </symbol>
      <symbol id="i-star" viewBox="0 0 24 24">
        <path d="M12 3.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.9l-5.2 2.7 1-5.8-4.3-4.1 5.9-.9z" />
      </symbol>
      <symbol id="i-doc" viewBox="0 0 24 24">
        <path d="M14 3H6.5A1.5 1.5 0 0 0 5 4.5v15A1.5 1.5 0 0 0 6.5 21h11a1.5 1.5 0 0 0 1.5-1.5V8z" />
        <path d="M14 3v5h5M9 13h6M9 17h4" />
      </symbol>
      <symbol id="i-unlock" viewBox="0 0 24 24">
        <rect x="4.5" y="11" width="15" height="10" rx="2.5" />
        <path d="M8 11V7.5a4 4 0 0 1 7.6-1.7" />
      </symbol>
      <symbol id="i-pr" viewBox="0 0 24 24">
        <circle cx="6" cy="6" r="2.5" />
        <circle cx="6" cy="18" r="2.5" />
        <circle cx="18" cy="18" r="2.5" />
        <path d="M6 8.5v7M18 15.5V9a3 3 0 0 0-3-3h-4M13 3.5L10.5 6 13 8.5" />
      </symbol>
      <symbol id="i-pointer" viewBox="0 0 24 24">
        <path d="M5 3.5l13.5 7.7-6 1.4-2.7 5.9z" />
      </symbol>
      <symbol id="i-frame" viewBox="0 0 24 24">
        <path d="M8 3.5v17M16 3.5v17M3.5 8h17M3.5 16h17" />
      </symbol>
      <symbol id="i-phone" viewBox="0 0 24 24">
        <rect x="6.5" y="3" width="11" height="18" rx="2.5" />
        <path d="M10.5 17.5h3" />
      </symbol>
      <symbol id="i-rect" viewBox="0 0 24 24">
        <rect x="4" y="5.5" width="16" height="13" rx="3" />
      </symbol>
      <symbol id="i-text" viewBox="0 0 24 24">
        <path d="M5 7V5h14v2M12 5v14M9 19h6" />
      </symbol>
      <symbol id="i-plus" viewBox="0 0 24 24">
        <path d="M12 5v14M5 12h14" />
      </symbol>
      <symbol id="i-code" viewBox="0 0 24 24">
        <path d="M8.5 7L3.5 12l5 5M15.5 7l5 5-5 5" />
      </symbol>
      <symbol id="i-badge" viewBox="0 0 24 24">
        <circle cx="12" cy="9" r="5.5" />
        <path d="M8.5 13.5L7 21l5-2.5 5 2.5-1.5-7.5" />
      </symbol>
      <symbol id="i-cloud" viewBox="0 0 24 24">
        <path d="M7 18.5a4.5 4.5 0 0 1-.6-9 6 6 0 0 1 11.4 1.6A3.8 3.8 0 0 1 17.5 18.5z" />
      </symbol>
      <symbol id="i-arch" viewBox="0 0 24 24">
        <rect x="9" y="3.5" width="6" height="5" rx="1.5" />
        <rect x="3.5" y="15.5" width="6" height="5" rx="1.5" />
        <rect x="14.5" y="15.5" width="6" height="5" rx="1.5" />
        <path d="M12 8.5V12M6.5 15.5V12h11v3.5" />
      </symbol>
      <symbol id="i-bug" viewBox="0 0 24 24">
        <rect x="7.5" y="7.5" width="9" height="12" rx="4.5" />
        <path d="M12 11.5v8M7.5 13H4M20 13h-3.5M9 7.5V6a3 3 0 0 1 6 0v1.5M5 8l2.6 1.6M19 8l-2.6 1.6M5 19l2.8-1.8M19 19l-2.8-1.8" />
      </symbol>
      <symbol id="i-infinity" viewBox="0 0 24 24">
        <path d="M12 12c-2-3-3.6-4.5-5.5-4.5a4.5 4.5 0 0 0 0 9C8.4 16.5 10 15 12 12s3.6-4.5 5.5-4.5a4.5 4.5 0 0 1 0 9C15.6 16.5 14 15 12 12z" />
      </symbol>
      <symbol id="ind-fintech" viewBox="0 0 24 24">
        <rect x="3.5" y="6" width="17" height="12" rx="2.5" />
        <path d="M3.5 10h17M7 14.5h4" />
      </symbol>
      <symbol id="ind-health" viewBox="0 0 24 24">
        <path d="M12 20s-7.5-4.4-7.5-10A4.2 4.2 0 0 1 12 7.4 4.2 4.2 0 0 1 19.5 10c0 5.6-7.5 10-7.5 10z" />
        <path d="M8 12h2l1.2-2 1.8 4 1.2-2H16" />
      </symbol>
      <symbol id="ind-logistics" viewBox="0 0 24 24">
        <path d="M3.5 7h10v9h-10zM13.5 10h4l3 3v3h-7" />
        <circle cx="7.5" cy="17.5" r="1.8" />
        <circle cx="17" cy="17.5" r="1.8" />
      </symbol>
      <symbol id="ind-retail" viewBox="0 0 24 24">
        <path d="M5.5 8h13l-1 12h-11z" />
        <path d="M9 10V7a3 3 0 0 1 6 0v3" />
      </symbol>
      <symbol id="ind-manufacturing" viewBox="0 0 24 24">
        <path d="M3.5 20V10l5 3V10l5 3V6h3l1 14z" />
        <path d="M3.5 20h17" />
      </symbol>
      <symbol id="ind-realestate" viewBox="0 0 24 24">
        <path d="M4 11l8-6.5 8 6.5" />
        <path d="M6 9.5V20h12V9.5" />
        <path d="M10 20v-5h4v5" />
      </symbol>
      <symbol id="ind-insurance" viewBox="0 0 24 24">
        <path d="M12 21.5s7.5-3.6 7.5-9.5V5.5L12 3 4.5 5.5V12c0 5.9 7.5 9.5 7.5 9.5z" />
        <path d="M9 12l2.2 2.2L15.5 10" />
      </symbol>
      <symbol id="ind-education" viewBox="0 0 24 24">
        <path d="M2.5 9.5L12 5l9.5 4.5L12 14z" />
        <path d="M6.5 11.5V16c0 1.4 2.5 3 5.5 3s5.5-1.6 5.5-3v-4.5M21.5 9.5V14" />
      </symbol>
      <symbol id="ind-legal" viewBox="0 0 24 24">
        <path d="M12 4v16M7 20h10M5 7h14" />
        <path d="M5 7l-2.5 6a2.5 2.5 0 0 0 5 0zM19 7l-2.5 6a2.5 2.5 0 0 0 5 0z" />
      </symbol>
      <symbol id="ind-travel" viewBox="0 0 24 24">
        <path d="M10.5 13.5L4 11l1.5-1.5 7 1 4-4c1-1 2.5-1.5 3-1s0 2-1 3l-4 4 1 7L14 21l-2.5-6.5L8 18v2.5L6.5 22 5 19l-3-1.5L3.5 16H6z" />
      </symbol>
      <symbol id="ind-media" viewBox="0 0 24 24">
        <rect x="3.5" y="5.5" width="17" height="13" rx="2.5" />
        <path d="M10.5 9.5v5l4-2.5z" />
      </symbol>
      <symbol id="ind-energy" viewBox="0 0 24 24">
        <path d="M13 2.5L5.5 13.5H12l-1 8 7.5-11H12z" />
      </symbol>
      <symbol id="ind-telecom" viewBox="0 0 24 24">
        <path d="M12 11v10M8.5 21h7" />
        <circle cx="12" cy="9" r="2" />
        <path d="M7.8 4.8a6 6 0 0 0 0 8.4M16.2 4.8a6 6 0 0 1 0 8.4M5 2.5a9.5 9.5 0 0 0 0 13M19 2.5a9.5 9.5 0 0 1 0 13" />
      </symbol>
      <symbol id="ind-public" viewBox="0 0 24 24">
        <path d="M3.5 9L12 4l8.5 5zM4.5 20h15M3.5 20h17" />
        <path d="M6.5 10v8M10 10v8M14 10v8M17.5 10v8" />
      </symbol>
      <symbol id="i-x" viewBox="0 0 16 16">
        <path d="M4 4l8 8M12 4l-8 8" />
      </symbol>
      <symbol id="i-chev-d" viewBox="0 0 16 16">
        <path d="M3.5 6 8 10.5 12.5 6" />
      </symbol>
      <symbol id="i-search" viewBox="0 0 16 16">
        <circle cx="7" cy="7" r="4.5" />
        <path d="M10.5 10.5 14 14" />
      </symbol>
    </svg>
  );
}
