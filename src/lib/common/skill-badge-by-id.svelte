<script lang="ts">
	import { type ISkill, type ISkillKeys, SKILLS } from "$utils/skills";
	import SkillBadge, { type ISkillBadeCommonProps } from "./skill-badge.svelte";

	interface IProps extends ISkillBadeCommonProps {
		id: string;
	}
	const { id, ...props }: IProps = $props();

	let skill: ISkill | null = $state(null);
	if (id && Object.hasOwn(SKILLS, id)) {
		skill = SKILLS[id as ISkillKeys] || null;
	}
</script>

{#if skill}
	<SkillBadge {...props} {...skill} />
{/if}
