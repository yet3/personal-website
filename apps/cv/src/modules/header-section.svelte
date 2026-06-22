<script lang="ts">
  import "virtual:uno.css";
  import "$styles/index.css";
  import { FULL_NAME, JOB_TITLE } from "@repo/content";
</script>

<section class="flex items-center font-semibold text-resume-name">
  <h1 class="font-semibold text-resume-name">{FULL_NAME}</h1>
  <h2 class="ml-auto font-medium italic text-resume-subname text-secondary">{JOB_TITLE}</h2>
</section>
