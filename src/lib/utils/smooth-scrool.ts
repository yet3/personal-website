interface IOpts {
	duration?: number;
	onFinish?: () => void;
}

const easing = (p: number): number => {
	return p < 0.5 ? 2 * p ** 2 : -1 + (4 - 2 * p) * p;
};

export const smoothScrollToY = (targetY: number, { duration = 250, onFinish }: IOpts) => {
	const startY = window.scrollY;
	const startTime = performance.now();

	let frameId: number | null;
	const handleFrame = (time: number) => {
		const elapsed = time - startTime;
		const progress = Math.min(elapsed / duration, 1);
		window.scrollTo(0, startY + (targetY - startY) * easing(progress));

		if (frameId != null && progress < 1) {
			frameId = requestAnimationFrame(handleFrame);
		} else {
			onFinish?.();
		}
	};
	frameId = requestAnimationFrame(handleFrame);

	return () => {
		if (frameId != null) {
			cancelAnimationFrame(frameId);
			frameId = null;
		}
	};
};

export const smoothScrollToEl = (
	el: HTMLElement,
	{ offsetY = 0, ...opts }: IOpts & { offsetY?: number }
) => {
	const rect = el.getBoundingClientRect();
	return smoothScrollToY(rect.y + window.scrollY + offsetY, opts);
};;
