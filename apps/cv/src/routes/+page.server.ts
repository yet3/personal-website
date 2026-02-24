import { PROJECTS, type IProject } from "@repo/content/projects";
import { EXPERIENCE, SKILLS, type ISkill } from "@repo/content";
import type { PageLoad } from "./$types";

export const load: PageLoad = async () => {
  return {
    experience: Object.values(EXPERIENCE),
    skills: Object.values(SKILLS).filter((el) => (el as ISkill).showInCv),
    projects: Object.values(PROJECTS).filter((el) => (el as IProject).showInCv),
  };
};
