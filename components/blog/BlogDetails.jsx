import React from "react";
import Link from "next/link";
import { allBlogs } from "@/data/blogs";
import { placeholderImg, waLink } from "@/data/site";

export default function BlogDetails({ blogId }) {
  const post = allBlogs.filter((elm) => elm.id == blogId)[0] || allBlogs[0];

  return (
    <section className="blog__details-area space">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-9">
            {/* Imagen principal (temática) */}
            <div
              className="blog__details-thumb mb-40"
              style={{
                minHeight: "360px",
                borderRadius: "14px",
                backgroundImage: `linear-gradient(rgba(10,12,0,0.35), rgba(10,12,0,0.5)), url(${placeholderImg(
                  `blogd-${post.id}`,
                  1200,
                  600,
                  post.theme
                )})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>

            {/* Meta + título */}
            <div className="blog-post-meta mb-2">
              <ul className="list-wrap">
                <li>{post.date}</li>
                <li>
                  <a href="#">{post.category}</a>
                </li>
              </ul>
            </div>
            <h1 className="title text-smoke" style={{ fontSize: "2.4rem", lineHeight: 1.2 }}>
              {post.title}
            </h1>

            {/* Intro */}
            <p className="sec-text mt-20">{post.intro}</p>

            {/* Secciones */}
            {post.sections?.map((sec, i) => (
              <div key={i} className="mt-30">
                <h2 className="text-smoke" style={{ fontSize: "1.5rem" }}>
                  {sec.heading}
                </h2>
                {sec.paragraphs?.map((p, j) => (
                  <p key={j} className="sec-text mt-15">
                    {p}
                  </p>
                ))}
                {sec.list && (
                  <ul className="about-list mt-15">
                    {sec.list.map((li, k) => (
                      <li key={k}>{li}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}

            {/* Enlaces internos (SEO) */}
            <p className="sec-text mt-30">
              ¿Quieres ver precios? Mira nuestros{" "}
              <Link href="/service" style={{ color: "var(--brand)" }}>
                servicios
              </Link>{" "}
              o conoce el{" "}
              <Link href="/about" style={{ color: "var(--brand)" }}>
                estudio en Downtown Cincinnati
              </Link>
              .
            </p>

            {/* CTA personalizado del artículo */}
            <div
              className="mt-40 p-4 p-lg-5"
              style={{
                borderRadius: "14px",
                background:
                  "linear-gradient(135deg, #15181d 0%, #1b2733 100%)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <h3 className="text-smoke mb-2">{post.cta.title}</h3>
              <p className="sec-text mb-30">{post.cta.text}</p>
              <a
                href={waLink(post.cta.message)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn style2"
              >
                <span className="link-effect">
                  <span className="effect-1">
                    <i className="fab fa-whatsapp me-2"></i>
                    {post.cta.button}
                  </span>
                  <span className="effect-1">
                    <i className="fab fa-whatsapp me-2"></i>
                    {post.cta.button}
                  </span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
