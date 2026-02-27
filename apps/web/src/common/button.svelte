<script lang="ts" module>
  export enum BtnVariant {
    Primary = "primary",
  }

  export enum BtnKind {
    Solid = "solid",
    Outline = "Outline",
    Ghost = "ghost",
  }

  export enum BtnSize {
    Sm = "sm",
    Base = "base",
    Lg = "lg",
  }
</script>

<script lang="ts">
  import { type Snippet } from "svelte";
  import type { ClassValue } from "svelte/elements";

  interface IProps {
    class?: string;
    variant?: BtnVariant;
    kind?: BtnKind;
    size?: BtnSize;
    label?: string;

    href?: string;
    onClick?: () => void;

    children: Snippet;

    ariaLabel?: string;
  }

  const {
    href,
    onClick,
    size = BtnSize.Base,
    kind = BtnKind.Solid,
    variant = BtnVariant.Primary,
    children,
    ariaLabel,
    ...props
  }: IProps = $props();

  const containerClass: ClassValue = $derived([
    props.class,
    "cursor-pointer flex items-center justify-center font-medium outline-none",
    "clip-ribbon-0-0-15 relative ribbon-border-br-1 ribbon-border-primary",
    //
    // Variants
    variant === BtnVariant.Primary && {
      "border border-primary": true,
      "text-primary hover:bg-primary hover:text-white": true,
    },
    //
    // Size
    {
      "text-sm pl-2.5 pr-3.5 py-2": size == BtnSize.Sm,
      "text-md pl-3 pr-4 py-2.5 ": size == BtnSize.Base,
      "text-lg pl-4 pr-5 py-2.5 ": size == BtnSize.Lg,
    },
  ]);

  const labelClass: ClassValue = $derived([
    "mr-1",
    //
    // Variants
    variant === BtnVariant.Primary && {
      // "text-gray-300": kind === BtnKind.Solid,
      // "text-gray-500": kind === BtnKind.Outline,
      "text-secondary-200": true,
    },
    //
    // Size
    {
      "text-xs": size == BtnSize.Sm || size == BtnSize.Base,
      "text-sm": size == BtnSize.Lg,
    },
  ]);

  const rel = $derived.by(() => {
    const tmp = ["noreferrer", "noopener"];
    if (href?.startsWith("http")) {
      tmp.push("external");
    }
    return tmp;
  });

  const label = $derived.by(() => {
    if (props.label) return props.label;
    if (href) return "href";
    if (onClick) return "click";
    return "btn";
  });
</script>

{#snippet lab()}
  <span class={["btn-label", labelClass]}>{label}:</span>
{/snippet}

{#snippet content()}
  {@render children?.()}
{/snippet}

{#snippet fakeBtn()}
  <div
    aria-hidden="true"
    class={[
      "fake-btn",
      "p-inherit font-inherit text-inherit",
      "absolute top-0 left-0 size-full",
    ]}
  >
    {@render lab()}{@render content()}
  </div>
{/snippet}

{#if href}
  <a
    class={containerClass}
    {href}
    rel={rel.join(" ")}
    onclick={onClick}
    target={href.startsWith("http") ? "_blank" : undefined}
  >
    {@render lab()}{@render content()}
    {@render fakeBtn()}
  </a>
{:else}
  <button type="button" class={containerClass} onclick={onClick}>
    {@render lab()}{@render content()}
    {@render fakeBtn()}
  </button>
{/if}

<style>
  @media (prefers-reduced-motion: no-preference) {
    button,
    a {
      opacity: 0;
      animation: anim-btn-in var(--duration-anim-btn-in) var(--delay, 0s) ease 1
        forwards;
      transform: scaleY(0);
    }
  }

  .fake-btn {
    --uno: "absolute color-primary opacity-0 pointer-events-none";
    clip-path: rect(0% 100% 100% 0%);
    transform: translate(0, 0) scale(1, 1);

    &::before {
      content: "";
      --uno: "clip-ribbon-0-0-15-15 size-full bg-base top-0 left-0 -z-1 absolute";
    }
  }

  /* Glitch hover animation */
  button:hover,
  a:hover {
    .btn-label {
      color: var(--colors-secondary-500);
    }

    .fake-btn {
      animation: anim-btn-hover var(--duration-anim-btn-hover) ease 1;
    }
  }

  @anim-step step-hover-1 {
    opacity: 1;
    clip-path: rect(80% 100% 100% 0%);
    transform: translate(-8%, 0%) scale(1.2, 1);
  }

  @anim-step step-hover-2 {
    opacity: 1;
    clip-path: rect(80% 100% 100% 0%);
    transform: translate(8%, 0%) scale(1.1, 1);
  }

  @anim-step step-hover-3 {
    opacity: 1;
    clip-path: rect(80% 100% 100% 0%);
    transform: translate(0%, 0%) scale(1, 1);
  }

  @anim anim-btn-hover {
    @use-step step-hover-2, 0.035s, 0.03s;
    @use-step step-hover-3, 0.035s;
    @use-step step-hover-1, 0.035s;
    @use-step step-hover-3, 0.035s;
    /* // */
    @step 0.02s, 0.04s {
      opacity: 1;
      clip-path: rect(38% 100% 52% 0%);
      transform: translate(8%, 0%) scale(1, 1);
    }
    @step 0.04s, 1s {
      opacity: 1;
      clip-path: rect(0% 100% 0% 0%);
      transform: translate(0%, 0%) scale(1, 1);
    }
  }

  /* In animation */

  @anim anim-btn-in {
    @step 0s {
      opacity: 1;
      transform: scaleY(0);
    }
    @step 0.06s {
      opacity: 0;
    }
    @step 0.12s {
      opacity: 0.4;
    }
    @step 0.06s {
      opacity: 0;
      transform: scaleY(1);
    }
    @step 0.06s {
      opacity: 0.7;
    }
    @step 0.12s {
      opacity: 1;
      transform: scaleY(1);
    }
  }
</style>
