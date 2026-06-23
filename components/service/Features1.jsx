import { featureData4 } from "@/data/features";
import Image from "next/image";
import React from "react";
import { waLink } from "@/data/site";

export default function Features1() {
  return (
    <div className="feature-area-1 space">
      <div className="container">
        <div className="row gy-4 align-items-center justify-content-center">
          {featureData4.map((elm, i) => (
            <div key={i} className="col-xl-4 col-md-6">
              <div className="feature-card">
                <div className="feature-card-icon">
                  <Image width={40} height={40} src={elm.iconSrc} alt="icon" />
                </div>
                <h4 className="feature-card-title">
                  <a href={waLink(`Hola, quiero información sobre: ${elm.title}.`)} target="_blank" rel="noopener noreferrer">
                    {elm.title}
                  </a>
                </h4>
                <p className="feature-card-text">{elm.text}</p>
                <p className="feature-card-text" style={{ fontWeight: 600, fontSize: "1.1rem" }}>
                  {elm.price}
                </p>
                <a
                  href={waLink(`Hola, quiero reservar / cotizar: ${elm.title}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-btn"
                >
                  <span className="link-effect">
                    <span className="effect-1">RESERVAR</span>
                    <span className="effect-1">RESERVAR</span>
                  </span>
                  <Image
                    width={13}
                    height={13}
                    src="/assets/img/icon/arrow-left-top.svg"
                    alt="icon"
                  />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
