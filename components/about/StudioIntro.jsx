"use client";
import React from "react";
import { waLink } from "@/data/site";
import { useLang } from "@/context/LanguageContext";

export default function StudioIntro() {
  const { t } = useLang();
  return (
    <div className="about-area space">
      <div className="container">
        <div className="row gy-4 align-items-center">
          <div className="col-lg-7">
            <div className="title-area mb-0">
              <span className="sub-title">{t("studio.sub")}</span>
              <h2 className="sec-title text-smoke">{t("studio.title")}</h2>
              <p className="sec-text mt-20">{t("studio.p1")}</p>
              <p className="sec-text mt-15">{t("studio.p2")}</p>
              <ul className="about-list mt-20">
                <li>{t("studio.li1")}</li>
                <li>{t("studio.li2")}</li>
                <li>{t("studio.li3")}</li>
                <li>{t("studio.li4")}</li>
              </ul>
              <a
                href={waLink("Hola, quiero rentar el estudio por hora.")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn style2 mt-30"
              >
                <span className="link-effect">
                  <span className="effect-1">{t("studio.cta")}</span>
                  <span className="effect-1">{t("studio.cta")}</span>
                </span>
              </a>
            </div>
          </div>
          <div className="col-lg-5">
            <div
              className="about-thumb"
              style={{
                borderRadius: "12px",
                minHeight: "360px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "40px",
                background:
                  "radial-gradient(120% 120% at 20% 10%, #20242b 0%, #15181d 55%, #0c0e11 100%)",
              }}
            >
              <img
                src="/assets/img/logo-white.svg"
                alt="Elevate Art Entertainment"
                style={{ maxWidth: "70%", height: "auto" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
