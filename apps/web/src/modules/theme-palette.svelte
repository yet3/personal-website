<script lang="ts"></script>

{#snippet colors(rep: string, arr: string[])}
  <div class="flex flex-col items-center">
    <p class="mb-1 text-sm font-medium">{rep}</p>
    <ol class="grid content-start gap-4">
      {#each arr as cn}
        <li
          class={["border-primary size-8 border text-xs whitespace-pre", cn]}
        ></li>
      {/each}
    </ol>
  </div>
{/snippet}

<aside
  aria-hidden="true"
  class="border-primary bg-base fixed top-4 right-8 z-999 grid grid-cols-2 gap-4 border p-4 shadow-sm"
>
  {@render colors("bg-base", ["bg-base"])}
  {@render colors("bg-primary", [
    "bg-primary",
    "bg-primary-200",
    "bg-primary-300",
  ])}
  {@render colors("bg-secondary", [
    "bg-secondary",
    "bg-secondary-200",
    "bg-secondary-300",
    "bg-secondary-400",
    "bg-secondary-500",
  ])}
  {@render colors("bg-accent", ["bg-accent"])}
</aside>
