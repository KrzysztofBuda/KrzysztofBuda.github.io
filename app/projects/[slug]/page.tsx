import type { Metadata } from "next";
import { notFound } from "next/navigation";

import ProjectDetails from "@/components/projects/details/ProjectDetails";
import { translations } from "@/components/language/translations";
import {
  projectSlugs,
  type ProjectSlug,
} from "@/data/projects";

export function generateStaticParams() {
  return projectSlugs.map((slug) => ({
    slug,
  }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{
    slug: string;
  }>;
}): Promise<Metadata> {
  const { slug } = await params;

  if (!projectSlugs.includes(slug as ProjectSlug)) {
    return {};
  }

  const projectSlug = slug as ProjectSlug;

  const project =
    projectSlug === "mobile-waiter"
      ? translations.pl.projects.mobileWaiter
      : translations.pl.projects.garage;

  return {
    title: project.title,

    description: project.description,

    openGraph: {
      title: `${project.title} | Krzysztof Buda`,
      description: project.description,
      type: "article",
    },

    twitter: {
      card: "summary_large_image",
      title: `${project.title} | Krzysztof Buda`,
      description: project.description,
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{
    slug: string;
  }>;
}) {
  const { slug } = await params;

  if (!projectSlugs.includes(slug as ProjectSlug)) {
    notFound();
  }

  return (
    <ProjectDetails
      slug={slug as ProjectSlug}
    />
  );
}