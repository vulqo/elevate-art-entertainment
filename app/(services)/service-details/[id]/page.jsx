import MarqueeComponent from "@/components/common/Marquee";
import Footer7 from "@/components/footers/Footer7";
import Header7 from "@/components/headers/Header7";
import DarkBody from "@/components/common/DarkBody";
import CtaContact from "@/components/common/CtaContact";
import ServiceDetails from "@/components/service/ServiceDetails";

export const metadata = {
  title: "Detalle del servicio",
  description:
    "Detalle de los servicios del estudio Elevate Art Entertainment en Downtown Cincinnati.",
};

export default async function ServicePageDetails(props) {
  const params = await props.params;
  return (
    <>
      <DarkBody />
      <Header7 />
      <ServiceDetails serviceId={params.id} />
      <CtaContact />
      <MarqueeComponent />
      <Footer7 />
    </>
  );
}
