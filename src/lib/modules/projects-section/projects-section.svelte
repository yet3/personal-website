<script lang="ts">
	import { getProjects } from "$ctx/projects-ctx";
	import Section from "$common/section.svelte";
	import ProjectItem from "./project-item.svelte";
	import { SectionId } from "$utils/constants";

	let isVisible = $state(false);
	const projects = getProjects();
</script>

<Section
	id={SectionId.Projects}
	ariaLabel="My pet projects"
	{isVisible}
	onVisible={() => (isVisible = true)}
>
	<ol class="list-none grid gap-12" style="transform: translateX(0%);" aria-label="Pet projects">
		{#each projects as item}
			<ProjectItem data={item} />
		{/each}
	</ol>
</Section>
