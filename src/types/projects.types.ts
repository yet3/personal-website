import type { ISkillKey } from "$utils/skills";
import type { IProjectId } from "../projects";

export type IProjectSkills = ISkillKey[];

export interface IProject {
	id: string;
	title: string;
	skills: IProjectSkills;

	appHref?: string;
	repoHref?: string;

	showInFooter?: boolean;
	showInCv?: boolean;

	imageFit?: "contain" | "cover";
	imagePosition?: string;

	contentBlocks: string[];
}

export interface IProjectGeneratedData {
	images: { webp: string; avif: string; png: string }[];
	blurHash: string;
}

export type IProjectsGeneratedData = Record<IProjectId, IProjectGeneratedData>;
