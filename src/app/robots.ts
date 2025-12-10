import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  // TODO: 배포 도메인으로 변경
  const baseUrl = "https://example.com";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
