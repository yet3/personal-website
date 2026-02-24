<script lang="ts">
  import "virtual:uno.css";
  import "$styles/index.css";
  import type { PageProps } from "./$types";
  import { FULL_NAME } from "@repo/content";
  import HeaderSection from "$modules/header-section.svelte";
  import AboutSection from "$modules/about-section.svelte";
  import LanguagesSection from "$modules/languages-section.svelte";
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

<main class="flex flex-col">
  <div class="main-grid">
    <HeaderSection />
    <SocialsScection />
  </div>

  <div class="main-grid mt-6">
    <div class="grid content-start gap-sections">
      <AboutSection />
      <ExperienceSection experience={data.experience} />
    </div>

    <div class="grid content-start gap-sections">
      <LanguagesSection />
      <SkillsSection skills={data.skills} />
      <PetProjectsSection projects={data.projects} />
    </div>
  </div>
</main>
