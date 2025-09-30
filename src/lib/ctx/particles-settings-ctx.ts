import { getContext, setContext } from "svelte";
import type { IParticlesSettings } from "$types/particles.types";

const KEY = "particles-settings-ctx";

export const setParticlesSettings = (value: IParticlesSettings) => {
	setContext(KEY, value);
};

export const getParticlesSettings = () => {
	return getContext<IParticlesSettings>(KEY);
};
