export function Role() {
  return (
    <section className="svc-sec" id="role" aria-label="About the role">
      <div className="wrap jd">
        <div className="jd-body">
          <h2>About the role</h2>
          <div data-j="about" />
          <h2>What you&apos;ll work on</h2>
          <div data-j="work" />
          <h2>About you</h2>
          <div data-j="you" />
          <h2>Nice to have</h2>
          <div data-j="nice" />
          <h2>How we hire</h2>
          <div data-j="hire" />
          <h2>What we offer</h2>
          <div data-j="offer" />
        </div>
        <aside className="jd-card" aria-label="Role summary">
          <dl>
            <div>
              <dt>Department</dt>
              <dd data-j="dept" />
            </div>
            <div>
              <dt>Location</dt>
              <dd data-j="location" />
            </div>
            <div>
              <dt>Work mode</dt>
              <dd data-j="mode" />
            </div>
            <div>
              <dt>Type</dt>
              <dd data-j="type" />
            </div>
            <div>
              <dt>Level</dt>
              <dd data-j="level" />
            </div>
          </dl>
          <button type="button" className="btn btn-primary" data-apply="">
            Apply for this role
          </button>
        </aside>
      </div>
    </section>
  );
}
