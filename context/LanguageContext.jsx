"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
import { dict } from "@/data/i18n";

const LangContext = createContext();

export function useLang() {
  return useContext(LangContext);
}

export default function LanguageProvider({ children }) {
  const [lang, setLang] = useState("es");

  useEffect(() => {
    const saved =
      typeof window !== "undefined" ? localStorage.getItem("lang") : null;
    if (saved === "es" || saved === "en") setLang(saved);
  }, []);

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = lang;
      localStorage.setItem("lang", lang);
    }
  }, [lang]);

  // t("namespace.key") -> string en el idioma actual (fallback a español)
  const t = (key) => {
    const table = dict[lang] || dict.es;
    return table[key] ?? dict.es[key] ?? key;
  };

  const toggle = () => setLang((l) => (l === "es" ? "en" : "es"));

  return (
    <LangContext.Provider value={{ lang, setLang, toggle, t }}>
      {children}
    </LangContext.Provider>
  );
}
