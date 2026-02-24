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
  dates: [[makeExperienceDate(6, 2021), makeExperienceDate(5, 2022)]],
  position: ExperiencePosition.FullStack,
  workMode: ExperienceWorkMode.Remote,
  location: ExperienceLocation.Poland,
  website: "https://www.owg.pl/ceidg/streber_soft_grzegorz_florek_9,74,817199,8171996068",
  skills: SKILLS,
  description: "This is a description",
  contentBlocks: [
    "Collaborated with senior developers/dev-ops/product managers on ERP systems for manufacturing plants (plastic recycling and metal production).",
    "Developed and maintained web, desktop, and mobile apps for production, quality, and shift management, including PDF/XLSX report generation.",
    "Extended ERP functionality for a metal manufacturing plant, focusing on product ordering and user-driven feature improvements.",
    "Built a responsive appointment scheduling web app for a doctor, featuring a flexible schedule manager, PDF generation, and automated email notifications.",
  ],
});
