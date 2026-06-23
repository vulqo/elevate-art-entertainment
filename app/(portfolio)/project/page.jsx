import MarqueeComponent from "@/components/common/Marquee";
import Footer7 from "@/components/footers/Footer7";
import Header7 from "@/components/headers/Header7";
import Breadcumb from "@/components/portfolio/Breadcumb";
import VideoGallery from "@/components/portfolio/VideoGallery";
import React from "react";

export const metadata = {
  title: "Portafolio",
  description:
    "Videos musicales, producciones y contenido visual de Elevate Art Entertainment en Cincinnati.",
  alternates: { canonical: "/project" },
};

export default function ProjectPage1() {
  return (
    <>
      <Header7 />
      <Breadcumb />
      <VideoGallery />
      <MarqueeComponent />
      <Footer7 />
    </>
  );
}
