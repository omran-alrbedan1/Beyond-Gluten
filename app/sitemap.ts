// app/sitemap.ts
import type { MetadataRoute } from "next";

const BASE_URL = "https://beyond-gluten.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const locales = ["", "ar"];
  const pages = ["", "about", "contact", "policies"];
  
  const routes: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    for (const page of pages) {
      let url = BASE_URL;
      
      if (locale === "ar") {
        url += `/${locale}`;
      }
      
      if (page !== "") {
        url += `/${page}`;
      }
      
      // تحديد الأولوية وتكرار التحديث
      let priority = 0.8;
      let changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] = "monthly";
      
      if (page === "") {
        priority = 1.0;
        changeFrequency = "weekly";
      } else if (page === "about") {
        priority = 0.8;
        changeFrequency = "monthly";
      } else if (page === "contact") {
        priority = 0.6;
        changeFrequency = "yearly";
      } else if (page === "policies") {
        priority = 0.4;
        changeFrequency = "yearly";
      }
      
      routes.push({
        url: url,
        lastModified: new Date(),
        changeFrequency: changeFrequency,
        priority: priority,
      });
    }
  }
  return routes;
}