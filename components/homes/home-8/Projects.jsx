import { projects2 } from "@/data/portfolio";
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
          {projects2.map((elm, i) => (
            <div key={i} className="col-md-6">
              <Link
                scroll={false}
                href="/project"
                className="portfolio-thumb"
                style={{
                  position: "relative",
                  display: "flex",
                  alignItems: "flex-end",
                  minHeight: "260px",
                  borderRadius: "12px",
                  overflow: "hidden",
                  padding: "28px",
                  background:
                    "radial-gradient(120% 120% at 70% 15%, #20242b 0%, #15181d 55%, #0c0e11 100%)",
                }}
              >
                <i
                  className="fas fa-play"
                  style={{
                    position: "absolute",
                    top: "26px",
                    right: "28px",
                    fontSize: "26px",
                    color: "var(--theme-color)",
                  }}
                ></i>
                <div>
                  <span
                    className="sub-title"
                    style={{ color: "var(--theme-color)" }}
                  >
                    {elm.categories.join(" · ")}
                  </span>
                  <h4 className="text-smoke mt-1 mb-0">{elm.title}</h4>
                </div>
              </Link>
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
