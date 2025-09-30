export interface ISkill {
	label: string;
	iconSrc?: string;
	href?: string;

	isCoreSkill?: boolean;
}

const iconSrc = (str: string) => {
	return `/tech-icons/${str}.svg`;
};

export const SKILLS = {
	// Frontend Languages & Styling
	javascript: {
		label: "JavaScript",
		iconSrc: iconSrc("javascript"),
		href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
		isCoreSkill: true
	},
	typescript: {
		label: "TypeScript",
		iconSrc: iconSrc("typescript"),
		href: "https://www.typescriptlang.org/",
		isCoreSkill: true
	},
	css: {
		label: "CSS",
		iconSrc: iconSrc("css"),
		href: "https://developer.mozilla.org/en-US/docs/Web/CSS",
		isCoreSkill: true
	},
	scss: {
		label: "SCSS",
		iconSrc: iconSrc("scss"),
		href: "https://sass-lang.com/",
		isCoreSkill: true
	},
	html: {
		label: "HTML",
		iconSrc: iconSrc("html"),
		href: "https://developer.mozilla.org/en-US/docs/Web/HTML",
		isCoreSkill: true
	},
	styledcomponents: {
		label: "Styled Components",
		iconSrc: iconSrc("styledcomponents"),
		href: "https://styled-components.com/",
		isCoreSkill: true
	},
	tailwindcss: {
		label: "TailwindCSS",
		iconSrc: iconSrc("tailwindcss"),
		href: "https://tailwindcss.com/",
		isCoreSkill: true
	},

	// Backend Languages
	go: {
		label: "Go",
		iconSrc: iconSrc("go"),
		href: "https://go.dev/",
		isCoreSkill: true
	},

	// Frontend Frameworks & Libraries
	react: {
		label: "React",
		iconSrc: iconSrc("react"),
		href: "https://react.dev/",
		isCoreSkill: true
	},
	reactnative: {
		label: "React Native",
		iconSrc: iconSrc("react"),
		href: "https://reactnative.dev/",
		isCoreSkill: true
	},
	expo: {
		label: "Expo",
		iconSrc: iconSrc("expo"),
		href: "https://expo.dev/",
		isCoreSkill: true
	},
	electron: {
		label: "Electron",
		iconSrc: iconSrc("electron"),
		href: "https://www.electronjs.org/",
		isCoreSkill: true
	},
	solidjs: {
		label: "Solidjs",
		iconSrc: iconSrc("solidjs"),
		href: "https://www.solidjs.com/",
		isCoreSkill: true
	},
	svelte: {
		label: "Svelte",
		iconSrc: iconSrc("svelte"),
		href: "https://svelte.dev/",
		isCoreSkill: true
	},
	astro: {
		label: "Astro",
		iconSrc: iconSrc("astro"),
		href: "https://astro.build/",
		isCoreSkill: true
	},
	nextjs: {
		label: "Next.js",
		iconSrc: iconSrc("nextjs"),
		href: "https://nextjs.org/",
		isCoreSkill: true
	},

	// Testing & Automation
	vitest: {
		label: "Vitest",
		iconSrc: iconSrc("vitest"),
		href: "https://vitest.dev/",
		isCoreSkill: true
	},
	puppeteer: {
		label: "Puppeteer",
		iconSrc: iconSrc("puppeteer"),
		href: "https://pptr.dev/",
		isCoreSkill: true
	},

	// Backend Frameworks & Runtimes
	nodejs: {
		label: "Node.js",
		iconSrc: iconSrc("nodejs"),
		href: "https://nodejs.org/en",
		isCoreSkill: true
	},
	express: {
		label: "Express",
		iconSrc: iconSrc("express"),
		href: "https://expressjs.com/",
		isCoreSkill: true
	},

	// Databases
	postgresql: {
		label: "PostgreSQL",
		iconSrc: iconSrc("postgresql"),
		href: "https://www.postgresql.org/",
		isCoreSkill: true
	},
	sqlite: {
		label: "SQLite",
		iconSrc: iconSrc("sqlite"),
		href: "https://www.sqlite.org/",
		isCoreSkill: true
	},
	mongodb: {
		label: "MongoDB",
		iconSrc: iconSrc("mongodb"),
		href: "https://www.mongodb.com/",
		isCoreSkill: true
	},
	vite: {
		label: "Vite",
		iconSrc: iconSrc("vite"),
		href: "https://vite.dev/",
		isCoreSkill: true
	},

	// Backend as a Service (BaaS)
	supabase: {
		label: "Supabase",
		iconSrc: iconSrc("supabase"),
		href: "https://supabase.com/",
		isCoreSkill: true
	},
	firebase: {
		label: "Firebase",
		iconSrc: iconSrc("firebase"),
		href: "https://firebase.google.com/",
		isCoreSkill: true
	},

	// Build Tools & Bundlers
	webpack: {
		label: "Webpack",
		iconSrc: iconSrc("webpack"),
		href: "https://webpack.js.org/",
		isCoreSkill: true
	},
	rsbuild: {
		label: "Rsbuild",
		iconSrc: iconSrc("rsbuild"),
		href: "https://rsbuild.dev/",
	},

	// Package Managers
	pnpm: {
		label: "Pnpm",
		iconSrc: iconSrc("pnpm"),
		href: "https://pnpm.io/",
	},

	// Linters & Formatters
	biome: {
		label: "Biome",
		iconSrc: iconSrc("biome"),
		href: "https://biomejs.dev/",
	},
	eslint: {
		label: "Eslint",
		iconSrc: iconSrc("eslint"),
		href: "https://eslint.org/"
	},
	prettier: {
		label: "Prettier",
		iconSrc: iconSrc("prettier"),
		href: "https://prettier.io/"
	},

	// Version Control
	git: {
		label: "Git",
		iconSrc: iconSrc("git"),
		href: "https://git-scm.com/"
	},

	// Design Tools
	figma: {
		label: "Figma",
		iconSrc: iconSrc("figma"),
		href: "https://www.figma.com/"
	},

	// State Management
	zustand: {
		label: "Zustand",
		iconSrc: iconSrc("zustand"),
		href: "https://zustand-demo.pmnd.rs/",
		isCoreSkill: true
	},

	// APIs & Services
	openai: {
		label: "OpenAI",
		iconSrc: iconSrc("openai"),
		href: "https://openai.com/"
	},
	mixpanel: {
		label: "Mixpanel",
		iconSrc: iconSrc("mixpanel"),
		href: "https://mixpanel.com/"
	},
	monday: {
		label: "Monday",
		iconSrc: iconSrc("monday"),
		href: "https://monday.com/"
	},
	//

	turborepo: {
		label: "Turborepo",
		iconSrc: iconSrc("turborepo"),
		href: "https://turborepo.com/",
	},
	svgo: {
		label: "SVGO",
		iconSrc: iconSrc("svgo"),
		href: "https://github.com/svg/svgo"
	},
	raylib: {
		label: "Raylib",
		iconSrc: iconSrc("raylib"),
		href: "https://www.raylib.com/"
	},
	raygui: {
		label: "RayGUI",
		iconSrc: iconSrc("raygui"),
		href: "https://github.com/raysan5/raygui"
	},
	serwersms: {
		label: "SerwerSMS",
		iconSrc: iconSrc("serwersms"),
		href: "https://serwersms.pl/"
	}
} as const satisfies Record<string, ISkill>;

export type ISkillKeys = keyof typeof SKILLS;
