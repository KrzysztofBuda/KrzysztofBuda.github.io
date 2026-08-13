import type { MetadataRoute } from "next";

import { projectSlugs } from "@/data/projects";

export const dynamic = "force-static";

const BASE_URL =
  "https://krzysztofbuda.github.io";

export default function sitemap(): MetadataRoute.Sitemap {
  const projectPages = projectSlugs.map(
    (slug) => ({
      url: `${BASE_URL}/projects/${slug}/`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    }),
  );

  return [
    {
      url: `${BASE_URL}/`,
      changeFrequency: "weekly",
      priority: 1,
    },

    ...projectPages,
  ];
}