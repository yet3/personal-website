<script lang="ts">
  import Section from "$common/section.svelte";
  import SkillBadge from "$common/skill-badge.svelte";

  const LANGS = ["Polish", "English"];
</script>

<Section title="Languages">
  <ul class="flex flex-wrap gap-skills">
    {#each LANGS as lang}
      <SkillBadge label={lang} />
    {/each}
  </ul>
</Section>
