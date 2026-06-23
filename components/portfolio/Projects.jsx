"use client";
import { portfolioData } from "@/data/portfolio";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

// Alturas variadas para conservar el efecto masonry (placeholder).
const heights = [420, 300, 300, 360, 300, 420];

export default function Projects() {
  const isotopContainer = useRef();
  const initIsotop = async () => {
    const Isotope = (await import("isotope-layout")).default;
    const imagesloaded = (await import("imagesloaded")).default;
    const isotope = new Isotope(isotopContainer.current, {
      itemSelector: ".filter-item",
      layoutMode: "masonry",
    });
    imagesloaded(isotopContainer.current).on("progress", function () {
      isotope.layout();
    });
    isotope.layout();
  };

  useEffect(() => {
    initIsotop();
  }, []);

  return (
    <div className="portfolio-area-1 space overflow-hidden">
      <div className="container">
        <div
          className="row gy-60 justify-content-between masonary-active"
          ref={isotopContainer}
        >
          {portfolioData.map((elm, i) => (
            <div key={i} className="col-lg-6 filter-item">
              <div className={`portfolio-wrap ${i == 0 ? "mt-lg-140" : ""} `}>
                <Link
                  scroll={false}
                  href={`/project-details/${elm.id}`}
                  className="portfolio-thumb"
                  style={{
                    position: "relative",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: `${heights[i % heights.length]}px`,
                    borderRadius: "12px",
                    overflow: "hidden",
                    background:
                      "radial-gradient(120% 120% at 70% 15%, #20242b 0%, #15181d 55%, #0c0e11 100%)",
                  }}
                >
                  <i
                    className="fas fa-play"
                    style={{ fontSize: "44px", color: "var(--theme-color)" }}
                  ></i>
                </Link>
                <div className="portfolio-details">
                  <ul className="portfolio-meta">
                    {elm.categoryLinks.map((elm2, i2) => (
                      <li key={i2}>
                        <a href="#">{elm2}</a>
                      </li>
                    ))}
                  </ul>
                  <h3 className="portfolio-title">
                    <Link scroll={false} href={`/project-details/${elm.id}`}>
                      {elm.projectTitle}
                    </Link>
                  </h3>
                  <Link
                    scroll={false}
                    href={`/project-details/${elm.id}`}
                    className="link-btn"
                  >
                    <span className="link-effect">
                      <span className="effect-1">VER PROYECTO</span>
                      <span className="effect-1">VER PROYECTO</span>
                    </span>
                    <Image
                      width={13}
                      height={13}
                      src="/assets/img/icon/arrow-left-top.svg"
                      alt="icon"
                    />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
