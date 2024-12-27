import type { ImageMetadata } from "astro";

export interface SkillSection {
  key: string;
  title: string;
  icon: string;
  items: string;
  colSpan?: string;
}

export interface ProjectCardProps {
  title: string;
  description: string;
  cover: ImageMetadata;
  url: string;
  tags: string[];
  github?: string;
  demo?: string;
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
