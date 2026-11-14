import Link from "next/link";

export function Integrations() {
  return (
    <section
      className="svc-sec paths int-acc"
      id="integrations"
      data-v="globe"
      aria-labelledby="int-title"
    >
      <div className="wrap paths-grid">
        <div className="paths-head">
          <h2 id="int-title" data-reveal="">
            Systems we connect
          </h2>
        </div>
        <div className="paths-list">
          <div className="engage-foot">
            <p>Sixty systems in six groups. Not listed? We connect it too.</p>
          </div>
          <ol className="path-list">
            <li className="path is-active">
              <button
                className="path-head"
                type="button"
                aria-expanded="true"
                aria-controls="int-1"
              >
                <span className="t">AI &amp; analytics</span>
              </button>
              <div className="path-body" id="int-1">
                <div>
                  <p>Chatbots, agents and copilots, and the BI tools that read your data.</p>
                  <ul className="int-names">
                    <li>AI chatbots</li>
                    <li>Voice agents</li>
                    <li>RAG knowledge bases</li>
                    <li>Autonomous agents</li>
                    <li>In-product copilots</li>
                    <li>Power BI</li>
                    <li>Tableau</li>
                    <li>Looker</li>
                    <li>Metabase</li>
                    <li>GA4</li>
                  </ul>
                </div>
              </div>
              <span className="path-progress" aria-hidden="true" />
            </li>
            <li className="path">
              <button
                className="path-head"
                type="button"
                aria-expanded="false"
                aria-controls="int-2"
              >
                <span className="t">Sales &amp; commerce</span>
              </button>
              <div className="path-body" id="int-2">
                <div>
                  <p>Your CRM and your storefronts, kept in step.</p>
                  <ul className="int-names">
                    <li>Salesforce</li>
                    <li>HubSpot</li>
                    <li>Microsoft Dynamics</li>
                    <li>Zoho</li>
                    <li>Pipedrive</li>
                    <li>Shopify</li>
                    <li>WooCommerce</li>
                    <li>Magento</li>
                    <li>BigCommerce</li>
                    <li>Amazon</li>
                  </ul>
                </div>
              </div>
              <span className="path-progress" aria-hidden="true" />
            </li>
            <li className="path">
              <button
                className="path-head"
                type="button"
                aria-expanded="false"
                aria-controls="int-3"
              >
                <span className="t">Finance &amp; operations</span>
              </button>
              <div className="path-body" id="int-3">
                <div>
                  <p>ERP and payments, from checkout to the ledger.</p>
                  <ul className="int-names">
                    <li>SAP</li>
                    <li>Oracle</li>
                    <li>NetSuite</li>
                    <li>Dynamics 365</li>
                    <li>Odoo</li>
                    <li>Stripe</li>
                    <li>Adyen</li>
                    <li>PayPal</li>
                    <li>Braintree</li>
                    <li>Checkout.com</li>
                  </ul>
                </div>
              </div>
              <span className="path-progress" aria-hidden="true" />
            </li>
            <li className="path">
              <button
                className="path-head"
                type="button"
                aria-expanded="false"
                aria-controls="int-4"
              >
                <span className="t">People &amp; identity</span>
              </button>
              <div className="path-body" id="int-4">
                <div>
                  <p>HR and payroll, and sign-in your security team approves.</p>
                  <ul className="int-names">
                    <li>Workday</li>
                    <li>BambooHR</li>
                    <li>Personio</li>
                    <li>ATS platforms</li>
                    <li>Payroll providers</li>
                    <li>SSO</li>
                    <li>SAML</li>
                    <li>OAuth 2.0</li>
                    <li>OIDC</li>
                    <li>Okta</li>
                  </ul>
                </div>
              </div>
              <span className="path-progress" aria-hidden="true" />
            </li>
            <li className="path">
              <button
                className="path-head"
                type="button"
                aria-expanded="false"
                aria-controls="int-5"
              >
                <span className="t">Messaging &amp; location</span>
              </button>
              <div className="path-body" id="int-5">
                <div>
                  <p>Chat, calls and maps inside your product.</p>
                  <ul className="int-names">
                    <li>WhatsApp Business API</li>
                    <li>Telegram</li>
                    <li>Slack</li>
                    <li>Microsoft Teams</li>
                    <li>Twilio</li>
                    <li>Google Maps</li>
                    <li>Mapbox</li>
                    <li>HERE</li>
                    <li>Route optimisation</li>
                    <li>Carrier and shipping APIs</li>
                  </ul>
                </div>
              </div>
              <span className="path-progress" aria-hidden="true" />
            </li>
            <li className="path">
              <button
                className="path-head"
                type="button"
                aria-expanded="false"
                aria-controls="int-6"
              >
                <span className="t">Legacy &amp; custom APIs</span>
              </button>
              <div className="path-body" id="int-6">
                <div>
                  <p>Mainframes, EDI and flat files, and the APIs that bridge them.</p>
                  <ul className="int-names">
                    <li>SOAP web services</li>
                    <li>EDI (X12, EDIFACT)</li>
                    <li>SFTP and flat-file feeds</li>
                    <li>On-premise databases</li>
                    <li>Mainframe interfaces</li>
                    <li>Custom API design</li>
                    <li>Webhook infrastructure</li>
                    <li>API gateways</li>
                    <li>ETL and two-way sync</li>
                    <li>Event streaming</li>
                  </ul>
                </div>
              </div>
              <span className="path-progress" aria-hidden="true" />
            </li>
          </ol>
          <Link className="btn btn-primary" href="/request">
            Request engineers
          </Link>
          <div className="int-now" aria-live="polite">
            <h3 />
            <p />
          </div>
          <p className="int-q">Not listed? We connect it too.</p>
        </div>
        <div className="path-stage int-orb" aria-hidden="true">
          <div className="iv-globe-box">
            <svg className="iv-dots">
              <g className="iv-back" />
              <g className="iv-front" />
            </svg>
            <ul className="iv-pins" />
          </div>
        </div>
      </div>
    </section>
  );
}
