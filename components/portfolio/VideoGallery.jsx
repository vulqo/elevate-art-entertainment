import React from "react";
import { portfolioVideos } from "@/data/videos";
import { site } from "@/data/site";

export default function VideoGallery() {
  return (
    <div className="portfolio-area-1 space">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-8 text-center">
            <div className="title-area">
              <span className="sub-title">Portafolio</span>
              <h2 className="sec-title text-smoke">Trabajos recientes</h2>
              <p className="sec-text mt-20">
                Una muestra de videos del estudio. Pronto sumamos más
                producciones, fotografía y diseño.
              </p>
            </div>
          </div>
        </div>
        <div className="row gy-5">
          {portfolioVideos.map((v, i) => (
            <div key={i} className="col-lg-6">
              <div
                style={{
                  position: "relative",
                  paddingTop: "56.25%",
                  borderRadius: "12px",
                  overflow: "hidden",
                }}
              >
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${v.id}`}
                  title={v.title}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    border: 0,
                  }}
                ></iframe>
              </div>
              <h4 className="text-smoke mt-30 mb-2">{v.title}</h4>
              <p className="sec-text mb-0">{v.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-60">
          <a
            href={site.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="btn style2"
          >
            <span className="link-effect">
              <span className="effect-1">VER CANAL EN YOUTUBE</span>
              <span className="effect-1">VER CANAL EN YOUTUBE</span>
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
