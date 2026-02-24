<script lang="ts">
  import type { Snippet } from "svelte";
  import SectionTitle from "./section-title.svelte";

  interface Props {
    class?: string;

    id: string;
    ariaLabel: string;

    children: Snippet;

    title?: string;
  }

  const { id, title, class: className, ariaLabel, children }: Props = $props();
</script>

<section {id} class={className} aria-label={ariaLabel}>
  {#if title}
    <SectionTitle {title} />
  {/if}
  {@render children()}
</section>
