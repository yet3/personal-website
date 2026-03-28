export * from "./projects.types";

import cyberpunkBreachProtocol from "./entries/cyberpunk-breach-protocol";
import charTyper from "./entries/char-typer";
import coffeeCalculator from "./entries/coffee-calculator";
import fastSvgOptimizer from "./entries/fast-svg-optimizer";
import figmaSvgToReact from "./entries/figma-svg-to-react";
import goChat from "./entries/go-chat";
import webDevTools from "./entries/web-dev-tools";
import shortie from "./entries/shortie";

export const PROJECTS = Object.freeze({
  ...cyberpunkBreachProtocol,
  ...figmaSvgToReact,
  ...fastSvgOptimizer,
  ...shortie,
  ...webDevTools,
  ...charTyper,
  ...coffeeCalculator,
  ...goChat,
});

export type IProjectId = keyof typeof PROJECTS;
