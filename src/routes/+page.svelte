<script lang="ts">
	import AboutSection from "$modules/about-section/about-section.svelte";
	import ExperienceSection from "$modules/experience-section/experience-section.svelte";
	import Footer from "$modules/footer/footer.svelte";
	import Header from "$modules/header/header.svelte";
	import LanguagesSection from "$modules/languages-section.svelte";
	import ProjectsSection from "$modules/projects-section/projects-section.svelte";
	import TechnologiesSection from "$modules/technologies-section.svelte";
	import { type Component, onMount } from "svelte";

	let Particles = $state<Component | null>(null);
	onMount(async () => {
		try {
			const comp = await import("$modules/particles/particles.svelte");
			Particles = comp.default;
		} catch (e) {
			console.log(e);
		}
	});
</script>

{#if Particles}
	<Particles />
{/if}

<div class="grid lg:grid-cols-[1.5fr_1fr] max-w-[1800px] mx-auto">
	<main
		class={[
			"mx-auto md:mx-0 md:pl-16 w-[calc(100%-2.5rem)] sm:w-[calc(100%-4rem)] 2xl:w-200 pt-24 grid grid-flow-row gap-12 pb-12",
			"max-lg:row-start-2"
		]}
	>
		<AboutSection />
		<div class="grid grid-flow-row gap-6">
			<LanguagesSection />
			<TechnologiesSection />
		</div>
		<ExperienceSection />
		<ProjectsSection />
	</main>
	<Header />

	{#snippet link(text: string, href: string)}
		<a {href} class="underline decoration-accent">{text}</a>
	{/snippet}

	<p class="relative text-sm sm:text-base text-center mb-12 mx-auto px-2 md:px-12">
		Made with {@render link("SvelteKit", "https://svelte.dev/docs/kit/introduction")}, Styled with
		{@render link("TailwindCSS", "https://tailwindcss.com/")}, Deployed on
		{@render link("Vercel", "https://vercel.com/")}, Font used
		{@render link("Tamsyn10x20", "http://www.fial.com/~scott/tamsyn-font/")}
	</p>
</div>
<Footer />
