export const TITLE = "Maksymilian Kasperowicz";
export const DESCRIPTION =
	"Maksymilian Kasperowicz is a web developer from Poland that loves creating highly interactive applications, useful tools or just fun projects";

export const LANGUAGE = "English";
export const LOCALE = "en_US";
export const URL = "https://www.maxkasperowicz.com/";
export const COVER_IMG = "/cover.png";

export const GITHUB_URL = "https://github.com/yet3";
export const SELF_REPO_URL = `${GITHUB_URL}/personal-website`;
export const CONTACT_EMAIL = "kasperowicz.maksymilian@gmail.com";
export const CV_PDF_URL = "/cv.pdf";

export const MAIN_SECTION_CN = "main-section"

export enum SectionId {
	About = "about",
	Languages = "languages",
	Technologies = "technologies",
	Experience = "experience",
	Projects = "projects"
}

export const SECTIONS_TITLES: Record<SectionId, string> = {
	[SectionId.About]: "about",
	[SectionId.Languages]: "languages",
	[SectionId.Technologies]: "technologies",
	[SectionId.Experience]: "experience",
	[SectionId.Projects]: "projects"
};
