import React from "react";
import { portfolioVideos } from "@/data/videos";
import { site } from "@/data/site";

export default function VideoGallery() {
  return (
    <div className="project-area-8 space">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-8 text-center">
            <div className="title-area">
              <h2 className="sec-title">Trabajos recientes</h2>
              <p className="sec-text mt-20">
                Una muestra de videos. Pronto sumamos más producciones,
                fotografía y diseño.
              </p>
            </div>
          </div>
        </div>
        <div className="row gy-4">
          {portfolioVideos.map((v, i) => (
            <div key={i} className="col-lg-4 col-md-6">
              <div
                className="portfolio-thumb"
                style={{ position: "relative", paddingTop: "56.25%" }}
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
                    borderRadius: "8px",
                  }}
                ></iframe>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-50">
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
