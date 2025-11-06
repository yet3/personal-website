import charTyper from "./char-typer";
import coffeeCalculator from "./coffee-calculator";
import cyberpunkBreachProtocol from "./cyberpunk-breach-protocol";
import fastSvgOptimizer from "./fast-svg-optimizer";
import figmaSvgToReact from "./figma-svg-to-react";
import goChat from "./go-chat";
import webDevTools from "./web-dev-tools";

export const PROJECTS = Object.freeze({
	...cyberpunkBreachProtocol,
	...figmaSvgToReact,
	...fastSvgOptimizer,
	...webDevTools,
	...charTyper,
	...coffeeCalculator,
	...goChat
});

export type IProjectId = keyof typeof PROJECTS;
