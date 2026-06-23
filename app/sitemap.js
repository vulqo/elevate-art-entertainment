import { site } from "@/data/site";
import { allBlogs, postISODate } from "@/data/blogs";

export default function sitemap() {
  const routes = ["", "/service", "/project", "/about", "/blog", "/contact"];
  const main = routes.map((path) => ({
    url: `${site.url}${path}`,
    lastModified: new Date("2026-06-23"),
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.8,
  }));
  const postsRoutes = allBlogs.map((p) => {
    const iso = postISODate(p.date);
    return {
      url: `${site.url}/blog-details/${p.id}`,
      lastModified: iso ? new Date(iso) : new Date("2026-06-23"),
      changeFrequency: "monthly",
      priority: 0.6,
    };
  });
  return [...main, ...postsRoutes];
}
