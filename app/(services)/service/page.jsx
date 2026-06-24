import MarqueeComponent from "@/components/common/Marquee";
import Footer7 from "@/components/footers/Footer7";
import Header7 from "@/components/headers/Header7";
import DarkBody from "@/components/common/DarkBody";
import CtaContact from "@/components/common/CtaContact";
import PageBanner from "@/components/common/PageBanner";
import Features2 from "@/components/service/Features2";
import ServiceNotes from "@/components/service/ServiceNotes";
import Faq from "@/components/common/Faq";
import { buildMeta } from "@/data/seo";
import { featureData4 } from "@/data/features";
import { site } from "@/data/site";

export const metadata = buildMeta({
  title: "Servicios y precios",
  description:
    "Precios del estudio en Cincinnati: grabación $25/hora, beats desde $90, mezcla $80, máster $30, distribución $15 por canción, video musical desde $180 y diseño de flyers.",
  path: "/service",
});

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Estudio de grabación y producción musical",
  provider: { "@type": "MusicGroup", name: site.name },
  areaServed: "Cincinnati, Ohio",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Servicios del estudio",
    itemListElement: featureData4.map((s) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: s.title, description: s.text },
    })),
  },
};

export default function ServicePage() {
  return (
    <>
      <DarkBody />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Header7 />
      <PageBanner titleKey="service.breadcrumb" textKey="service.bannerText" path="/service" />
      <Features2 />
      <ServiceNotes />
      <Faq />
      <CtaContact />
      <MarqueeComponent />
      <Footer7 />
    </>
  );
}
