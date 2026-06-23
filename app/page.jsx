import Home8 from "./(homes)/home-8/page";
import LocalBusinessSchema from "@/components/common/LocalBusinessSchema";

export const metadata = {
  title:
    "Elevate Art Entertainment | Estudio de grabación en Cincinnati",
  description:
    "Estudio de grabación, producción musical y contenido visual en Downtown Cincinnati. Grabación, beats, mezcla y máster, distribución, video musical y fotografía. Hablamos español e inglés.",
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <LocalBusinessSchema />
      <Home8 />
    </>
  );
}
