<script lang="ts">
  import type { Snippet } from "svelte";

  interface IProps {
    title: string;
    children: Snippet;
    class?: string
  }
  const { class: className, title, children }: IProps = $props();
</script>

<section class={[className, "flex flex-col gap-2"]}>
  <h3 class="text-sec-h1 font-semibold">{title}</h3>
  {@render children()}
</section>
