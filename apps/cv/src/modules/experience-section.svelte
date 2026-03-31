<script lang="ts">
  import Section from "$common/section.svelte";
  import { formatExperienceDates, type IExperience } from "@repo/content";

  interface IProps {
    experience: IExperience[];
  }

  const { experience }: IProps = $props();
</script>

<Section title="Experience">
  <ul class="grid content-start gap-8">
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
          <span class="mr-1.5 ml-0.25">
            <!-- {#if exp.isFreelance} -->
            <!--   for -->
            <!-- {:else} -->
            <!--   at -->
            <!-- {/if} -->
            //
          </span>
          <span class="font-medium">[</span>
          <a href={exp.website} target="_blank" class="font-medium text-accent">
            {exp.at}
          </a>
          <span class="font-medium">]</span>
        </div>

        <ol class="text-content grid content-start gap-1">
          {#each exp.contentBlocks as block}
            <li class="content-block grid grid-cols-[auto_1fr] gap-1 ml-1.5">
              <span>-</span>
              <p>

              {block}
              </p>
            </li>
          {/each}
        </ol>
      </li>
    {/each}
  </ul>
</Section>
