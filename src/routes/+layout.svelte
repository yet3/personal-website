<script lang="ts">
	import { setExperiences } from "$ctx/experience-ctx";
	import { setParticlesSettings } from "$ctx/particles-settings-ctx";
	import { setProjects } from "$ctx/projects-ctx";
	import { makeDefaultParitclesSettings } from "$modules/particles/make-default-paritcles-settings";
	import { COVER_IMG, DESCRIPTION, LANGUAGE, LOCALE, TITLE, URL } from "$utils/constants";
	import { watchElementsVisibility } from "$utils/elements-visibility.svelte";
	import "$styles/global.css";
	import type { IParticlesSettings } from "$types/particles.types";
	import type { LayoutProps } from "./$types";

	const { children, data }: LayoutProps = $props();

	const PARTICLES_KEY = "particles-settings";

	export const particlesSettings = $state<IParticlesSettings>(
		(() => {
			let settings: Record<string, unknown> = {};
			if (typeof window !== "undefined") {
				try {
					const str = localStorage.getItem(PARTICLES_KEY);
					if (str) {
						settings = JSON.parse(str);
					}
				} catch (e) {
					console.log(e);
				}
			}

			return { ...makeDefaultParitclesSettings(), ...settings };
		})()
	);

	$effect(() => {
		try {
			const json = JSON.stringify(particlesSettings);
			localStorage.setItem(PARTICLES_KEY, json);
		} catch (e) {
			console.log(e);
		}
	});

	setParticlesSettings(particlesSettings);
	setExperiences(data.experiences);
	setProjects(data.projects);
	watchElementsVisibility();
</script>

<svelte:head>
	<link
		rel="preload"
		href="/tamsyn-10x20.woff2"
		as="font"
		type="font/woff2"
		crossorigin="anonymous"
	/>

	<link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png" />
	<link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
	<link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
	<link rel="manifest" href="/site.webmanifest" />

	<title>{TITLE}</title>
	<meta name="title" content={TITLE} />
	<meta name="description" content={DESCRIPTION} />
	<meta name="robots" content="index, follow" />
	<meta name="language" content={LANGUAGE} />
	<meta name="image" content={COVER_IMG} />
	<!--  -->
	<meta property="og:site_name" content={TITLE} />
	<meta property="og:locale" content={LOCALE} />
	<meta property="og:type" content="website" />
	<meta property="og:title" content={TITLE} />
	<meta property="og:url" content={URL} />
	<meta property="og:image" content={COVER_IMG} />
	<!--  -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:title" content={TITLE} />
	<meta property="twitter:description" content={DESCRIPTION} />
	<meta property="twitter:image" content={COVER_IMG} />
</svelte:head>

{@render children?.()}
