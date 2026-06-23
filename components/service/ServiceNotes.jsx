import React from "react";
import { waLink } from "@/data/site";
import { BEAT_LICENSES } from "@/data/features";

const notes = [
  {
    title: "Registro de derechos de autor",
    text: "Protege legalmente tu música. Registramos tu copyright desde $50; escríbenos y te guiamos en el proceso.",
  },
  {
    title: "Video musical y fotografía",
    text: "Producción completa con cámaras profesionales desde $180. El precio puede variar según el concepto, la locación y la duración.",
  },
  {
    title: "Diseño gráfico",
    text: "Flyers y artes para tus canciones y eventos desde $30. Se ajusta según el diseño que necesites.",
  },
  {
    title: "¿Dudas con tu proyecto?",
    text: "Cuéntanos qué quieres lograr y te armamos un plan con precios claros. Atención en español e inglés.",
  },
];

export default function ServiceNotes() {
  return (
    <div className="feature-area-1 space-bottom">
      <div className="container">
        {/* Tipos de licencia de beats */}
        <div className="title-area text-center mb-40">
          <span className="sub-title">Beats con licencia</span>
          <h2 className="sec-title text-smoke" style={{ fontSize: "2rem" }}>
            Tipos de licencia
          </h2>
        </div>
        <div className="row gy-4 mb-60">
          {BEAT_LICENSES.map((lic, i) => (
            <div key={i} className="col-lg-4 col-md-6">
              <div className="feature-card style2 h-100">
                <h4 className="feature-card-title text-smoke">{lic.name}</h4>
                <p
                  className="feature-card-text"
                  style={{ fontWeight: 700, fontSize: "1.6rem", color: "var(--brand)" }}
                >
                  {lic.price}
                </p>
                <p className="feature-card-text">{lic.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Notas de servicios */}
        <div className="row gy-4">
          {notes.map((n, i) => (
            <div key={i} className="col-lg-6">
              <div className="feature-card style2">
                <h4 className="feature-card-title text-smoke">{n.title}</h4>
                <p className="feature-card-text">{n.text}</p>
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
              <span className="effect-1">RESERVA POR WHATSAPP</span>
              <span className="effect-1">RESERVA POR WHATSAPP</span>
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
