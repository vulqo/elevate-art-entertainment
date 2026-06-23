import MarqueeComponent from "@/components/common/Marquee";
import Footer7 from "@/components/footers/Footer7";
import Header7 from "@/components/headers/Header7";
import Breadcumb from "@/components/service/Breadcumb";
import Features1 from "@/components/service/Features1";
import ServiceNotes from "@/components/service/ServiceNotes";

export const metadata = {
  title: "Servicios y precios",
  description:
    "Precios del estudio en Cincinnati: grabación $25/hora, beats desde $90, mezcla $80, máster $30, distribución $15 por canción, video musical desde $180 y diseño de flyers.",
  alternates: { canonical: "/service" },
};

export default function ServicePage1() {
  return (
    <>
      <Header7 />
      <Breadcumb />
      <Features1 />
      <ServiceNotes />
      <MarqueeComponent />
      <Footer7 />
    </>
  );
}
