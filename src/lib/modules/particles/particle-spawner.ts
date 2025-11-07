import { type IMinMax, randomFloat, randomMinMax } from "$utils/random";
import type { Particle } from "./particle";

interface IProps {
	x: number;
	y: number;
	width?: number;
	height?: number;

	spawnEvery: number;
	particles: {
		particle: typeof Particle;
		amount: IMinMax;
	}[];
}

export class ParticleSpawner {
	x: IProps["x"];
	y: IProps["y"];
	width: number;
	height: number;

	items: IProps["particles"];

	particles = new Set<Particle>();

	spawnEvery: number;
	spawnTimer = 0;

	constructor(data: IProps) {
		this.x = data.x;
		this.y = data.y;
		this.width = data.width ?? 0;
		this.height = data.height ?? 0;
		this.spawnEvery = data.spawnEvery;
		this.items = data.particles;
	}

	render(ctx: CanvasRenderingContext2D) {
		ctx.fillStyle = "rgba(150, 150, 255, 0.5)";
		const w = this.width || 1;
		const h = this.height || 1;
		ctx.fillRect(this.x, this.y, w, h);

		for (const particle of this.particles) {
			particle.render(ctx);
		}
	}

	update(dt: number) {
		if (this.spawnTimer >= this.spawnEvery) {
			this.spawnTimer = 0;
			for (const { particle, amount } of this.items) {
				for (let i = 0; i < randomMinMax(amount); i++) {
					this.particles.add(
						new particle({
							position: {
								x: this.x + randomFloat(0, this.width),
								y: this.y + randomFloat(0, this.height),
							},
						}),
					);
				}
			}
		}

		this.spawnTimer += 1 * dt;

		for (const particle of this.particles) {
			particle.update(dt, this);
		}
	}
}
