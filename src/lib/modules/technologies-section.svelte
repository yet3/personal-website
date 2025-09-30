<script lang="ts">
	import { DELAY_LOCAL } from "$utils/delays";
	import { SKILLS, type ISkill, type ISkillKeys } from "$utils/skills";
	import PopIn from "$common/effects/pop-in.svelte";
	import Section from "$common/section.svelte";
	import SkillBadgeById from "$common/skill-badge-by-id.svelte";
	import { SectionId } from "$utils/constants";

	let isVisible = $state(false);
	const techList = Object.keys(SKILLS).filter((id) => {
    const skill = SKILLS[id as ISkillKeys]
    return (skill as ISkill)?.isCoreSkill
  });
</script>

<Section
	id={SectionId.Technologies}
	ariaLabel="Technologies I use"
	{isVisible}
	onVisible={() => (isVisible = true)}
>
	<ol class="flex flex-wrap gap-2">
		{#each techList as id, idx}
			<PopIn element="li" {isVisible} animDelay={[DELAY_LOCAL, 75, idx * 15]}>
				<SkillBadgeById {id} isIdxEven={idx % 2 === 0} />
			</PopIn>
		{/each}
	</ol>
</Section>
