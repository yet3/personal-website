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
  website:
    "https://www.owg.pl/ceidg/streber_soft_grzegorz_florek_9,74,817199,8171996068",
  skills: SKILLS,
  description:
    "Full-stack development of ERP systems and business apps across manufacturing and healthcare, spanning web, desktop, and mobile platforms.",
  contentBlocks: [
    "Built ERP systems for plastic recycling and metal production plants, partnering with a senior developer who covered DevOps and product.",
    "Maintained web, desktop, and mobile apps for production, quality, and shift management, including PDF and XLSX report generation.",
    "Extended ERP functionality for a metal manufacturing plant, focusing on product ordering and user-driven feature improvements.",
    "Developed a responsive scheduling web app for a doctor's practice, with a flexible schedule manager, PDF generation, and automated email notifications.",
  ],
});
