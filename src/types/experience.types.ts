import type { ISkillKey } from "$utils/skills";

export enum ExperiencePosition {
	"FullStack" = "Full-Stack Developer"
}

export enum ExperienceWorkMode {
	Remote = "Remote",
	Hybrid = "Hybrid"
}

export enum ExperienceLocation {
	Poland = "Poland",
	International = "International"
}

export type IExperienceSkills = ISkillKey[]

export interface IExperience {
	at: string;
	position: ExperiencePosition;
	workMode: ExperienceWorkMode;
	location: ExperienceLocation;
	skills: IExperienceSkills;
	website?: string;
	isFreelance?: boolean;

	contentBlocks: string[];
}
