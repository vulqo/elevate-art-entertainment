import React from "react";
import { allBlogs } from "@/data/blogs";
import { placeholderImg, waLink } from "@/data/site";

export default function BlogDetails({ blogId }) {
  const blogItem = allBlogs.filter((elm) => elm.id == blogId)[0] || allBlogs[0];
  return (
    <section className="blog__details-area space">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-9">
            <div
              className="blog__details-thumb mb-40"
              style={{
                minHeight: "360px",
                borderRadius: "14px",
                backgroundImage: `linear-gradient(rgba(10,12,0,0.35), rgba(10,12,0,0.5)), url(${placeholderImg(
                  `blogd-${blogItem.id}`,
                  1200,
                  600,
                  "music,studio,microphone"
                )})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
            <div className="blog__details-content">
              <div className="blog-post-meta mb-2">
                <ul className="list-wrap">
                  <li>{blogItem.date}</li>
                  <li>
                    <a href="#">{blogItem.category}</a>
                  </li>
                </ul>
              </div>
              <h2 className="title text-smoke">{blogItem.title}</h2>
              <p className="sec-text mt-20">
                (Contenido de ejemplo) Aquí va el artículo completo. Lo
                escribimos con el contenido real más adelante: consejos
                prácticos para artistas sobre grabación, producción y cómo sacar
                el máximo de tu sesión en el estudio.
              </p>
              <p className="sec-text mt-20">
                En Elevate Art Entertainment acompañamos a cada artista de la
                idea al lanzamiento. Si tienes dudas sobre tu proyecto,
                escríbenos y te orientamos sin compromiso.
              </p>
              <h3 className="text-smoke mt-30">Lo esencial</h3>
              <ul className="about-list mt-20">
                <li>Prepara tu voz y tu idea antes de la sesión.</li>
                <li>Define qué quieres lograr con la canción.</li>
                <li>Aprovecha la mezcla y el máster para un sonido pro.</li>
              </ul>
              <a
                href={waLink("Hola, leí el blog y quiero más información.")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn style2 mt-30"
              >
                <span className="link-effect">
                  <span className="effect-1">RESERVA POR WHATSAPP</span>
                  <span className="effect-1">RESERVA POR WHATSAPP</span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
