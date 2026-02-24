<script lang="ts">
  import Section from "$common/section.svelte";
  import type { IProject } from "@repo/content/projects";

  interface IProps {
    projects: IProject[];
  }

  const { projects }: IProps = $props();
</script>

<Section title="Pet projects">
  <ul class="grid content-start gap-3">
    {#each projects as project}
      <li>
        <a
          href={project.appHref ?? project.repoHref}
          class="text-sec-h2 font-medium"
          target="_blank"
        >
          {project.title}
        </a>
        <p class="text-content text-secondary">{project.contentBlocks}</p>
      </li>
    {/each}
  </ul>
</Section>
