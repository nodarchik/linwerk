import { RequestSentDialog } from "@/components/forms/RequestSentDialog";

/** The "Request sent" dialog: an envelope drawn in dots and lines, and the thanks. */
export function RequestSent() {
  return (
    <RequestSentDialog>
      <div className="rq-ok-in" tabIndex={-1} autoFocus>
        <button type="button" className="rq-x" aria-label="Close" data-close="">
          <svg className="ic" aria-hidden="true">
            <use href="#i-x" />
          </svg>
        </button>{" "}
        <svg className="rq-art" viewBox="0 0 200 200" aria-hidden="true">
          <defs>
            <clipPath id="rq-clip">
              <path d="M34 62H166V146H34Z" />
            </clipPath>
          </defs>
          <g>
            <circle className="dt" cx="20.0" cy="164.0" r="1" />
            <circle className="dt" cx="25.7" cy="164.0" r="1" />
            <circle className="dt" cx="31.4" cy="164.0" r="1" />
            <circle className="dt" cx="37.1" cy="164.0" r="1" />
            <circle className="dt" cx="42.9" cy="164.0" r="1" />
            <circle className="dt" cx="48.6" cy="164.0" r="1" />
            <circle className="dt" cx="54.3" cy="164.0" r="1" />
            <circle className="dt" cx="60.0" cy="164.0" r="1" />
            <circle className="dt" cx="65.7" cy="164.0" r="1" />
            <circle className="dt" cx="71.4" cy="164.0" r="1" />
            <circle className="dt" cx="77.1" cy="164.0" r="1" />
            <circle className="dt" cx="82.9" cy="164.0" r="1" />
            <circle className="dt" cx="88.6" cy="164.0" r="1" />
            <circle className="dt" cx="94.3" cy="164.0" r="1" />
            <circle className="dt" cx="100.0" cy="164.0" r="1" />
            <circle className="dt" cx="105.7" cy="164.0" r="1" />
            <circle className="dt" cx="111.4" cy="164.0" r="1" />
            <circle className="dt" cx="117.1" cy="164.0" r="1" />
            <circle className="dt" cx="122.9" cy="164.0" r="1" />
            <circle className="dt" cx="128.6" cy="164.0" r="1" />
            <circle className="dt" cx="134.3" cy="164.0" r="1" />
            <circle className="dt" cx="140.0" cy="164.0" r="1" />
            <circle className="dt" cx="145.7" cy="164.0" r="1" />
            <circle className="dt" cx="151.4" cy="164.0" r="1" />
            <circle className="dt" cx="157.1" cy="164.0" r="1" />
            <circle className="dt" cx="162.9" cy="164.0" r="1" />
            <circle className="dt" cx="168.6" cy="164.0" r="1" />
            <circle className="dt" cx="174.3" cy="164.0" r="1" />
            <circle className="dt" cx="180.0" cy="164.0" r="1" />
            <circle className="dt" cx="181.0" cy="58.0" r="1" />
            <circle className="dt" cx="180.4" cy="63.6" r="1" />
            <circle className="dt" cx="178.7" cy="69.0" r="1" />
            <circle className="dt" cx="175.8" cy="73.9" r="1" />
            <circle className="dt" cx="172.1" cy="78.1" r="1" />
            <circle className="dt" cx="167.5" cy="81.4" r="1" />
            <circle className="dt" cx="162.3" cy="83.7" r="1" />
            <circle className="dt" cx="156.8" cy="84.9" r="1" />
            <circle className="dt" cx="151.2" cy="84.9" r="1" />
            <circle className="dt" cx="145.7" cy="83.7" r="1" />
            <circle className="dt" cx="140.5" cy="81.4" r="1" />
            <circle className="dt" cx="135.9" cy="78.1" r="1" />
            <circle className="dt" cx="132.2" cy="73.9" r="1" />
            <circle className="dt" cx="129.3" cy="69.0" r="1" />
            <circle className="dt" cx="127.6" cy="63.6" r="1" />
            <circle className="dt" cx="127.0" cy="58.0" r="1" />
            <circle className="dt" cx="127.6" cy="52.4" r="1" />
            <circle className="dt" cx="129.3" cy="47.0" r="1" />
            <circle className="dt" cx="132.2" cy="42.1" r="1" />
            <circle className="dt" cx="135.9" cy="37.9" r="1" />
            <circle className="dt" cx="140.5" cy="34.6" r="1" />
            <circle className="dt" cx="145.7" cy="32.3" r="1" />
            <circle className="dt" cx="151.2" cy="31.1" r="1" />
            <circle className="dt" cx="156.8" cy="31.1" r="1" />
            <circle className="dt" cx="162.3" cy="32.3" r="1" />
            <circle className="dt" cx="167.5" cy="34.6" r="1" />
            <circle className="dt" cx="172.1" cy="37.9" r="1" />
            <circle className="dt" cx="175.8" cy="42.1" r="1" />
            <circle className="dt" cx="178.7" cy="47.0" r="1" />
            <circle className="dt" cx="180.4" cy="52.4" r="1" />
            <circle className="dt" cx="100.0" cy="150.0" r="1" />
            <circle className="dt" cx="100.0" cy="155.6" r="1" />
            <circle className="dt" cx="100.0" cy="161.2" r="1" />
          </g>
          <path className="bg" d="M34 62H166V146H34Z" />
          <g className="gl" clipPath="url(#rq-clip)">
            <rect className="gb" x="34" y="62" width="132" height="84" strokeWidth="2.10" />
            <rect className="gb" x="34" y="62" width="132" height="84" strokeWidth="4.20" />
            <rect className="gb" x="34" y="62" width="132" height="84" strokeWidth="6.30" />
            <rect className="gb" x="34" y="62" width="132" height="84" strokeWidth="8.40" />
            <rect className="gb" x="34" y="62" width="132" height="84" strokeWidth="10.50" />
            <rect className="gb" x="34" y="62" width="132" height="84" strokeWidth="12.60" />
            <rect className="gb" x="34" y="62" width="132" height="84" strokeWidth="14.70" />
            <rect className="gb" x="34" y="62" width="132" height="84" strokeWidth="16.80" />
            <rect className="gb" x="34" y="62" width="132" height="84" strokeWidth="18.90" />
            <rect className="gb" x="34" y="62" width="132" height="84" strokeWidth="21.00" />
            <rect className="gb" x="34" y="62" width="132" height="84" strokeWidth="23.10" />
            <rect className="gb" x="34" y="62" width="132" height="84" strokeWidth="25.20" />
          </g>
          <path className="ln" pathLength="1" d="M34 62H166V146H34Z" />
          <path className="ln l2" pathLength="1" d="M34 62L100 108L166 62" />
          <path className="ln l2" pathLength="1" d="M34 146L82 102" />
          <path className="ln l2" pathLength="1" d="M166 146L118 102" />
          <circle className="nd" cx="34" cy="62" r="2.2" />
          <circle className="nd" cx="34" cy="146" r="2.2" />
          <circle className="nd" cx="166" cy="146" r="2.2" />
          <circle className="nd" cx="100" cy="108" r="2.2" />
          <g className="acg">
            <circle className="ac" cx="154" cy="58" r="18" />
          </g>
          <path className="rq-tick" pathLength="1" d="M146 58.5l5.5 5.5 10.5-11" />
        </svg>
        <h2 id="rq-ok-t">Request sent</h2>
        <p id="rq-ok-d">Thanks, we’ll be in touch within two business days.</p>
      </div>
    </RequestSentDialog>
  );
}
