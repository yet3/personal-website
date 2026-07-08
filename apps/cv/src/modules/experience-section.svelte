<script lang="ts">
  import Section from "$common/section.svelte";
  import { formatExperienceDates, type IExperience } from "@repo/content";

  interface IProps {
    experience: IExperience[];
  }

  const { experience }: IProps = $props();
</script>

<Section title="Experience">
  <ul class="grid content-start gap-3">
    {#each [...experience].reverse() as exp}
      <li>
        <div class="flex items-center mb-1">
          <h3 class="flex items-center text-resume-title">
            <span class="font-semibold">
              {exp.position}
            </span>
            <span class="whitespace-pre">{" - "}</span>
            <span class="italic">
              {exp.at}
            </span>
          </h3>
          <ol class="text-resume-meta text-secondary flex items-center ml-auto text-right">
            {#each exp.dates as date, idx}
              <li class="inline-flex">
                {formatExperienceDates(date[0], date[1])}
                {#if idx < exp.dates.length - 1}
                  <span class="whitespace-pre">{" & "}</span>
                {/if}
              </li>
            {/each}
          </ol>
        </div>

        <ol
          class="text-resume-body grid content-start gap-1 list-disc marker:text-secondary pl-4"
        >
          {#each exp.contentBlocks as block}
            <li>
              {block}
            </li>
          {/each}
        </ol>
      </li>
    {/each}
  </ul>
</Section>
