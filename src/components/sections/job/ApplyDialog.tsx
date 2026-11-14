export function ApplyDialog() {
  return (
    <dialog
      className="apply"
      id="apply"
      aria-labelledby="ap-title"
      data-lenis-prevent=""
    >
      <div className="ap-in">
        <div className="ap-head">
          <div>
            <h2 id="ap-title">Apply</h2>
            <p className="ap-role" data-j="title" />
          </div>
          <button
            type="button"
            className="ap-x"
            aria-label="Close"
            data-close=""
          >
            <svg className="ic" aria-hidden="true">
              <use href="#i-x" />
            </svg>
          </button>
        </div>
        <form className="ap-form" noValidate>
          <label className="ap-f">
            First name
            <input
              name="first"
              autoComplete="given-name"
              placeholder="Enter your first name"
              required
              aria-describedby="m-first"
            />
            <span className="ap-msg" id="m-first" />
          </label>{" "}
          <label className="ap-f">
            Last name
            <input
              name="last"
              autoComplete="family-name"
              placeholder="Enter your last name"
              required
              aria-describedby="m-last"
            />
            <span className="ap-msg" id="m-last" />
          </label>{" "}
          <label className="ap-f">
            Email
            <input
              name="email"
              type="email"
              autoComplete="email"
              placeholder="Enter your email"
              required
              aria-describedby="m-email"
            />
            <span className="ap-msg" id="m-email" />
          </label>{" "}
          <label className="ap-f">
            Phone (optional)
            <input
              name="phone"
              type="tel"
              autoComplete="tel"
              placeholder="Enter your phone number"
              aria-describedby="m-phone"
            />
            <span className="ap-msg" id="m-phone" />
          </label>{" "}
          <label className="ap-f full">
            LinkedIn or portfolio (optional)
            <input
              name="link"
              type="text"
              inputMode="url"
              autoComplete="url"
              placeholder="Enter your LinkedIn or portfolio link"
              aria-describedby="m-link"
            />
            <span className="ap-msg" id="m-link" />
          </label>
          <div className="ap-f full">
            CV
            <label className="ap-file">
              <span>PDF or DOC, up to 10 MB</span>
              <b>Upload</b>
              <input
                name="cv"
                type="file"
                accept=".pdf,.doc,.docx"
                required
                aria-describedby="m-cv"
              />
            </label>
            <span className="ap-msg" id="m-cv" />
          </div>
          <label className="ap-f full">
            Anything you&apos;d like us to know (optional)
            <textarea
              name="note"
              placeholder="Enter anything else we should know"
            >
              {""}
            </textarea>
          </label>{" "}
          <label className="ap-ok full" style={{ gridColumn: "1/-1" }}>
            <input type="checkbox" name="keep" defaultChecked />
            Keep my application on file for 12 months for other roles.
          </label>
          <p className="ap-err" aria-live="polite" />
          <div className="ap-act">
            <button
              type="button"
              className="tlink"
              data-close=""
              style={{ border: "0", background: "none", cursor: "pointer" }}
            >
              Cancel
            </button>
            <button type="submit" className="btn btn-primary">
              Send application
            </button>
          </div>
        </form>
        <div className="ap-done" role="status">
          <p>
            Thank you. Your application is in. We reply to every applicant
            within five business days.
          </p>
          <button type="button" className="btn btn-ghost" data-close="">
            Close
          </button>
        </div>
      </div>
    </dialog>
  );
}
