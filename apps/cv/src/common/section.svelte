<script lang="ts">
  import type { Snippet } from "svelte";

  interface IProps {
    title: string;
    children: Snippet;
    class?: string;
  }
  const { class: className, title, children }: IProps = $props();
</script>

<section class={[className, "flex flex-col gap-1.25"]}>
  <h3 class="text-resume-heading font-semibold uppercase">{title}</h3>
  <hr class="text-secondary/50" />
  {@render children()}
</section>
