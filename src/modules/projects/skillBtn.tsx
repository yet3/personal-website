import { Anchor } from "@common/anchor";
import { DndKitSvg } from "@common/svgs/dndKitSvg";
import { FastifySvg } from "@common/svgs/fastifySvg";
import { FigmaSvg } from "@common/svgs/figmaSvg";
import { I18NextSvg } from "@common/svgs/i18nextSvg";
import { NextjsSvg } from "@common/svgs/nextjsSvg";
import { ReactSvg } from "@common/svgs/reactSvg";
import { TailwindcssSvg } from "@common/svgs/tailwindcssSvg";
import { TypescriptSvg } from "@common/svgs/typescriptSvg";
import { VercelSvg } from "@common/svgs/vercelSvg";
import { ViteSvg } from "@common/svgs/viteSvg";
import { Match, Switch } from "solid-js";

export type ProjectSkill =
  | "react"
  | "ts"
  | "tailwindcss"
  | "vercel"
  | "nextjs"
  | "@dnd-kit"
  | "i18n"
  | "figma"
  | "vite"
  | "fastify"
  | "svgr";

interface Props {
  skill: ProjectSkill;
}

export const SkillBtn = (props: Props) => {
  const href = () => {
    switch (props.skill) {
      case "react":
        return "https://beta.reactjs.org";
      case "ts":
        return "https://www.typescriptlang.org";
      case "tailwindcss":
        return "https://tailwindcss.com";
      case "vercel":
        return "https://vercel.com/";
      case "nextjs":
        return "https://nextjs.org/";
      case "@dnd-kit":
        return "https://dndkit.com";
      case "i18n":
        return "https://www.i18next.com";
      case "figma":
        return "https://www.figma.com";
      case "vite":
        return "https://vitejs.dev";
      case "fastify":
        return "https://www.fastify.io";
      case "svgr":
        return "https://react-svgr.com";
      default:
        return undefined;
    }
  };

  const name = () => {
    switch (props.skill) {
      case "react":
        return "React";
      case "ts":
        return "Typescript";
      case "tailwindcss":
        return "TailwindCss";
      case "vercel":
        return "Vercel";
      case "nextjs":
        return "Next.js";
      case "@dnd-kit":
        return "@dnd-kit";
      case "i18n":
        return "i18next";
      case "figma":
        return "Figma";
      case "vite":
        return "Vite";
      case "fastify":
        return "Fastify";
      case "svgr":
        return "SVGR";
      default:
        return undefined;
    }
  };

  return (
    <Anchor
      href={href()}
      class="flex gap-[6px] items-center bg-pinkish-brown text-sm text-white px-3 rounded-lg h-9"
    >
      <Switch>
        <Match when={props.skill === "react"}>
          <ReactSvg height="18" />
        </Match>
        <Match when={props.skill === "ts"}>
          <TypescriptSvg height="12" />
        </Match>
        <Match when={props.skill === "tailwindcss"}>
          <TailwindcssSvg height="12" />
        </Match>
        <Match when={props.skill === "vercel"}>
          <VercelSvg height="10" />
        </Match>
        <Match when={props.skill === "nextjs"}>
          <NextjsSvg height="20" />
        </Match>
        <Match when={props.skill === "@dnd-kit"}>
          <DndKitSvg height="20" />
        </Match>
        <Match when={props.skill === "i18n"}>
          <I18NextSvg height="20" />
        </Match>
        <Match when={props.skill === "figma"}>
          <FigmaSvg height="18" />
        </Match>
        <Match when={props.skill === "vite"}>
          <ViteSvg height="18" />
        </Match>
        <Match when={props.skill === "fastify"}>
          <FastifySvg height="18" class="fill-white" />
        </Match>
      </Switch>
      <span>{name()}</span>
    </Anchor>
  );
};
