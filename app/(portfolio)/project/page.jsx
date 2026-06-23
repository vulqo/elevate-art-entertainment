import MarqueeComponent from "@/components/common/Marquee";
import Footer7 from "@/components/footers/Footer7";
import Header7 from "@/components/headers/Header7";
import DarkBody from "@/components/common/DarkBody";
import CtaContact from "@/components/common/CtaContact";
import Breadcumb from "@/components/portfolio/Breadcumb";
import WorkGallery from "@/components/portfolio/WorkGallery";
import SpotifyEmbed from "@/components/portfolio/SpotifyEmbed";
import { buildMeta } from "@/data/seo";
import React from "react";

export const metadata = buildMeta({
  title: "Portafolio",
  description:
    "Trabajos del estudio Elevate Art Entertainment en Cincinnati: producción musical, videoclips, grabación y contenido visual.",
  path: "/project",
});

export default function ProjectPage() {
  return (
    <>
      <DarkBody />
      <Header7 />
      <Breadcumb />
      <WorkGallery />
      <SpotifyEmbed />
      <CtaContact />
      <MarqueeComponent />
      <Footer7 />
    </>
  );
}
