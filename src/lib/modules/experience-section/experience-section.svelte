<script lang="ts">
	import { getExperiences } from "$ctx/experience-ctx";
	import Section from "$common/section.svelte";
	import ExperienceItem from "./experience-item.svelte";
	import { SectionId } from "$utils/constants";

	let isVisible = $state(false);
	const experiences = getExperiences();
</script>

<Section
	id={SectionId.Experience}
	ariaLabel="My work experience"
	{isVisible}
	onVisible={() => (isVisible = true)}
>
	<ol class="list-none grid gap-2.5" style="transform: translateX(0%);">
		{#each experiences as item}
			<ExperienceItem data={item} makeSectionVisible={() => (isVisible = true)} />
		{/each}
	</ol>
</Section>
