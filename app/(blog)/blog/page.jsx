import BlogList2 from "@/components/blog/BlogList2";
import Breadcumb from "@/components/blog/Breadcumb";
import MarqueeComponent from "@/components/common/Marquee";
import Footer7 from "@/components/footers/Footer7";
import Header7 from "@/components/headers/Header7";
import DarkBody from "@/components/common/DarkBody";
import { buildMeta } from "@/data/seo";
import React from "react";

export const metadata = buildMeta({
  title: "Blog",
  description:
    "Consejos de grabación, producción musical y contenido visual del estudio Elevate Art Entertainment en Cincinnati.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <>
      <DarkBody />
      <Header7 />
      <Breadcumb />
      <BlogList2 />
      <MarqueeComponent />
      <Footer7 />
    </>
  );
}
