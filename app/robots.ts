import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Global rules for all crawlers
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",
          "/_next/",
          "/private/",
          "/admin/",
          "/dashboard/",
          "/account/",
          "/*?*", // Avoid duplicate content from query parameters
          "/*.json$", // API endpoints
          "/*/rss.xml", // RSS feeds if you have them
        ],
        // Add a small delay to prevent server overload
        crawlDelay: 10,
      },
      // Additional rules for specific bots
      {
        userAgent: "Googlebot",
        allow: ["/"],
        disallow: ["/search/"],
        crawlDelay: 5,
      },
      {
        userAgent: "Bingbot",
        allow: ["/"],
        crawlDelay: 5,
      },
    ],
    sitemap: [
      "https://www.echo-solution.com/sitemap.xml",
      // Add other sitemaps if you have them, e.g.:
      // "https://www.echo-solution.com/blog-sitemap.xml",
    ],
    // Host directive is deprecated but some crawlers still use it
    host: "www.echo-solution.com",
  };
}
