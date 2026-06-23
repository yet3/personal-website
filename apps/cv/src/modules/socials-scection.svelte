<script lang="ts">
  import {
    EMAIL,
    GITHUB,
    GITHUB_URL,
    PHONE_NUMBER,
    WEBSITE,
    WEBSITE_URL,
  } from "@repo/content";
</script>

{#snippet info(str: string, href?: string, withDivider: boolean = true)}
  <li class="flex items-center gap-1.25 [&_svg]:(size-5)">
    {#if href}
      <a {href} target="new" class="underline underline-accent block">
        {str}
      </a>
    {:else}
      {str}
    {/if}
  </li>
  {#if withDivider}
    <div class="w-px h-3 bg-secondary/50"></div>
  {/if}
{/snippet}

<section>
  <ol
    class={{
      "flex justify-between text-resume-body font-medium text-primary-400": true,
    }}
  >
    {@render info(PHONE_NUMBER)}
    {@render info(WEBSITE, WEBSITE_URL)}
    {@render info(GITHUB, GITHUB_URL)}
    {@render info(EMAIL, undefined, false)}
  </ol>
</section>
