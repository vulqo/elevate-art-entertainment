"use client";
import { featureData4, tField } from "@/data/features";
import Image from "next/image";
import React from "react";
import { useLang } from "@/context/LanguageContext";

export default function Features2() {
  const { t, lang } = useLang();
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
                  <a href={`/service-details/${elm.id}`}>
                    {tField(elm, "title", lang)}
                  </a>
                </h4>
                <p className="feature-card-text">{tField(elm, "text", lang)}</p>
                <p
                  className="feature-card-text"
                  style={{ fontWeight: 700, color: "var(--theme-color)" }}
                >
                  {elm.price}
                </p>
                <a href={`/service-details/${elm.id}`} className="link-btn">
                  <span className="link-effect">
                    <span className="effect-1">{t("service.viewDetail")}</span>
                    <span className="effect-1">{t("service.viewDetail")}</span>
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
