<script lang="ts">
  import type { ClassValue } from "svelte/elements";

  export interface ISkillBadeCommonProps {
    class?: ClassValue;
    onClick?: () => void;
  }

  interface IProps extends ISkillBadeCommonProps {
    label: string;
    href?: string;
  }

  const { label, class: className, href, onClick }: IProps = $props();

  const cn = $derived([
    className,
    "flex w-fit py-1 px-2 items-center bg-primary text-base",
  ]);
</script>

{#snippet item()}
  <span class="text-sm">{label}</span>
{/snippet}

{#if href}
  <a
    {href}
    onclick={onClick}
    rel="noopener noreferrer"
    target="_blank"
    class={cn}
    aria-label="Link to {label} (opens in a new tab)"
  >
    {@render item()}
  </a>
{:else if onClick}
  <button type="button" onclick={onClick} class={cn}>
    {@render item()}
  </button>
{:else}
  <div class={cn}>
    {@render item()}
  </div>
{/if}
