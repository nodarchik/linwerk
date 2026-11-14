import Link from "next/link";

export function Request() {
  return (
    <section
      className="svc-sec rq-page"
      id="request"
      aria-labelledby="rq-title"
    >
      <div className="wrap">
        <nav className="crumbs" aria-label="Breadcrumb">
          <ol>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <span aria-current="page">Request engineers</span>
            </li>
          </ol>
        </nav>
        <div className="rq-grid">
          <div className="rq-side">
            <h1 id="rq-title">Request engineers</h1>
            <h2>What happens next?</h2>
            <ol className="rq-steps">
              <li>
                <i>1</i>
                <span>
                  We read your request and reply within two business days.
                </span>
              </li>
              <li>
                <i>2</i>
                <span>
                  If you need one, we sign an NDA before we talk details.
                </span>
              </li>
              <li>
                <i>3</i>
                <span>
                  You get the CVs of matched engineers and interview the ones
                  you like.
                </span>
              </li>
            </ol>
          </div>
          <div className="rq-card">
            <form className="rq-form" noValidate>
              <label className="rq-f">
                Company
                <input
                  name="company"
                  autoComplete="organization"
                  placeholder="Enter your company name"
                  required
                  aria-describedby="m-company"
                />
                <span className="rq-msg" id="m-company" />
              </label>{" "}
              <label className="rq-f">
                Industry
                <select name="industry" required aria-describedby="m-industry">
                  <option defaultValue="" disabled selected>
                    Select your industry
                  </option>
                  <option>Finance, banking &amp; insurance</option>
                  <option>Healthcare &amp; life sciences</option>
                  <option>Retail &amp; e-commerce</option>
                  <option>Manufacturing &amp; industrial</option>
                  <option>Logistics &amp; supply chain</option>
                  <option>Real estate &amp; PropTech</option>
                  <option>Education &amp; EdTech</option>
                  <option>Legal &amp; professional services</option>
                  <option>Travel &amp; hospitality</option>
                  <option>Media &amp; entertainment</option>
                  <option>Energy &amp; utilities</option>
                  <option>Telecom</option>
                  <option>Public sector &amp; GovTech</option>
                  <option>Other</option>
                </select>
                <span className="rq-msg" id="m-industry" />
              </label>{" "}
              <label className="rq-f">
                Company size
                <select name="size" required aria-describedby="m-size">
                  <option defaultValue="" disabled selected>
                    Select your company size
                  </option>
                  <option>1–10 employees</option>
                  <option>11–50 employees</option>
                  <option>51–200 employees</option>
                  <option>201–1,000 employees</option>
                  <option>More than 1,000 employees</option>
                </select>
                <span className="rq-msg" id="m-size" />
              </label>{" "}
              <label className="rq-f">
                Email
                <input
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="Enter your work email"
                  required
                  aria-describedby="m-email"
                />
                <span className="rq-msg" id="m-email" />
              </label>{" "}
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
