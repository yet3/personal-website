import { Skill } from "$utils/skills";
import {
	ExperienceLocation,
	ExperiencePosition,
	ExperienceWorkMode,
	type IExperienceSkills
} from "$types/experience.types";
import { defineExperience } from "../lib/utils/define-experience";

const SKILLS: IExperienceSkills = [
	Skill.TypesSript,
	Skill.JavaScript,
	Skill.React,
	Skill.Html,
	Skill.Scss,
	Skill.Css,
	Skill.StyledComponents,
	Skill.Puppeteer,
	Skill.Nodejs,
	Skill.Express,
	Skill.Mongodb,
	Skill.Webpack,
	Skill.Openai,
	Skill.Mixpanel,
	Skill.Monday
];

export default defineExperience("Storydoc", {
	position: ExperiencePosition.FullStack,
	workMode: ExperienceWorkMode.Remote,
	location: ExperienceLocation.International,
	website: "https://www.storydoc.com/",
	skills: SKILLS,
	contentBlocks: [
		"Collaborated with an international team of developers, ui/ux/story designers and product managers.",
		"Worked on an AI-powered presentation SaaS. Implemented features such as a fully interactive WYSIWYG rich text editor, AI integration, new slide components, and PDF generation using Puppeteer. Focused on optimizing the product and was responsible for managing bug fixing.",
		"Worked on internal tooling for testing/adjusting ai features"
	]
});
