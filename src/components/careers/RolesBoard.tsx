"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export interface RoleCard {
  slug: string;
  title: string;
  dept: string;
  location: string;
  /** "Engineering · Tbilisi · Hybrid · Full-time" */
  meta: string;
  /** Everything the search looks through, lower-cased. */
  haystack: string;
}

interface RolesBoardProps {
  roles: RoleCard[];
  locations: string[];
  departments: string[];
}

function FilterGroup({
  id,
  title,
  className,
  label,
  children,
}: {
  id: string;
  title: string;
  className: string;
  label: string;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(true);
  return (
    <div className={open ? "jb-grp is-open" : "jb-grp"}>
      <button
        type="button"
        className="jb-gh"
        aria-expanded={open}
        aria-controls={id}
        onClick={() => setOpen((o) => !o)}
      >
        {title}
        <svg className="ic" aria-hidden="true">
          <use href="#i-chev-d" />
        </svg>
      </button>
      <div className={className} id={id} role="group" aria-label={label}>
        {children}
      </div>
    </div>
  );
}

/**
 * Open roles. Location chips and the department list are single-choice (a chip pressed again lets go); search
 * matches title, department, place, mode, type, level, summary and the description; all three have to match.
 * Reset all clears them; the count shows what is left; nothing left shows the empty state.
 */
export function RolesBoard({ roles, locations, departments }: RolesBoardProps) {
  const [location, setLocation] = useState("");
  const [department, setDepartment] = useState("");
  const [query, setQuery] = useState("");
  const listRef = useRef<HTMLUListElement>(null);

  const needle = query.trim().toLowerCase();
  const visible = roles.map(
    (role) =>
      (!department || role.dept === department) &&
      (!location || role.location === location) &&
      (!needle || role.haystack.includes(needle)),
  );
  const count = visible.filter(Boolean).length;

  // a new filter starts the list from its top
  useEffect(() => {
    if (listRef.current) listRef.current.scrollTop = 0;
  }, [location, department, needle]);

  const reset = () => {
    setLocation("");
    setDepartment("");
    setQuery("");
  };

  return (
    <div className="jb">
      <aside className="jb-side" aria-label="Filter roles">
        <FilterGroup id="jb-loc" title="Filter by location" className="jb-chips" label="Location">
          {locations.map((v) => (
            <button
              key={v}
              type="button"
              aria-pressed={v === location}
              onClick={() => setLocation(v === location ? "" : v)}
            >
              {v}
            </button>
          ))}
        </FilterGroup>
        <FilterGroup
          id="jb-dept"
          title="Filter by department"
          className="jb-list"
          label="Department"
        >
          {["", ...departments].map((v) => (
            <button
              key={v}
              type="button"
              aria-pressed={v === department}
              onClick={() => setDepartment(v)}
            >
              {v || "All"}
            </button>
          ))}
        </FilterGroup>
      </aside>
      <div className="jb-main">
        <div className="jb-bar">
          <label className="jb-search">
            <svg className="ic" aria-hidden="true">
              <use href="#i-search" />
            </svg>
            <input
              id="jb-q"
              type="search"
              placeholder="Search by keyword…"
              aria-label="Search roles"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </label>{" "}
          <button type="button" className="jb-reset" id="jb-reset" onClick={reset}>
            Reset all
          </button>{" "}
          <span className="jb-count" aria-live="polite">
            Viewing:{" "}
            <b id="jb-n">
              {count} {count === 1 ? "role" : "roles"}
            </b>
          </span>
        </div>
        <div className="jb-box">
          <ul className="jobs" id="roles" data-lenis-prevent="" ref={listRef} hidden={count === 0}>
            {roles.map((role, i) => (
              <li key={role.slug} hidden={!visible[i]}>
                <Link href={`/careers/${role.slug}`}>
                  <h3>{role.title}</h3>
                  <span className="j-meta">{role.meta}</span>
                  <span className="j-go" aria-hidden="true">
                    <svg className="ic">
                      <use href="#i-chev-r" />
                    </svg>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <div className={count === 0 ? "jobs-none on" : "jobs-none"} id="jobs-none">
            <p>No roles match those filters right now.</p>
            <button type="button" className="btn btn-ghost" id="rf-clear" onClick={reset}>
              Clear filters
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
