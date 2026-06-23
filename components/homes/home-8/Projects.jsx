import { portfolioVideos } from "@/data/videos";
import Link from "next/link";
import React from "react";

export default function Projects() {
  return (
    <div className="project-area-8 space">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-7 col-lg-8">
            <div className="title-area text-center">
              <span className="sub-title">Portafolio</span>
              <h2 className="sec-title text-smoke">Nuestros trabajos</h2>
            </div>
          </div>
        </div>
        <div className="row gy-4">
          {portfolioVideos.slice(0, 4).map((v, i) => (
            <div key={i} className="col-md-6">
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
            </div>
          ))}
        </div>
        <div className="text-center mt-50">
          <Link scroll={false} href="/project" className="btn style2">
            <span className="link-effect">
              <span className="effect-1">VER PORTAFOLIO</span>
              <span className="effect-1">VER PORTAFOLIO</span>
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
