import type { ImageMetadata } from "astro";

export interface SkillSection {
  key: string;
  title: string;
  icon: string;
  items: string;
  colSpan?: string;
}

export interface ProjectCardProps {
  id: string;
  metadata: {
    title: string;
    description: string;
    cover: ImageMetadata;
  };
  links: {
    url: string;
    github?: string;
    demo?: string;
  };
  tags: ReadonlyArray<string>;
}

export interface ProjectData {
  id: string;
  slug: string;
  data: {
    title: string;
    description: string;
    cover: ImageMetadata;
    tags: string[];
    github?: string;
    demo?: string;
    featured: boolean;
    pubDate: Date;
    updatedDate?: Date;
  };
}
