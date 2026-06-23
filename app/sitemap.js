import { site } from "@/data/site";
import { allBlogs } from "@/data/blogs";

export default function sitemap() {
  const routes = ["", "/service", "/project", "/about", "/blog", "/contact"];
  const main = routes.map((path) => ({
    url: `${site.url}${path}`,
    lastModified: new Date("2026-06-22"),
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.8,
  }));
  const posts = allBlogs.map((p) => ({
    url: `${site.url}/blog-details/${p.id}`,
    lastModified: new Date("2026-06-22"),
    changeFrequency: "monthly",
    priority: 0.6,
  }));
  return [...main, ...posts];
}
