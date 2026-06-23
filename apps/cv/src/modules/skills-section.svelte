<script lang="ts">
  import Section from "$common/section.svelte";
  import { CvSkillCategory, type ISkill } from "@repo/content";

  interface IProps {
    skills: ISkill[];
  }

  const { skills }: IProps = $props();

  const subSections = $derived.by(() => {
    const tmp: Record<CvSkillCategory, ISkill[]> = {
      [CvSkillCategory.Lang]: [],
      [CvSkillCategory.Core]: [],
      [CvSkillCategory.Exploring]: [],
      [CvSkillCategory.Other]: [],
    };
    for (const skill of skills) {
      if (skill.cvCategory) {
        tmp[skill.cvCategory].push(skill);
      }
    }
    return tmp;
  });
</script>

{#snippet section(title: string, category: CvSkillCategory)}
  <li class="text-resume-body flex">
    <p class="leading-[1.5]">
      <b>{title}: </b>
      <span>
        {subSections[category].map((el) => el.label).join(", ")}
      </span>
    </p>
  </li>
{/snippet}

<Section title="Skills">
  <ul class="flex flex-col gap-0.25">
    {@render section("Languages", CvSkillCategory.Lang)}
    {@render section("Core", CvSkillCategory.Core)}
    {@render section("Other", CvSkillCategory.Other)}
    {@render section("Exploring", CvSkillCategory.Exploring)}
  </ul>
</Section>
