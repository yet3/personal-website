export const getCssVarValue = (v: string, fallback = 0): number => {
	const val = Number(
		getComputedStyle(document.documentElement).getPropertyValue(v).replaceAll("s", "")
	);

	if (Number.isNaN(val)) {
		return fallback;
	}

	return val * 1000;
};
