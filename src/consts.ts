export const GITHUB_URL = "https://github.com/yet3/";
export const PROJECT_REPO_URL = GITHUB_URL + "personal-website";
export const LINKEDIN_URL = "https://www.linkedin.com/in/maxkasperowicz";
export const NPM_URL = "https://www.npmjs.com/~yet3";

export const HERO = {
  BASE_DELAY: 0.25,
  get CORNERS_IN_DUR() {
    return 0.5;
  },

  get HELLO_DELAY() {
    return this.BASE_DELAY + 0.25;
  },
  HELLO_IN: 0.7,
  HELLO_ON: 1.5,
  HELLO_OUT: 0.5,

  get CONTENT_DELAY() {
    return this.HELLO_DELAY + this.HELLO_IN + this.HELLO_ON + 0.1;
  },
  CONTENT_IN: 0.8,
  CONTENT_STAGGER: 0.1,

  get LINKS_DELAY() {
    return this.CONTENT_DELAY + 0.5;
  },
  LINKS_STAGGER: 0.1,
};

export const WEBSITE_TITLE = "Maksymilian Kasperowicz";
export const WEBSITE_DESCRIPTION =
  "Maksymilian Kasperowicz is a web developer from Poland that enjoys creating applications that find use in the everyday lives of other people";
