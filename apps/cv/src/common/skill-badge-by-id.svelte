<script lang="ts">
  import { type ISkill, type ISkillKey, SKILLS } from "@repo/content";
  import SkillBadge, {
    type ISkillBadgeCommonProps,
  } from "./skill-badge.svelte";

  interface IProps extends ISkillBadgeCommonProps {
    id: string;
  }
  const { id, ...props }: IProps = $props();

  let skill: ISkill | null = $derived.by(() => {
    if (id && Object.hasOwn(SKILLS, id)) {
      return SKILLS[id as ISkillKey] || null;
    }
    return null;
  });
</script>

{#if skill}
  <SkillBadge {...props} {...skill} />
{/if}
