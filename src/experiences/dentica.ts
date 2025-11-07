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
	Skill.React,
	Skill.Html,
	Skill.Css,
	Skill.TailwindCss,
	Skill.Electron,
	Skill.Nodejs,
	Skill.Firebase,
	Skill.Vite,
	Skill.SerwerSms,
];

export default defineExperience("Dentica", {
	position: ExperiencePosition.FullStack,
	workMode: ExperienceWorkMode.Remote,
	location: ExperienceLocation.Poland,
	website:
		"https://www.google.com/maps/place/Gabinet+stomatologiczny+Dentica/data=!4m7!3m6!1s0x4714262b8fa8b3f9:0x66f60f569709881b!8m2!3d49.6921907!4d19.2016225!16s%2Fg%2F11gdyhzbff!19sChIJ-bOojysmFEcRG4gJl1YP9mY?authuser=0&hl=en&rclk=1",
	isFreelance: true,
	skills: SKILLS,
	contentBlocks: [
		"Collaborated closely with the dentist to create an easy-to-use and efficient system.",
		"Developed multiple iterations of a patient management desktop app for a dentist. Built a user-friendly system for scheduling appointments and keeping track of patient procedures. Created an integration with an SMS API (using cloud functions) to send automated notifications and reminders to patients about their appointments, as well as to update dentist's schedules in real-time.",
	],
});
