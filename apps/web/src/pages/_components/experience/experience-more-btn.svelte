<script lang="ts">
  import Button, { BtnKind, BtnSize } from "$common/button.svelte";
  import Link from "$common/link.svelte";
  import SkillBadgeById from "$common/skill-badge-by-id.svelte";
  import ExperienceDates from "./experience-dates.svelte";
  import type { IExperience } from "@repo/content";

  interface IProps {
    experience: IExperience;
  }

  const { experience: data }: IProps = $props();

  let dialogEl: HTMLDialogElement | null = null;
</script>

<Button
  kind={BtnKind.Outline}
  size={BtnSize.Sm}
  label="dialog"
  class="delay-experience-150"
  onClick={() => {
    dialogEl?.showModal();
  }}>Read more</Button
>

<dialog
  bind:this={dialogEl}
  class="w-[calc(100vw-1rem)] max-w-188 overflow-hidden sm:w-[calc(100vw-2rem)]"
  onclick={(e) => {
    if (e.target === dialogEl) {
      dialogEl?.close();
    }
  }}
>
  <div class="max-h-80vh grid size-full min-h-112 grid-cols-[auto_1fr]">
    <button
      type="button"
      onclick={() => dialogEl?.close()}
      class="border-primary bg-base animate-center-scale-in max-h-inherit absolute top-4 right-4 z-10 grid size-8 cursor-pointer place-items-center border delay-450"
    >
      X
    </button>

    <div
      class="dailog-crust border-primary bg-base/90 h-full w-3 flex-1 border backdrop-blur-[32px] sm:w-5"
    ></div>
    <section
      aria-label="Experience details"
      class="border-primary bg-base clip-ribbon-0-0-60 ribbon-border-primary ribbon-border-br-1 max-h-inherit relative flex w-164 w-186 w-full flex-col justify-center border border-l-0"
    >
      <div
        class="max-h-inherit clip-ribbon-0-0-60 relative overflow-x-hidden px-4 py-8 sm:px-12"
      >
        <div class="anim-content-in flex flex-col delay-0">
          <ExperienceDates
            dates={data.dates}
            class="md:text-md inline-flex text-sm"
          />
          <span
            class="max-xs:flex-col mt-1 flex w-full text-lg font-semibold sm:text-xl"
          >
            {data.position}
            <div class="max-xs:mt-1 xs:ml-1 ml-24">
              <span class="mr-0.5">//</span>
              <Link href={data.website} content={data.at} />
            </div>
          </span>
        </div>
        <ol class="anim-content-in mt-2 grid content-start gap-1 delay-50">
          {#each data.contentBlocks as block}
            <li class="sm:text-md flex text-sm">
              <span class="mr-2">-</span>
              <p>
                {block}
              </p>
            </li>
          {/each}
        </ol>

        <ul class="anim-content-in mt-3 -mr-2 flex flex-wrap delay-100">
          {#each data.skills as skillId}
            <li class="mr-2 mb-2 flex items-center">
              <SkillBadgeById id={skillId} />
            </li>
          {/each}
        </ul>
      </div>
    </section>
  </div>
</dialog>

<style>
  @media (prefers-reduced-motion: no-preference) {
    .dailog-crust {
      animation: anim_dialog_crust_in 0.25s ease 1 forwards;
      opacity: 0;
    }

    section {
      animation: anim_left_scale_in 0.25s 0.22s ease 1 forwards;
      opacity: 1 !important;
      transform: scaleX(0);
      transform-origin: left;
    }

    .anim-content-in {
      --anim-in-from: -10px;
      animation: anim_top_slide_in 0.25s calc(var(--delay, 0s) + 0.25s + 0.15s)
        ease 1 forwards;
      opacity: 0;
    }

    @keyframes anim_dialog_crust_in {
      from {
        opacity: 0;
        transform: translateX(-25%);
      }
      to {
        opacity: 1;
        transform: translateX(0%);
      }
    }
  }
</style>
