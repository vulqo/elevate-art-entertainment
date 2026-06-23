"use client";

import { allFeatures } from "@/data/features";
import { waLink } from "@/data/site";

export default function ServiceDetails({ serviceId }) {
  const serviceItem =
    allFeatures.filter((elm) => elm.id == serviceId)[0] || allFeatures[0];

  return (
    <div className="service-details-page-area space">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-xl-12">
            <div
              className="service-inner-thumb mb-80"
              style={{
                minHeight: "320px",
                borderRadius: "14px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background:
                  "radial-gradient(120% 120% at 20% 10%, #20242b 0%, #15181d 55%, #0c0e11 100%)",
              }}
            >
              <i
                className={`fas ${serviceItem.faIcon}`}
                style={{ fontSize: "90px", color: "var(--theme-color)" }}
              ></i>
            </div>
          </div>
          <div className="col-xl-8">
            <div className="title-area mb-20">
              <span className="sub-title">Servicio</span>
              <h2 className="sec-title text-smoke">{serviceItem.title}</h2>
              <h4 style={{ color: "var(--theme-color)" }}>
                {serviceItem.price}
              </h4>
              <p className="sec-text mt-30">{serviceItem.text}</p>
              <p className="sec-text mt-20">
                (Contenido de ejemplo) Aquí va la descripción completa de este
                servicio: qué incluye, cómo es el proceso y qué recibes al
                final. Lo definimos con el contenido real más adelante.
              </p>
            </div>
            <h3 className="text-smoke">¿Qué incluye?</h3>
            <ul className="about-list mt-20">
              <li>Atención bilingüe (español e inglés)</li>
              <li>Trabajo profesional en Downtown Cincinnati</li>
              <li>Entregas rápidas</li>
              <li>Acompañamiento en todo el proceso</li>
            </ul>
            <a
              href={waLink(`Hola, quiero información sobre: ${serviceItem.title}.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn style2 mt-30"
            >
              <span className="link-effect">
                <span className="effect-1">RESERVAR POR WHATSAPP</span>
                <span className="effect-1">RESERVAR POR WHATSAPP</span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
