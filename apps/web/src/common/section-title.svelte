<script lang="ts">
  interface Props {
    title: string;
    class?: string;
  }

  const { title, class: className }: Props = $props();
</script>

<h3
  data-text={`:${title}`}
  class={["animate-text-glitch-in mb-3 text-2xl font-semibold", className]}
>
  :{title}
</h3>
