import MarqueeComponent from "@/components/common/Marquee";
import Footer7 from "@/components/footers/Footer7";
import Header7 from "@/components/headers/Header7";
import DarkBody from "@/components/common/DarkBody";
import CtaContact from "@/components/common/CtaContact";
import Breadcumb2 from "@/components/portfolio/Breadcumb2";
import ProjectDetails from "@/components/portfolio/ProjectDetails";

export const metadata = {
  title: "Detalle del proyecto",
  description:
    "Proyecto del estudio Elevate Art Entertainment en Downtown Cincinnati.",
};

export default async function ProjectPageDetails(props) {
  const params = await props.params;
  return (
    <>
      <DarkBody />
      <Header7 />
      <Breadcumb2 />
      <ProjectDetails portfolioId={params.id} />
      <CtaContact />
      <MarqueeComponent />
      <Footer7 />
    </>
  );
}
