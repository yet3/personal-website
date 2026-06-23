<script lang="ts">
  import Section from "$common/section.svelte";
  import type { IProject } from "@repo/content/projects";

  interface IProps {
    projects: IProject[];
  }

  const { projects }: IProps = $props();
</script>

<Section title="Projects">
  <ul class="grid content-start gap-2">
    {#each projects as project}
      <li>
        <a
          href={project.appHref ?? project.repoHref}
          target="new"
          class="text-resume-title font-semibold underline underline-accent block"
        >
          {project.title}
        </a>
        <p class="text-resume-body mt-1">{project.contentBlocks}</p>
      </li>
    {/each}
  </ul>
</Section>
