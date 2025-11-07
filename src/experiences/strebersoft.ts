import {
	ExperienceLocation,
	ExperiencePosition,
	ExperienceWorkMode,
	type IExperienceSkills,
} from "$types/experience.types";
import { Skill } from "$utils/skills";
import { defineExperience } from "../lib/utils/define-experience";

const SKILLS: IExperienceSkills = [
	Skill.TypesSript,
	Skill.JavaScript,
	Skill.React,
	Skill.Nextjs,
	Skill.Electron,
	Skill.ReactNative,
	Skill.Expo,
	Skill.Nodejs,
	Skill.Express,
	Skill.PostgreSql,
	Skill.Mongodb,
	Skill.Html,
	Skill.Css,
	Skill.StyledComponents,
	Skill.Webpack,
	Skill.ClickUp,
];

export default defineExperience("STREBER SOFT", {
	position: ExperiencePosition.FullStack,
	workMode: ExperienceWorkMode.Remote,
	location: ExperienceLocation.Poland,
	website: "https://aleo.com/int/company/streber-soft-grzegorz-florek-mielec",
	skills: SKILLS,
	contentBlocks: [
		"Worked under an experienced developer/dev-op/product manager.",
		"Worked on an ERP system for a plastic recycling/manufacturing plant. Developed a web app, and multiple desktop and mobile apps for production, quality, and shift management. Managed the PostgreSQL database. Implemented generation of PDF/XLSX reports. Collaborated with users to improve the system further.",
		"Extended an ERP system for a metal manufacturing plant. Worked on product ordering system. Maintained and implemented new features for a desktop app based on user feedback.",
		"Developed a responsive appointment scheduling web app for a student/work doctor. Implemented flexible and easy-to-use schedule manager. Worked on PDF generation and automated email notifications.",
	],
});
