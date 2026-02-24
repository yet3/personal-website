<script lang="ts">
  import Section from "$common/section.svelte";
  import SkillBadge from "$common/skill-badge.svelte";
  import { SkillCategory, SKILLS, type ISkill } from "@repo/content";

  const skills = Object.values(SKILLS).filter((el) => (el as ISkill).showInCv);

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

{#snippet section(title: string, category: SkillCategory, idx: number)}
  <li>
    <p
      class="text-secondary animate-top-slide-in mb-1 font-medium"
      style="--delay: calc(var(--delay-tech) + {100 + idx * 50}ms)"
    >
      {title}
    </p>
    <ul class="animate-top-slide-in flex flex-wrap gap-2"

      style="--delay: calc(var(--delay-tech) + {150 + idx * 50}ms)"
    >
      {#each subSections[category] as sk}
        <SkillBadge label={sk.label} href={sk.href} />
      {/each}
    </ul>
  </li>
{/snippet}

<Section
  id="tech"
  ariaLabel="Some of the technologies I use"
  title="Tech"
  class="delay-tech-0"
>
  <ul class="grid gap-4 sm:grid-cols-2">
    {@render section("Programming Languages", SkillCategory.Lang, 0)}
    {@render section("Databases", SkillCategory.Database, 1)}
    {@render section("Frameworks & Libraries", SkillCategory.Lib, 2)}
    {@render section("Tools & Platforms", SkillCategory.Tools, 3)}
  </ul>
</Section>
