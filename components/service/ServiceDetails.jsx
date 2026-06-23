"use client";

import { allFeatures, tField } from "@/data/features";
import { waLink, placeholderImg } from "@/data/site";
import { useLang } from "@/context/LanguageContext";

export default function ServiceDetails({ serviceId }) {
  const { t, lang } = useLang();
  const serviceItem =
    allFeatures.filter((elm) => elm.id == serviceId)[0] || allFeatures[0];
  const title = tField(serviceItem, "title", lang);

  return (
    <div className="service-details-page-area space">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-xl-12">
            <div
              className="service-inner-thumb mb-80"
              style={{
                minHeight: "340px",
                borderRadius: "14px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundImage: `linear-gradient(rgba(10,12,0,0.45), rgba(10,12,0,0.6)), url(${placeholderImg(
                  `serv-${serviceItem.id}`,
                  1400,
                  600,
                  "recording-studio,music,microphone"
                )})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <i
                className={`fas ${serviceItem.faIcon}`}
                style={{ fontSize: "90px", color: "var(--theme-color)" }}
              ></i>
            </div>
          </div>
          <div className="col-xl-8">
            <div className="title-area mb-20">
              <span className="sub-title">{t("sd.sub")}</span>
              <h2 className="sec-title text-smoke">{title}</h2>
              <h4 style={{ color: "var(--theme-color)" }}>
                {serviceItem.price}
              </h4>
              <p className="sec-text mt-30">{tField(serviceItem, "text", lang)}</p>
              <p className="sec-text mt-20">{t("sd.placeholder")}</p>
            </div>
            <h3 className="text-smoke">{t("sd.includes")}</h3>
            <ul className="about-list mt-20">
              <li>{t("sd.inc1")}</li>
              <li>{t("sd.inc2")}</li>
              <li>{t("sd.inc3")}</li>
              <li>{t("sd.inc4")}</li>
            </ul>
            <a
              href={waLink(`Hola, quiero información sobre: ${title}.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn style2 mt-30"
            >
              <span className="link-effect">
                <span className="effect-1">{t("sd.reservaWa")}</span>
                <span className="effect-1">{t("sd.reservaWa")}</span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
