<script lang="ts">
  import Section from "$common/section.svelte";
  import SkillBadge, { SkillBadeSize } from "$common/skill-badge.svelte";
  import { SkillCategory, type ISkill } from "@repo/content";

  interface IProps {
    skills: ISkill[];
  }

  const { skills }: IProps = $props();

  const subSections = $derived.by(() => {
    const tmp: Record<SkillCategory, ISkill[]> = {
      [SkillCategory.Lang]: [],
      [SkillCategory.Database]: [],
      [SkillCategory.Lib]: [],
      [SkillCategory.Tools]: [],
    };
    for (const skill of skills) {
      tmp[skill.category].push(skill);
    }
    return tmp;
  });
</script>

{#snippet section(title: string, category: SkillCategory)}
  <li>
    <p class="font-medium text-sec-h2 mb-1">{title}</p>
    <ul class="flex flex-wrap gap-skills">
      {#each subSections[category] as skill}
        <SkillBadge label={skill.label} size={SkillBadeSize.Sm} />
      {/each}
    </ul>
  </li>
{/snippet}

<Section title="Skills">
  <ul class="flex flex-wrap gap-2">
    {@render section("Programming Languages", SkillCategory.Lang)}
    {@render section("Databases", SkillCategory.Database)}
    {@render section("Frameworks & Libraries", SkillCategory.Lib)}
    {@render section("Tools & Platforms", SkillCategory.Tools)}
  </ul>
</Section>
