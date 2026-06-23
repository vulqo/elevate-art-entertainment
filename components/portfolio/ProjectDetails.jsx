"use client";
import { allPortfolio } from "@/data/portfolio";
import { placeholderImg } from "@/data/site";

export default function ProjectDetails({ portfolioId }) {
  const portfolioItem =
    allPortfolio.filter((elm) => elm.id == portfolioId)[0] || allPortfolio[0];
  const cats = portfolioItem.categoryLinks || portfolioItem.categories || [];

  return (
    <div className="project-details-page-area space">
      <div className="container">
        <div
          className="project-inner-thumb mb-80"
          style={{
            minHeight: "420px",
            borderRadius: "14px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundImage: `linear-gradient(rgba(10,12,0,0.4), rgba(10,12,0,0.55)), url(${placeholderImg(
              `proj-${portfolioItem.id}`,
              1400,
              700
            )})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <i
            className="fas fa-play"
            style={{ fontSize: "70px", color: "var(--theme-color)" }}
          ></i>
        </div>

        <div className="row justify-content-between flex-row-reverse">
          <div className="col-xl-3 col-lg-4">
            <div className="project-details-info mb-lg-0 mb-40">
              <ul className="list-wrap">
                <li>
                  <span>Categoría:</span>
                  {cats.join(", ") || "Producción"}
                </li>
                <li>
                  <span>Servicio:</span>Estudio
                </li>
                <li>
                  <span>Lugar:</span>Downtown Cincinnati
                </li>
                <li>
                  <span>Idiomas:</span>Español / English
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="title-area mb-35">
              <span className="sub-title">Proyecto</span>
              <h2 className="sec-title text-smoke">{portfolioItem.title}</h2>
              <p className="sec-text mt-30">
                (Contenido de ejemplo) Aquí va la historia de este proyecto: qué
                se grabó o produjo, el proceso y el resultado final. Lo
                completamos con el contenido real más adelante.
              </p>
            </div>
            <h3 className="text-smoke">El proceso</h3>
            <p className="sec-text mb-n1">
              (Ejemplo) Desde la idea hasta la entrega, acompañamos al artista en
              cada paso: grabación, producción, mezcla, máster y contenido
              visual.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
