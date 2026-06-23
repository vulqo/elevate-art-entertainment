import React from "react";
import { waLink } from "@/data/site";

export default function StudioIntro() {
  return (
    <div className="about-area space">
      <div className="container">
        <div className="row gy-4 align-items-center">
          <div className="col-lg-7">
            <div className="title-area mb-0">
              <span className="sub-title">Renta del estudio</span>
              <h2 className="sec-title text-smoke">
                Renta nuestro estudio en Downtown Cincinnati
              </h2>
              <p className="sec-text mt-20">
                Renta el estudio por hora para tus ensayos de presentaciones,
                sesiones de fotos o producción de contenido. Un espacio
                profesional con tratamiento acústico, en el corazón de Downtown
                Cincinnati, Ohio.
              </p>
              <p className="sec-text mt-15">
                Somos un estudio de grabación, producción musical y contenido
                visual. Atención bilingüe: hablamos español e inglés, con
                entregas rápidas. Ideal para artistas, creadores de contenido y
                proyectos de música en Cincinnati y todo Ohio.
              </p>
              <ul className="about-list mt-20">
                <li>Ensayos para presentaciones</li>
                <li>Sesiones de fotos y video</li>
                <li>Producción de contenido</li>
                <li>Grabación y producción musical</li>
              </ul>
              <a
                href={waLink("Hola, quiero rentar el estudio por hora.")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn style2 mt-30"
              >
                <span className="link-effect">
                  <span className="effect-1">CONSULTA DISPONIBILIDAD</span>
                  <span className="effect-1">CONSULTA DISPONIBILIDAD</span>
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
