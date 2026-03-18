<script lang="ts">
  import { formatExperienceDates, type IExperience } from "@repo/content";

  interface IProps {
    class?: string;
    dates: IExperience["dates"];
  }
  const { class: className, dates }: IProps = $props();
</script>

<code class={["text-secondary flex w-fit items-center font-medium", className]}>
  <ol class="grid content-start gap-0.5">
    {#each [...dates].sort((a, b) => a[0].getTime() - b[0].getTime()) as date, idx}
      <li class="inline-flex">
        <span>{"<"}</span>
        {formatExperienceDates(date[0], date[1])}
        <span>{">"}</span>
        {#if idx < dates.length - 1}
          <span class="mr-[1ch]">,</span>
        {/if}
      </li>
    {/each}
  </ol>
</code>
