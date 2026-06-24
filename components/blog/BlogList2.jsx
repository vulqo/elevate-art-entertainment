import { blogs3 } from "@/data/blogs";
import { placeholderImg } from "@/data/site";
import Link from "next/link";
import React from "react";
import Image from "next/image";

const categorias = ["Grabación", "Producción", "Video", "Distribución", "Tips"];
const etiquetas = ["estudio", "beats", "mezcla", "máster", "Cincinnati", "voces"];

export default function BlogList2() {
  return (
    <section className="blog__area space">
      <div className="container">
        <div className="blog__inner-wrap">
          <div className="row">
            <div className="col-70">
              <div className="blog-post-wrap">
                <div className="row gy-30 gutter-24">
                  {blogs3.map((elm, i) => (
                    <div key={i} className="col-md-6">
                      <div className="blog-post-item-two">
                        <div className="blog-post-thumb">
                          <Link
                            scroll={false}
                            href={`/blog-details/${elm.id}`}
                            style={{
                              display: "block",
                              minHeight: "230px",
                              borderRadius: "10px",
                              backgroundImage: `linear-gradient(rgba(10,12,0,0.25), rgba(10,12,0,0.45)), url(${elm.img})`,
                              backgroundSize: "cover",
                              backgroundPosition: "center",
                            }}
                          ></Link>
                        </div>
                        <div className="blog-post-content">
                          <div className="blog-post-meta">
                            <ul className="list-wrap">
                              <li>{elm.date}</li>
                              <li>
                                <a href="#">{elm.category}</a>
                              </li>
                            </ul>
                          </div>
                          <h4 className="title">
                            <Link scroll={false} href={`/blog-details/${elm.id}`}>
                              {elm.title}
                            </Link>
                          </h4>
                          <p className="sec-text">{elm.excerpt}</p>
                          <Link
                            scroll={false}
                            href={`/blog-details/${elm.id}`}
                            className="link-btn"
                          >
                            <span className="link-effect">
                              <span className="effect-1">LEER MÁS</span>
                              <span className="effect-1">LEER MÁS</span>
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
            <div className="col-30">
              <aside className="blog__sidebar">
                <div className="widget">
                  <h3 className="widget-title">Categorías</h3>
                  <ul className="rest categories">
                    {categorias.map((c, i) => (
                      <li key={i} className="mb-2">
                        <a href="#">{c}</a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="widget">
                  <h3 className="widget-title">Etiquetas</h3>
                  <div className="tagcloud">
                    {etiquetas.map((t, i) => (
                      <a key={i} href="#">
                        {t}
                      </a>
                    ))}
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
