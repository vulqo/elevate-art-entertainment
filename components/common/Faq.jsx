"use client";
import React, { useState } from "react";
import { faqData } from "@/data/faqData";
import { useLang } from "@/context/LanguageContext";

export default function Faq() {
  const { t, lang } = useLang();
  const [open, setOpen] = useState(0);
  const f = (o, k) => (lang === "en" ? o[`${k}_en`] || o[k] : o[k]);

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqData.map((item) => ({
      "@type": "Question",
      name: f(item, "q"),
      acceptedAnswer: { "@type": "Answer", text: f(item, "a") },
    })),
  };

  return (
    <div className="space-bottom">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-8 text-center">
            <div className="title-area">
              <span className="sub-title">{t("faq.sub")}</span>
              <h2 className="sec-title text-smoke">{t("faq.title")}</h2>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-9">
            {faqData.map((item, i) => {
              const isOpen = open === i;
              return (
                <div
                  key={i}
                  className="feature-card style2 mb-3"
                  style={{ cursor: "pointer" }}
                  onClick={() => setOpen(isOpen ? -1 : i)}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      gap: "16px",
                    }}
                  >
                    <h4 className="feature-card-title text-smoke" style={{ margin: 0 }}>
                      {f(item, "q")}
                    </h4>
                    <i
                      className={`fas ${isOpen ? "fa-minus" : "fa-plus"}`}
                      style={{ color: "var(--brand)", fontSize: "16px" }}
                    ></i>
                  </div>
                  {isOpen && (
                    <p className="feature-card-text mt-3 mb-0">{f(item, "a")}</p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
