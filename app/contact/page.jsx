import MarqueeComponent from "@/components/common/Marquee";
import PageBanner from "@/components/common/PageBanner";
import Contact from "@/components/contact/Contact";
import ContactInfo from "@/components/contact/ContactInfo";
import Footer7 from "@/components/footers/Footer7";
import Header7 from "@/components/headers/Header7";
import DarkBody from "@/components/common/DarkBody";
import { buildMeta } from "@/data/seo";
import React from "react";

export const metadata = buildMeta({
  title: "Contacto",
  description:
    "Reserva tu sesión en Elevate Art Entertainment, Downtown Cincinnati. Escríbenos por WhatsApp o Instagram. Hablamos español e inglés.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <DarkBody />
      <Header7 />
      <PageBanner titleKey="contact.breadcrumb" textKey="contact.bannerText" path="/contact" />
      <ContactInfo />
      <Contact />
      <MarqueeComponent />
      <Footer7 />
    </>
  );
}
