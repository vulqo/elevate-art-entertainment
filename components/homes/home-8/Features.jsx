"use client";
import { featureData2, tField } from "@/data/features";
import Image from "next/image";
import React from "react";
import { useLang } from "@/context/LanguageContext";

export default function Features() {
  const { t, lang } = useLang();
  return (
    <div className="feature-area-1 space">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-7 col-lg-8">
            <div className="title-area text-center">
              <span className="sub-title">{t("features.sub")}</span>
              <h2 className="sec-title text-smoke">{t("features.title")}</h2>
            </div>
          </div>
        </div>
        <div className="row gy-4 align-items-center justify-content-center">
          {featureData2.map((elm, i) => (
            <div key={i} className="col-xl-4 col-md-6">
              <div className="feature-card style2">
                <div className="feature-card-icon">
                  <i
                    className={`fas ${elm.faIcon}`}
                    style={{ fontSize: "40px", color: "var(--theme-color)" }}
                  ></i>
                </div>
                <h4 className="feature-card-title">
                  <a href={`/service-details/${elm.id}`}>
                    {tField(elm, "title", lang)}
                  </a>
                </h4>
                <p className="feature-card-text">{tField(elm, "text", lang)}</p>
                <p className="feature-card-text" style={{ fontWeight: 600 }}>
                  {elm.price}
                </p>
                <a href={`/service-details/${elm.id}`} className="link-btn">
                  <span className="link-effect">
                    <span className="effect-1">{t("features.more")}</span>
                    <span className="effect-1">{t("features.more")}</span>
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
