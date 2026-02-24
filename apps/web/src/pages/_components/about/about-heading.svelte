<script>
  import { FIRST_NAME, LAST_NAME } from "@repo/content";
</script>

{#snippet content()}
  <span>{FIRST_NAME}</span>
  <span class="xs:ml-28 mt-3 ml-20">// {LAST_NAME}</span>
{/snippet}

<h2
  class="delay-about-0 xs:text-4xl relative mx-auto flex flex-col text-3xl font-semibold mb-6"
>
  {@render content()}

  <div
    aria-hidden="true"
    class="absolute top-0 left-0 flex flex-col break-keep whitespace-pre text-inherit"
  >
    {@render content()}
  </div>
</h2>

<style>
  @media (prefers-reduced-motion: no-preference) {
    h2 {
      opacity: 0;
      animation: anim_about_header_in var(--duration_anim_about_header_in)
        var(--delay, 0s) ease 1 forwards;
    }

    h2 div {
      background-color: var(--colors-base-DEFAULT);
      clip-path: rect(35% 100% 35% 0%);
      transform: scaleX(1) translate(-20px, 0%);
      padding: 0px 20px;
      width: calc(100% + 40px);
      z-index: 10;

      animation:
        anim_about_header_idle_in var(--duration_anim_about_header_idle_in) 0.4s
          ease 1 forwards,
        anim_about_header_idle_in var(--duration_anim_about_header_idle_in) 1.1s
          ease 1 forwards reverse,
        anim_about_header_idle var(--duration_anim_about_header_idle) 5s ease
          infinite forwards alternate;
    }

    /* In animation  */

    @anim-step step_in_base {
      opacity: 1;
      transform: skew(0deg, 0deg) scale(1, 1);
    }

    @anim-step step_in_start {
      opacity: 1;
      transform: skew(88deg, 0deg) scale(1, 1.2);
    }

    @anim-step step_in_left_big {
      opacity: 1;
      transform: skew(-82deg, 1deg) scale(1, 1);
    }

    @anim-step step_in_left_small {
      opacity: 1;
      transform: skew(-12deg, 0deg) scale(1, 1);
    }

    @anim-step step_in_right_small {
      opacity: 1;
      transform: skew(8deg, 0deg) scale(1, 1);
    }

    @timed-anim anim_about_header_in {
      step_in_start: 0s, 0.04s;
      step_in_base: 0.04s, 0.2s;
      step_in_left_small: 0.04s;
      step_in_base: 0.03s, 0.25s;
      step_in_right_small: 0.04s;
      step_in_left_big: 0.03s;
      step_in_left_small: 0.04s;
      step_in_base: 0.03s;
    }

    /* Idle animation */

    @anim-step step_idle_base {
      clip-path: rect(35% 100% 35% 0%);
      transform: scaleX(1) translate(-20px, 0%);
    }

    @anim-step step_idle_start {
      clip-path: rect(55% 100% 80% 0%);
      transform: scaleX(0.98) translate(-20px, 0%);
    }

    @anim-step step_idle_top {
      clip-path: rect(12% 100% 42% 0%);
      transform: scaleX(0.92) translate(-20px, 0%);
    }

    @anim-step step_idle_bottom {
      clip-path: rect(95% 100% 95% 0%);
      transform: scaleX(0.91) translate(-20px, 0%);
    }

    @timed-anim anim_about_header_idle_in {
      step_idle_start: 0.1s, 0.05s;
      step_idle_top: 0.15s;
      step_idle_bottom: 0.1s;
    }

    @timed-anim anim_about_header_idle {
      step_idle_start: 0.1s, 0.05s;
      step_idle_top: 0.15s;
      step_idle_bottom: 0.15s;
      step_idle_base: 0.1s, 5s;
    }
  }
</style>
