"use client";
import React from "react";
import { portfolioMedia } from "@/data/portfolioMedia";
import { site } from "@/data/site";
import { useLang } from "@/context/LanguageContext";

export default function WorkGallery({ limit, heading = true }) {
  const { t } = useLang();
  const items = limit ? portfolioMedia.slice(0, limit) : portfolioMedia;
  return (
    <div className="portfolio-area-1 space">
      <div className="container">
        {heading && (
          <div className="row justify-content-center">
            <div className="col-xl-8 text-center">
              <div className="title-area">
                <span className="sub-title">{t("work.sub")}</span>
                <h2 className="sec-title text-smoke">{t("work.title")}</h2>
                <p className="sec-text mt-20">{t("work.text")}</p>
              </div>
            </div>
          </div>
        )}
        <div className="row gy-4">
          {items.map((item, i) => (
            <div key={i} className="col-lg-3 col-md-4 col-6">
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  position: "relative",
                  display: "block",
                  paddingTop: "150%",
                  borderRadius: "12px",
                  overflow: "hidden",
                }}
              >
                <img
                  src={item.img}
                  alt="Trabajo de Elevate Art Entertainment"
                  loading="lazy"
                  style={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
                <span
                  style={{
                    position: "absolute",
                    inset: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background:
                      "linear-gradient(rgba(10,12,0,0.05), rgba(10,12,0,0.45))",
                  }}
                >
                  <i
                    className="fas fa-play"
                    style={{
                      fontSize: "34px",
                      color: "#fff",
                      textShadow: "0 2px 12px rgba(0,0,0,0.5)",
                    }}
                  ></i>
                </span>
              </a>
            </div>
          ))}
        </div>
        <div className="text-center mt-60">
          <a
            href={`https://instagram.com/${site.instagram}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn style2"
          >
            <span className="link-effect">
              <span className="effect-1">
                <i className="fab fa-instagram me-2"></i>
                {t("work.instagram")}
              </span>
              <span className="effect-1">
                <i className="fab fa-instagram me-2"></i>
                {t("work.instagram")}
              </span>
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
