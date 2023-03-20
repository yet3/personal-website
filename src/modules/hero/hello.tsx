import { AnimTextLinePopIn } from "@common/animatedText";
import clsx from "clsx";
import { HERO } from "src/consts";

export const Hello = () => {
  const hours = new Date().getHours();

  let text = "Hello";
  let textCN = "fluid-text-[140px,240px]";
  if (hours >= 5 && hours <= 12) {
    textCN = "fluid-text-[45px,140px]";
    text = "Good Morning";
  } else if (hours >= 18) {
    textCN = "fluid-text-[45px,140px]";
    text = "Good Evening";
  }

  return (
    <h2 class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden pt-4 pb-32 mt-16 text-white">
      <AnimTextLinePopIn
        delay={HERO.HELLO_DELAY}
        class={clsx(textCN, "animate-[slide-out-top_ease_both]")}
        text={text}
        duration={HERO.HELLO_IN}
        style={{
          "animation-duration": HERO.HELLO_OUT + "s",
          "animation-delay":
            HERO.HELLO_ON + HERO.HELLO_DELAY + HERO.HELLO_IN + "s",
        }}
      />
    </h2>
  );
};
