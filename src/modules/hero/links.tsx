import { Anchor } from "@common/anchor";
import { AttractToMouse } from "@common/attractToMouse";
import { EmailSvg } from "@common/svgs/emailSvg";
import { GithubSvg } from "@common/svgs/githubSvg";
import { LinkedinSvg } from "@common/svgs/linkedinSvg";
import clsx from "clsx";
import { HERO } from "src/consts";

export const HeroLinks = () => {
  return (
    <AttractToMouse
      tag="ul"
      // class="grid grid-flow-col gap-5 absolute top-8 right-1/2 translate-x-1/2 md:translate-x-0 md:right-6 md:top-1/2 md:-translate-y-1/2 md:grid-flow-row"
      class="grid grid-flow-col gap-5 absolute bottom-8 right-1/2 translate-x-1/2"
    >
      <li class="overflow-hidden">
        <Anchor href="https://www.github.com" aria-label="Link to my github">
          <GithubSvg
            width={32}
            height={32}
            class={clsx(
              "fill-white hover:fill-accent",
              "motion-safe:animate-[slide-in-top_300ms_ease_both]",
              // "md:motion-safe:animate-[slide-in-left_300ms_ease_both]"
            )}
            style={{
              animation: "",
              "animation-delay": `${HERO.LINKS_DELAY + HERO.LINKS_STAGGER}s`,
            }}
          />
        </Anchor>
      </li>
      <li class="flex justify-center overflow-hidden">
        <Anchor
          href="https://www.linkedin.com"
          aria-label="Link to my linkedin"
        >
          <LinkedinSvg
            width={32}
            height={32}
            class={clsx(
              "fill-white hover:fill-accent",
              "motion-safe:animate-[slide-in-top_300ms_ease_both]",
              // "md:motion-safe:animate-[slide-in-left_300ms_ease_both]"
            )}
            style={{
              "animation-delay": `${HERO.LINKS_DELAY + HERO.LINKS_STAGGER * 2
                }s`,
            }}
          />
        </Anchor>
      </li>
      <li class="flex justify-center overflow-hidden">
        <Anchor
          href="mailto:kasperowicz.maksymilian@gmail.com"
          aria-label="Link to email"
        >
          <EmailSvg
            width={30}
            height={30}
            class={clsx(
              "fill-white hover:fill-accent",
              "motion-safe:animate-[slide-in-top_300ms_ease_both]",
              // "md:motion-safe:animate-[slide-in-left_300ms_ease_both]"
            )}
            style={{
              "animation-delay": `${HERO.LINKS_DELAY + HERO.LINKS_STAGGER * 3
                }s`,
            }}
          />
        </Anchor>
      </li>
    </AttractToMouse>
  );
};
