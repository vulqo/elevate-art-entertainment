"use client";
import React from "react";
import Link from "next/link";
import { useLang } from "@/context/LanguageContext";
import { site } from "@/data/site";

// Banner global de página: compacto (<=25vh), con migaja, título (h1) y
// párrafo. Incluye datos estructurados (BreadcrumbList) para SEO.
export default function PageBanner({ titleKey, textKey, path = "/" }) {
  const { t } = useLang();
  const title = t(titleKey);
  const text = textKey ? t(textKey) : null;

  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: t("nav.home"), item: site.url },
      { "@type": "ListItem", position: 2, name: title, item: `${site.url}${path}` },
    ],
  };

  return (
    <section
      className="page-banner"
      style={{
        paddingTop: "96px",
        paddingBottom: "26px",
        display: "flex",
        alignItems: "center",
        background:
          "radial-gradient(120% 140% at 80% 0%, #1b2733 0%, #12161c 45%, #0a0c0d 100%)",
      }}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <div className="container">
        <nav aria-label="breadcrumb" style={{ marginBottom: "10px" }}>
          <ol
            className="breadcumb-menu"
            style={{
              display: "flex",
              gap: "8px",
              listStyle: "none",
              padding: 0,
              margin: 0,
              fontSize: "13px",
              color: "#9fa2ad",
            }}
          >
            <li>
              <Link href="/" style={{ color: "#9fa2ad" }}>
                {t("nav.home")}
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li style={{ color: "var(--brand)" }}>{title}</li>
          </ol>
        </nav>
        <h1
          className="text-smoke"
          style={{ fontSize: "clamp(1.7rem, 3.4vw, 2.3rem)", margin: 0, lineHeight: 1.1 }}
        >
          {title}
        </h1>
        {text && (
          <p className="sec-text" style={{ margin: "12px 0 0", maxWidth: "640px" }}>
            {text}
          </p>
        )}
      </div>
    </section>
  );
}
