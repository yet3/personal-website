<script>
	import { EXPERIENCES } from "../../../../experiences";
	import CvExperience from "../cv-experience.svelte";
	import CvSection from "../cv-section.svelte";

	const experiences = Object.values(EXPERIENCES)
</script>

<CvSection title="Experience">
	<ol class="flex flex-col gap-3">
		{#each experiences as data}
			<CvExperience {data} />
		{/each}
	</ol>
</CvSection>
