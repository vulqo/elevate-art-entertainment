"use client";
import { useEffect } from "react";

// Aplica el fondo oscuro del template (bg-title) a toda la página.
export default function DarkBody() {
  useEffect(() => {
    document.body.classList.add("bg-title");
    return () => document.body.classList.remove("bg-title");
  }, []);
  return null;
}
