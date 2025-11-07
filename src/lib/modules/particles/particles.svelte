<script lang="ts">
	import { getParticlesSettings } from "$ctx/particles-settings-ctx";
	import { createGameLoop } from "$utils/game-loop";
	import { throttle } from "$utils/throttle";
	import { LeafParticle, makeLeafParticle } from "./make-particle";
	import { ParticleSpawner } from "./particle-spawner";

	const settings = getParticlesSettings();

	let canvas: HTMLCanvasElement | null = null;
	$effect(() => {
		if (!settings.isEnabled || !canvas) return;

		const ctx = canvas.getContext("2d");
		if (!ctx || !canvas) return;

		const bgColor = getComputedStyle(document.documentElement).getPropertyValue("--color-base-200");

		canvas.width = innerWidth;
		canvas.height = document.body.scrollHeight;

		const spawners = [
			new ParticleSpawner({
				x: -300,
				y: -100,
				width: canvas.width + 600,
				height: 80,

				spawnEvery: settings.spawnEvery,
				particles: [
					{
						particle: makeLeafParticle(LeafParticle.A),
						amount: [0, 2]
					},
					{
						particle: makeLeafParticle(LeafParticle.B),
						amount: [0, 2]
					},
					{
						particle: makeLeafParticle(LeafParticle.C),
						amount: [0, 2]
					},
					{
						particle: makeLeafParticle(LeafParticle.D),
						amount: [0, 2]
					},
					{
						particle: makeLeafParticle(LeafParticle.E),
						amount: [0, 2]
					},
					{
						particle: makeLeafParticle(LeafParticle.F),
						amount: [0, 2]
					}
				]
			})
		];

		const scale = settings.pixelation;

		const loop = createGameLoop({
			fps: settings.fps,
			onRender: () => {
				if (!ctx || !canvas) return;
				ctx.fillStyle = bgColor;
				ctx.fillRect(0, 0, canvas.width, canvas.height);

				let totalParticles = 0;
				for (const spawner of spawners) {
					totalParticles = spawner.particles.size;
					spawner.render(ctx);
				}

				ctx.save();
				ctx.imageSmoothingEnabled = false;
				ctx.scale(1 / scale, 1 / scale);
				ctx.drawImage(canvas, 0, 0);

				ctx.scale(scale, scale);
				ctx.drawImage(canvas, 0, 0, canvas.width * scale, canvas.height * scale);

				ctx.restore();

				// ctx.fillStyle = "black";
				// ctx.font = "25px Noto Sans";
				// ctx.fillText(`Particles - ${totalParticles}`, 20, 25);
			},
			onUpdate: (dt) => {
				for (const spawner of spawners) {
					spawner.update(dt);
				}
			}
		});
		loop.start();

		const handleResize = throttle(() => {
			if (!ctx || !canvas) return;
			canvas.width = window.innerWidth;
			canvas.height = document.body.scrollHeight;
		}, 50);

		const onVisibilityChange = () => {
			if (document.hidden) loop.destroy();
			else loop.start();
		};

		const resizeObserver = new ResizeObserver(handleResize);

		resizeObserver.observe(canvas);

		document.addEventListener("visibilitychange", onVisibilityChange);
		return () => {
			ctx?.reset();
			loop.destroy();
			document.removeEventListener("visibilitychange", onVisibilityChange);
		};
	});
</script>

<canvas class="absolute z-particles top-0 left-0 bg-base-200 w-full" bind:this={canvas}></canvas>
