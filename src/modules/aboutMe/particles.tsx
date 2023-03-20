import { randomInRange } from "@utils/randomInRange.util";
import clsx from "clsx";
import { JSX, mergeProps } from "solid-js";

interface ParticleProps {
  type: "rect" | "circle" | "triangle";
  color: "shark" | "blue" | "accent" | "yellow";

  style?: JSX.CSSProperties;
}
const Particle = (_props: ParticleProps) => {
  const props = mergeProps(_props);
  let size = randomInRange(5, 15, "int");
  if (size % 2 !== 0) size += 1;

  const dur = randomInRange(2.5, 5);

  if (props.type === "triangle") {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 100 100"
        class={clsx(
          "animate-spin",
          props.color === "shark"
            ? "stroke-shark-100 fill-shark-100"
            : props.color === "yellow"
            ? "stroke-yellow-100 fill-yellow-100"
            : props.color === "blue"
            ? "stroke-blue-300 fill-blue-300"
            : "stroke-accent fill-accent"
        )}
        style={{
          ...props.style,
          "stroke-width": "20px",
          "stroke-linejoin": "round",
          "stroke-linecap": "round",
          "animation-duration": dur + "s",
          "animation-fill-mode": "backwards",
        }}
      >
        <path d="M 50,10 90,90 10,90 z" />
      </svg>
    );
  }

  return (
    <div
      class={clsx(
        props.type === "rect" ? "rounded-[20%] animate-spin" : "rounded-full",
        props.color === "shark"
          ? "bg-shark-100"
          : props.color === "yellow"
          ? "bg-yellow-100"
          : props.color === "blue"
          ? "bg-blue-300"
          : "bg-accent"
      )}
      style={{
        ...props.style,
        width: size + "px",
        height: size + "px",
        "animation-duration": dur + "s",
        "animation-fill-mode": "backwards",
      }}
    />
  );
};

export const Particles = () => {
  const pat: JSX.Element[] = [];
  const len = 5;
  for (let i = 0; i < len; i++) {
    const ang =
      (randomInRange(
        i * (360 / len) + len * 4,
        (i + 1) * (360 / len) - len * 4
      ) *
        Math.PI) /
      180;
    const opt = ["accent", "accent", "shark", "shark", "yellow", "blue"];
    const oi = randomInRange(0, opt.length - 1, "int");

    const rpt = ["rect", "rect", "circle", "triangle"];
    const ri = randomInRange(0, rpt.length - 1, "int");

    const r = randomInRange(25, 45);
    pat.push(
      <Particle
        type={rpt[ri] as any}
        color={opt[oi] as any}
        style={{
          position: "absolute",
          top: Math.sin(ang) * r + 64 + "px",
          left: Math.cos(ang) * r + 64 + "px",
          "transform-origin": "center",
        }}
      />
    );
  }

  return <div class="relative w-32 h-32 top-32 left-32">{pat}</div>;
};
