"use client";
import React from "react";
import { waLink } from "@/data/site";
import { BEAT_LICENSES, tField } from "@/data/features";
import { useLang } from "@/context/LanguageContext";

const notes = [
  {
    title: "Registro de derechos de autor",
    title_en: "Copyright registration",
    text: "Protege legalmente tu música. Registramos tu copyright desde $50; escríbenos y te guiamos en el proceso.",
    text_en: "Legally protect your music. We register your copyright from $50; message us and we'll guide you through it.",
  },
  {
    title: "Video musical y fotografía",
    title_en: "Music video & photography",
    text: "Producción completa con cámaras profesionales desde $180. El precio puede variar según el concepto, la locación y la duración.",
    text_en: "Full production with pro cameras from $180. Price may vary by concept, location and length.",
  },
  {
    title: "Diseño gráfico",
    title_en: "Graphic design",
    text: "Flyers y artes para tus canciones y eventos desde $30. Se ajusta según el diseño que necesites.",
    text_en: "Flyers and artwork for your songs and events from $30. Adjusted to the design you need.",
  },
  {
    title: "¿Dudas con tu proyecto?",
    title_en: "Questions about your project?",
    text: "Cuéntanos qué quieres lograr y te armamos un plan con precios claros. Atención en español e inglés.",
    text_en: "Tell us what you want to achieve and we'll build a plan with clear pricing. Service in Spanish & English.",
  },
];

export default function ServiceNotes() {
  const { t, lang } = useLang();
  return (
    <div className="feature-area-1 space-bottom">
      <div className="container">
        {/* Tipos de licencia de beats */}
        <div className="title-area text-center mb-40">
          <span className="sub-title">{t("service.licensesSub")}</span>
          <h2 className="sec-title text-smoke" style={{ fontSize: "2rem" }}>
            {t("service.licensesTitle")}
          </h2>
        </div>
        <div className="row gy-4 mb-60">
          {BEAT_LICENSES.map((lic, i) => (
            <div key={i} className="col-lg-4 col-md-6">
              <div className="feature-card style2 h-100">
                <h4 className="feature-card-title text-smoke">
                  {tField(lic, "name", lang)}
                </h4>
                <p
                  className="feature-card-text"
                  style={{ fontWeight: 700, fontSize: "1.6rem", color: "var(--brand)" }}
                >
                  {lic.price}
                </p>
                <p className="feature-card-text">{tField(lic, "desc", lang)}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Notas de servicios */}
        <div className="row gy-4">
          {notes.map((n, i) => (
            <div key={i} className="col-lg-6">
              <div className="feature-card style2">
                <h4 className="feature-card-title text-smoke">
                  {tField(n, "title", lang)}
                </h4>
                <p className="feature-card-text">{tField(n, "text", lang)}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-50">
          <a
            href={waLink("Hola, quiero una cotización / reservar una sesión.")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn style2"
          >
            <span className="link-effect">
              <span className="effect-1">{t("service.reservaWa")}</span>
              <span className="effect-1">{t("service.reservaWa")}</span>
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
