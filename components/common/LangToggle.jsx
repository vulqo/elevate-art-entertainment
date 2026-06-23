"use client";
import React from "react";
import { useLang } from "@/context/LanguageContext";

// Botón ES/EN. Muestra el idioma al que cambiarás.
export default function LangToggle({ className = "" }) {
  const { lang, toggle } = useLang();
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Cambiar idioma / Switch language"
      className={className}
      style={{
        background: "transparent",
        border: "1px solid rgba(255,255,255,0.35)",
        color: "#fff",
        borderRadius: "30px",
        padding: "7px 14px",
        fontSize: "13px",
        fontWeight: 600,
        letterSpacing: "0.5px",
        cursor: "pointer",
      }}
    >
      {lang === "es" ? "EN" : "ES"}
    </button>
  );
}
