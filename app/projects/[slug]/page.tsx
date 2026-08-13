import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { translations } from "@/components/language/translations";
import ProjectDetails from "@/components/projects/details/ProjectDetails";
import {
  getProjectBySlug,
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

  const projectData = getProjectBySlug(
    slug as ProjectSlug,
  );

  if (!projectData) {
    return {};
  }

  const project =
    translations.pl.projects[
      projectData.translationKey
    ];

  const projectUrl = `/projects/${slug}/`;

  return {
    title: project.title,

    description: project.description,

    alternates: {
      canonical: projectUrl,
    },

    openGraph: {
      title: `${project.title} | Krzysztof Buda`,
      description: project.description,
      url: projectUrl,
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