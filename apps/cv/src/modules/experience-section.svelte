<script lang="ts">
  import Section from "$common/section.svelte";
  import { formatExperienceDates, type IExperience } from "@repo/content";

  interface IProps {
    experience: IExperience[];
  }

  const { experience }: IProps = $props();
</script>

<Section title="Experience">
  <ul class="grid content-start gap-4">
    {#each [...experience].reverse() as exp}
      <li>
        <ol class="text-sec-h3 text-secondary grid content-start gap-1 mb-1">
          {#each exp.dates as date, idx}
            <li class="inline-flex">
              {formatExperienceDates(date[0], date[1])}
              {#if idx < exp.dates.length - 1}
                <span>,</span>
              {/if}
            </li>
          {/each}
        </ol>
        <div class="flex items-center text-sec-h2 font-medium mb-2">
          <span class="mr-1">
            {exp.position}
          </span>
          <span class="mr-1">
            {#if exp.isFreelance}
              for
            {:else}
              at
            {/if}
          </span>
          <a href={exp.website} target="_blank" class="font-semibold">
            {exp.at}
          </a>
        </div>

        <ol class="text-content grid content-start gap-1">
          {#each exp.contentBlocks as block}
            <li class="content-block">{block}</li>
          {/each}
        </ol>
      </li>
    {/each}
  </ul>
</Section>

<style>
  .content-block {
    --uno: "ml-4.5 relative";
    &::before {
      content: "";
      --uno: "absolute right-full mr-1.5 top-2 size-1.5 bg-secondary-300 rounded-full";
    }
  }
</style>
