<script lang="ts">
  import {
    formatExperienceDates,
    type IExperience,
  } from "@repo/content"

  interface IProps {
    class?: string;
    dates: IExperience["dates"];
  }
  const { class: className, dates }: IProps = $props();
</script>

<code
  class={[
    "text-secondary flex w-fit items-start sm:items-center font-medium max-sm:flex-col",
    className,
  ]}
>
  [
  <ol class="flex max-sm:flex-col">
    {#each dates as date, idx}
      <li class="inline-flex max-sm:ml-2">
        {formatExperienceDates(date[0], date[1])}
        {#if idx < dates.length - 1}
          <span class="mr-[1ch]">,</span>
        {/if}
      </li>
    {/each}
  </ol>
  ]
</code>
