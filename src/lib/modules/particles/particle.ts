import type { Vec2, Vec3 } from "$types/math.types";
import { toRadians } from "$utils/math";
import type { ParticleSpawner } from "./particle-spawner";

const GRAVITY = 60;

export interface IBaseParticleProps {
	position: Vec2;
	size?: Vec2;
}

export interface IProps extends IBaseParticleProps {
	velocity?: Vec2;

	rotation?: Vec3;
	rotVelocity?: Vec3;

	scale?: Vec2;

	fillPath?: Path2D;
	fillColor?: string;
}

export class Particle {
	position: Vec2;
	private velocity: Vec2;
	size: Vec2;
	drag: Vec2 = { x: 0.005, y: 0.4 };

	rotation: Vec3 = { x: 0, y: 0, z: 0 };
	private rotVelocity: Vec3 = { x: 0, y: 0, z: 0 };
	rotDrag: Vec3 = { x: 0.1, y: 0.1, z: 0.1 };

	scale: Vec2 = { x: 1, y: 1 };

	fillPath: Path2D;
	fillColor: string;

	lifespan = 120;

	constructor(data: IProps) {
		this.position = data.position;
		this.velocity = data.velocity ?? { x: 0, y: 0 };
		this.size = data.size ?? { x: 10, y: 10 };

		this.rotation = data.rotation ?? { x: 0, y: 0, z: 0 };
		this.rotVelocity = data.rotVelocity ?? { x: 0, y: 0, z: 0 };

		this.scale = data.scale ?? { x: 1, y: 1 };

		this.fillPath = data.fillPath ?? new Path2D();
		this.fillColor = data.fillColor ?? "green";

		this.rotVelocity.y -= toRadians(this.velocity.x * 0.6);
		this.rotVelocity.x -= toRadians(this.velocity.y * 0.6);
	}

	applyForce = (force: Vec2) => {
		this.velocity.x += force.x;
		this.velocity.y += force.y;

		this.rotVelocity.y -= toRadians(force.x * 0.6);
		this.rotVelocity.x -= toRadians(force.y * 0.6);
	};

	render(ctx: CanvasRenderingContext2D) {
		ctx.fillStyle = "rgba(255, 150, 230, 1)";

		ctx.save();
		const w = this.size.x || 1;
		const h = this.size.y || 1;

		ctx.translate(this.position.x - w / 2, this.position.y - h / 2);

		const skewX = Math.sin(this.rotation.y) * 0.75;
		const scaleX = Math.cos(this.rotation.y);

		const skewY = Math.sin(this.rotation.x) * 0.75;
		const scaleY = Math.cos(this.rotation.x);

		ctx.transform(
			scaleX * this.scale.x,
			skewY,
			skewX,
			scaleY * this.scale.y,
			0,
			0,
		);
		ctx.rotate(this.rotation.z);

		ctx.fillStyle = this.fillColor;
		ctx.fill(this.fillPath);

		// ctx.strokeStyle = "rgb(50, 255, 50)";
		// ctx.strokeRect(0, 0, w, h);
		ctx.restore();
	}

	update(dt: number, spawner: ParticleSpawner) {
		// Kill zone
		if (
			this.position.y >= document.body.scrollHeight + 100 ||
			this.position.x < -200 ||
			this.position.x > window.innerWidth + 200
		) {
			spawner.particles.delete(this);
			return;
		}

		if (this.lifespan <= 0) {
			spawner.particles.delete(this);
			return;
		}
		this.lifespan -= 1 * dt;

		// Position
		this.velocity.y += GRAVITY * dt;

		const dragXFactor = Math.max(0, 1 - this.drag.x * dt);
		const dragYFactor = Math.max(0, 1 - this.drag.y * dt);
		this.velocity.x *= dragXFactor;
		this.velocity.y *= dragYFactor;

		this.position.x += this.velocity.x * dt;
		this.position.y += this.velocity.y * dt;

		// Rotation
		const rotDragX = Math.max(0, 1 - this.rotDrag.x * dt);
		const rotDragY = Math.max(0, 1 - this.rotDrag.y * dt);
		const rotDragZ = Math.max(0, 1 - this.rotDrag.z * dt);

		this.rotVelocity.x *= rotDragX;
		this.rotVelocity.y *= rotDragY;
		this.rotVelocity.z *= rotDragZ;

		// Gravity rotation
		this.rotVelocity.x -= this.velocity.y * 0.003 * dt;

		this.rotation.x += this.rotVelocity.x * dt;
		this.rotation.y += this.rotVelocity.y * dt;
		this.rotation.z += this.rotVelocity.z * dt;
	}
}
