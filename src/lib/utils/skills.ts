export interface ISkill {
	label: string;
	iconSrc?: string;
	href?: string;

	isCoreSkill?: boolean;
}

const iconSrc = (str: string) => {
	return `/tech-icons/${str}.svg`;
};

export const SKILLS = Object.freeze({
	// Frontend Languages & Styling
	JavaScript: {
		label: "JavaScript",
		iconSrc: iconSrc("javascript"),
		href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
		isCoreSkill: true,
	},
	TypesSript: {
		label: "TypeScript",
		iconSrc: iconSrc("typescript"),
		href: "https://www.typescriptlang.org/",
		isCoreSkill: true,
	},
	Css: {
		label: "CSS",
		iconSrc: iconSrc("css"),
		href: "https://developer.mozilla.org/en-US/docs/Web/CSS",
		isCoreSkill: true,
	},
	Scss: {
		label: "SCSS",
		iconSrc: iconSrc("scss"),
		href: "https://sass-lang.com/",
		isCoreSkill: true,
	},
	Html: {
		label: "HTML",
		iconSrc: iconSrc("html"),
		href: "https://developer.mozilla.org/en-US/docs/Web/HTML",
		isCoreSkill: true,
	},
	StyledComponents: {
		label: "Styled Components",
		iconSrc: iconSrc("styledcomponents"),
		href: "https://styled-components.com/",
		isCoreSkill: true,
	},
	TailwindCss: {
		label: "TailwindCSS",
		iconSrc: iconSrc("tailwindcss"),
		href: "https://tailwindcss.com/",
		isCoreSkill: true,
	},
	UnoCss: {
		label: "UnoCSS",
		iconSrc: iconSrc("unocss"),
		href: "https://unocss.dev/",
		isCoreSkill: true,
	},

	// Backend Languages
	Go: {
		label: "Go",
		iconSrc: iconSrc("go"),
		href: "https://go.dev/",
		isCoreSkill: true,
	},

	// Frontend Frameworks & Libraries
	React: {
		label: "React",
		iconSrc: iconSrc("react"),
		href: "https://react.dev/",
		isCoreSkill: true,
	},
	ReactNative: {
		label: "React Native",
		iconSrc: iconSrc("react"),
		href: "https://reactnative.dev/",
		isCoreSkill: true,
	},
	Expo: {
		label: "Expo",
		iconSrc: iconSrc("expo"),
		href: "https://expo.dev/",
		isCoreSkill: true,
	},
	Electron: {
		label: "Electron",
		iconSrc: iconSrc("electron"),
		href: "https://www.electronjs.org/",
		isCoreSkill: true,
	},
	Solidjs: {
		label: "Solidjs",
		iconSrc: iconSrc("solidjs"),
		href: "https://www.solidjs.com/",
		isCoreSkill: true,
	},
	Svelte: {
		label: "Svelte",
		iconSrc: iconSrc("svelte"),
		href: "https://svelte.dev/",
		isCoreSkill: true,
	},
	Astro: {
		label: "Astro",
		iconSrc: iconSrc("astro"),
		href: "https://astro.build/",
		isCoreSkill: true,
	},
	Nextjs: {
		label: "Next.js",
		iconSrc: iconSrc("nextjs"),
		href: "https://nextjs.org/",
		isCoreSkill: true,
	},
	SolidStart: {
		label: "SolidStart",
		iconSrc: iconSrc("solidjs"),
		href: "https://start.solidjs.com/",
		isCoreSkill: true,
	},

	// Testing & Automation
	Vitest: {
		label: "Vitest",
		iconSrc: iconSrc("vitest"),
		href: "https://vitest.dev/",
		isCoreSkill: true,
	},
	Puppeteer: {
		label: "Puppeteer",
		iconSrc: iconSrc("puppeteer"),
		href: "https://pptr.dev/",
		isCoreSkill: true,
	},

	// Backend Frameworks & Runtimes
	Nodejs: {
		label: "Node.js",
		iconSrc: iconSrc("nodejs"),
		href: "https://nodejs.org/en",
		isCoreSkill: true,
	},
	Express: {
		label: "Express",
		iconSrc: iconSrc("express"),
		href: "https://expressjs.com/",
		isCoreSkill: true,
	},

	// Databases
	PostgreSql: {
		label: "PostgreSQL",
		iconSrc: iconSrc("postgresql"),
		href: "https://www.postgresql.org/",
		isCoreSkill: true,
	},
	Sqlite: {
		label: "SQLite",
		iconSrc: iconSrc("sqlite"),
		href: "https://www.sqlite.org/",
		isCoreSkill: true,
	},
	Mongodb: {
		label: "MongoDB",
		iconSrc: iconSrc("mongodb"),
		href: "https://www.mongodb.com/",
		isCoreSkill: true,
	},
	Vite: {
		label: "Vite",
		iconSrc: iconSrc("vite"),
		href: "https://vite.dev/",
		isCoreSkill: true,
	},

	// Backend as a Service (BaaS)
	Supabase: {
		label: "Supabase",
		iconSrc: iconSrc("supabase"),
		href: "https://supabase.com/",
		isCoreSkill: true,
	},
	Firebase: {
		label: "Firebase",
		iconSrc: iconSrc("firebase"),
		href: "https://firebase.google.com/",
		isCoreSkill: true,
	},

	// Build Tools & Bundlers
	Webpack: {
		label: "Webpack",
		iconSrc: iconSrc("webpack"),
		href: "https://webpack.js.org/",
		isCoreSkill: true,
	},
	Rsbuild: {
		label: "Rsbuild",
		iconSrc: iconSrc("rsbuild"),
		href: "https://rsbuild.dev/",
	},

	// Package Managers
	Pnpm: {
		label: "Pnpm",
		iconSrc: iconSrc("pnpm"),
		href: "https://pnpm.io/",
	},

	// Linters & Formatters
	Biome: {
		label: "Biome",
		iconSrc: iconSrc("biome"),
		href: "https://biomejs.dev/",
	},
	Eslint: {
		label: "Eslint",
		iconSrc: iconSrc("eslint"),
		href: "https://eslint.org/",
	},
	Prettier: {
		label: "Prettier",
		iconSrc: iconSrc("prettier"),
		href: "https://prettier.io/",
	},

	// Version Control
	Git: {
		label: "Git",
		iconSrc: iconSrc("git"),
		href: "https://git-scm.com/",
	},

	// Design Tools
	Figma: {
		label: "Figma",
		iconSrc: iconSrc("figma"),
		href: "https://www.figma.com/",
	},

	// State Management
	Zustand: {
		label: "Zustand",
		iconSrc: iconSrc("zustand"),
		href: "https://zustand-demo.pmnd.rs/",
		isCoreSkill: true,
	},

	// APIs & Services
	Openai: {
		label: "OpenAI",
		iconSrc: iconSrc("openai"),
		href: "https://openai.com/",
	},
	Mixpanel: {
		label: "Mixpanel",
		iconSrc: iconSrc("mixpanel"),
		href: "https://mixpanel.com/",
	},
	Monday: {
		label: "Monday",
		iconSrc: iconSrc("monday"),
		href: "https://monday.com/",
	},
	ClickUp: {
		label: "ClickUp",
		iconSrc: iconSrc("clickup"),
		href: "https://clickup.com/",
	},
	//

	Turborepo: {
		label: "Turborepo",
		iconSrc: iconSrc("turborepo"),
		href: "https://turborepo.com/",
	},
	Svgo: {
		label: "SVGO",
		iconSrc: iconSrc("svgo"),
		href: "https://github.com/svg/svgo",
	},
	Raylib: {
		label: "Raylib",
		iconSrc: iconSrc("raylib"),
		href: "https://www.raylib.com/",
	},
	Raygui: {
		label: "RayGUI",
		iconSrc: iconSrc("raygui"),
		href: "https://github.com/raysan5/raygui",
	},
	SerwerSms: {
		label: "SerwerSMS",
		iconSrc: iconSrc("serwersms"),
		href: "https://serwersms.pl/",
	},
} satisfies Record<string, ISkill>);

export type ISkillKey = keyof typeof SKILLS;

export const Skill = Object.freeze(
	(() => {
		const tmp: Record<string, string> = {};
		for (const key of Object.keys(SKILLS)) {
			tmp[key] = key;
		}
		return tmp as Record<ISkillKey, ISkillKey>;
	})(),
);
