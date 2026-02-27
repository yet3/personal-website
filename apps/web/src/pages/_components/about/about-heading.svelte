<script>
  import { FIRST_NAME, LAST_NAME } from "@repo/content";
</script>

{#snippet content()}
  <span>{FIRST_NAME}</span>
  <span class="xs:ml-28 mt-3 ml-20">// {LAST_NAME}</span>
{/snippet}

<h2
  class="delay-about-0 xs:text-4xl relative mx-auto mb-6 flex flex-col text-3xl font-semibold"
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
      animation: anim-about-header-in var(--duration-anim-about-header-in)
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
        anim-about-header-idle-in var(--duration-anim-about-header-idle-in) 0.4s
          ease 1 forwards,
        anim-about-header-idle-in var(--duration-anim-about-header-idle-in) 1.1s
          ease 1 forwards reverse,
        anim-about-header-idle var(--duration-anim-about-header-idle) 5s ease
          infinite forwards alternate;
    }

    /* In animation  */

    @anim-step step-in-base {
      opacity: 1;
      transform: skew(0deg, 0deg) scale(1, 1);
    }

    @anim-step step-in-start {
      opacity: 1;
      transform: skew(88deg, 0deg) scale(1, 1.2);
    }

    @anim-step step-in-left-big {
      opacity: 1;
      transform: skew(-82deg, 1deg) scale(1, 1);
    }

    @anim-step step-in-left-small {
      opacity: 1;
      transform: skew(-12deg, 0deg) scale(1, 1);
    }

    @anim-step step-in-right-small {
      opacity: 1;
      transform: skew(8deg, 0deg) scale(1, 1);
    }

    @anim anim-about-header-in {
      @use-step step-in-start, 0s, 0.04s;
      @use-step step-in-base, 0.04s, 0.2s;
      @use-step step-in-left-small, 0.04s;
      @use-step step-in-base, 0.03s, 0.25s;
      @use-step step-in-right-small, 0.04s;
      @use-step step-in-left-big, 0.03s;
      @use-step step-in-left-small, 0.04s;
      @use-step step-in-base, 0.03s;
    }

    /* Idle animation */

    @anim-step step-idle-base {
      clip-path: rect(35% 100% 35% 0%);
      transform: scaleX(1) translate(-20px, 0%);
    }

    @anim-step step-idle-start {
      clip-path: rect(55% 100% 80% 0%);
      transform: scaleX(0.98) translate(-20px, 0%);
    }

    @anim-step step-idle-top {
      clip-path: rect(12% 100% 42% 0%);
      transform: scaleX(0.92) translate(-20px, 0%);
    }

    @anim-step step-idle-bottom {
      clip-path: rect(95% 100% 95% 0%);
      transform: scaleX(0.91) translate(-20px, 0%);
    }

    @anim anim-about-header-idle-in {
      @step 0.1s, 0.05s {
        clip-path: rect(55% 100% 80% 0%);
        transform: scaleX(0.98) translate(-20px, 0%);
      }
      @step 0.15s {
        clip-path: rect(12% 100% 42% 0%);
        transform: scaleX(0.92) translate(-20px, 0%);
      }
      @step 0.1s {
        clip-path: rect(95% 100% 95% 0%);
        transform: scaleX(0.91) translate(-20px, 0%);
      }
    }

    @anim anim-about-header-idle {
      @use-anim anim-about-header-idle-in;
      @step 0.1s, 5s {
        clip-path: rect(35% 100% 35% 0%);
        transform: scaleX(1) translate(-20px, 0%);
      }
    }
  }
</style>
