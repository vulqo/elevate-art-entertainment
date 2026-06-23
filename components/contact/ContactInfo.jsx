"use client";
import { contactInfo2 } from "@/data/contactInfo";
import Image from "next/image";
import React from "react";
import { useLang } from "@/context/LanguageContext";

export default function ContactInfo() {
  const { lang } = useLang();
  const f = (o, k) => (lang === "en" ? o[`${k}_en`] || o[k] : o[k]);
  return (
    <div className="feature-area-1 space">
      <div className="container">
        <div className="row gy-4 align-items-center justify-content-center">
          {contactInfo2.map((info, index) => (
            <div key={index} className="col-xl-4 col-md-6">
              <div className="feature-card">
                <div className="feature-card-icon">
                  <Image width={36} height={40} src={info.iconSrc} alt="icon" />
                </div>
                <div className="feature-card-details">
                  <h4 className="feature-card-title">
                    <a href="#">{f(info, "title")}</a>
                  </h4>
                  {info.address && (
                    <p className="feature-card-text mb-0">{info.address}</p>
                  )}
                  {info.city && (
                    <p className="feature-card-text">{info.city}</p>
                  )}
                  {info.email && (
                    <p className="feature-card-text mb-0">{info.email}</p>
                  )}
                  {info.email2 && (
                    <p className="feature-card-text">{f(info, "email2")}</p>
                  )}
                  {info.phoneNumber1 && (
                    <p className="feature-card-text mb-0">
                      {info.phoneNumber1}
                    </p>
                  )}
                  {info.phoneNumber2 && (
                    <p className="feature-card-text">{f(info, "phoneNumber2")}</p>
                  )}
                  <a href={info.linkUrl} className="link-btn">
                    <span className="link-effect">
                      <span className="effect-1">{f(info, "linkText")}</span>
                      <span className="effect-1">{f(info, "linkText")}</span>
                    </span>
                    <Image
                      width={13}
                      height={13}
                      src="/assets/img/icon/arrow-left-top.svg"
                      alt="icon"
                    />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
