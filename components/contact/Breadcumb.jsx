"use client";
import React from "react";
import { useLang } from "@/context/LanguageContext";

export default function Breadcumb() {
  const { t } = useLang();
  return (
    <div
      className="breadcumb-wrapper"
      style={{ background: "linear-gradient(135deg, #15181d 0%, #20242b 55%, #2b313a 100%)" }}
    >
      <div className="container">
        <div className="breadcumb-content">
          <h1 className="breadcumb-title">{t("contact.breadcrumb")}</h1>
        </div>
      </div>
    </div>
  );
}
