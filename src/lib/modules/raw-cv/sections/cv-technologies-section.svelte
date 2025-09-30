<script lang="ts">
	import type { ISkill } from "$utils/skills";
	import { SKILLS } from "$utils/skills";
	import CvSection from "../cv-section.svelte";
	import CvSkill from "../cv-skill.svelte";

	const techList = Object.values(SKILLS as Record<string, ISkill>)
		.filter(({ isCoreSkill }) => {
			return isCoreSkill;
		})
		// .sort((a, b) => a.label.length - b.label.length);
</script>

<CvSection title="Technologies">
	<ol class="flex flex-wrap gap-1.5">
		{#each techList as { label }}
			<CvSkill {label} />
		{/each}
	</ol>
</CvSection>
