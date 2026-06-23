import { site } from "@/data/site";

export default function sitemap() {
  const routes = ["", "/service", "/project", "/about", "/blog", "/contact"];
  return routes.map((path) => ({
    url: `${site.url}${path}`,
    lastModified: new Date("2026-06-22"),
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.8,
  }));
}
