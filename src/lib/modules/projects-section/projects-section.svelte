<script lang="ts">
	import { SectionId } from "$utils/constants";
	import Section from "$common/section.svelte";
	import { PROJECTS } from "../../../projects";
	import ProjectItem from "./project-item.svelte";

	const projects = Object.values(PROJECTS);
</script>

<Section id={SectionId.Projects} ariaLabel="My pet projects">
	<ol class="list-none grid gap-12" style="transform: translateX(0%);" aria-label="Pet projects">
		{#each projects as item}
			<ProjectItem data={item} />
		{/each}
	</ol>
</Section>
