<script>
	import { PROJECTS } from "../../../../projects";
	import CvProject from "../cv-project.svelte";
	import CvSection from "../cv-section.svelte";

	const projects = Object.values(PROJECTS).filter(p => p.showInCv);
</script>

<CvSection title="Projects">
	<ol class="flex flex-col gap-y-2">
		{#each projects as data}
			<CvProject {data} />
		{/each}
	</ol>
</CvSection>
