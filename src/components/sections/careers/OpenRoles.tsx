export function OpenRoles() {
  return (
    <section className="svc-sec" id="open-roles" aria-labelledby="roles-title">
      <div className="wrap">
        <div className="svc-head is-stack">
          <h2 id="roles-title" data-reveal="">
            Open positions
          </h2>
        </div>
        <div className="jb">
          <aside className="jb-side" aria-label="Filter roles">
            <div className="jb-grp is-open">
              <button
                type="button"
                className="jb-gh"
                aria-expanded="true"
                aria-controls="jb-loc"
              >
                Filter by location
                <svg className="ic" aria-hidden="true">
                  <use href="#i-chev-d" />
                </svg>
              </button>
              <div
                className="jb-chips"
                id="jb-loc"
                role="group"
                aria-label="Location"
              />
            </div>
            <div className="jb-grp is-open">
              <button
                type="button"
                className="jb-gh"
                aria-expanded="true"
                aria-controls="jb-dept"
              >
                Filter by department
                <svg className="ic" aria-hidden="true">
                  <use href="#i-chev-d" />
                </svg>
              </button>
              <div
                className="jb-list"
                id="jb-dept"
                role="group"
                aria-label="Department"
              />
            </div>
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
                />
              </label>{" "}
              <button type="button" className="jb-reset" id="jb-reset">
                Reset all
              </button>{" "}
              <span className="jb-count" aria-live="polite">
                Viewing: <b id="jb-n" />
              </span>
            </div>
            <div className="jb-box">
              <ul className="jobs" id="roles" data-lenis-prevent="" />
              <div className="jobs-none" id="jobs-none">
                <p>No roles match those filters right now.</p>
                <button type="button" className="btn btn-ghost" id="rf-clear">
                  Clear filters
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
