<script lang="ts">
  import type { Component } from "svelte";
  import {
    EMAIL,
    GITHUB,
    GITHUB_URL,
    PHONE_NUMBER,
    WEBSITE,
    WEBSITE_URL,
  } from "@repo/content";
  import PhoneIcon from "$common/icons/phone-icon.svelte";
  import WebsiteIcon from "$common/icons/website-icon.svelte";

  import { GithubIcon, EmailIcon } from "@repo/lib/icons";
</script>

{#snippet info(str: string, Icon: Component, href?: string)}
  <li class="flex items-center gap-1.25 [&_svg]:(size-5)">
    <Icon />
    {#if href}
      <a {href} target="_blank">
        {str}
      </a>
    {:else}
      {str}
    {/if}
  </li>
{/snippet}

<section>
  <ol
    class={{
      "grid content-start text-head-info gap-1.5 font-medium text-primary-400": true,
    }}
  >
    {@render info(PHONE_NUMBER, PhoneIcon)}
    {@render info(WEBSITE, WebsiteIcon, WEBSITE_URL)}
    {@render info(GITHUB, GithubIcon, GITHUB_URL)}
    {@render info(EMAIL, EmailIcon)}
  </ol>
</section>
