<script lang="ts">
  import type { Snippet } from "svelte";

  interface IProps {
    class?: string;
    children: Snippet;
    delay?: string;
  }
  const { class: className, delay = "0ms", children }: IProps = $props();
</script>

<div
  class={["text-primary relative gap-1 overflow-hidden", className]}
  style="--delay: {delay}"
>
  <div class="absolute top-0 left-0 h-full pointer-events-none">
    <svg width="100%" height="100%">
      <defs>
        <pattern
          id="pattern"
          width="100%"
          height="1.5rem"
          patternUnits="userSpaceOnUse"
        >
          <text
            x="0"
            y="1rem"
            fill="currentColor"
            class="font-primary text-md text-secondary-300">//</text
          >
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#pattern)"></rect>
    </svg>
  </div>
  <p class="text-md pl-[1.5rem]">
    {@render children()}
  </p>
</div>
