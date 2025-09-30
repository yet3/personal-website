<script>
	import { getExperiences } from "$ctx/experience-ctx";
	import CvExperience from "../cv-experience.svelte";
	import CvSection from "../cv-section.svelte";

	const EXPERIENCES = getExperiences();
</script>

<CvSection title="Experience">
	<ol class="flex flex-col gap-3">
		{#each EXPERIENCES as data}
			<CvExperience {data} />
		{/each}
	</ol>
</CvSection>
