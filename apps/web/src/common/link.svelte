<script lang="ts">
  interface IProps {
    class?: string;
    content: string;
    href: string;
  }

  const { href, content, class: className }: IProps = $props();

  const rel = $derived.by(() => {
    const tmp = ["noreferrer", "noopener"];
    if (href?.startsWith("http")) {
      tmp.push("external");
    }
    return tmp.join(" ");
  });

  const commonDecorationCN =
    "size-2.2 border-primary absolute transition-all group-hover/link:size-3 group-hover/link:border-accent";
</script>

<a
  class={[
    "py-0.3 px-1.2 group/link animate-text-glitch-hover delay-0 relative",
    className,
  ]}
  {href}
  {rel}
  target="_blank"
  data-text={content}
>
  <div
    class={[commonDecorationCN, "top-0 right-0 border-t-2 border-r-2"]}
  ></div>
  {content}
  <div
    class={[commonDecorationCN, "bottom-0 left-0 border-b-2 border-l-2"]}
  ></div>
</a>
