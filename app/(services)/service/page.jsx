import MarqueeComponent from "@/components/common/Marquee";
import Footer7 from "@/components/footers/Footer7";
import Header7 from "@/components/headers/Header7";
import DarkBody from "@/components/common/DarkBody";
import CtaContact from "@/components/common/CtaContact";
import Breadcumb from "@/components/service/Breadcumb";
import Features2 from "@/components/service/Features2";
import ServiceNotes from "@/components/service/ServiceNotes";

export const metadata = {
  title: "Servicios y precios",
  description:
    "Precios del estudio en Cincinnati: grabación $25/hora, beats desde $90, mezcla $80, máster $30, distribución $15 por canción, video musical desde $180 y diseño de flyers.",
  alternates: { canonical: "/service" },
};

export default function ServicePage() {
  return (
    <>
      <DarkBody />
      <Header7 />
      <Breadcumb />
      <Features2 />
      <ServiceNotes />
      <CtaContact />
      <MarqueeComponent />
      <Footer7 />
    </>
  );
}
