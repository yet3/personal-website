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
  dates: [[makeExperienceDate(7, 2022), makeExperienceDate(9, 2022)]],
  position: ExperiencePosition.FullStack,
  workMode: ExperienceWorkMode.Remote,
  location: ExperienceLocation.Poland,
  website:
    "https://www.google.com/maps/place/Gabinet+stomatologiczny+Dentica/data=!4m7!3m6!1s0x4714262b8fa8b3f9:0x66f60f569709881b!8m2!3d49.6921907!4d19.2016225!16s%2Fg%2F11gdyhzbff!19sChIJ-bOojysmFEcRG4gJl1YP9mY?authuser=0&hl=en&rclk=1",
  isFreelance: true,
  skills: SKILLS,
  description: "This is a description",
  contentBlocks: [
    "Partnered with a dentist to design and refine a user-friendly patient management system.",
    "Developed and iterated on a desktop app for appointment scheduling, procedure tracking, and real-time updates.",
    "Integrated SMS API (via cloud functions) for automated patient notifications and dynamic schedule management.",
  ],
});
