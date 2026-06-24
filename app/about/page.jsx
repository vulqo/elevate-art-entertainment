import PageBanner from "@/components/common/PageBanner";
import StudioIntro from "@/components/about/StudioIntro";
import MarqueeComponent from "@/components/common/Marquee";
import LocalBusinessSchema from "@/components/common/LocalBusinessSchema";
import DarkBody from "@/components/common/DarkBody";
import Footer7 from "@/components/footers/Footer7";
import Header7 from "@/components/headers/Header7";
import { buildMeta } from "@/data/seo";
import React from "react";

export const metadata = buildMeta({
  title: "Estudio de grabación en Downtown Cincinnati | Renta por hora",
  description:
    "Renta nuestro estudio en Downtown Cincinnati por hora: ensayos, sesiones de fotos, video y producción de contenido. Estudio de grabación bilingüe (español e inglés) en Ohio.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <DarkBody />
      <LocalBusinessSchema />
      <Header7 />
      <PageBanner titleKey="studio.breadcrumb" textKey="studio.bannerText" path="/about" />
      <StudioIntro />
      <MarqueeComponent />
      <Footer7 />
    </>
  );
}
