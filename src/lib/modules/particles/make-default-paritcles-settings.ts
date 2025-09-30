import type { IParticlesSettings } from "$types/particles.types";

export const makeDefaultParitclesSettings = (): IParticlesSettings => ({
	isEnabled: true,
  fps: 24,
	pixelation: 3,
	spawnEvery: 1.3,
});
