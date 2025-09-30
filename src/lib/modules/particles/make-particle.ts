import { toRadians } from "$utils/math";
import { randomFloat, randomInt } from "$utils/random";
import type { Vec2 } from "$types/math.types";
import { Particle } from "./particle";

export enum LeafParticle {
	"A",
	"B",
	"C",
	"D",
	"E",
	"F"
}

export const makeLeafParticle = (type: LeafParticle) => {
	const scale = randomFloat(0.75, 1.2);
	const data = DATA[type];

  const dir = new Date().getHours() >= 16 ? -1 : 1;

	return class extends Particle {
		constructor(props: { position: Vec2 }) {
			super({
				...props,
				size: { x: data.size[0], y: data.size[1] },
				velocity: { x: randomFloat(1, 40) * dir, y: randomFloat(0, 200) },
				rotation: {
					x: toRadians(randomFloat(-360, 360)),
					y: toRadians(randomFloat(-360, 360)),
					z: toRadians(randomFloat(-360, 360))
				},
				rotVelocity: {
					x: toRadians(randomFloat(-60, 60)),
					y: toRadians(randomFloat(-60, 60)),
					z: toRadians(randomFloat(-60, 60))
				},
				scale: {
					x: scale,
					y: scale
				},
				fillColor: data.colors[randomInt(0, data.colors.length)],
				fillPath: new Path2D(data.path)
			});
		}
	};
};

const LIGHT_COLORS = ['hsl(348 100% 80%)', 'hsl(348 100% 85%)', 'hsl(348 100% 90%)']
const DARK_COLORS = ['hsl(348 100% 70%)', 'hsl(348 100% 75%)']
const ALL_COLORS = [...LIGHT_COLORS, ...DARK_COLORS]
const DATA: Record<
	LeafParticle,
	{
		path: string;
		colors: string[];
		size: [number, number];
	}
> = {
	[LeafParticle.A]: {
		colors: ALL_COLORS,
		size: [17, 22],
		path: "M14.516 20.95C11.412 19.108 1.934 12.62.159 1.224A.937.937 0 0 1 1.227.154c13.542 1.982 16.909 12.15 14.615 20.267a.892.892 0 0 1-1.326.529",
	},
	[LeafParticle.B]: {
		colors: LIGHT_COLORS,
		size: [11, 23],
		path: "M.052 10.304c1.375-5.026 5.194-7.634 9-10.023a.483.483 0 0 1 .693.19c3.741 7.675-3.147 16.884-7.142 21.605a.29.29 0 0 1-.506-.111C1.217 18.56.212 11.922.029 10.697a1 1 0 0 1 .023-.393",
	},
	[LeafParticle.C]: {
		colors: ALL_COLORS,
		size: [23, 12],
		path: "M7.5 2.43C5.543 4.581 3.586 5.864 1.922 6.594c-.956.419-1.36 2.417-.42 2.874C12.457 14.799 19.73 8.25 22.55 3.284a.91.91 0 0 0-.418-1.28C18.312.248 11.197-1.638 7.5 2.429",
	},
	[LeafParticle.D]: {
		colors: DARK_COLORS,
		size: [16, 22],
		path: "M4.306 1.04C2.67 2.063-2.712 6.79 4.59 21.732c11.427-3.266 10.78-14.15 10.35-17.245-.066-.484-.497-.805-.985-.818-3.694-.096-7.524-1.958-8.786-2.627-.276-.147-.598-.169-.863-.003",
	},
	[LeafParticle.E]: {
		colors: LIGHT_COLORS,
		size: [11, 14],
		path: "M.405 1.989C2.94 1.566 7.644.734 9.57.242c.36-.092.77.195.77.567V8c0 1.833-1.2 5.4-6 5C-.432 12.602-.33 5.59.325 2.067a.095.095 0 0 1 .08-.078",
	},
	[LeafParticle.F]: {
		colors: DARK_COLORS,
		size: [18, 15],
		path: "M.565 2.36c.885 12.014 10.672 12.818 16.062 11.61.37-.083.658-.383.678-.76.119-2.24-1.776-3.475-2.823-3.829C11.77-2.416 3.325.463 1.08 1.464a.9.9 0 0 0-.515.896",
	}
};
