export const debounce = <T extends (...args: unknown[]) => unknown>(func: T, dur: number) => {
	let timeoutId: NodeJS.Timeout | null = null;

	return (...args: Parameters<T>) => {
		if (timeoutId !== null) {
			clearTimeout(timeoutId);
		}
		timeoutId = setTimeout(() => {
			func(...args);
		}, dur);
	};
};
