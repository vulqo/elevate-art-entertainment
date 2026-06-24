"use client";
import { blogs } from "@/data/blogs";
import { placeholderImg } from "@/data/site";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useLang } from "@/context/LanguageContext";

export default function Blogs() {
  const { t } = useLang();
  return (
    <section className="blog-area space">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xxl-7 col-xl-6 col-lg-8">
            <div className="title-area text-center">
              <span className="sub-title">{t("homeblog.sub")}</span>
              <h2 className="sec-title text-smoke">{t("homeblog.title")}</h2>
            </div>
          </div>
        </div>
        <div className="row gy-40 justify-content-center">
          {blogs.slice(0, 3).map((elm, i) => (
            <div key={i} className="col-lg-4 col-md-6">
              <div className="blog-card style3">
                <div className="blog-img">
                  <Link
                    scroll={false}
                    href={`/blog-details/${elm.id}`}
                    style={{
                      display: "block",
                      minHeight: "240px",
                      borderRadius: "10px",
                      backgroundImage: `linear-gradient(rgba(10,12,0,0.25), rgba(10,12,0,0.45)), url(${elm.img})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  ></Link>
                </div>
                <div className="blog-content">
                  <div className="post-meta-item blog-meta">
                    <a href="#">{elm.date}</a>
                    <a href="#">{elm.category}</a>
                  </div>
                  <h4 className="blog-title">
                    <Link scroll={false} href={`/blog-details/${elm.id}`}>
                      {elm.title}
                    </Link>
                  </h4>
                  <Link
                    scroll={false}
                    href={`/blog-details/${elm.id}`}
                    className="link-btn"
                  >
                    <span className="link-effect">
                      <span className="effect-1">{t("homeblog.more")}</span>
                      <span className="effect-1">{t("homeblog.more")}</span>
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
    </section>
  );
}
