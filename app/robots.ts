import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/admin/", "/_next/", "/private/"],
      }
    ],
    sitemap: "https://www.echo-solution.com/sitemap.xml",
    host: "https://www.echo-solution.com",
  };
}
