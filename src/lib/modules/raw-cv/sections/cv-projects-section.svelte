<script>
	import { getProjects } from "$ctx/projects-ctx";
	import CvProject from "../cv-project.svelte";
	import CvSection from "../cv-section.svelte";

	const PROJECTS = getProjects().filter((p) => p.showInCv);
</script>

<CvSection title="Projects">
	<ol class="flex flex-col gap-y-2">
		{#each PROJECTS as data}
      <CvProject {data} />
		{/each}
	</ol>
</CvSection>
