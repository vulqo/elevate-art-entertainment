import Header7 from "@/components/headers/Header7";
import Footer7 from "@/components/footers/Footer7";
import DarkBody from "@/components/common/DarkBody";
import Link from "next/link";
import React from "react";

export const metadata = {
  title: "Página no encontrada | Elevate Art Entertainment",
};

export default function ErrorPage() {
  return (
    <>
      <DarkBody />
      <Header7 />
      <div className="error-wrapper text-center space">
        <div className="container">
          <h1 style={{ fontSize: "120px", lineHeight: 1, color: "var(--brand)" }}>
            404
          </h1>
          <h2 className="text-smoke mt-20">Esta página no existe</h2>
          <p className="sec-text mb-30">
            El enlace está roto o la página se movió. Volvamos al inicio.
          </p>
          <Link scroll={false} href="/" className="btn style2">
            <span className="link-effect">
              <span className="effect-1">VOLVER AL INICIO</span>
              <span className="effect-1">VOLVER AL INICIO</span>
            </span>
          </Link>
        </div>
      </div>
      <Footer7 />
    </>
  );
}
