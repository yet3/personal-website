<script lang="ts">
  import "virtual:uno.css";
  import "$styles/index.css";
  import type { PageProps } from "./$types";
  import { FULL_NAME } from "@repo/content";
  import HeaderSection from "$modules/header-section.svelte";
  import AboutSection from "$modules/about-section.svelte";
  import SkillsSection from "$modules/skills-section.svelte";
  import PetProjectsSection from "$modules/pet-projects-section.svelte";
  import ExperienceSection from "$modules/experience-section.svelte";
  import SocialsScection from "$modules/socials-scection.svelte";

  let { data }: PageProps = $props();

  const TITLE = `CV | ${FULL_NAME}`;
</script>

<svelte:head>
  <title>{TITLE}</title>
</svelte:head>

<main class="flex flex-col gap-3.5">
  <HeaderSection />
  <SocialsScection />

  <div class="flex flex-col gap-4">
    <AboutSection />
    <SkillsSection skills={data.skills} />

    <ExperienceSection experience={data.experience} />

    <PetProjectsSection projects={data.projects} />
  </div>
</main>
