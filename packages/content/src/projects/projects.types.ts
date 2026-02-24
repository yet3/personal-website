import type { ISkillKey } from "../skills";

export type IProjectSkills = ISkillKey[];

export interface IProjectImg {
  idx: number
  blurhash: string;
  src: string
}

export interface IProject {
  id: string;
  title: string;
  skills: IProjectSkills;

  appHref?: string;
  repoHref?: string;

  isPreviewProject?: boolean;
  showInFooter?: boolean;
  showInCv?: boolean;

  images: IProjectImg[];
  imageFit?: "contain" | "cover";
  imagePosition?: string;

  contentBlocks: string[];
}

export interface IProjectGeneratedData {
  images: { webp: string; avif: string; png: string }[];
  blurHash: string;
}

