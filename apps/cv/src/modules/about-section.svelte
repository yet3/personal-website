<script>
  import Section from "$common/section.svelte";
  import { SELF_DESCIRPTION } from "@repo/content";
</script>

<Section title="About me">
  <p class="text-content text-justify">
    {SELF_DESCIRPTION.SHORT}
  </p>
</Section>
