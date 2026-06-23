"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { waLink, placeholderImg } from "@/data/site";
import { useLang } from "@/context/LanguageContext";

export default function Hero() {
  const { t } = useLang();
  useEffect(() => {
    document.body.classList.add("bg-title");
    return () => {
      document.body.classList.remove("bg-title");
    };
  }, []);

  return (
    <div
      className="hero-wrapper hero-8 background-image"
      id="hero"
      style={{
        backgroundImage: `linear-gradient(rgba(10,12,0,0.78), rgba(10,12,0,0.88)), url(${placeholderImg(
          "hero",
          1600,
          900,
          "recording-studio,microphone,music"
        )})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container">
        <div className="hero-style8">
          <div className="row">
            <div className="col-lg-8">
              <h2 className="hero-subtitle wow img-custom-anim-left animated text-smoke">
                Elevate Art Entertainment
              </h2>
              <h1 className="hero-title wow img-custom-anim-left animated text-smoke">
                {t("hero.title")}
              </h1>
            </div>
            <div className="col-xl-4 col-lg-5 offset-xl-8 offset-lg-7">
              <p className="hero-text wow img-custom-anim-right animated text-smoke">
                {t("hero.text")}
              </p>
              <Link
                scroll={false}
                href={waLink("Hola, quiero reservar una sesión en el estudio.")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn style2 mt-40 wow img-custom-anim-right animated"
              >
                <span className="link-effect">
                  <span className="effect-1">{t("header.book")}</span>
                  <span className="effect-1">{t("header.book")}</span>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
