export const projectSlugs = [
  "mobile-waiter",
  "garage-system",
] as const;

export type ProjectSlug =
  (typeof projectSlugs)[number];

export type ProjectTranslationKey =
  | "mobileWaiter"
  | "garage"
  | "pizza"
  | "calculator";

export type PortfolioProject = {
  index: string;
  translationKey: ProjectTranslationKey;
  technologies: readonly string[];
  slug: ProjectSlug | null;
  compact: boolean;
};

export const projects = [
  {
    index: "01",
    translationKey: "mobileWaiter",
    technologies: [
      "Kotlin",
      "Android",
      "REST API",
      "SQL",
      "SOGA",
    ],
    slug: "mobile-waiter",
    compact: false,
  },
  {
    index: "02",
    translationKey: "garage",
    technologies: [
      "Kotlin",
      "Python",
      "Flask",
      "Raspberry Pi",
      "MySQL",
    ],
    slug: "garage-system",
    compact: false,
  },
  {
    index: "03",
    translationKey: "pizza",
    technologies: [
      "Application",
      "SQL",
      "Database",
    ],
    slug: null,
    compact: true,
  },
  {
    index: "04",
    translationKey: "calculator",
    technologies: [
      "C++",
      "Desktop",
      "Electronics",
    ],
    slug: null,
    compact: true,
  },
] as const satisfies readonly PortfolioProject[];

export function getProjectBySlug(
  slug: ProjectSlug,
) {
  return projects.find(
    (project) => project.slug === slug,
  );
}