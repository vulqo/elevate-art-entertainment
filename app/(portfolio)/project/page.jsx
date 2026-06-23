import MarqueeComponent from "@/components/common/Marquee";
import Footer7 from "@/components/footers/Footer7";
import Header7 from "@/components/headers/Header7";
import DarkBody from "@/components/common/DarkBody";
import CtaContact from "@/components/common/CtaContact";
import Breadcumb from "@/components/portfolio/Breadcumb";
import Projects from "@/components/portfolio/Projects";
import React from "react";

export const metadata = {
  title: "Portafolio",
  description:
    "Trabajos del estudio Elevate Art Entertainment en Cincinnati: producción musical, videoclips, grabación y contenido visual.",
  alternates: { canonical: "/project" },
};

export default function ProjectPage() {
  return (
    <>
      <DarkBody />
      <Header7 />
      <Breadcumb />
      <Projects />
      <CtaContact />
      <MarqueeComponent />
      <Footer7 />
    </>
  );
}
