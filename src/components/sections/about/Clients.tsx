import type React from "react";

export function Clients() {
  return (
    <section className="svc-sec" id="clients" aria-labelledby="trusted-label">
      <div className="wrap trust" aria-labelledby="trusted-label">
        <p className="label" id="trusted-label">
          Trusted by
        </p>
        <div className="marquee">
          <ul className="marquee-track">
            <li>
              <img
                src="/logos/louis-vuitton.svg"
                alt="Louis Vuitton"
                style={{ "--h": "16px" } as React.CSSProperties}
              />
            </li>
            <li>
              <img
                src="/logos/dior.svg"
                alt="Dior"
                style={{ "--h": "22px" } as React.CSSProperties}
              />
            </li>
            <li>
              <img
                src="/logos/sephora.svg"
                alt="Sephora"
                style={{ "--h": "16px" } as React.CSSProperties}
              />
            </li>
            <li>
              <img
                src="/logos/tiffany-co.svg"
                alt={"Tiffany & Co."}
                style={{ "--h": "18px" } as React.CSSProperties}
              />
            </li>
            <li>
              <img
                src="/logos/moet-chandon.svg"
                alt={"Moët & Chandon"}
                style={{ "--h": "42px" } as React.CSSProperties}
              />
            </li>
            <li>
              <img
                src="/logos/hennessy.svg"
                alt="Hennessy"
                style={{ "--h": "46px" } as React.CSSProperties}
              />
            </li>
            <li>
              <img
                src="/logos/bvlgari.svg"
                alt="Bvlgari"
                style={{ "--h": "17px" } as React.CSSProperties}
              />
            </li>
            <li>
              <img
                src="/logos/tag-heuer.svg"
                alt="TAG Heuer"
                style={{ "--h": "29px" } as React.CSSProperties}
              />
            </li>
            <li>
              <img
                aria-hidden="true"
                src="/logos/louis-vuitton.svg"
                alt=""
                style={{ "--h": "16px" } as React.CSSProperties}
              />
            </li>
            <li>
              <img
                aria-hidden="true"
                src="/logos/dior.svg"
                alt=""
                style={{ "--h": "22px" } as React.CSSProperties}
              />
            </li>
            <li>
              <img
                aria-hidden="true"
                src="/logos/sephora.svg"
                alt=""
                style={{ "--h": "16px" } as React.CSSProperties}
              />
            </li>
            <li>
              <img
                aria-hidden="true"
                src="/logos/tiffany-co.svg"
                alt=""
                style={{ "--h": "18px" } as React.CSSProperties}
              />
            </li>
            <li>
              <img
                aria-hidden="true"
                src="/logos/moet-chandon.svg"
                alt=""
                style={{ "--h": "42px" } as React.CSSProperties}
              />
            </li>
            <li>
              <img
                aria-hidden="true"
                src="/logos/hennessy.svg"
                alt=""
                style={{ "--h": "46px" } as React.CSSProperties}
              />
            </li>
            <li>
              <img
                aria-hidden="true"
                src="/logos/bvlgari.svg"
                alt=""
                style={{ "--h": "17px" } as React.CSSProperties}
              />
            </li>
            <li>
              <img
                aria-hidden="true"
                src="/logos/tag-heuer.svg"
                alt=""
                style={{ "--h": "29px" } as React.CSSProperties}
              />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
