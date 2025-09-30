interface IProps {
	onUpdate?: (dt: number) => void;
	onRender?: () => void;
	fps: number;
}

export const createGameLoop = ({ onUpdate, onRender, fps }: IProps) => {
	let animFrameId: number | null = null;
	let isRunning = false;
	const timestep = 1 / fps;
	let lastTime = 0;
	let accumulator = 0;

	return {
		start: () => {
			if (isRunning) return;
			lastTime = performance.now() / 1000;
			accumulator = 0;

			const loop = (nowRaw: DOMHighResTimeStamp) => {
				const now = nowRaw / 1000;
				const dt = now - lastTime;
				lastTime = now;

				accumulator += dt;

				while (accumulator >= timestep) {
					onUpdate?.(timestep);
					accumulator -= timestep;
				}
				onRender?.();

				if (isRunning) {
					animFrameId = requestAnimationFrame(loop);
				}
			};
			isRunning = true;
			animFrameId = requestAnimationFrame(loop);
		},
		destroy: () => {
			isRunning = false;
			if (animFrameId != null) {
				cancelAnimationFrame(animFrameId);
			}
		}
	};
};
