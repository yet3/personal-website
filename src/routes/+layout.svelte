<script lang="ts">
	import { setExperiences } from "$ctx/experience-ctx";
	import { setParticlesSettings } from "$ctx/particles-settings-ctx";
	import { setProjects } from "$ctx/projects-ctx";
	import { makeDefaultParitclesSettings } from "$modules/particles/make-default-paritcles-settings";
	import { COVER_IMG, DESCRIPTION, LANGUAGE, LOCALE, TITLE, URL } from "$utils/constants";
	import { watchElementsVisibility } from "$utils/elements-visibility.svelte";
	import "$styles/global.css";
	import Meta from "$common/meta.svelte";
	import { onMount } from "svelte";
	import type { IParticlesSettings } from "$types/particles.types";
	import type { LayoutProps } from "./$types";
	import { APP_DATA } from "$lib/app-data.svelte";

	const { children }: LayoutProps = $props();

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

  onMount(() => {
    window.APP_DATA = APP_DATA;
    console.log(APP_DATA)
  })

	$effect(() => {
		try {
			const json = JSON.stringify(particlesSettings);
			localStorage.setItem(PARTICLES_KEY, json);
		} catch (e) {
			console.log(e);
		}
	});

	setParticlesSettings(particlesSettings);
	setExperiences(APP_DATA.experiences);
	setProjects(APP_DATA.projects);
	watchElementsVisibility();
</script>

<svelte:head>
	<link
		rel="preload"
		href="/fonts/tamsyn-10x20.woff2"
		as="font"
		type="font/woff2"
		crossorigin="anonymous"
	/>

	<link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png" />
	<link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
	<link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
	<link rel="manifest" href="/site.webmanifest" />

	<title>{TITLE}</title>
	<Meta name="title" content={TITLE} />
	<Meta name="description" content={DESCRIPTION} />
	<Meta name="robots" content="index, follow" />
	<Meta name="language" content={LANGUAGE} />
	<Meta name="image" content={COVER_IMG} />
	<!--  -->
	<Meta name="og:site_name" content={TITLE} />
	<Meta name="og:locale" content={LOCALE} />
	<Meta name="og:type" content="website" />
	<Meta name="og:title" content={TITLE} />
	<Meta name="og:url" content={URL} />
	<Meta name="og:image" content={COVER_IMG} />
	<!--  -->
	<Meta name="og:image" content={COVER_IMG} />
	<Meta name="twitter:card" content="summary_large_image" />
	<Meta name="twitter:title" content={TITLE} />
	<Meta name="twitter:description" content={DESCRIPTION} />
	<Meta name="twitter:image" content={COVER_IMG} />
</svelte:head>

{@render children?.()}
