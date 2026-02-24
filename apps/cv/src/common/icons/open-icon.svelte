<script lang="ts">
  import type { SVGAttributes } from "svelte/elements";

  const props: SVGAttributes<SVGElement> = $props();
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  width="10"
  height="10"
  viewBox="0 0 18 18"
	class="fill-primary-200"
  {...props}
>
  <path
    d="M0 15V3a3 3 0 0 1 3-3h4a1 1 0 0 1 0 2H3a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-4a1 1 0 1 1 2 0v4a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3m18-9a1 1 0 1 1-2 0V3.414L9.707 9.707a1 1 0 1 1-1.414-1.414L14.586 2H12a1 1 0 1 1 0-2h5a1 1 0 0 1 1 1z"
  />
</svg>
