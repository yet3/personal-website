import {
  ExperienceLocation,
  ExperiencePosition,
  ExperienceWorkMode,
  type IExperienceSkills,
} from "../../experience";
import { defineExperience } from "../define-experience";
import { makeExperienceDate } from "../experience-date";
import { Skill } from "../../skills";

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
	Skill.Monday,
];

export default defineExperience("Storydoc", {
	dates: [
		[makeExperienceDate(3, 2023), makeExperienceDate(12, 2023)],
		[makeExperienceDate(2, 2025), makeExperienceDate(6, 2025)],
	],
	position: ExperiencePosition.FullStack,
	workMode: ExperienceWorkMode.Remote,
	location: ExperienceLocation.International,
	website: "https://www.storydoc.com/",
	skills: SKILLS,
  description: "This is a description",
	contentBlocks: [
		"Collaborated with a global team (developers, UI/UX/story designers, product managers) to build an AI-powered presentation SaaS.",
		"Developed core features: interactive WYSIWYG rich text editor, AI integrations, custom slide components, and PDF generation (using Puppeteer).",
		"Optimized product performance and led bug triage/fixing efforts.",
		"Built internal tools to test and refine AI-driven functionalities.",
	],
});
