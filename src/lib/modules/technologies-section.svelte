<script lang="ts">
	import Section from "$common/section.svelte";
	import SkillBadgeById from "$common/skill-badge-by-id.svelte";
	import { SectionId } from "$utils/constants";
	import { type ISkill, type ISkillKey, SKILLS } from "$utils/skills";

	const techList = Object.keys(SKILLS).filter((id) => {
		const skill = SKILLS[id as ISkillKey];
		return (skill as ISkill)?.isCoreSkill;
	});
</script>

<Section id={SectionId.Technologies} ariaLabel="Technologies I use">
	<ol class="flex flex-wrap gap-2">
		{#each techList as id, idx}
			<li>
				<SkillBadgeById {id} isIdxEven={idx % 2 === 0} />
			</li>
		{/each}
	</ol>
</Section>
