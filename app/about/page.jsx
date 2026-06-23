import Breadcumb from "@/components/about/Breadcumb";
import StudioIntro from "@/components/about/StudioIntro";
import MarqueeComponent from "@/components/common/Marquee";
import LocalBusinessSchema from "@/components/common/LocalBusinessSchema";
import Footer7 from "@/components/footers/Footer7";
import Header7 from "@/components/headers/Header7";
import React from "react";

export const metadata = {
  title: "Estudio de grabación en Downtown Cincinnati | Renta por hora",
  description:
    "Renta nuestro estudio en Downtown Cincinnati por hora: ensayos, sesiones de fotos, video y producción de contenido. Estudio de grabación bilingüe (español e inglés) en Ohio.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <LocalBusinessSchema />
      <Header7 />
      <Breadcumb />
      <StudioIntro />
      <MarqueeComponent />
      <Footer7 />
    </>
  );
}
