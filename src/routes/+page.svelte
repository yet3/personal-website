<script lang="ts">
	import AboutSection from "$modules/about-section/about-section.svelte";
	import ExperienceSection from "$modules/experience-section/experience-section.svelte";
	import Footer from "$modules/footer/footer.svelte";
	import Header from "$modules/header/header.svelte";
	import LanguagesSection from "$modules/languages-section.svelte";
	import MadeWidth from "$modules/made-width.svelte";
	import ProjectsSection from "$modules/projects-section/projects-section.svelte";
	import TechnologiesSection from "$modules/technologies-section.svelte";

</script>


<div class="grid lg:grid-cols-[1.55fr_1fr] max-w-[1800px] mx-auto relative z-1 pb-16 lg:pb-32">
	<main
		class={[
			"mx-auto md:mx-0 md:pl-16 w-[calc(100%-2.5rem)] sm:w-[calc(100%-4rem)] 2xl:w-200 pt-24 grid grid-flow-row gap-12",
			"max-lg:row-start-2"
		]}
	>
		<AboutSection />
		<LanguagesSection />
		<TechnologiesSection />
		<ExperienceSection />
		<ProjectsSection />
	</main>
	<Header />
</div>

<MadeWidth />
<Footer />
