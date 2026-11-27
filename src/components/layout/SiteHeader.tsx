"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const NAV = [
  { href: "/services", label: "Services" },
  { href: "/industries", label: "Industries" },
  { href: "/about", label: "About us" },
  { href: "/careers", label: "Careers" },
] as const;

function NavList({ pathname }: { pathname: string }) {
  return (
    <ul>
      {NAV.map(({ href, label }) => (
        <li key={href}>
          <Link
            href={href}
            aria-current={pathname === href || pathname.startsWith(`${href}/`) ? "page" : undefined}
          >
            {label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

/** Sticky header. Clear only at the very top of the page; below 960px the nav moves into a drop-down panel. */
export function SiteHeader() {
  const pathname = usePathname();
  // The menu is open only for the path it was opened on, so a navigation closes it without an effect.
  const [openOn, setOpenOn] = useState<string | null>(null);
  const [atTop, setAtTop] = useState(true);
  const open = openOn === pathname;

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      setAtTop(window.scrollY < 4);
    };
    const ask = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", ask, { passive: true });
    window.addEventListener("resize", ask);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", ask);
      window.removeEventListener("resize", ask);
    };
  }, []);

  return (
    <header
      className={`site-header${atTop ? " over-hero" : ""}${open ? " open" : ""}`}
      id="site-header"
    >
      <div className="wrap bar">
        <Link className="brand" href="/" aria-label="Linwerk, home">
          <img
            className="brand-logo"
            src="/brand/linwerk-logo.svg"
            alt=""
            width={500}
            height={113}
          />
        </Link>
        <nav className="nav" aria-label="Main">
          <NavList pathname={pathname} />
        </nav>
        <div className="header-ctas">
          <Link className="tlink" href="/contact?type=project">
            Discuss a project
          </Link>
          <Link className="btn btn-primary btn-pill" href="/request">
            Request engineers
          </Link>
        </div>
        <button
          className="menu-btn"
          id="menu-btn"
          type="button"
          aria-expanded={open}
          aria-controls="menu-panel"
          onClick={() => setOpenOn(open ? null : pathname)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>
      <div className="menu-panel" id="menu-panel">
        <nav className="nav" aria-label="Main, mobile">
          <NavList pathname={pathname} />
        </nav>
        <div className="header-ctas">
          <Link className="btn btn-primary" href="/request">
            Request engineers
          </Link>
          <Link className="tlink" href="/contact?type=project">
            Discuss a project
          </Link>
        </div>
      </div>
    </header>
  );
}
