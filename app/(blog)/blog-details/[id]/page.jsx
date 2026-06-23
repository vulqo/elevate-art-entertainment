import BlogDetails from "@/components/blog/BlogDetails";
import Breadcumb2 from "@/components/blog/Breadcumb2";
import MarqueeComponent from "@/components/common/Marquee";
import Footer7 from "@/components/footers/Footer7";
import Header7 from "@/components/headers/Header7";
import DarkBody from "@/components/common/DarkBody";

export const metadata = {
  title: "Artículo del blog",
  description: "Blog de Elevate Art Entertainment, estudio en Cincinnati.",
};

export default async function BlogPageDetails(props) {
  const params = await props.params;
  return (
    <>
      <DarkBody />
      <Header7 />
      <Breadcumb2 />
      <BlogDetails blogId={params.id} />
      <MarqueeComponent />
      <Footer7 />
    </>
  );
}
