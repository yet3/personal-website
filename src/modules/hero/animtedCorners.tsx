import { For, onCleanup, onMount } from "solid-js";
import clsx from "clsx";
import { createStore } from "solid-js/store";
import { randomInRange } from "@utils/randomInRange.util";
import { Motion } from "@motionone/solid";
import { HERO } from "src/consts";

interface ICorner {
  x: number;
  y: number;
  velX: number;
  velY: number;
  variant: "tl" | "br";
}

const randomStart = (variant: ICorner["variant"], radius = 5) => {
  const r = (randomInRange(0, 360) * Math.PI) / 180;

  let x = 0;
  let y = 0;
  const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
  if (!mq?.matches) {
    x = Math.sin(r) * radius;
    y = Math.cos(r) * radius;
  }

  return {
    variant: variant,
    x,
    y,
    velX: 0,
    velY: 0,
  };
};

export const AnimatedCorners = () => {
  const [corners, setCorners] = createStore<ICorner[]>([
    randomStart("tl"),
    randomStart("br"),
  ]);

  const handleMouseMove = (e: MouseEvent) => {
    const movX = e.movementX;
    const movY = e.movementY;

    if (Math.abs(movX) >= 60 || Math.abs(movY) >= 60) {
      const d = 50;
      

      corners.forEach((corner, i) => {
        let { velX, velY } = corner;

        velX += movX / d;
        velY += movY / d;

        setCorners(i, { velX, velY });
      });
    }
  };

  const handleAnimFrame = () => {
    const PS = 1 / 60;
    const speed = 0.1;
    corners.forEach((corner, i) => {
      let { x, y, velX, velY } = corner;

      const goalX = x > 0 ? -1 : 1;
      const goalY = y > 0 ? -1 : 1;

      if (Math.abs(velX) > 5) {
        const d = velX > 0 ? -1 : 1;
        velX += 0.05 * d;
      }

      if (Math.abs(velY) > 5) {
        const d = velY > 0 ? -1 : 1;
        velY += 0.05 * d;
      }

      velX += speed * goalX;
      velY += speed * goalY;

      x += velX * PS;
      y += velY * PS;

      setCorners(i, { x, y, velX, velY });
    });

    rqAnim = requestAnimationFrame(handleAnimFrame);
  };

  let rqAnim: number | null = null;
  onMount(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!mq?.matches) {
      rqAnim = requestAnimationFrame(handleAnimFrame);
    }
  });

  window.addEventListener("mousemove", handleMouseMove);
  onCleanup(() => {
    window.removeEventListener("mousemove", handleMouseMove);
    if (rqAnim != null) cancelAnimationFrame(rqAnim);
  });

  return (
    <div class="top-0 left-0 absolute p-6 w-full h-full pointer-events-none">
      <div class="relative w-full h-full">
        <For each={corners}>{(corner) => <Corner data={corner} />}</For>
      </div>
    </div>
  );
};

interface CornerProps {
  data: ICorner;
}

const Corner = ({ data }: CornerProps) => {
  const rot = () => {
    if (data.variant === "br") return 180;
    return 0;
  };

  return (
    <Motion.div
      class="absolute "
      initial={{ opacity: 0 }}
      animate={{
        opacity: [0, 0.25, 1],
        scale: [0.5, 1],
        x: data.variant === "tl" ? ['50%', 0] : ['-50%', 0],
        y: data.variant === "tl" ? ['50%', 0] : ['-50%', 0],
      }}
      transition={{
        duration: HERO.CORNERS_IN_DUR,
        delay: HERO.BASE_DELAY
      }}
      style={{
        top: data.variant[0] === "t" ? 0 : undefined,
        bottom: data.variant[0] === "b" ? 0 : undefined,
        left: data.variant[1] === "l" ? 0 : undefined,
        right: data.variant[1] === "r" ? 0 : undefined,
      }}
    >
      <div
        class="will-change-transform text-white"
        style={{
          transform: `translate3d(${data.x}px, ${
            data.y
          }px, 0) rotate(${rot()}deg)`,
        }}
      >
        <div
          class={clsx(
            "w-[10vw] h-[4px] bg-white",
            "absolute top-0 left-0 origin-left"
          )}
        />
        <div
          class={clsx(
            "h-[10vw] w-[4px] bg-white",
            "absolute top-0 left-0 origin-top"
          )}
        />
      </div>
    </Motion.div>
  );
};
