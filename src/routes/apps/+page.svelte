<script lang="ts">
	import { PROJECTS } from "../../projects";
	import HoverZoomLetters from "$common/effects/hover-zoom-letters.svelte";
	import Meta from "$common/meta.svelte";
	import Links from "$modules/header/links.svelte";
	import ProjectItemPreview from "$modules/projects-section/project-item-preview.svelte";
	import ProjectItemCard from "$modules/projects-section/project-item-card.svelte";
	import Footer from "$modules/footer/footer.svelte";

	const TITLE = `Apps | Maksymilian Kasperowicz`;
	const projects = Object.values(PROJECTS).filter((p) => p.showInFooter);
</script>

<svelte:head>
	<title>{TITLE}</title>
	<Meta name="title" content={TITLE} />
</svelte:head>

<div class="flex max-md:flex-col relative z-1 pb-4 md:pb-24 flex-1">
	<main
		class="w-full flex flex-col px-4 sm:px-8 md:pl-16 md:pr-6 pt-8 pb-12 md:pb-32 max-w-[1500px] min-h-screen mx-auto"
	>
		<a
			href="/"
			rel="noopener noreferrer"
			class="mb-8 text-lg inline-flex hover:scale-word ease-bubble-200 hover:-translate-y-word transition-transform w-fit"
			>HOME</a
		>
		<h1 class="font-medium text-2xl w-fit origin-left mb-6">
			<HoverZoomLetters text="#" class="text-accent -mr-2.5" />
			<HoverZoomLetters text="apps" class="transition-transform" />
		</h1>

		<ol
			class="list-none grid gap-y-8 xs:gap-y-12 sm:gap-y-0 xl:gap-y-52 gap-x-12 xl:grid-cols-2 lg:px-32 xl:px-0"
			aria-label="My apps"
		>
			{#each projects as data}
				<li class="relative">
					<ProjectItemPreview {data} class="xl:w-full!" />
					<ProjectItemCard
						{data}
						overwriteClass="z-10 xl:absolute -translate-y-2 sm:-translate-y-12 xl:-translate-y-32"
					/>
				</li>
			{/each}
		</ol>
	</main>

	<div class="mx-auto md:h-screen md:sticky top-0 flex items-end pb-4 pr-4">
		<Links particlesOffsetX={-110} class="md:flex-col md:space-x-0 md:space-y-2 h-fit" />
	</div>
</div>

<Footer />
