import React from "react";
import { waLink } from "@/data/site";

const notes = [
  {
    title: "Licencias de beats",
    text: "Cada beat se entrega con licencia de uso. Hay opciones según lo que necesites (uso básico o exclusivo). Escríbenos y te explicamos cuál te conviene.",
  },
  {
    title: "Registro de derechos de autor",
    text: "Protege legalmente tu música. El precio se cotiza según tu caso; contáctanos para una cotización sin compromiso.",
  },
  {
    title: "Video musical y fotografía",
    text: "Producción completa con cámaras profesionales desde $180. El precio puede variar según el concepto, la locación y la duración.",
  },
  {
    title: "Diseño gráfico",
    text: "Flyers para tus canciones y eventos. Se cotiza según el diseño que necesites.",
  },
];

export default function ServiceNotes() {
  return (
    <div className="feature-area-1 space-bottom">
      <div className="container">
        <div className="row gy-4">
          {notes.map((n, i) => (
            <div key={i} className="col-lg-6">
              <div className="feature-card">
                <h4 className="feature-card-title">{n.title}</h4>
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
