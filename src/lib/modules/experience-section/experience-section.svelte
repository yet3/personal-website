<script lang="ts">
	import Section from "$common/section.svelte";
	import { SectionId } from "$utils/constants";
	import { EXPERIENCES } from "../../../experiences";
	import ExperienceItem from "./experience-item.svelte";

	const experiences = Object.values(EXPERIENCES);
</script>

<Section id={SectionId.Experience} ariaLabel="My work experience">
	<ol class="list-none grid gap-2.5" style="transform: translateX(0%);">
		{#each experiences as item}
			<ExperienceItem data={item} />
		{/each}
	</ol>
</Section>
