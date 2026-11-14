import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <Link
        className="hiring"
        href="/careers"
        aria-label="We are hiring — see open roles"
      >
        {" "}
        <div className="hiring-track" aria-hidden="true">
          <span>We are hiring</span>
          <span>We are hiring</span>
          <span>We are hiring</span>
          <span>We are hiring</span>
          <span>We are hiring</span>
          <span>We are hiring</span>
          <span>We are hiring</span>
          <span>We are hiring</span>
        </div>{" "}
      </Link>
      <div className="wrap">
        <div className="footer-main">
          <div className="footer-brand">
            <Link href="/" aria-label="Linwerk, home">
              <span className="wordmark" aria-hidden="true">
                Linwerk
              </span>
            </Link>
          </div>
          <nav className="footer-col" aria-labelledby="f-company">
            <h3 id="f-company">Company</h3>
            <ul>
              <li>
                <Link href="/services">Services</Link>
              </li>
              <li>
                <Link href="/industries">Industries</Link>
              </li>
              <li>
                <Link href="/about">About us</Link>
              </li>
              <li>
                <Link href="/careers">Careers</Link>
              </li>
            </ul>
          </nav>
          <nav className="footer-col" aria-labelledby="f-start">
            <h3 id="f-start">Work with us</h3>
            <ul>
              <li>
                <Link href="/request">Request engineers</Link>
              </li>
              <li>
                <Link href="/contact?type=project">Discuss a project</Link>
              </li>
            </ul>
          </nav>
          <div className="footer-col">
            <h3 id="f-contact">Contact</h3>
            <ul aria-labelledby="f-contact">
              <li>
                <a href="mailto:hello@example.com">Email</a>
              </li>
              <li>
                <a href="https://x.com/" rel="noopener">
                  X (Twitter)
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/" rel="noopener">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-legal">
          <p>© 2026 Linwerk. All rights reserved.</p>
          <ul>
            <li>
              <Link href="/privacy">Privacy policy</Link>
            </li>
            <li>
              <Link href="/terms">Terms and conditions</Link>
            </li>
            <li>
              <Link href="/terms-of-use">Terms of use</Link>
            </li>
            <li>
              <Link href="/cookies">Cookie policy</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
