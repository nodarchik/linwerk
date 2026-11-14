import Link from "next/link";

export function WhatWeDo() {
  return (
    <section
      className="block paths capability"
      id="what-we-do"
      data-cap="focus"
      aria-labelledby="services-title"
    >
      <div className="wrap paths-grid">
        <div className="paths-head">
          <h2 id="services-title" data-reveal="">
            The capability behind the people
          </h2>
        </div>
        <div className="paths-list">
          <div className="engage-foot">
            <p>
              Nineteen services across six practice areas. Whether you’re borrowing two of our
              engineers or handing us a product, this is what they draw on.
            </p>
            <Link className="tlink" href="/services">
              Explore all services
            </Link>
          </div>
          <ol className="path-list">
            <li className="path is-active">
              <button
                className="path-head"
                type="button"
                aria-expanded="true"
                aria-controls="svc-1"
              >
                <span className="t">Product &amp; Software Engineering</span>
              </button>
              <div className="path-body" id="svc-1">
                <div>
                  <ul className="points">
                    <li>Custom software</li>
                    <li>Web platforms</li>
                    <li>Mobile apps</li>
                    <li>SaaS products</li>
                    <li>MVPs</li>
                    <li>Enterprise systems</li>
                  </ul>
                  <Link className="tlink" href="/services#product-software-engineering">
                    See the practice
                  </Link>
                </div>
              </div>
              <span className="path-progress" aria-hidden="true" />
            </li>
            <li className="path">
              <button
                className="path-head"
                type="button"
                aria-expanded="false"
                aria-controls="svc-2"
              >
                <span className="t">AI, Data &amp; Automation</span>
              </button>
              <div className="path-body" id="svc-2">
                <div>
                  <ul className="points">
                    <li>Machine learning</li>
                    <li>Generative AI and agents</li>
                    <li>Data platforms</li>
                    <li>Process automation</li>
                  </ul>
                  <Link className="tlink" href="/services#ai-data-automation">
                    See the practice
                  </Link>
                </div>
              </div>
              <span className="path-progress" aria-hidden="true" />
            </li>
            <li className="path">
              <button
                className="path-head"
                type="button"
                aria-expanded="false"
                aria-controls="svc-3"
              >
                <span className="t">Design &amp; Technology Strategy</span>
              </button>
              <div className="path-body" id="svc-3">
                <div>
                  <ul className="points">
                    <li>UI/UX</li>
                    <li>Product discovery</li>
                    <li>Architecture consulting</li>
                    <li>CTO-as-a-service</li>
                  </ul>
                  <Link className="tlink" href="/services#design-technology-strategy">
                    See the practice
                  </Link>
                </div>
              </div>
              <span className="path-progress" aria-hidden="true" />
            </li>
          </ol>
        </div>
        <div className="path-stage" aria-hidden="true">
          <div className="stage-layer is-active">
            <div className="cap-vis">
              <div className="cap-box">
                <div className="ui-fit wf" data-w="600" data-h="440">
                  <div
                    className="sc cf-eng"
                    data-steps="q1:500 q2:650 q3:650 q4:650 q5:500 q6:350 q7:350"
                  >
                    <div className="cf-card dyn">
                      <div className="fx-h">
                        <b>Checkout, new release</b>
                        <span className="fx-lo">Built by your team and ours</span>
                      </div>
                      <ol className="cf-pipe">
                        <li className="b1">
                          <span className="cf-trk">
                            <i />
                          </span>
                          <span>
                            Build
                            <svg className="chk">
                              <use href="#i-check" />
                            </svg>
                          </span>
                        </li>
                        <li className="b2">
                          <span className="cf-trk">
                            <i />
                          </span>
                          <span>
                            Test
                            <svg className="chk">
                              <use href="#i-check" />
                            </svg>
                          </span>
                        </li>
                        <li className="b3">
                          <span className="cf-trk">
                            <i />
                          </span>
                          <span>
                            Review
                            <svg className="chk">
                              <use href="#i-check" />
                            </svg>
                          </span>
                        </li>
                        <li className="b4">
                          <span className="cf-trk">
                            <i />
                          </span>
                          <span>
                            Deploy
                            <svg className="chk">
                              <use href="#i-check" />
                            </svg>
                          </span>
                        </li>
                      </ol>
                      <div className="cf-plat">
                        <div className="l1">
                          <span className="cf-scr">
                            <i />
                            <i />
                            <i />
                            <i />
                          </span>
                          <svg className="ic">
                            <use href="#i-layers" />
                          </svg>
                          <b>Web app</b>
                          <span className="fx-pill fx-dark fx-pop">Live</span>
                        </div>
                        <div className="l2">
                          <span className="cf-scr">
                            <i />
                            <i />
                            <i />
                            <i />
                          </span>
                          <svg className="ic">
                            <use href="#i-phone" />
                          </svg>
                          <b>iOS app</b>
                          <span className="fx-pill fx-dark fx-pop">Live</span>
                        </div>
                        <div className="l3">
                          <span className="cf-scr">
                            <i />
                            <i />
                            <i />
                            <i />
                          </span>
                          <svg className="ic">
                            <use href="#i-phone" />
                          </svg>
                          <b>Android app</b>
                          <span className="fx-pill fx-dark fx-pop">Live</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="stage-layer static">
            <div className="cap-vis wf">
              <div className="cap-box">
                <div className="ui-fit" data-w="600" data-h="440">
                  <div
                    className="sc cf-ai"
                    data-steps="q1:500 q2:380 q3:380 q4:500 q5:380 q6:380 q7:500"
                  >
                    <div className="cf-card dyn">
                      <div className="fx-h">
                        <b>Invoice agent</b>
                        <span className="fx-pill fx-soft">Running</span>
                      </div>
                      <ol className="cf-rows">
                        <li className="r1">
                          <svg className="ic">
                            <use href="#i-doc" />
                          </svg>
                          Invoice 2041
                          <span className="cf-st">
                            <span className="wait">Queued</span>
                            <span className="cf-ok fx-pop">
                              <svg className="chk">
                                <use href="#i-check" />
                              </svg>
                              Matched
                            </span>
                          </span>
                        </li>
                        <li className="r2">
                          <svg className="ic">
                            <use href="#i-doc" />
                          </svg>
                          Invoice 2042
                          <span className="cf-st">
                            <span className="wait">Queued</span>
                            <span className="cf-ok fx-pop">
                              <svg className="chk">
                                <use href="#i-check" />
                              </svg>
                              Matched
                            </span>
                          </span>
                        </li>
                        <li className="r3">
                          <svg className="ic">
                            <use href="#i-doc" />
                          </svg>
                          Invoice 2043
                          <span className="cf-st">
                            <span className="wait">Queued</span>
                            <span className="cf-ok fx-pop">
                              <svg className="chk">
                                <use href="#i-check" />
                              </svg>
                              Matched
                            </span>
                          </span>
                        </li>
                        <li className="r4">
                          <svg className="ic">
                            <use href="#i-doc" />
                          </svg>
                          Invoice 2044
                          <span className="cf-st">
                            <span className="wait">Queued</span>
                            <span className="fx-pill fx-soft fx-pop">For your review</span>
                          </span>
                        </li>
                        <li className="r5">
                          <svg className="ic">
                            <use href="#i-doc" />
                          </svg>
                          Invoice 2045
                          <span className="cf-st">
                            <span className="wait">Queued</span>
                            <span className="cf-ok fx-pop">
                              <svg className="chk">
                                <use href="#i-check" />
                              </svg>
                              Matched
                            </span>
                          </span>
                        </li>
                        <li className="r6">
                          <svg className="ic">
                            <use href="#i-doc" />
                          </svg>
                          Invoice 2046
                          <span className="cf-st">
                            <span className="wait">Queued</span>
                            <span className="cf-ok fx-pop">
                              <svg className="chk">
                                <use href="#i-check" />
                              </svg>
                              Matched
                            </span>
                          </span>
                        </li>
                      </ol>
                      <div className="cf-sum">
                        <b>5 matched on their own</b>
                        <span className="fx-lo">1 left for you to review</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="stage-layer">
            <div className="cap-vis">
              <div className="cap-box">
                <div className="ui-fit wf" data-w="600" data-h="440">
                  <div
                    className="sc cf-des"
                    data-steps="q1:500 q2:600 q3:450 q4:450 q5:500 q6:600 q7:500"
                  >
                    <div className="cf-card dyn">
                      <div className="fx-h">
                        <b>Checkout app</b>
                        <span className="fx-lo">From idea to a plan</span>
                      </div>
                      <div className="cf-two">
                        <div className="cf-phone">
                          <i className="cf-bk k-head" />
                          <i className="cf-bk k-img" />
                          <i className="cf-bk k-t1" />
                          <i className="cf-bk k-t2" />
                          <i className="cf-bk k-btn" />
                        </div>
                        <div>
                          <ol className="cf-steps">
                            <li className="d1">
                              <i>
                                <svg className="chk">
                                  <use href="#i-check" />
                                </svg>
                              </i>
                              <div>
                                <b>Discovery</b>
                                <span className="fx-lo">What to build first</span>
                              </div>
                            </li>
                            <li className="d2">
                              <i>
                                <svg className="chk">
                                  <use href="#i-check" />
                                </svg>
                              </i>
                              <div>
                                <b>UX and UI design</b>
                                <span className="fx-lo">Screens people understand</span>
                              </div>
                            </li>
                            <li className="d3">
                              <i>
                                <svg className="chk">
                                  <use href="#i-check" />
                                </svg>
                              </i>
                              <div>
                                <b>Architecture</b>
                                <span className="fx-lo">A plan that scales</span>
                              </div>
                            </li>
                          </ol>
                          <span className="fx-pill fx-dark fx-pop cf-ready">
                            <svg className="chk">
                              <use href="#i-check" />
                            </svg>
                            Ready to build
                          </span>
                        </div>
                      </div>
                    </div>
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
