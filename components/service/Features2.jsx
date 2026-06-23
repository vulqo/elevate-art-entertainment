import { featureData4 } from "@/data/features";
import Image from "next/image";
import React from "react";

export default function Features2() {
  return (
    <div className="feature-area-1 space">
      <div className="container">
        <div className="row gy-4 justify-content-center">
          {featureData4.map((elm, i) => (
            <div key={i} className="col-lg-6">
              <div className="feature-card style2">
                <div className="feature-card-icon">
                  <i
                    className={`fas ${elm.faIcon}`}
                    style={{ fontSize: "38px", color: "var(--theme-color)" }}
                  ></i>
                </div>
                <h4 className="feature-card-title">
                  <a href={`/service-details/${elm.id}`}>{elm.title}</a>
                </h4>
                <p className="feature-card-text">{elm.text}</p>
                <p
                  className="feature-card-text"
                  style={{ fontWeight: 700, color: "var(--theme-color)" }}
                >
                  {elm.price}
                </p>
                <a href={`/service-details/${elm.id}`} className="link-btn">
                  <span className="link-effect">
                    <span className="effect-1">VER DETALLE</span>
                    <span className="effect-1">VER DETALLE</span>
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
