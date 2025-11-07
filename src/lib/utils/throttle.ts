export const throttle = <T extends (...args: unknown[]) => unknown>(
	callback: T,
	dur: number,
) => {
	let lastFunc: NodeJS.Timeout;
	let lastRan: number;

	return (...args: Parameters<T>) => {
		if (!lastRan) {
			callback(...args);
			lastRan = Date.now();
		} else {
			clearTimeout(lastFunc);
			lastFunc = setTimeout(
				() => {
					if (Date.now() - lastRan >= dur) {
						callback(...args);
						lastRan = Date.now();
					}
				},
				dur - (Date.now() - lastRan),
			);
		}
	};
};
