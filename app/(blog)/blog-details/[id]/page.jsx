import BlogDetails from "@/components/blog/BlogDetails";
import Breadcumb2 from "@/components/blog/Breadcumb2";
import MarqueeComponent from "@/components/common/Marquee";
import Footer7 from "@/components/footers/Footer7";
import Header7 from "@/components/headers/Header7";
import DarkBody from "@/components/common/DarkBody";
import { allBlogs } from "@/data/blogs";
import { site } from "@/data/site";
import { buildMeta } from "@/data/seo";

export async function generateStaticParams() {
  return allBlogs.map((p) => ({ id: String(p.id) }));
}

export async function generateMetadata(props) {
  const params = await props.params;
  const post = allBlogs.find((p) => p.id == params.id) || allBlogs[0];
  return buildMeta({
    title: post.title,
    description: post.metaDescription || post.excerpt,
    path: `/blog-details/${post.id}`,
  });
}

export default async function BlogPageDetails(props) {
  const params = await props.params;
  const post = allBlogs.find((p) => p.id == params.id) || allBlogs[0];

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.metaDescription || post.excerpt,
    inLanguage: "es",
    author: { "@type": "Organization", name: site.name },
    publisher: { "@type": "Organization", name: site.name },
    mainEntityOfPage: `${site.url}/blog-details/${post.id}`,
    articleSection: post.category,
  };

  return (
    <>
      <DarkBody />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Header7 />
      <Breadcumb2 title={post.title} />
      <BlogDetails blogId={params.id} />
      <MarqueeComponent />
      <Footer7 />
    </>
  );
}
