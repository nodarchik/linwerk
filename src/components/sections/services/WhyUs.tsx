import Link from "next/link";
import type React from "react";

export function WhyUs() {
  return (
    <section
      className="block paths why-acc"
      id="why-us"
      data-why="focus"
      aria-labelledby="why-title"
    >
      <div className="wrap paths-grid">
        <div className="paths-head">
          <h2 id="why-title" data-reveal="">
            Why teams choose us
          </h2>
        </div>
        <div className="paths-list">
          <ol className="path-list">
            <li className="path is-active">
              <button
                className="path-head"
                type="button"
                aria-expanded="true"
                aria-controls="why-1"
              >
                <span className="t">Senior engineers, not trainees</span>
              </button>
              <div className="path-body" id="why-1">
                <div>
                  <p>
                    Most of our team is senior or above — engineers who have shipped before, not
                    people learning on your project.
                  </p>
                </div>
              </div>
              <span className="path-progress" aria-hidden="true" />
            </li>
            <li className="path">
              <button
                className="path-head"
                type="button"
                aria-expanded="false"
                aria-controls="why-2"
              >
                <span className="t">Start small, grow with us</span>
              </button>
              <div className="path-body" id="why-2">
                <div>
                  <p>
                    Start with one engineer on a risk-free trial. When you need more, our
                    architects, QA and DevOps are already in-house.
                  </p>
                </div>
              </div>
              <span className="path-progress" aria-hidden="true" />
            </li>
            <li className="path">
              <button
                className="path-head"
                type="button"
                aria-expanded="false"
                aria-controls="why-3"
              >
                <span className="t">You own everything</span>
              </button>
              <div className="path-body" id="why-3">
                <div>
                  <p>
                    Code, IP, documentation and infrastructure accounts — yours from day one, and in
                    writing.
                  </p>
                </div>
              </div>
              <span className="path-progress" aria-hidden="true" />
            </li>
          </ol>
          <Link className="btn btn-primary" href="/request">
            Request engineers
          </Link>
        </div>
        <div className="path-stage" aria-hidden="true">
          <div className="stage-layer is-active">
            <span className="stage-label">01 · Seniority</span>
            <div className="ui-fit wf" data-w="520" data-h="520">
              <div className="sc sv3" data-steps="q1:200 q2:1500 q3:600">
                <div className="wcard">
                  <div className="fx-h">
                    <b>Our engineers</b>
                    <span className="fx-lo">by experience</span>
                  </div>
                  <div className="b3">
                    <div className="b3-line">
                      <span>Senior</span>
                    </div>
                    <i className="s" style={{ "--i": "0", "--h": "0.86" } as React.CSSProperties} />
                    <i className="s" style={{ "--i": "1", "--h": "0.72" } as React.CSSProperties} />
                    <i className="s" style={{ "--i": "2", "--h": "0.95" } as React.CSSProperties} />
                    <i className="s" style={{ "--i": "3", "--h": "0.64" } as React.CSSProperties} />
                    <i className="m" style={{ "--i": "4", "--h": "0.4" } as React.CSSProperties} />
                    <i className="s" style={{ "--i": "5", "--h": "0.78" } as React.CSSProperties} />
                    <i className="s" style={{ "--i": "6", "--h": "0.9" } as React.CSSProperties} />
                    <i className="s" style={{ "--i": "7", "--h": "0.68" } as React.CSSProperties} />
                    <i className="s" style={{ "--i": "8", "--h": "0.82" } as React.CSSProperties} />
                    <i className="m" style={{ "--i": "9", "--h": "0.36" } as React.CSSProperties} />
                    <i
                      className="s"
                      style={{ "--i": "10", "--h": "0.74" } as React.CSSProperties}
                    />
                    <i
                      className="s"
                      style={{ "--i": "11", "--h": "0.88" } as React.CSSProperties}
                    />
                    <i className="s" style={{ "--i": "12", "--h": "0.6" } as React.CSSProperties} />
                    <i
                      className="s"
                      style={{ "--i": "13", "--h": "0.79" } as React.CSSProperties}
                    />
                  </div>
                  <ul className="fx-key">
                    <li>
                      <i className="k-sr" />
                      <b>Senior and above</b>
                      <span className="fx-pill fx-dark fx-pop">Most of the team</span>
                    </li>
                    <li>
                      <i className="k-tr" />
                      <span className="fx-lo">Trainees</span>
                      <span className="fx-pill fx-soft fx-pop">None</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="stage-layer">
            <span className="stage-label">02 · Start small, grow</span>
            <div className="ui-fit wf" data-w="520" data-h="520">
              <div className="sc sf-depth" data-steps="t1:300 t2:1900 q1:700 q2:600 q3:600">
                <div className="wcard">
                  <div className="fx-h">
                    <b>Your engagement</b>
                    <span className="fx-lo">Start small, grow</span>
                  </div>
                  <div className="fx-tri">
                    <div className="fx-trial">
                      <b>Risk-free trial</b>
                      <span className="fx-pill fx-dark fx-pop">
                        <svg className="chk">
                          <use href="#i-check" />
                        </svg>
                        Passed
                      </span>
                    </div>
                    <span className="fx-trk">
                      <i />
                    </span>
                    <p className="fx-note">One engineer · no recruitment fee</p>
                  </div>
                  <ul className="fx-team">
                    <li>
                      <span className="fx-av ic-tile">
                        <svg className="ic">
                          <use href="#i-code" />
                        </svg>
                      </span>
                      <b>Senior backend engineer</b>
                      <span className="fx-lo">From week 1</span>
                    </li>
                    <li className="add a1">
                      <span className="fx-av ic-tile">
                        <svg className="ic">
                          <use href="#i-arch" />
                        </svg>
                      </span>
                      <b>Architect</b>
                      <span className="fx-pill fx-soft">Added when you grow</span>
                    </li>
                    <li className="add a2">
                      <span className="fx-av ic-tile">
                        <svg className="ic">
                          <use href="#i-bug" />
                        </svg>
                      </span>
                      <b>QA engineer</b>
                      <span className="fx-pill fx-soft">Added when you grow</span>
                    </li>
                    <li className="add a3">
                      <span className="fx-av ic-tile">
                        <svg className="ic">
                          <use href="#i-infinity" />
                        </svg>
                      </span>
                      <b>DevOps engineer</b>
                      <span className="fx-pill fx-soft">Added when you grow</span>
                    </li>
                  </ul>
                  <p className="fx-note fx-staff">Our own specialists: no hiring needed</p>
                </div>
              </div>
            </div>
          </div>
          <div className="stage-layer">
            <span className="stage-label">03 · Ownership</span>
            <div className="ui-fit wf" data-w="520" data-h="520">
              <div className="sc sf-own" data-steps="q1:500 q2:420 q3:420 q4:420 q5:550 q6:950">
                <div className="wcard">
                  <div className="fx-h">
                    <b>Yours</b>
                    <span className="fx-pill fx-soft fx-pop">From day one</span>
                  </div>
                  <div className="fx-assets">
                    <div className="o1">
                      <svg className="ic">
                        <use href="#i-code" />
                      </svg>
                      <b>Code</b>
                      <span className="fx-lo">Every repository</span>
                      <span className="fx-pill fx-dark fx-pop">You</span>
                    </div>
                    <div className="o2">
                      <svg className="ic">
                        <use href="#i-badge" />
                      </svg>
                      <b>IP</b>
                      <span className="fx-lo">All work product</span>
                      <span className="fx-pill fx-dark fx-pop">You</span>
                    </div>
                    <div className="o3">
                      <svg className="ic">
                        <use href="#i-doc" />
                      </svg>
                      <b>Documentation</b>
                      <span className="fx-lo">Architecture, runbooks</span>
                      <span className="fx-pill fx-dark fx-pop">You</span>
                    </div>
                    <div className="o4">
                      <svg className="ic">
                        <use href="#i-cloud" />
                      </svg>
                      <b>Infrastructure</b>
                      <span className="fx-lo">Cloud, domains, CI</span>
                      <span className="fx-pill fx-dark fx-pop">You</span>
                    </div>
                  </div>
                  <div className="fx-sign">
                    <span className="fx-lo">Contract · ownership clause</span>{" "}
                    <svg className="sig" viewBox="0 0 104 40">
                      <path
                        pathLength="1"
                        d="M4 28c6-16 12-22 15-14s-4 18 2 14 8-20 13-16-2 14 4 13 7-12 11-9 0 9 6 7 9-8 14-6 6 5 10 3 9-4 12-2"
                      />
                    </svg>{" "}
                    <span className="fx-pill fx-dark fx-pop">
                      <svg className="chk">
                        <use href="#i-check" />
                      </svg>
                      In writing
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
