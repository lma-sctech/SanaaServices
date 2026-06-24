import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const BASE = "https://sanaaservices.com";

const routes = ["/", "/privacy", "/accessibility"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({ url: `${BASE}${route}` }));
}
