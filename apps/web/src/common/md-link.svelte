<script lang="ts">
  interface IProps {
    href: string;
    content: string;
    icon?: any;
  }

  const { href, icon: Icon, content }: IProps = $props();

  const rel = $derived.by(() => {
    const tmp = ["noreferrer", "noopener"];
    if (href?.startsWith("http")) {
      tmp.push("external");
    }
    return tmp.join(" ");
  });
</script>

<a {href} {rel} target="_blank" class="text-secondary flex items-center">
  {#if Icon}
    <Icon class="mr-1 size-5" />
  {/if}
  [
  <span class="text-accent">{content}</span>
  ]({href})
</a>
