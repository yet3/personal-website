import type { ISkillKey } from "$src/skills";

export enum ExperiencePosition {
	FullStack = "Full-Stack Developer",
}

export enum ExperienceWorkMode {
	Remote = "Remote",
	Hybrid = "Hybrid",
}

export enum ExperienceLocation {
	Poland = "Poland",
	International = "International",
}

export type IExperienceSkills = ISkillKey[];

export interface IExperience {
	at: string;
	position: ExperiencePosition;
	workMode: ExperienceWorkMode;
	location: ExperienceLocation;
	skills: IExperienceSkills;
	dates: Array<[Date, Date?]>;
	website: string;
	isFreelance?: boolean;
  description: string

	contentBlocks: string[];
}
