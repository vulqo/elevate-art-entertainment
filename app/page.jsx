import Home8 from "./(homes)/home-8/page";
import LocalBusinessSchema from "@/components/common/LocalBusinessSchema";
import { buildMeta } from "@/data/seo";

export const metadata = buildMeta({
  title: "Elevate Art Entertainment | Estudio de grabación en Cincinnati",
  description:
    "Estudio de grabación, producción musical y contenido visual en Downtown Cincinnati. Grabación, beats, mezcla y máster, distribución, video musical y fotografía. Hablamos español e inglés.",
  path: "/",
});

export default function Home() {
  return (
    <>
      <LocalBusinessSchema />
      <Home8 />
    </>
  );
}
