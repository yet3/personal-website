<script lang="ts">
	import Section from "$common/section.svelte";
	import { GITHUB_URL, SectionId } from "$utils/constants";
	import { PROJECTS } from "../../../projects";
	import ProjectItem from "./project-item.svelte";

	const projects = Object.values(PROJECTS);
</script>

<Section id={SectionId.Projects} ariaLabel="My pet projects" class="flex flex-col">
	<ol class="list-none grid gap-12" style="transform: translateX(0%);" aria-label="Pet projects">
		{#each projects as item}
			<ProjectItem data={item} />
		{/each}
	</ol>
	<a
		class="inline-flex hover:scale-word ease-bubble-200 hover:-translate-word transition-transform whitespace-pre mx-auto mt-10"
		href="{GITHUB_URL}?tab=repositories"
		rel="external noopener noreferrer"
		target="_blank"
		>Find more on <span
			class="inline-flex underline decoration-accent"
			> github</span
		></a
	>
</Section>
