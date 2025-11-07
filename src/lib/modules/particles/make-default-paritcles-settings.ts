import type { IParticlesSettings } from "$types/particles.types";

export const makeDefaultParitclesSettings = (): IParticlesSettings => ({
	isEnabled: true,
	fps: 60,
	pixelation: 3,
	spawnEvery: 1.3,
});
