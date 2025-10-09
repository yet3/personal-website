<script lang="ts">
	import Meta from "$common/meta.svelte";
	import CvHeader from "$modules/raw-cv/cv-header.svelte";
	import CvLinks from "$modules/raw-cv/cv-links.svelte";
	import CvAboutSection from "$modules/raw-cv/sections/cv-about-section.svelte";
	import CvExperienceSection from "$modules/raw-cv/sections/cv-experience-section.svelte";
	import CvLanguagesSection from "$modules/raw-cv/sections/cv-languages-section.svelte";
	import CvProjectsSection from "$modules/raw-cv/sections/cv-projects-section.svelte";
	import CvTechnologiesSection from "$modules/raw-cv/sections/cv-technologies-section.svelte";

	const TITLE = `CV | Maksymilian Kasperowicz`;
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link
		href="https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100..900;1,100..900&display=swap"
		rel="stylesheet"
	/>

	<title>{TITLE}</title>
	<Meta name="title" content={TITLE} />
</svelte:head>

<CvHeader />
<CvLinks />
<div class="flex flex-1 gap-x-[var(--cv-columns-gap)]">
	<div class="flex flex-col flex-[1.34] gap-y-[var(--cv-sections-gap)]">
		<CvAboutSection />
		<CvExperienceSection />
	</div>
	<div class="flex flex-col flex-1 gap-y-[var(--cv-sections-gap)]">
		<CvLanguagesSection />
		<CvTechnologiesSection />
		<CvProjectsSection />
	</div>
</div>

<style>
	:global {
		:root {
			--cv-columns-gap: 20px;
			--cv-sections-gap: 14px;
			--cv-skills-gap: 8px;
		}

		html {
			font-family: "Noto Sans", sans-serif !important;
			/* zoom: 0.75; */
		}

		html,
		body {
			background-color: black !important;
		}

		body {
			width: 21cm;
			height: 29.7cm;
			padding: 16px 24px 0px;
			background-color: white !important;
		}
	}
</style>
